import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Recycle,
  Truck,
} from "lucide-react";

interface SustainabilityPartner {
  title: string;
  description: string;
  categories: string[];
  buttonText: string;
  href: string;
}

interface OperationalPartner {
  title: string;
  description: string;
  benefits: string[];
  buttonText: string;
  href: string;
  icon: React.ElementType;
}

const sustainabilityPartner: SustainabilityPartner = {
  title: "Become a Sustainability Partner",

  description:
  "Sustainability Partners are at the heart of the UrbanLoop ecosystem. Whether you are a household, business, corporate office, educational institution or healthcare organisation, UrbanLoop enables you to convert recyclable materials into real value through transparent pricing, instant earnings and exclusive rewards. Every successful pickup credits your UrbanLoop Wallet, allowing you to redeem your earnings on groceries, medicines, beauty & personal care products, household essentials and many more partner offers, or simply retain your balance for future use. Join UrbanLoop to earn more from your recyclables while contributing to a cleaner, smarter and more sustainable circular economy.",

  categories: [
    "Residential",
    "Business",
    "Corporate Offices",
    "Educational Institution",
    "Healthcare Institution",
  ],

  buttonText: "Choose Your Category",

  href: "/join-urbanloop/categories",
};

const operationalPartners: OperationalPartner[] = [
  {
    title: "Collection Partner",

    description:
      "Join UrbanLoop as a Collection Partner and expand your business by receiving verified collection requests directly through the platform. Increase your earnings with transparent pricing, recurring pickups, higher material volumes and reward-based incentives, while eliminating the uncertainty of traditional collection networks. Build long-term customer relationships and grow your business as an integral part of UrbanLoop's circular economy.",

    benefits: [
      "Receive verified pickup requests",
      "Increase earnings through better material pricing",
      "Recurring collections for steady income",
      "Transparent payments and digital tracking",
      "Performance rewards and business growth",
      "Expand your service coverage with UrbanLoop",
    ],

    buttonText: "Become a Collection Partner",

    href: "/partner-program/collection-partner",

    icon: Recycle,
  },

  {
    title: "Transportation Partner",

    description:
      "Become an UrbanLoop Transportation Partner and generate consistent revenue by transporting recyclable materials between collection partners, businesses and recycling facilities. Receive scheduled transport assignments, maximize vehicle utilization, reduce idle time and earn through transparent payments while supporting an efficient circular economy supply chain.",

    benefits: [
      "Regular transport assignments",
      "Higher vehicle utilization",
      "Transparent payments",
      "Route optimization support",
      "Business expansion opportunities",
      "Performance-based incentives",
    ],

    buttonText: "Become a Transportation Partner",

    href: "/partner-program/transportation-partner",
    icon: Truck,
  },
  {
    title: "Recycling Partner",

    description:
      "Partner with UrbanLoop to secure a consistent supply of quality recyclable materials from verified sources. Increase plant utilization, reduce sourcing costs and build a reliable procurement network through transparent transactions, digital traceability and long-term partnerships that strengthen India's circular economy.",

    benefits: [
      "Consistent Material Supply",
      "Verified Network",
      "Lower procurement costs",
      "Digital traceability",
      "Long-term supply partnerships",
      "Sustainable business growth",
    ],

    buttonText: "Become a Recycling Partner",

    href: "/partner-program/recycler-partner",

    icon: Factory,
  },
];

interface OperationalCardProps {
  partner: OperationalPartner;
}

function OperationalCard({ partner }: OperationalCardProps) {
  const Icon = partner.icon;

  return (
    <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-xl">

      <div className="mb-6 flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

          <Icon className="h-7 w-7 text-[#72B543]" />

        </div>

        <h3 className="text-xl font-bold text-slate-900">
          {partner.title}
        </h3>

      </div>

      <p className="mb-6 leading-7 text-slate-600">
        {partner.description}
      </p>

      <div className="mb-8 space-y-3">

        {partner.benefits.map((benefit) => (
          <div
            key={benefit}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-[#72B543]" />

            <span className="text-sm text-slate-700">
              {benefit}
            </span>

          </div>
        ))}

        </div>

      <Link
  href={partner.href}
  className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D7EFC2] px-6 py-3 text-[15px] font-semibold text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
>
        {partner.buttonText}

        <ArrowRight className="h-5 w-5" />

      </Link>

    </div>
  );
}

export default function PartnerCards() {
  return (
    <section
  id="partner-programs"
  className="scroll-mt-20 py-15"
>
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Choose Your UrbanLoop Partnership
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Whether you generate recyclable materials or provide collection,
            transportation or recycling services, UrbanLoop has a partnership
            designed specifically for you.
          </p>

        </div>

        {/* =========================
            FEATURED SUSTAINABILITY PARTNER
        ========================== */}

        <div className="mb-16 overflow-hidden rounded-3xl border border-green-200 bg-gradient-to-r from-green-50 via-white to-green-50 shadow-lg">

          <div className="grid items-center gap-10 p-10 lg:grid-cols-[2fr_1fr]">

            <div>

              <div className="mb-6 flex items-center gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]">

                  <Building2 className="h-8 w-8 text-white" />

                </div>

                <div>

                  <p className="text-sm font-semibold uppercase tracking-wider text-[#72B543]">
                    Sustainability Partner
                  </p>

                  <h3 className="text-3xl font-bold text-slate-900">
                    {sustainabilityPartner.title}
                  </h3>

                </div>

              </div>

              <p className="text-lg leading-7 text-slate-600">
                {sustainabilityPartner.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {sustainabilityPartner.categories.map((category) => (

                  <div
                    key={category}
                    className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-sm"
                  >

                    <CheckCircle2 className="h-5 w-5 text-[#72B543]" />

                    <span className="font-medium text-slate-700">
                      {category}
                    </span>

                  </div>

                ))}

              </div>

              </div>

            <div>

              <div className="rounded-2xl bg-white p-8 shadow-md">

                <h4 className="text-xl font-bold text-slate-900">
                  Ready to Start?
                </h4>

                <p className="mt-4 leading-7 text-slate-600">
                  Choose your category and become part of India's growing
                  circular economy through UrbanLoop.
                </p>

                <Link
  href={sustainabilityPartner.href}
  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D7EFC2] px-6 py-4 font-semibold text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
>
                  {sustainabilityPartner.buttonText}

                  <ArrowRight className="h-5 w-5" />

                </Link>

                </div>

            </div>

          </div>

        </div>

        {/* =========================
    OPERATIONAL PARTNERS
========================== */}

<div
  id="join-partners"
  className="scroll-mt-36 grid gap-8 lg:grid-cols-3"
>

  {operationalPartners.map((partner) => (

    <OperationalCard
      key={partner.title}
      partner={partner}
    />

  ))}

</div>

          </div>
    </section>
  );
}