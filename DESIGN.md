# Design System & Visual Guidelines (`majestikmagik.dev`)

Majestik Magik uses a refined, high-end enterprise SaaS dark aesthetic (inspired by Raycast, Linear, and Vercel). It relies on deep blacks, sharp monospace telemetry labels, dynamic glowing borders, and physics-driven micro-interactions.

---

## 1. Color Palette & Design Tokens

### Backgrounds
- **Base Workspace:** `#0a0a12` (Ultra-deep slate)
- **Card Container:** `#111120` or `#0e0e1a`
- **Borders:** `#2a2a3a` / `#1e1e30`

### Brand Accents
- **Indigo (Interfaces & Web):** `#818cf8` (`text-indigo-400`)
- **Violet (Systems & Dashboards):** `#a78bfa` (`text-violet-400`)
- **Purple (Custom Engines):** `#c084fc` (`text-purple-400`)
- **Emerald (Local-First / Active Telemetry):** `#34d399` (`text-emerald-400`)

---

## 2. Typography & Hierarchy

- **Headings:** Sans-serif black/bold font (`font-black`, `tracking-tight`, `letter-spacing: -0.04em`).
- **Telemetry / Badges:** Monospace (`font-mono`, `text-[10px]` or `text-xs`, uppercase, `tracking-widest`).

```tsx
<span className="inline-block text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-[#161626] px-3 py-1 rounded border border-[#2a2a3a]">
  • LOCAL ACTIVE — ENTERPRISE SYSTEMS ONLINE
</span>
```

---

## 3. Core Component Blueprints

### A. Sticky Stacking Cards
Cards stack cleanly on top of each other as the user scrolls, applying a progressive scale reduction (`scale(0.95)`, `0.90`) to earlier cards to create visual depth.

- **Container Rule:** `<div className="relative space-y-12 pb-32">`
- **Card Rule:** `sticky`, `top-[100px]`, progressive `z-index` (`10 + i`), transform origin `top center`.

### B. Circuit Process Flow ("From Brief to Production")
Staggered step-by-step layout with vertical phase tags on the side of each card, connected by a dashed background SVG pipeline path (`stroke-[#2a2a3e]`, `strokeDasharray="6 6"`).

### C. Live Radar Ping Badges
Status indicators with animated pulsing halos:

```tsx
<div className="relative flex h-2 w-2">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
```

### D. Cursor-Driven Spotlight Cards
Cards listen to `mousemove` to set CSS variables (`--mouse-x`, `--mouse-y`), projecting a subtle radial light across borders as the user hovers over them.
