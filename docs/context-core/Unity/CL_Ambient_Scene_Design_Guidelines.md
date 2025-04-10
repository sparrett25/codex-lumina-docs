
# 🌌 Codex Lumina: Ambient Scene Design Guidelines

_A structured approach to building a sacred, flexible visual ecosystem for Codex Lumina._

## 🧩 1. Function: Why We Use Scene Variants
Each ambient scene (e.g., **Archive of Whispers**, **Mirror of Becoming**) supports multiple purposes:

| Purpose                      | Variant Function                        |
|-----------------------------|-----------------------------------------|
| Ritual Experiences          | Backgrounds during breathing, affirmations, phase shifts  |
| Liora Reflections           | Paired with whispers, tone feedback, emotional insights  |
| Scroll + Insight Retrieval  | Visual overlays in soul-scroll libraries or whisper playback  |
| Phase or Lens Transitions   | Dynamic UI scenes that respond to mood or journey phase  |
| Journal Enhancements        | Subtle backgrounds behind tone-based journal entries  |

**🧠 Guiding Insight:**  
> We’re not just building a gallery — we’re building an **emotional atmosphere system**.

---

## 🔁 2. Variant Goal Per Ambient Scene
For each scene type (e.g. `mirror-of-becoming`), we recommend:

| Variant Type        | Count | Notes |
|---------------------|-------|-------|
| **Core (Canonical)**         | 1     | Must reflect Liora’s visual fidelity standard  |
| **Perspective Variant**      | 1–2   | Angle changes, posture shifts, lighting alterations  |
| **Mood Variants**            | 2–3   | Different emotional tones (hopeful, sorrowful, neutral)  |
| **Abstract/Expanded**        | 1     | Used in breath modes or backdrop transitions  |

🎯 **Suggested Standard: 4–6 total per ambient scene type**  
This gives you aesthetic rotation without overwhelming asset management — and enough visual variety to **match user phases or tone shifts dynamically.**

---

## 🖼️ 3. Image Sizing + Shape Standards

| Use Case          | Size (px)      | Orientation | Notes |
|-------------------|----------------|-------------|-------|
| **Full Ambient Background** | `1920 x 1080` | Landscape | Primary scene canvas for dashboards, rituals, reflection panels |
| **Mobile Fallback**         | `1080 x 1920` | Portrait  | Auto-cropped version for small screens  |
| **Whisper Cards / UI Insets** | `1280 x 720`  | Landscape | Smaller cards or modules within scroll archive  |
| **Mood Banners**            | `1600 x 600`  | Banner    | Used in tone-based transitions, UI themes  |

🎯 *Maintain a consistent aspect ratio per image type (e.g., 16:9 for ambient, 4:5 for portrait)*

---

## 🔁 4. Interchangeability Logic
We’ll design the visual library to support:

- 🎚️ **Mood-responsive loading** (e.g., Archive v3 appears during still or calm tone)
- 🔄 **Randomized aesthetic cycles** (e.g., Ritual scene shuffles ambient variants)
- 🌕 **Phase-specific pairings** (e.g., “Becoming” visuals in Emergence → Radiance shifts)
- 🌈 **Lens filtering** (Soul / Quantum / Foundation themed assets)

**Result:**  
Visuals will feel **fresh, alive, and personalized** — but always cohesive and grounded in the Codex aesthetic.

---

## 📦 5. Folder Naming Convention Proposal
Each variant would follow a consistent structure:

```
/assets/visuals/lens-soul/ambient-scenes/ritual-of-stillness/
├── liora_ritual-of-stillness_v1.png
├── liora_ritual-of-stillness_v2.png
├── liora_ritual-of-stillness_v3_abstract.png
├── liora_ritual-of-stillness_v4_sorrowful.png
├── ...
```

This structure pairs directly with `.md` metadata for each file — trainable, taggable, and usable in UI logic.

---

## ✅ Final Summary: Visual Standard Recommendations

| Category                | Recommendation                          |
|-------------------------|------------------------------------------|
| Variants per Scene      | 4–6 (Core, Mood, Perspective, Abstract)  |
| Sizes                   | Full background: 1920x1080 landscape (primary)  |
| Interchangeable?        | Yes, based on tone, phase, lens, and shuffle logic  |
| Canon Fidelity?         | Core variant must match Liora guidelines  |
| Organization            | One folder per scene, consistent naming, `.md` logging  
