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

## Declaration

**Status: fixed at v0.1 as a G0 draft.** Closes O-INV-02. Enforced structurally by
`services/gnomon-lint/SCHEMA.md`; the normative content is here.

Conformance is **declared** per-essay in `jurisdiction.yaml` and **adjudicated** at review.
These are not the same check and must never be reported as one:

| | Mechanical (`gnomon-lint`) | Adjudicated (G1 → G2) |
|---|---|---|
| **Asks** | Is a declaration present, well-formed, and witnessed? | Does the essay *actually* honor the invariant? |
| **Can conclude** | The claim is present, structured, and points somewhere real | The claim is true |
| **Cannot conclude** | Anything about truth | — |

### Every declaration MUST carry a witness

The scaffold's vocabulary was a single value, `declared`, and it was worthless. Five `declared`s
cost one keystroke each, assert conformance, and carry nothing that could contradict them. Under
the method this corpus runs under, that is the canonical defect —
`foundations/falsifiable-spec-method-v0.4.md` M1: *a requirement that carries no falsifier can
be satisfied vacuously; its defects surface at external review, not at build time.*

So the vocabulary is not a set of labels. It is a **rule about evidence**:

> A declaration of conformance MUST name where in the artifact the invariant is honored.

```yaml
invariants:
  INV-01:
    status: honored
    witness: ["§1.3", "§9.1"]
```

A witness is a locator — `[<panel>]§<section>`, panel defaulting to `ESSAY.md`. `gnomon-xref`
resolves it against the panel's headings; an unresolvable witness is a finding.

This costs the author real work, and that is the point: the FS method's M2 forcing function says
that where an author cannot write the expected output, the requirement was named rather than
defined. An author who cannot point at where INV-02 is honored has not honored it.

It also changes what a reviewer receives at G1. Under `declared`, a reviewer got an assertion and
had to search the essay to test it. Under a witness, they get a reading list, and their first
question becomes answerable in a minute: *does §3.5 actually do what the panel says it does?*

### The two statuses

| Status | Meaning | Requires |
|---|---|---|
| `honored` | The artifact actively honors the invariant. | `witness` — where |
| `vacuously-satisfied` | The artifact makes no claims of the kind this invariant governs, so it is satisfied by having nothing to violate. | `witness` — where the absence is visible; and `reason` |

**Which invariants may be vacuous.** This follows from how each is worded, not from convenience:

| | Form | Vacuity available? |
|---|---|---|
| **INV-01** | Universal — "*every* essay locates its subject on the two axes" | **No.** Every essay has a subject and a location. |
| **INV-02** | Universal — "*every* essay distinguishes…" | **No.** |
| **INV-03** | Prohibition — "*no* artifact licenses verdicts on strata 4–5" | **No.** A prohibition is satisfied by compliance, and compliance is a state, not an absence. |
| **INV-04** | Conditional — "*character claims* require pattern evidence" | **Yes**, where the essay makes no character claims. |
| **INV-05** | Conditional — "*every licensed boundary* is provisional" | **Yes**, where the essay licenses no boundaries. |

`vacuously-satisfied` requires a reason precisely because vacuous satisfaction is the failure
mode M1 warns about. Naming it converts a silent nothing into a claim a reviewer can reject.

### There is no waiver

No `waived` status exists, and none may be added.

This is not strictness for its own sake. It follows from what an invariant is in this corpus:

> An essay that violates one has broken the corpus.

A constraint that can be set aside for a sufficiently good essay is not an invariant; it is a
strong preference with a nice name. And the Euclidean condition the invariants encode does not
survive exceptions — a figure that is *nearly* similar to the original is a different figure. One
waived invariant does not weaken one essay; it ends the corpus's claim to grow self-similarly,
because every later artifact now inherits a shape that admits exceptions.

The pressure to add a waiver will be real, and it will arrive attached to a good essay that
someone does not want to lose. The correct responses are: fix the essay, narrow its declared
jurisdiction until the invariant holds, or raise a finding against the *invariant* and change it
by supersession (O-INV-05) — which is slow, visible, and re-opens every artifact that depended on
the old text. That slowness is the feature. An invariant that can be changed as easily as it can
be waived protects nothing.

An artifact that cannot honor an invariant does not receive an exemption. It does not pass G0.

### INV-03 is the one with mechanical teeth

Four of the five invariants can only be checked for *declaration* — a witness is present and
resolves; whether the essay honors it is adjudicated. INV-03 is different. Because the reserved
domain is enumerable, `jurisdiction.yaml` encodes it as a graded map over the five strata, and
the core prohibition becomes machine-checkable:

```
strata.character  MUST NOT be licensed or defeasible
strata.destiny    MUST NOT be licensed or defeasible
```

Hard failure at every gate including G0. Not waivable — see above.

What this still cannot catch: an essay declaring `character: reserved` while its prose licenses
an essence claim anyway. The declaration is made honest by the linter; the essay is made honest
at G1. Keeping those two apart is `services/README.md`'s central honesty, and a report that
blurred them would let an unreviewed artifact pass as a verified one — which is
self-certification, which `CHARTER.md` §2.3 forbids.

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-INV-01** | Normative elaboration for each of INV-01…05: scope, MUST/SHOULD force, and what a violation looks like. **Still open** — the Declaration section fixes how conformance is *claimed*, not what each invariant *means* at its edges. | Five elaborations written; each reviewed at G1. |
| ~~**O-INV-02**~~ | ~~Declaration vocabulary and semantics.~~ **CLOSED at v0.1.** Resolved not as a set of labels but as a rule about evidence: every declaration carries a witness. Two statuses, vacuity restricted to the two conditional invariants, no waiver. See §Declaration; structure enforced by `services/gnomon-lint/SCHEMA.md`. | — |
| **O-INV-03** | A falsifier per invariant, per FS method P2. **Partially discharged.** INV-03 now has a real mechanical falsifier (the strata constraint). The other four have a *declaration* falsifier — an unresolvable or absent witness fails — but no falsifier bearing on conformance itself. That gap is honest, not fixable by lint, and must be stated in the report contract rather than papered over. | Four remaining falsifiers stated, each assigned to G1 with a review procedure; red fixtures for the declaration falsifiers seeded. |
| **O-INV-04** | Precedence. If two invariants conflict in a hard case, what governs? INV-03 is plausibly lexically prior to the rest, but this has not been adjudicated. | Precedence rule stated, or genuine independence argued and recorded. |
| **O-INV-05** | Versioning of this file, and what happens to already-ratified artifacts when an invariant's normative text changes. Per FS method P10.3 a supersession walk is owed. | Supersession protocol for this file stated. |
