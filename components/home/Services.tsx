import {
  Recycle,
  Sprout,
  Laptop,
  Building2,
  BriefcaseBusiness,
  Trees,
} from "lucide-react";

export default function Services() {
  const services = [
  {
    title: "Dry Waste Collection",
    icon: Recycle,
    description:
      "Paper, plastic, metal, cardboard, glass and other recyclable materials collected and processed responsibly.",
  },
  {
    title: "Wet Waste Composting",
    icon: Sprout,
    description:
      "Organic waste is converted into nutrient-rich compost, reducing landfill burden and creating value.",
  },
  {
    title: "E-Waste Management",
    icon: Laptop,
    description:
      "Safe collection and environmentally responsible disposal of electronic waste and devices.",
  },
  {
    title: "Apartment Waste Programs",
    icon: Building2,
    description:
      "End-to-end waste management solutions designed for apartment complexes and gated communities.",
  },
  {
    title: "Business Recycling Solutions",
    icon: BriefcaseBusiness,
    description:
      "Sustainability programs for offices, retailers, institutions and commercial establishments.",
  },
  {
    title: "Tree Plantation & Impact",
    icon: Trees,
    description:
      "Track environmental contributions through tree plantation, carbon reduction and community impact.",
  },
];

  return (
    <section id="services" className="scroll-mt-28 bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Sustainable Solutions For Every Waste Stream
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            UrbanLoop provides comprehensive waste management solutions for
            households, apartments, businesses and institutions while creating
            measurable environmental impact.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]"
            >
              <div className="mb-6 inline-flex rounded-2xl bg-[#72B543]/10 p-4 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#72B543]/15">
  <service.icon
    size={52}
    strokeWidth={1.8}
    className="text-[#72B543] transition-transform duration-300 group-hover:scale-110"
  />
</div>

              <h3 className="mb-4 text-2xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}