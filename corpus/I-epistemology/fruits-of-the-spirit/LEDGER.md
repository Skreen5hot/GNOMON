# E-I.1 The Fruits of the Spirit — Findings Ledger

**Status:** v0.1 — **stub.** No ledger was kept for this essay's revision cycles. What exists is
`ESSAY.md` Appendix A, "Summary of Responses to Critiques," which records critiques and how the
text answered them but does not carry finding ids, dispositions, reviewer identity, or a version
chain.

---

## Pre-chain content anchor

**Recorded 2026-08-23.** Pre-chain: unwitnessed, self-recorded, to be re-anchored when
`gnomon-ledger` exists (O-LDG-F04).

| Panel | SHA-256 | Bytes |
|---|---|---|
| `ESSAY.md` | `879f46cec1b7be0ed276398355129c51cd309f732e2caa145481a441acf109bb` | 66288 |

**Anchored byte stream: the committed git blob**, which remains canonical. `.gitattributes`
(2026-08-24) makes a *fresh checkout* byte-identical to the blob, but does not rewrite a working
tree that already exists — see `../judge-not/LEDGER.md`.

#### Anchor supersession — 2026-08-24

| | Value |
|---|---|
| **Superseded anchor** | `14c0fdc78811fa323b60aee32096c6fabf4c7e357c37547fdcd5c8e579561735` (67055 bytes, commit `dc85db5`) |
| **Cause** | Line-ending normalization under `.gitattributes`. This file was one of two in the repository stored with CRLF; all others were LF |
| **Content changed?** | **No — proven, not asserted.** Stripping CR from the superseded blob reproduces the new blob exactly: both hash to `879f46ce…`. The 767 bytes of difference are 767 carriage returns |

Verify the claim independently:

```
git show dc85db5:corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md | tr -d '\r' | sha256sum
```

An anchor over a `pending-conferral` text may not move on an author's say-so. It moved here, so
the proof is recorded beside it and the superseded value is retained rather than overwritten —
`CHARTER.md` §4.5.2: what is pending is conferral, not identity, and identity is exactly what an
anchor fixes.

The anchor proves **integrity, not provenance**, and here the gap is wider than for E-I.2: there
is no version line in the text, no conferral record, and no v1.0 on file to supersede. What is
anchored is *a* text claimed to be v2.0, not a text shown to be it.

---

## Version chain

| Version | Gate | Date | Note |
|---|---|---|---|
| v2.0 | claimed **ratified** | — | `README.md` lists E-I.1 as ratified formal v2.0 |

**The claim is unverified.** `ESSAY.md` carries no version line, no status header, and no
ratification record. The v1.0 that v2.0 supersedes is not on file, and no supersession walk is
recorded. Under `CHARTER.md` §2.3 — the corpus does not self-certify — a ratification without a
conferral record is not a ratified artifact with a paperwork defect; it is a claim awaiting
conferral. See `ROADMAP.md` O-RDM-02 and `CHARTER.md` O-CHT-04.

Contrast `../judge-not/` — E-I.2 carries an explicit version line and a full revision record.
The two ratified essays in Movement I are not documented to the same standard.

---

## Findings

**None ledgered.** `ESSAY.md` Appendix A records responses to critiques, including reframing an
overclaim on algorithmic impossibility (→ §1.2, §2.3, §3.3, §9.1). Transcribing that appendix
into ledgered findings requires assigning ids and classifying dispositions — an adjudication act,
not a transcription act — and has not been performed.

Judge Not's ledger shows the target shape: `../judge-not/LEDGER.md`.

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-LDG-F01** | No version, status line, or ratification record on `ESSAY.md`. | Header added and conferral record produced, or the v2.0 claim restated as provisional. |
| **O-LDG-F02** | Appendix A critiques not converted to ledgered findings with ids and dispositions. | Findings minted (prefix `F-`), dispositioned, closure verified. |
| **O-LDG-F03** | v1.0 → v2.0 supersession is unrecorded; per the FS method's P10.3 a walk is owed. | Walk executed and recorded, or the absence declared with reasons. |
