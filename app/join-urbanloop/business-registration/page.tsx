"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";


export default function BusinessRegistrationPage() {
  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        {/* Hero Section */}

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

              <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Business Registration
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Join UrbanLoop and transform recyclable materials into value.
                Select your business category below to begin registration and
                become part of a smarter circular economy network.
              </p>

<div className="mt-8 flex justify-center">

  <Link
    href="/join-urbanloop/categories"
    className="inline-flex items-center gap-2 rounded-xl border border-[#72B543] px-5 py-3 text-sm font-medium text-[#72B543] transition-all duration-300 hover:bg-[#72B543] hover:text-white"
  >
    ← Back
  </Link>

</div>

            </div>

            {/* Business Type Cards */}

            <div className="mt-16 grid gap-4 lg:grid-cols-6">

              <Link
  href="/join-urbanloop/business-registration/retail"
  className="group rounded-3xl border border-[#DDE8D0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-lg"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>
                <h3 className="text-base font-bold text-slate-900">
                  Retail Store
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Supermarkets, department stores, convenience stores,
                  electronics stores and retail outlets.
                </p>
              </Link>

              <Link
  href="/join-urbanloop/business-registration/restaurant"
  className="group rounded-3xl border border-[#DDE8D0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-lg"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>
                <h3 className="text-base font-bold text-slate-900">
                  Restaurant & Café
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Restaurants, cafés, bakeries, food courts and food service
                  businesses.
                </p>
              </Link>

              <Link
  href="/join-urbanloop/business-registration/hotel"
  className="group rounded-3xl border border-[#DDE8D0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-lg"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>
                <h3 className="text-base font-bold text-slate-900">
                  Hotel & Hospitality
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Hotels, resorts, serviced apartments and hospitality
                  businesses.
                </p>
              </Link>

              <Link
  href="/join-urbanloop/business-registration/warehouse"
  className="group rounded-3xl border border-[#DDE8D0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-lg"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>
                <h3 className="text-base font-bold text-slate-900">
                  Warehouse & Logistics
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Warehouses, distribution centres and logistics facilities.
                </p>
              </Link>

              <Link
  href="/join-urbanloop/business-registration/manufacturing"
  className="group rounded-3xl border border-[#DDE8D0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-lg"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>
                <h3 className="text-base font-bold text-slate-900">
                  Manufacturing Unit
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Factories, industrial units and production facilities.
                </p>
              </Link>

              <Link
  href="/join-urbanloop/business-registration/service"
  className="group rounded-3xl border border-[#DDE8D0] bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-lg"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>
                <h3 className="text-base font-bold text-slate-900">
                  Service Business
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Offices, consultancies, agencies and professional service
                  providers.
                </p>
              </Link>

            </div>

          </div>
        </section>

        {/* CTA Section */}

        <section className="bg-[#F8FBF4] py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              Ready To Recover More Value From Your Waste?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              UrbanLoop helps businesses reduce waste management costs,
              improve sustainability performance, increase recycling rates
              and generate measurable environmental impact.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-[#72B543] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
              >
                Talk To Our Team
              </Link>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}