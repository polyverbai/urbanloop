"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ReportsDashboardPage() {
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
    Platform Settings
  </h1>

  <p className="mt-2 text-sm">
    Manage UrbanLoop platform configurations
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


{/* Configuration Console */}

<section className="mt-5">

<div
  className="
    grid
    gap-8
    lg:grid-cols-2
  "
>

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
    GENERAL SETTINGS
  </h2>

  <p className="mt-1 text-xs text-slate-600">
    Manage general platform configurations.
  </p>

</div>

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
    BUSINESS CONFIGURATION
  </h2>

  <p className="mt-1 text-xs text-slate-600">
    Configure UrbanLoop business rules and pricing.
  </p>

</div>

</div>


<div
  className="
    mt-15
    grid
    gap-8
    lg:grid-cols-2
  "
>

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
    USER & ACCESS MANAGEMENT
  </h2>

  <p className="mt-1 text-xs text-slate-600">
    Manage platform users, roles and permissions.
  </p>

</div>

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
    INTEGRATION SETTINGS
  </h2>

  <p className="mt-1 text-xs text-slate-600">
    Configure third-party integrations and services.
  </p>

</div>

</div>

<div
  className="
    mt-15
    grid
    gap-8
    lg:grid-cols-2
  "
>

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
    SECURITY SETTINGS
  </h2>

  <p className="mt-1 text-xs text-slate-600">
    Manage platform security and authentication policies.
  </p>

</div>

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
    PLATFORM MAINTENANCE
  </h2>

  <p className="mt-1 text-xs text-slate-600">
    Manage backups, maintenance schedules and system health.
  </p>

</div>

</div>

</section>



{/* Quick Actions */}

<section
  className="
    mt-23
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
          Access frequently used platform administration workflows.
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
          Export Settings
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
          Backup Configuration
        </Link>

      </div>

    </div>

  </div>

</section>

</main>
)};
