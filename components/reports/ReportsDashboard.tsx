"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const [mounted, setMounted] =
  useState(false);

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ReportsDashboard() {
  const [data, setData] = useState([
    { name: "Projects", value: 0 },
    { name: "Stakeholders", value: 0 },
    { name: "Opportunities", value: 0 },
    { name: "Assessments", value: 0 },
    { name: "Documents", value: 0 },
  ]);

const [mounted, setMounted] =
  useState(false);

  useEffect(() => {
    async function loadData() {
      const [
        projects,
        stakeholders,
        opportunities,
        assessments,
        documents,
      ] = await Promise.all([
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

      setData([
        {
          name: "Projects",
          value: projects.count || 0,
        },
        {
          name: "Stakeholders",
          value:
            stakeholders.count || 0,
        },
        {
          name: "Opportunities",
          value:
            opportunities.count || 0,
        },
        {
          name: "Assessments",
          value:
            assessments.count || 0,
        },
        {
          name: "Documents",
          value:
            documents.count || 0,
        },
      ]);
    }

    loadData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg border">
      <h2 className="text-xl font-semibold mb-4">
        Platform Overview
      </h2>

      <div className="h-80">
  {mounted && (
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <BarChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
        />

        <XAxis dataKey="name" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="value" />
      </BarChart>
    </ResponsiveContainer>
  )}
</div>
    </div>
  );
}