# Red fixtures — `jurisdiction.yaml` schema

**Generated** by the fixture generator, together with each `<name>.expected.yaml` beside it.
Source: the green base at `../../green/jurisdiction/minimal.yaml`, each red differing from it by
**exactly one factor** (FS method P2: nominal witness + one-factor deltas).

## The rule these fixtures enforce

CI passes only if every fixture below **fails**, *and fails at its expected path with its expected
keyword*.

Asserting only that a fixture fails is not enough, and this suite proved it: an early draft used
fixture ids (`E-X.1`) that violated the schema's id pattern, so all ten reds "failed" — every one
on the id, none on its planted fault. Ten green checkmarks over zero coverage. A fixture that
fails for the wrong reason is a green light wearing a red shirt.

So the assertion is on the **path and the keyword**, never the exit code.

## Register

| Fixture | File | Expected path | Keyword |
|---|---|---|---|
| **RF-01** | `empty-does-not-decide.yaml` | `/does_not_decide` | `minItems` |
| **RF-06** | `bare-declared.yaml` | `/invariants/INV-01` | `type` |
| **RF-09** | `inv03-character-licensed.yaml` | `/strata/character` | `enum` |
| **RF-10** | `inv03-destiny-defeasible.yaml` | `/strata/destiny` | `enum` |
| **RF-11** | `handoff-without-target.yaml` | `/does_not_decide/0` | `required` |
| **RF-12** | `reserved-at-accessible-stratum.yaml` | `/does_not_decide/1/stratum` | `enum` |
| **RF-13** | `empty-witness.yaml` | `/invariants/INV-01/witness` | `minItems` |
| **RF-14** | `vacuous-without-reason.yaml` | `/invariants/INV-04` | `required` |
| **RF-15** | `vacuity-on-universal-invariant.yaml` | `/invariants/INV-01/status` | `const` |
| **RF-16** | `ratified-without-version.yaml` | `/version` | `type` |
| **RF-17** | `ratified-under-on-corpus-artifact.yaml` | `/ratified-under` | `not` |
| **RF-18** | `conferred-without-record.yaml` | `/ratification` | `required` |

## Not covered here

These are schema-level checks over a single file. Faults spanning files — a dangling handoff
(RF-02), an orphaned essay (RF-03), a broken ledger hash chain (RF-04), a carrier claiming
undeclared jurisdiction (RF-05) — need the corpus graph and belong to `gnomon-xref`,
`gnomon-route`, and `gnomon-ledger`. See `../README.md`.

Note what the schema made impossible rather than caught: **RF-07** (a handoff resolving to an id
whose directory is empty) cannot be expressed as a single-file fixture at all, and **RF-08** (a
strata-4 verdict in vernacular prose) is outside mechanical reach by construction.
