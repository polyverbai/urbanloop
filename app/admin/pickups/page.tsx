"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Home,
  Building2,
  Building,
  GraduationCap,
  Hospital,
  Handshake,
  ClipboardList,
  Clock3,
  CheckCircle2,
  XCircle,
  Download,
  Search,
  Users,
  UserCheck,
  UserX,
  BarChart3,
  Recycle,
  Truck,
  BriefcaseBusiness,
  Leaf,
  CalendarCheck,
  MapPinned,
  CalendarClock,
} from "lucide-react";

export default function RegistrationManagementPage() {
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

    const timer = setInterval(
      updateDateTime,
      1000
    );

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
        p-5
        text-white
        shadow-lg
      "
    >
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

        {/* Left Section */}

        <div>

          <h1 className="text-3xl font-bold">
    Pickup Management
</h1>

          <p className="mt-2 text-sm">
    Manage all UrbanLoop pickup operations
    from a single console.
</p>

        </div>

        {/* Right Section */}

        <div className="text-left lg:text-right">

          <p className="text-sm font-semibold">
            {currentDateTime}
          </p>

        </div>

      </div>
    </section>

{/* Registration Management Console */}

<section className="mt-10">

  <div
    className="
      grid
      gap-5
      lg:grid-cols-2
    "
  >

    {/* Registration Categories Container */}

    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
      "
    >

      <h2 className="text-lg font-bold text-slate-900">
    PICKUP CATEGORIES
</h2>

<p className="mt-1 text-xs text-slate-600">
    Manage UrbanLoop pickup categories.
</p>

      <div
  className="
    mt-4
    grid
    gap-3
    sm:grid-cols-2
  "
>

  <OperationalCard
    title="Scheduled Pickups"
    description="Manage scheduled pickups."
    icon={<CalendarCheck size={24} />}
    href="/admin/pickups/scheduled-pickups"
/>

  <OperationalCard
    title="Assigned Pickups"
    description="Manage assigned pickups."
    icon={<Handshake size={24} />}
    href="/admin/pickups/assigned-pickups"
/>

  <OperationalCard
    title="In Progress Pickups"
    description="Manage pickups in progress."
    icon={<Truck size={24} />}
    href="/admin/pickups/in-progress-pickups"
/>

  <OperationalCard
    title="Completed Pickups"
    description="Manage completed pickups."
    icon={<CheckCircle2 size={24} />}
    href="/admin/pickups/completed-pickups"
/>

  <OperationalCard
    title="Failed Pickups"
    description="Manage failed pickups."
    icon={<XCircle size={24} />}
    href="/admin/pickups/failed-pickups"
/>

  <OperationalCard
    title="All Pickups"
    description="Manage all pickup requests."
    icon={<ClipboardList size={24} />}
    href="/admin/pickups/all-pickups"
/>

</div>

    </div>


    {/* Registration Operations Container */}

    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
      "
    >

      <h2 className="text-lg font-bold text-slate-900">
    PICKUP OPERATIONS
</h2>

<p className="mt-1 text-xs text-slate-600">
    Manage UrbanLoop pickup operations.
</p>

      <div
  className="
    mt-4
    grid
    gap-3
    sm:grid-cols-2
  "
>

  <OperationalCard
    title="View All Pickups"
    description="View all pickup records."
    icon={<ClipboardList size={24} />}
    href="/admin/pickups/view-all"
/>

  <OperationalCard
    title="Assign Pickup Partners"
    description="Assign collection partners."
    icon={<Handshake size={24} />}
    href="/admin/pickups/assign-partners"
/>

  <OperationalCard
    title="Track Pickups"
    description="Track pickup status."
    icon={<MapPinned size={24} />}
    href="/admin/pickups/track-pickups"
/>

  <OperationalCard
    title="Reschedule Pickups"
    description="Manage pickup reschedules."
    icon={<CalendarClock size={24} />}
    href="/admin/pickups/reschedule"
/>

  <OperationalCard
    title="Search Pickups"
    description="Search pickup records."
    icon={<Search size={24} />}
    href="/admin/pickups/search"
/>

  <OperationalCard
    title="Pickup Analytics"
    description="View pickup analytics."
    icon={<BarChart3 size={24} />}
    href="/admin/pickups/analytics"
/>

</div>

    </div>

  </div>

</section>

{/* Quick Actions */}

<section
  className="
    mt-5
    rounded-3xl
    bg-gradient-to-r
    from-[#72B543]
    to-[#5FA032]
    p-4
    text-white
    shadow-lg
  "
>
  <div>


    {/* Quick Action Buttons */}

<div
  className="
    flex
    flex-col
    gap-3
    lg:flex-row
    lg:items-center
    lg:justify-between
  "
>

  {/* Left Section */}

  <div>

    <h2 className="text-lg font-bold">
      QUICK ACTIONS
    </h2>

    <p className="mt-1 text-xs">
      Access frequently used registration workflows.
    </p>

  </div>


  {/* Right Section */}

  <div
    className="
      flex
      flex-wrap
      gap-3
    "
  >

    <Link
      href="/admin/pickups/view-all"
      className="
        rounded-xl
        bg-[#A8D47A]
        px-4
        py-2
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition-all
        duration-300
        hover:bg-[#72B543]
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      Track Pickups
    </Link>


    <Link
      href="/admin/pickups/analytics"
      className="
        rounded-xl
        bg-[#A8D47A]
        px-4
        py-2
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition-all
        duration-300
        hover:bg-[#72B543]
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      Assign Pickup Partners
    </Link>

  </div>

</div>

</div>

</section>

  </main>
);

}

function OperationalCard({
  title,
description,
icon,
href,
}: {
  title: string;
description: string;
icon: React.ReactNode;
href: string;
}) {
return (
  <Link
    href={href}
    className="
      rounded-2xl
      border
      border-slate-200
      bg-white
      min-h-[105px]
      p-3
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#72B543]
      hover:shadow-lg
    "
  >

    {/* Icon */}

    <div className="text-[#72B543]">
      {icon}
    </div>


    {/* Title */}

    <h3
      className="
        mt-4
        text-sm
        font-bold
        text-slate-900
      "
    >
      {title}
    </h3>


    {/* Description */}

    <p
      className="
        mt-1
        text-xs
        text-slate-600
      "
    >
      {description}
    </p>

  </Link>
);
}