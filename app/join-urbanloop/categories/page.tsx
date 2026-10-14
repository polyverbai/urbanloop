"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";
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
const router = useRouter();

const [loading, setLoading] =
  useState(true);

const [customerType, setCustomerType] =
  useState<string | null>(null);

  useEffect(() => {
  async function loadCustomer() {

    const {
      data: { user },
    } =
      await supabase.auth.getUser();

    if (!user) {

      router.push("/login");

      return;
    }

    const {
      data: customer,
      error,
    } = await supabase
      .from("customer_accounts")
      .select("customer_type")
      .eq(
        "auth_user_id",
        user.id
      )
      .maybeSingle();

    if (error) {

      console.error(error);

      setLoading(false);

      return;
    }

    if (customer) {
      setCustomerType(
        customer.customer_type
      );
    }

    setLoading(false);
  }

  loadCustomer();

}, [router]);

if (loading) {

  return (
    <div className="flex min-h-screen items-center justify-center">
      Loading...
    </div>
  );

}

  return (
    <>
      <Header />

      <main className="min-h-screen">

        {/* Hero Section */}
        <section className="py-20">
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


        <section>
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
                  href="/join-urbanloop/individual/individual"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#D7EFC2] px-4 py-2 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
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
                  href="/join-urbanloop/business-registration/retail"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#D7EFC2] px-4 py-2 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
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
                  href="/join-urbanloop/corporate-registration/it-company"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#D7EFC2] px-4 py-2 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
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
                  href="/join-urbanloop/educational-institution-registration/institutions/"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#D7EFC2] px-4 py-2 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
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
                  href="/join-urbanloop/hospital-institutions-registration/institutions"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#D7EFC2] px-4 py-2 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
                >
                  Register Now
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </div>
        </section>
{/* CTA SECTION */}

<section className="py-20">
  

    <div className="mx-auto max-w-7xl px-6">
        <div className="relative mt-12 overflow-visible rounded-[40px] bg-gradient-to-r from-[#157A24] via-[#4E9A2E] to-[#8BC34A] px-10 pt-20 pb-16 text-center shadow-[0_30px_80px_rgba(21,122,36,0.25)] md:px-16">

<div className="mb-8 flex justify-center">
  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#EAF7D7] shadow-xl">
    <Handshake
      size={40}
      strokeWidth={1.8}
      className="text-[#72B543]"
    />
  </div>
</div>

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold text-white">

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
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#D7EFC2] px-4 py-2 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
      >
        Contact UrbanLoop
      </Link>

    </div>
</div>
</div>
</div>
</section>
      </main>

      <Footer />
    </>
  );
}