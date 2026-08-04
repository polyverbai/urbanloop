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
        p-6
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
          <h1 className="text-5xl font-bold tracking-wide">
            UrbanLoop
          </h1>

          <p className="mt-1 text-sm">
            Circular Economy Operating Platform
          </p>

          <p className="mt-5 text-base font-medium">
            Welcome Back, Radhakrishnan.
          </p>
        </div>

        {/* Right Section */}

        <div className="text-left lg:text-right">

          <h2 className="text-xl font-semibold">
            Admin & Operations Platform
          </h2>

          <p className="mt-2 text-sm font-medium">
            {currentDateTime}
          </p>

        </div>

      </div>
    </section>

  </main>
);

}