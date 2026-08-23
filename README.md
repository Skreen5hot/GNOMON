# GNOMON

**The Integral Ethics Corpus**

*A jurisdictional map of human moral judgment — specified precisely enough to build a synthetic moral person against, and honest enough to declare what it does not decide.*

**README v0.1 — draft for adjudication**

---

## The name

**γνώμων** (*gnōmōn*) carries three meanings, and this project requires all of them.

1. **The sundial's indicator.** The gnomon produces no light. It makes light legible. This corpus does not produce human flourishing; it makes flourishing measurable and judgment accountable. (*The Fruits of the Spirit* — the measure.)
2. **Euclid's gnomon.** In geometry, a gnomon is the piece which, added to a figure, yields a larger figure *similar* to the original. The corpus grows only by gnomons: every essay added must leave the whole self-similar. This is integrity-maintenance stated as a growth rule. (The Corpus Invariants.)
3. **The root sense.** From γιγνώσκω, *to know*: a gnomon is "one who discerns, an examiner, a judge." (*Judge Not* — the discernment.)

Measure. Grow without losing shape. Judge within jurisdiction. One word.

---

## What GNOMON claims — and refuses to claim

GNOMON is the human-ethics program of the singular project: a synthetic moral person grounded in the Triple-I Standard (Irreversibility, Inseparability, Integrity-Maintenance). You cannot ground an agent in an ethics no one has specified. GNOMON is the specification: which judgments a finite agent — carbon or silicon — is licensed to reach, on what evidence, at what thresholds, and which verdicts no judge may ever pronounce.

**Claimed contribution: jurisdiction.** Every essay maps a region of moral life, declares what it decides, declares what it does *not* decide, and names the handoffs. The corpus is complete when concrete situations stop finding gaps (see: The Routing Test).

**Refused claims (normative — see `CHARTER.md`):**

- GNOMON is **not** a replacement for tradition, community, or grace. Movement VII states this in load-bearing form, not as a disclaimer.
- GNOMON is **not** a universal ethics. It is Integral Ethics' contribution to human behavior and well-being — one instrument, offered with its calibration documents attached.
- GNOMON does **not** self-certify. Every artifact passes hostile review and external adjudication before ratification. The corpus practices on itself what ARCHON requires of the agent: conferral, not self-declaration.
- GNOMON licenses **no verdicts on persons.** Its subject is acts, patterns, thresholds, and reserved domains — never the final truth of any soul, human or synthetic.

---

## The Spine

Every moral act has a lifecycle. The corpus covers it end to end:

```
see → judge → speak → bind → act → fail → repair → form → endure → hope
```

worked at three scales — **the self, the dyad, the body** — across seven movements.

| Movement | Domain | Essays | Status |
|---|---|---|---|
| **I. Epistemology** | Recognition, discernment, conscience | 3 | 2 of 3 ratified |
| **II. The Word** | Truth, promise, display | 3 | queued |
| **III. Repair** | Repentance, forgiveness, reconciliation | 3 | **next** |
| **IV. Claims of Others** | Love's order, force, desert, stewardship | 4 | backlog |
| **V. Formation** | Habit, desire, fear | 3 | backlog |
| **VI. The Body** | Authority, institutional acts | 2 | backlog |
| **VII. Limits & Horizon** | Incommensurability, tragedy, suffering, hope | 4 | backlog |

Movements I–II establish what may be known and said. III–IV govern the act and its aftermath between persons. V–VI govern formation and the corporate scale. VII is the system stress-testing itself — the "not the be-all, end-all" made structural.

---

## The Corpus Invariants

Five invariants bind every artifact. An essay that violates one has broken the corpus. They are the Euclidean gnomon condition: growth must preserve shape.

| ID | Invariant | Statement |
|---|---|---|
| **INV-01** | Axis Location | Every essay locates its subject on the two axes: responsibility rises as another approaches one's care; humility rises as judgment approaches the interior. |
| **INV-02** | Register Separation | Every essay distinguishes what belief requires (verdicts, bounded by evidence) from what action permits (precautions, bounded by stakes and revisability). |
| **INV-03** | Reserved Domain | No artifact licenses verdicts on strata 4–5 (character-as-God-sees-it; destiny). Access to strata 1–3 (acts; patterns; intention/culpability) is graded and defeasible. |
| **INV-04** | Pattern Over Instance | Character claims require pattern evidence; no essence claims from single instances. |
| **INV-05** | Present-Tense Boundaries | Every licensed boundary is provisional and revisable — "what I can responsibly permit now," never "what you finally are." |

Normative text lives in `INVARIANTS.md`. Conformance is **declared** per-essay (machine-checked) and **adjudicated** at review (human-gated). See: Services.

---

## The Triptych Discipline

Every topic ships as three artifacts. A topic missing a panel is incomplete.

| Panel | File | Function | Falsification |
|---|---|---|---|
| **Formal essay** | `ESSAY.md` | Full argument, tradition engaged, findings discharged | Hostile review; adjudication ledger |
| **Vernacular carrier** | `CARRIER.md` | The principle in ordinary language, anchored in one concrete scene | The Carrier Test: a principle that cannot walk a parent through a sleepover decision in plain words is not understood well enough to become architecture |
| **Architecture note** | `ARCH.md` | Names the FNSR services this essay grounds (CTS, NIS, SHML, ARCHON, IEE, DES/CSS, Will Observatory…) and the assertion policies it implies | Cross-checked against service specs; drift is a finding |

Proven twice: *Fruits* (formal, v2.0) and *Judge Not* v1.0 → *The Gavel and the Watch* v1.0.

---

## Repository layout

```
gnomon/
├── README.md                    # this file
├── CHARTER.md                   # contribution statement, non-goals, conferral model
├── INVARIANTS.md                # INV-01..05, normative text, versioned
├── SPINE.md                     # lifecycle spine, movements, scales
├── GLOSSARY.md                  # controlled vocabulary: lock/gavel, registers,
│                                #   strata, axes, knock, carrier, gnomon condition
├── ROADMAP.md                   # sequencing detail, critical path, session log
├── LICENSE                      # dual: essays CC BY-SA 4.0; tooling Apache-2.0
│
├── corpus/
│   ├── I-epistemology/
│   │   ├── fruits-of-the-spirit/        # E-I.1  RATIFIED (formal v2.0)
│   │   ├── judge-not/                   # E-I.2  RATIFIED (formal v1.0, carrier v1.0)
│   │   └── conscience/                  # E-I.3  QUEUED
│   ├── II-the-word/
│   │   ├── truthfulness/                # E-II.1
│   │   ├── promise-and-covenant/        # E-II.2
│   │   └── display/                     # E-II.3
│   ├── III-repair/
│   │   ├── repentance/                  # E-III.1  P0
│   │   ├── forgiveness/                 # E-III.2  P0
│   │   └── reconciliation/              # E-III.3
│   ├── IV-claims-of-others/
│   │   ├── order-of-loves/              # E-IV.1
│   │   ├── enemy-and-force/             # E-IV.2
│   │   ├── gift-and-desert/             # E-IV.3
│   │   └── goods-and-stewardship/       # E-IV.4
│   ├── V-formation/
│   │   ├── habit-and-character/         # E-V.1
│   │   ├── desire-and-attention/        # E-V.2
│   │   └── fear-and-providence/         # E-V.3
│   ├── VI-the-body/
│   │   ├── authority-and-refusal/       # E-VI.1
│   │   └── communitys-acts/             # E-VI.2
│   └── VII-limits-and-horizon/
│       ├── two-masters/                 # E-VII.1
│       ├── tragedy/                     # E-VII.2
│       ├── suffering/                   # E-VII.3
│       └── hope-and-completion/         # E-VII.4
│
│   # every essay directory follows one shape:
│   #
│   # judge-not/
│   # ├── ESSAY.md              # formal essay (current ratified version)
│   # ├── CARRIER.md            # vernacular carrier
│   # ├── ARCH.md               # FNSR grounding note
│   # ├── LEDGER.md             # findings, dispositions, version chain
│   # ├── jurisdiction.yaml     # machine-readable jurisdiction (schema below)
│   # └── sources.lock          # SHA-256-pinned citations
│
├── routing/
│   ├── PROTOCOL.md              # the Routing Test, completeness criterion
│   ├── situations/              # concrete cases, ordinary language
│   │   ├── S-0001-sleepover.md
│   │   ├── S-0002-broken-vow.md
│   │   ├── S-0003-whistleblower.md
│   │   ├── S-0004-envied-brother.md
│   │   └── S-0005-deathbed.md
│   ├── routes/                  # adjudicated routings
│   │   └── S-0001.route.yaml
│   └── gaps/                    # GAP-### files: situations that routed nowhere
│                                #   = the next-essay generator
│
├── services/
│   ├── gnomon-lint/             # invariant & schema linter
│   ├── gnomon-route/            # routing validator (bidirectional coverage)
│   ├── gnomon-xref/             # cross-reference & glossary integrity
│   ├── gnomon-ledger/           # ledger closure & hash-chain verification
│   ├── gnomon-sources/          # citation pin verification
│   └── shared/                  # pure cores + Node/browser host profiles
│
└── fixtures/
    ├── green/                   # known-good minimal corpus
    └── red/                     # seeded violations; CI REQUIRES these to fail
```

---

## `jurisdiction.yaml` — the machine-readable panel

The Routing Test and all linting run against this file. Example (E-I.2, abridged):

```yaml
id: E-I.2
title: "Judge Not: Discernment, Responsibility, and the Judgment of the Self"
version: "1.0"
movement: I
decides:
  - license conditions for prudential judgment of conduct
  - verdict/precaution register separation (two thresholds)
  - delegated corporate judgment: duties to accuser, accused, institution
  - reflexive limit: examination without self-sentence
does_not_decide:
  - post-wrong first-person repair            # -> E-III.1
  - release of the offender                   # -> E-III.2
  - binding force of one's own conscience     # -> E-I.3
  - legitimacy and limits of authority        # -> E-VI.1
handoffs: [E-III.1, E-III.2, E-I.3, E-VI.1]
axes:
  responsibility: rises stranger -> household; peaks at guardianship
  humility: rises toward the interior; absolute at strata 4-5
registers: [verdict, precaution]
reserved_strata_touched: [acts, patterns, intention_culpability]
invariants: {INV-01: declared, INV-02: declared, INV-03: declared,
             INV-04: declared, INV-05: declared}
grounds: [ARCHON, CTS, ARIADNE, WillObservatory]   # elaborated in ARCH.md
carrier: {title: "The Gavel and the Watch", version: "1.0"}
```

`does_not_decide` **must be non-empty.** An essay that declines to declare its limits fails lint before it reaches review. This is the falsifiable-spec discipline applied to ethics: the claim of jurisdiction is inseparable from the disclaimer of it.

---

## The Routing Test

The corpus's completeness criterion — falsifiable, in the house method.

**Protocol** (`routing/PROTOCOL.md`):

1. **Situations** are concrete cases written in ordinary language (`S-####`). No situation may be authored to fit an essay; situations come from life, review sessions, reader questions, and adversarial contribution.
2. **Routing**: each situation is adjudicated to a route — primary jurisdiction, contributing essays, and the handoff chain. Routes are recorded (`routes/S-####.route.yaml`) and are themselves reviewable artifacts.
3. **Gaps**: a situation that routes nowhere files a `GAP-###`. A gap is not a failure; it is the next-essay generator. Its charter inherits the situation verbatim.
4. **Bidirectional coverage**: the test runs both ways. Every situation must resolve to essays (no gaps), and every essay must be primary for at least one situation (no dead jurisdiction — an essay nothing routes to is decoration, and decoration is a finding).

**Completeness-for-purpose criterion:** the corpus is declared complete at version *N* when a rolling window of newly contributed situations (window size set in `PROTOCOL.md`; initial: 25) produces zero gaps and zero contested routings after adjudication. The day a situation routes nowhere, the declaration is void and the gap becomes the backlog head. Completeness is a state the corpus can lose — which is the only kind of completeness worth claiming.

---

## Services

All services follow **Edge-Canonical First**: a pure core (`lintCore(corpusGraph) → findings[]`) with Node and browser host profiles and a dual-host equivalence suite. One command — `gnomon check` — runs every core.

The method's central honesty: **mechanical checks verify that claims are present, structured, and cross-consistent; they cannot verify that claims are true.** Truth is gated by adjudication. Every service declares which side of that line each check sits on.

| Service | Checks (mechanical) | Gates (adjudicated) |
|---|---|---|
| **gnomon-lint** | `jurisdiction.yaml` schema validity; INV-01..05 declarations present; `does_not_decide` non-empty; front-matter/version well-formed; controlled vocabulary used per `GLOSSARY.md` | Semantic invariant conformance (does the essay *actually* honor INV-03?) — reviewed at G1, dispositioned at G2 |
| **gnomon-route** | Every `S-####` has a route or a `GAP-###`; route targets exist; bidirectional coverage; contested-routing list empty at ratification | Routing correctness — a route is a judgment, and judgments get adjudicated |
| **gnomon-xref** | All handoffs resolve to existing IDs; internal cross-references resolve; carrier and essay declare matching jurisdiction ids | Carrier↔essay *fidelity* (does the carrier teach what the essay licenses, no more?) — the Carrier Test is human-gated |
| **gnomon-ledger** | Every finding has a disposition (ACCEPT/MODIFY/REJECT) and a location; version strings monotone; ledger hash-chain verifies | Disposition quality |
| **gnomon-sources** | `sources.lock` SHA-256 pins verify against archived copies | Citation *aptness* |

**Red tests** (`fixtures/red/`): seeded violations — an essay with empty `does_not_decide`, a dangling handoff, an orphaned essay, a broken hash chain, a carrier claiming undeclared jurisdiction. CI passes only if every red fixture **fails**. A linter that cannot catch the planted fault is not a linter; it is reassurance.

---

## Review gates

| Gate | Name | Exit condition |
|---|---|---|
| **G0** | Draft | Triptych panels drafted; `jurisdiction.yaml` lints green |
| **G1** | Hostile review | Findings ledgered with IDs (per-essay prefix, e.g. J-01…); invariant conformance reviewed |
| **G2** | Adjudication | Every finding dispositioned by the ratifying architect; ledger closes |
| **G3** | Ratification | Version promoted (→ 1.0 / 2.0); routes updated; corpus-wide `gnomon check` green |
| **CG** | Carrier Test | Carrier walks its anchor scene in plain language; fidelity adjudicated |

Ratification authority rests with the project's ratifying architect. Reviews are adversarial by design; a review cycle that produces no findings is itself a finding.

---

## Backlog

Status: **R** ratified · **Q** queued · **B** backlog · **—** not started. Priority: P0 highest.

| ID | Essay | Formal | Carrier | Arch | Priority / Notes |
|---|---|---|---|---|---|
| E-I.1 | The Fruits of the Spirit | **R** v2.0 | — | — | Carrier + ARCH.md are open items (C-I.1, A-I.1) |
| E-I.2 | Judge Not | **R** v1.0 | **R** v1.0 *The Gavel and the Watch* | — | ARCH.md open (A-I.2): assertion policy — act-classifications and pattern-trust yes; verdicts on interiors never |
| E-I.3 | Conscience | — | — | — | **P1.** The erring conscience that binds; formation vs. scrupulosity; refusal. Closes the epistemology triangle. Grounds Load-Bearing Vacancy |
| E-II.1 | Truthfulness | — | — | — | **P2.** Lying, candor, silence, testimony. Ethics half of the Sincerity model. Grounds SHML |
| E-II.2 | Promise & Covenant | — | — | — | **P2** (pair with E-II.1). What binds a vow; release; fidelity. Grounds CTS |
| E-II.3 | Display | — | — | — | Hypocrisy as first-century Goodhart. Grounds Will Observatory (the audited channel becomes the performed one) |
| E-III.1 | Repentance | — | — | — | **P0.** Contrition, confession, restitution, amendment — the constructive act replacing the seized gavel. Judge Not §15 left this door open on purpose |
| E-III.2 | Forgiveness | — | — | — | **P0** (pair with E-III.1). By what it isn't: not excusing, forgetting, trust, or access; the unrepentant case; self-forgiveness via the reserved verdict |
| E-III.3 | Reconciliation | — | — | — | Trust rebuilt by behavior over time; impossible/unsafe cases; the elder brother problem |
| E-IV.1 | The Order of Loves | — | — | — | Samaritan scope; partiality vs. the stranger's claim. Required for any agent serving one principal among many humans |
| E-IV.2 | The Enemy & Force | — | — | — | Cheek beyond the kenotic interlude; defense of others; punishment — the gavel's one legitimate home; mercy vs. justice |
| E-IV.3 | Gift & Desert | — | — | — | Merit, envy, gratitude, the vineyard. The comparison economy; credit-assignment |
| E-IV.4 | Goods & Stewardship | — | — | — | Property, generosity, talents, rest — entrusted goods generalized from children to creation |
| E-V.1 | Habit & Character | — | — | — | Virtue acquisition; narrative identity (grounds NIS); addiction and culpability |
| E-V.2 | Desire & Attention | — | — | — | The eye as lamp; attention as first moral resource; the harvesting technologies |
| E-V.3 | Fear & Providence | — | — | — | Anxiety, courage, planning vs. control-hoarding; hope as virtue (grounds DES/CSS) |
| E-VI.1 | Authority & Refusal | — | — | — | Obedience limits; Caesar's coin; conscientious refusal. Grounds ARCHON guardian/sovereign; when the synthetic person must say no |
| E-VI.2 | The Community's Acts | — | — | — | Judge Not §11 to full institutional ethics: due process, office vs. person, scandal, whistleblowing |
| E-VII.1 | Two Masters | — | — | — | Genuine incommensurability; twelve-worldview collision; moral remainder. The system stress-tests itself |
| E-VII.2 | Tragedy | — | — | — | Dirty hands, agent-regret, no clean exit — the human grounding of Irreversibility |
| E-VII.3 | Suffering | — | — | — | Unchosen cost, lament, the cross — honest pain per the carrier standard |
| E-VII.4 | Hope & Completion | — | — | — | Why act without guaranteed outcomes; the fruits as foretaste — closes the loop to E-I.1 |

**Non-essay backlog:** C-I.1 Fruits carrier · A-I.1 / A-I.2 arch notes for the two ratified essays · SVC-1 `gnomon-lint` core + red fixtures (first build target, per the fspec-lint pattern) · RT-1 seed situations S-0001…S-0005 and adjudicate first routes.

**Critical path:** E-III.1 + E-III.2 (the open door) → E-I.3 (closes epistemology) → E-II.1 + E-II.2 (highest FNSR leverage: SHML, CTS) → remaining movements. Invert to E-II first only if architecture urgency outranks the pastoral arc.

---

## Method

GNOMON runs under the Falsifiable Spec method (v0.4), self-applied: this README is itself versioned, reviewable, and carries its own open questions. Provenance follows house practice — SHA-256-pinned sources per essay, hash-chained ledgers, HIRI-compatible signing planned for ratified artifacts. The corpus is written so that a hostile reviewer, a stranger, and eventually a synthetic person can each verify not that it is *good*, but exactly what it *claims* — and where its jurisdiction ends.

**Open questions for adjudication (v0.1):** window size for the completeness criterion; whether ARCH.md drift-checking against live FNSR specs is mechanical (id match) or adjudicated; whether situations may be contributed anonymously; license split confirmation.

---

*The gnomon casts no light. It tells you where the light is.*
