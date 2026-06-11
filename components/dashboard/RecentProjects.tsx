"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
}

export default function RecentProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        return;
      }

      setProjects(data || []);
    }

    loadProjects();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Recent Projects
      </h2>

      <div className="bg-white rounded-lg border overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Project</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-t"
              >
                <td className="p-4">
                  <div className="font-medium">
                    {project.title}
                  </div>

                  <div className="text-sm text-gray-500">
                    {project.description}
                  </div>
                </td>

                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}