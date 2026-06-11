import {
  Wallet,
  Scale,
  Sprout,
  Recycle,
  Users,
  RefreshCw,
} from "lucide-react";

export default function WhyUrbanLoop() {
  const features = [
    {
      title: "Instant Rewards",
      icon: Wallet,
      description:
        "Earn money or wallet credits immediately for every eligible waste pickup.",
    },
    {
      title: "Complete Transparency",
      icon: Scale,
      description:
        "Digital weighing, transparent pricing and full visibility into every transaction.",
    },
    {
      title: "Environmental Impact",
      icon: Sprout,
      description:
        "Track trees planted, carbon reduction and waste diverted from landfills.",
    },
    {
      title: "Multi-Waste Collection",
      icon: Recycle,
      description:
        "Dry waste, wet waste and e-waste managed through a single platform.",
    },
    {
      title: "Community Driven",
      icon: Users,
      description:
        "Designed for households, apartments, businesses and institutions.",
    },
    {
      title: "Powered By Circular Economy",
      icon: RefreshCw,
      description:
        "Transform waste into resources, rewards and measurable sustainability outcomes.",
    },
  ];

  return (
    <section
  id="why-urbanloop"
  className="scroll-mt-28 bg-[#F8FBF4] py-28"
>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            WHY URBANLOOP
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            More Than Waste Collection
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            UrbanLoop combines recycling, rewards, sustainability and community
            participation into a single circular economy ecosystem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#72B543]/10 p-4 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#72B543]/15">
                <feature.icon
                  size={52}
  strokeWidth={1.8}
  className="text-[#72B543] transition-transform duration-300 group-hover:scale-110"
/>
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}