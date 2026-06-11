export default function SustainabilityImpact() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            SUSTAINABILITY IMPACT
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Every Pickup Creates A Better Future
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            UrbanLoop transforms everyday waste into measurable environmental,
            social and economic impact.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="rounded-[36px] bg-gradient-to-br from-[#72B543] to-[#2A6FA3] p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold">
              Impact Generated Through UrbanLoop
            </h3>

            <div className="mt-10 space-y-8">
              <div>
                <div className="text-5xl font-bold">
                  25,000+
                </div>
                <div className="text-lg opacity-90">
                  Kilograms Recycled
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold">
                  5,000+
                </div>
                <div className="text-lg opacity-90">
                  Trees Planted
                </div>
              </div>

              <div>
                <div className="text-5xl font-bold">
                  12+
                </div>
                <div className="text-lg opacity-90">
                  Tons CO₂ Reduced
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">
                🌳 Tree Plantation
              </h4>

              <p className="mt-3 text-slate-600">
                Every contribution supports reforestation and greener
                communities.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">
                ♻ Circular Economy
              </h4>

              <p className="mt-3 text-slate-600">
                Waste is transformed into reusable resources rather than
                ending up in landfills.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">
                🌍 Carbon Reduction
              </h4>

              <p className="mt-3 text-slate-600">
                Responsible recycling and composting reduce greenhouse gas
                emissions.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">
                🤝 Community Impact
              </h4>

              <p className="mt-3 text-slate-600">
                Supporting local livelihoods while building cleaner and
                healthier neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}