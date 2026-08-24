# Green fixtures

**Status:** **EMPTY — no fixture seeded.** Blocked on the same schemas as `../red/`.

A known-good minimal corpus: the smallest complete thing that passes every mechanical check.

---

## What "minimal" has to mean here

Not a trimmed copy of the live corpus. A green fixture must exercise every mechanical check at
least once, which means it needs, at minimum:

- two essays, so that a handoff has somewhere to resolve **to**
- a non-empty `does_not_decide` on each, with at least one handoff actually traversed
- one carrier, so carrier↔essay id matching has a subject
- one situation and one adjudicated route, so bidirectional coverage can pass rather than pass vacuously
- one gap, so the gap path is exercised — a fixture where nothing is missing never runs that code
- one ledger with a verifying chain of at least two entries, since a one-entry chain verifies trivially
- one pinned source

Anything smaller passes by having nothing to check, which is the green-fixture equivalent of the
vacuous handoff (`../../services/gnomon-xref/README.md`).

---

## The fixture is also a specification

The green corpus is the clearest statement of what a conformant essay looks like, and it will be
read as a template whether or not it is offered as one. It should therefore be written as an
*example worth imitating* — real prose, honest jurisdiction, a route that required a judgment —
not lorem ipsum with the right keys. A green fixture full of placeholder text teaches authors
that the panels are paperwork.

The counter-pressure is real: a fixture with genuine prose is a corpus artifact that never
passed a gate. It should be marked unmistakably as fixture and live outside `corpus/`.

**Correction, recorded rather than quietly fixed.** An earlier draft of this file recommended
invented essay ids — `E-X.1`, `E-X.2` — "that can never collide with real ones." That advice was
wrong, and building the first fixture proved it: `E-X.1` violates the schema's id pattern, so
the green base failed and all ten reds failed *on the id* rather than on their planted faults.
The suite was fully green while testing nothing.

Fixture ids MUST be schema-valid. Collision with a real essay is prevented by **location** —
fixtures live outside `corpus/`, which is the only tree the linter walks — not by id shape. A
schema that special-cases test data has a hole in production validation, which is the more
expensive of the two problems. Current fixtures use `E-I.99` and `E-I.98`.

---

## Dual-host equivalence

Per Edge-Canonical First, the same green corpus must produce identical findings — including
ordering — under both the Node and browser host profiles. Any difference is a declared
non-determinism owing a property, or a defect (`../../services/shared/README.md`).

---

## Register

| Fixture | Exercises | Status |
|---|---|---|
| `jurisdiction/minimal.yaml` | Every `jurisdiction.yaml` schema constraint: all three `does_not_decide` dispositions, the graded strata map, both invariant statuses, a carrier link | **validates clean** |

The minimal panel is also the base for every red fixture in `../red/jurisdiction/`, each a
one-factor delta from it. That coupling is deliberate: when the schema changes, the green base
changes once and all ten reds follow, so the suite cannot drift into testing a shape the schema
no longer has.

**Still missing.** The list above the fold — two essays, a route, a gap, a ledger chain, a
pinned source — remains unbuilt. Those exercise cross-file checks that need the corpus graph,
so they arrive with `gnomon-xref`, `gnomon-route`, and `gnomon-ledger`, not before.
