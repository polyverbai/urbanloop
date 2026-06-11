export default function Testimonials() {
  const testimonials = [
    {
      name: "Residential Community",
      role: "Apartment Association",
      quote:
        "UrbanLoop helped us streamline waste management while rewarding residents for responsible recycling.",
    },
    {
      name: "Local Business Owner",
      role: "Retail Establishment",
      quote:
        "The platform made recycling effortless and helped us meet our sustainability goals.",
    },
    {
      name: "Collection Partner",
      role: "UrbanLoop Partner",
      quote:
        "UrbanLoop provided technology, visibility and a consistent way to grow my collection network.",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Building Trust Through Impact
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Communities, businesses and partners are joining UrbanLoop to
            create a cleaner and more sustainable future.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="mb-6 text-4xl">💬</div>

              <p className="leading-relaxed text-slate-600">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}