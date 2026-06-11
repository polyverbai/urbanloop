"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Props {
  projectId: string;
  onSuccess: () => void;
}

export default function AddStakeholderForm({
  projectId,
  onSuccess,
}: Props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { error } = await supabase
      .from("stakeholders")
      .insert([
        {
          project_id: projectId,
          name,
          category,
          email,
        },
      ]);

    if (error) {
  console.error("Supabase Error:", error);
  alert(
    `Failed to save stakeholder: ${error.message}`
  );
  return;
}

    setName("");
    setCategory("");
    setEmail("");

    onSuccess();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border rounded-lg p-6 bg-white"
    >
      <h3 className="text-lg font-semibold">
        Add Stakeholder
      </h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        className="w-full border rounded p-3"
        required
      />

      <input
        type="text"
        placeholder="Role"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="w-full border rounded p-3"
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="w-full border rounded p-3"
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Save Stakeholder
      </button>
    </form>
  );
}