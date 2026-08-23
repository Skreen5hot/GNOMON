# E-I.1 The Fruits of the Spirit — Architecture Note

**Status:** **NOT DRAFTED.** Open item **A-I.1**. Placeholder recording what the note must
contain.

---

## What this note must do

1. Name the FNSR services this essay grounds and state what it grounds in each.
2. State the assertion policies the essay implies.
3. Be cross-checked against live service specs; drift is a finding.

---

## Services claimed

**Not yet declared** — this essay has no `jurisdiction.yaml`, so there is no `grounds:` list to
work from. The one service the essay itself names is **IEE** (Integral Ethics Engine), and it is
the only FNSR service defined anywhere in the corpus (`ESSAY.md` §3.4, §9.1).

| Service | What E-I.1 grounds in it | Status |
|---|---|---|
| **IEE** | The division of labor: what the engine may compute and what it may not conclude | *pending* |
| *(others)* | Undeclared pending `jurisdiction.yaml` | *pending* |

---

## The constraint this essay imposes, stated once

This is the essay with the sharpest architectural consequence in the corpus, and it is a
**prohibition** rather than a capability. From `ESSAY.md` §3.4 and §9:

> The Fruits cannot serve as inputs to reasoning processes or outputs of evaluation functions
> in any final sense.

What the engine **may** do (§9.1): present twelve-perspectival analyses, make trade-offs
explicit, preserve minority viewpoints against premature closure, and surface proxy signals
that warrant attention.

What it **may not** do (§9.2): verify whether a choice, once implemented, produced peace or
gentleness. That verification requires the lived experience of persons within communities over
time.

The proxy question is where this note will have to do real work rather than transcribe. §3.3
permits algorithmic proxies as *informative signals supporting human discernment* — and §1.3
names the algorithmic temptation as one of three dangers to be avoided from the outset. An
architecture note must state the line operationally: what a proxy may be surfaced *as*, what
it may be aggregated into, what it may trigger, and what rendering of a proxy would constitute
the engine having quietly issued the verdict it is forbidden to issue.

Related: E-II.3 *Display* grounds the Will Observatory on the same hazard from the other side —
hypocrisy as first-century Goodhart, where the audited channel becomes the performed one. A
fruits proxy that is optimized against is a fruits proxy that has stopped indicating. These two
notes must be written to agree.

**Nothing above is adjudicated.** It records the claim; G2 confers.

---

## Blocked by

- **C-I.1** — in practice, not formally: an essay whose carrier cannot be written has not been
  understood well enough to ground architecture.
- **F-03** — the service specs are not resolvable from this repository.
- **O-SVC-02** — drift-check mechanism undefined.

---

## Exit criteria

- [ ] `jurisdiction.yaml` declared, with a `grounds:` list
- [ ] Each claimed service has a stated grounding
- [ ] Proxy policy stated operationally and adjudicated
- [ ] Agreement with E-II.3's Will Observatory note verified
- [ ] Drift check defined and run
