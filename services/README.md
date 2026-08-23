# Services

**Status:** v0.1 — **stub. No service is implemented.** Every directory here contains a
contract sketch and nothing else. `gnomon check` does not exist.

`SVC-1` — `gnomon-lint` core plus red fixtures — is the first build target, per the fspec-lint
pattern.

---

## The method's central honesty

> **Mechanical checks verify that claims are present, structured, and cross-consistent; they
> cannot verify that claims are true.**

Truth is gated by adjudication. **Every service declares which side of that line each check
sits on.** A service that blurs the line is worse than no service, because a green check that
is read as a truth claim launders an unreviewed artifact into an apparently verified one — and
the corpus's own refusal (`CHARTER.md` §2.3) is that it does not self-certify. A linter that
appears to certify is self-certification with extra steps.

---

## Architecture: Edge-Canonical First

All services follow one shape:

```
lintCore(corpusGraph) → findings[]        # pure core, no I/O
  ├── Node host profile                   # filesystem, CI
  └── browser host profile                # in-page review tooling
  └── dual-host equivalence suite         # same input → same findings, both hosts
```

One command — `gnomon check` — runs every core.

Shared pure cores and both host profiles live in [`shared/`](shared/).

---

## The services

| Service | Checks (mechanical) | Gates (adjudicated) | Status |
|---|---|---|---|
| [`gnomon-lint`](gnomon-lint/) | `jurisdiction.yaml` schema validity; INV-01…05 declarations present; `does_not_decide` non-empty; front-matter/version well-formed; controlled vocabulary used per `GLOSSARY.md` | Semantic invariant conformance — does the essay *actually* honor INV-03? Reviewed at G1, dispositioned at G2 | not built |
| [`gnomon-route`](gnomon-route/) | Every `S-####` has a route or a `GAP-###`; route targets exist; bidirectional coverage; contested-routing list empty at ratification | Routing correctness — a route is a judgment, and judgments get adjudicated | not built |
| [`gnomon-xref`](gnomon-xref/) | All handoffs resolve to existing IDs; internal cross-references resolve; carrier and essay declare matching jurisdiction ids | Carrier↔essay *fidelity* — does the carrier teach what the essay licenses, no more? The Carrier Test is human-gated | not built |
| [`gnomon-ledger`](gnomon-ledger/) | Every finding has a disposition (ACCEPT/MODIFY/REJECT) and a location; version strings monotone; ledger hash-chain verifies | Disposition quality | not built |
| [`gnomon-sources`](gnomon-sources/) | `sources.lock` SHA-256 pins verify against archived copies | Citation *aptness* | not built |

---

## Red tests

`../fixtures/red/` holds seeded violations: an essay with empty `does_not_decide`, a dangling
handoff, an orphaned essay, a broken hash chain, a carrier claiming undeclared jurisdiction.

**CI passes only if every red fixture fails.**

> A linter that cannot catch the planted fault is not a linter; it is reassurance.

---

## What the corpus would score today

Recorded so that the first implementation has a baseline to disagree with, and so the gap
between "specified" and "checked" is not quietly forgotten:

| Check | Result if run today |
|---|---|
| `does_not_decide` non-empty | **FAIL** — E-I.1 declares no jurisdiction at all |
| Invariant declarations present | **FAIL** — E-I.1 |
| Controlled vocabulary | **FAIL** — `GLOSSARY.md` has ~8 undefined terms in active use |
| Handoffs resolve | **PASS, vacuously** — E-I.2's four targets exist as directories with no artifacts |
| Bidirectional coverage | **FAIL** — zero situations; both ratified essays are dead jurisdiction |
| Ledger closure | **FAIL** — no hash chain; dispositions unclassified |
| Source pins | **FAIL** — zero pinned citations |

Two of these are worth noticing. The handoff check passing *vacuously* is the sharpest argument
for building `gnomon-xref` early: a check that resolves an id against an empty directory reports
green for a corpus that has nothing there. And the bidirectional-coverage failure means the
corpus currently fails its own completeness criterion in the direction nobody watches — not
"situations found a gap," but "no essay is primary for anything."

---

## Open items

| Id | Item | Exit criterion |
|---|---|---|
| **O-SVC-01** | No service contract exists. Each service needs its core signature, its finding schema, its severity model, and its declared non-determinism (FS method P6). | Contracts written per service; `gnomon check` gate order defined; findings schema shared. |
| **O-SVC-02** | `ARCH.md` drift-checking against live FNSR specs: mechanical (id match) or adjudicated? Carried from `README.md`'s open questions. Currently moot — the specs are not resolvable at all (`foundations/README.md` F-03) — but the answer determines whether `gnomon-xref` or a reviewer owns it. | Decided and recorded; assigned to a service or to G1. |
| **O-SVC-03** | Gate ordering for `gnomon check`. Per FS method P7, "done" is an ordered conjunction — the minimum over the whole, never a mean. The order is not stated, and a service suite that reports an average of five greens would violate the method it runs under. | Ordered conjunction stated; report contract carries both a disposition line and a readiness line. |
| **O-SVC-04** | Host-profile equivalence suite. Edge-Canonical First requires dual-host equivalence; no profile exists to be equivalent to. | Suite defined alongside the first core. |
