"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ClipboardList,
  Users,
  Handshake,
  Truck,
  Recycle,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboardPage() {

const [currentDateTime, setCurrentDateTime] =
  useState("");

useEffect(() => {
  const updateDateTime = () => {
  const now = new Date();

  const day = now.toLocaleDateString("en-IN", {
    weekday: "long",
  });

  const date = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  setCurrentDateTime(
    `${day} | ${date} | ${time}`
  );
};

  updateDateTime();

  const timer = setInterval(updateDateTime, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">

      {/* Hero Section */}

<section
  className="
    rounded-3xl
    bg-gradient-to-r
    from-[#72B543]
    to-[#5FA032]
    p-6
    text-white
    shadow-lg
  "
>
  <div className="flex flex-col gap-5">

  {/* Top Row */}

  <div
 className="
 flex
 flex-col
 gap-4
 lg:flex-row
 lg:items-start
 lg:justify-between
 "
>

    {/* Left Side */}

    <div>
      <h1
className="
text-3xl
font-bold
tracking-wide
lg:text-5xl
"
>
        UrbanLoop
      </h1>

      <p className="mt-1 text-xs lg:text-sm">
        Circular Economy Operating Platform
      </p>
    </div>

    {/* Right Side */}

    <div
  className="
    text-left
    lg:text-right
  "
>

      <h2 className="text-base lg:text-xl font-semibold">
        Admin & Operations Platform
      </h2>

      <p className="mt-1 text-xs lg:text-sm font-semibold">
        {currentDateTime}
      </p>

    </div>

  </div>

  {/* Bottom Row */}

  <div>
    <p className="text-base font-medium">
      Welcome Back, Radhakrishnan.
    </p>
  </div>

</div>

</section>

      {/* Command Center */}

      <section className="mt-10">

  <h2 className="text-2xl font-bold text-slate-900">
    COMMAND CENTER
  </h2>

  <div className="h-8"></div>

  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          <DashboardCard
            title="Registrations"
            metric="0 Pending"
            href="/admin/registrations"
            icon={<ClipboardList size={32} />}
          />

          <DashboardCard
            title="Customers"
            metric="0 Registered"
            href="/admin/customers"
            icon={<Users size={32} />}
          />

          <DashboardCard
            title="Partners"
            metric="0 Active"
            href="/admin/partners"
            icon={<Handshake size={32} />}
          />

          <DashboardCard
            title="Pickups"
            metric="0 Pending"
            href="/admin/pickups"
            icon={<Truck size={32} />}
          />

          <DashboardCard
            title="Materials"
            metric="0 KG"
            href="/admin/materials"
            icon={<Recycle size={32} />}
          />

          <DashboardCard
            title="Reports & ESG"
            metric="Available"
            href="/admin/reports"
            icon={<BarChart3 size={32} />}
          />

          <DashboardCard
            title="Settings"
            metric="Platform Settings"
            href="/admin/settings"
            icon={<Settings size={32} />}
          />

        </div>

      </section>

    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Dashboard Card                                                             */
/* -------------------------------------------------------------------------- */

function DashboardCard({
  title,
  metric,
  href,
  icon,
}: {
  title: string;
  metric: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#72B543]
        hover:shadow-xl
      "
    >
      <div className="text-[#72B543]">
        {icon}
      </div>

      <h3 className="mt-3 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm font-medium text-slate-600">
        {metric}
      </p>

    </Link>
  );
}