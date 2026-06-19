"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentProjects from "@/components/dashboard/RecentProjects";

export default function DashboardPage() {
  
  return (
    <DashboardLayout>
      <DashboardStats />
      <RecentProjects />
    </DashboardLayout>
  );
}