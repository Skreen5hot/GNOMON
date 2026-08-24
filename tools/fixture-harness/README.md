# Fixture harness

**Roadmap 0.12 · O-SVC-05.** `ratified-under: bootstrap` · `bootstrap-entry: BE-008`.

Asserts that the jurisdiction schema catches its planted faults. Run it:

```
cd tools/fixture-harness
npm ci
npm test          # the suite
npm run typecheck # tsc --checkJs over the JSDoc types
```

Exits non-zero unless the green base validates clean **and** every red fixture fails at its
expected path with its expected keyword.

---

## What this is not

**Not `gnomon-lint`.** It does not lint the corpus, and it must not grow into doing so.
E-I.1's panel is non-conformant on purpose; reporting that is `gnomon-lint`'s job at roadmap
1.2, which absorbs this harness. A fixture harness that quietly became a corpus linter would
be a service nobody reviewed — the exact failure `CHARTER.md` §2.3 exists to prevent.

**Not a service.** No `shared/` corpus graph, no findings schema, no browser host. Per R-13
dual-host equivalence gates the *service's* ratification, not first internal use.

---

## Why it exists

The corpus has claimed since the fixtures were seeded that

> CI passes only if every red fixture fails.

That claim had no witness. The verifier lived in a scratch directory and was discarded, so
`verified against 11 fixtures` was **declared, not witnessed** — the corpus's own distinction,
turned on the corpus. Anyone reading the repository could see eleven fixtures and no way to
re-run them.

---

## The contract

| | Requirement |
|---|---|
| **Green** | validates clean — zero errors |
| **Red** | fails **at its expected `instancePath`** with its **expected `keyword`** |
| **Expectations** | live in `<name>.expected.yaml` beside each red fixture, as data |
| **Anything else** | fails the run |

### Why "fails at all" is not enough

An earlier draft of this suite used essay ids (`E-X.1`) that violated the schema's own id
pattern. All ten reds failed — every one of them on the id, none on its planted fault. Ten
green checkmarks over zero coverage.

A fixture that fails for the wrong reason is a green light wearing a red shirt, and it is how
a red-test suite rots. So the assertion is on the **path and the keyword**, not the exit code.

### Why expectations are data, not code

The first harness carried its expected paths inside itself. A harness that holds its own
expectations can be edited into agreement with whatever the schema happens to do, and the
edit looks like a fix. `<name>.expected.yaml` sits beside the fixture, is diffed with it, and
is reviewable on its own.

---

## Shape

```
src/harness.js   pure core — no imports, no I/O, no ajv
src/node.js      Node host — filesystem + ajv
src/cli.js       entry point
```

The core takes its validator as an argument. That is not indirection for its own sake: it is
what lets `harness.js` run unmodified in Node and in a browser, because importing ajv directly
would require a bundler, and a build step is what Edge-Canonical First forbids. `formatReport`
lives in the core so both hosts print identically and a future equivalence suite can compare
the strings.

Types are JSDoc, checked with `tsc --checkJs` under `strict` and `noUncheckedIndexedAccess`.
Zero build step: the files that run are the files that ship.

---

## Verified behaviour

The harness was mutation-tested — a suite that has only ever reported green is itself
reassurance:

| Mutation | Verdict | Caught |
|---|---|---|
| Red fixture repaired (fault removed) | `missed` | yes |
| Expectation points at the wrong path | `wrong-path` | yes |
| Right path, wrong rule asserted | `wrong-keyword` | yes |
| `expected.yaml` deleted | suite problem | yes |

Mutation two is the decisive one: it is the case that "fails at all" would have passed.

---

## CI

`.github/workflows/fixtures.yml` — Node 24 (active LTS, the floor in `engines` and `.nvmrc`)
and 25 (current). Typecheck then suite. A second job guards the `.gitattributes` line-ending
invariant with `git ls-files --eol`.

That guard's first draft grepped for a carriage return and was wrong in the dangerous
direction: a bare CR passed as a shell argument left the pattern empty, so it matched every
line and reported all 56 tracked text files as CRLF when the index was entirely clean. A guard
that cries wolf on every push gets deleted, and then nothing guards the invariant.

---

## Absorption

`gnomon-lint` takes this over at roadmap 1.2. At that point the core moves under
`services/gnomon-lint/`, the fixtures and their expectations stay where they are — they are
language-agnostic data and always were — and this directory is removed. Nothing here reorders
Phase 1.
