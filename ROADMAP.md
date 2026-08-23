# Roadmap

**Status:** v0.1 — **stub.** The backlog and critical path are carried from `README.md`. The
open-item register below is new: it consolidates the items raised by the v0.1 scaffold so that
no stub's deferred work lives only inside that stub.

---

## Where the corpus actually is

| | Planned | Exists |
|---|---|---|
| Essays (formal) | 22 | 2 |
| Carriers | 22 | 1 |
| Architecture notes | 22 | 0 |
| Ledgers | 22 | 0 (one revision record exists, as an essay appendix) |
| `jurisdiction.yaml` | 22 | 1 (abridged, from `README.md`) |
| `sources.lock` | 22 | 0 |
| Situations | ≥ 25 (rolling window) | 0 |
| Routes | ≥ 1 per essay | 0 |
| Services | 5 + shared | 0 |

**Triptych completeness: 3 of 66 panels.** No topic in the corpus is currently complete, since
completeness requires all three panels and no topic has an `ARCH.md`.

---

## Critical path

```
E-III.1 + E-III.2  (the open door — repentance and forgiveness)
        ↓
E-I.3              (conscience; closes the epistemology triangle)
        ↓
E-II.1 + E-II.2    (truthfulness, promise — highest FNSR leverage: SHML, CTS)
        ↓
remaining movements
```

Invert to Movement II first only if architecture urgency outranks the pastoral arc.

**A prior path, contested.** The essay critical path above is `README.md`'s. It assumes the
scaffolding beneath it holds, and at v0.1 it does not: `INVARIANTS.md` has no normative text, so
"invariant conformance reviewed" at G1 has nothing to review against; `CHARTER.md` has no
conferral model, so "dispositioned by the ratifying architect" at G2 names an unspecified role;
and no service exists, so `gnomon check` green at G3 is vacuous. Drafting E-III.1 is possible
today. *Ratifying* it under the stated gates is not. See O-RDM-01.

---

## Essay backlog

Status: **R** ratified · **Q** queued · **B** backlog · **—** not started. Priority: P0 highest.

| ID | Essay | Formal | Carrier | Arch | Priority / Notes |
|---|---|---|---|---|---|
| E-I.1 | The Fruits of the Spirit | **R** v2.0 | — | — | Carrier + ARCH.md open (C-I.1, A-I.1). Version claim unverified — see O-RDM-02 |
| E-I.2 | Judge Not | **R** v1.0 | **R** v1.0 *The Gavel and the Watch* | — | ARCH.md open (A-I.2): assertion policy — act-classifications and pattern-trust yes; verdicts on interiors never |
| E-I.3 | Conscience | — | — | — | **P1.** The erring conscience that binds; formation vs. scrupulosity; refusal. Closes the epistemology triangle. Grounds Load-Bearing Vacancy |
| E-II.1 | Truthfulness | — | — | — | **P2.** Lying, candor, silence, testimony. Ethics half of the Sincerity model. Grounds SHML |
| E-II.2 | Promise & Covenant | — | — | — | **P2** (pair with E-II.1). What binds a vow; release; fidelity. Grounds CTS |
| E-II.3 | Display | — | — | — | Hypocrisy as first-century Goodhart. Grounds Will Observatory |
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
| E-VII.1 | Two Masters | — | — | — | Genuine incommensurability; twelve-worldview collision; moral remainder |
| E-VII.2 | Tragedy | — | — | — | Dirty hands, agent-regret, no clean exit — the human grounding of Irreversibility |
| E-VII.3 | Suffering | — | — | — | Unchosen cost, lament, the cross — honest pain per the carrier standard |
| E-VII.4 | Hope & Completion | — | — | — | Why act without guaranteed outcomes; the fruits as foretaste — closes the loop to E-I.1 |

---

## Non-essay backlog

| Id | Item | Blocks |
|---|---|---|
| **C-I.1** | Fruits carrier | E-I.1 triptych completeness |
| **A-I.1** | Fruits architecture note | E-I.1 triptych completeness |
| **A-I.2** | Judge Not architecture note | E-I.2 triptych completeness |
| **SVC-1** | `gnomon-lint` core + red fixtures (first build target, per the fspec-lint pattern) | G0 and G3 for every essay |
| **RT-1** | Seed situations S-0001…S-0005; adjudicate first routes | The Routing Test; bidirectional coverage |

---

## Open-item register (v0.1 scaffold)

Consolidated from the stubs created in this pass. Each is owned by the file that raised it.

| Id | Raised in | Item |
|---|---|---|
| **O-RDM-01** | this file | The scaffold is not yet gate-capable: an essay can be drafted but cannot be ratified as stated. Decide whether to (a) complete the scaffold before drafting E-III.1, (b) draft in parallel and hold ratification, or (c) restate the gates for a v0.x corpus. |
| **O-RDM-02** | this file | E-I.1 is listed as ratified v2.0; `ESSAY.md` carries no version, status line, or ledger. Under `CHARTER.md` §2.3 a ratification claim needs a conferral record. |
| **O-RDM-03** | this file | Session log not started. `README.md` names one as this file's job. |
| **O-INV-01…05** | `INVARIANTS.md` | Invariant elaborations, declaration vocabulary, falsifiers, precedence, supersession. |
| **O-SPN-01…03** | `SPINE.md` | Stage definitions, scale-completeness rule, spine self-coverage. |
| **O-CHT-01…04** | `CHARTER.md` | Conferral model, review independence, contribution policy, retroactive conferral record. |
| **O-GLS-01…03** | `GLOSSARY.md` | Pending term definitions, enforcement rule, homonym discipline. |
| **O-RTG-01…04** | `routing/PROTOCOL.md` | Window size, contested-routing procedure, gap→charter mechanics, situation intake. |
| **F-01…04** | `foundations/README.md` | Foundation versioning, licensing, the missing FNSR/Triple-I specs, inherited blocked readiness. |
| **O-SVC-01…03** | `services/README.md` | Service contracts, host profiles, the `gnomon check` gate order. |

Four items were carried forward from `README.md`'s own open-questions list and now live with
their owners: completeness-window size → O-RTG-01; ARCH drift-checking mechanism → O-SVC-02;
anonymous situations → O-CHT-03; license split → resolved in this pass, see `LICENSE`.

---

## Session log

| Date | Change | Artifacts touched |
|---|---|---|
| 2026-08-23 | Repository scaffold built to the `README.md` layout. Corpus prose relocated into triptych directories; `foundations/` established for inherited documents; license split executed (CC BY-SA 4.0 + Apache-2.0); governance, routing, services, and fixtures stubs created with open-item registers. No normative text authored. | repository-wide |
