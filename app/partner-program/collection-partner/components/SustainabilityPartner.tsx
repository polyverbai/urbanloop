import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

export default function SustainabilityPartner() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}

          <div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100">
              <HeartHandshake className="h-10 w-10 text-[#72B543]" />
            </div>

            <h2 className="mt-8 text-4xl font-bold text-slate-900">
              Sustainability Partner
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Sustainability Partners are organisations and communities that
              generate recyclable materials through their day-to-day
              activities. UrbanLoop provides a structured platform to manage
              responsible waste segregation, scheduled collections and
              sustainable recycling practices while contributing towards a
              cleaner environment.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Depending on the nature of your organisation, you can register
              under one of the following Sustainability Partner categories.
            </p>

          </div>

          {/* Right Panel */}

          <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">

            <h3 className="text-2xl font-bold text-slate-900">
              Sustainability Categories
            </h3>

            <p className="mt-3 text-slate-600">
              Select the category that best represents your organisation.
            </p>

            <div className="mt-8 space-y-4">

              <div className="rounded-xl border border-slate-200 px-5 py-4">
                Residential Communities
              </div>

              <div className="rounded-xl border border-slate-200 px-5 py-4">
                Businesses
              </div>

              <div className="rounded-xl border border-slate-200 px-5 py-4">
                Educational Institutions
              </div>

              <div className="rounded-xl border border-slate-200 px-5 py-4">
                Healthcare Institutions
              </div>

            </div>

            <Link
              href="/sustainability-partner/categories"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#72B543] px-7 py-4 font-semibold text-white transition hover:bg-[#5f9b38]"
            >
              Explore Sustainability Categories
              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}