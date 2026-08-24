#!/usr/bin/env node
/**
 * CLI entry. Exits 0 only when the suite is green.
 *
 * Deliberately narrow: it does not lint the corpus. Whether E-I.1's panel is conformant is
 * gnomon-lint's question (roadmap 1.2); whether the schema catches its planted faults is this
 * harness's, and conflating them is how a fixture suite quietly becomes a corpus linter that
 * nobody reviewed.
 */

import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { evaluateAll, formatReport } from './harness.js'
import { loadSuite, makeValidator } from './node.js'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = process.argv[2] ? resolve(process.argv[2]) : resolve(here, '../../..')

const { schema, cases, problems } = loadSuite(repoRoot)
const report = evaluateAll(makeValidator(schema), cases)

console.log(`\ngnomon fixture harness — ${repoRoot}\n`)
console.log(formatReport(report))

if (problems.length) {
  console.log('\n  SUITE PROBLEMS')
  for (const p of problems) console.log(`    ${p}`)
}

const ok = report.ok && problems.length === 0
console.log('')
process.exit(ok ? 0 : 1)
