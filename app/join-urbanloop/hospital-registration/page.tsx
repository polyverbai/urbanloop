"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function hospitalRegistrationPage() {
return (
<>

<Header />

  <main className="bg-white min-h-screen">

    <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Hospital & Healthcare Registration
          </h1>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
            Partner with UrbanLoop to recover recyclable materials,
furniture, IT assets and non-biomedical waste while
supporting sustainability and circular economy goals.
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <Link
  href="/join-urbanloop/hospital-registration/hospital"
  className="group relative rounded-3xl border border-[#DDE8D0] bg-white p-3 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>

  <h3 className="text-lg font-bold text-slate-900">
    Hospital
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-slate-600">
    Multi-specialty, specialty and general hospitals.
  </p>
</Link>

          <Link
  href="/join-urbanloop/hospital-registration/clinic"
  className="group relative rounded-3xl border border-[#DDE8D0] bg-white p-3 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>

  <h3 className="text-lg font-bold text-slate-900">
    Clinic
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-slate-600">
    Private clinics and specialty healthcare practices.
  </p>
</Link>

          <Link
  href="/join-urbanloop/hospital-registration/diagnostic-center"
  className="group relative rounded-3xl border border-[#DDE8D0] bg-white p-3 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>

  <h3 className="text-lg font-bold text-slate-900">
    Diagnostic Center
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-slate-600">
    Labs, imaging centres and diagnostic facilities.
  </p>
</Link>

          <Link
  href="/join-urbanloop/hospital-registration/medical-college"
  className="group relative rounded-3xl border border-[#DDE8D0] bg-white p-3 shadow-sm transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
>
  <div className="mb-4 flex justify-end">
    <ArrowUpRight
      size={22}
      className="text-[#72B543] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </div>

  <h3 className="text-lg font-bold text-slate-900">
    Medical College
  </h3>

  <p className="mt-3 text-sm leading-relaxed text-slate-600">
    Medical colleges and teaching hospitals.
  </p>
</Link>

        </div>

      </div>

    </section>

    <section className="bg-[#F8FBF4] py-20">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Ready To Build A More Sustainable Healthcare Facility?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          UrbanLoop helps hospitals and healthcare facilities improve recycling rates,
recover assets responsibly and create measurable environmental impact.
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