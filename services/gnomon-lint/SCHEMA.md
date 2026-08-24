# `jurisdiction.yaml` — Schema

**Version:** 1.0 — **draft for adjudication (G0).** Normative for authors once ratified; not yet
ratified. Machine-readable form: [`jurisdiction.schema.json`](jurisdiction.schema.json).

**Normative language:** MUST / MUST NOT / SHOULD / MAY per RFC 2119 / RFC 8174.

Closes `ROADMAP.md` **O-JUR-01** (the two existing files disagreed on shape). Consumes the
declaration vocabulary fixed at `INVARIANTS.md` §Declaration.

---

## What this file is for

`jurisdiction.yaml` is the machine-readable panel of the triptych. The Routing Test and all
linting run against it. It carries no argument — the argument is in `ESSAY.md`. It carries the
*claims about* the argument that a service can check: what the essay decides, what it declines,
where the declined questions go, and where in the text each invariant is honored.

The governing constraint, from `services/README.md`:

> Mechanical checks verify that claims are present, structured, and cross-consistent; they
> cannot verify that claims are true.

Every field below is designed so that its **mechanical** check is real and its **adjudicated**
remainder is visible. A field whose only possible check is "a string is present" is marked as
such, so no one mistakes its green for a verdict.

---

## The five defects this schema fixes

The two files in the corpus disagreed. Reconciling them surfaced five defects, four of them in
the version published as an example in `README.md`.

### D-1 — Handoff routing lived in comments

The published example encoded each declined question's destination as a YAML comment:

```yaml
does_not_decide:
  - post-wrong first-person repair            # -> E-III.1
  - release of the offender                   # -> E-III.2
```

A comment is invisible to every parser. The linkage between *this declined question* and *that
essay* — the single most important relation in the corpus, since it is what the Routing Test
walks — was unreadable by the service built to walk it. The flat `handoffs:` list beside it
preserved the destinations but discarded which question each answered, so a dangling handoff
could be detected while a *misrouted* one could not.

**Fixed:** `does_not_decide` entries are objects carrying their own disposition.

### D-2 — `handoffs` was redundant state

With D-1 fixed, `handoffs` is derivable: it is exactly the set of `to:` values. Redundant state
that must be kept in sync is a defect; it will drift, and when it drifts the linter must pick a
winner with no basis for choosing.

**Fixed:** `handoffs` is **removed**. Services derive it. Authors maintain one list, not two.

### D-3 — A declined question had only one possible fate

The published shape assumed every declined question hands off to another essay. Two other fates
exist and the corpus's own commitments require them:

- **Reserved.** "The final truth of this person" is declined by every essay and handed to *no*
  essay, ever. It is not a gap and never generates work. Modelling it as a handoff would point
  at an essay that must never be written; modelling it as an omission would make `does_not_decide`
  silent about the corpus's most important refusal.
- **Out of scope.** `CHARTER.md` §2.2 refuses universality. A question may fall outside GNOMON's
  contribution altogether. Without this, every declined question implies a future essay, and the
  corpus is committed to unbounded growth by its own file format — which contradicts §2.2 and is
  the same defect raised independently at `routing/gaps/README.md` O-RTG-03.

**Fixed:** `disposition: handoff | reserved | out-of-scope`.

### D-4 — `reserved_strata_touched` conflated addressing with licensing

The old field listed strata "touched." But INV-03 does not forbid *touching* strata 4–5 — it
forbids *licensing verdicts* on them. `ESSAY.md` §3.6 defines all five strata and §15 is entirely
about the reserved verdict at the self; the essay addresses strata 4–5 at length while licensing
nothing there. Under the old field, an essay could either lie (omit them) or appear to violate
INV-03 (list them). The corpus's most important prohibition had no honest encoding.

**Fixed:** a `strata` map with a graded per-stratum value. This converts INV-03's core from an
adjudicated-only check into a **mechanical** one: `character` and `destiny` MUST NOT be
`licensed` or `defeasible`. It is the only invariant that gets a hard mechanical falsifier, and
it is the right one to get it.

### D-5 — Invariant declarations were unfalsifiable

`INV-01: declared` asserts conformance and carries nothing that could contradict it. Under the
method GNOMON runs under, this is the canonical defect — `foundations/falsifiable-spec-method-v0.4.md`
M1: a requirement that carries no falsifier can be satisfied vacuously, and its defects surface
at external review rather than at build time. Five `declared`s cost one keystroke each and are
indistinguishable from a rubber stamp.

**Fixed:** every declaration carries a **witness** — a locator into the panel where the invariant
is honored. See `INVARIANTS.md` §Declaration for the vocabulary; this schema enforces its shape.

---

## Fields

### Identity

| Field | Type | Required | Mechanical check | Adjudicated |
|---|---|---|---|---|
| `id` | string | **yes** | Matches `^E-(I\|II\|III\|IV\|V\|VI\|VII)\.[0-9]+$`; unique corpus-wide; directory position agrees with the movement in the id | — |
| `title` | string | **yes** | Non-empty; matches the `ESSAY.md` H1 | Whether the title describes the essay |
| `version` | string \| null | **yes** | `^[0-9]+\.[0-9]+$` or null; null iff `gate` < G3; monotone across the ledger chain | — |
| `movement` | enum I…VII | **yes** | Agrees with `id` and with directory | — |
| `gate` | enum | **yes** | One of `G0 G1 G2 G3`; agrees with `LEDGER.md`'s latest entry | Whether the gate was actually passed |
| `ratification` | object | **yes** | `status` ∈ {`pending-conferral`, `conferred`}; `record` required iff `conferred` | Whether the conferral record is adequate |
| `ratified-under` | — | **illegal** | Present ⇒ error. Declared in the schema only so its presence yields a named failure rather than a generic one | — |

**`ratification` — mechanizing `CHARTER.md` §4.5.** A jurisdiction panel is a **corpus** artifact
(§4.3), and the two marks have disjoint scopes: corpus prose never self-ratifies, so `ratification`
withholds the ratified predicate rather than granting it, and `ratified-under` — the *grant* mark —
is illegal here.

The disjointness is enforced rather than described. §4.2 rule 4 states the operational test — *a
query for self-ratified governance MUST NOT return corpus prose* — and a schema that merely
documented the rule while accepting `ratified-under` on a panel would leave that query answerable
only by convention. Fixture **RF-17** plants exactly that violation.

`conferred` requires a `record` locator for the same reason a witness is required of an invariant
declaration: a conferral claim pointing at nothing is the bare-`declared` defect (D-5) wearing a
different field name. Fixture **RF-18**.

`gate` is new. Lint needs it: most checks apply only at G0 and above, and a draft that fails a
G3 check is not yet in error. Without it every unfinished essay reports as broken, and a service
whose output is mostly false alarms stops being read.

### Spine location

| Field | Type | Required | Mechanical check | Adjudicated |
|---|---|---|---|---|
| `spine.stages` | list of enum | **yes** | Non-empty; each one of the ten spine stages | Whether the essay actually works that stage |
| `spine.scales` | list of enum | **yes** | Non-empty; each of `self dyad body` | Same |

New. `SPINE.md` **O-SPN-03** asks whether the spine itself is covered — a lifecycle stage no
essay works is a structural gap the Routing Test may never surface, because situations come from
life and may under-sample a stage. That check needs a stage→essay mapping, and the only place it
can live without drifting is here, beside the essay it describes. Adding two fields closes a
question `SPINE.md` could not otherwise answer mechanically.

### Jurisdiction

| Field | Type | Required | Mechanical check | Adjudicated |
|---|---|---|---|---|
| `decides` | list of string | **yes** | **Non-empty**; entries distinct | Whether the essay decides these, and only these |
| `does_not_decide` | list of object | **yes** | **Non-empty** — the load-bearing check | Whether the limits declared are the real ones |

`does_not_decide[]`:

| Field | Type | Required | Notes |
|---|---|---|---|
| `question` | string | **yes** | What is declined, in the essay's own terms |
| `disposition` | enum | **yes** | `handoff` \| `reserved` \| `out-of-scope` |
| `to` | essay id | iff `handoff` | MUST resolve to an existing essay id (`gnomon-xref`) |
| `stratum` | enum | iff `reserved` | Which stratum reserves it — `character` or `destiny` |
| `reason` | string | iff `out-of-scope` | Why it falls outside GNOMON's contribution |

**`does_not_decide` MUST be non-empty.** An essay that declines to declare its limits fails lint
before it reaches review. This is the falsifiable-spec discipline applied to ethics: the claim of
jurisdiction is inseparable from the disclaimer of it.

A `reserved` disposition MUST cite `character` or `destiny`. Strata 1–3 are accessible in
principle, so declining them is a scope choice — `handoff` or `out-of-scope` — not a reservation.
Permitting `reserved` at strata 1–3 would let an essay dress an ordinary omission as a sacred
limit, which is the exact move `ESSAY.md` §14 calls spiritualized condemnation running in reverse.

### Axes — INV-01

| Field | Type | Required | Mechanical check | Adjudicated |
|---|---|---|---|---|
| `axes.responsibility` | string | **yes** | Non-empty | **All of it.** Whether the location is correct |
| `axes.humility` | string | **yes** | Non-empty | Same |

Presence only. Marked here so the weakness is on the record: these two fields can be filled with
anything and will pass. Their real check is a reviewer reading them against the essay at G1.

### Registers — INV-02

| Field | Type | Required | Mechanical check |
|---|---|---|---|
| `registers` | list of enum | **yes** | Non-empty subset of `verdict`, `precaution` |

### Strata — INV-03

| Field | Type | Required |
|---|---|---|
| `strata.acts` | enum | **yes** |
| `strata.patterns` | enum | **yes** |
| `strata.intention_culpability` | enum | **yes** |
| `strata.character` | enum | **yes** |
| `strata.destiny` | enum | **yes** |

All five keys required — an omitted stratum is the ambiguity D-4 removed.

| Value | Meaning |
|---|---|
| `licensed` | The essay licenses assertions at this stratum |
| `defeasible` | Licensed only as revisable, evidence-bounded estimate, owed charity — the standing of stratum 3 per `ESSAY.md` §3.6 |
| `reserved` | Addressed, and explicitly withheld |
| `not-addressed` | The essay does not reach this stratum |

**INV-03, mechanically:**

```
strata.character  MUST NOT be in {licensed, defeasible}
strata.destiny    MUST NOT be in {licensed, defeasible}
```

Violation is a hard failure at every gate including G0, and is not waivable. This is the one
place in the corpus where a linter can genuinely enforce an invariant rather than confirm that
someone claimed it.

What it still cannot catch: an essay whose `strata.character` reads `reserved` while its prose
licenses an essence claim anyway. That is INV-03's adjudicated half, reviewed at G1. The
mechanical check makes the *declaration* honest, not the essay.

### Invariants — the declaration block

| Field | Type | Required |
|---|---|---|
| `invariants.INV-01` … `INV-05` | object | **yes**, all five keys |

Each:

| Field | Type | Required | Notes |
|---|---|---|---|
| `status` | enum | **yes** | `honored` \| `vacuously-satisfied` |
| `witness` | list of locator | **yes**, non-empty | Where the invariant is honored |
| `reason` | string | iff `vacuously-satisfied` | Why no claims of the governed kind are made |

Vocabulary and its rationale — including why there is no `waived` state — are fixed normatively
at `INVARIANTS.md` §Declaration. This schema enforces two things about it:

1. **Every declaration carries a non-empty witness.** No bare assertion validates.
2. **`vacuously-satisfied` is permitted only for INV-04 and INV-05.** INV-01 and INV-02 are
   stated universally ("*every* essay locates / distinguishes"), so vacuity is not available to
   them. INV-03 is a prohibition, satisfied by compliance, never vacuous.

**Locator format:** `[<panel>]§<section>`, panel defaulting to `ESSAY.md`.
Examples: `§1.3` · `§3.5` · `CARRIER.md§lock-and-gavel`.

`gnomon-xref` resolves each locator against the panel's headings; an unresolvable witness is a
finding. This is why the witness requirement is worth the keystrokes — it is checkable in a way
`declared` never was, and a reviewer at G1 gets a reading list instead of a search.

### Architecture

| Field | Type | Required | Mechanical check |
|---|---|---|---|
| `grounds` | list of service id | **yes** (MAY be empty) | Each resolves against the FNSR service registry |
| `carrier` | object \| null | **yes** | Null iff no carrier drafted; else `{title, version}` matching `CARRIER.md` |

`grounds` cannot be checked today: the FNSR service specs are not resolvable from this repository
(`foundations/README.md` **F-03**). Until they are, the check is deferred, not passing — a
distinction `gnomon-lint`'s report contract MUST preserve, per `services/README.md` O-SVC-03.

---

## Worked example

The normative witness for this schema is
[`corpus/I-epistemology/judge-not/jurisdiction.yaml`](../../corpus/I-epistemology/judge-not/jurisdiction.yaml)
— E-I.2, migrated. Per FS method P5, rule and witness MUST agree; if the schema and that file
disagree, work halts until the conflict is recorded and resolved.

A deliberately failing witness is
[`corpus/I-epistemology/fruits-of-the-spirit/jurisdiction.yaml`](../../corpus/I-epistemology/fruits-of-the-spirit/jurisdiction.yaml)
— E-I.1 has never declared a jurisdiction, and its file is written to fail. Both are needed:
one shows the schema accepting a conformant panel, the other shows it rejecting a real
non-conformant one rather than a synthetic fixture.

---

## Migration from the v0 shape

| v0 | v1.0 |
|---|---|
| `does_not_decide: [string]` with `# ->` comments | `does_not_decide: [object]` with `disposition` + `to` |
| `handoffs: [id]` | **removed** — derived from `does_not_decide[].to` |
| `reserved_strata_touched: [enum]` | **replaced** by `strata: {five keys → graded enum}` |
| `invariants: {INV-nn: declared}` | `invariants: {INV-nn: {status, witness, reason?}}` |
| — | `gate` added (required) |
| — | `spine.stages`, `spine.scales` added (required) |
| `status: stub` (fruits only) | **removed** — `gate` carries this; a stub is a pre-G0 artifact |

The `status: stub` key is dropped deliberately. It was invented in the scaffold to let an
undeclared panel parse; `gate` does that job properly. A stub is an essay below G0, and
`gate: G0` failing its checks is the correct signal — a separate "this is a stub, be gentle"
flag is the beginning of a waiver system, which `INVARIANTS.md` §Declaration rules out.

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-SCH-01** | Locator resolution is specified but not implemented; §-numbers must be resolved against markdown headings, and the essays number sections in prose (`### 1.3 Two Axes…`) rather than in anchors. | Resolver written in `gnomon-xref`; red fixture for an unresolvable witness. |
| **O-SCH-02** | `decides` entries are free strings. Nothing prevents two essays from claiming the same decision, and nothing detects it. Overlapping jurisdiction is a real corpus defect the Routing Test would surface only as a contested routing, late. | Decide whether `decides` needs controlled phrasing or a cross-essay overlap check. |
| **O-SCH-03** | This schema is ratified by no one. It is a G0 draft that already governs two corpus artifacts. | Reviewed at G1 with the rest of SVC-1; conflicts with the ratified E-I.2 panel treated as findings against the schema, not the essay. |
| **O-SCH-04** | `gate` duplicates state that `LEDGER.md` owns. The cross-check is specified; the source of truth is not declared. | Declare the ledger canonical and `gate` a derived mirror, or the reverse. |
