import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

import {
  Users,
  RefreshCw,
  Truck,
  Factory,
  Trees,
  ArrowRight,
  Wallet,
  Scale,
  BarChart3,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Store,
  Target,
  Building2,
Briefcase,
GraduationCap,
Recycle,
} from "lucide-react";

export default function PartnerProgramPage() {
  return (
    <>
      <Header />

      <main className="bg-white">

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF7D7] via-white to-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* Left Content */}
              <div>

                <span className="inline-flex rounded-full bg-[#72B543]/10 px-5 py-2 text-sm font-medium text-[#72B543]">
                  PARTNER PROGRAM
                </span>

                <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                  Build A{" "}
                  <span className="text-[#72B543]">
                    Circular Economy
                  </span>{" "}
                  Together
                </h1>

                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600">
                  UrbanLoop brings together communities,
                  businesses, institutions and recovery partners
                  to create a transparent ecosystem that transforms
                  waste into economic and environmental value.
                </p>

                <div className="mt-10">
                  <Link
  href="/join-urbanloop"
  className="inline-flex rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(114,181,67,0.40)]"
>
  Explore Partnership Opportunities
</Link>
                </div>

              </div>

              {/* Right Visual */}
              <div className="relative flex justify-center">

                <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-[#72B543]/20 blur-3xl"></div>

                <div className="absolute right-10 bottom-16 h-56 w-56 rounded-full bg-[#2A6FA3]/15 blur-3xl"></div>

                <div className="relative w-full max-w-[620px] rounded-[36px] border border-[#DDE8D0] bg-white p-8 shadow-[0_25px_60px_rgba(15,76,129,0.12)]">

                  <div className="mb-8 text-center">
                    <h3 className="text-xl font-bold text-slate-900">
                      UrbanLoop Ecosystem
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Connecting communities and recovery partners
                    </p>
                  </div>

                  {/* Desktop Workflow */}
                  <div className="hidden md:flex items-center justify-between gap-2">

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <Users
                          size={26}
                          strokeWidth={1.8}
                          className="text-[#72B543]"
                        />
                      </div>

                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Communities
                      </p>
                    </div>

                    <ArrowRight className="text-[#72B543]" />

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <RefreshCw
                          size={26}
                          strokeWidth={1.8}
                          className="text-[#72B543]"
                        />
                      </div>

                      <p className="mt-3 text-xs font-medium text-slate-700">
                        UrbanLoop
                      </p>
                    </div>

                    <ArrowRight className="text-[#72B543]" />

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <Truck
                          size={26}
                          strokeWidth={1.8}
                          className="text-[#72B543]"
                        />
                      </div>

                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Recovery
                      </p>
                    </div>

                    <ArrowRight className="text-[#72B543]" />

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <Factory
                          size={26}
                          strokeWidth={1.8}
                          className="text-[#72B543]"
                        />
                      </div>

                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Recyclers
                      </p>
                    </div>

                    <ArrowRight className="text-[#72B543]" />

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <Trees
                          size={26}
                          strokeWidth={1.8}
                          className="text-[#72B543]"
                        />
                      </div>

                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Impact
                      </p>
                    </div>

                  </div>

                  {/* Mobile Workflow */}
                  <div className="grid grid-cols-2 gap-4 md:hidden">

                    <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                      <Users size={26} className="mx-auto text-[#72B543]" />
                      <p className="mt-2 text-sm font-medium">
                        Communities
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                      <RefreshCw size={26} className="mx-auto text-[#72B543]" />
                      <p className="mt-2 text-sm font-medium">
                        UrbanLoop
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                      <Truck size={26} className="mx-auto text-[#72B543]" />
                      <p className="mt-2 text-sm font-medium">
                        Recovery
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                      <Factory size={26} className="mx-auto text-[#72B543]" />
                      <p className="mt-2 text-sm font-medium">
                        Recyclers
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Why Partner With UrbanLoop */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        WHY PARTNER WITH URBANLOOP
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        A Better Alternative To Traditional Recovery Channels
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop combines technology, transparency,
        value recovery and ecosystem partnerships to
        create benefits for both material generators
        and recovery partners.
      </p>

    </div>

    <div className="grid gap-10 lg:grid-cols-2">

      {/* Community & Institutional Partners */}
      <div className="rounded-[36px] border border-[#DDE8D0] bg-white p-8 shadow-sm">

        <h3 className="mb-8 text-2xl font-bold text-slate-900">
          Communities, Businesses & Institutions
        </h3>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Traditional */}
          <div className="rounded-2xl bg-[#FFF5F5] p-6">
            <h4 className="mb-5 font-semibold text-red-600">
              Traditional Approach
            </h4>

            <div className="space-y-3">

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  Limited material categories
                </span>
              </div>

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  No pricing transparency
                </span>
              </div>

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  No digital records
                </span>
              </div>

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  No impact tracking
                </span>
              </div>

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  No community rewards
                </span>
              </div>

            </div>
          </div>

          {/* UrbanLoop */}
          <div className="rounded-2xl bg-[#F8FBF4] p-6">
            <h4 className="mb-5 font-semibold text-[#72B543]">
              UrbanLoop Ecosystem
            </h4>

            <div className="space-y-3">

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  Transparent value recovery
                </span>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  Multiple material categories
                </span>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  Digital collection records
                </span>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  Environmental impact tracking
                </span>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  Community engagement programs
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Recovery Partners */}
      <div className="rounded-[36px] border border-[#DDE8D0] bg-white p-8 shadow-sm">

        <h3 className="mb-8 text-2xl font-bold text-slate-900">
          Recovery Partners
        </h3>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-[#FFF5F5] p-6">
            <h4 className="mb-5 font-semibold text-red-600">
              Traditional Network
            </h4>

            <div className="space-y-3">

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  Limited customer reach
                </span>
              </div>

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  Manual operations
                </span>
              </div>

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  No branding support
                </span>
              </div>

              <div className="flex gap-3">
                <XCircle size={18} className="text-red-500" />
                <span className="text-sm text-slate-700">
                  Limited growth opportunities
                </span>
              </div>

            </div>
          </div>

          <div className="rounded-2xl bg-[#F8FBF4] p-6">
            <h4 className="mb-5 font-semibold text-[#72B543]">
              UrbanLoop Recovery Network
            </h4>

            <div className="space-y-3">

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  Collection opportunities
                </span>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  UrbanLoop partner branding
                </span>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  Business visibility
                </span>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-[#72B543]" />
                <span className="text-sm text-slate-700">
                  Ecosystem participation
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

{/* Value Creation For Every Partner */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        VALUE CREATION FOR EVERY PARTNER
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        More Value. More Visibility. More Growth.
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop creates benefits across the ecosystem,
        helping communities recover more value from materials
        while enabling recovery partners to access new
        opportunities and expand their businesses.
      </p>

    </div>

    <div className="grid gap-10 lg:grid-cols-2">

      {/* Communities Side */}
      <div className="rounded-[36px] border border-[#DDE8D0] bg-white p-8 shadow-sm">

        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-2xl bg-[#72B543]/10 p-4">
            <Wallet
              size={36}
              strokeWidth={1.8}
              className="text-[#72B543]"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Recover More Value From Resources
            </h3>

            <p className="text-slate-500">
              Communities, Businesses & Institutions
            </p>
          </div>
        </div>

        <div className="space-y-6">

          <div>
            <h4 className="font-semibold text-slate-900">
              Transparent Material Valuation
            </h4>

            <p className="mt-2 text-slate-600">
              Understand how materials are assessed through
              a structured and transparent recovery process.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Multiple Material Categories
            </h4>

            <p className="mt-2 text-slate-600">
              Paper, plastics, metals, appliances,
              e-waste, organic compost and other
              recoverable resources.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              One Recovery Ecosystem
            </h4>

            <p className="mt-2 text-slate-600">
              One platform instead of managing
              multiple collectors for different
              material categories.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Environmental Reporting
            </h4>

            <p className="mt-2 text-slate-600">
              Track recovered materials and
              sustainability outcomes over time.
            </p>
          </div>

        </div>

      </div>

      {/* Recovery Partners Side */}
      <div className="rounded-[36px] border border-[#DDE8D0] bg-white p-8 shadow-sm">

        <div className="mb-8 flex items-center gap-4">
          <div className="rounded-2xl bg-[#72B543]/10 p-4">
            <TrendingUp
              size={36}
              strokeWidth={1.8}
              className="text-[#72B543]"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Grow Your Recovery Business
            </h3>

            <p className="text-slate-500">
              Recovery Partners & Collection Networks
            </p>
          </div>
        </div>

        <div className="space-y-6">

          <div>
            <h4 className="font-semibold text-slate-900">
              Access Larger Material Volumes
            </h4>

            <p className="mt-2 text-slate-600">
              Connect with apartments, institutions
              and businesses generating significant
              recoverable materials.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Increase Market Visibility
            </h4>

            <p className="mt-2 text-slate-600">
              Become part of the UrbanLoop network
              and strengthen credibility with customers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Business Expansion Opportunities
            </h4>

            <p className="mt-2 text-slate-600">
              Participate in a growing ecosystem
              designed to increase recovery opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Digital Ecosystem Access
            </h4>

            <p className="mt-2 text-slate-600">
              Leverage platform-enabled coordination,
              reporting and partner engagement.
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

{/* Partnership Pathways */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        PARTNERSHIP PATHWAYS
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Choose The Partnership Model
        <span className="block text-[#72B543]">
          That Fits You
        </span>
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop offers partnership opportunities for
        both resource generators and recovery partners,
        creating a complete circular economy ecosystem.
      </p>

    </div>

    <div className="grid gap-10 lg:grid-cols-2">

      {/* Join UrbanLoop */}
      <div className="group relative overflow-hidden rounded-[36px] border border-[#DDE8D0] bg-gradient-to-br from-[#F8FBF4] via-white to-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#72B543]/5 blur-3xl"></div>

        <div className="relative">

          <div className="mb-8 flex items-center gap-4">

            <div className="rounded-3xl bg-[#72B543]/10 p-5">
              <Users
                size={42}
                strokeWidth={1.8}
                className="text-[#72B543]"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Join UrbanLoop
              </h3>

              <p className="text-slate-500">
                Communities & Institutions
              </p>
            </div>

          </div>

          {/* Categories */}
          <div className="mb-8 grid grid-cols-2 gap-4">

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Users size={20} className="text-[#72B543]" />
              <span className="text-sm font-medium">
                Households
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Building2 size={20} className="text-[#72B543]" />
              <span className="text-sm font-medium">
                Apartments
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Briefcase size={20} className="text-[#72B543]" />
              <span className="text-sm font-medium">
                Businesses
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <GraduationCap size={20} className="text-[#72B543]" />
              <span className="text-sm font-medium">
                Institutions
              </span>
            </div>

          </div>

          {/* Benefits */}
          <div className="space-y-3">

            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-1 text-[#72B543]" />
              <span>Recover value from materials</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-1 text-[#72B543]" />
              <span>Doorstep collection services</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-1 text-[#72B543]" />
              <span>Digital records & reporting</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-1 text-[#72B543]" />
              <span>Environmental impact tracking</span>
            </div>

          </div>

          <Link
            href="/join-urbanloop"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#72B543] px-6 py-3 font-semibold text-white transition hover:bg-[#5FA032]"
          >
            Explore Join UrbanLoop
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

      {/* Recovery Partners */}
      <div className="group relative overflow-hidden rounded-[36px] border border-[#DDE8D0] bg-gradient-to-br from-white via-white to-[#F8FBF4] p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-[#2A6FA3]/5 blur-3xl"></div>

        <div className="relative">

          <div className="mb-8 flex items-center gap-4">

            <div className="rounded-3xl bg-[#72B543]/10 p-5">
              <Truck
                size={42}
                strokeWidth={1.8}
                className="text-[#72B543]"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Recovery Partners
              </h3>

              <p className="text-slate-500">
                Recovery & Collection Network
              </p>
            </div>

          </div>

          {/* Categories */}
          <div className="mb-8 grid grid-cols-2 gap-4">

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Store size={20} className="text-[#72B543]" />
              <span className="text-sm font-medium">
                Kabadi Shops
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Truck size={20} className="text-[#72B543]" />
              <span className="text-sm font-medium">
                Collectors
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Recycle size={20} className="text-[#72B543]" />
              <span className="text-sm font-medium">
                Aggregators
              </span>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <Factory size={20} className="text-[#72B543]" />
              <span className="text-sm font-medium">
                Recyclers
              </span>
            </div>

          </div>

          {/* Benefits */}
          <div className="space-y-3">

            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-1 text-[#72B543]" />
              <span>Business growth opportunities</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-1 text-[#72B543]" />
              <span>Access to material streams</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-1 text-[#72B543]" />
              <span>UrbanLoop partner branding</span>
            </div>

            <div className="flex gap-3">
              <CheckCircle2 size={18} className="mt-1 text-[#72B543]" />
              <span>Digital ecosystem participation</span>
            </div>

          </div>

          <Link
            href="/recovery-partners"
            className="mt-10 inline-flex items-center gap-2 rounded-xl border border-[#72B543] px-6 py-3 font-semibold text-[#72B543] transition hover:bg-[#F8FBF4]"
          >
            Explore Recovery Partners
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </div>

  </div>
</section>

{/* Ecosystem Statement */}
<section className="py-24 bg-[#F8FBF4]">
  <div className="mx-auto max-w-6xl px-6">

    <div className="relative overflow-hidden rounded-[40px] border border-[#DDE8D0] bg-gradient-to-br from-[#72B543] via-[#6AA83F] to-[#5D9738] p-12 text-white shadow-[0_30px_80px_rgba(114,181,67,0.25)]">

      {/* Glow Effects */}
      <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10 text-center">

        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium">
          URBANLOOP PHILOSOPHY
        </span>

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          Every Resource Matters.
          <span className="block">
            Every Partner Creates Impact.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-white/90">
          UrbanLoop succeeds when communities,
          institutions, businesses and recovery partners
          work together to keep resources in circulation.
          By connecting every stakeholder through one
          ecosystem, we create environmental impact,
          economic value and sustainable growth for all.
        </p>

      </div>

    </div>

  </div>
</section>

{/* Final CTA */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-5xl px-6 text-center">

    <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
      GET STARTED
    </span>

    <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
      Ready To Partner With UrbanLoop?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
      Whether you are looking to recover value from
      materials or grow your recovery business,
      UrbanLoop provides a pathway to participate
      in a transparent circular economy ecosystem.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

      <Link
        href="/join-urbanloop"
        className="rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(114,181,67,0.40)]"
      >
        Join UrbanLoop
      </Link>

      <Link
        href="/recovery-partners"
        className="rounded-xl border border-[#72B543] px-8 py-4 font-semibold text-[#72B543] transition-all duration-300 hover:bg-[#F8FBF4]"
      >
        Recovery Partners
      </Link>

    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
}