import Link from "next/link";
import { ArrowRight, Recycle } from "lucide-react";

export default function CollectionPartner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Action Panel */}

          <div className="order-2 lg:order-1">

            <div className="rounded-3xl bg-slate-50 p-10 shadow-sm ring-1 ring-slate-200">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100">
                <Recycle className="h-10 w-10 text-[#72B543]" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                Become a Collection Partner
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Join the UrbanLoop network and manage scheduled collections
                from residential communities, businesses, educational
                institutions and healthcare organisations.
              </p>

              <Link
                href="/collection-partner"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#72B543] px-7 py-4 font-semibold text-white transition hover:bg-[#5f9b38]"
              >
                Register as Collection Partner
                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>

          </div>

          {/* Right Content */}

          <div className="order-1 lg:order-2">

            <h2 className="text-4xl font-bold text-slate-900">
              Collection Partner
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Collection Partners form the operational backbone of the
              UrbanLoop ecosystem. They are responsible for collecting
              recyclable materials from registered Sustainability Partners,
              ensuring that recyclable waste is handled professionally,
              efficiently and in accordance with responsible environmental
              practices.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Using the UrbanLoop platform, Collection Partners receive
              collection requests, manage schedules, record material
              collections and contribute towards a transparent and
              technology-driven recycling ecosystem.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}