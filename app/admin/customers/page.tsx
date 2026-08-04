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
    Customer Management
</h1>

          <p className="mt-2 text-sm">
    Manage all UrbanLoop customers
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
    CUSTOMER CATEGORIES
</h2>

<p className="mt-1 text-xs text-slate-600">
    Manage registration categories.
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
    title="Individual Households"
    description="Manage residential customers."
    icon={<Home size={24} />}
    href="/admin/customers/individual-households"
/>

  <OperationalCard
    title="Businesses"
    description="Manage business customers."
    icon={<Building2 size={24} />}
    href="/admin/customers/businesses"
/>

  <OperationalCard
    title="Corporate Offices"
    description="Manage corporate customers."
    icon={<Building size={24} />}
    href="/admin/customers/corporate-offices"
/>

  <OperationalCard
    title="Educational Institutions"
    description="Manage educational customers."
    icon={<GraduationCap size={24} />}
    href="/admin/customers/educational-institutions"
/>

  <OperationalCard
    title="Hospitals & Institutions"
    description="Manage institutional customers."
    icon={<Hospital size={24} />}
    href="/admin/customers/hospitals-institutions"
/>

  <OperationalCard
    title="All Customers"
    description="Manage all registered customers."
    icon={<Users size={24} />}
    href="/admin/customers/all-customers"
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
    CUSTOMER OPERATIONS
</h2>

<p className="mt-1 text-xs text-slate-600">
    Manage UrbanLoop customer operations.
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
  title="View All Customers"
  description="View all customer records."
  icon={<Users size={24} />}
  href="/admin/customers/view-all"
/>

  <OperationalCard
  title="Active Customers"
  description="View active customers."
  icon={<UserCheck size={24} />}
  href="/admin/customers/active"
/>

  <OperationalCard
  title="Inactive Customers"
  description="View inactive customers."
  icon={<UserX size={24} />}
  href="/admin/customers/inactive"
/>

  <OperationalCard
  title="Export Customer Data"
  description="Export customer records."
  icon={<Download size={24} />}
  href="/admin/customers/export"
/>

  <OperationalCard
  title="Search Customers"
  description="Search customer records."
  icon={<Search size={24} />}
  href="/admin/customers/search"
/>

  <OperationalCard
  title="Customer Analytics"
  description="View customer analytics."
  icon={<BarChart3 size={24} />}
  href="/admin/customers/analytics"
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
      href="#"
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
      View All Registrations
    </Link>


    <Link
      href="#"
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
      Pending Approvals
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