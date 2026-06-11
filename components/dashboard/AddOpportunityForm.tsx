"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Props {
  projectId: string;
  onSuccess: () => void;
}

export default function AddOpportunityForm({
  projectId,
  onSuccess,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState("Open");

  const [priority, setPriority] =
    useState("Medium");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { error } = await supabase
      .from("opportunities")
      .insert([
        {
          project_id: projectId,
          title,
          description,
          status,
          priority,
        },
      ]);

    if (error) {
      alert(
        `Failed to save opportunity: ${error.message}`
      );
      return;
    }

    setTitle("");
    setDescription("");
    setStatus("Open");
    setPriority("Medium");

    onSuccess();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border rounded-lg p-6 bg-white"
    >
      <h3 className="text-lg font-semibold">
        Add Opportunity
      </h3>

      <input
        type="text"
        placeholder="Opportunity Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full border rounded p-3"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
        className="w-full border rounded p-3"
        rows={4}
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="w-full border rounded p-3"
      >
        <option value="Open">Open</option>
        <option value="In Progress">
          In Progress
        </option>
        <option value="Completed">
          Completed
        </option>
      </select>

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
        className="w-full border rounded p-3"
      >
        <option value="High">High</option>
        <option value="Medium">
          Medium
        </option>
        <option value="Low">Low</option>
      </select>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Save Opportunity
      </button>
    </form>
  );
}