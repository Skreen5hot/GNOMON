# Governance Ledger

**Scope:** instrumental artifacts — charter, invariants, schemas, fixtures, roadmap, service
contracts, gate definitions (`CHARTER.md` §4.3). Corpus artifacts keep their own ledgers beside
their panels.

**Status:** v0.1. **`ratified-under: bootstrap`** · `bootstrap-entry: BE-007`.

---

## Why this file exists

The corpus had per-essay ledgers and no ledger for the documents that govern them. Two reviews
were run against `ROADMAP.md` and one against the Bootstrap Protocol draft, producing findings
R-01 through R-26 — recorded only in disposition tables *inside the documents they criticised*.
That is one register short: it fails the FS method's **PR-M1, no finding vanishes**, and it
reproduces at repository scale the same defect flagged as O-LDG-J04 for Judge Not, where the
findings live only in the artifact they audit.

It is also load-bearing for §4. `CHARTER.md` §4.4.3 requires every bootstrap mark to reference a
ledger entry recording who, when, and which version. **This file is what those locators resolve
into.** A mark whose `bootstrap-entry:` does not resolve here is malformed.

---

## 1. Bootstrap register

Ledger entries for `ratified-under: bootstrap` marks. Each is a self-ratification act under
`CHARTER.md` §4.4 — not a default, and not a claim of conferral.

**Asserting party:** the ratifying architect, self-declared per §4.6. That assertion is conferred
by nothing, is recorded here, and is subject to retroactive confirmation when §3 is specified. If
§3 does not confirm the asserting party, **every entry below returns to unratified and re-enters
at G0.**

| Entry | Artifact | Version | Marked | Sunset |
|---|---|---|---|---|
| **BE-001** | `CHARTER.md` (incl. §4) | v0.2 | 2026-08-24 | *not started* |
| **BE-002** | `INVARIANTS.md` | v0.1 | 2026-08-23 | *not started* |
| **BE-003** | `services/gnomon-lint/SCHEMA.md` | v1.0 | 2026-08-23 | *not started* |
| **BE-004** | `services/gnomon-lint/jurisdiction.schema.json` | v1.0 | 2026-08-23 | *not started* |
| **BE-005** | `fixtures/**` — green base + 10 red | — | 2026-08-23 | *not started* |
| **BE-006** | `ROADMAP.md` | v0.3.1 | 2026-08-24 | *not started* |
| **BE-007** | `LEDGER.md` *(this file)* | v0.1 | 2026-08-24 | *not started* |
| **BE-008** | `tools/fixture-harness/**` | v0.1.0 | 2026-08-24 | *not started* |
| **BE-009** | `.github/workflows/fixtures.yml` | — | 2026-08-24 | *not started* |
| **BE-010** | `.gitattributes` | — | 2026-08-24 | *not started* |
| **BE-011** | `foundations/PRECEDENT.md` | v0.1 | 2026-08-24 | *not started* |
| **BE-012** | `TENSIONS.md` | v0.1 | 2026-08-24 | *not started* |

**No sunset clock is running.** D-F is open: neither N nor the unit of "review cycle" is set, and
per `CHARTER.md` §4.11 a sunset with an undefined clock binds nothing and MUST NOT be reported as
binding. The column is present so that it cannot be quietly omitted once D-F closes.

**Re-ratification queue** (§4.4.5): the conferral model first, ratified under its own procedure;
this charter second; `INVARIANTS.md` third; the remainder in an order the architect sets and
ledgers.

---

## 1a. Drift register

Adopted from ARIADNE's `00-foundation/drift-record.md` (`foundations/PRECEDENT.md` §1.2), which
records **intentional** divergence — original position, new position, reason, approver — so that a
deliberate departure is distinguishable from decay.

**One divergence from the precedent, and it is the whole point.** ARIADNE has seven drift records
of which **one** carries a real approver; the rest read `—` or `Pending`. A register with an
unfilled approval column does not confer, it accumulates: an unauthorised backlog that looks like
governance until you read the last column.

> **`Approved by` MUST be a named party and a date, or the entry is `pending-conferral` and is
> reported as unapproved.** It is never rendered as though the change had been accepted.

Under `CHARTER.md` §4.6 the only party currently able to approve is the self-declared ratifying
architect, so entries below will read `pending-conferral` until O-CHT-01 closes. **That is the
honest state, and showing it is the reason the column exists.**

*Empty.* No intentional divergence from a foundation has yet been recorded.

| Id | Original position | New position | Reason | Approved by |
|---|---|---|---|---|
| — | — | — | — | — |

---

## 2. Pending-conferral register

Corpus artifacts carrying `ratification: pending-conferral`. Listed here for cross-reference only
— **the authoritative record is each topic's own `LEDGER.md`**, and this table is a view, not a
second source of truth.

| Artifact | Claimed version | Content anchor | Marked |
|---|---|---|---|
| `corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md` | v2.0 | `879f46ce…` *(superseded `14c0fdc7…`)* | 2026-08-24 |
| `corpus/I-epistemology/judge-not/ESSAY.md` | v1.0 | `579416aa…` | 2026-08-24 |
| `corpus/I-epistemology/judge-not/CARRIER.md` | v1.0 | `198cdad3…` | 2026-08-24 |

Per §4.5.2 the mark suspends the *ratified* predicate, not the identity: the version designations
and content anchors remain facts. Per §4.5.4, all three sit at handoff grade **`declared`**, and
**no artifact in the corpus is currently at grade `ratified`.**

---

## 3. Findings register

Review cycles against instrumental artifacts. Dispositions are recorded where the work landed;
this register exists so that no finding is reachable only through the document it criticised.

### Cycle 1 — `ROADMAP.md` v0.2 → v0.3 · 2026-08-23

Thirteen findings, all ACCEPT. Full dispositions: `ROADMAP.md` §10.1.

| Id | Finding | Disposition |
|---|---|---|
| R-01 | Bootstrap circularity — Phase 0's outputs had no ratification path | ACCEPT → Bootstrap Protocol |
| R-02 | F-03 under-examined; sizing spanned two orders of magnitude | ACCEPT → 9-row resolution table |
| R-03 | Situations scheduled too late; re-committed the diagnosed mistake | ACCEPT → RT-1 split, situations to Phase 0 |
| R-04 | G3 unreachable until Phase 5 by the document's own graph | ACCEPT → deferral semantics |
| R-05 | Handoff grades referenced but undefined; topological trap | ACCEPT → three-grade scale |
| R-06 | Ledger timing; ratified texts unprotected | ACCEPT → `ledger-anchor`; anchors recorded |
| R-07 | "Author as a pair" had no gate mechanism | ACCEPT → `coupled:` relation |
| R-08 | Phase 2 exit gated on an L-sized creative item | ACCEPT → split 2a / 2b |
| R-09 | Phase 6 a dumping ground; unregistered blocker | ACCEPT → B-4; E-VI.1 pulled forward |
| R-10 | Completeness criterion owned by no phase | ACCEPT → Phase 6 exit; gap-preemption rule |
| R-11 | D-D marked open while decided; flat assertions | ACCEPT → marked decided; provisionals added |
| R-12 | Two couplings omitted | ACCEPT |
| R-13 | `shared/` as one L item on the critical path | ACCEPT → thin core slice |

### Cycle 2 — `ROADMAP.md` v0.3 → v0.3.1 · 2026-08-24

Six findings, all ACCEPT, one partially corrected. Full dispositions: `ROADMAP.md` §10.2.

| Id | Finding | Disposition |
|---|---|---|
| R-14 | Bootstrap mark overloaded; §2.1 self-contradictory | ACCEPT → two marks, disjoint scopes |
| R-15 | Monotonicity mis-specified at both sites | ACCEPT → no-regression + admission |
| R-16 | D-B decided by construction while marked open | ACCEPT → provisionally decided |
| R-17 | Harvested situations make coverage self-confirming | ACCEPT → `derived_from:` firewall |
| R-18 | F-03 "Assess" rows omit `essay-upstream` | ACCEPT → B-1 splits |
| R-19 | Hygiene cluster | ACCEPT **with correction** — F-01's referent never moved; v0.2's roadmap label was lossy and v0.3 corrected it silently. A corrected mislabel, not a supersession violation |

### Cycle 3 — Bootstrap Protocol G0 draft → `CHARTER.md` §4 · 2026-08-24

Seven findings, all ACCEPT. The draft was adopted as the base and the prior `CHARTER.md` §4
withdrawn; findings folded in on merge.

| Id | Finding | Disposition | Landed |
|---|---|---|---|
| **R-20** | Class partition violated on first application — fixtures are, by shape, jurisdiction panels, so they belonged to both classes and §4.8's lint would error on every one | ACCEPT → class determined by role and location, never shape | §4.3.1 |
| **R-21** | No termination clause; nothing forbade new bootstrap marks after conferral exists, so the queue drains while the door stays open | ACCEPT → no new marks once conferral is in force; retires when none remain; retained-and-superseded, never deleted | §4.9 |
| **R-22** | The irreducible assertion unaddressed — §4.4.5's queue closes the regress for procedures, not for persons; its first item is executed by a party nothing has conferred | ACCEPT → floor stated; t=0 assertion named, dated, and subject to retroactive confirmation, with the G0 consequence if unconfirmed | §4.6 |
| **R-23** | Two limits omitted from "what this never reaches" | ACCEPT → review not waived; derivative artifacts do not inherit | §4.7.3, §4.7.4 |
| **R-24** | §4.5.4's consequence undrawn | ACCEPT → stated: no essay is currently at grade `ratified` | §4.5.4 |
| **R-25** | Enum asymmetry between the two fields | ACCEPT **as clarification, not change** — `ratified-under` names a regime, `ratification` names a status; different questions, so different value vocabularies. Rationale now stated rather than left to look like oversight | §4.5.1 |
| **R-26** | Section slot | ACCEPT → §4, immediately after the conferral model it substitutes for | §4 |

**Superseded in this cycle:** `CHARTER.md` §4 as written 2026-08-24 (pre-merge), and the G0 draft
`charter-bootstrap-section.md`. Both withdrawn; the merged §4 supersedes them. Neither is retained
as a file — the merge record is this entry, per §4.9.3's distinction between *retiring a protocol*
(retain) and *superseding a draft* (replace).

---

### Cycle 4 — building the fixture harness (roadmap 0.12) · 2026-08-24

Findings raised by the build itself, recorded rather than silently fixed. Two of the three are
defects in artifacts committed the day before.

| Id | Finding | Disposition |
|---|---|---|
| **R-27** | **Id collision across registers.** The red fixtures used `R-01…R-16` and the governance findings use `R-01…R-26`, so `R-14` denoted both "vacuity asserted without a reason" (fixture) and "bootstrap mark overloaded" (finding). Two registers, one namespace — the ledger would have been ambiguous the first time either was cited without context. | ACCEPT → fixtures re-namespaced to **`RF-`**; mapping preserved so existing references keep their meaning. `fixtures/red/README.md` and `EXPECTED.md` updated |
| **R-28** | **The line-ending CI guard was broken in the dangerous direction.** Its first draft grepped for a carriage return; passing a bare CR as a shell argument left the pattern empty, so it matched every line and reported all 56 tracked text files as CRLF while the index was entirely clean. A guard that fails on every push is deleted, after which nothing guards the invariant. | ACCEPT → rewritten with `git ls-files --eol`, which reports what git stored. Proven to fail by planting a CRLF blob with `hash-object --no-filters` |
| **R-29** | **IE-001 overclaimed.** It stated that `eol=lf` makes the working tree byte-identical to the blob and that an anchor "no longer has to name which byte stream it means." True for a *fresh checkout* only — git does not rewrite an existing working tree, and this repository's own tree reports `i/lf w/crlf` today. The overclaim had already propagated into both corpus ledgers. | ACCEPT → claim narrowed and verified in both directions (fresh clone `i/lf w/lf`; local tree `i/lf w/crlf`). Corrected in `.gitattributes`, IE-001, and both corpus ledgers. The blob remains canonical |

**On R-29's origin:** the claim was written into three files before it was tested. It was caught
only because the CI guard of R-28 forced an examination of what git had actually stored. One
defect surfaced another; neither was found by re-reading.

### Cycle 5 — executing 0.4a, the F-03 confirmation · 2026-08-24

Every row of the F-03 table was located in `Skreen5hot/ariadne` under `docs/`. Reading the
documents overturned most of the reported states. **Evidence class: header self-declarations read
at `main`, not ratification records** — stronger than *reported*, weaker than *conferred*.

| Id | Finding | Disposition |
|---|---|---|
| **R-30** | **ARIADNE is not a service spec, and is not ratified v1.0.** It is a coherence-review *discipline* over the spec ecosystem — "Architectural Review for Integrity, Alignment, and Design Non-divergence Engine" — with no version and no status line. E-I.2's panel lists it in `grounds:` alongside ARCHON, CTS, and Will Observatory, which miscategorises a process as a service the essay grounds. | ACCEPT → table corrected; `grounds:` miscategorisation folded into **O-JUR-J01**. Whether a discipline can be *grounded* by an essay at all is the substantive question |
| **R-31** | **The "foundational-period, may be sketch" states were wrong for four rows.** CTS is v1.2.1 "Ready for Milestone 1 Implementation"; NIS v2.1 FINAL "Governance-Ready"; DES v2.0.0 "Release Candidate"; CSS v2.0.0 "Final". IEE was reported in-corpus-only; an external spec exists at v2.1. **R-18's `essay-upstream` inversion applies to no row in the table** — it remains a valid status with zero occupants. | ACCEPT → table corrected. B-1 re-characterised: the risk was never that specs might not exist, but that real versioned specs exist and the corpus has never been checked against them |
| **R-32** | **The Triple-I Standard has two conflicting upstream formulations.** `01-philosophy/FNSR-Justification.md` §4.2 gives Irreversibility / Inseparability / **Integrity-Maintenance** — which `README.md` and `CHARTER.md` §1 cite. `00-foundation/FNSR-Master-Guide.md` twice gives "the three structural conditions of personhood (irreversibility, inseparability, **answerability**)". The corpus's stated grounding names one triad while its own master guide names another. | ACCEPT → recorded. **Not GNOMON's to resolve** — it is an upstream tension, and ARIADNE has a `tension-log.md` for exactly this. File it there; cite by document and version until it settles |
| **R-33** | **GNOMON's corpus prose is duplicated upstream.** `ariadne/docs/01-philosophy/` contains `integral-ethics.md`, `fruits-of-the-spirit.md`, and `judge-not-v1.0.md` — the same three documents this repository holds as a foundation and two ratified essays. Neither copy declares itself canonical. Two uncoordinated copies of a hash-anchored text is precisely what the content anchors exist to detect, and they cannot detect it across repositories. | ACCEPT → **new open item O-FND-01**. Canonicity must be declared before any `ARCH.md` cites across the boundary, or the corpus will drift from its own foundation without either side noticing |
| **R-34** | **ARIADNE's `service_inventory.json` is stale against its own spec directory.** It reports `spec: null` for DES and CSS while `DES-Specification-v2.0.md` and `CSS-Specification-v2.0.md` exist, and points SHML at `middle-layer-shml.md` (v3.0) while v3.2 and v3.3 are present. Its own metadata says `sha256: "PENDING — compute on finalization"`. | ACCEPT → recorded as an upstream observation, not a GNOMON defect. Bears directly on **O-SVC-06**: an inventory that drifts from its directory cannot be consumed as the drift oracle without its own verification |

**What 0.4a did not establish.** No row has a conferral record. Headers are self-declarations, and
`CHARTER.md` §2.3 does not accept self-declaration as conferral — the same standard the corpus
applies to its own two essays, which is why they sit at `pending-conferral`. Rows are **located
and versioned, not ratified**, and `ARCH.md` notes must say so per D-B(d).

### Cycle 6 — ARIADNE as precedent · 2026-08-24

GNOMON is a spin-out of ARIADNE, so ARIADNE's management is evidence about GNOMON's likely failure
modes rather than an unrelated repository. Read at `main`; analysis at `foundations/PRECEDENT.md`.

| Id | Finding | Disposition |
|---|---|---|
| **R-35** | **GNOMON had no register for tensions.** A contradiction *between* artifacts is not a defect *in* one, and filing it as a finding implies someone can fix it. R-32 (Triple-I) was mis-filed for exactly this reason. ARIADNE has carried a tension log with 20 entries and a vocabulary GNOMON lacked — including `Open, likely irreducible — an honestly named limit, not a defect`. | ACCEPT → `TENSIONS.md` created and seeded with four real tensions. R-32 reclassified as **T-001, `inherited`** — it is between two ARIADNE documents and is not GNOMON's to adjudicate |
| **R-36** | **Registers without approval authority accumulate rather than confer.** ARIADNE has 7 drift records of which 1 has a real approver; 6 read `—` or `Pending`. It also parks 6 tensions at `Resolved in principle`, meaning agreed-but-unverified. This is O-CHT-01's failure mode demonstrated at scale, not predicted. | ACCEPT → drift register added at §1a with a **mandatory named approver**; `Resolved in principle` explicitly **not adopted** — a tension stays `open` with an exit criterion, because a status that lets an item stop moving while looking finished is worse than an open one |
| **R-37** | **Periodic manual review leaves drift invisible between rounds, and cannot diff a phrase across 111 files.** ARIADNE's reviews cluster at 2026-01-30 and 2026-05-15 — 3.3 months stale as of today — and the Triple-I contradiction survived a tension log built for exactly that, because no human diffs every load-bearing phrase twice a year. | ACCEPT → confirms the Phase 1 ordering rather than changing it: mechanical checks on every push, controlled vocabulary enforced by `gnomon-xref` (O-GLS-02). Recorded in `PRECEDENT.md` §2.2–2.3 so the ordering has evidence behind it, not just an argument |
| **R-38** | **Generated artifacts and filename-versioning decay.** `service_inventory.json` is stale against its own directory with `sha256: "PENDING"`; three SHML versions coexist under two separator conventions; a download artifact `MDRE-…-v1.3 (1).md`, a typo'd filename `OERS-Specificaiton.md`, and a `nul` file are all committed. | ACCEPT → GNOMON's existing practices confirmed as deliberate divergences and now stated as such: version lives in the ledger, never the filename; a generated artifact is regenerated in CI or is not trusted (O-LDG-G02) |
| **R-39** | **ARIADNE's `spec-index.md` may be the closest thing to a conferral record the two essays have.** It records *Fruits of the Spirit — PASS (exemplary), 2026-05-15* and reviews of Judge Not under a named 7-check rubric. GNOMON has been treating both essays as having no conferral record at all. | ACCEPT → bears directly on **O-CHT-04**. Whether an upstream coherence review under ARIADNE's rubric constitutes conferral under `CHARTER.md` §3 is a question for O-CHT-01; it is at minimum *evidence*, and recording it as nothing was an error |
| **R-40** | **ARIADNE's 7-check review rubric has no GNOMON equivalent.** Gates G0–G3 say when review happens, not what a reviewer works through. Its **One-Paragraph Test** — can you still explain the system simply — is a system-level analogue of the Carrier Test and catches "every part is fine, the whole is now incoherent," which nothing in GNOMON does. | ACCEPT → **new open item O-CHT-07**: adopt a per-artifact review rubric at G1, including a corpus-level One-Paragraph Test. Sequenced with O-CHT-02 (review independence) at 0.7 |

---

## 3a. Infrastructure events

Acts on instrumental infrastructure that change stored bytes or verification procedure. Recorded
here because they can move content anchors, and an anchor that moves without a record is
indistinguishable from an edit.

### IE-001 · Line-ending normalization · 2026-08-24

`.gitattributes` added with `* text=auto eol=lf`, and the tree renormalized.

**Cause.** No policy existed and `core.autocrlf=true`, so stored bytes were machine-dependent:
2 of 70 text files had been committed with CRLF and 68 with LF, by accident of upload. A hash
chain computed on one platform would have failed verification on another.

**Effect.** Two files' stored bytes changed — `fruits-of-the-spirit/ESSAY.md` (anchored) and
`foundations/integral-ethics.md` (not anchored). For both, stripping CR from the superseded blob
reproduces the new blob exactly; the change is representation, not content, and the proof is
recorded in the affected ledger rather than asserted.

`eol=lf` makes a **fresh checkout** byte-identical to the blob — confirmed against a clean clone,
which reports `i/lf w/lf`. It does **not** rewrite an existing working tree, and this repository's
own tree still reports `i/lf w/crlf`. The blob therefore remains canonical for every anchor.

**Correction, recorded rather than quietly amended.** IE-001 as first written claimed the policy
"removes the ambiguity at the source" and that an anchor "no longer has to name which byte stream
it means." That was an overclaim, propagated into both corpus ledgers before it was checked. The
narrowed and verified claim is above; the three affected passages were corrected the same day.

**Anchor supersession:** one, at `corpus/I-epistemology/fruits-of-the-spirit/LEDGER.md`.

### IE-002 · Fixture harness · 2026-08-24

Roadmap 0.12 / O-SVC-05. See `tools/fixture-harness/README.md`. Two defects were found by
building it, both recorded as findings at §3 cycle 4 rather than silently fixed.

---

## 4. Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-LDG-G01** | This ledger has no hash chain. Entries are appended by hand and nothing detects tampering or reordering. | `gnomon-ledger` chains it (roadmap 4.5); entries re-anchored. |
| **O-LDG-G02** | The §2 pending-conferral table duplicates each topic's own ledger. Declared a view, but nothing enforces that — it can drift. | `gnomon-xref` generates §2 rather than reading it, or the table is removed in favour of a query. |
| **O-LDG-G03** | No entry format is specified. BE-\* rows carry who/when/version informally; §4.4.3 requires those fields but not their shape. | Entry schema defined alongside the findings schema (O-SVC-01). |
| **O-LDG-G04** | Findings R-01…R-26 were raised, dispositioned, and recorded by the same party, with no independent review. §4.7.3 says review is owed to bootstrap artifacts; none has occurred under an independence criterion, because O-CHT-02 does not exist. | O-CHT-02 closes; cycles re-run or confirmed under it. |
