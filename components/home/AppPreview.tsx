export default function AppPreview() {
  const features = [
    "Schedule Waste Pickups",
    "Track Wallet Balance",
    "Monitor Environmental Impact",
    "Redeem Rewards & Benefits",
    "Track Collection History",
    "View Trees & Carbon Savings",
  ];

  return (
    <section className="bg-[#F8FBF4] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* PHONE MOCKUP */}
          <div className="flex justify-center">
            <div className="relative h-[650px] w-[320px] rounded-[50px] border-[10px] border-slate-900 bg-white shadow-2xl">
              
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-4 h-8 w-36 -translate-x-1/2 rounded-full bg-slate-900"></div>

              <div className="p-8 pt-20">
                <div className="rounded-3xl bg-[#72B543] p-6 text-white">
                  <p className="text-sm opacity-80">
                    Wallet Balance
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    ₹1,250
                  </h3>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                    ♻️
                    <p className="mt-2 text-sm">
                      Recycled
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                    🌳
                    <p className="mt-2 text-sm">
                      Trees
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                    🎁
                    <p className="mt-2 text-sm">
                      Rewards
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                    🌍
                    <p className="mt-2 text-sm">
                      Impact
                    </p>
                  </div>
                </div>

                <button className="mt-8 w-full rounded-xl bg-[#72B543] py-4 font-semibold text-white">
                  Schedule Pickup
                </button>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
              MOBILE APP
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Everything You Need In One App
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Schedule pickups, track rewards, monitor sustainability impact
              and manage your UrbanLoop journey from anywhere.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-white">
                    ✓
                  </div>

                  <span className="text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-[#72B543] px-8 py-4 font-medium text-white">
                App Coming Soon
              </button>

              <button className="rounded-xl border border-slate-300 px-8 py-4 font-medium">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}