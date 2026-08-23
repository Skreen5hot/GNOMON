# gnomon-ledger

**Status:** NOT BUILT. Contract sketch only — no code, no tests, no fixtures.

Ledger closure and hash-chain verification. Makes the adjudication record tamper-evident.

---

## Checks — mechanical

- every finding has a disposition (ACCEPT / MODIFY / REJECT) and a location
- version strings monotone
- ledger hash-chain verifies

A mechanical check concludes that a claim is **present, well-formed, and cross-consistent.**
It concludes nothing about truth. Every finding this service emits must be readable as the
former and never as the latter.

---

## Gates — adjudicated

Disposition quality. That a finding was dispositioned is mechanical; that it was dispositioned *well* is not.

Not implementable. Recorded here so the boundary is visible in the service that stops at it.

---

## Notes

No ledger in the corpus is machine-checkable yet. `corpus/I-epistemology/judge-not/LEDGER.md` carries 12 transcribed findings whose dispositions are prose, unclassified against the three-value vocabulary; `corpus/I-epistemology/fruits-of-the-spirit/LEDGER.md` has none.

Design question for the contract: the ACCEPT/MODIFY/REJECT vocabulary may be too coarse. Judge Not's J-05 dissolved a contradiction by introducing a distinction neither the finding nor the reviewer proposed — that is not obviously any of the three, and the FS method's own register (PR-M1) uses four values including *resolved otherwise than proposed*. Inheriting the method's vocabulary rather than minting a narrower one is worth considering.

---

## Shape

Edge-Canonical First (`../README.md`):

```
ledgerCore(corpusGraph) -> findings[]
```

| Piece | Status |
|---|---|
| Pure core | not written |
| Node host profile | not written |
| Browser host profile | not written |
| Dual-host equivalence suite | not written |
| Red fixtures | not seeded |

Blocked by **O-SVC-01** (no service contract, no shared findings schema).
