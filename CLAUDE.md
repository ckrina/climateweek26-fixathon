# Climate Finance Navigator

**Water-Energy-Biomass Nexus**

Norrsken Fixathon at Impact/Week, Barcelona, Oct 13-15 2026. 24-hour build.
Challenge: "Fixing the Paris Agreement". Closest fit: Track 1 (turn climate needs into deployed solutions, faster).

## The problem

Climate technologies often lose time not because money is missing, but because founders don't know:

- which Taxonomy activity their project matches, and which environmental objective it supports,
- which criteria apply and what evidence a bank or investor will expect,
- which financing routes are realistic at their stage,
- who has financed similar projects.

The answers are scattered across regulations, delegated acts, bank and bond frameworks, and funding portals. On top of that, there is no common classification of which projects are "green", "blue" or "bio": they are spread across different grants and bond programs. Finding and interpreting all this is slow and expensive, especially for small teams. That friction slows deployment of technology that already exists, which is the Paris implementation gap.

## What we're building

A screening tool that tells a climate-tech startup, in minutes, which Nexus pillar its project belongs to, whether it's likely eligible under the EU Taxonomy, what evidence it still needs, and which green finance, programs and EU grants it could pursue next.

Framing: not "another funding database", but a navigation layer between climate technology and deployable capital. It shortens the path from technology to a finance-ready project.

It is navigation and pre-screening. It is not legal advice, investment advice or financing approval, and the product must say so. Formal alignment, external review, credit and investment decisions stay with lenders, investors and reviewers. That boundary is what keeps the tool credible.

## Where we fit

Paris Agreement → national climate plans (NDCs) → real projects and technologies → **Climate Finance Navigator** → investment and financing decision → deployment and operation → impact (carbon, water, biomass) → accountable contribution, which feeds back into better projects, policies and climate plans.

**The key idea: we accelerate the middle of the chain.** We identify relevant activities, check evidence and rules, and find finance routes (comparable funded projects, relevant financiers, prioritised next actions). The financing decision stays independent, and real environmental results come from deploying and operating projects, not from a finance-readiness report.

## The Nexus: three pillars

1. **Blue Economy: water and aquatic systems.** Projects improving freshwater availability, quality and efficiency, wastewater management, aquatic ecosystems and sustainable ocean-related activities.
2. **Green Economy: energy transition.** Projects generating low-carbon energy, reducing energy demand, improving energy infrastructure and storage, and decarbonising energy use.
3. **Bioeconomy: sustainable biological resources.** Projects supplying and transforming biomass into food, feed, materials, chemicals and other products, prioritising higher-value circular uses before energy recovery from suitable residual streams (cascading principle).

Each project gets one primary pillar, a project subtype, and secondary Nexus tags, because many projects are cross-sectoral. Classification rules: `/docs/nexus-classification.md` (Ekaterina, in progress).

## Users

- **Primary user:** revenue-generating climate-tech startups (seed and later), based in the EU.
- **Likely paying customer (hypothesis):** climate finance brokers and consultancies that screen many startups and want to skip the "fishing around" phase.
- **Open question:** will startups do the first pass themselves, or keep paying a broker for the full service?
- **Beyond the hackathon (pitch context):** accelerators screening portfolios, banks and impact funds receiving more structured project information, public agencies matching technologies to programs.

## User flow

1. **Project description:** 3 to 5 onboarding questions. See `/docs/onboarding-questions.md`.
2. **Nexus classification:** primary pillar, project subtype, secondary tags.
3. **Regulatory mapping:** exact EU Taxonomy activity from `/data/taxonomy/`, its environmental objective, and the criteria in force.
4. **Evidence assessment:** technical screening criteria, DNSH ("do no significant harm"), minimum safeguards, and biomass cascading where it applies. Say what evidence is still missing.
5. **Finance matching:** relevant instruments, financiers, programs and comparable funded projects, filtered by country and pillar. Based on Google search plus a few major sources with APIs (see Tech). EU grants as a secondary source. Data: `/data/finance/`, `/data/grants/`.

Then a **summary screen:** readiness level, funding options, next-steps roadmap.

## Scope

- **In:** the three Nexus pillars only. Opportunity screening only.
- **Out:** due diligence, document preparation, application writing, anything outside the three pillars.

## Domain facts to get right

- **Startups don't issue green bonds.** Banks, governments and large companies do. Bond proceeds must go to eligible projects, often through green loans. We match startups to the green lending programs and other instruments funded by that money, not to bond issuance itself.
- **Technology, project and issuer are different things.** A startup's technology can be the eligible activity itself, part of an eligible asset someone else finances, or an enabling technology supplied into another company's project. The flow should make clear which case applies.
- **Eligible is not aligned.** Eligible means the activity is listed in the Taxonomy. Aligned means it meets the technical screening criteria for substantial contribution, does no significant harm to the other objectives, and meets minimum (social) safeguards. Our onboarding can't prove alignment, so the output is "likely eligible" plus "what you'll need to prove".
- **Six objectives:** climate change mitigation, climate change adaptation, water and marine resources, circular economy, pollution prevention and control, biodiversity and ecosystems.
- **Cascading principle (biomass):** biomass should go to its highest-value use first: food and feed, then materials, and energy only from residues, as a last resort. The current Taxonomy covers this only partially. For the hackathon we use the current Taxonomy, flag cascading as a check in the evidence step, and say in the pitch that a Taxonomy revision is under way and we plan to integrate the cascade.
- **Blue finance** is green finance for water and ocean objectives, with its own guidance (see `/docs/sources.md`).
- **Typical evidence lenders expect:** a baseline, measured or verified improvement (energy saved, emissions avoided, water reused, discharge quality), a measurement and monitoring plan, the project boundary and operating lifetime.
- **EU Taxonomy Compass:** official tool showing activities, objectives and criteria, downloadable as Excel or JSON. It doesn't classify a specific project or show where the money is. That gap is our product.

## Rules for Claude

- Use Taxonomy criteria only from `/data/taxonomy/`, not from general knowledge. Always cite the activity number and name.
- Never invent banks, programs, amounts, thresholds, deadlines or statistics. Mocked data must be labelled "Demo data" in the UI.
- Never tell a user they "qualify" or "are aligned". Use "likely eligible", "criteria to check", "next step".
- In the UI, keep facts from a source visibly separate from model inference.
- "Not enough information" is a valid answer. Don't fill gaps.
- Rules decide hard criteria (thresholds, sector filters); the LLM extracts, classifies and explains.
- Record the version and date of any regulation or dataset we load.
- Flag speculation and unverified claims explicitly.
- Any number used in the pitch needs a source in `/docs/sources.md`.
- UI copy: plain, direct, short. No corporate jargon, no em dashes.
- Work in English.

## Demo success criteria

- A founder enters a project in under 5 minutes.
- The tool returns at least one plausible route and explains why.
- Every eligibility statement links to a source or is marked as inference.
- Three test startups, one per pillar, produce clearly different results. The Bioeconomy one should trigger the cascading check.
- The last screen tells the founder exactly what to do next.

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
- `/docs`: onboarding questions, Norrsken challenge brief, `sources.md`, `design-system.md` (style, type, colors, tokens; follow it for any UI work).
- `/data/taxonomy`: Taxonomy activities and criteria (three sectors).
- `/data/finance`: banks and green lending programs.
- `/data/grants`: EU funding calls and links.
- `/data/test-profiles`: the three test startups, one per sector.
