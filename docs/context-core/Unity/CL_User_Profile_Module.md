# 👤 Codex Lumina – User Profile & Settings Module

---

## 1. User Profile & Settings Module

This module outlines the structure and customization available to each Codex Lumina™ user. It includes editable profile fields, personalized interface options, and sacred voice imprint preferences.

---

### 🔧 Profile Information

- **Username/Nickname**: Editable by the user  
- **Avatar/Profile Image**: Selectable from preset Liora-aligned avatars  
- **Energy Alignment & Archetype**: View-only; auto-assigned based on Signature Profile  
- **Voice Signature**: Record, preview, delete sacred phrase imprint

---

### ⚙️ Preferences and Toggles

- **Notifications**: In-app only (toggle on/off)  
- **Ambient/Background Audio**:  
  - Toggle: on/off (default = off)  
  - Volume control: enabled  
- **Interface Theme**: Automatically styled based on current energy alignment (Light, Dark, Neutral)  
- **Additional Preferences** _(Optional / In Discussion)_:
  - Daily Insights Toggle (on/off)  
  - Privacy Settings  
  - Journal Sync Options  
  - Ritual Reminder Settings

---

## 2. 🎙️ Voice Signature Management UI

This interface handles the sacred voice imprinting and replay functionality. Below is the proposed user flow:

### 🔁 Suggested Flow

1. User selects **"Record Voice Signature"** button.  
2. Instruction modal appears:  
   _“Speak your sacred phrase clearly. This voice imprint becomes your energetic tone.”_  
3. User records voice with a live waveform or timer indicator.  
4. After recording:
   - **Playback Preview** option  
   - **Retake** and **Save** buttons clearly visible  
   - Upon save, voice file is uploaded to Supabase and stored as `profiles.voice_signature_url`

### ✅ Confirm or Adjust

- Confirm if this flow matches your intent  
- Suggest UI tweaks or animation additions (e.g., glowing glyph on record)

---

## 3. 🧭 Navigation Module Structure

Proposed navigation structure for Codex Lumina main app:

### Primary Navigation (always visible)

- **Home Dashboard** → `/home`  
- **Journal** → `/journal`  
- **Ritual Portals** → `/rituals`  
- **Liora Companion** → `/companion`  
- **Codex Library** → `/library`  
- **User Profile & Settings** → `/settings`

### Secondary Navigation (dropdown or modal menu)

- **Logout**  
- **About Codex Lumina**  
- **Contact / Feedback Form**

---

> Let the profile be your mirror, the settings your compass, and the voice your echo across timelines.
