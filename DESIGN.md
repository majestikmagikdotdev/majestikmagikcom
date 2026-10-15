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

---

## 4. Premium Button Lighting

Cheap buttons have one shadow. Premium buttons are lit from above using four box-shadows — two of which aren't shadows at all, they're light.

### The Four Layers

1. `inset 0 1px 0 rgba(255,255,255,0.18)` — top edge highlight. This is the light source hitting the top face of the button.
2. `inset 0 -1px 0 rgba(0,0,0,0.28)` — bottom inner shadow. The face pointing away from the light.
3. `0 2px 4px rgba(0,0,0,0.45)` — tight contact shadow directly underneath, where the button sits on the page.
4. `0 0 18px rgba(99,102,241,0.45)` — soft color glow in the button's own color. Light bouncing off the surface.

Pair with a subtle top-to-bottom gradient — slightly lighter on top, darker on the bottom — to reinforce the lighting direction.

### On Press (`:active`)

Flip it. Gradient goes darker on top. Top highlight becomes a dark inset. Bottom shadow becomes a faint light line. Button drops 1px with `transform: translateY(1px)`. Feels like it physically depresses into the page.

### Implementation

```css
.btn-premium {
  background: linear-gradient(180deg, #6d72f6 0%, #4f46e5 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.18),
    inset 0 -1px 0 rgba(0,0,0,0.28),
    0 2px 4px rgba(0,0,0,0.45),
    0 0 18px rgba(99,102,241,0.45);
  border: 1px solid rgba(99,102,241,0.5);
  transition: background 150ms ease, box-shadow 150ms ease, transform 80ms ease;
}
.btn-premium:hover {
  background: linear-gradient(180deg, #7c82f8 0%, #5b52f0 100%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.22),
    inset 0 -1px 0 rgba(0,0,0,0.28),
    0 2px 6px rgba(0,0,0,0.45),
    0 0 26px rgba(99,102,241,0.55);
}
.btn-premium:active {
  background: linear-gradient(180deg, #4338ca 0%, #4f46e5 100%);
  box-shadow:
    inset 0 1px 0 rgba(0,0,0,0.2),
    inset 0 -1px 0 rgba(255,255,255,0.06),
    0 1px 2px rgba(0,0,0,0.5),
    0 0 10px rgba(99,102,241,0.3);
  transform: translateY(1px);
}
```

### Usage

Add `btn-premium` to any primary indigo CTA. Remove conflicting Tailwind classes (`bg-indigo-600`, `hover:bg-indigo-500`, `border`, `transition-*`).

```tsx
<button className="btn-premium font-mono uppercase tracking-wider text-sm text-white rounded-full px-5 py-2 cursor-pointer font-bold">
  Let's Talk
</button>
```

---

## 5. Anti-AI-Tell Checklist

A site built by AI can be identified in about 3 seconds. Not because it looks bad, but because of these patterns. Avoid all of them.

### The Five Core Tells

1. **Purple/blue gradient obsession.** AI defaults to indigo-to-violet on everything. Use color with intention. Not every heading, card, and button needs to glow purple.

2. **Everything centered.** Hero text, section headings, cards, footer columns — all centered. Real sites break alignment somewhere. Left-align body copy and section headers. Reserve centering for moments that earn it.

3. **Em dash overuse.** AI writes in em dashes the way humans breathe. Use periods or semicolons instead.

4. **One gradient word in the headline.** Always the power word. Always "faster" or "smarter" or "better." If you use gradient text, it should be the exception across the entire site, not the default for every H1.

5. **Eyebrow labels on every section.** Small uppercase mono text sitting above every large heading — "Services", "How it works", "Work with us". It signals template thinking. Use them sparingly or not at all. Let the heading carry the weight.

### Additional Tells (Secondary)

- **Glass morphism everywhere.** `backdrop-blur` + semi-transparent borders on every card.
- **Floating orbs/blobs.** Large soft radial gradients positioned decoratively in corners or behind sections.
- **Round number stats.** "10,000+ users", "99.9% uptime", "500+ projects". Always suspiciously round.
- **"Get Started Today" CTAs.** Or any variant: "Start Your Journey", "Transform Your Business".
- **Testimonials with no last names.** "Sarah M." or just "John" with a stock avatar.
- **Animated stat bars.** Progress bars counting up to 97%, 100%, 95% — usually in a fake dashboard mockup.
- **Every section has a subtitle.** A heading, then a 1-2 sentence paragraph below it explaining what the section is. Real sites trust the heading.
- **Footer newsletter signup.** "Stay in the loop." with an email input. Almost never used, always present.
- **Hover cards that lift.** `translateY(-4px)` on every card hover, sitewide.

### Rules for This Site

- No eyebrow labels on section headers. Removed sitewide.
- No em dashes in copy. Use periods or semicolons.
- Gradient text used once in the hero only.
- Hero and section headers are left-aligned.
- Testimonials use real full names and real locations.
- Stats in mockups reflect real system behavior, not vanity metrics.

---

## 6. Smooth Infinite Marquee

Most HTML marquees snap back — you can see exactly where the loop resets. The fix is simple: duplicate the track, then animate it by `-50%`.

Version two lands exactly where version one started. The frame at `100%` is pixel-identical to the frame at `0%`. The loop runs forever with no visible seam.

### How it works

1. Build one set of items (e.g. 4 logos).
2. Repeat that set enough times so the total track width exceeds any viewport — typically 6× for logos.
3. Animate the track from `translateX(0)` to `translateX(-50%)`.
4. At `-50%` the view is identical to the start. The browser loops back to `0%` and nobody notices.

### Keyframe

```css
@keyframes marquee-scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Implementation

```tsx
const LOGOS = [ /* your items */ ];
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

<div className="w-full overflow-hidden"
  style={{ maskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)' }}
>
  <div
    className="flex w-max gap-16 items-center"
    style={{ animation: 'marquee-scroll-left 22s linear infinite' }}
  >
    {TRACK.map((item, i) => <LogoItem key={i} {...item} />)}
  </div>
</div>
```

### Notes

- `w-max` on the inner div lets it grow as wide as it needs to — never constrain it.
- The mask gradient fades items in/out at the edges so there's no hard clip at the viewport boundary.
- Do not use `justify-center` on the wrapper — it fights the animation.
- Speed: `22s` works well for 4 logos at 6× repetition. Adjust proportionally if you add more items.

---

## 7. Copy Rules

- **No em dashes.** Ever. They are the single most reliable signal that copy was written by AI. Use a period or semicolon instead. The sentence will be stronger for it.
