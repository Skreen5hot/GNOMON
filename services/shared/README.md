# shared — pure cores and host profiles

**Status:** NOT BUILT. Contract sketch only — no code, no tests, no fixtures.

Shared substrate: the pure cores every service composes from, plus the Node and browser host profiles and the dual-host equivalence suite.

---

## Checks — mechanical

None of its own. This directory holds the substrate the other five build on: corpus-graph construction, the findings schema, the report contract, and the host adapters.

A mechanical check concludes that a claim is **present, well-formed, and cross-consistent.**
It concludes nothing about truth. Every finding this service emits must be readable as the
former and never as the latter.

---

## Gates — adjudicated

None. The substrate carries no judgments.

Not implementable. Recorded here so the boundary is visible in the service that stops at it.

---

## Notes

The corpus graph is the real design work here, and it is not specified. Every service consumes `corpusGraph`, so its shape determines what all five can check. At minimum it must carry: essays with their jurisdiction panels, handoff edges, situations, routes, gaps, glossary terms, ledger chains, and source pins — with enough provenance on each node that a finding can name a file and a line.

Per FS method P6, any non-determinism in graph construction (ordering, filesystem traversal) must be **declared** and masked with a property, not left implicit. Two hosts producing findings in different orders is the first equivalence-suite failure anyone will hit.

---

## Shape

Edge-Canonical First (`../README.md`):

```
sharedCore(corpusGraph) -> findings[]
```

| Piece | Status |
|---|---|
| Pure core | not written |
| Node host profile | not written |
| Browser host profile | not written |
| Dual-host equivalence suite | not written |
| Red fixtures | not seeded |

Blocked by **O-SVC-01** (no service contract, no shared findings schema).
