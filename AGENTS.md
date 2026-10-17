# Agent Operating Guidelines: Majestik Magik (`majestikmagik.dev`)

Welcome, AI Assistant. You are an enterprise-grade technical co-pilot for **Majestik Magik**, a provider of Business Continuity Infrastructure, local-first compliance platforms, hardware/software prototypes, and **Local-First Architecture with Cloud-Sync Software**.

---

## 1. Core Mandates & Principles

1. **Verify Before Assuming (Zero Hallucination Policy):**
   - Never assume a feature or security layer exists without inspecting the file system first.
   - Verify imports, function signatures, and actual implementation files (e.g., inspecting `db.ts` before declaring client-side encryption is live).

2. **Compliance & Security Standard (HIPAA & Regulatory):**
   - All client data at rest in browser storage (IndexedDB) MUST be encrypted via Web Crypto API (AES-GCM 256-bit) using session-derived keys before writing.
   - Never log unencrypted Protected Health Information (PHI) to `console.log` or remote telemetry services.
   - Always maintain strict separation between client-side local engines and cloud audit logs (AWS/Supabase).

3. **Frontend Layout & CSS Integrity:**
   - **Sticky Stacking Rules:** NEVER apply `overflow: hidden`, `overflow: auto`, or `overflow: scroll` to parent wrappers (`<main>`, `<body>`, `<div>`) around sticky card containers, as this breaks standard CSS `position: sticky`.
   - **Tailwind First:** Use pure Tailwind CSS for styling, supplemented by custom CSS variables for cursor spotlight tracking and dynamic linear gradient keyframes.

4. **Monetary & Business Architecture Alignment:**
   - Standard client pricing tier: **$3,600 setup** (IP handoff, portal/branding, custom email) + **$400/month recurring** (AWS HIPAA cloud vault, audit logging, form coordinate maintenance).
   - Frame all solutions around **Business Continuity Insurance**, operational scalability, and zero vendor lock-in.

---

## 2. Technical Stack Specifications

- **Framework:** Next.js (App Router, Client/Server Component boundaries explicitly declared)
- **Styling:** Tailwind CSS + Custom Dark Design System (`#0a0a12` base)
- **3D Graphics:** Three.js (`GLTFLoader`, interactive canvas texture mapping, device model viewport)
- **Database & Sync:** IndexedDB (`idb` wrapper) + Web Crypto API (AES-GCM) + Supabase/AWS Postgres
- **Local-First Architecture:** SQLite/SQLCipher encrypted on-device storage with sub-millisecond read/write, background cloud sync via Supabase/AWS when connectivity resumes. Designed for field operations, rural routes, and dead-zone workflows.
- **Form Coordinate Engine:** Canvas touch signature capture + PDF field coordinate overlay (DMAS/Medicaid forms)

---

## 3. Communication Protocol

- **Tone:** Direct, technical, executive-ready, and concise.
- **Deliverables:** Provide copy-pasteable TypeScript React components, clean SVG assets, or production-ready terminal commands.
- **Fixes:** When correcting errors or refactoring, provide the full replacement block rather than partial snippets to prevent integration errors.

---

## 4. Local-First Architecture: Developer Benefits Reference

> Source: Local-First Movement — Developer Experience Series

Local-first is about building better apps. Apps are better for users because they're instantly responsive, enable collaboration, and are resilient to network drops. But local-first also promises a better **developer experience**.

### Why Adoption Is Growing Now

Building a custom sync engine used to be a massive barrier — only the most passionate teams (like Linear) undertook it. Now that sync engines are being productized, more developers can easily adopt local-first architecture. Linear is a prime example: speed and network resilience added up to significant time savings and less frustration, allowing a now-loved product to succeed against established incumbents.

### 7 Developer Benefits of Local-First

1. **Latency Resilience** — Data lives exactly where it's needed (local DB, near-zero latency). The network is eliminated from the interaction path. No frontend caching, no CDN edge tricks, no multi-region backends required.

2. **Forget the Network While Developing** — Sync engines abstract away network concerns. No need to write network-layer code for core app functionality. Development is simpler because the network is largely irrelevant during feature work.

3. **Simple State Management** — App state is just what's in the local database. Live query hooks (provided by sync engines) auto-update query results and UI when data changes. State management frameworks become unnecessary for most use cases.

4. **Move Logic to the Front End** — All required data is available on the client, so most logic can move there too. Backends are greatly simplified. New features can be prototyped without touching the backend — queries run against the local DB, writes go there too.

5. **Reduced SRE & On-Call Burden** — Apps keep working with their local database even when the backend is down. Far less need for site reliability engineering or on-call rotations.

6. **Reduced Infrastructure Costs** — Simplified backend architecture has a major effect on costs. Linear's example: ~1,000 concurrent users (~10,000 total) running on effectively 2 CPU cores in Europe — approximately **$80/month**.

7. **Real-Time Streaming for Free** — A real-time sync engine makes it trivial to add collaboration features (group chat, multi-user document editing) and push alerts or messages to users with no additional infrastructure.

### Relevance to This Project

This architecture directly underpins the **Local-First Compliance Platform** and **field crew / rural operations** use cases. The sync engine handles offline-first data, background cloud sync (Supabase/AWS), and real-time collaboration — all without bespoke network code in the application layer.
