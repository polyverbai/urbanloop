"use client";
import { useEffect, useState } from "react";
import { fetchDashboard } from "@/lib/api/dashboard";
import LogoutButton from "@/components/dashboard/LogoutButton";
import {
  User,
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Wallet,
  Recycle,
  Truck,
  Settings,
  LifeBuoy,
} from "lucide-react";



/* =====================================================
   TYPES
===================================================== */

interface Customer {

  customerId: string;

  customerType: string;

  fullName: string;

  mobileNumber: string;

  email: string | null;

  accountStatus: string;

}

interface Registration {

  registrationId: string;

  registrationNumber: string;

  registrationStatus: string;

  residencyCategory: string;

  address: string;

  city: string;

  state: string;

  pinCode: string;

}

interface DashboardResponse {

  success: boolean;

  customer: Customer;

  registration: Registration;

}

/* =====================================================
   PAGE
===================================================== */

export default function ResidentialDashboardPage() {

  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  /* =====================================================
     LOAD DASHBOARD
  ===================================================== */

  useEffect(() => {

    async function loadDashboard() {

      try {

        const result =
          await fetchDashboard<DashboardResponse>(
            "/api/dashboard/residential"
          );

        setDashboard(result);

      } catch (err) {

        console.error(err);

        setError(
          err instanceof Error
            ? err.message
            : "Unable to load dashboard."
        );

      } finally {

        setLoading(false);

      }

    }

    loadDashboard();

  }, []);

  /* =====================================================
     LOADING
  ===================================================== */

  if (loading) {

    return (

      <main className="flex min-h-screen items-center justify-center">

        <p className="text-lg font-medium">

          Loading Residential Dashboard...

        </p>

      </main>

    );

  }

  /* =====================================================
     ERROR
  ===================================================== */

  if (error || !dashboard) {

    return (

      <main className="flex min-h-screen items-center justify-center">

        <p className="text-red-600">

          {error}

        </p>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-slate-50">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-r from-[#72B543] to-[#5FA032] px-8 py-10 text-white shadow-lg">

        <div
  className="
    mx-auto
    flex
    max-w-7xl
    items-start
    justify-between
  "
>

  <div>

    <h1 className="text-4xl font-bold">
      Residential Dashboard
    </h1>

    <p className="mt-3 text-lg">
      Welcome back,
      <span className="font-semibold">
        {" "}
        {dashboard.customer.fullName}
      </span>
    </p>

  </div>

  <LogoutButton />

</div>

      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 px-8 lg:grid-cols-2">

        {/* =====================================================
            CUSTOMER INFORMATION
        ===================================================== */}

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-6 text-xl font-semibold">
            Customer Information
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <User className="text-[#72B543]" />
              <div>
                <p className="text-sm text-slate-500">
                  Full Name
                </p>
                <p className="font-medium">
                  {dashboard.customer.fullName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BadgeCheck className="text-[#72B543]" />
              <div>
                <p className="text-sm text-slate-500">
                  Customer ID
                </p>
                <p className="font-medium">
                  {dashboard.customer.customerId}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#72B543]" />
              <div>
                <p className="text-sm text-slate-500">
                  Mobile Number
                </p>
                <p className="font-medium">
                  {dashboard.customer.mobileNumber}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#72B543]" />
              <div>
                <p className="text-sm text-slate-500">
                  Email Address
                </p>
                <p className="font-medium">
                  {dashboard.customer.email || "-"}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* =====================================================
            REGISTRATION INFORMATION
        ===================================================== */}

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-6 text-xl font-semibold">
            Registration Information
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <CalendarDays className="text-[#72B543]" />
              <div>
                <p className="text-sm text-slate-500">
                  Registration Number
                </p>
                <p className="font-medium">
                  {dashboard.registration.registrationNumber}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BadgeCheck className="text-[#72B543]" />
              <div>
                <p className="text-sm text-slate-500">
                  Registration Status
                </p>
                <p className="font-medium">
                  {dashboard.registration.registrationStatus}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#72B543]" />
              <div>
                <p className="text-sm text-slate-500">
                  Address
                </p>
                <p className="font-medium">
                  {dashboard.registration.address}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#72B543]" />
              <div>
                <p className="text-sm text-slate-500">
                  City / State
                </p>
                <p className="font-medium">
                  {dashboard.registration.city},{" "}
                  {dashboard.registration.state}
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          QUICK ACTIONS
      ===================================================== */}

      <section className="mx-auto mt-8 mb-10 max-w-7xl px-8">

        <h2 className="mb-6 text-2xl font-semibold">
          Quick Actions
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <button
            className="rounded-2xl bg-white p-6 text-left shadow transition hover:shadow-lg"
          >
            <Truck
              className="mb-4 text-[#72B543]"
              size={32}
            />

            <h3 className="text-lg font-semibold">
              Schedule Pickup
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Schedule a recyclable waste pickup.
            </p>

          </button>

          <button
            className="rounded-2xl bg-white p-6 text-left shadow transition hover:shadow-lg"
          >
            <Recycle
              className="mb-4 text-[#72B543]"
              size={32}
            />

            <h3 className="text-lg font-semibold">
              Sustainability
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              View your recycling impact and environmental contribution.
            </p>

          </button>

          <button
            className="rounded-2xl bg-white p-6 text-left shadow transition hover:shadow-lg"
          >
            <Wallet
              className="mb-4 text-[#72B543]"
              size={32}
            />

            <h3 className="text-lg font-semibold">
              Wallet
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              View your UrbanLoop wallet balance and transactions.
            </p>

          </button>

          <button
            className="rounded-2xl bg-white p-6 text-left shadow transition hover:shadow-lg"
          >
            <User
              className="mb-4 text-[#72B543]"
              size={32}
            />

            <h3 className="text-lg font-semibold">
              My Profile
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Update your profile and communication preferences.
            </p>

          </button>

          <button
            className="rounded-2xl bg-white p-6 text-left shadow transition hover:shadow-lg"
          >
            <Settings
              className="mb-4 text-[#72B543]"
              size={32}
            />

            <h3 className="text-lg font-semibold">
              Settings
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Configure your account settings.
            </p>

          </button>

          <button
            className="rounded-2xl bg-white p-6 text-left shadow transition hover:shadow-lg"
          >
            <LifeBuoy
              className="mb-4 text-[#72B543]"
              size={32}
            />

            <h3 className="text-lg font-semibold">
              Support
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Contact UrbanLoop support for assistance.
            </p>

          </button>

        </div>

      </section>

    </main>

  );

}