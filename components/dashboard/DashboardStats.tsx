"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    organizations: 0,
    projects: 0,
    stakeholders: 0,
    opportunities: 0,
    assessments: 0,
    documents: 0,
    averageScore: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const [
        organizations,
        projects,
        stakeholders,
        opportunities,
        assessments,
        documents,
      ] = await Promise.all([
        supabase
          .from("organizations")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("projects")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("stakeholders")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("opportunities")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("assessments")
          .select("*", {
            count: "exact",
            head: true,
          }),

        supabase
          .from("documents")
          .select("*", {
            count: "exact",
            head: true,
          }),
      ]);

      const { data: assessmentScores } =
        await supabase
          .from("assessments")
          .select("score");

      const averageScore =
        assessmentScores &&
        assessmentScores.length > 0
          ? assessmentScores.reduce(
              (sum, item) =>
                sum + item.score,
              0
            ) /
            assessmentScores.length
          : 0;

      setStats({
        organizations:
          organizations.count || 0,

        projects:
          projects.count || 0,

        stakeholders:
          stakeholders.count || 0,

        opportunities:
          opportunities.count || 0,

        assessments:
          assessments.count || 0,

        documents:
          documents.count || 0,

        averageScore: Number(
          averageScore.toFixed(1)
        ),
      });
    }

    loadStats();
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">
          Organizations
        </h2>
        <p className="text-2xl mt-2">
          {stats.organizations}
        </p>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">
          Projects
        </h2>
        <p className="text-2xl mt-2">
          {stats.projects}
        </p>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">
          Stakeholders
        </h2>
        <p className="text-2xl mt-2">
          {stats.stakeholders}
        </p>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">
          Assessments
        </h2>
        <p className="text-2xl mt-2">
          {stats.assessments}
        </p>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">
          Opportunities
        </h2>
        <p className="text-2xl mt-2">
          {stats.opportunities}
        </p>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">
          Documents
        </h2>
        <p className="text-2xl mt-2">
          {stats.documents}
        </p>
      </div>

      <div className="border rounded-lg p-6 bg-green-50">
        <h2 className="font-semibold">
          Avg Score
        </h2>
        <p className="text-2xl mt-2 text-green-700">
          {stats.averageScore}/5
        </p>
      </div>
    </div>
  );
}