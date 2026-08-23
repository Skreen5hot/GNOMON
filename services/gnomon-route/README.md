# gnomon-route

**Status:** NOT BUILT. Contract sketch only — no code, no tests, no fixtures.

Routing validator. Enforces bidirectional coverage — the completeness criterion's mechanical half.

---

## Checks — mechanical

- every `S-####` has a route or a `GAP-###`
- route targets exist
- **bidirectional coverage**: no situation without an essay, no essay without a situation
- contested-routing list empty at ratification

A mechanical check concludes that a claim is **present, well-formed, and cross-consistent.**
It concludes nothing about truth. Every finding this service emits must be readable as the
former and never as the latter.

---

## Gates — adjudicated

Routing correctness. A route is a judgment, and judgments get adjudicated.

Not implementable. Recorded here so the boundary is visible in the service that stops at it.

---

## Notes

The route schema does not exist (`routing/PROTOCOL.md` O-RTG-05), and "contested" is undefined (O-RTG-02) — a service cannot check that a list is empty when nothing defines what goes on it.

Note the asymmetry worth building for: the situation→essay direction fails loudly and is what everyone watches. The essay→situation direction is the one that catches the corpus flattering itself, and it currently fails for **both** ratified essays. Build that direction first.

---

## Shape

Edge-Canonical First (`../README.md`):

```
routeCore(corpusGraph) -> findings[]
```

| Piece | Status |
|---|---|
| Pure core | not written |
| Node host profile | not written |
| Browser host profile | not written |
| Dual-host equivalence suite | not written |
| Red fixtures | not seeded |

Blocked by **O-SVC-01** (no service contract, no shared findings schema).
