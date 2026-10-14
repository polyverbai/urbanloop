import Link from "next/link";
import { ArrowRight, Factory } from "lucide-react";

export default function RecyclingPartner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Action Panel */}

          <div className="order-2 lg:order-1">

            <div className="rounded-3xl bg-slate-50 p-10 shadow-sm ring-1 ring-slate-200">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100">
                <Factory className="h-10 w-10 text-[#72B543]" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                Become a Recycling Partner
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                Register your recycling facility or material recovery operation
                and become the final link in UrbanLoop's circular economy.
              </p>

              <Link
                href="/recycler-partner"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#72B543] px-7 py-4 font-semibold text-white transition hover:bg-[#5f9b38]"
              >
                Register as Recycling Partner
                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>

          </div>

          {/* Right Content */}

          <div className="order-1 lg:order-2">

            <h2 className="text-4xl font-bold text-slate-900">
              Recycling Partner
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Recycling Partners are authorised recycling facilities and
              material recovery organisations responsible for transforming
              recyclable materials into reusable raw materials. They complete
              the final stage of the UrbanLoop recycling lifecycle and ensure
              valuable resources are returned to productive use.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Through UrbanLoop, Recycling Partners receive traceable material
              streams, collaborate with Collection and Transportation Partners,
              and contribute to a transparent, technology-enabled circular
              economy focused on sustainability and responsible resource
              management.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}