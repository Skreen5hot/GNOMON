# Tension Log

**Status:** v0.1 · `ratified-under: bootstrap` · `bootstrap-entry: BE-012`

Adopted from ARIADNE's `00-foundation/tension-log.md` — see
[`foundations/PRECEDENT.md`](foundations/PRECEDENT.md) §1.1 — with two deliberate changes (§0.3).

---

## 0. What belongs here

### 0.1 Tension vs. finding

| | **Finding** (`LEDGER.md`) | **Tension** (this file) |
|---|---|---|
| Is | A defect in one artifact | An incompatibility *between* artifacts or commitments |
| Fixed by | Correcting that artifact | Possibly nothing — it may be permanent |
| Ends in | A disposition, then closure | A resolution, a declared limit, or standing openness |
| Owner | The artifact's author | Whoever holds *both* sides — sometimes nobody here |

Filing a tension as a finding implies someone can fix it. Filing a finding as a tension excuses a
defect as a deep problem. The registers are separate because the failure modes are opposite.

### 0.2 A tension may be permanent, and saying so is a result

ARIADNE's vocabulary, adopted verbatim because it is right:

> **Open, likely irreducible — an honestly named limit, not a defect.**

This is the corpus's declared-absence discipline pointed at a contradiction. Movement VII exists
because some of moral life is like this; a corpus that could not record an irreducible tension
would be claiming more than `CHARTER.md` §2.1 permits.

### 0.3 Two divergences from the precedent

**No blank approvers.** Every resolution names who accepted it and when. An entry with no approver
is `pending-conferral` and is displayed as unapproved, never as settled. ARIADNE has six drift
records reading `Approved by: —` or `Pending`, which is how a register becomes an unauthorised
backlog that looks like governance (`PRECEDENT.md` §2.1).

**No `Resolved in principle`.** ARIADNE parks six tensions there; it means *agreed but unverified*
and reads as closed at a glance. Here such a tension stays **Open** with its exit criterion
stated. A status that lets an item stop moving while looking finished is worse than an open one.

### 0.4 Statuses

| Status | Means | Requires |
|---|---|---|
| `open` | Live, resolution not agreed | Exit criterion |
| `open-irreducible` | Genuinely may not resolve | The argument for irreducibility |
| `resolved` | Agreed **and** verified | Approver, date, evidence |
| `inherited` | Belongs upstream; recorded, not adjudicated here | Upstream location |

---

## 1. Register

### T-001 · The Triple-I Standard has two upstream formulations

- **Status:** `inherited` — belongs to ARIADNE
- **Between:** `ariadne/docs/01-philosophy/FNSR-Justification.md` §4.2 · `ariadne/docs/00-foundation/FNSR-Master-Guide.md`
- **Raised:** 2026-08-24, as finding R-32, reclassified here

| Source | Triad |
|---|---|
| FNSR-Justification §4.2, "The Triple-I Substrate & ARCHON Protocol" | Irreversibility · Inseparability · **Integrity-Maintenance** |
| FNSR-Master-Guide, twice ("the three structural conditions of personhood") | irreversibility · inseparability · **answerability** |

**Why it matters here.** `README.md` and `CHARTER.md` §1 ground the entire corpus in the Triple-I
Standard and cite the first form. If the second is canonical, the sentence GNOMON opens with names
a standard that does not exist under that description.

**Not GNOMON's to resolve.** Both documents are ARIADNE's. Recorded, cited by document and
version, and filed upstream to `tension-log.md`.

**Exit:** ARIADNE declares one formulation canonical, or declares the two as addressing different
questions. GNOMON then cites by document + version.

---

### T-002 · Fruits as indicators vs. the pluralism they are meant to preserve

- **Status:** `open-irreducible`
- **Between:** `corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md` §1.3 · `foundations/integral-ethics.md` §4.1
- **Raised:** 2026-08-24, from the essay's own text

The essay names this against itself: if all twelve worldviews must ultimately produce the Fruits
to be validated, the Fruits become a meta-criterion and the pluralist structure collapses into
monism. Its §1.3 calls this **hidden monism** and lists it first among three dangers. A committed
Dynamist may hold that productive struggle is a good that peace would foreclose.

**Why irreducible.** Any indicator general enough to span twelve worldviews is either
substantive — and therefore privileges some — or so thin it indicates nothing. The essay's answer
is that the Fruits are *one tradition's phenomenology*, offered without meta-criterion status. That
is a stance held under tension, not a resolution.

**Exit:** none expected. Re-examined when E-VII.1 *Two Masters* is drafted, which stress-tests
worldview collision directly.

---

### T-003 · The corpus grounds specs that are versioned but unconferred

- **Status:** `open`
- **Between:** `CHARTER.md` §2.3 · `ROADMAP.md` §3 B-1 (the F-03 table)
- **Raised:** 2026-08-24, from 0.4a

§2.3 refuses self-declaration as conferral, which is why both ratified essays sit at
`pending-conferral`. Applied consistently, the nine FNSR specs are in the same position: their
versions and statuses are **header self-declarations** read at `main`, with no conferral record.

So every `ARCH.md` will ground an essay on documents held to a standard the corpus refuses for its
own prose — or GNOMON applies its standard outward and grounds on nothing.

**Exit:** D-B(d) status-graded `ARCH.md` records spec status *including its evidence class*, so a
note says what it is standing on. Needs O-CHT-01 to settle what conferral means before the grade
can mean anything.

---

### T-004 · Situations from life vs. situations that exist

- **Status:** `open`
- **Between:** `routing/PROTOCOL.md` §1 · `ROADMAP.md` 0.10
- **Raised:** 2026-08-24

The protocol says no situation may be authored to fit an essay — situations come from life. But
the Routing Test is the corpus's only empirical instrument, and waiting for contributed cases
means no feedback for as long as nobody contributes. 0.10 seeds ~20 architect-authored situations
to break the deadlock.

`provenance: internal` and the `derived_from:` firewall (R-17) reduce the damage; they do not
dissolve it. Cases invented by the corpus's author test what its author can imagine.

**Exit:** the completeness window counts independent situations only (O-RTG-01), so the seeded set
buys development feedback without ever buying a completeness claim.

---

## 2. Upstream register

Tensions filed to ARIADNE and tracked here for visibility only.

| Id | Tension | Filed | Upstream status |
|---|---|---|---|
| T-001 | Triple-I has two formulations | 2026-08-24 | *not yet filed — action outstanding* |

---

## 3. Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-TEN-01** | T-001 is not yet filed to ARIADNE's `tension-log.md`. Recording a tension here and not upstream leaves the two repositories disagreeing about what is known. | Filed upstream; §2 updated with its `T-###`. |
| **O-TEN-02** | No mechanical check links a tension to the artifacts it names. A tension can go stale against documents that have since changed. | `gnomon-xref` resolves the `Between:` references and reports tensions whose sources have moved. |
| **O-TEN-03** | Adopt ARIADNE's review-register staleness columns (`PRECEDENT.md` §1.3) — last review date and result per artifact — and make review age a reported quantity rather than something noticed by accident. | Columns added; age surfaced by `gnomon check`. |
