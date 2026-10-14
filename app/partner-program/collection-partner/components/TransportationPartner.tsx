import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";

export default function TransportationPartner() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}

          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Transportation Partner
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Transportation Partners play an important role in ensuring that
              recyclable materials move efficiently between collection points,
              aggregation centres and recycling facilities. They help maintain
              a smooth and reliable logistics network that supports the entire
              UrbanLoop ecosystem.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Whether transporting recyclable materials locally or across
              larger regions, Transportation Partners contribute to timely
              deliveries, improved operational efficiency and complete
              traceability throughout the recycling journey.
            </p>

          </div>

          {/* Right Action Panel */}

          <div>

            <div className="rounded-3xl bg-white p-10 shadow-sm ring-1 ring-slate-200">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100">
                <Truck className="h-10 w-10 text-[#72B543]" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                Become a Transportation Partner
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Register your transportation services and become an important
                part of UrbanLoop's recycling logistics network.
              </p>

              <Link
                href="/transportation-partner"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#72B543] px-7 py-4 font-semibold text-white transition hover:bg-[#5f9b38]"
              >
                Register as Transportation Partner
                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}