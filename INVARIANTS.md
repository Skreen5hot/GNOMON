# The Corpus Invariants

**Status:** v0.1 — **stub.** The five invariant *statements* below are carried verbatim from
`README.md` and are settled. Everything a linter or a reviewer would need in order to *apply*
them — scope, falsifier, declaration syntax, and the mechanical/adjudicated split — is **not
yet written.** No artifact should be gated against this file until it reaches v1.0.

**Normative language:** MUST / MUST NOT / SHOULD / MAY per RFC 2119 / RFC 8174, once
normative text exists. This stub contains none.

---

## Why five, and why they bind

The invariants are the Euclidean gnomon condition made checkable: the corpus grows only by
additions that leave the whole self-similar. An essay that violates one has not merely erred;
it has broken the corpus, because the shape the corpus claims to hold is exactly these five
constraints holding across every artifact.

Each invariant is a **normative clause** and therefore owes a falsifier under the Falsifiable
Spec method's one law (P2). Supplying those falsifiers is the work this stub does not yet do.

---

## The five

### INV-01 — Axis Location

> Every essay locates its subject on the two axes: responsibility rises as another approaches
> one's care; humility rises as judgment approaches the interior.

- **Source:** `corpus/I-epistemology/judge-not/ESSAY.md` §1.3
- **Normative elaboration:** *pending* (O-INV-01)
- **Falsifier:** *pending* (O-INV-03)

### INV-02 — Register Separation

> Every essay distinguishes what belief requires (verdicts, bounded by evidence) from what
> action permits (precautions, bounded by stakes and revisability).

- **Source:** `corpus/I-epistemology/judge-not/ESSAY.md` §3.5, retrieved from Aquinas, *ST* II-II q.60
- **Normative elaboration:** *pending* (O-INV-01)
- **Falsifier:** *pending* (O-INV-03)

### INV-03 — Reserved Domain

> No artifact licenses verdicts on strata 4–5 (character-as-God-sees-it; destiny). Access to
> strata 1–3 (acts; patterns; intention/culpability) is graded and defeasible.

- **Source:** `corpus/I-epistemology/judge-not/ESSAY.md` §3.6 — the five-strata map
- **Normative elaboration:** *pending* (O-INV-01)
- **Falsifier:** *pending* (O-INV-03)

### INV-04 — Pattern Over Instance

> Character claims require pattern evidence; no essence claims from single instances.

- **Source:** `corpus/I-epistemology/judge-not/ESSAY.md` §5.1; `corpus/I-epistemology/fruits-of-the-spirit/ESSAY.md` §5.6
- **Normative elaboration:** *pending* (O-INV-01)
- **Falsifier:** *pending* (O-INV-03)

### INV-05 — Present-Tense Boundaries

> Every licensed boundary is provisional and revisable — "what I can responsibly permit now,"
> never "what you finally are."

- **Source:** `corpus/I-epistemology/judge-not/ESSAY.md` §3.5; carried in vernacular as the
  lock/gavel distinction in that essay's `CARRIER.md`
- **Normative elaboration:** *pending* (O-INV-01)
- **Falsifier:** *pending* (O-INV-03)

---

## Declaration and conformance

Conformance is **declared** per-essay in `jurisdiction.yaml` and **adjudicated** at review.
These are not the same check and must never be reported as one:

| | Mechanical (`gnomon-lint`) | Adjudicated (G1 → G2) |
|---|---|---|
| **Asks** | Is a declaration present, well-formed, and a permitted value? | Does the essay *actually* honor the invariant? |
| **Can conclude** | The claim is present and structured | The claim is true |
| **Cannot conclude** | Anything about truth | — |

The declaration vocabulary used in `jurisdiction.yaml` is **not yet fixed** — see O-INV-02.
Until it is, `declared` is the only value in use, and it means only that the author asserts
conformance.

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-INV-01** | Normative elaboration for each of INV-01…05: scope, MUST/SHOULD force, and what a violation looks like. | Five elaborations written; each reviewed at G1. |
| **O-INV-02** | Declaration vocabulary and semantics. Is `declared` sufficient, or is a three-state (`declared` / `not-applicable` + reason / `waived` + adjudication ref) required? A blanket `declared` on all five is currently indistinguishable from a rubber stamp. | Vocabulary fixed here; schema updated in `services/gnomon-lint`; red fixture seeded for the rubber-stamp case. |
| **O-INV-03** | A falsifier per invariant, per FS method P2. Each must state which side of the mechanical/adjudicated line it sits on. | Five falsifiers stated; mechanical ones implemented in `gnomon-lint`; red fixtures pass by failing. |
| **O-INV-04** | Precedence. If two invariants conflict in a hard case, what governs? INV-03 is plausibly lexically prior to the rest, but this has not been adjudicated. | Precedence rule stated, or genuine independence argued and recorded. |
| **O-INV-05** | Versioning of this file, and what happens to already-ratified artifacts when an invariant's normative text changes. Per FS method P10.3 a supersession walk is owed. | Supersession protocol for this file stated. |
