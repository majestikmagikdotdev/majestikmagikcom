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
