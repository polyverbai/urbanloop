export default function Ecosystem() {
  const benefits = [
    "Transparent Collection Process",
    "Instant Rewards & Wallet Credits",
    "Responsible Recycling & Composting",
    "Tree Plantation Initiatives",
    "Carbon Reduction Tracking",
    "Community Impact Measurement",
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            URBANLOOP ECOSYSTEM
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Connecting Communities To The Circular Economy
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            UrbanLoop creates a connected ecosystem where waste becomes value,
            communities become contributors and sustainability becomes measurable.
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE - FLOW */}
          <div className="rounded-[32px] border border-slate-200 bg-[#F8FBF4] p-10 shadow-sm">
            <div className="space-y-6 text-center">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  🏠
                  <p className="mt-2 font-medium">Households</p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  🏢
                  <p className="mt-2 font-medium">Apartments</p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  🏭
                  <p className="mt-2 font-medium">Businesses</p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  🏛️
                  <p className="mt-2 font-medium">Institutions</p>
                </div>
              </div>

              <div className="text-3xl text-[#72B543]">↓</div>

              <div className="rounded-2xl bg-[#72B543] p-5 text-white">
                <h3 className="text-xl font-semibold">
                  Collection Partners
                </h3>
              </div>

              <div className="text-3xl text-[#72B543]">↓</div>

              <div className="rounded-2xl bg-[#2A6FA3] p-5 text-white">
                <h3 className="text-xl font-semibold">
                  UrbanLoop Hub
                </h3>
              </div>

              <div className="text-3xl text-[#72B543]">↓</div>

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  ♻️
                  <p className="mt-2 font-medium">Recycle</p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  🎁
                  <p className="mt-2 font-medium">Reward</p>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  🌍
                  <p className="mt-2 font-medium">Impact</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - BENEFITS */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Why The Ecosystem Matters
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              UrbanLoop is not just a waste collection platform. It is a
              complete circular economy ecosystem that connects communities,
              collection partners, recyclers and environmental initiatives
              through one unified platform.
            </p>

            <div className="mt-10 space-y-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#72B543] text-white">
                    ✓
                  </div>

                  <span className="font-medium text-slate-800">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="rounded-xl bg-[#72B543] px-8 py-4 font-medium text-white transition hover:bg-[#5f9d35]">
                Explore The Ecosystem
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}