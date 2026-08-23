# gnomon-lint

**Status:** NOT BUILT. Contract sketch only — no code, no tests, no fixtures.

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

Two dependencies are unmet and both are upstream of any code:

- The `jurisdiction.yaml` schema does not exist. Two files claim the shape today and they disagree — `corpus/I-epistemology/judge-not/jurisdiction.yaml` (transcribed from an abridged README example) and `corpus/I-epistemology/fruits-of-the-spirit/jurisdiction.yaml` (a stub that adds a `status` key). Reconciling them is the schema's first job.
- `INVARIANTS.md` has no normative text and no declaration vocabulary (O-INV-02). "INV-01…05 declarations present" is checkable; whether `declared` on all five means anything is not, until the vocabulary distinguishes a declaration from a rubber stamp.

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
