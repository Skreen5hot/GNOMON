# Red fixtures

**Status:** **EMPTY — no fixture seeded.** Blocked on the `jurisdiction.yaml` schema and the
findings schema (`../../services/README.md` O-SVC-01, `SVC-1`).

Seeded violations. **CI passes only if every red fixture fails.**

> A linter that cannot catch the planted fault is not a linter; it is reassurance.

---

## The rule

A red fixture is a deliberately broken minimal corpus. The suite asserts that the service
**emits the expected finding** — not merely that it exits non-zero. An exit code says something
went wrong; it does not say the linter found *this* fault. A fixture that fails for the wrong
reason is a green light wearing a red shirt, and it is the characteristic way a red-test suite
rots.

Each fixture therefore pins: the fault, the service that must catch it, the expected finding
id, and the location the finding must name.

---

## Required fixtures

The five named in `README.md`, plus what each is actually protecting.

| # | Seeded fault | Caught by | Protects |
|---|---|---|---|
| **R-01** | Essay with empty `does_not_decide` | `gnomon-lint` | The corpus's central discipline: the claim of jurisdiction is inseparable from the disclaimer of it. If this check fails silently, every other guarantee is decorative. |
| **R-02** | Dangling handoff — `handoffs:` names an id that does not exist | `gnomon-xref` | Against a corpus that routes its declined questions into the void and reports coverage anyway. |
| **R-03** | Orphaned essay — no situation routes to it | `gnomon-route` | Dead jurisdiction. The direction nobody watches, and the one the live corpus currently fails on both ratified essays. |
| **R-04** | Broken hash chain in a ledger | `gnomon-ledger` | Tamper-evidence of the adjudication record. Without it, "every finding dispositioned" is an unverifiable assertion. |
| **R-05** | Carrier claiming jurisdiction the essay does not declare | `gnomon-xref` | The Carrier Test's mechanical half — a carrier that teaches *more* than the essay licenses. The characteristic failure of vernacular writing, and the one that would put an undeclared verdict into plain language where it travels furthest. |

---

## Fixtures worth adding beyond the five

Raised here rather than lost; not ratified.

| # | Seeded fault | Caught by | Why |
|---|---|---|---|
| **R-06** | Rubber-stamp declaration — all five invariants `declared` on an essay that plainly violates one | `gnomon-lint` | Tests that the declaration vocabulary distinguishes a declaration from a claim (`INVARIANTS.md` O-INV-02). Note this fixture can only assert the *mechanical* half — that the vocabulary permits the distinction — since conformance itself is adjudicated. Worth seeding precisely to keep that boundary visible. |
| **R-07** | Handoff resolving to an id whose directory contains no artifacts | `gnomon-xref` | The vacuous-pass case. Every handoff in the live corpus is currently this. |
| **R-08** | Strata-4 verdict in a carrier — plain-language essence claim ("what he really is") | `gnomon-lint` / adjudicated | Probably **not** mechanizable, and worth seeding as a fixture that documents *why*: it marks where the mechanical line genuinely stops, in the suite rather than only in prose. |

---

## Register

*Empty.*

| Fixture | Fault | Service | Expected finding | Status |
|---|---|---|---|---|
| — | — | — | — | — |
