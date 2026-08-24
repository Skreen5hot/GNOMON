# E-I.2 Judge Not — Findings Ledger

**Status:** v0.1 — **transcribed, not reconstructed.** The findings below are carried verbatim
from the revision record at `ESSAY.md` Appendix A (v0.1 → v1.0). They are recorded here because
a ledger that lives only inside the artifact it audits cannot be hash-chained or machine-checked.

**What this ledger does not yet have:** disposition classification, hash chain, reviewer
identity, and the G1/G2 dates. See Open items.

---

## Pre-chain content anchors

**Recorded 2026-08-23.** `gnomon-ledger` does not exist, so no hash chain protects these texts.
Until it does, these anchors are the only evidence that the files in this directory are the texts
that were ratified. They are **pre-chain**: unwitnessed, self-recorded, and to be re-anchored
into the chain when it exists (O-LDG-J05).

| Panel | SHA-256 | Bytes |
|---|---|---|
| `ESSAY.md` | `579416aafb011dfae13a61aa51782cda8efaa1ab67950d022281fd494decb2a0` | 73840 |
| `CARRIER.md` | `198cdad3a9af8c1baf06ed028d9baf6e6441f51b4ec9b763f73076584d57c43d` | 21394 |

**Anchored byte stream: the committed git blob**, unchanged since commit `dc85db5`. Both panels
were already stored LF and were **not** affected by the 2026-08-24 line-ending normalization; the
values above are original. (`../fruits-of-the-spirit/LEDGER.md` records a supersession, because
that file was one of the two stored with CRLF.)

Naming the byte stream is load-bearing and remains so. Verify against the blob:

```
git cat-file blob $(git rev-parse HEAD:corpus/I-epistemology/judge-not/ESSAY.md) | sha256sum
```

`.gitattributes` (2026-08-24) narrows the exposure without removing it. In a **fresh checkout**
the working tree is byte-identical to the blob and `sha256sum <file>` agrees — confirmed against
a clean clone. But git does not rewrite a working tree that already exists, so a tree predating
the policy can still hold CRLF against an LF index; this repository's own tree reports
`i/lf w/crlf` today. An anchor verified against such a tree fails for no reason at all.

**The blob is canonical. The working tree is a convenience that is only sometimes equal to it.**

These anchors prove **integrity, not provenance**. They establish that the text has not changed
since 2026-08-23; they do not establish that this is the text a reviewer ratified, because no
conferral record exists (O-LDG-J01). A hash over an unwitnessed adjudication proves only that
nobody edited the unwitnessed thing.

---

## Version chain

| Version | Gate | Date | Note |
|---|---|---|---|
| v0.1 | G0 draft | — | Superseded |
| v1.0 | G3 ratified | — | Current. Carrier *The Gavel and the Watch* v1.0 ratified at CG |

Dates are **not on file** (O-LDG-J01). Under `CHARTER.md` §2.3 a ratification claim requires a
conferral record; this chain currently records the promotion without it.

---

## Findings — review cycle 1 (v0.1 → v1.0)

Disposition column is **pending classification** against the `gnomon-ledger` vocabulary
(ACCEPT / MODIFY / REJECT). The prose below is the disposition as recorded by the author;
classifying it is an adjudication act, not a transcription act, and has not been performed.

| Id | Finding | Disposition (as recorded) | Location | Class |
|---|---|---|---|---|
| **J-01** | Matthew 7:2 and Luke's two verbs missing | Installed: the measure as Christ's own warrant; *krinein* / *katadikazein* lexical support for the central distinction; measure returns as promise at the close | §1.2, §2.1, §15 | *pending* |
| **J-02** | Reflexive case incomplete; 1 Cor. 4:3–5 keystone absent | New climax section: examination without self-verdict; both despairing and acquitting self-sentences forbidden; Luke 18:9–14 and the counsel to the scrupulous added | §15 (new), §18 | *pending* |
| **J-03** | Victim, accuser, and institution absent | New section on delegated judgment: why delegation (position, aggregation, authority); duties to reporter and accused; institutional log; category-error diagnosis of "we cannot judge his heart" | §11 (new) | *pending* |
| **J-04** | Thomist silence | Retrieval section added; q. 60 apparatus (act of justice, three corruptions, favorable interpretation, remedy exception) installed at load-bearing points; internal/external forum architecture | §4 (new), §3.1, §5.2, §8, §9.2, §11.5 | *pending* |
| **J-05** | §3.5 maxim vs. §8.2 precaution contradiction | Two-register principle stated where the maxim appears: verdicts may not exceed evidence; precautions may exceed verdicts and must remain revisable | §3.5, §9.2 | *pending* |
| **J-06** | Circles conflate two axes; spouse's circle status | Evidence-quantity vs. interpretive-position distinguished explicitly; spouse re-seated as the household's innermost chamber; general law stated and carried through institutions and self | §9.5, §11.1, §12.1 | *pending* |
| **J-07** | Condemnation miscategorized as fourth operation | Taxonomy rebuilt: three operations with three characteristic corruptions (suspicion, essentializing, domination); condemnation as the corrupted sequence, mapped to Aquinas's triple | §3.1–3.4, §4 | *pending* |
| **J-08** | Reserved domain under-specified | Five-strata jurisdiction map: acts, patterns, intention/culpability, character-as-God-sees-it, destiny; vocabulary used throughout | §3.6, §9.3, §11.2, §15, §16 | *pending* |
| **J-09** | Kenotic counter-position not steelmanned | New section: Tolstoy and Zosima at full strength; stewardship answer (kenosis licensed over one's own goods only); John 10:11; Zosima received as standing-before-God truth | §10 (new) | *pending* |
| **J-10** | "Discernment" *terminus technicus* unmarked | Terminology note distinguishing *diakrisis pneumatōn* / Ignatian usage from this essay's broader sense; Ignatian tradition returned in formation section | §1.4, §12.4 | *pending* |
| **J-11** | Formation diagnosed but not prescribed; Fruits companion uncited | Mirror-for-the-log section: self known by fruits and witnesses; examen, confession, direction as formation practices; companion paper cross-referenced as the recognition-half of one epistemology | §12.4, §2.4, §5.1, §13 | *pending* |
| **Editorial** | Style and citation discipline | Scripture confined to blockquotes with citations; principles set as bold callouts; ESV named; central antithesis and two-axes principle each held to load-bearing appearances; rhetorical-question piles pruned; staccato reserved for peaks; actor–observer claim qualified per Malle (2006) | throughout | *pending* |

**Ledger closure:** 12 of 12 findings carry a recorded disposition. Closure in the
`gnomon-ledger` sense — every finding dispositioned *and classified*, with a verifying hash
chain — is **not** achieved.

---

## Downstream findings — the carrier (CG)

*None recorded.* `CARRIER.md` was ratified v1.0 at the Carrier Gate. Whether that gate produced
findings, and whether a no-findings cycle was itself recorded as a finding per `CHARTER.md` §3,
is not on file. See O-LDG-J02.

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-LDG-J01** | Version chain lacks dates, reviewer identity, and conferral record. | G1/G2/G3 records produced, or v1.0 restated as provisional per `CHARTER.md` O-CHT-04. |
| **O-LDG-J02** | Carrier Gate produced no recorded findings. A review cycle that produces no findings is itself a finding. | CG record produced, or the no-findings finding raised. |
| **O-LDG-J03** | Dispositions unclassified against ACCEPT / MODIFY / REJECT; no hash chain. | `gnomon-ledger` schema defined (SVC-1); dispositions classified at adjudication; chain initialized. |
| **O-LDG-J04** | Appendix A and this file are now two copies of one record and will drift. | Decide which is canonical; the other becomes a generated view or is removed. |
