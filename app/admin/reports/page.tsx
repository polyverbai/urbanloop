"use client";

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
        Reports & ESG Dashboard
      </h1>

      <p className="mt-2 text-sm">
        Manage UrbanLoop sustainability and
        business intelligence from a single
        console.
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

{/* Executive Dashboard Widgets */}

<section className="mt-5">

<div
  className="
    grid
    gap-5
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

    <h2 className="text-lg font-bold text-[#72B543]">
    BUSINESS OVERVIEW
</h2>

<p className="mt-1 text-xs text-slate-600">
    View key business performance indicators
    across UrbanLoop.
</p>

<div
  className="
    mt-4
    grid
    gap-3
    sm:grid-cols-2
    lg:grid-cols-4
  "
>
    <DashboardMetricCard
  title="Total Customers"
  value="0"
/>

<DashboardMetricCard
  title="Total Pickups"
  value="0"
/>

<DashboardMetricCard
  title="Total Revenue"
  value="₹0"
/>

<DashboardMetricCard
  title="Materials Collected"
  value="0 KG"
/>

</div>
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
    <h2 className="text-lg font-bold text-[#72B543]">
      OPERATIONAL ANALYTICS
    </h2>

    <p className="mt-1 text-xs text-slate-600">
      Monitor UrbanLoop operational performance
      metrics.
    </p>

<div
  className="
    mt-4
    grid
    gap-3
    sm:grid-cols-2
    lg:grid-cols-4
  "
>

<DashboardMetricCard
  title="Today's Pickups"
  value="0"
/>

<DashboardMetricCard
  title="Pending Pickups"
  value="0"
/>

<DashboardMetricCard
  title="Completed Pickups"
  value="0"
/>

<DashboardMetricCard
  title="Materials In Inventory"
  value="0 KG"
/>

</div>

  </div>

</div>

<div
  className="
    mt-5
    grid
    gap-5
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

    <h2 className="text-lg font-bold text-[#72B543]">
      SUSTAINABILITY ANALYTICS
    </h2>

    <p className="mt-1 text-xs text-slate-600">
      Track UrbanLoop sustainability and
      environmental impact metrics.
    </p>

<div
  className="
    mt-4
    grid
    gap-3
    sm:grid-cols-2
    lg:grid-cols-4
  "
>

<DashboardMetricCard
  title="Carbon Saved"
  value="0 KG"
/>

<DashboardMetricCard
  title="Waste Diverted"
  value="0 KG"
/>

<DashboardMetricCard
  title="CO₂ Offset"
  value="0 KG"
/>

<DashboardMetricCard
  title="Water Saved"
  value="0 Litres"
/>

</div>

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
    <h2 className="text-lg font-bold text-[#72B543]">
      REPORTS CENTER
    </h2>

    <p className="mt-1 text-xs text-slate-600">
      Generate and download business and ESG
      reports.
    </p>

<div
  className="
    mt-4
    grid
    gap-3
    sm:grid-cols-2
    xl:grid-cols-4
  "
>

<ReportTileCard
  title="Business Reports"
  description="Generate business performance reports."
/>

<ReportTileCard
  title="ESG Reports"
  description="Generate ESG and sustainability reports."
/>

<ReportTileCard
  title="Financial Reports"
  description="Generate financial and revenue reports."
/>

<ReportTileCard
  title="Operational Reports"
  description="Generate operational performance reports."
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
          Access frequently used reporting workflows.
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

        <button
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
          Generate ESG Report
        </button>


        <button
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
          Download Monthly Report
        </button>

      </div>

    </div>

  </div>

</section>


  </main>
);

}

function DashboardMetricCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-4
        py-3
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#72B543]
        hover:shadow-lg
      "
    >

      {/* Title */}

      <h3
        className="
          text-sm
          font-semibold
          text-slate-700
        "
      >
        {title}
      </h3>


      {/* KPI Value */}

      <p
        className="
          mt-3
          text-2xl
          font-bold
          text-[#72B543]
        "
      >
        {value}
      </p>

    </div>
  );
}

function ReportTileCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#72B543]
        hover:shadow-lg
      "
    >
      {/* Report Title */}

      <h3
        className="
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
          mt-2
          text-xs
          text-slate-600
        "
      >
        {description}
      </p>
    </div>
  );
}


