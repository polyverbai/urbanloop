"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AddProjectFormProps {
  onSuccess: () => void;
}

export default function AddProjectForm({
  onSuccess,
}: AddProjectFormProps) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState("Active");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { error } = await supabase
      .from("projects")
      .insert([
        {
          title,
          description,
          status,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    setTitle("");
    setDescription("");
    setStatus("Active");

    onSuccess();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Create Project
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border rounded-lg p-3"
          required
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full border rounded-lg p-3"
          rows={4}
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="Active">
            Active
          </option>

          <option value="Planning">
            Planning
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Create Project
        </button>
      </div>
    </form>
  );
}