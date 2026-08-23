# Gaps

**Status:** empty — no gap has been filed, because no situation has been routed.

A `GAP-###` records a situation that routed nowhere.

**A gap is not a failure.** It is the next-essay generator, and the only mechanism by which the
corpus discovers what it does not know it is missing. A corpus that never files a gap is not
complete; it is either untested or testing itself with cases it already covers.

---

## When a gap is filed

Per `../PROTOCOL.md` §3: a situation is adjudicated, no essay holds it, and no handoff chain
reaches one. The gap file is minted and its charter **inherits the situation verbatim** — the
case is not paraphrased into the corpus's vocabulary, because the paraphrase is where the
corpus would quietly reshape the problem into one it can already solve.

---

## What a gap file must contain

**Not yet specified** — `../PROTOCOL.md` O-RTG-03. At minimum, on the evidence of the protocol:

| Field | Note |
|---|---|
| Gap id | `GAP-###`, minted never renumbered |
| Situation | The `S-####` that generated it, verbatim |
| Adjudication | Who determined nothing holds it, and on what reasoning |
| Nearest essays | What was considered and why each declined — the negative result is the useful part |
| Charter | What an essay covering this would have to decide |
| Disposition | Whether it becomes a new essay, extends an existing one, or is ruled out of scope with reasons |

That last row is unresolved and matters: not every gap should become an essay. A gap may fall
outside GNOMON's declared contribution altogether (`CHARTER.md` §2.2 — not a universal ethics),
in which case the honest disposition is *out of scope*, with the boundary stated. The protocol
does not currently permit that outcome; it assumes every gap generates an essay. A corpus that
must grow an essay for every gap has no way to say "this is not ours," and would eventually
violate its own non-goal.

Raised as **O-RTG-03**.

---

## Register

*Empty.*

| Gap | Situation | Filed | Disposition |
|---|---|---|---|
| — | — | — | — |
