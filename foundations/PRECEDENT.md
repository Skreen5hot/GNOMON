# ARIADNE as precedent

**Status:** v0.1 · `ratified-under: bootstrap` · `bootstrap-entry: BE-011`

GNOMON is a **spin-out**: the moral-judgment work, moved out of
[`Skreen5hot/ariadne`](https://github.com/Skreen5hot/ariadne) into a repository that can hold it
properly. ARIADNE remains the parent program and the coherence discipline over the wider spec
ecosystem — 111 documents across philosophy, architecture, and 64 service specifications.

This file records what GNOMON **inherits**, what it **deliberately does differently**, and the
evidence for each. It is not a critique of ARIADNE. Most of what follows is a description of what
happens to any manual coherence process once the corpus outgrows the reviewer, which is the
condition GNOMON is being built to survive.

Evidence gathered 2026-08-24 by reading ARIADNE at `main`.

---

## 1. What ARIADNE got right — adopt

### 1.1 The tension log · **adopting**

`00-foundation/tension-log.md` — 20 entries, `T-###`, each with *specs involved*, *nature*,
*current resolution*, *status*.

The category is the contribution. A **tension** is a cross-artifact incompatibility; a **finding**
is a defect in one artifact. They need different registers because they resolve differently: a
finding is dispositioned and closed, a tension may be permanent. ARIADNE's status vocabulary
includes

> `Open, likely irreducible — honestly named limit, not a defect`

which is exactly the corpus's declared-absence discipline applied to a contradiction. GNOMON had
nowhere to put such a thing: **R-32 (Triple-I has two conflicting upstream formulations) is a
tension, not a finding**, and filing it as a finding would have implied someone can fix it.

→ **GNOMON adds [`TENSIONS.md`](../TENSIONS.md).**

### 1.2 The drift record · **adopting, with a correction**

`00-foundation/drift-record.md` — `D-###`, each with *original position*, *new position*,
*reason*, *approved by*.

Recording **intentional** divergence separately from accidental drift is right, and GNOMON's
`foundations/README.md` rule 4 ("drift is a finding") is too blunt on its own: it has no way to
say *this divergence was deliberate and argued*. The two compose — a finding is raised, and its
disposition may be "intentional, recorded as D-###."

→ **GNOMON adds a drift register to `LEDGER.md`**, with one change forced by §2.1 below.

### 1.3 A review register with staleness columns · **adopting**

`00-foundation/spec-index.md` carries `Version | Status | Thesis Alignment | Last Review | Review
Result` for every document. Review results are specific — `PASS (2 flags)`, `PASS with flags
(T-014, T-015 opened)`, `FLAG → addressed Round 2`.

Recording *when* a thing was last reviewed, beside *what the review found*, makes staleness a
visible property rather than something you discover by accident.

### 1.4 A named, uniform validation rubric · **adopting**

Seven checks applied to every document: thesis alignment, non-negotiable preservation, tension
consistency, cross-spec consistency, ARCHON alignment, auditability, and the **One-Paragraph
Test** — *can you still explain the system simply?*

GNOMON has gates (G0–G3) and invariants (INV-01…05), but no per-artifact checklist a reviewer
works through. The One-Paragraph Test is the strongest of the seven: a system-level analogue of
the Carrier Test, and the only one that catches "each part is fine, the whole is now incoherent."

### 1.5 Review rounds with findings carried across them

Findings tracked as `F-A01-1 resolved Round 1`, `F-A02-3 Round 3`. Rounds are numbered and
findings persist across them rather than being re-discovered.

---

## 2. What did not work — diverge

Each of these is evidenced, and each has a GNOMON mechanism already in place or added here.

### 2.1 The registers were built; the authority to close them was not

**Evidence.** Of seven drift records, **one** carries a real approver. The rest read:

```
- **Approved by**: —
- **Approved by**: — (discovered during ARIADNE review, pending formal approval)
- **Approved by**: Pending — opens [[T-014]] …
- **Approved by**: Pending — closes [[T-011]] pending one validation cycle
- **Approved by**: Pending — recommend updating Plot §4 …
- **Approved by**: Pending — recommend either (a) … or (b) …
```

Of 20 tensions, 8 are `Open` and 6 more are `Resolved in principle` — a status meaning *we agree
and have not verified*.

**The lesson is precise and it is the most important one here.** A register with an unfilled
approval column does not confer; it accumulates. What you get is a well-documented backlog of
changes nobody has authorised, and it looks like governance until you read the last column.

This is exactly the failure `CHARTER.md` §2.3 forbids and §4 is built to survive. ARIADNE is the
evidence that O-CHT-01 is not a theoretical worry: **build the register without the authority and
this is what it becomes.**

→ **Divergence: GNOMON's registers MUST NOT accept a blank approver.** An entry with no approver
is `pending-conferral` and is reported as unapproved in every view — never rendered as though the
change had been accepted. The same rule that governs the two ratified essays governs drift and
tension entries.

→ **`Resolved in principle` is not adopted.** GNOMON's equivalent is a tension held **Open** with
its exit criterion stated. A status that means "agreed but unverified" reads as closed at a
glance and is where items go to stop moving.

### 2.2 Review is periodic and manual, so drift between rounds is invisible

**Evidence.** Review dates cluster at 2026-01-30 (22 entries) and 2026-05-15 (35 entries). Today
is 2026-08-24 — **about 3.3 months since the last round**, with no mechanism reporting that.

Nothing is wrong with periodic deep review. The problem is that it is the *only* instrument: in
the gaps, nothing checks anything, and a document can drift for a quarter before a human notices.

→ **Divergence: GNOMON runs mechanical checks on every push.** `.github/workflows/fixtures.yml`
today; `gnomon check` at Phase 1. The division is `services/README.md`'s: mechanical checks verify
that claims are *present, structured, and cross-consistent*; adjudication verifies that they are
*true*. ARIADNE has the second without the first, which is why the first is Phase 1 here.

### 2.3 A manual process cannot diff a phrase across 111 documents

**Evidence.** The Triple-I Standard appears in two incompatible forms:

| Document | Triad |
|---|---|
| `01-philosophy/FNSR-Justification.md` §4.2 | Irreversibility · Inseparability · **Integrity-Maintenance** |
| `00-foundation/FNSR-Master-Guide.md` (twice) | irreversibility · inseparability · **answerability** |

ARIADNE has a tension log designed for precisely this and it did not catch it — not through
inattention, but because no human review diffs every load-bearing phrase across 111 files, twice
a year.

→ **Divergence: controlled vocabulary is mechanically enforced.** `GLOSSARY.md` plus
`gnomon-xref`'s vocabulary check (O-GLS-02) exists to catch the class of defect this is an
instance of.

### 2.4 Generated artifacts drift from what they describe

**Evidence.** `04-governance/service_inventory.json` reports `spec: null` for DES and CSS while
`DES-Specification-v2.0.md` and `CSS-Specification-v2.0.md` both exist; it points SHML at
`middle-layer-shml.md` (v3.0) while v3.2 and v3.3 are present. Its own metadata reads:

```json
"sha256": "PENDING — compute on finalization"
```

→ **Divergence: a generated artifact is either regenerated in CI or is not trusted.** GNOMON's
`LEDGER.md` §2 table is explicitly labelled *a view, not a second source of truth*, and O-LDG-G02
is open to make it generated rather than hand-maintained.

### 2.5 Versions live in filenames, so nothing says which file is current

**Evidence.** `SHML-v3.2.md`, `SHML-v3_3.md`, and `middle-layer-shml-v3.0.md` sit side by side —
three versions, two separator conventions, no marker of currency. Also present:
`MDRE-Technical-Specification-v1.3 (1).md` (a download artifact committed verbatim),
`OERS-Specificaiton.md` (typo in a filename other documents cite), and a `nul` file in the
repository root (a Windows redirection artifact).

None of these is serious alone. Together they are what a 64-file flat directory does over time.

→ **Divergence, already in force: GNOMON puts the version in the ledger, never the filename.**
`ESSAY.md` is always current; `LEDGER.md` holds the version chain and the content anchors. Old
versions live in history, where git can find them and a reader cannot mistake them for current.

### 2.6 The coherence discipline does not govern itself

**Evidence.** ARIADNE's own `README.md` carries no version and no status line. The repository that
maintains coherence across the ecosystem is the one document not in `spec-index.md`.

→ **Divergence: `CHARTER.md` §4.9.4 — the Bootstrap Protocol is subject to its own sunset**, and
`ROADMAP.md`, `INVARIANTS.md`, the schema and the fixtures all carry `ratified-under: bootstrap`
with ledger entries. The instrument governs itself or it governs nothing.

---

## 3. What GNOMON must not lose in the move

Spinning out gains structure and risks losing context. Three things ARIADNE holds that GNOMON
depends on:

1. **The tension log is upstream.** R-32 belongs in ARIADNE's `tension-log.md`, not GNOMON's —
   the Triple-I contradiction is between two ARIADNE documents. GNOMON records it as an inherited
   tension and cites it; it does not adjudicate it.
2. **The 12 non-negotiables and The Plot** are the parent thesis. GNOMON's `CHARTER.md` §2.2
   refusal — not a universal ethics — is stated relative to them.
3. **ARIADNE reviewed the two essays GNOMON now holds.** `spec-index.md` records *Fruits of the
   Spirit — PASS (exemplary), 2026-05-15* and reviews of Judge Not. **That is the closest thing to
   a conferral record either essay has**, and it is upstream. It bears directly on O-CHT-04.

---

## 4. The migration is unfinished

`ariadne/docs/01-philosophy/` still contains `integral-ethics.md`, `fruits-of-the-spirit.md`, and
`judge-not-v1.0.md` — the foundation document and both essays GNOMON now holds. Two copies exist
and neither declares itself canonical.

Content anchors cannot detect this: they verify a file against its own recorded hash within one
repository, and are blind to a second copy diverging elsewhere. **This is the one defect in the
spin-out that GNOMON's existing machinery cannot see.**

Tracked as **O-FND-01**. Until it closes, no `ARCH.md` should cite across the boundary, because a
citation would fix a dependency on a document whose canonical location is undeclared.

---

## 5. Summary

| | ARIADNE | GNOMON |
|---|---|---|
| Tension register | ✅ 20 entries, good vocabulary | adopt → `TENSIONS.md` |
| Drift register | ✅ intentional drift named | adopt → `LEDGER.md`, approver mandatory |
| Review register | ✅ staleness columns | adopt |
| Uniform review rubric | ✅ 7 checks incl. One-Paragraph Test | adopt |
| Approval authority | ❌ 1 of 7 drift records approved | **no blank approvers** |
| `Resolved in principle` | ❌ 6 tensions parked there | **not adopted** — Open, with exit criterion |
| Continuous checking | ❌ manual, ~2 rounds/year | **CI on every push** |
| Vocabulary enforcement | ❌ Triple-I diverged unnoticed | **mechanical** (O-GLS-02) |
| Generated artifacts | ❌ inventory stale, sha256 PENDING | **regenerated or untrusted** |
| Versioning | ❌ in filenames, 3 SHMLs coexist | **in the ledger** |
| Self-governance | ❌ ARIADNE unversioned | **bootstrap marks + sunset** |
