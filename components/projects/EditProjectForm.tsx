"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Props {
  project: {
    id: string;
    title: string;
    description: string;
    status: string;
  };
  onSuccess: () => void;
}

export default function EditProjectForm({
  project,
  onSuccess,
}: Props) {
  const [title, setTitle] =
    useState(project.title);

  const [description, setDescription] =
    useState(project.description);

  const [status, setStatus] =
    useState(project.status);

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("projects")
      .update({
        title,
        description,
        status,
      })
      .eq("id", project.id);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Project updated successfully");

    onSuccess();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-lg p-6 bg-white space-y-4"
    >
      <div>
        <label className="block mb-1">
          Title
        </label>

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full border rounded px-3 py-2"
          rows={4}
        />
      </div>

      <div>
        <label className="block mb-1">
          Status
        </label>

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full border rounded px-3 py-2"
        >
          <option value="Active">
            Active
          </option>

          <option value="Completed">
            Completed
          </option>

          <option value="On Hold">
            On Hold
          </option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        {loading
          ? "Saving..."
          : "Save Changes"}
      </button>
    </form>
  );
}