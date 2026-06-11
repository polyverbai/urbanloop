"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AddAssessmentFormProps {
  projectId: string;
  onSuccess: () => void;
}

export default function AddAssessmentForm({
  projectId,
  onSuccess,
}: AddAssessmentFormProps) {
  const [assessmentType, setAssessmentType] =
    useState("");

  const [score, setScore] =
    useState("3");

  const [notes, setNotes] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const { error } = await supabase
      .from("assessments")
      .insert([
        {
          project_id: projectId,
          assessment_type: assessmentType,
          score: Number(score),
          notes,
        },
      ]);

    if (error) {
      alert(
        `Failed to save assessment: ${error.message}`
      );
      return;
    }

    setAssessmentType("");
    setScore("3");
    setNotes("");

    onSuccess();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4">
        Add Assessment
      </h3>

      <div className="space-y-4">
        <select
          value={assessmentType}
          onChange={(e) =>
            setAssessmentType(e.target.value)
          }
          className="w-full border rounded-lg p-3"
          required
        >
          <option value="">
            Select Assessment Type
          </option>

          <option value="Resource Efficiency">
            Resource Efficiency
          </option>

          <option value="Waste Management">
            Waste Management
          </option>

          <option value="Reuse & Recovery">
            Reuse & Recovery
          </option>

          <option value="Circular Procurement">
            Circular Procurement
          </option>

          <option value="Stakeholder Engagement">
            Stakeholder Engagement
          </option>
        </select>

        <select
          value={score}
          onChange={(e) =>
            setScore(e.target.value)
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="1">1 - Initial</option>
          <option value="2">2 - Basic</option>
          <option value="3">3 - Developing</option>
          <option value="4">4 - Advanced</option>
          <option value="5">5 - Leading</option>
        </select>

        <textarea
          placeholder="Assessment Notes"
          value={notes}
          onChange={(e) =>
            setNotes(e.target.value)
          }
          className="w-full border rounded-lg p-3"
          rows={4}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Save Assessment
        </button>
      </div>
    </form>
  );
}