# gnomon-xref

**Status:** NOT BUILT. Contract sketch only — no code, no tests, no fixtures.

Cross-reference and glossary integrity. The service that catches a corpus citing itself into a shape it does not have.

---

## Checks — mechanical

- all handoffs resolve to existing IDs
- internal cross-references resolve
- carrier and essay declare matching jurisdiction ids

A mechanical check concludes that a claim is **present, well-formed, and cross-consistent.**
It concludes nothing about truth. Every finding this service emits must be readable as the
former and never as the latter.

---

## Gates — adjudicated

Carrier↔essay **fidelity**: does the carrier teach what the essay licenses, no more? The Carrier Test is human-gated.

Not implementable. Recorded here so the boundary is visible in the service that stops at it.

---

## Notes

"Resolves to an existing ID" needs defining before it is implemented, and the corpus is currently a worked example of why. E-I.2 hands off to E-III.1, E-III.2, E-I.3, and E-VI.1. All four ids exist as directories containing a `STATUS.md` and nothing else. A naive resolver reports green while every handoff in the corpus points at an empty room.

Proposed: resolution is graded, and a handoff to a not-started essay is a **declared open dependency**, not a pass. That keeps the check honest without making every handoff to future work an error — but it is a design decision, not an implementation detail, and belongs in the contract (O-SVC-01).

---

## Shape

Edge-Canonical First (`../README.md`):

```
xrefCore(corpusGraph) -> findings[]
```

| Piece | Status |
|---|---|
| Pure core | not written |
| Node host profile | not written |
| Browser host profile | not written |
| Dual-host equivalence suite | not written |
| Red fixtures | not seeded |

Blocked by **O-SVC-01** (no service contract, no shared findings schema).
