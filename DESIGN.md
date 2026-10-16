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

---

## 11. Restraint as a Design Strategy

Source: Crawford (web design practitioner, 800+ sites including Fortune 500)

Premium doesn't come from adding. It comes from removing. The most expensive-looking sites on the internet often sell the most unglamorous things — plumbing, insurance, industrial flow monitoring equipment. The product is dull. The site lands and within two seconds you've decided the company is serious, established, and not the cheapest option. You didn't reason your way there. That's psychology doing what it was built to do.

Most businesses get this backwards. They try to look premium by piling on effects, animations, and copy nobody will read. Trying that hard reads as not being sure of yourself.

### Restraint is the hardest thing to pull off

A stripped-back page can be the work of someone who made a hundred careful decisions, or it can be a template with a stock photo nobody ever touched. Same amount of stuff on screen. Completely different signal. The brain tells them apart even when you can't say how — this is the effort heuristic. We judge quality and trustworthiness by whether we can sense that real work went into something.

The line between premium-minimal and just-lazy is curation:

- Real photography instead of stock
- A dead black turned into a considered slate or off-white with one confident highlight color
- Small interactions that take time to get right

You can't fake it with a template. The visitor never sees most of that work, but they register all of it.

### What premium actually does

When a page is calm and sure of itself, the visitor reads that as a company with nothing to prove. When a page is cluttered and shouting, they read it the other way — even if they can't name why. The design goes under the radar. The visitor lands, and without being able to explain it, they relax. They know where they are, who it's for, and what to do next. The design did all of that and they never once looked at it directly.

The test: did the user get where they needed to go without noticing they were being guided? If yes, the design worked — even if they can't call it beautiful.

### The halving rule

Most sites carry two to three times the words, sections, and effects they actually need. Every extra element is one more object between the visitor and a decision.

The rule: if you can halve the content on a page and it still makes sense, good. If you can halve it again, even better. Every section you delete makes the ones that survive look more deliberate. Deliberate is what reads as expensive.

One warning: stripped-back copy is not the same as no copy. What survives the cut has to be properly written sales copy that speaks to the person reading it. A page stripped to a few sentences of generic filler is worse than a bloated page written by someone who knows their audience.

### Animations pull focus at the wrong moment

A big animation, things moving in from off the page, a layout you stop and admire — you remember that design. Which means for a second or two you stopped thinking about the company and started thinking about the website. On a portfolio for a design studio, fine. On a site that has to sell insurance or win a consulting client, that's a problem. You need them thinking about the decision they need to make. A fancy design just pulled them away from it.

### Audience clarity before content volume

The lazy version of a multi-audience homepage crams everything for everyone onto one page and overwhelms all of them. The right move is to split the path so each visitor can quickly identify where they belong. Two audiences, nobody scratching their head.

### Stakes determine how much to show

How far you strip a page back depends on how much the buyer stands to lose.

- **Low stakes** (haircut, coffee, sandwich): minimal copy, clear action. Nobody needs a six-step methodology to buy a sandwich.
- **High stakes** (wealth management, serious consulting): the visitor needs to see the process, the people, and what happens after they get in touch before they'll trust you. More questions have to be answered on the page before they'll book a call. That looks like the opposite of restraint, but every section still has to earn its place. It's the same principle with more information because the fear is bigger.

Stripping a high-stakes page back to a headline and a button reads as evasive. Getting this wrong in either direction costs customers.

### Who the site is actually for

Look at the average corporate website and count how much of it is the company talking about itself. "We are a leading provider, founded in 19-whatever, our values, our mission, a message from the board." That content usually exists for one reason: it strokes the ego of the people who signed it off.

Every section that exists to impress an executive is a section that isn't answering a customer's real question. The visitor can sense when a page is talking to them and when it's talking to itself.

The test: go through your site section by section and ask one blunt question about each one. Is this here for the buyer, or is it here for me? Everything in the second pile is probably costing you money.

A good designer isn't an order taker. Sometimes the best thing you can do for a client is stop them getting in their own customer's way.

### Validating your own site

You're the most biased person alive about your own site. You made it or you paid for it.

The honest check: stop trusting your eye and measure whether people reach the one action that matters or drop off before it. Pull your visitor numbers, pull how many convert, and compare against your industry average. If you're above it, something is working. If you're below it, no amount of animation will save you.

A rough check while you fix your analytics: show your homepage to a stranger for 5 seconds, then take it away. Can they tell you what you do and where to click next?

### The summary

Boring companies look expensive because boring, done on purpose, is just clarity. Premium is what's left when you strip away everything that isn't helping a buyer decide. Hardly anyone online bothers to get it right.

---

## 12. The Psychology of Web Conversion

Source: Crawford (web design practitioner, 750+ sites including Fortune 500)

There are two kinds of websites. On the first, you land and within a couple of seconds you relax. It just feels right. You trust it before you've read a single word. On the second, something feels off. You can't point to what it is, but you don't quite believe it — so you leave. Most people assume that difference comes down to budget or designer skill. It doesn't. The key difference is psychology. Sites that make people feel something and take action almost never win on looks alone. They win because they're built around how the human brain actually makes decisions.

### Jacob's Law — conventions over originality

Your visitors don't spend their time on your website. They spend it on everyone else's. Thousands of hours on the same shopping sites and apps, every day. By the time they reach you, their brain already holds a firm expectation of where things should be and how they should behave. The basket belongs top right. The logo takes you home. None of that is written down anywhere, but the brain treats it as law because every other site has trained it to.

Designers who try to be original with the parts that need to be invisible — a clever navigation that hides where things are, a checkout that reinvents a process people already know — force the visitor to stop and think. That small jolt of effort creates doubt.

The move: be original with ideas and craft. Be deeply boring with conventions. Put familiar things exactly where the brain expects to find them so the visitor never has to ask a question they shouldn't have to ask.

### Fitts's Law — reachable targets

From 1954, long before websites existed, and it has decided the success of every button ever designed. The time it takes someone to reach a target depends on two things: how big it is and how far away it is. Bigger and closer means faster and more confident. Smaller and farther means more effort — and effort is where people give up.

On mobile, where everything happens under one moving thumb, the cost multiplies. The main action should be large, sitting low on the screen inside the natural arc of the thumb, not crowded by ten competing links at the same size.

The test: look at your primary CTA on a phone held in one hand. If your thumb has to stretch to the top of the screen or hunt between cramped links, you're adding friction at the exact moment you're asking someone to act.

### Social proof — placement over presence

Humans are wired to look at what other people are doing before they decide, and that instinct gets stronger the less certain they feel. Most websites use social proof badly. A testimonials page nobody visits, or a wall of five-star quotes sitting far from any actual decision. The proof is technically present but nowhere near the moment of doubt, so it doesn't work.

The brain needs reassurance at the exact moment of hesitation. Review scores belong on the product detail page when someone is deciding to add to cart. Proof belongs next to the action, not buried in an about page.

The subtler layer: proof is most persuasive when it mirrors the visitor. A quote from someone in their industry, with their job title, facing their problem lands far harder than a famous logo that has nothing to do with them. People are reassured most by people like themselves.

Walk through the site and find every moment where a visitor pauses and wonders whether it's safe. Put the evidence right there, at the second they need it.

### Authority bias — position over existence

The brain gives more weight to anyone it reads as credible or qualified. When a visitor sees real credentials — certifications, press, recognizable clients — the brain upgrades how it trusts everything else on the page.

Most sites either bury their authority or waste it. The founder with 20 years of experience buried three pages deep. The business mentioned somewhere serious that mentions it nowhere near the decision. The credibility exists but it's not standing where it should be doing the work.

Authority signals belong close to the point where you want action taken, not floating where they connect to nothing. If a real person with real authority stands behind an offer, the visitor should feel that presence at the moment they decide.

One warning: the brain is good at spotting fakes. A meaningless badge or a logo you can't back reads as performative and lowers trust instead of raising it. Authority only works when it's real and verifiable.

### Default effect — the starting point carries weight

Whatever option you preselect, most visitors will keep it. We're all wired to take the path of least resistance. Countries where organ donation defaults to opt-out have consent rates around 90%. Countries where you actively opt in sit far lower. Same people, same values — only the default changed.

On a website: the billing toggle that defaults to annual, the plan already marked as recommended, the next episode that plays unless you stop it. None of these force anyone. They simply set the starting point, and the starting point carries enormous weight.

The responsibility: the same power can be used against people, and the brain resents it when it notices. A pre-ticked box that signs someone up to something they didn't want wins the click and loses the trust. Set defaults that serve the visitor — the plan that fits most people, the choice you'd honestly recommend to a friend. The easy path and the right path should be the same path.

### The decoy effect — comparison over absolute value

People are surprisingly bad at judging value on its own. They judge by comparison instead. Add a third option that is deliberately a little worse than the one you want them to choose, and you make the target option look obviously better.

The classic example: a magazine offered web-only at a low price, print-only at a high price, and print-plus-web at the same high price as print-only. Almost nobody wanted print alone — but next to it, print-and-web for the same money looked like an obvious win. Remove the useless middle option and the choices flip.

On a pricing page: three tiers arranged on purpose versus three tiers thrown down at random. The option you want most people to take should sit next to a neighbor that makes it look generous. The decoy earns its place purely by flattering the option beside it.

The line: a decoy that is obviously a trick will annoy people. A pricing structure that genuinely makes your best-value option look like what it is — the best value — is just clarity.

### The Pratfall effect — honesty over perfection

Admitting a flaw can make people trust you more, not less. A person or brand presented as flawless reads as slightly unreal, and the brain stays on guard. The moment a small honest imperfection appears, the whole thing becomes more believable — and believable is what people actually trust.

Almost every website does the opposite. Every review is five stars. Every outcome is perfect. The product is for everyone and there's nothing it can't do. A visitor who's been on the internet for more than a week reads that wall of perfection as exactly what it is, and braces.

The alternative: show the real review average including the threes. Let people read the honest criticism and see how the company handled it. Tell them right on the pricing page who this is not for. That honesty makes every other claim on the site more believable, because clearly this is a business that tells the truth even when it stings.

### The summary

- Conventions make a visitor comfortable.
- Reachable targets let them act.
- Proof placed at the point of doubt makes them feel safe.
- Real authority makes them defer.
- Sensible defaults carry them forward.
- A well-arranged choice helps them decide.
- A little honesty makes them believe.

None of these are tricks. Every one of them is a designer respecting how a real human brain works instead of how we wish it worked. When a site feels effortless and you trust it before you can explain why, that is not one clever touch. That is all of this aligned, working beneath the surface. When a site feels off and you can't pinpoint why, it's almost always because some of these principles are being violated without anyone realizing.
