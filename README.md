# Weather Atlas — Condition Taxonomy Explorer & Live AI Atmospheric Telemetry Station

[![Status](https://img.shields.io/badge/Status-Production%20Ready-emerald.svg)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![WCAG](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-orange.svg)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Data-Model](https://img.shields.io/badge/Architecture-Static%20Taxonomy%20%2B%20Live%20Telemetry-purple.svg)](#architecture-overview)
[![API](https://img.shields.io/badge/Live%20Engine-Open--Meteo%20%2B%20Gemini%202.5%20Flash-sky.svg)](https://open-meteo.com/)

> **Tagline:** *Explore weather conditions at a glance.*  
> A high-precision frontend web application bridging a deterministic, zero-dependency static weather taxonomy explorer with an edge-to-edge, fullscreen live telemetry cockpit powered by the Open-Meteo API and Gemini 2.5 Flash intelligence.

---

## 1. Executive Summary & Product Purpose

**Weather Atlas** was engineered to solve two distinct frontend and pedagogical challenges:

1. **The Static Condition Explorer (Internship Specification):**  
   Provides a completely offline, deterministic data-to-UI mapping matrix. Users can visually recognize meteorological phenomena, inspect standardized SVG vector symbols, verify condition categorization, and test multi-channel state synchronization without external API rate limits, API key dependencies, or network latency.
2. **The Oripio Fullscreen Live Station (Production Cockpit):**  
   Provides an edge-to-edge (`100vw`, `100vh`) live telemetry station inspired by modern interface designs. It connects to the public Open-Meteo API (defaulting to Pune, Maharashtra, India) and the Google Gemini 2.5 Flash API to deliver real-time atmospheric readings, kinetic 24-hour thermal sparkline curves, Doppler radar sweeps, and natural language copilot briefings.

---

## 2. Core Architectural Highlights

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       WEATHER ATLAS (index.html)                            │
├──────────────────────────────────────┬──────────────────────────────────────┤
│    STATIC TAXONOMY EXPLORER          │   ORIPRIO FULLSCREEN LIVE STATION    │
│    (13 Canonical Sections)           │   (Edge-to-Edge Cockpit: 100vw/vh)   │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ • Pure Deterministic JavaScript      │ • Open-Meteo REST API (Real-Time)    │
│ • Zero API Latency / Zero Network    │ • Gemini 2.5 Flash AI Copilot        │
│ • 12 WMO-Aligned Condition States    │ • Collapsible 7-View Sidebar Rail    │
│ • Bidirectional Sync (Select ↔ Grid) │ • 24-Hour SVG Sparkline Trajectory   │
│ • WCAG 2.2 AA Polite Live Regions    │ • Doppler Radar & Air Quality (AQI)  │
│ • Non-Color-Only Physical Glyphs     │ • Dynamic Atmospheric Motion Canvas  │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

### Key Technical Pillars
* **Single-File Deployment:** Delivered in a single, high-performance `.html` file without external bundlers, build steps, or framework dependencies.
* **Silky Smooth Scrolling (Lenis Engine):** Driven by an official Lenis scroll loop (`duration: 1.4`, exponential deceleration curve) paired with a fallback inertia physics engine that activates if external CDNs are restricted in sandboxed iframes.
* **Universal Invisible Scrollbars:** Custom scrollbars are hidden across Chrome, Safari, Edge, and Firefox (`scrollbar-width: none; ::-webkit-scrollbar { display: none; }`) while maintaining full mouse-wheel, trackpad, and touch scrolling.
* **60fps Micro-Lerp Cursor Follower:** Linear interpolation (`followerX += (mouseX - followerX) * 0.16`) drives an orbital SVG cursor follower that morphs and expands on interactive hover targets. Coarse pointer and touch devices are automatically detected to avoid unnecessary animation overhead.
* **Atmospheric Preloader:** Multi-ring radar gyroscope loader featuring progress tracking (`0%` to `100%`) and milestone announcements that gracefully dissolves once telemetry probes calibrate.

---

## 3. Detailed Section Order (Canonical Master Spec)

The main page adheres to the **13 canonical sections** defined in the Master Prompt:

| # | Section ID | Name | Functionality & Role |
|---|---|---|---|
| **01** | `#skip-link` | **Skip Link** | Keyboard accessibility link (`.skip-link`) allowing screen reader and keyboard users to bypass navigation directly to `#main-content`. |
| **02** | `header` | **Header & Navigation** | Sticky frosted glass header with product branding, smooth-scrolling anchors, global theme toggler, and dashboard launch button. |
| **03** | `#hero` | **Hero / Introduction** | Headline, value proposition, interactive SVG vector artwork with orbital sun rays and rain dashes, and primary CTAs. |
| **04** | `#interactive-display` | **Interactive Weather Display** | Core tool featuring the native `<select>` dropdown, high-contrast showcase card, data key, and `aria-live="polite"` feedback. |
| **05** | `#quick-selector` | **Quick Condition Selector** | Instant 1-click condition pill buttons allowing users to switch conditions and sync the entire interface. |
| **06** | `#explore-conditions` | **Explore All Conditions Grid** | Responsive directory grid displaying all 12 weather conditions with live text filtering (by name or description) and an empty-state card. |
| **07** | `#categories` | **Condition Categories** | Categorical filters (*Clear Skies*, *Clouds*, *Precipitation*, *Atmospheric*, *Wind*) with live count badges and a reset toggle. |
| **08** | `#guide` | **Icon Meaning & Accessibility** | Explains WCAG 2.2 AA design considerations: non-color-only geometric silhouettes, screen reader announcements, and focus ring standards. |
| **09** | `#how-it-works` | **How It Works** | 3-step workflow diagram explaining key selection, single-source data resolution, and multi-channel UI updates. |
| **10** | `#use-cases` | **Practical Use Cases** | Highlights design system prototyping, conditional rendering education, assistive tech auditing, and live telemetry simulation. |
| **11** | `#faq` | **Frequently Asked Questions** | Accessible disclosure accordion with synchronized `aria-expanded` and `hidden` attributes covering data sources, themes, and SVG usage. |
| **12** | `#final-cta` | **Final CTA / Return** | Conversion section with direct actions to return to the interactive condition explorer or launch the live telemetry station. |
| **13** | `footer` | **Multi-Column Production Footer** | System status badge, quick condition jump shortcuts, architectural navigation links, dynamic year calculation, and zero-framework transparency notice. |

---

## 4. Static Taxonomy Dataset (Task 1.1 Specification)

The static condition database is defined in `WEATHER_CONDITIONS`. Each item contains strict metadata to eliminate ambiguity:

```javascript
{
  key: "partly-cloudy",
  name: "Partly Cloudy",
  category: "Clouds",
  desc: "Scattered cumulus clouds with intermittent sunny spells throughout the daytime.",
  a11y: "Sun partially obscured by cloud symbol",
  icon: "cloud-sun",
  color: "text-sky-500"
}
```

### Complete 12-State Directory:
1. **Sunny** (`Clear Skies`) — *Unobstructed sunshine with crystal-clear horizontal visibility.*
2. **Partly Cloudy** (`Clouds`) — *Scattered cumulus clouds with intermittent sunny spells.*
3. **Cloudy** (`Clouds`) — *Predominantly covered sky with diffused light coverage.*
4. **Overcast** (`Clouds`) — *Heavy uniform stratus layer concealing solar disc completely.*
5. **Drizzle** (`Precipitation`) — *Fine, misty droplet precipitation falling at steady rate.*
6. **Rainy** (`Precipitation`) — *Steady liquid rainfall generating pooling accumulation.*
7. **Thunderstorm** (`Precipitation`) — *Intense convective squalls accompanied by electrical discharges.*
8. **Snowy** (`Precipitation`) — *Freezing precipitation depositing delicate stellar crystals.*
9. **Foggy** (`Atmospheric`) — *Dense ground mist reducing horizontal range below 1,000 meters.*
10. **Windy** (`Wind`) — *High-velocity air currents producing sustained surface pressure.*
11. **Hail** (`Precipitation`) — *Frozen ice pellets falling violently during severe updrafts.*
12. **Clear Night** (`Clear Skies`) — *Quiet nocturnal skies with crisp celestial star observation.*

---

## 5. Fullscreen Oripio Live Telemetry Cockpit

Clicking the **Live AI Dashboard** button transitions into the full-screen telemetry workspace (`#oripio-app-viewport`):

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [≡] Jatin Joshi   [ Search City: e.g., Tokyo, London ]   [GPS] [°C] [☼] [X] │
├──────────────┬──────────────────────────────────────────────────────────────┤
│ [Overview]   │ ┌───────────────────────────┐ ┌────────────────────────────┐ │
│ [Radar]      │ │ Pune, India               │ │ Interactive Vector Map     │ │
│ [AirQuality] │ │ 28°C Feels Like 29°C      │ │ • Pune • New York • Tokyo  │ │
│ [14-Day]     │ │ Vis: 10km | Hum: 52%      │ │ • London • Sydney          │ │
│ [Alerts]     │ └───────────────────────────┘ └────────────────────────────┘ │
│ [Gemini AI]  │ ┌──────────────────────────────────────────────────────────┐ │
│ [Settings]   │ │ Hourly Trajectory: Continuous 24H SVG Thermal Sparkline  │ │
│              │ └──────────────────────────────────────────────────────────┘ │
│ [Collapse ◀] │ ┌───────────────┐ ┌────────────────┐ ┌─────────────────────┐ │
│ [User: JJ]   │ │ Mini-Cards    │ │ Diurnal Shift  │ │ Tomorrow Projection │ │
│ [Exit Atlas] │ │ NY / London   │ │ Morn/Noon/Eve  │ │ 30°C Mostly Sunny   │ │
└──────────────┴─┴───────────────┴─┴────────────────┴─┴─────────────────────┴─┘
```

### Cockpit Features:
1. **Collapsible Navigation Rail:** Toggles between a full `w-64` panel and a compact `w-[4.75rem]` icon strip with floating tooltip popups. Preferences are stored in `localStorage`.
2. **Dynamic User Personalization:** Greets the user based on the time of day (*Good Morning*, *Good Afternoon*, *Good Evening*). Clicking the profile avatar opens a modal allowing users to customize their name, updating their profile and dynamic initials (e.g., `JJ`).
3. **Open-Meteo Integration:** Automatically connects to real-world coordinates for **Pune, Maharashtra, India** (`18.5204° N, 73.8567° E`) with live updates for temperature, apparent temperature, relative humidity, UV index, surface pressure, visibility, and wind speeds.
4. **Interactive Doppler Radar Simulator:** Visualizes circular convective sweep frequencies, decibel reflectivity (`dBZ`), and precipitation density bands.
5. **Air Quality Index (AQI):** Monitors fine particulate matter ($PM_{2.5}$), coarse dust ($PM_{10}$), and respiratory safety boundaries.
6. **24-Hour Kinetic Sparkline Reel:** Renders a mathematical SVG bezier curve mapping temperature variations over 24 hours. Features kinetic mouse drag, horizontal trackpad gliding, and boundary-aware chevron controls.
7. **Gemini 2.5 Flash Atmospheric Copilot:**
   - **Automated Synthesis:** Analyzes current temperature, weather conditions, wind, and humidity to provide tailored Wardrobe, Outdoor Activity, and Hydration advice.
   - **Natural Language Chat:** Users can ask custom questions (*"What should I pack for a 3-day trip in this weather?"*, *"Can I plan a bicycle ride this evening?"*) with automated exponential backoff retry logic.

---

## 6. Accessibility & Usability (WCAG 2.2 AA)

* **Keyboard Navigation:** The application can be navigated using `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Escape`. The `Escape` key closes both the user profile modal and the fullscreen dashboard.
* **Focus Visibility:** Custom `:focus-visible` styling provides a high-contrast 2px orange outline with a 3px offset across all interactive components.
* **Screen Reader Politeness:** Dynamic condition changes trigger notifications through a dedicated `<div id="a11y-status" role="status" aria-live="polite">` element without forcing a full page re-read.
* **Non-Color Reliance:** Weather states are identified using distinct geometric silhouettes (sun rays, cloud layers, rain dashes, snowflakes, lightning paths) rather than color alone.
* **Reduced Motion:** Respects `prefers-reduced-motion: reduce` by disabling heavy particle drifts, continuous radar sweeps, and cursor lerping.

---

## 7. Setup & Run Instructions

Because this project is built entirely with semantic HTML5, CSS custom properties, and vanilla JavaScript, it requires **no Node.js packages, no npm installs, and no compilation steps**.

### Option A: Direct Browser Launch
1. Clone or download the repository files:
   ```bash
   git clone https://github.com/your-username/weather-atlas.git
   cd weather-atlas
   ```
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Safari, Edge, Brave, Opera):
   * **macOS:** `open index.html`
   * **Linux:** `xdg-open index.html`
   * **Windows:** `start index.html`

### Option B: Local HTTP Server (Recommended)
Running through a local web server ensures seamless fetching of weather data:
```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js npx
npx serve .

# Using PHP
php -S localhost:8080
```
Then visit `http://localhost:8080` in your web browser.

---

## 8. Browser & Device Compatibility Matrix

| Environment / Device | Minimum Viewport | Layout Performance | Cursor Lerp | Lenis Smooth Scroll |
|---|---|---|---|---|
| **Ultra-Wide 4K Displays** | $3840 \times 2160$ | Fluid auto-scaled container | Active (60fps) | Enabled |
| **Standard Desktop / Laptops** | $1440 \times 900$ | Native 12-column grid | Active (60fps) | Enabled |
| **Tablets (iPad, Galaxy Tab)** | $768 \times 1024$ | Reflowed 2-column flex | Touch-bypassed | Touch-Inertia |
| **Mobile Phones (iPhone, Pixel)** | $375 \times 812$ | Single-column stacked cards | Auto-disabled | Native Inertia |
| **Narrow Compact Mobile** | $320 \times 568$ | Zero horizontal overflow | Auto-disabled | Native Inertia |

---

## 9. Technology Stack

* **Markup:** Semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `dialog`)
* **Styling:** Modern CSS3, CSS Grid, Flexbox, CSS Custom Properties (Tokens), Glassmorphism Backdrops
* **Icons:** Lucide Icons Vector SVG Engine
* **Smooth Scrolling:** Lenis Smooth Scroll Engine v1.1.20 with native momentum physics fallback
* **Telemetry Source:** Open-Meteo Free Public Weather & Geocoding REST APIs
* **Artificial Intelligence:** Google Gemini 2.5 Flash Model (`gemini-2.5-flash`)
* **Fonts:** Plus Jakarta Sans & JetBrains Mono (Google Fonts)

---

## 10. Privacy, Telemetry, and Limitations

1. **Zero Tracking / Zero Cookies:** Weather Atlas does not load third-party analytics trackers, cookies, or fingerprinting scripts.
2. **Local Client Storage:** `localStorage` is used solely to remember your chosen theme (`kroma-theme`), your profile name (`kroma_user_name`), and sidebar collapse state (`kroma_sidebar_collapsed`). All data remains on your local machine.
3. **Static Page vs. Live Dashboard Scope:** The main Weather Atlas page strictly uses deterministic local data in compliance with the internship assignment. Live real-time updates and Gemini AI features operate exclusively inside the full-screen dashboard workspace.

---

## 11. Authors & Credits

* **Engineering & Architecture:** Jatin Joshi
* **Design Inspiration:** Oripio Design Studio
* **Meteorological Models:** Open-Meteo Open Data & World Meteorological Organization (WMO)
* **Intelligence Layer:** Google DeepMind / Google AI Studio (Gemini API)

*Copyright &copy; 2026 Weather Atlas Systems. Built with Semantic HTML5, CSS3 Custom Properties & Vanilla JavaScript.*# Weather-Atlas
