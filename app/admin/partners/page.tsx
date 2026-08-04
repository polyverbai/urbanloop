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
    Partner Management
</h1>

          <p className="mt-2 text-sm">
    Manage all UrbanLoop partners
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
    PARTNER CATEGORIES
</h2>

<p className="mt-1 text-xs text-slate-600">
    Manage UrbanLoop partner categories.
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
    title="Collection Partners"
    description="Manage collection partners."
    icon={<Handshake size={24} />}
    href="/admin/partners/collection-partners"
/>

  <OperationalCard
    title="Recycling Partners"
    description="Manage recycling partners."
    icon={<Recycle size={24} />}
    href="/admin/partners/recycling-partners"
/>

  <OperationalCard
    title="Logistics Partners"
    description="Manage logistics partners."
    icon={<Truck size={24} />}
    href="/admin/partners/logistics-partners"
/>

  <OperationalCard
    title="Service Partners"
    description="Manage service partners."
    icon={<BriefcaseBusiness size={24} />}
    href="/admin/partners/service-partners"
/>

  <OperationalCard
    title="Sustainability Partners"
    description="Manage sustainability partners."
    icon={<Leaf size={24} />}
    href="/admin/partners/sustainability-partners"
/>

  <OperationalCard
    title="All Partners"
    description="Manage all registered partners."
    icon={<Users size={24} />}
    href="/admin/partners/all-partners"
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
    PARTNER OPERATIONS
</h2>

<p className="mt-1 text-xs text-slate-600">
    Manage UrbanLoop partner operations.
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
    title="View All Partners"
    description="View all partner records."
    icon={<Users size={24} />}
    href="/admin/partners/view-all"
/>

  <OperationalCard
  title="Active Partners"
  description="View active partners."
  icon={<UserCheck size={24} />}
  href="/admin/partners/active"
/>

  <OperationalCard
    title="Inactive Partners"
    description="View inactive partners."
    icon={<UserX size={24} />}
    href="/admin/partners/inactive"
/>

  <OperationalCard
    title="Export Partner Data"
    description="Export partner records."
    icon={<Download size={24} />}
    href="/admin/partners/export"
/>

  <OperationalCard
    title="Search Partners"
    description="Search partner records."
    icon={<Search size={24} />}
    href="/admin/partners/search"
/>

  <OperationalCard
    title="Partner Analytics"
    description="View partner analytics."
    icon={<BarChart3 size={24} />}
    href="/admin/partners/analytics"
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

    {/* Heading */}


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
      href="/admin/partners/view-all"
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
      View All Partners
    </Link>


    <Link
      href="/admin/partners/analytics"
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
      Partner Analytics
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