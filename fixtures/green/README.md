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
passed a gate. It should be marked unmistakably as fixture, live outside `corpus/`, and use
invented essay ids (`E-X.1`, `E-X.2`) that can never collide with real ones.

---

## Dual-host equivalence

Per Edge-Canonical First, the same green corpus must produce identical findings — including
ordering — under both the Node and browser host profiles. Any difference is a declared
non-determinism owing a property, or a defect (`../../services/shared/README.md`).

---

## Register

*Empty.*

| Fixture | Exercises | Status |
|---|---|---|
| — | — | — |
