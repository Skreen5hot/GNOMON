# Red fixtures

**Status:** **10 schema-level fixtures seeded** in [`jurisdiction/`](jurisdiction/), all
verified to fail at their expected paths. Cross-file fixtures remain blocked on the corpus
graph and the findings schema (`../../services/README.md` O-SVC-01).

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

**This is not hypothetical.** The first draft of the `jurisdiction/` suite hit it immediately:
the fixtures used essay ids (`E-X.1`) that violated the schema's id pattern, so all ten reds
"failed" — every one on the id, none on its planted fault. Ten green checkmarks, zero coverage.
The suite now asserts on the **error path**, and each fixture records its expected path in its
own header. See [`jurisdiction/EXPECTED.md`](jurisdiction/EXPECTED.md).

---

## Required fixtures

The five named in `README.md`, plus what each is actually protecting.

| # | Seeded fault | Caught by | Protects |
|---|---|---|---|
| **RF-01** | Essay with empty `does_not_decide` | `gnomon-lint` | The corpus's central discipline: the claim of jurisdiction is inseparable from the disclaimer of it. If this check fails silently, every other guarantee is decorative. |
| **RF-02** | Dangling handoff — `handoffs:` names an id that does not exist | `gnomon-xref` | Against a corpus that routes its declined questions into the void and reports coverage anyway. |
| **RF-03** | Orphaned essay — no situation routes to it | `gnomon-route` | Dead jurisdiction. The direction nobody watches, and the one the live corpus currently fails on both ratified essays. |
| **RF-04** | Broken hash chain in a ledger | `gnomon-ledger` | Tamper-evidence of the adjudication record. Without it, "every finding dispositioned" is an unverifiable assertion. |
| **RF-05** | Carrier claiming jurisdiction the essay does not declare | `gnomon-xref` | The Carrier Test's mechanical half — a carrier that teaches *more* than the essay licenses. The characteristic failure of vernacular writing, and the one that would put an undeclared verdict into plain language where it travels furthest. |

---

## Fixtures worth adding beyond the five

Raised here rather than lost; not ratified.

| # | Seeded fault | Caught by | Why |
|---|---|---|---|
| **RF-06** | Rubber-stamp declaration — all five invariants `declared` on an essay that plainly violates one | `gnomon-lint` | Tests that the declaration vocabulary distinguishes a declaration from a claim (`INVARIANTS.md` O-INV-02). Note this fixture can only assert the *mechanical* half — that the vocabulary permits the distinction — since conformance itself is adjudicated. Worth seeding precisely to keep that boundary visible. |
| **RF-07** | Handoff resolving to an id whose directory contains no artifacts | `gnomon-xref` | The vacuous-pass case. Every handoff in the live corpus is currently this. |
| **RF-08** | Strata-4 verdict in a carrier — plain-language essence claim ("what he really is") | `gnomon-lint` / adjudicated | Probably **not** mechanizable, and worth seeding as a fixture that documents *why*: it marks where the mechanical line genuinely stops, in the suite rather than only in prose. |

---

## Register

**Schema-level** — `jurisdiction/`, one-factor deltas off `../green/jurisdiction/minimal.yaml`.
All ten verified failing at their expected paths.

| Fixture | Fault | Service | Expected path | Status |
|---|---|---|---|---|
| **RF-01** | Empty `does_not_decide` | `gnomon-lint` | `does_not_decide` | **caught** |
| **RF-06** | Bare `declared` — the v0 rubber stamp | `gnomon-lint` | `invariants/INV-01` | **caught** |
| **RF-09** | `strata.character: licensed` — INV-03 | `gnomon-lint` | `strata/character` | **caught** |
| **RF-10** | `strata.destiny: defeasible` — INV-03 | `gnomon-lint` | `strata/destiny` | **caught** |
| **RF-11** | Handoff with no target | `gnomon-lint` | `does_not_decide/0` | **caught** |
| **RF-12** | `reserved` cited at an accessible stratum | `gnomon-lint` | `does_not_decide/1/stratum` | **caught** |
| **RF-13** | Declaration with an empty witness | `gnomon-lint` | `invariants/INV-01/witness` | **caught** |
| **RF-14** | Vacuity asserted without a reason | `gnomon-lint` | `invariants/INV-04` | **caught** |
| **RF-15** | Vacuity claimed on a universal invariant | `gnomon-lint` | `invariants/INV-01/status` | **caught** |
| **RF-16** | Ratified at G3 with no version | `gnomon-lint` | `version` | **caught** |

**Cross-file** — not seeded. These need the corpus graph.

| # | Fault | Service | Blocked on |
|---|---|---|---|
| **RF-02** | Dangling handoff to a nonexistent id | `gnomon-xref` | corpus graph |
| **RF-03** | Orphaned essay — no situation routes to it | `gnomon-route` | route schema, O-RTG-05 |
| **RF-04** | Broken ledger hash chain | `gnomon-ledger` | ledger schema |
| **RF-05** | Carrier claiming undeclared jurisdiction | `gnomon-xref` | corpus graph |
| **RF-07** | Handoff resolving to an id whose directory is empty | `gnomon-xref` | corpus graph |
| **RF-08** | Strata-4 verdict in vernacular prose | *adjudicated* | not mechanizable — seeded to document the boundary |
