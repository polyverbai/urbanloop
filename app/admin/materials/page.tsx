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
  Package,
  Boxes,
  Cog,
  Warehouse,
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
    Materials Management
</h1>

          <p className="mt-2 text-sm">
    Manage all UrbanLoop material operations
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
    MATERIAL CATEGORIES
</h2>

<p className="mt-1 text-xs text-slate-600">
    Manage UrbanLoop material categories.
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
    title="Collected Materials"
    description="Manage collected materials."
    icon={<Package size={24} />}
    href="/admin/materials/collected-materials"
/>

  <OperationalCard
    title="Segregated Materials"
    description="Manage segregated materials."
    icon={<Boxes size={24} />}
    href="/admin/materials/segregated-materials"
/>

  <OperationalCard
    title="Processing Materials"
    description="Manage materials under processing."
    icon={<Cog size={24} />}
    href="/admin/materials/processing-materials"
/>

  <OperationalCard
    title="Inventory Materials"
    description="Manage material inventory."
    icon={<Warehouse size={24} />}
    href="/admin/materials/inventory-materials"
/>

  <OperationalCard
    title="Dispatched Materials"
    description="Manage dispatched materials."
    icon={<Truck size={24} />}
    href="/admin/materials/dispatched-materials"
/>

  <OperationalCard
    title="All Materials"
    description="Manage all material records."
    icon={<ClipboardList size={24} />}
    href="/admin/materials/all-materials"
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
    MATERIAL OPERATIONS
</h2>

<p className="mt-1 text-xs text-slate-600">
    Manage UrbanLoop material operations.
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
    title="View All Materials"
    description="View all material records."
    icon={<ClipboardList size={24} />}
    href="/admin/materials/view-all"
/>

  <OperationalCard
    title="Track Material Processing"
    description="Track material processing status."
    icon={<Cog size={24} />}
    href="/admin/materials/track-processing"
/>

  <OperationalCard
    title="Manage Inventory"
    description="Manage material inventory."
    icon={<Warehouse size={24} />}
    href="/admin/materials/manage-inventory"
/>

  <OperationalCard
    title="Dispatch Materials"
    description="Manage material dispatch."
    icon={<Truck size={24} />}
    href="/admin/materials/dispatch-materials"
/>

  <OperationalCard
    title="Search Materials"
    description="Search material records."
    icon={<Search size={24} />}
    href="/admin/materials/search"
/>

  <OperationalCard
    title="Material Analytics"
    description="View material analytics."
    icon={<BarChart3 size={24} />}
    href="/admin/materials/analytics"
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
      href="/admin/materials/track-processing"
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
      Track Material Processing
    </Link>


    <Link
      href="/admin/materials/manage-inventory"
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
      Manage Inventory
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