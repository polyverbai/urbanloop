import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ReportsDashboard from "@/components/reports/ReportsDashboard";

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Reports & Analytics
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 bg-white">
            <h2 className="font-semibold mb-2">
              Circularity Summary
            </h2>

            <p className="text-gray-600 text-sm">
              View overall circularity performance
              across projects.
            </p>
          </div>

          <div className="border rounded-lg p-6 bg-white">
            <h2 className="font-semibold mb-2">
              Stakeholder Analysis
            </h2>

            <p className="text-gray-600 text-sm">
              Analyze stakeholder engagement and
              participation.
            </p>
          </div>

          <div className="border rounded-lg p-6 bg-white">
            <h2 className="font-semibold mb-2">
              Opportunity Pipeline
            </h2>

            <p className="text-gray-600 text-sm">
              Review opportunities by priority and
              status.
            </p>
          </div>
        </div>

        <ReportsDashboard />
      </div>
    </DashboardLayout>
  );
}