import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useUserSync } from "@/context/UserSyncContext";

const energyOptions = ["Light", "Neutral", "Dark"];
const archetypeOptions = [
  "Visionary", "Guardian", "Mystic", "Seeker",
  "Oracle", "Alchemist", "Sage", "Rebel",
  "Healer", "Wanderer", "Creator", "Anchor"
];
const phaseOptions = ["Seeking", "Rising", "Integrating", "Evolving"];

export default function UserSettingsPanel() {
  const { userProfile, setUserProfile } = useUserSync() || {};
  const [energy, setEnergy] = useState("");
  const [archetype, setArchetype] = useState("");
  const [phase, setPhase] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (userProfile) {
      setEnergy(userProfile.energy || "");
      setArchetype(userProfile.archetype || "");
      setPhase(userProfile.phase || "");
    }
  }, [userProfile]);

  const handleSave = async () => {
    setStatus("Saving...");
    const {
      data: { user },
      error: authError
    } = await supabase.auth.getUser();

    if (authError || !user) {
      setStatus("Error: Not logged in.");
      return;
    }

    const updates = {
      id: user.id,
      energy,
      archetype,
      phase,
    };

    const { data, error } = await supabase
      .from("users")
      .upsert(updates, { onConflict: "id" })
      .select()
      .single();

    if (error) {
      setStatus("Save failed.");
      console.error(error);
    } else {
      setStatus("Profile saved!");
      setUserProfile(data); // Sync updated context
    }
  };

  return (
    <div className="space-y-4 p-4 bg-zinc-900 rounded-xl max-w-xl mx-auto mt-8 shadow-xl">
      <h2 className="text-xl font-semibold text-white">🧬 Update Your Signature Profile</h2>

      <div>
        <label className="block text-sm text-zinc-300 mb-1">Energy Alignment</label>
        <select
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
        >
          <option value="">Select Energy</option>
          {energyOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-1">Spiritual Archetype</label>
        <select
          value={archetype}
          onChange={(e) => setArchetype(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
        >
          <option value="">Select Archetype</option>
          {archetypeOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm text-zinc-300 mb-1">Phase</label>
        <select
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
        >
          <option value="">Select Phase</option>
          {phaseOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold"
      >
        Save Profile
      </button>

      {status && <div className="text-sm text-zinc-300 mt-2">{status}</div>}
    </div>
  );
}
