# Climate Finance Navigator

Norrsken Fixathon at Impact/Week, Barcelona, Oct 13-15 2026. 24-hour build.
Challenge: "Fixing the Paris Agreement". Closest fit: Track 1 (turn climate needs into deployed solutions, faster).

## What we're building

A screening tool that tells a climate-tech startup, in minutes, whether its activity is likely eligible under the EU Taxonomy and which green finance and EU grants it could pursue next.

It is navigation and pre-screening. It is not legal advice, investment advice or financing approval, and the product must say so.

## Users

- **Primary user:** revenue-generating climate-tech startups (seed and later), based in the EU.
- **Likely paying customer (hypothesis):** climate finance brokers and consultancies that screen many startups and want to skip the "fishing around" phase.
- **Open question:** will startups do the first pass themselves, or keep paying a broker for the full service?

## User flow

1. **Onboarding:** 3 to 5 questions (sector, country, stage, plus what's needed to pick Taxonomy activities). See `/docs/onboarding-questions.md`.
2. **Taxonomy filter:** map the startup to one or more Taxonomy activities from `/data/taxonomy/`. Show the substantial contribution criteria and the DNSH ("do no significant harm") criteria for each.
3. **Finance match:** banks and programs offering green lending or climate finance, filtered by country and sector. Source: `/data/finance/`.
4. **EU grants (secondary):** relevant EU funding calls. Source: `/data/grants/`.
5. **Summary:** readiness level, funding options, next-steps roadmap.

## Scope

- **In:** three sectors only: bioeconomy/biomass, blue economy (water), energy transition. Opportunity screening only.
- **Out:** due diligence, document preparation, application writing, any other sector.

## Domain facts to get right

- **Startups don't issue green bonds.** Banks, governments and large companies do. Bond proceeds must go to eligible projects, often through green loans. We match startups to the green lending programs and other instruments funded by that money, not to bond issuance itself.
- **Eligible is not aligned.** Eligible means the activity is listed in the Taxonomy. Aligned means it meets the technical screening criteria for substantial contribution, does no significant harm to the other objectives, and meets minimum (social) safeguards. Our onboarding can't prove alignment, so the output is "likely eligible" plus "what you'll need to prove".
- **Six objectives:** climate change mitigation, climate change adaptation, water and marine resources, circular economy, pollution prevention and control, biodiversity and ecosystems.
- **EU Taxonomy Compass:** official tool showing activities, objectives and criteria, downloadable as Excel or JSON. It doesn't assess a specific company or show where the money is. That gap is our product.

## Rules for Claude

- Use Taxonomy criteria only from `/data/taxonomy/`, not from general knowledge. Always cite the activity number and name.
- Never invent banks, programs, amounts, deadlines or statistics. Mocked data must be labelled "Demo data" in the UI.
- Never tell a user they "qualify" or "are aligned". Use "likely eligible", "criteria to check", "next step".
- Flag speculation and unverified claims explicitly.
- Any number used in the pitch needs a source in `/docs/sources.md`.
- UI copy: plain, direct, short. No corporate jargon, no em dashes.
- Work in English.

## Claims to verify before the pitch

- "Brokers charge up to 25% of bond value" (likely wrong for bonds; bond fees are usually low single digits).
- "10 minutes, 10 billion" (where does 10 billion come from?).
- Policy dates: Circular Economy Act, Biotech Act II, RED IV, new EU water initiative.

## Tech

- **Frontend:** Rohan's design system (shadcn/ui + Tailwind), hosted on Cloudflare. Component-based and API-ready. Lovable is optional; check compatibility with the design system first.
- **Data:** static JSON in `/data`. Taxonomy data comes from the Compass export, filtered to our three sectors.
- **Finance search:** start with a curated mock dataset of real banks and programs. Live search (SerpAPI or other) only if time allows. IBKR is under review and may not have lending program data.
- **Version control:** GitHub. Small commits, keep `main` demoable at all times.

## Team

- **Cristina:** frontend, design, UX flow, visualization.
- **Rohan:** architecture, components, API integrations.
- **Ekaterina:** domain expertise, Taxonomy data, onboarding questions.
- **Asher:** policy framing, EU funding links, storytelling and pitch.

## Repo map

- `CLAUDE.md`: this file.
- `decisions.md`: running log of decisions. Check it before starting work and update it when something changes.
- `/docs`: concept, onboarding questions, Ekaterina's one-pager and four-pager, Norrsken challenge brief, `sources.md`.
- `/data/taxonomy`: Taxonomy activities and criteria (three sectors).
- `/data/finance`: banks and green lending programs.
- `/data/grants`: EU funding calls and links.
