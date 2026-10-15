# Agent Skills & Domain Competencies (`majestikmagik.dev`)

This document outlines the specialized technical skill sets and architectural workflows available to the AI Assistant within this repository.

---

## 1. Local-First & Cryptographic Engines

### Web Crypto API (AES-GCM 256-Bit)
- **Wrapper Implementation:** Encrypts raw JSON objects before passing to `idb.put()` and decrypts after `idb.get()` calls.
- **Key Derivation:** Uses `PBKDF2` or raw session keys stored strictly in volatile memory.

```typescript
export async function encryptData(data: object, key: CryptoKey): Promise<{ cipherText: ArrayBuffer; iv: Uint8Array }> {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(JSON.stringify(data));
  const cipherText = await window.crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, encoded);
  return { cipherText, iv };
}
```

---

## 2. DMAS Form Field Coordinate Mapping Engine

- **Coordinate Precision:** Maps dynamic HTML form inputs to exact X/Y coordinates on standard state/regulatory PDF documents (e.g., Virginia DMAS Medicaid forms).
- **Touch Signature Engine:** Captures smooth vector/canvas strokes, converting them to transparent PNG data URLs for real-time PDF stamping.

---

## 3. WebGL & 3D Hardware Visualization (Three.js)

- **Hardware Mapping:** Loads 3D phone/device GLTF models (e.g., Galaxy S21 Ultra) into standard Next.js viewports.
- **Dynamic Canvas Mapping:** Projects dynamic web applications directly onto 3D screen geometry materials as `MeshStandardMaterial` textures with realistic glass roughness and reflectivity.

---

## 4. Hardware Prototyping & CAD Integration Workflow

- **CAD Modeling:** Integration with Onshape / Fusion 360 STEP and STL models for commercial 3D printer slicing (OrcaSlicer/PrusaSlicer).
- **PCB Design:** KiCad schematic export to STEP format for millimeter-accurate enclosure snap-fits.

---

## 5. Gen Z Brand Voice & Conversational Marketing Strategy

**Source:** CNBC — *How brands are marketing to Gen Z* (YouTube)

### Core Insight
Gen Z doesn't buy products — they buy the culture around them. The best Gen Z brands function less like billboards and more like **a box of identity Legos**: they help people communicate something about who they are.

### The Three Rules (per Duolingo's CMO)
1. **Be in conversation, not preaching.** Participate with your audience. Respond, react, engage — don't just broadcast.
2. **Move at the speed of culture.** Jump into conversations already happening. Don't try to manufacture your own moment.
3. **Don't take yourself too seriously.** Self-awareness is currency. Winking at the fact that there's a real person behind the brand is something Gen Z genuinely respects.

### Why It Matters for Majestik Magik
Gen Z is projected to spend **$12 trillion by end of 2026** and **$22 trillion by 2036** — surpassing Boomers. They're already spending 16% more than Millennials did at the same age. They're also the most influential generation in household purchasing decisions, even when they're not the ones spending.

The old playbook — "here's the product, here's the price, here's the feature list" — doesn't work on them. They can smell a sales pitch from a mile away and they will scroll past it without blinking.

### How This Was Applied to the Site
Every section of the homepage was rewritten to reflect this framework:

| Before (billboard) | After (conversational) |
| :--- | :--- |
| "We Build the Infrastructure Your Business Runs On." | "Your site is slow. We fix that." |
| "Systems Online" | "Taking new projects" |
| "Start a Project" | "Let's build something" |
| "Full IP Transfer on Completion" | "You own it. Forever." |
| "Built for the work that actually matters." | "What we actually do." |
| "Discovery & Scope" | "We figure out exactly what you need" |
| "Demo & Verification" | "You kick the tires" |
| "Client Feedback" | "Don't take our word for it" |
| *(no contact heading)* | "Got a project? Tell us about it." |

### The Underlying Principle
The goal isn't a specific aesthetic or slang. It's **authenticity at the voice level** — writing and speaking the way a real person who knows what they're doing would actually talk. That's what earns permission to be part of someone's story.

---

## 6. Taste as a Competitive Moat (Product Strategy)

**Source:** YouTube — *Why Silicon Valley is obsessed with taste* (2025)

### The Core Argument
Building used to be the moat. It took a team of engineers and six months. Today it takes one person, a weekend, and a prompt. The code got cheap — and when something gets cheap, everybody starts doing it.

That triggers what Harvard professor Clayton Christensen called the **conservation of attractive profits**: when one part of a business becomes a commodity, the money doesn't disappear. It moves next door to whatever is still hard.

The code is the commodity now. The money moved to the choosing.

### What "Taste" Actually Means
Not aesthetics. Not making things pretty. **Taste is distribution.**

When every product on the shelf does the same thing, people pick the one that feels like somebody actually chose it. Then they show their friends. That's the whole mechanism.

Rick Rubin can't play an instrument or work a soundboard. What he gets paid for is the confidence he has in his taste. Same principle.

### Why OpenAI Paid $6.5B for Jony Ive's Company
They weren't buying engineers. They were buying the one person whose choices a billion people already trust. That's the asset.

### The Silicon Valley Precedent
In 1995, Steve Jobs said Microsoft's only problem was that they had no taste. At the time, Microsoft was worth ~10x Apple. Fifteen years later, Apple was worth more.

### Why This Matters for Majestik Magik
Thousands of AI apps launch every week. Most run on the same three or four models — same features, same look, same promise. The differentiator isn't capability. It's whether the thing feels like somebody actually chose it.

Every copy decision, layout choice, and service framing on this site is a taste decision. The goal isn't to look like a web agency. It's to feel like a person who knows exactly what they're doing made every call — and meant it.

### The Practical Takeaway
- What you choose to make is the difference (Paul Graham).
- What you choose to leave out matters as much as what you include.
- How it feels when someone opens it is a strategic asset, not a design afterthought.
