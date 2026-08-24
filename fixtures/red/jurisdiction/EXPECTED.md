# Red fixtures — `jurisdiction.yaml` schema

**Generated.** Source: the green base at `../../green/jurisdiction/minimal.yaml`, each red
differing from it by **exactly one factor** (FS method P2: nominal witness + one-factor deltas).

## The rule these fixtures enforce

CI passes only if every fixture below **fails**, *and fails at its expected path*.

Asserting only that a fixture fails is not enough, and this suite proved it: an early draft
used fixture ids (`E-X.1`) that violated the id pattern, so all ten reds "failed" — every one
of them on the id, none on its planted fault. The suite was fully green while testing nothing.
A fixture that fails for the wrong reason is a green light wearing a red shirt.

So the assertion is on the **path**, not the exit code.

## Register

| Fixture | File | Expected failure path |
|---|---|---|
| **R-01** | `empty-does-not-decide.yaml` | `does_not_decide` |
| **R-06** | `bare-declared.yaml` | `invariants/INV-01` |
| **R-09** | `inv03-character-licensed.yaml` | `strata/character` |
| **R-10** | `inv03-destiny-defeasible.yaml` | `strata/destiny` |
| **R-11** | `handoff-without-target.yaml` | `does_not_decide/0` |
| **R-12** | `reserved-at-accessible-stratum.yaml` | `does_not_decide/1/stratum` |
| **R-13** | `empty-witness.yaml` | `invariants/INV-01/witness` |
| **R-14** | `vacuous-without-reason.yaml` | `invariants/INV-04` |
| **R-15** | `vacuity-on-universal-invariant.yaml` | `invariants/INV-01/status` |
| **R-16** | `ratified-without-version.yaml` | `version` |

## Not covered here

These are schema-level checks over a single file. Faults spanning files — a dangling handoff
to a nonexistent essay (R-02), an orphaned essay no situation routes to (R-03), a broken ledger
hash chain (R-04), a carrier claiming undeclared jurisdiction (R-05) — need the corpus graph and
belong to `gnomon-xref`, `gnomon-route`, and `gnomon-ledger`. See `../README.md`.

Note what the schema made impossible rather than caught: **R-07** (a handoff resolving to an id
whose directory is empty) cannot be expressed as a single-file fixture at all, and **R-08** (a
strata-4 verdict in vernacular prose) remains outside mechanical reach by construction.
