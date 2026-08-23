# gnomon-sources

**Status:** NOT BUILT. Contract sketch only — no code, no tests, no fixtures.

Citation pin verification. Ensures a ratified argument cannot be silently undermined by a source that moved.

---

## Checks — mechanical

- `sources.lock` SHA-256 pins verify against archived copies

A mechanical check concludes that a claim is **present, well-formed, and cross-consistent.**
It concludes nothing about truth. Every finding this service emits must be readable as the
former and never as the latter.

---

## Gates — adjudicated

Citation **aptness**: whether the source supports the claim made of it.

Not implementable. Recorded here so the boundary is visible in the service that stops at it.

---

## Notes

Zero citations are pinned corpus-wide, in two essays that cite heavily.

Two questions the format must answer before any code is written, both raised in the `sources.lock` stubs:

- **Classical texts.** Judge Not's argument turns on Aquinas's wording *in translation*. A canonical locator (`II-II q.60 a.3`) does not pin the words the argument uses; the edition does. So the edition is load-bearing and must be a required field.
- **Empirical literature.** Fruits cites psychology that can be retracted or fail replication. A hash pins the text but not whether the finding still stands — a retracted paper verifies green while the argument rots. Whether retraction-checking is mechanical (DOI status lookup) or adjudicated is undecided, and it is the one place this service could plausibly reach past structure toward truth.

---

## Shape

Edge-Canonical First (`../README.md`):

```
sourcesCore(corpusGraph) -> findings[]
```

| Piece | Status |
|---|---|
| Pure core | not written |
| Node host profile | not written |
| Browser host profile | not written |
| Dual-host equivalence suite | not written |
| Red fixtures | not seeded |

Blocked by **O-SVC-01** (no service contract, no shared findings schema).
