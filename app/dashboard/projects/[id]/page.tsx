"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AddStakeholderForm from "@/components/dashboard/AddStakeholderForm";
import AddOpportunityForm from "@/components/dashboard/AddOpportunityForm";
import AddAssessmentForm from "../../../../components/assessments/AddAssessmentForm";

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

interface Opportunity {
  id: string;
  title: string;
  description?: string;
  status?: string;
  priority?: string;
}

interface Assessment {
  id: string;
  assessment_type: string;
  score: number;
  notes: string | null;
}

type TabType =
  | "overview"
  | "stakeholders"
  | "opportunities"
  | "assessments"
  | "documents";

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [project, setProject] = useState<Project | null>(null);
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [assessments, setAssessments] =
  useState<Assessment[]>([]);

const [showAssessmentForm, setShowAssessmentForm] =
  useState(false);

  const [showForm, setShowForm] = useState(false);
  const [showOpportunityForm, setShowOpportunityForm] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState<TabType>("overview");

  async function deleteStakeholder(
    stakeholderId: string
  ) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this stakeholder?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("stakeholders")
      .delete()
      .eq("id", stakeholderId);

    if (error) {
      alert(`Delete failed: ${error.message}`);
      return;
    }

    window.location.reload();
  }

async function deleteOpportunity(
  opportunityId: string
) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this opportunity?"
  );

  if (!confirmed) return;

  const { error } = await supabase
    .from("opportunities")
    .delete()
    .eq("id", opportunityId);

  if (error) {
    alert(`Delete failed: ${error.message}`);
    return;
  }

  window.location.reload();
}

async function deleteAssessment(
  assessmentId: string
) {
  const confirmed = window.confirm(
    "Are you sure you want to delete this assessment?"
  );

  if (!confirmed) return;

  const { error } = await supabase
    .from("assessments")
    .delete()
    .eq("id", assessmentId);

  if (error) {
    alert(`Delete failed: ${error.message}`);
    return;
  }

  window.location.reload();
}

  useEffect(() => {
    async function loadProject() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setProject(data);

      const {
        data: stakeholderData,
        error: stakeholderError,
      } = await supabase
        .from("stakeholders")
        .select("*")
        .eq("project_id", params.id);

      if (stakeholderError) {
        console.error(stakeholderError);
      } else {
        setStakeholders(stakeholderData || []);
      }

      const {
        data: opportunityData,
        error: opportunityError,
      } = await supabase
        .from("opportunities")
        .select("*")
        .eq("project_id", params.id);

      if (opportunityError) {
        console.error(opportunityError);
      } else {
        setOpportunities(opportunityData || []);
      }

      const {
  data: assessmentData,
  error: assessmentError,
} = await supabase
  .from("assessments")
  .select("*")
  .eq("project_id", params.id);

if (assessmentError) {
  console.error(assessmentError);
} else {
  setAssessments(assessmentData || []);
}

    }
    

    loadProject();
  }, [params.id]);

  
  if (!project) {
    return (
      <DashboardLayout>
        <p>Loading...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {project.title}
        </h1>

        <p className="text-gray-600 mt-2">
          {project.description}
        </p>

        <div className="mt-4">
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
            {project.status}
          </span>
        </div>
      </div>

      <div className="flex gap-2 mb-8 border-b pb-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded ${
            activeTab === "overview"
              ? "bg-green-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Overview
        </button>

        <button
          onClick={() =>
            setActiveTab("stakeholders")
          }
          className={`px-4 py-2 rounded ${
            activeTab === "stakeholders"
              ? "bg-green-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Stakeholders
        </button>

        <button
          onClick={() =>
            setActiveTab("opportunities")
          }
          className={`px-4 py-2 rounded ${
            activeTab === "opportunities"
              ? "bg-green-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Opportunities
        </button>

        <button
          onClick={() =>
            setActiveTab("assessments")
          }
          className={`px-4 py-2 rounded ${
            activeTab === "assessments"
              ? "bg-green-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Assessments
        </button>

        <button
          onClick={() =>
            setActiveTab("documents")
          }
          className={`px-4 py-2 rounded ${
            activeTab === "documents"
              ? "bg-green-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Documents
        </button>
      </div>

      {activeTab === "overview" && (
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="font-semibold">
              Stakeholders
            </h3>
            <p className="text-3xl mt-2">
              {stakeholders.length}
            </p>
          </div>

          <div className="border rounded-lg p-6 bg-white">
            <h3 className="font-semibold">
              Opportunities
            </h3>
            <p className="text-3xl mt-2">
              {opportunities.length}
            </p>
          </div>

          <div className="border rounded-lg p-6 bg-white">
            <h3 className="font-semibold">
              Assessments
            </h3>
            <p className="text-3xl mt-2">
  {assessments.length}
</p>
          </div>

          <div className="border rounded-lg p-6 bg-white">
            <h3 className="font-semibold">
              Documents
            </h3>
            <p className="text-3xl mt-2">0</p>
          </div>
        </div>
      )}

      {activeTab === "stakeholders" && (
  <div>
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-semibold">
        Project Stakeholders
      </h2>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        {showForm
          ? "Cancel"
          : "+ Add Stakeholder"}
      </button>
    </div>

    {showForm && (
      <div className="mb-6">
        <AddStakeholderForm
          projectId={project.id}
          onSuccess={() =>
            window.location.reload()
          }
        />
      </div>
    )}

    <div className="bg-white rounded-lg border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left p-4">
              Name
            </th>

            <th className="text-left p-4">
              Role
            </th>

            <th className="text-left p-4">
              Email
            </th>

            <th className="text-left p-4">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {stakeholders.map(
            (stakeholder) => (
              <tr
                key={stakeholder.id}
                className="border-t"
              >
                <td className="p-4">
                  {stakeholder.name}
                </td>

                <td className="p-4">
                  {stakeholder.category}
                </td>

                <td className="p-4">
                  {stakeholder.email}
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      deleteStakeholder(
                        stakeholder.id
                      )
                    }
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  </div>
)}

      {activeTab === "opportunities" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">
              Project Opportunities
            </h2>

            <button
              onClick={() =>
                setShowOpportunityForm(
                  !showOpportunityForm
                )
              }
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              {showOpportunityForm
                ? "Cancel"
                : "+ Add Opportunity"}
            </button>
          </div>

          {showOpportunityForm && (
            <div className="mb-6">
              <AddOpportunityForm
                projectId={project.id}
                onSuccess={() =>
                  window.location.reload()
                }
              />
            </div>
          )}

          <div className="bg-white rounded-lg border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
  <tr>
    <th className="text-left p-4">
      Title
    </th>

    <th className="text-left p-4">
      Status
    </th>

    <th className="text-left p-4">
      Priority
    </th>

    <th className="text-left p-4">
      Actions
    </th>
  </tr>
</thead>

<tbody>
  {opportunities.map(
    (opportunity) => (
      <tr
        key={opportunity.id}
        className="border-t"
      >
        <td className="p-4">
          {opportunity.title}
        </td>

        <td className="p-4">
          {opportunity.status}
        </td>

        <td className="p-4">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              opportunity.priority === "High"
                ? "bg-red-100 text-red-700"
                : opportunity.priority === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {opportunity.priority}
          </span>
        </td>

        <td className="p-4">
          <button
            onClick={() =>
              deleteOpportunity(
                opportunity.id
              )
            }
            className="px-3 py-1 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </td>
      </tr>
    )
  )}
</tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "assessments" && (
  <div>
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-semibold">
        Circularity Assessments
      </h2>

      <button
        onClick={() =>
          setShowAssessmentForm(
            !showAssessmentForm
          )
        }
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        {showAssessmentForm
          ? "Cancel"
          : "+ Add Assessment"}
      </button>
    </div>

    {showAssessmentForm && (
      <div className="mb-6">
        <AddAssessmentForm
          projectId={project.id}
          onSuccess={() =>
            window.location.reload()
          }
        />
      </div>
    )}

    <div className="bg-white rounded-lg border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
  <th className="text-left p-4">
    Assessment Type
  </th>

  <th className="text-left p-4">
    Score
  </th>

  <th className="text-left p-4">
    Notes
  </th>

  <th className="text-left p-4">
    Actions
  </th>
</tr>
        </thead>

        <tbody>
          {assessments.map(
            (assessment) => (
              <tr
  key={assessment.id}
  className="border-t"
>
  <td className="p-4">
    {assessment.assessment_type}
  </td>

  <td className="p-4">
    {assessment.score}/5
  </td>

  <td className="p-4">
    {assessment.notes}
  </td>

  <td className="p-4">
    <button
      onClick={() =>
        deleteAssessment(
          assessment.id
        )
      }
      className="px-3 py-1 bg-red-600 text-white rounded"
    >
      Delete
    </button>
  </td>
</tr>
            )
          )}
        </tbody>
      </table>
    </div>
  </div>
)}

      {activeTab === "documents" && (
        <div className="bg-white border rounded-lg p-6">
          Documents module coming next
        </div>
      )}
    </DashboardLayout>
  );
}