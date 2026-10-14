import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export default function PartnerProgramHero() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">

        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex rounded-full bg-[#72B543]/10 px-5 py-2 text-sm font-medium text-[#72B543]">
  PARTNER PROGRAM
</span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-6xl">
  <span className="text-slate-900">About UrbanLoop </span>
  <span className="text-[#72B543]">Partner Program</span>
</h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
  As an UrbanLoop Partner, you become part of a trusted ecosystem that offers
  transparent pricing, fair earnings, digital payment settlements, performance
  rewards, business growth opportunities and long-term sustainability benefits.
  Register now and become a valued UrbanLoop Partner in India's growing circular
  economy, where every recyclable material creates value, every partnership
  drives positive environmental impact, and every contribution helps build a
  cleaner, greener and more sustainable future for generations to come.
</p>

<div className="mt-10">
  <Link
  href="#partner-programs"
  className="inline-flex items-center gap-2 rounded-xl bg-[#C8E8A8] px-8 py-4 text-center font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-white hover:shadow-lg"
>
  Register Now

  <ArrowRight className="h-5 w-5" />
</Link>
</div>
        </div>

      </div>

    </section>
  );
}