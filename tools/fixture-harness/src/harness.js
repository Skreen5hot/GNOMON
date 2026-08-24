/**
 * Fixture harness — pure core.
 *
 * No imports. No I/O. No ajv. The validator arrives as a function argument, which is what
 * lets this exact file run unmodified in Node and in a browser: a bundler would otherwise
 * be required to resolve ajv, and a build step is the thing Edge-Canonical First forbids.
 *
 * Scope: this is a fixture harness, not gnomon-lint. It answers one question — does the
 * schema catch the planted faults — and is absorbed by gnomon-lint at roadmap item 1.2.
 */

/**
 * A validation error, in the shape ajv reports. Any validator may be injected provided it
 * produces these three fields.
 * @typedef {Object} ValidationError
 * @property {string} instancePath JSON Pointer into the instance, e.g. "/strata/character"
 * @property {string} keyword      Schema keyword that fired, e.g. "enum"
 * @property {string} [message]
 */

/**
 * @callback Validate
 * @param {unknown} doc
 * @returns {ValidationError[]} empty when the document is valid
 */

/**
 * What a red fixture must do. Read from its `.expected.yaml`, never carried in code.
 * @typedef {Object} Expectation
 * @property {string} instancePath
 * @property {string} keyword
 */

/**
 * @typedef {Object} FixtureCase
 * @property {string} id
 * @property {'green'|'red'} kind
 * @property {unknown} doc
 * @property {Expectation} [expect] required when kind is 'red'
 * @property {string} [finding]     e.g. "RF-09"
 */

/**
 * @typedef {Object} CaseResult
 * @property {string} id
 * @property {'green'|'red'} kind
 * @property {string} [finding]
 * @property {boolean} ok
 * @property {'clean'|'caught'|'unexpected-errors'|'missed'|'wrong-path'|'wrong-keyword'|'no-expectation'} verdict
 * @property {string} detail
 * @property {ValidationError[]} errors
 */

/**
 * @typedef {Object} Report
 * @property {boolean} ok
 * @property {{green:{total:number,ok:number}, red:{total:number,ok:number}}} counts
 * @property {CaseResult[]} results
 */

/** @type {Record<string,string>} */
const VERDICT_TEXT = {
  clean: 'validated clean, as required',
  caught: 'failed at its expected path and keyword',
  'unexpected-errors': 'a green fixture MUST validate clean',
  missed: 'validated — the planted fault was not detected',
  'wrong-path': 'failed, but not at its expected path',
  'wrong-keyword': 'failed at the expected path, but a different rule fired',
  'no-expectation': 'a red fixture MUST carry an expectation file',
}

/**
 * Evaluate one fixture.
 * @param {Validate} validate
 * @param {FixtureCase} c
 * @returns {CaseResult}
 */
export function evaluateCase(validate, c) {
  const errors = validate(c.doc) || []
  /** @param {CaseResult['verdict']} v @param {boolean} ok @param {string} [extra] @returns {CaseResult} */
  const r = (v, ok, extra) => {
    const base = VERDICT_TEXT[v] ?? v
    return {
      id: c.id,
      kind: c.kind,
      finding: c.finding,
      ok,
      verdict: v,
      detail: extra ? `${base} — ${extra}` : base,
      errors,
    }
  }

  if (c.kind === 'green') {
    if (errors.length === 0) return r('clean', true)
    const first = errors[0]
    const where = first ? `${first.instancePath || '(root)'}: ${first.message || first.keyword}` : 'unknown'
    return r('unexpected-errors', false, `${errors.length} error(s), first at ${where}`)
  }

  // red
  if (!c.expect) return r('no-expectation', false)
  if (errors.length === 0) return r('missed', false)

  const atPath = errors.filter((e) => e.instancePath === c.expect?.instancePath)
  if (atPath.length === 0) {
    const seen = [...new Set(errors.map((e) => e.instancePath || '(root)'))]
    return r('wrong-path', false, `want ${c.expect.instancePath}, got ${seen.join(', ')}`)
  }

  const hit = atPath.some((e) => e.keyword === c.expect?.keyword)
  if (!hit) {
    const seen = [...new Set(atPath.map((e) => e.keyword))]
    return r('wrong-keyword', false, `want ${c.expect.keyword}, got ${seen.join(', ')}`)
  }

  return r('caught', true)
}

/**
 * Evaluate every fixture. The suite is green only when every green validates clean AND
 * every red fails at its expected path and keyword.
 *
 * "Fails at all" is deliberately not sufficient: an early draft of this suite used essay
 * ids that violated the schema's id pattern, so all ten reds failed on the id and none on
 * its planted fault — ten green checkmarks over zero coverage.
 *
 * @param {Validate} validate
 * @param {FixtureCase[]} cases
 * @returns {Report}
 */
export function evaluateAll(validate, cases) {
  const results = cases.map((c) => evaluateCase(validate, c))
  const of = (/** @type {'green'|'red'} */ k) => {
    const set = results.filter((r) => r.kind === k)
    return { total: set.length, ok: set.filter((r) => r.ok).length }
  }
  const counts = { green: of('green'), red: of('red') }
  return { ok: results.every((r) => r.ok) && counts.green.total > 0 && counts.red.total > 0, counts, results }
}

/**
 * Render a report as plain text. Kept in the core so both hosts print identically —
 * a dual-host equivalence suite compares this string.
 * @param {Report} report
 * @returns {string}
 */
export function formatReport(report) {
  const lines = []
  const pad = (/** @type {string} */ s, /** @type {number} */ n) => s.padEnd(n)

  for (const kind of /** @type {const} */ (['green', 'red'])) {
    const set = report.results.filter((r) => r.kind === kind)
    if (!set.length) continue
    lines.push(kind === 'green'
      ? '  GREEN — must validate clean'
      : '  RED — must fail at the expected path and keyword')
    for (const r of set.sort((a, b) => a.id.localeCompare(b.id))) {
      lines.push(`    ${r.ok ? 'ok  ' : 'FAIL'}  ${pad(r.finding || '', 6)} ${pad(r.id, 34)} ${r.detail}`)
    }
    lines.push('')
  }

  const { green, red } = report.counts
  lines.push(`  green ${green.ok}/${green.total} · red ${red.ok}/${red.total}`)
  lines.push(report.ok
    ? '  SUITE GREEN — the schema catches every planted fault'
    : '  SUITE RED — a fixture did not behave as its expectation requires')
  return lines.join('\n')
}
