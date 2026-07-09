# Vertt OS — Design System

The design system for **Vertt** (Vertt+), the digital operating system for professional B2B / B2B2C mobility. Vertt connects enterprise customers, mobility providers, drivers and passengers through one platform for booking, dispatch, fleet operations and mobility services.

Vertt OS is built for **enterprise-grade mobility**: reliable, human, operationally clear, Swiss-native and scalable internationally across corporate mobility, healthcare, hospitality, travel and taxi networks.

> **This is the ground truth for anything Vertt-branded.** Colors, type, logos and components here are taken directly from the *Vertt Interim Visual Guide V1.0* and the *Vertt Pitch Deck (EN)*. Where the guide is silent (e.g. status colors, elevation, the full neutral ramp), the system extends it in the same Swiss, restrained spirit — those extensions are noted below.

---

## Sources provided

All source material lives in `/uploads`:

- **`Vertt+Interim-Visual-Guide-V1.0.pdf`** — the brand's interim visual guide: logo usage, color palette, typography. Primary source for foundations.
- **`Vertt Pitch Deck EN.pptx`** — 12-slide seed-round deck. Source for product narrative, copy voice, team photos and the dark/red background motif. Extracted assets are in `assets/img/`, slide copy is summarized in "Product context" below.
- **Logos & marks** — `Vertt+Badge-*.png` (Vertt+ wordmark on black / red / white / mist) and `Vertt+*-Icon.png` (the "V+" app badge). Copied, renamed by content, into `assets/logo/`.

No production codebase or Figma file was provided. Components below are authored from the brand foundations to fit the product areas Vertt describes; they are a faithful *system*, not a recreation of an existing UI. When a real component library or Figma arrives, reconcile against it — the source wins.

---

## Product context

Vertt is a **B2B taxi & ride-hailing marketplace** that becomes an operating system. Three-step strategy from the deck: **Distribution** (marketplace drives enterprise demand to licensed operators) → **Stickiness** (demand access is the hook) → **SaaS dominance** (cross-sell dispatch, fleet, payments, reporting once operators rely on the demand). Business model: marketplace first (15–20% take rate), SaaS layer compounds later (+90% gross margin). Swiss-native, compliance-first, SLA-driven.

Two sides of the marketplace, both first-class users of the OS:
- **Business clients** — corporate admins booking compliant, reliable ground mobility with a single contract and invoice.
- **Taxi operators** — dispatchers and fleet managers receiving predictable enterprise demand.
- Plus **drivers** and **passengers** on mobile.

**Core product areas the system supports:** B2B customer portal · booking & trip management · dispatch & live fleet operations · driver & vehicle management · corporate account & user administration · invoicing, reporting & analytics · API / integrations / partner management · mobile driver & passenger apps · embeddable widgets.

---

## CONTENT FUNDAMENTALS — how Vertt writes

The voice is **confident, clear, modern, premium and human** — critical infrastructure, not a playful consumer app. It reads like a Swiss operator who is certain of the thesis.

- **Declarative and short.** Sentence fragments used as statements of fact: *"Demand, on tap." · "Supply, vetted." · "Marketplace first. SaaS compounds later."* Punchy, confident, often two beats separated by a period.
- **Second person to the customer, first-person-plural for Vertt.** *"Operators stay because **we** deliver what they don't have."* Talk about the reader's operation as *"your fleet / your account"*; Vertt is *"we"*.
- **Sentence case everywhere in product UI.** Buttons, labels, menu items: *"Assign driver", "Dispatch now", "View all"* — never Title Case, never ALL CAPS in running text.
- **UPPERCASE eyebrows only.** Small section labels and kickers are uppercase with wide tracking: *"THE PROBLEM", "THE OPPORTUNITY", "OPERATIONS"*. This is the one place caps appear. Keep them short.
- **Numbers are the argument.** Concrete metrics carry the message: *"3,000 drivers", "100,000 trips", "CHF 2.4m GMV", "15–20% take rate"*. Always tabular, always precise. Swiss currency is **CHF**, written before the amount (*CHF 48.00*), thousands with a comma or thin space.
- **Operational, not cute.** Verbs are dispatcher verbs: assign, dispatch, reassign, vet, onboard, settle, reconcile. No emoji. No exclamation marks in product UI. No jargon the reader wouldn't say out loud.
- **Reliability as a promise.** Language leans on trust words: *reliable, vetted, compliant, guarantee, SLA, single invoice*. That is the brand's differentiation and the copy should keep earning it.

Example microcopy: *"Assign driver"* · *"Dispatch now"* · *"No drivers available in zone."* · *"All operators met the 5-minute pickup guarantee."* · *"Trip VT-4821 assigned to AlpTaxi."*

---

## VISUAL FOUNDATIONS

**Overall vibe.** Swiss clarity: high contrast, generous whitespace, a strict grid, one hard accent. Black-and-white does the structural work; **Swiss Red** is a scalpel, never a wash. Think signage and timetables, not dashboards drowning in color.

**Color.** Four brand constants: Road Black `#0A0A0A`, Swiss Red `#DA291C`, Pure White `#FFFFFF`, Alpine Mist `#E6E7E8`. Red is reserved for the single most important action or the live/critical signal — if two things are red, one is wrong. A cool **neutral slate ramp** (extension) carries the data-dense UI; **green / amber / blue** status ramps (extension) handle operational signalling (live, pending, scheduled). See `tokens/colors.css`.

**Typography.** The **Funnel** family throughout: **Funnel Display** for headlines, numerics and brand voice (tight tracking, bold-to-heavy weight); **Funnel Sans** for UI, tables and long-form. Display headlines set tight (`-0.015em`, line-height 1.12). Product body baseline is **14px** for density. Loaded from Google Fonts (Funnel is the brand's specified family, so this is the real typeface, not a substitute).

**Backgrounds.** Light product surfaces are near-white (`--surface-page` #F7F8F9) with white cards. The brand's *expressive* surface — used on the deck, hero and login — is **Road Black with a soft Swiss-Red radial glow** bleeding from one corner (see `assets/img/bg-red-glow.png`). No busy patterns, no photographic textures behind UI, no purple/blue gradients.

**Imagery.** Team/people shots are crisp studio headshots on cool neutral-gray seamless backdrops — professional, even, slightly cool. Product imagery = maps and real operational data, not stock illustration. No hand-drawn illustration in the brand.

**Corners.** Restrained. Controls and chips `8px`, cards `10px`, panels/modals `14px`, pills fully round. The large **squircle** radius (`24%`) is reserved for the app badge only — don't put it on UI cards.

**Elevation.** Soft, low-spread, cool shadows (`rgba(10,10,10,·)`) — `--shadow-xs` through `--shadow-xl`. Most surfaces sit on a **1px hairline border** (`--border-subtle`) rather than a heavy shadow; that hairline is the signature Swiss edge. Cards combine a hairline + `--shadow-xs`.

**Borders & dividers.** 1px, `--border-subtle` (#DBDDE0) for structure, `--border-default` for inputs. Tables and lists are organised by hairline row dividers, not zebra fills.

**Motion.** Precise, quick, no bounce. `--ease-standard` (cubic-bezier(.2,0,0,1)) for most; `--duration-fast 120ms` for hovers, `--duration-base 180ms` for panels/dialogs. The one living motion is the **live pulse** on `StatusPill status="live"` — a soft expanding ring that signals real-time. Respect reduced-motion.

**Hover / press.** Hover = a step change in surface (`--surface-hover`) or one shade darker on solid buttons; never opacity fades on primary controls. Press = the next-darker token (`--action-*-bg-press`), no scale/shrink. Focus = a 3px Swiss-Red ring at 30% (`--focus-ring`) plus a solid red border on inputs.

**Transparency & blur.** Used sparingly: the dialog backdrop is `rgba(10,10,10,.44)` with a 2px blur; the dark sidebar uses low-opacity white overlays (`rgba(255,255,255,.05–.10)`) for hover/active. No frosted-glass panels in the main UI.

**Layout rules.** Dark app sidebar (248px, collapsible to 64px) + light content. 60px top bar. Content max ~1360px. 4px spacing grid; 24px default gutter/card padding. Tabular numerics for every number a dispatcher reads.

---

## ICONOGRAPHY

Vertt ships **no proprietary icon set** in the provided sources, and no icon font. The brand's only geometric marks are the **Vertt+ wordmark** and the **"V+" app badge** (`assets/logo/`).

- **Icon library: [Lucide](https://lucide.dev) — SUBSTITUTION, flagged.** Lucide's clean, even 2px-stroke, rounded-linecap outline style matches the Swiss/premium-B2B tone and the geometry of the Vertt marks. It is loaded from CDN in every card and UI kit (`https://unpkg.com/lucide`). If Vertt has (or adopts) an official icon set, swap it here and update this section. Recommended default: **1.75–2px stroke, 18–20px, `--text-secondary`/`--text-tertiary` color, no fill.**
- **Icons are monochrome and functional** — they inherit text color, never carry the brand red unless they *are* the live/critical signal. Pair an icon with a text label wherever space allows; icon-only controls must set `ariaLabel`.
- **Status is dots, not icons.** Operational state is communicated by the `StatusPill` signal dot + color, not by glyphs. This is deliberate and central to the system.
- **No emoji, ever**, in product or brand surfaces. No Unicode dingbats as icons. The one non-Lucide glyph in the system is the **"+"** of the wordmark, which belongs to the logo, not the icon set.
- Logos: use `vertt-lockup-white.png` on dark, `vertt-lockup-black.png` on light; the `vertt-badge-*` squircles for app/avatars/favicons. Never recolor, rotate, or reconstruct the marks — use the supplied files.

---

## Foundations (tokens)

`styles.css` is the single entry point (import-only). It reaches:

- `tokens/fonts.css` — Funnel Display + Funnel Sans (`@import` from Google Fonts).
- `tokens/colors.css` — brand core, neutral slate ramp, red ramp, green/amber/blue status ramps, and semantic aliases (`--text-*`, `--surface-*`, `--border-*`, `--action-*`, `--status-*`).
- `tokens/typography.css` — families, weights, type scale, line-heights, tracking, semantic roles.
- `tokens/spacing.css` — 4px spacing scale + layout constants (sidebar/topbar/content sizes).
- `tokens/radius.css` — radius scale + elevation shadows + motion (easing/durations).
- `tokens/base.css` — element resets and two utility classes (`.vx-eyebrow`, `.vx-tabular`).

Specimen cards for all of the above appear in the **Design System** tab (groups: Brand, Colors, Type, Spacing).

---

## Components

Reusable React primitives under `components/<group>/`. Import from the compiled bundle: `const { Button } = window.VerttOSDesignSystem_fffbe3`.

**core/** — `Button` · `IconButton` · `Input` · `Select` · `Checkbox` · `Radio` · `Switch` · `SegmentedControl`
**data/** — `Badge` · `StatusPill` · `Tag` · `Avatar` · `StatCard` · `Table` · `ProgressBar`
**surface/** — `Card`
**feedback/** — `Alert` · `Toast` · `Tooltip` · `Dialog`
**navigation/** — `Tabs` · `Breadcrumb` · `NavItem` · `SidebarNav` (+ `NavSection`)

Each directory has a `@dsCard` HTML specimen (Components group) and each component a `.prompt.md` with usage. **Intentional additions** beyond the standard set, driven by the mobility product: `StatusPill` (operational trip/driver/vehicle status — the system's most-used data component), `StatCard` (dashboard KPIs), `ProgressBar` (fleet utilization / SLA), and the dark `SidebarNav`/`NavItem`/`NavSection` shell for the ops console.

---

## UI kits

Full-screen, click-through recreations under `ui_kits/<product>/` — see each kit's `README.md`:

- **`ui_kits/dispatch/`** — Live Operations / Dispatch console (flagship web app): dashboard, live dispatch board + map, trips.
- **`ui_kits/portal/`** — B2B Corporate Portal: booking flow, trips & invoicing for enterprise admins.
- **`ui_kits/driver/`** — Driver mobile app: online/offer/active-trip screens.

## Sample slides

`slides/` — pitch-deck slide templates in the Vertt style (title, statement, two-column, metrics, team). Group "Slides" in the Design System tab.

---

## Root index / manifest

- `styles.css` — global entry (import-only).
- `tokens/` — foundation CSS (fonts, colors, typography, spacing, radius, base).
- `guidelines/` — foundation specimen cards (Brand, Colors, Type, Spacing).
- `components/` — reusable primitives (core, data, surface, feedback, navigation).
- `ui_kits/` — dispatch, portal, driver.
- `slides/` — sample pitch slides.
- `assets/logo/` — Vertt+ wordmark & badge lockups. `assets/img/` — team photos, red-glow background.
- `SKILL.md` — Agent-Skill entry point for downloading this system into Claude Code.
- `uploads/` — original source files (deck, visual guide, raw logos).

## Known gaps / to confirm

- **Fonts** load from Google Fonts (Funnel is the brand's real family — not a substitution). If Vertt has licensed/self-hosted Funnel binaries, drop them in and swap `tokens/fonts.css` to `@font-face`.
- **Icons** are Lucide (substitution) — replace if an official set exists.
- Status colors, the neutral/red ramps, elevation and motion are **extensions** of a 4-color guide; confirm against any fuller brand spec.
- No source UI (code/Figma) was provided; UI kits interpret the brand rather than mirror a build.
