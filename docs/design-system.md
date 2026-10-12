# Climate Finance Navigator · Design system

Inspired by the European Commission's EU Taxonomy visuals. Inspired by, not a copy: no EC logo, no EC flag, no EC blue as primary color, so the product never looks like an official Commission tool.

Colors below were eyeballed from screenshots of EC Taxonomy material. Treat them as a starting point and adjust.

---

## 1. Style

- **Mood:** calm, institutional, trustworthy, editorial. Lots of white space. Content first.
- **Shapes:** square corners (0 to 2px radius). No soft shadows.
- **Signature card:** white card with a solid colored frame offset to the right and bottom (an "L" behind the card). Built with `box-shadow: 8px 8px 0 <color>`.
- **Icons:** thin black line icons (1.5px stroke) with a pastel circle behind them, offset to the top right. Lucide (bundled with shadcn) fits this style.
- **Connectors:** dotted gray lines linking steps in a sequence. Use them for the 5-step flow and progress indicators.
- **Emphasis:** key terms in **bold + underline** (as in "substantial contribution", "do no significant harm").
- **Numbers:** big, bold step numbers above short centered labels.

## 2. Typography

The EC uses its own typeface (EC Square Sans Pro), which isn't freely licensed. Open alternatives with a similar squarish, friendly feel:

- **Headings:** Barlow (Google Fonts), weights 500 and 600.
- **Body and UI:** Inter (Google Fonts), weights 400, 500, 600.

| Token | Size / line-height | Weight | Use |
|---|---|---|---|
| `display` | 40 / 48 | Barlow 600 | Landing headline |
| `h1` | 32 / 40 | Barlow 600 | Page title |
| `h2` | 24 / 32 | Barlow 600 | Section title |
| `h3` | 20 / 28 | Barlow 500 | Card title |
| `step-number` | 32 / 32 | Barlow 700 | Step numbers |
| `body` | 16 / 24 | Inter 400 | Default text |
| `body-sm` | 14 / 20 | Inter 400 | Secondary text, criteria |
| `caption` | 12 / 16 | Inter 500 | Labels, chips, "Demo data" |

## 3. Color

### Neutrals

| Token | Hex | Use |
|---|---|---|
| `--background` | `#FFFFFF` | Page |
| `--surface` | `#F7F7F4` | Sections, sidebars (warm off-white) |
| `--foreground` | `#1A1A1A` | Main text, icon strokes |
| `--muted-foreground` | `#5C5C5C` | Secondary text |
| `--border` | `#D9D9D9` | Dividers, inputs |
| `--connector` | `#9A9A9A` | Dotted step connectors |

### Primary

| Token | Hex | Use |
|---|---|---|
| `--primary` | `#23606F` | Buttons, links, active states (deep teal) |
| `--primary-hover` | `#1B4B57` | Hover |
| `--primary-foreground` | `#FFFFFF` | Text on primary |
| `--primary-soft` | `#E1EEF1` | Selected backgrounds |

### The six Taxonomy objectives

Each objective gets a pastel (circles, card frames, chip backgrounds) and a dark ink (text on that pastel). Never use the pastel as text color.

| # | Objective | Pastel | Ink |
|---|---|---|---|
| 1 | Climate change mitigation | `#DCEEF3` sky | `#1F5A73` |
| 2 | Climate change adaptation | `#D6E9DC` sage | `#2E6B47` |
| 3 | Water and marine resources | `#CDE7E9` aqua | `#1E6A70` |
| 4 | Circular economy | `#E2EAA8` lime | `#5D6B12` |
| 5 | Pollution prevention and control | `#E4D9C8` sand | `#6E5536` |
| 6 | Biodiversity and ecosystems | `#C9DDB0` moss | `#3F6B22` |

### Screening status

The EU says "what's not green is not necessarily brown": an activity missing from the Taxonomy isn't a polluting one. So "not covered" is **neutral gray, never red**.

| Status | Background | Border | Text |
|---|---|---|---|
| Likely eligible | `#EBF1DE` | `#9BBB59` | `#3F5F17` |
| Criteria to check | `#FBF0D6` | `#E0B44C` | `#7A5300` |
| Not covered by the Taxonomy | `#EFEFEF` | `#BDBDBD` | `#555555` |
| Demo data label | `#F2E8F7` | `#B48CC8` | `#5B2E73` |
| System error only | `#FBE9E8` | `#E39A95` | `#B3261E` |

### Sectors (from the EU Taxonomy Compass)

The Compass color-codes rows by sector. Approximate values, eyeballed from screenshots:

| Sector | Compass row color |
|---|---|
| Energy | `#F2DEDE` pale pink |
| Water supply, sewerage, waste | `#DFEEF1` pale blue |
| Forestry | `#6CC86F` green |
| Environmental protection and restoration | `#E0EFDA` pale green |
| Professional, scientific and technical | `#A0E0A0` light green |
| Financial and insurance | `#62A9F4` blue |
| Education | `#B5E6FB` sky blue |
| Human health and social work | `#FFF983` yellow |
| Information and communication | `#E0C9E7` lilac |
| Transport | `#D6D9DE` gray |
| Services | `#FFFFFF` white |

Links are dark blue (around `#0B4C9C`), sector labels dark gray bold, rows separated by thin gray lines.

We don't copy them as-is: some are very saturated, dark blue links on the blue and green rows have poor contrast, and Energy's pink reads as "error".

### Nexus pillars

Aligned with the team's diagrams (colors eyeballed from screenshots):

| Pillar | Impact card | Background | Border | Icon / ink | Pillar icon | Impact icon |
|---|---|---|---|---|---|---|
| Blue Economy (water) | Water | `#E8F0FA` | `#A9C4E8` | `#2F6FC9` | `waves` | `droplets` |
| Green Economy (energy) | Carbon | `#E7F0EB` | `#A8CFBE` | `#16A34A` | `zap` | `leaf` |
| Bioeconomy (biomass) | Biomass | `#F3EFE8` | `#E3C9A8` | `#57534E` | `sprout` | `sprout` |

Text on these backgrounds stays `--foreground`; the ink color is for icons. For a colored label on white, use a darker ink: blue `#1F5BAF`, green `#15803D`, bio `#57534E`.

Use them for the primary pillar chip, secondary Nexus tags (outline version: white background, pillar border, dark ink text) or a 4px left bar on a row. Not as a full row fill.

Other icons from the diagrams: `compass` (Climate Finance Navigator), `shield-check` (accountable contribution).

### Enabling and transitional activities

The Compass marks activities with **E** (enabling) and **T** (transitional). Show them as small square badges: 1px `--foreground` border, `caption` text, transparent background, with a tooltip explaining the term.

### Workflow step icons (Lucide)

| Step | Icon |
|---|---|
| Project description | `file-input` |
| Nexus classification | `network` |
| Regulatory mapping | `scale` |
| Evidence assessment | `clipboard-list` |
| Finance matching | `landmark` |

Use them in the progress indicator with the icon-badge style and dotted connectors between steps.

## 4. Spacing, radius, elevation

- **Spacing:** 4px base. Scale: 4, 8, 12, 16, 24, 32, 48, 64.
- **Radius:** `--radius: 2px`. Chips can be 2px too, no pills.
- **Elevation:** no blur shadows. Use the offset frame for emphasis, a 1px border otherwise.

## 5. Tokens (shadcn / Tailwind)

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

:root {
  --font-heading: 'Barlow', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  --background: #FFFFFF;
  --surface: #F7F7F4;
  --foreground: #1A1A1A;
  --muted-foreground: #5C5C5C;
  --border: #D9D9D9;
  --connector: #9A9A9A;

  --primary: #23606F;
  --primary-hover: #1B4B57;
  --primary-foreground: #FFFFFF;
  --primary-soft: #E1EEF1;

  --obj-1: #DCEEF3; --obj-1-ink: #1F5A73;
  --obj-2: #D6E9DC; --obj-2-ink: #2E6B47;
  --obj-3: #CDE7E9; --obj-3-ink: #1E6A70;
  --obj-4: #E2EAA8; --obj-4-ink: #5D6B12;
  --obj-5: #E4D9C8; --obj-5-ink: #6E5536;
  --obj-6: #C9DDB0; --obj-6-ink: #3F6B22;

  --status-eligible-bg: #EBF1DE; --status-eligible-border: #9BBB59; --status-eligible-fg: #3F5F17;
  --status-check-bg: #FBF0D6;    --status-check-border: #E0B44C;    --status-check-fg: #7A5300;
  --status-none-bg: #EFEFEF;     --status-none-border: #BDBDBD;     --status-none-fg: #555555;
  --status-demo-bg: #F2E8F7;     --status-demo-border: #B48CC8;     --status-demo-fg: #5B2E73;
  --destructive: #B3261E;

  --pillar-blue: #E8F0FA;  --pillar-blue-border: #A9C4E8;  --pillar-blue-icon: #2F6FC9;  --pillar-blue-ink: #1F5BAF;
  --pillar-green: #E7F0EB; --pillar-green-border: #A8CFBE; --pillar-green-icon: #16A34A; --pillar-green-ink: #15803D;
  --pillar-bio: #F3EFE8;   --pillar-bio-border: #E3C9A8;   --pillar-bio-icon: #57534E;   --pillar-bio-ink: #57534E;

  --radius: 2px;
}

/* Signature card */
.card-frame {
  background: var(--background);
  box-shadow: 8px 8px 0 var(--frame, var(--obj-1));
  padding: 24px;
}

/* Icon with offset pastel circle */
.icon-badge { position: relative; width: 56px; height: 56px; }
.icon-badge::before {
  content: ''; position: absolute; top: -4px; right: -8px;
  width: 44px; height: 44px; border-radius: 50%;
  background: var(--badge, var(--obj-1)); z-index: 0;
}
.icon-badge svg { position: relative; z-index: 1; stroke: var(--foreground); stroke-width: 1.5; }

/* Dotted connector between steps */
.step-connector { border-top: 2px dotted var(--connector); flex: 1; }
```

## 6. Usage notes

- One objective color per card or chip. Don't mix several pastels in one component.
- Status chips always include a text label, never color alone.
- Pastels are backgrounds and decoration only; text always uses an ink color or `--foreground`.
- Check contrast (WCAG AA, 4.5:1) for any new text/background pair.
