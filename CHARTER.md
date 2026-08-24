# Charter

**Status:** v0.2 — partial. **`ratified-under: bootstrap`** (§4).

The contribution statement and the four refused claims are carried from `README.md` and are
settled in substance. **§4, the Bootstrap Protocol, is specified** — it is the first normative
section of this charter and it exists to make the rest writable. The conferral model at §3 — who
ratifies, under what authority, and how that authority is itself conferred — remains **named but
not specified**, which is still the gap most consequential for a corpus whose central claim is
that it does not self-certify.

**Normative language:** MUST / MUST NOT / SHOULD / MAY per RFC 2119 / RFC 8174. §4 uses it; the
remaining sections do not yet contain normative text.

---

## 1. Contribution

GNOMON is the human-ethics program of the singular project: a synthetic moral person grounded
in the Triple-I Standard (Irreversibility, Inseparability, Integrity-Maintenance). You cannot
ground an agent in an ethics no one has specified. GNOMON is that specification — which
judgments a finite agent, carbon or silicon, is licensed to reach, on what evidence, at what
thresholds, and which verdicts no judge may ever pronounce.

**The claimed contribution is jurisdiction.** Not truth, not comprehensiveness, not authority.
Every essay maps a region of moral life, declares what it decides, declares what it does *not*
decide, and names the handoffs. The corpus is complete when concrete situations stop finding
gaps — see `routing/PROTOCOL.md`.

---

## 2. Non-goals (normative)

These four refusals are load-bearing. An artifact that quietly relaxes one has broken the
charter, and the relaxation is a finding regardless of the artifact's other merits.

### 2.1 GNOMON is not a replacement for tradition, community, or grace

Movement VII states this in load-bearing form, not as a disclaimer. A corpus that could be
substituted for the communities that form moral perception would have contradicted its own
epistemology: `corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md` argues that recognition of
flourishing requires formed persons within communities over time, and no specification supplies
formation.

### 2.2 GNOMON is not a universal ethics

It is Integral Ethics' contribution to human behavior and well-being — one instrument, offered
with its calibration documents attached. See `foundations/README.md` for the dependency this
refusal is stated relative to.

### 2.3 GNOMON does not self-certify

Every artifact passes hostile review and external adjudication before ratification. The corpus
practices on itself what ARCHON requires of the agent: **conferral, not self-declaration.** A
self-ratified artifact is not a ratified artifact with a procedural defect; it is an
unratified artifact making a false claim.

> **One bounded exception exists, and it is declared rather than hidden: the Bootstrap Protocol,
> §4.** It applies only to governance and schema artifacts, never to corpus prose, and it sunsets.
> A reader who wants to know where this corpus does something it forbids should read §4 — that is
> what §4 is for.

### 2.4 GNOMON licenses no verdicts on persons

Its subject is acts, patterns, thresholds, and reserved domains — never the final truth of any
soul, human or synthetic. This is INV-03 stated as a charter commitment rather than a lint rule,
and it binds the corpus's *own* products: an essay, a route, a finding, and a service output are
each forbidden the strata-4–5 verdict.

---

## 3. Conferral model

**Status: named, not specified.** This section currently records only what `README.md` already
asserts. The specification is O-CHT-01, and until it exists the corpus's central refusal
(§2.3) rests on an undefined role.

What is asserted today:

- Ratification authority rests with the project's **ratifying architect**.
- Reviews are **adversarial by design**; a review cycle that produces no findings is itself a
  finding.
- Artifacts move through gates **G0 → G1 → G2 → G3**, plus **CG** for carriers. No artifact
  skips a gate.

What is not yet stated: who holds the role, how it is conferred, how it is transferred or
revoked, whether it may be held by the author of the artifact under review (and if so under what
recusal discipline), what "external" means in "external adjudication," and what quorum or
independence a hostile review requires to count.

**Two things §3 MUST settle when it is written**, both owed to §4:

1. **The sunset unit and value** (§4.4.4, parameters at §4.11). "N review cycles" is undefined
   until the unit is stated, and an undefined clock binds nothing.
2. **The disposition of the t=0 assertion** (§4.6). If §3 does not confirm the asserting party in
   the ratifying-architect role, every artifact marked under that assertion returns to unratified
   and re-enters at G0. §3 MUST state this consequence explicitly rather than leaving it inferred.

Until then, §4 governs. It is the bridge, and it is designed to be dismantled.

---

## 4. The Bootstrap Protocol and the Two Marks

**Status:** specified at v0.2. **Discharges** O-CHT-05 and finding R-14; folds in R-20…R-26 from
the review of the G0 draft. **Interfaces:** O-SCH-05 (field definitions), D-F (parameters, open),
§3 (conferral model), O-CHT-04 (retroactive conferral), `ROADMAP.md` §2.3 (handoff grades).

This section is itself `ratified-under: bootstrap` and stands **second** in the re-ratification
queue (§4.4.5).

### 4.1 The problem

§2.3 refuses self-certification. But the artifacts that make the gates real — the invariant
elaborations, the conferral model, the schema, this charter — are themselves normative text
requiring gates, and they must exist *before* the gates they define can run. Reviewed against
what standard, when the standard is being written? Dispositioned by what role, when the role is
being defined?

**The constitution cannot be constituted.** Left unresolved, the project cannot start. Resolved
silently, §2.3 is violated in the founding act and every downstream claim inherits the violation.

### 4.2 The principle

**The exception is declared, never inferred.** And because a single mark was found carrying two
opposite operations, the declaration takes two forms:

- a **grant** — provisional normative force, self-conferred over the instruments, with a sunset;
- a **withdrawal** — corpus prose previously called ratified, demoted to pending, holding no
  self-conferred force, awaiting true conferral.

These are different predicates with different lifecycles and MUST NOT share a field.

The corpus here applies its own doctrine to its own founding. Silent self-ratification would be a
verdict pronounced by the party it favours — **the seized gavel**, in the corpus's own vocabulary.
A bootstrap mark is the register-two act: a provisional securing, announced as provisional,
revisable by its stated exit. INV-02 and INV-05 govern the constitution, not merely the essays,
which is the gnomon condition applied to authority itself.

### 4.3 Artifact classes

Every ratifiable artifact belongs to exactly one class. Class membership determines which mark is
legal; the schema enforces the partition (§4.8).

| Class | Members | May self-ratify? |
|---|---|---|
| **Instrumental** | Charter, `INVARIANTS.md`, schemas, fixtures, roadmap, service contracts, gate definitions | Yes — under §4.4, marked and sunset |
| **Corpus** | Essays, carriers, architecture notes, jurisdiction panels | **Never.** No circumstance, no exception |

**4.3.1 Class is determined by role and location, never by file shape.** A fixture is Instrumental
even when it is, by shape, a jurisdiction panel: everything under `fixtures/**` is Instrumental
regardless of what schema it validates against, and everything under `corpus/**` is Corpus.

Without this rule the partition is violated on its first application — the conformance fixtures
*are* jurisdiction panels, so they would belong to both classes at once and §4.8's lint would
error on every one of them. Shape is what an artifact looks like; class is what it is for.

**4.3.2 Adjudicative records are not ratifiable artifacts.** Dispositions, routes, and conferral
records are **ledger events**. Their authority derives from the regime in force when they were
made, and each carries that regime's identifier in its ledger entry. They take neither mark.

This matters because `routing/PROTOCOL.md` calls a route a judgment and judgments get adjudicated
— which could be misread as making routes ratifiable. A route is adjudicated *as an event*, and
is superseded by a later route rather than re-ratified.

### 4.4 Mark one — `ratified-under` · instrumental artifacts only

**4.4.1 Field.** `ratified-under: bootstrap | conferral`. Legal only on instrumental artifacts.

**4.4.2 Force.** An artifact at `bootstrap` carries **full normative force, provisionally**: gates
MAY run against it, checks MAY enforce it, and its authority is exactly as revisable as the mark
declares.

**4.4.3 Record.** Self-ratification is an act, not a default. Each bootstrap mark MUST reference a
ledger entry (`bootstrap-entry:`) recording **who, when, and which version**. An unmarked
instrumental artifact, or a mark without a resolvable ledger locator, is **malformed** (§4.8).

The record lives in the ledger and not in this charter, deliberately: a registry maintained by
hand inside the document it describes can drift from the artifacts it lists, which is the defect
the registry would exist to prevent.

**4.4.4 Sunset.** Within **N review cycles** of O-CHT-01 closing — N and the unit of "cycle" set
by D-F (§4.11) — every bootstrap-marked artifact MUST be re-ratified under the conferral model.

**The tooth:** past sunset, an artifact **MAY NOT govern any new gate event** until re-ratified.
Gate events already closed under it stand, and a standing finding opens against the artifact.
**Force is suspended forward, not rewound.**

Note the practical scope, so that nobody meets it by surprise: for a broadly-governing instrument
such as `INVARIANTS.md`, forward suspension is a **total freeze** on new gate events, because no
gate can run without it. That is correct and proportionate — it follows from the artifact's actual
reach rather than from a blanket rule — but it means the sunset on the invariants is the one the
project must not let lapse inattentively.

**4.4.5 Queue and self-application.** The conferral model is **first** in the re-ratification queue
and is ratified under its own procedure before that procedure is used on anything else. This
charter is second; `INVARIANTS.md` third; remaining instruments in an order the ratifying architect
sets and ledgers.

### 4.5 Mark two — `ratification` · corpus artifacts only

**4.5.1 Field.** `ratification: pending-conferral | conferred`. Legal only on corpus artifacts.
`conferred` MUST reference the conferral record (`ratification-record:`).

*On the two fields' value-shapes:* `ratified-under` names a **regime** ("under what authority"),
`ratification` names a **status** ("in what state"). They are different questions, so the value
vocabularies differ by design rather than by oversight.

**4.5.2 What it withdraws, and what it does not.** `pending-conferral` asserts that the artifact's
*ratified* predicate is suspended: no self-conferred normative force, and no presentation as
ratified in any register, report, or citation.

It does **not** rewrite history. The version designation and the content anchors remain facts —
v1.0 names a fixed, hash-anchored text that passed its review cycle. **What is pending is
conferral, not identity.**

**4.5.3 No sunset.** A corpus artifact MAY remain `pending-conferral` indefinitely. Its exit is
conferral (O-CHT-04), never the calendar. What it cannot do while waiting is claim the predicate.

**4.5.4 Handoff grade.** For `ROADMAP.md` §2.3, a `pending-conferral` topic whose panel lints green
counts as **`declared`**, not `ratified`. The grade scale and this mark compose; neither overrides
the other.

**The consequence, stated so it is not discovered at the first G3:** under this rule **no essay in
the corpus is currently at grade `ratified`.** E-I.2, the only topic with a clean panel, is
`declared`. G3's requirement that handoff targets reach ≥ `stub` is still satisfied, but the
open-handoff register is correspondingly larger, and every handoff in the corpus resolves to a
target below `ratified` until the first conferral occurs.

**4.5.5 Per-panel marking.** Status attaches to each panel individually. An essay and its carrier
are marked independently; **a carrier's ratification is exactly as unconferred as its essay's, and
MUST say so.**

### 4.6 The irreducible assertion

This protocol bootstraps *artifacts*. It cannot bootstrap the **identity of the ratifying
architect**, because the mark is applied by that role and any attempt to confer the role on itself
regresses. §4.4.5's queue closes the regress for procedures, not for persons: the first item in
that queue is still executed by a party whose standing nothing has conferred.

The charter states the floor plainly rather than concealing it:

> At t=0, one person asserts the ratifying-architect role. That assertion is conferred by nothing.
> It is recorded, dated, and subject to retroactive confirmation when §3 is specified.

Every conferral system bottoms out in an assertion somewhere; a system claiming otherwise has
hidden its floor rather than removed it. GNOMON's floor is a single, dated, named assertion, and
this section exists so that it is **one** assertion rather than an unbounded series.

**If §3, once specified, does not confirm the asserting party in the role, every artifact marked
under that assertion returns to unratified and re-enters at G0.** §3 MUST state this consequence
explicitly rather than leaving it inferred.

### 4.7 What this protocol never reaches

**4.7.1 INV-03.** The strata constraint admits no bootstrap exemption: `character` and `destiny`
are never `licensed` or `defeasible` under any regime this section creates.

**4.7.2 Corpus prose never self-ratifies** — not under bootstrap, not under urgency, not under the
architect's own hand. The corpus's claims about judgment do not rest on a self-verdict.

**4.7.3 Review is not waived.** A bootstrap mark records that conferral was *unavailable*, not that
review was *unnecessary*. Hostile review of a bootstrap-marked artifact is owed, may be performed
at any time, and findings against it are ordinary findings.

**4.7.4 Derivative artifacts do not inherit the mark.** An artifact produced under a
bootstrap-marked standard receives its own mark per its own class, or none. Validity against a
provisional schema confers nothing.

### 4.8 Enforcement and queryability

The schema (O-SCH-05) enforces:

| Condition | Result |
|---|---|
| `ratified-under` on a corpus artifact | lint **error** |
| `ratification` on an instrumental artifact | lint **error** |
| A ratifiable artifact carrying neither field | **malformed** |
| A bootstrap mark whose `bootstrap-entry:` does not resolve | **malformed** |

**Nothing is inferred from silence.** An unmarked artifact claims no standing of any kind — not
from its location, not from a version string, not from its evident usefulness.

The query *all self-ratified governance* returns mark-one artifacts and **can return nothing else
by construction**; the query *all corpus artifacts awaiting conferral* returns mark-two artifacts
likewise. That disjointness is the operational test of §4.3's partition, and the reason one mark
could not serve. Every mark change is a ledger event.

### 4.9 Termination

1. **Once the conferral model is in force, no new artifact may receive `ratified-under: bootstrap`.**
   The protocol is a bridge, not a standing alternative to conferral. Without this rule the queue
   drains while the door stays open behind it, and bootstrap becomes a permanent bypass.
2. The protocol **retires** when no artifact carries `ratified-under: bootstrap` — every instrument
   re-ratified under §3 or withdrawn.
3. On retirement this section is **retained and marked superseded**, never deleted. The corpus's
   account of its own founding is the evidence that the exception was bounded; a charter that
   erases its bootstrap cannot prove it ever ended.
4. This section is subject to its own sunset. A Bootstrap Protocol exempting itself would be the
   exact self-certification §2.3 forbids.

### 4.10 Application on adoption

Each row is a ledger event on adoption; `bootstrap-entry:` locators resolve into `LEDGER.md`.

| Artifact | Class | Mark |
|---|---|---|
| `CHARTER.md` (incl. this section) | Instrumental | `ratified-under: bootstrap` |
| `INVARIANTS.md` | Instrumental | `ratified-under: bootstrap` |
| `services/gnomon-lint/SCHEMA.md` + `jurisdiction.schema.json` | Instrumental | `ratified-under: bootstrap` |
| `fixtures/**` (green + 10 red) | Instrumental | `ratified-under: bootstrap` |
| `ROADMAP.md` | Instrumental | `ratified-under: bootstrap` |
| E-I.1 `ESSAY.md` (v2.0) | Corpus | `ratification: pending-conferral` |
| E-I.2 `ESSAY.md` (v1.0) | Corpus | `ratification: pending-conferral` |
| E-I.2 `CARRIER.md` (v1.0) | Corpus | `ratification: pending-conferral` — correcting the earlier backlog, which marked the essay provisional and left the carrier unqualified |

### 4.11 Open parameters

**D-F.** N = *[open]*; unit of "review cycle" = *[open* — corpus-wide or per-artifact, settled with
O-CHT-01*]*.

Until D-F closes the sunset clock cannot start, and **that fact is itself recorded: a sunset with
an undefined clock binds nothing and MUST NOT be reported as binding.**

---

## 5. Review gates

| Gate | Name | Exit condition |
|---|---|---|
| **G0** | Draft | Triptych panels drafted; `jurisdiction.yaml` lints green |
| **G1** | Hostile review | Findings ledgered with IDs (per-essay prefix, e.g. J-01…); invariant conformance reviewed |
| **G2** | Adjudication | Every finding dispositioned by the ratifying architect; ledger closes |
| **G3** | Ratification | Version promoted (→ 1.0 / 2.0); routes updated; corpus-wide `gnomon check` green |
| **CG** | Carrier Test | Carrier walks its anchor scene in plain language; fidelity adjudicated |

---

## 6. Contribution to the corpus

**Status: not specified** (O-CHT-03). What a contributor may submit, how situations enter
(`routing/PROTOCOL.md` requires they not be authored to fit an essay), whether anonymous
contribution is permitted, and what a contributor is owed when a finding is rejected.

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-CHT-01** | Specify the conferral model: the ratifying architect role, its conferral, transfer, revocation, recusal discipline, and what makes adjudication "external." **Must also settle the §4.5 sunset unit and value, and the §4.6 t=0 disposition.** | Model written and itself externally reviewed — the charter's own §2.3 forbids self-conferral of the conferral rule. Closing this starts every bootstrap sunset clock. |
| **O-CHT-02** | Independence criteria for hostile review: how many reviewers, what relationship to the author disqualifies, what counts as a discharged finding. | Criteria stated; applied retroactively to the two ratified essays or their ratification restated as provisional. |
| **O-CHT-03** | Contribution policy, including the anonymous-situation question left open in `README.md`. | Policy written; referenced from `routing/PROTOCOL.md`. |
| **O-CHT-04** | The two ratified essays (E-I.1, E-I.2) and E-I.2's carrier were ratified before this charter existed. No conferral record is on file. | **Partially discharged at v0.2:** all three are marked `ratification: pending-conferral` and registered at §4.8, so the claim no longer stands unqualified. Full discharge requires either the conferral records or re-adjudication under §3. |
| ~~**O-CHT-05**~~ | ~~Bootstrap Protocol — governance artifacts have no ratification path, so the constitution cannot be constituted.~~ **CLOSED at v0.2.** Specified at §4: two marks with disjoint scopes, an explicit licence boundary, a sunset that blocks new ratification rather than collapsing existing standing, the t=0 assertion named, and a termination clause under which the protocol dismantles itself. | — |
| **O-CHT-06** | **New.** §4.2 rule 3 requires both marks to be machine-queryable; neither field exists in any schema, and the §4.8 registry is maintained by hand. A registry that can drift from the artifacts it describes is the defect it was written to prevent. | `ratified-under` and `ratification` added to the schema; `gnomon-xref` cross-checks the registry against the artifacts; red fixture for a registry/artifact mismatch. Roadmap item 0.1. |
