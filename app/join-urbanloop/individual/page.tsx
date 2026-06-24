"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function ResidentialRegistrationPage() {
  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        {/* Hero Section */}

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="text-center">

                <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Residential Registration
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Join UrbanLoop and transform household recyclable materials into value.
                Select your residential category below to begin registration and
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



            {/* Residential Type Cards */}

            <div className="mt-16 flex justify-center">

              <Link
  href="/join-urbanloop/individual/individual"
  className="group w-full max-w-md rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-lg"
>

  <div className="mb-4 flex justify-end">
  <ArrowUpRight
    size={22}
    className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</div>
                <h3 className="text-xl font-bold text-slate-900">
                  Individual Household
                </h3>

                <p className="mt-3 text-slate-600">
                  Register your apartment, villa, community, independent house, row house, or farm house with UrbanLoop.
                </p>
              </Link>

            </div>

          </div>

        </section>

        {/* CTA Section */}

        <section className="bg-[#F8FBF4] py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              Ready To Turn Household Waste Into Value?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              UrbanLoop helps households and residential communities improve
              recycling rates, reduce waste and contribute to a cleaner and
              more sustainable environment.
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