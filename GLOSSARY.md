# Glossary

**Status:** v0.1 — **stub.** Terms already fixed by ratified artifacts are recorded below with
their sources. Terms the corpus uses but has not yet defined are listed as pending. The
controlled-vocabulary lint (`gnomon-xref`) cannot run until every entry has a source and a
definition, so this file is the gate on that service.

**How to read an entry.** *Source* names the artifact and section where the term is defined.
A term with no source is not yet controlled vocabulary and MUST NOT be relied on as though it
were.

---

## Controlled vocabulary — defined

### gavel
A verdict on a person as such: their hidden motives, settled character, culpability before God,
or ultimate destiny. Claims the last word. Forbidden — this is what "judge not" forbids.
Distinguished from the **lock** by tense and by scope: the gavel speaks about what someone
*finally is*.
*Source: `corpus/I-epistemology/judge-not/CARRIER.md`; formalized as "condemnation" in that
essay's `ESSAY.md` §1.2, §3.4.*

### lock
A present-tense, revisable decision about what one will and will not entrust to another. A
boundary. It is a real judgment — about present trust and present risk — but it refuses to
claim everything. Licensed.
*Source: `corpus/I-epistemology/judge-not/CARRIER.md`; formalized as "precaution" in `ESSAY.md` §3.5.*

### knock
The third use of a door, alongside locking and pronouncing: going to a person directly —
*to* them rather than *about* them — naming the wrong, and seeking the relationship's repair.
Costlier than either alternative; not always safe, and not always effective.
*Source: `corpus/I-epistemology/judge-not/CARRIER.md`; `ESSAY.md` §6.*

### registers (verdict / precaution)
The two questions judgment can answer. A **verdict** answers *what is true of this person?* and
may never exceed evidence. A **precaution** answers *what may I responsibly permit, given what
could be true?* and may exceed a verdict — purchasing that liberty by remaining provisional,
proportionate, and revisable. A precaution that hardens into a permanent verdict without new
evidence has changed registers illicitly.
*Source: `corpus/I-epistemology/judge-not/ESSAY.md` §3.5. Basis of INV-02.*

### strata (the reserved domain)
The five-level map of what "the heart belongs to God" reserves, in order of decreasing access:

1. **Acts** — public; the proper object of human judgment.
2. **Patterns** — inferable with care, time, and resistance to premature closure.
3. **Intention and culpability** — partially accessible; defeasible, evidence-bounded, owed maximal charity.
4. **Character as God sees it** — inaccessible. No accumulation of pattern-evidence sums to it.
5. **Destiny** — absolutely reserved.

*Source: `corpus/I-epistemology/judge-not/ESSAY.md` §3.6. Basis of INV-03.*

### the two axes
**Responsibility** rises as another approaches one's care. **Humility** rises as judgment
approaches the interior. The two turn in opposite directions in the same moment: more decisive
about the situation, less presumptuous about the soul.
*Source: `corpus/I-epistemology/judge-not/ESSAY.md` §1.3. Basis of INV-01.*

### fruits (the nine)
Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control
(Galatians 5:22–23), treated as **phenomenological indicators** of integral alignment — lived
qualities recognized by formed persons — not as metrics, prescriptive virtues, or algorithmic
criteria.
*Source: `corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md` §2.3, §2.4.*

### recognizer
A person with sufficient formation, integral consciousness, practiced discernment, and epistemic
humility to reliably perceive the presence or absence of the fruits.
*Source: `corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md`, Glossary.*

### carrier
The vernacular panel of a triptych: the principle in ordinary language, anchored in one concrete
scene. Falsified by the **Carrier Test** — a principle that cannot walk a parent through a
sleepover decision in plain words is not understood well enough to become architecture.
*Source: `README.md`, Triptych Discipline. Worked example: `corpus/I-epistemology/judge-not/CARRIER.md`.*

### the gnomon condition
The growth rule taken from Euclid: a gnomon is the piece which, added to a figure, yields a
larger figure *similar* to the original. The corpus grows only by gnomons — every essay added
must leave the whole self-similar. Integrity-maintenance stated as a growth rule; operationalized
as the Corpus Invariants.
*Source: `README.md`, The name; `INVARIANTS.md`.*

### jurisdiction
What an essay decides, what it declines to decide, and where the declined questions go. The
claim of jurisdiction is inseparable from the disclaimer of it: `does_not_decide` must be
non-empty or the essay fails lint before review.
*Source: `README.md`, `jurisdiction.yaml`.*

---

## Pending definition

These terms are in use and not yet defined. Each is a lint failure waiting to happen once
`gnomon-xref` enforces controlled vocabulary.

| Term | Used in | Note |
|---|---|---|
| **Triple-I Standard** | `README.md`, `CHARTER.md` | Irreversibility, Inseparability, Integrity-Maintenance. Cited as the grounding of the whole program; defined nowhere in this repository. See `foundations/README.md` F-03. |
| **FNSR** | `README.md`, every future `ARCH.md` | The service architecture the corpus grounds. Expansion not stated in-repo. |
| **ARCHON, CTS, NIS, SHML, DES/CSS, ARIADNE, Will Observatory** | `README.md`, `ARCH.md` panels | Service names. Only **IEE** (Integral Ethics Engine) is defined in-corpus, at `corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md` §3.4. |
| **the singular project** | `README.md`, `CHARTER.md` | The parent program GNOMON is the human-ethics arm of. |
| **ratifying architect** | `README.md`, `CHARTER.md` | Role named; conferral unspecified — `CHARTER.md` O-CHT-01. |
| **situation / route / gap** | `routing/` | Fixed by `routing/PROTOCOL.md`, itself a stub. |
| **integral consciousness** | Corpus-wide | Defined upstream in `foundations/integral-ethics.md` §4.3.1. Needs an in-corpus entry pinned to an upstream version — `foundations/README.md` F-01. |
| **discernment** | `corpus/I-epistemology/judge-not/ESSAY.md` | The essay explicitly flags a terminological hazard at §1.4: its broad sense (disciplined evaluation of conduct) differs from the technical *diakrisis pneumatōn* of the tradition. Both senses will appear in the corpus; the glossary must carry both and mark which is which. |

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-GLS-01** | Define every term in the pending table, or demote it to uncontrolled prose. | Table empty; every controlled term carries a source. |
| **O-GLS-02** | Decide the controlled-vocabulary enforcement rule: does `gnomon-xref` flag *undefined* terms, *inconsistent* uses, or both? Flagging undefined terms in prose requires a term list; flagging inconsistency requires definitions. | Rule stated; implemented in `services/gnomon-xref`; red fixture seeded. |
| **O-GLS-03** | Homonym discipline for `discernment` (§1.4 hazard) and for `judgment`, which the corpus uses in at least three senses (perception, moral evaluation, prudential judgment). | Sense-tagged entries written; usage rule stated. |
