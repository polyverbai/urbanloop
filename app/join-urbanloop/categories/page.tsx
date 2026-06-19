"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  Home,
  Briefcase,
  Building,
  GraduationCap,
  Landmark,
  ArrowRight,
  Handshake,
} from "lucide-react";

export default function CategoriesPage() {
  return (
    <>
      <Header />

      <main className="bg-white">

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Select The Category
              <span className="block text-[#72B543]">
                That Best Describes You
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              UrbanLoop offers tailored recovery programs,
              reporting tools and sustainability initiatives
              for households, businesses, institutions and
              organizations of all sizes.
            </p>

          </div>
        </section>

        {/* Category Cards */}


        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-2 md:grid-cols-3 xl:grid-cols-5">

              {/* Individual Household */}
              <div className="group rounded-[20px] border border-[#DDE8D0] bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">

                <Home size={28} className="mb-4 text-[#72B543]" />

                <h3 className="text-base font-bold text-slate-900">
                  Individual Household
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Homes, Villas, Apartments & Gated Communities
                </p>

                <Link
                  href="/join-urbanloop/individual/"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#72B543] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5FA032]"
                >
                  Register Now
                  <ArrowRight size={16} />
                </Link>

              </div>

              {/* Businesses */}
              <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">

                <Briefcase size={28} className="mb-4 text-[#72B543]" />

                <h3 className="text-base font-bold text-slate-900">
                  Businesses
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Retail & Commercial Establishments
                </p>

                <Link
                  href="/join-urbanloop/business-registration"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#72B543] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5FA032]"
                >
                  Register Now
                  <ArrowRight size={16} />
                </Link>

              </div>

              {/* Corporate Offices */}
              <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">

                <Building size={28} className="mb-4 text-[#72B543]" />

                <h3 className="text-base font-bold text-slate-900">
                  Corporate Offices
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Enterprises & Corporate Campuses
                </p>

                <Link
                  href="/join-urbanloop/corporate-registration"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#72B543] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5FA032]"
                >
                  Register Now
                  <ArrowRight size={16} />
                </Link>

              </div>

              {/* Educational Institutions */}
              <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">

                <GraduationCap size={28} className="mb-3 text-[#72B543]" />

                <h3 className="text-base font-bold text-slate-900">
                  Educational Institutions
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Schools, Colleges & Universities
                </p>

                <Link
                  href="/join-urbanloop/educational-institution-registration"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#72B543] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5FA032]"
                >
                  Register Now
                  <ArrowRight size={16} />
                </Link>

              </div>

              {/* Hospitals & Institutions */}
              <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">

                <Landmark size={28} className="mb-3 text-[#72B543]" />

                <h3 className="text-base font-bold text-slate-900">
                  Hospitals & Institutions
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Hospitals, NGOs & Organizations
                </p>

                <Link
                  href="/join-urbanloop/hospital-registration"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#72B543] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5FA032]"
                >
                  Register Now
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </div>
        </section>
{/* CTA SECTION */}

<section className="mt-24 bg-gradient-to-br from-[#72B543] to-[#5FA032] py-24">
  <div className="mx-auto max-w-5xl px-6 text-center">

    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
      <Handshake
        size={40}
        strokeWidth={1.8}
        className="text-white"
      />
    </div>

    <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
      Ready To Join
      <span className="block">
        UrbanLoop?
      </span>
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/90">
      Choose the category that best describes you and
      become part of UrbanLoop's circular economy network.
      Together we can recover more materials, reduce waste,
      generate value and create measurable environmental impact.
    </p>

    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#72B543] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        Contact UrbanLoop
      </Link>

      <Link
        href="/about"
        className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
      >
        Learn More
      </Link>

    </div>

  </div>
</section>
      </main>

      <Footer />
    </>
  );
}