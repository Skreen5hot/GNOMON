# Foundations

**Status:** v0.2. Inventory and dependency declarations are stated; provenance fields and license
notices are open items.

> **GNOMON is a spin-out of [`Skreen5hot/ariadne`](https://github.com/Skreen5hot/ariadne)** — the
> moral-judgment work moved into a repository that can hold it properly. ARIADNE remains the
> parent program and the coherence discipline over the wider ecosystem (111 documents, 64 service
> specs). What GNOMON inherits from its management, what it deliberately does differently, and the
> evidence for each, is [`PRECEDENT.md`](PRECEDENT.md).
>
> **The migration is unfinished.** `ariadne/docs/01-philosophy/` still holds `integral-ethics.md`,
> `fruits-of-the-spirit.md`, and `judge-not-v1.0.md`. Two copies, neither declared canonical, and
> content anchors cannot see across repositories — **O-FND-01**.

Documents GNOMON *inherits* and answers to. They are not corpus artifacts: they do not
ship as triptychs, they are not gated at G0–G3, they carry no `jurisdiction.yaml`, and
GNOMON does not own their version chains. They are here because the corpus is
unintelligible without them and because a dependency that lives only in a reader's head
is an undeclared dependency.

Two kinds sit here, and the distinction matters:

- a **substantive** foundation supplies what GNOMON argues *from* — the account of the good
  that GNOMON contributes to;
- a **method** foundation supplies how GNOMON is *written and graded* — the discipline the
  corpus applies to itself.

---

## Inventory

| Document | Kind | Version | Owned by | GNOMON depends on it for |
|---|---|---|---|---|
| [`integral-ethics.md`](integral-ethics.md) | Substantive | — (unversioned; open item F-01) | Integral Ethics program | The twelve worldviews; the tiered value ontology; integral consciousness as Tier 0; the integration procedure for value conflict |
| [`falsifiable-spec-method-v0.4.md`](falsifiable-spec-method-v0.4.md) | Method | v0.4 (ratification candidate, cycle 4) | FS method program | The one law (every requirement carries its falsifier); P1–P11; the rubric and D-0…D-3 dispositions; the finding→disposition discipline the review gates implement |

---

## What depends on what

**On `integral-ethics.md`:**

- `README.md` — "GNOMON is Integral Ethics' contribution to human behavior and well-being."
  The refusal to be a universal ethics is stated *relative to* this document.
- `corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md` — declares itself a companion paper;
  answers the measurement problem this document leaves open at its §7.3.
- Movement VII (`two-masters`) — the twelve-worldview collision it stress-tests is this
  document's typology.

**On `falsifiable-spec-method-v0.4.md`:**

- `README.md` §Method — GNOMON runs under this method, self-applied.
- The G0–G3 + CG review gates — the finding/disposition machinery is this document's §10 discipline.
- `services/**` — the mechanical/adjudicated line every service declares is this document's
  distinction between a falsifier and a judgment.
- `INVARIANTS.md` — INV-01…05 are normative clauses and therefore owe falsifiers under P2.

---

## Rules for this directory

1. **No relicensing.** See [`../LICENSE`](../LICENSE) §`foundations/`. GNOMON does not
   grant rights it does not hold.
2. **No silent edits.** A foundation document is changed *only* by its own program. A
   correction needed here is filed upstream and recorded as a finding, never patched in place.
3. **Version pinning is required before ratification depends on it.** An essay whose argument
   turns on a foundation document must cite it by version. Where the document carries no
   version, that is a defect in the dependency, not a licence to cite loosely — see F-01.
4. **Drift is a finding — but some drift is intentional.** When an upstream version supersedes
   what the corpus cites, the supersession walk (FS method P10.3) runs here before dependent
   artifacts keep their dispositions. Where the divergence is *deliberate and argued*, its
   disposition is a **drift record** in `../LEDGER.md` §1a stating the original position, the new
   position, the reason, and — unlike the precedent — **a named approver**. Adopted from ARIADNE's
   `drift-record.md`; see `PRECEDENT.md` §1.2 and §2.1 for why the approver is mandatory here.
5. **A contradiction between artifacts is a tension, not a finding.** It goes in `../TENSIONS.md`.
   A finding implies someone can fix it; some contradictions are permanent and saying so is a
   result, not a failure.

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **F-01** | `integral-ethics.md` carries no version, status line, or ratification record. Artifacts cite it as a foundation without being able to cite it precisely. | A version and status header exists upstream; dependent artifacts cite it by version. |
| **F-02** | Neither foundation document carries a license notice. Per `LICENSE`, absence is not an implicit grant. | Each document's license is stated by its owning program and recorded in the inventory table. |
| **F-03** | The Triple-I Standard (Irreversibility, Inseparability, Integrity-Maintenance) and the FNSR service specs (ARCHON, CTS, NIS, SHML, IEE, DES/CSS, ARIADNE, Will Observatory) are cited by `README.md` and will be cited by every `ARCH.md`, but exist in neither this directory nor the corpus. Only IEE is defined in-corpus (Fruits §3.4). | Each is either vendored here as a foundation, or cited by a stable external identifier + version that `gnomon-xref` can resolve. |
| **F-04** | The FS method self-scores D-3 with **acceptance readiness BLOCKED** (its O-01, O-04, O-05). GNOMON's gates inherit a method whose own witnesses are unexecuted. | Upstream readiness unblocks, or GNOMON declares which gates it runs under the blocked method and why that is acceptable. |
