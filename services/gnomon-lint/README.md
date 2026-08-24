# gnomon-lint

**Status:** NOT BUILT — but **unblocked**. No code yet. The two dependencies that blocked it are
resolved:

- **Schema:** [`SCHEMA.md`](SCHEMA.md) (normative prose) + [`jurisdiction.schema.json`](jurisdiction.schema.json)
  (JSON Schema 2020-12). v1.0, G0 draft.
- **Declaration vocabulary:** fixed at `../../INVARIANTS.md` §Declaration — every declaration
  carries a witness, two statuses, no waiver.
- **Fixtures:** one green base + ten red one-factor deltas in `../../fixtures/`, all verified
  failing at their expected paths.

Invariant and schema linter. **First build target (SVC-1)** — every gate depends on it: G0 exit requires `jurisdiction.yaml` linting green, and G3 requires a corpus-wide green.

---

## Checks — mechanical

- `jurisdiction.yaml` schema validity
- INV-01…05 declarations present
- `does_not_decide` **non-empty** — the single most load-bearing check in the corpus
- front-matter and version strings well-formed
- controlled vocabulary used per `GLOSSARY.md`

A mechanical check concludes that a claim is **present, well-formed, and cross-consistent.**
It concludes nothing about truth. Every finding this service emits must be readable as the
former and never as the latter.

---

## Gates — adjudicated

Semantic invariant conformance: does the essay *actually* honor INV-03? Reviewed at G1, dispositioned at G2.

Not implementable. Recorded here so the boundary is visible in the service that stops at it.

---

## Notes

Both blocking dependencies are discharged. What remains is implementation.

**Verified against the live corpus.** The schema was run over both real panels:

| Panel | Result |
|---|---|
| `corpus/I-epistemology/judge-not/jurisdiction.yaml` | **validates clean** |
| `corpus/I-epistemology/fruits-of-the-spirit/jurisdiction.yaml` | **15 errors** — empty `decides`, empty `does_not_decide`, empty `axes`, empty `registers`, and five undeclared invariants |

The Fruits failures are correct and MUST NOT be silenced. E-I.1 is listed as ratified v2.0 having
never declared a jurisdiction; the linter is reporting the finding, not creating it.

**What implementation still owes.** The JSON Schema covers single-file structure only. These
checks are named in the table above and are *not* expressible in it — they need the corpus graph:

- `id` uniqueness corpus-wide, and agreement between id, `movement`, and directory position
- `title` matching the `ESSAY.md` H1; `carrier` matching `CARRIER.md`
- `gate` agreeing with the ledger's latest entry (and O-SCH-04: which is canonical)
- witness locators resolving against real headings (O-SCH-01) — the check that makes the witness
  rule bite rather than merely require a well-formed string
- controlled vocabulary per `GLOSSARY.md`

**A note on runtime.** The fixtures are language-agnostic YAML and the schema is standard JSON
Schema 2020-12; both were verified with an off-the-shelf validator. Nothing here commits the
service to a language. Edge-Canonical First implies a JS/TS core with Node and browser host
profiles, and no `node_modules` has been added to this repository yet — that is SVC-1's first act.

---

## Shape

Edge-Canonical First (`../README.md`):

```
lintCore(corpusGraph) -> findings[]
```

| Piece | Status |
|---|---|
| Pure core | not written |
| Node host profile | not written |
| Browser host profile | not written |
| Dual-host equivalence suite | not written |
| Red fixtures | not seeded |

Blocked by **O-SVC-01** (no service contract, no shared findings schema).
