import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnerCTA() {
  return (
    <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#157A24] via-[#4E9A2E] to-[#8BC34A] px-10 py-16 text-center shadow-[0_30px_80px_rgba(21,122,36,0.25)] md:px-16">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold text-white">
            Join the UrbanLoop Ecosystem
          </h2>

          <p className="mt-8 text-lg leading-9 text-green-50">
            Every successful recycling ecosystem depends on collaboration.
            Whether you generate recyclable materials or provide collection,
            transportation or recycling services, UrbanLoop offers a structured
            partnership model designed to connect every stakeholder through one
            unified technology platform.
          </p>

          <p className="mt-6 text-lg leading-9 text-green-50">
            Choose the partnership that best represents your organisation and
            become part of a smarter, more transparent and sustainable circular
            economy.
          </p>

          <Link
  href="/join-urbanloop/categories"
  className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#C8E8A8] px-8 py-4 font-semibold text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-white hover:shadow-lg"
>
  Explore Partnership Opportunities
  <ArrowRight className="h-5 w-5" />
</Link>

        </div>

      </div>
    </div>
  );
}