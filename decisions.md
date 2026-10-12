# Decisions log

Check this before starting work. When a decision changes, don't delete it: mark it **Superseded** and add the new one on top.

**Status:** Decided · Proposed (needs team OK) · Superseded

## How to add an entry

```
### YYYY-MM-DD · Short title
- **Decision:** what we chose
- **Why:** one line
- **Owner:** who
- **Status:** Decided / Proposed / Superseded
```

---

## Open questions

- Will startups do the first screening themselves, or keep paying a broker for the full service?
- Which data source for the finance match: IBKR, SerpAPI, or curated mock data? (Rohan)
- Is Lovable compatible with Rohan's design system?
- What exactly goes into the 3 to 5 onboarding questions? (Ekaterina)
- How do we calculate the "readiness level" on the summary screen?

---

## Log

### 2026-10-12 · Finance match framed as green lending, not bond issuance
- **Decision:** we match startups to green lending programs and instruments funded by green bonds, not to issuing bonds themselves.
- **Why:** startups don't issue bonds; judges with a finance background will notice.
- **Owner:** team
- **Status:** Proposed

### 2026-10-12 · Output says "likely eligible", never "aligned"
- **Decision:** results show likely eligibility plus the criteria still to prove (including DNSH).
- **Why:** a few onboarding questions can't prove Taxonomy alignment.
- **Owner:** Ekaterina, Cristina
- **Status:** Proposed

### 2026-10-12 · Mock finance data first, live search only if time allows
- **Decision:** start with a curated dataset of real banks and programs, labelled "Demo data" in the UI.
- **Why:** reliable demo in 24h; live APIs are a risk.
- **Owner:** Rohan
- **Status:** Proposed

### 2026-10-12 · Working language is English
- **Decision:** code, docs, UI and pitch in English.
- **Why:** international team and jury.
- **Owner:** team
- **Status:** Proposed

### 2026-10-12 · Concept: Climate Finance Navigator
- **Decision:** screen climate-tech startups against EU Taxonomy criteria, then match them to climate finance by country and sector. EU grants as a secondary engine.
- **Owner:** team
- **Status:** Decided

### 2026-10-12 · Primary user: revenue-generating startups (seed+)
- **Decision:** not pre-revenue. Brokers and consultancies are the likely paying customer.
- **Owner:** team
- **Status:** Decided

### 2026-10-12 · Scope: opportunity screening only
- **Decision:** no due diligence, no document preparation.
- **Owner:** team
- **Status:** Decided

### 2026-10-12 · Three priority sectors
- **Decision:** bioeconomy/biomass, blue economy (water), energy transition.
- **Owner:** team
- **Status:** Decided

### 2026-10-12 · Taxonomy criteria as a fixed database
- **Decision:** Taxonomy data comes from the Compass Excel export, stored as static data in the repo.
- **Owner:** Ekaterina
- **Status:** Decided

### 2026-10-12 · Bank success fee deprioritized
- **Decision:** not part of the business model for now.
- **Why:** Taxonomy rules complicate it.
- **Owner:** team
- **Status:** Decided

### 2026-10-12 · Stack
- **Decision:** Rohan's design system (shadcn/ui + Tailwind, Cloudflare), GitHub for version control.
- **Owner:** Rohan
- **Status:** Decided
