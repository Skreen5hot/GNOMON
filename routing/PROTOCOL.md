# The Routing Test — Protocol

**Status:** v0.1 — **stub.** The four-step protocol and the completeness criterion are carried
from `README.md`. The adjudication procedure, the contested-routing mechanism, the gap→charter
mechanics, and the window size are **not yet specified.** No completeness claim may be made
under this file until it reaches v1.0.

---

## What the test is for

The corpus's completeness criterion, falsifiable, in the house method. It answers a question
no amount of internal review can: *does this corpus actually cover moral life, or only the
parts we thought to write about?*

---

## Protocol

### 1. Situations

Concrete cases written in ordinary language, identified `S-####`.

**No situation may be authored to fit an essay.** Situations come from life, review sessions,
reader questions, and adversarial contribution. This is the rule the whole test depends on: a
corpus that writes its own test cases has measured nothing. It is also the rule most easily
broken without noticing, and the one this stub is least able to enforce — see O-RTG-04.

### 2. Routing

Each situation is adjudicated to a route: primary jurisdiction, contributing essays, and the
handoff chain. Routes are recorded at `routes/S-####.route.yaml` and are themselves reviewable
artifacts — a route is a judgment, and judgments get adjudicated.

### 3. Gaps

A situation that routes nowhere files a `GAP-###` in `gaps/`.

**A gap is not a failure; it is the next-essay generator.** Its charter inherits the situation
verbatim.

### 4. Bidirectional coverage

The test runs both ways:

- Every situation must resolve to essays — **no gaps.**
- Every essay must be primary for at least one situation — **no dead jurisdiction.** An essay
  nothing routes to is decoration, and decoration is a finding.

The second direction is the one that catches the corpus flattering itself, and it currently
has no data at all: zero situations exist, so both ratified essays are unrouted and would fail
the dead-jurisdiction check today if it ran.

---

## Completeness-for-purpose criterion

> The corpus is declared complete at version *N* when a rolling window of newly contributed
> situations produces **zero gaps and zero contested routings** after adjudication.

Initial window size: **25** — *provisional, not adjudicated* (O-RTG-01).

The day a situation routes nowhere, the declaration is void and the gap becomes the backlog
head. **Completeness is a state the corpus can lose** — which is the only kind of completeness
worth claiming.

---

## Current state

| | Count |
|---|---|
| Situations authored | 0 (5 named in the layout, none written — RT-1) |
| Routes adjudicated | 0 |
| Gaps filed | 0 |
| Essays with a primary route | 0 of 2 ratified |

The five named situations — sleepover, broken vow, whistleblower, envied brother, deathbed —
are placeholders whose filenames were fixed in `README.md` before the situations were written.
That is itself in tension with §1: a filename chosen in advance by the corpus's own author, in
a set that conspicuously spans the planned movements, is not a situation drawn from life. See
O-RTG-04.

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-RTG-01** | Window size for the completeness criterion. 25 is inherited from `README.md` as an initial value with no argument attached. The number determines how strong a completeness claim is; it should be defensible, not default. | Size justified and ratified, or the criterion restated in terms that do not need one. |
| **O-RTG-02** | "Contested routing" is undefined: who contests, on what grounds, how it resolves, and what "zero contested routings after adjudication" means if the adjudicator is also the ratifying architect. | Procedure stated; independence requirement inherited from `CHARTER.md` O-CHT-02. |
| **O-RTG-03** | Gap → essay charter mechanics. "Its charter inherits the situation verbatim" — but what else does a charter need, and who mints the essay id and its position in a movement? | Mechanics stated; worked once on a real gap. |
| **O-RTG-04** | Situation intake and provenance. §1's rule is unenforceable as written: nothing records where a situation came from, and nothing prevents authoring one to fit. The five pre-named situations already sit awkwardly against it. | Provenance field required on every situation; the five placeholders either sourced or discarded; anonymous-contribution question resolved (`CHARTER.md` O-CHT-03). |
| **O-RTG-05** | Route schema undefined — `routes/S-0001.route.yaml` has a filename and no format. | Schema defined in `services/gnomon-route`; one route worked end to end. |
