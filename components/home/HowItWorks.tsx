import {
  CalendarDays,
  Truck,
  Recycle,
  Wallet,
  Sprout,
  Trees,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: CalendarDays,
      title: "Schedule Pickup",
      description:
        "Book a pickup for dry waste, wet waste or e-waste through UrbanLoop.",
    },
    {
      number: "02",
      icon: Truck,
      title: "Collection Partner Visits",
      description:
        "Verified UrbanLoop partners collect waste from households, apartments, businesses and institutions.",
    },
    {
      number: "03",
      icon: Recycle,
      title: "Waste Sorting & Verification",
      description:
        "Materials are weighed transparently and routed to the right recycling or composting channel.",
    },
    {
      number: "04",
      icon: Wallet,
      title: "Earn Rewards",
      description:
        "Receive instant payment or store earnings in your UrbanLoop wallet.",
    },
    {
      number: "05",
      icon: Sprout,
      title: "Responsible Processing",
      description:
        "Dry waste is recycled, wet waste is composted and e-waste is responsibly handled.",
    },
    {
      number: "06",
      icon: Trees,
      title: "Track Your Impact",
      description:
        "Monitor waste diverted, rewards earned, trees planted and environmental impact.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-[#F8FBF4] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Simple. Transparent. Rewarding.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            UrbanLoop makes responsible waste management easy while rewarding
            individuals, communities and businesses for contributing to the
            circular economy.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-2xl bg-[#72B543]/10 p-4 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#72B543]/15">
                  <step.icon
  size={52}
  strokeWidth={1.8}
  className="text-[#72B543] transition-transform duration-300 group-hover:scale-110"
/>
                </div>

                <span className="text-4xl font-bold text-[#72B543]/15">
                  {step.number}
                </span>
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}