/**
 * Node host profile. Supplies the two capabilities the pure core refuses to hold:
 * filesystem access and a validator implementation.
 *
 * A browser host would export the same `loadSuite`/`makeValidator` pair over fetch and its
 * own validator, and a dual-host equivalence suite would compare `formatReport` output from
 * both. Per R-13 that equivalence gates the *service's* ratification, not first internal use,
 * so the browser profile is deliberately absent here.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join, basename } from 'node:path'
import ajvModule from 'ajv/dist/2020.js'
import { parse as parseYaml } from 'yaml'

// ajv 8 ships CJS. Node's interop hands back the constructor directly, but some bundlers
// hand back the module namespace, so accept either. No build step is involved in resolving
// this — it is a runtime check, which is the point.
const Ajv2020 = /** @type {new (opts?: object) => { compile: (s: object) => { (d: unknown): boolean, errors?: unknown[] | null } }} */ (
  /** @type {any} */ (ajvModule).default ?? ajvModule
)

/** @typedef {import('./harness.js').FixtureCase} FixtureCase */
/** @typedef {import('./harness.js').Validate} Validate */

/**
 * Build a validator over the jurisdiction schema.
 * @param {object} schema
 * @returns {Validate}
 */
export function makeValidator(schema) {
  // allErrors is required, not cosmetic: the harness asserts on a specific path, and with
  // short-circuiting ajv may report only the first error and hide the one under test.
  const ajv = new Ajv2020({ allErrors: true, strict: false })
  const validate = ajv.compile(schema)
  return (doc) => {
    validate(doc)
    return /** @type {import('./harness.js').ValidationError[]} */ (validate.errors || [])
  }
}

/**
 * Read the fixture suite from disk.
 *
 * Expectations are read from `<name>.expected.yaml` beside each red fixture — never carried
 * in this file. A harness that holds its own expectations can be edited into agreement with
 * whatever the schema happens to do.
 *
 * @param {string} repoRoot
 * @returns {{schema: object, cases: FixtureCase[], problems: string[]}}
 */
export function loadSuite(repoRoot) {
  /** @type {string[]} */
  const problems = []
  const schema = JSON.parse(
    readFileSync(join(repoRoot, 'services/gnomon-lint/jurisdiction.schema.json'), 'utf8'),
  )

  /** @type {FixtureCase[]} */
  const cases = []

  const greenDir = join(repoRoot, 'fixtures/green/jurisdiction')
  for (const f of readdirSync(greenDir).filter((f) => f.endsWith('.yaml'))) {
    cases.push({
      id: basename(f, '.yaml'),
      kind: 'green',
      doc: parseYaml(readFileSync(join(greenDir, f), 'utf8')),
    })
  }

  const redDir = join(repoRoot, 'fixtures/red/jurisdiction')
  for (const f of readdirSync(redDir).filter((f) => f.endsWith('.yaml') && !f.endsWith('.expected.yaml'))) {
    const id = basename(f, '.yaml')
    const expPath = join(redDir, `${id}.expected.yaml`)
    if (!existsSync(expPath)) {
      problems.push(`${id}: no ${id}.expected.yaml — a red fixture without an expectation cannot be asserted on`)
      cases.push({ id, kind: 'red', doc: parseYaml(readFileSync(join(redDir, f), 'utf8')) })
      continue
    }
    const exp = parseYaml(readFileSync(expPath, 'utf8'))
    cases.push({
      id,
      kind: 'red',
      finding: exp?.finding,
      expect: exp?.expect,
      doc: parseYaml(readFileSync(join(redDir, f), 'utf8')),
    })
  }

  return { schema, cases, problems }
}
