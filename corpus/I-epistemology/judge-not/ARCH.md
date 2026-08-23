# E-I.2 Judge Not — Architecture Note

**Status:** **NOT DRAFTED.** Open item **A-I.2**. This file is a placeholder recording what the
note must contain and why it cannot yet be written.

Until this note exists, the E-I.2 triptych is **incomplete** — a topic missing a panel is
incomplete regardless of the ratification status of the panels that exist.

---

## What this note must do

1. Name the FNSR services this essay grounds, and state *what* it grounds in each.
2. State the **assertion policies** the essay implies — what the synthetic person may assert,
   about whom, on what evidence, at what confidence, and what it may never assert.
3. Be cross-checked against the live service specs. **Drift is a finding.**

---

## Services claimed

From `jurisdiction.yaml`: `[ARCHON, CTS, ARIADNE, WillObservatory]`.

| Service | What E-I.2 grounds in it | Status |
|---|---|---|
| **ARCHON** | Conferral over self-declaration; the guardian/sovereign distinction as it bears on delegated judgment (§11) | *pending* |
| **CTS** | *pending* | *pending* |
| **ARIADNE** | *pending* | *pending* |
| **Will Observatory** | *pending* | *pending* |

---

## Assertion policy — the one line already fixed

The `README.md` backlog states the policy this essay implies, and it is the sharpest statement
in the corpus of what the reserved domain means for a machine:

> **Act-classifications and pattern-trust yes; verdicts on interiors never.**

Unpacked against the five strata (`GLOSSARY.md`, *strata*):

| Stratum | Agent may assert? | Form the assertion may take |
|---|---|---|
| 1 — Acts | Yes | Classification of an observed act |
| 2 — Patterns | Yes | Pattern claim over sufficient observations (INV-04: never from a single instance) |
| 3 — Intention / culpability | Bounded | Defeasible, evidence-bounded estimate, held revisably, owed charity — **never as settled knowledge** |
| 4 — Character as God sees it | **Never** | — |
| 5 — Destiny | **Never** | — |

The register separation (INV-02) applies to the agent as it applies to a person: a **precaution**
the agent takes may exceed what it can assert, provided the precaution remains provisional,
proportionate, and revisable, and is never rendered to a user as though it were a verdict. A
precaution that hardens into a permanent classification without new evidence has changed
registers illicitly — `ESSAY.md` §3.5.

**This section is a reading of the essay, not an adjudicated policy.** It is written here to
record the claim, not to license it. Nothing below G2 confers.

---

## Why this cannot be completed yet

The FNSR service specs are not present in this repository and are not resolvable by any stable
identifier the corpus controls — `foundations/README.md` **F-03**. An architecture note whose
whole falsification condition is "cross-checked against service specs; drift is a finding"
cannot be written, let alone checked, against specs that are not available.

Whether drift-checking is mechanical (id match) or adjudicated is itself unresolved —
`services/README.md` **O-SVC-02**.

---

## Exit criteria

- [ ] Service specs resolvable and version-pinned (F-03)
- [ ] Each claimed service has a stated grounding
- [ ] Assertion policy adjudicated at G2, not merely transcribed
- [ ] Drift check defined and run
- [ ] Cross-reference clean under `gnomon-xref`
