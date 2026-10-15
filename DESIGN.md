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

---

## 8. Accessibility: `prefers-reduced-motion`

Some people turn off animations in their OS settings because motion genuinely triggers nausea or vestibular disorders. Most sites ignore that setting entirely. Don't.

Wrap every animation class in a `prefers-reduced-motion: reduce` media query and switch them off. Five seconds of work.

### The rule

```css
@media (prefers-reduced-motion: reduce) {
  .your-animated-class {
    animation: none !important;
    transition: none !important;
  }
}
```

### What to cover

- All CSS animation classes: marquee, spin-ring, flash, blink, gradient-x, hover effects.
- Scroll-reveal classes: `.reveal`, `.reveal-fade` — set `opacity: 1`, `transform: none`, `transition: none`.
- Any JS-driven transforms (e.g. sticky card scale in `HomeServices`) — guard with `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before applying `el.style.transform`.

### What not to do

- Don't just slow the animation down. Stop it entirely.
- Don't forget JS-driven motion. CSS media queries don't cover `el.style.transform` set in a scroll handler.

---

## 9. Scroll-Driven Reveal Animations

Driven by a single global IntersectionObserver in `MainLayout.tsx`. Firefox and Safari don't support `animation-timeline: view()`, so IO is used for universal compatibility.

### How it works

Elements start hidden via CSS. The IO in `MainLayout` watches all `.reveal` and `.reveal-fade` elements. When one enters the viewport, `.is-visible` is added and the element is unobserved (fire-once).

### The rules

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease-out, transform 0.55s ease-out;
}

.reveal-fade {
  opacity: 0;
  transition: opacity 0.55s ease-out;
}

.reveal.is-visible,
.reveal-fade.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal-fade { opacity: 1; transform: none; transition: none; }
}
```

### Usage

Add `reveal` to any element that should fade+slide in on scroll. Add `reveal-fade` for fade-only.

```tsx
<div className="reveal">...</div>
```

### Rules

- Never set inline `opacity: 0` or `transform` as initial scroll-reveal state. Let the CSS class handle it.
- The IO is registered in `MainLayout` on `pathname` change — no per-component setup needed.
- Fire-once: once `.is-visible` is added, the element is unobserved. It does not reverse on scroll-up.

---

## 10. Spinning Gradient Border

You can't animate a gradient directly. The trick is `@property` — register a custom `--angle` property with a typed syntax so the browser treats it as an animatable number, then feed it into a `conic-gradient`.

### Why it works

Without `@property`, `--angle` is just a string. The browser can't interpolate between two strings. With `@property { syntax: '<angle>' }`, it becomes a real typed value the browser can tween. Spin it from `0deg` to `360deg` and the conic gradient rotates with it.

### The CSS

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes spin-angle {
  to { --angle: 360deg; }
}

.spin-ring {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1.5px;
  background: conic-gradient(
    from var(--angle),
    transparent 0%,
    transparent 40%,
    rgba(99, 102, 241, 0.9) 50%,
    rgba(167, 139, 250, 0.7) 55%,
    transparent 65%,
    transparent 100%
  );
  animation: spin-angle 4s linear infinite;
  pointer-events: none;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

### The mask trick

The `.spin-ring` div fills the entire card area with the spinning gradient. The mask punches a hole through the center (`content-box`), leaving only the `1.5px` padding edge visible. The card's own background shows through the hole. No `z-index` needed, no stacking context interference.

### Usage

Add a `<div className="spin-ring" />` as the first child inside any `relative` card.

```tsx
<div className="relative rounded-2xl bg-[#0e0e1a] ...">
  <div className="spin-ring" />
  {/* card content */}
</div>
```

### Rules

- The parent card must have `position: relative` and `border-radius` set — the ring inherits both.
- Do not use `overflow: hidden` on the parent. It breaks sticky stacking and spotlight effects.
- Do not put `.spin-ring` on the card element itself via pseudo-elements if the card uses `transform`, `willChange`, or `position: sticky` — pseudo-elements share the stacking context and will conflict. Use a real child div instead.
- The gradient arc is intentionally narrow (40%–65%) so it reads as a single glowing sweep, not a full rainbow ring. Keep it that way.
