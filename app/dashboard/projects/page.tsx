"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import AddProjectForm from "@/components/projects/AddProjectForm";

const router = useRouter();

useEffect(() => {
  async function checkAuth() {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      router.push("/login");
    }
  }

  checkAuth();
}, [router]);

interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
}

interface Stakeholder {
  id: string;
  name: string;
  category: string;
  email: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showProjectForm, setShowProjectForm] =
  useState(false);

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
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <button
  onClick={() =>
    setShowProjectForm(
      !showProjectForm
    )
  }
  className="px-4 py-2 bg-green-600 text-white rounded-lg"
>
  {showProjectForm
    ? "Cancel"
    : "+ New Project"}
</button>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        {showProjectForm && (
  <div className="mb-6">
    <AddProjectForm
      onSuccess={() =>
        window.location.reload()
      }
    />
  </div>
)}
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4">Project</th>
              <th className="text-left p-4">Description</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-t"
              >
                <td className="p-4 font-medium">
  <Link
    href={`/dashboard/projects/${project.id}`}
    className="text-green-700 hover:underline"
  >
    {project.title}
  </Link>
</td>

                <td className="p-4">
                  {project.description}
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
    </DashboardLayout>
  );
}