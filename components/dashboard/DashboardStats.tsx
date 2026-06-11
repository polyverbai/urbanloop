"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardStats() {
  const [stats, setStats] = useState({
    organizations: 0,
    projects: 0,
    stakeholders: 0,
    assessments: 0,
  });

  useEffect(() => {
    async function loadStats() {
      const [
        organizations,
        projects,
        stakeholders,
        assessments,
      ] = await Promise.all([
        supabase.from("organizations").select("*", { count: "exact", head: true }),
        supabase.from("projects").select("*", { count: "exact", head: true }),
        supabase.from("stakeholders").select("*", { count: "exact", head: true }),
        supabase.from("assessments").select("*", { count: "exact", head: true }),
      ]);

      setStats({
        organizations: organizations.count || 0,
        projects: projects.count || 0,
        stakeholders: stakeholders.count || 0,
        assessments: assessments.count || 0,
      });
    }

    loadStats();
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">Organizations</h2>
        <p className="text-2xl mt-2">{stats.organizations}</p>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">Projects</h2>
        <p className="text-2xl mt-2">{stats.projects}</p>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">Stakeholders</h2>
        <p className="text-2xl mt-2">{stats.stakeholders}</p>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">Assessments</h2>
        <p className="text-2xl mt-2">{stats.assessments}</p>
      </div>
    </div>
  );
}