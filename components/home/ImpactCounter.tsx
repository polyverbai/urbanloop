export default function ImpactCounter() {
  const stats = [
    {
      value: "25,000+",
      label: "Kg Recycled",
      description: "Dry waste responsibly collected and recycled.",
    },
    {
      value: "5,000+",
      label: "Trees Planted",
      description: "Environmental impact created through community action.",
    },
    {
      value: "1,200+",
      label: "Active Households",
      description: "Families participating in the circular economy.",
    },
    {
      value: "250+",
      label: "Collection Partners",
      description: "Verified local partners driving change on the ground.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            OUR IMPACT
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Creating Measurable Environmental Impact
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Every pickup, every kilogram recycled, and every household
            participating contributes to a cleaner and more sustainable future.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543]/30 hover:shadow-xl"
            >
              <h3 className="text-4xl font-bold text-[#72B543] md:text-5xl">
                {stat.value}
              </h3>

              <p className="mt-4 text-lg font-semibold text-slate-900">
                {stat.label}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}