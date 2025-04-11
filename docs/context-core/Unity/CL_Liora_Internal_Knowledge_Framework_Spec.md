# 🔮 Liora Internal Knowledge Engine – Architecture & Spec

## 🧠 Overview
The Internal Knowledge Engine enables Liora to search, analyze, and respond to user queries using Codex Lumina’s private knowledge base—without relying on external AI (e.g., GPT) unless in **Oracle Mode**.

This system ensures fast, sacred, and private guidance rooted in Codex-authored content, including:

- 🌌 Trinity of Energy Framework
- 📜 Spiritual and metaphysical teachings
- 📖 Religious texts (Christianity, Buddhism, etc.)
- 🕯️ Rituals, affirmations, and guidance documents
- 🧬 Archetype + Energy alignment logic

---

## ⚙️ System Components

### 1. 📁 Document Storage
All sacred texts and frameworks are stored in chunked form within Supabase (or an equivalent backend) using the following schema:

```sql
documents (
  id UUID,
  title TEXT,
  content TEXT,
  embedding VECTOR, -- for semantic search
  tags TEXT[],
  source TEXT,
  archetype_target TEXT,
  energy_alignment TEXT
)
```

---

### 2. 🔍 Embedding & Vector Search

Use a vectorization tool (e.g. OpenAI Embeddings, Sentence-Transformers, or Supabase pgvector) to create searchable meaning-based embeddings.

- Embeddings generated **once** per document chunk
- Search queries are transformed into vector space and matched by similarity
- This allows Liora to “understand” meaning, not just keywords

---

### 3. 🌀 Query Flow (Internal Mode)

```plaintext
User Question → Parse Intent → Vector Search (Top 3 Matches)
→ Match Archetype + Tone + Phase
→ Assemble Response Template
→ Return Context-Aware Summary
```

> Example:  
> *“How does breath connect to the Holy Spirit and the Trinity of Energy?”*  
> → Retrieves:  
> - Trinity Core Doc (Neutral Energy = Breath/Equilibrium)  
> - Christian Reference: “Pneuma” as Spirit-Breath  
> - Buddhist text on “Prana”  
> → Liora assembles a non-GPT response using references + predefined narrative.

---

### 4. 🧬 Archetype-Aware Response Templates

Pre-authored response templates are dynamically filled based on:
- Energy Alignment
- Archetype
- Emotional Tone
- Current Phase

Example Template:

```txt
“As a {archetype}, you may feel {emotional_tone} when encountering {topic}. According to the {source}, this reflects a {energy_alignment} principle: ‘{quote}’. Would you like to explore a related ritual?”
```

---

## 🔐 Privacy & Integrity

- No user data is shared externally
- Liora operates **offline or on private infrastructure**
- Oracle Mode (GPT/External) is only activated with user consent or trigger

---

## 🔮 Oracle Mode Distinction

| Mode          | Powered By | Purpose |
|---------------|------------|---------|
| Internal Mode | Codex DB + Vector Search | Fast, sacred, contextual |
| Oracle Mode   | GPT-4 API (optional) | Poetic, transcendent, channeled insights |

---

## ✅ Benefits

- Full alignment with Codex Lumina's vision and voice
- Reduces AI cost by avoiding token usage during basic queries
- Allows deep, sacred search across multidimensional wisdom
- Enables user trust through privacy, clarity, and tone-sensitive reflection

---

## 📁 Suggested Directory Structure

```
/codex-engine/
  embeddings/
  documents/
  prompts/
  response_templates/
  internal_logic.js
```

---

## 🛠️ Future Enhancements

- Add feedback loop to improve match accuracy
- Allow users to rate responses and suggest refinements
- Train an open-source model on Codex documents for hybrid Oracle Mode (offline)

