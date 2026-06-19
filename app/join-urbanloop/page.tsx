"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

import {
  Home,
  Building2,
  Briefcase,
  GraduationCap,
  Landmark,
  ArrowRight,
Building,
UserPlus,
  ShieldCheck,
  Settings,
  CalendarDays,
  Recycle,
  Trees,
  FileText,
Package,
Wrench,
Monitor,
Archive,
Armchair,
Sprout,
Truck,
ChevronDown,
Handshake,
} from "lucide-react";

export default function JoinUrbanLoopPage() {
const [openFaq, setOpenFaq] = useState<number | null>(0);    
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
                  JOIN URBANLOOP
                </span>

                <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                  Join The{" "}
                  <span className="text-[#72B543]">
                    Circular Economy Movement
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600">
                  Whether you are an individual household,
                  apartment community, business or institution,
                  UrbanLoop provides tailored solutions to recover
                  value from materials and create measurable
                  environmental impact.
                </p>

                <div className="mt-10">
                  <Link
  href="/join-urbanloop/categories"
  className="rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(114,181,67,0.40)]"
>
  Choose Your Category
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
                      UrbanLoop Membership Network
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      Connecting generators, communities and institutions
                    </p>
                  </div>

                  <div className="hidden md:flex items-center justify-between gap-2">

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <Home size={26} className="text-[#72B543]" />
                      </div>
                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Households
                      </p>
                    </div>

                    <ArrowRight className="text-[#72B543]" />

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <Building2 size={26} className="text-[#72B543]" />
                      </div>
                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Communities
                      </p>
                    </div>

                    <ArrowRight className="text-[#72B543]" />

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <Briefcase size={26} className="text-[#72B543]" />
                      </div>
                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Businesses
                      </p>
                    </div>

                    <ArrowRight className="text-[#72B543]" />

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <GraduationCap size={26} className="text-[#72B543]" />
                      </div>
                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Education
                      </p>
                    </div>

                    <ArrowRight className="text-[#72B543]" />

                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
                        <Landmark size={26} className="text-[#72B543]" />
                      </div>
                      <p className="mt-3 text-xs font-medium text-slate-700">
                        Institutions
                      </p>
                    </div>

                  </div>

                  <div className="grid grid-cols-2 gap-4 md:hidden">

                    <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                      <Home size={26} className="mx-auto text-[#72B543]" />
                      <p className="mt-2 text-sm font-medium">
                        Households
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                      <Building2 size={26} className="mx-auto text-[#72B543]" />
                      <p className="mt-2 text-sm font-medium">
                        Communities
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                      <Briefcase size={26} className="mx-auto text-[#72B543]" />
                      <p className="mt-2 text-sm font-medium">
                        Businesses
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
                      <GraduationCap size={26} className="mx-auto text-[#72B543]" />
                      <p className="mt-2 text-sm font-medium">
                        Education
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

{/* Your UrbanLoop Journey */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        MEMBER JOURNEY
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Your UrbanLoop Journey
        <span className="block text-[#72B543]">
          From Registration To Impact
        </span>
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Joining UrbanLoop is simple. Register under your category,
        complete verification, schedule recoveries and begin
        tracking both financial returns and environmental impact.
      </p>

    </div>

    {/* Desktop Journey */}
    <div className="hidden lg:flex items-center justify-between gap-3">

      {/* Step 1 */}
      <div className="flex flex-col items-center text-center max-w-[140px]">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
  <UserPlus
    size={30}
    strokeWidth={1.8}
    className="text-[#72B543]"
  />
</div>
        <h3 className="mt-4 font-semibold text-slate-900">
          Register
        </h3>
        <p className="mt-2 text-xs text-slate-500">
          Create your UrbanLoop account
        </p>
      </div>

      <div className="text-2xl font-bold text-[#72B543]">→</div>

      {/* Step 2 */}
      <div className="flex flex-col items-center text-center max-w-[140px]">
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
    <ShieldCheck
      size={30}
      strokeWidth={1.8}
      className="text-[#72B543]"
    />
  </div>

  <h3 className="mt-4 font-semibold text-slate-900">
    Verification
  </h3>

  <p className="mt-2 text-xs text-slate-500">
    Verify profile and location
  </p>
</div>
      <div className="text-2xl font-bold text-[#72B543]">→</div>

      {/* Step 3 */}
      <div className="flex flex-col items-center text-center max-w-[140px]">
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
    <Settings
      size={30}
      strokeWidth={1.8}
      className="text-[#72B543]"
    />
  </div>

  <h3 className="mt-4 font-semibold text-slate-900">
    Profile Setup
  </h3>

  <p className="mt-2 text-xs text-slate-500">
    Configure preferences
  </p>
</div>
      <div className="text-2xl font-bold text-[#72B543]">→</div>

      {/* Step 4 */}
      <div className="flex flex-col items-center text-center max-w-[140px]">
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
    <CalendarDays
      size={30}
      strokeWidth={1.8}
      className="text-[#72B543]"
    />
  </div>

  <h3 className="mt-4 font-semibold text-slate-900">
    Schedule
  </h3>

  <p className="mt-2 text-xs text-slate-500">
    Book convenient pickups
  </p>
</div>
      <div className="text-2xl font-bold text-[#72B543]">→</div>

      {/* Step 5 */}
      <div className="flex flex-col items-center text-center max-w-[140px]">
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
    <Recycle
      size={30}
      strokeWidth={1.8}
      className="text-[#72B543]"
    />
  </div>

  <h3 className="mt-4 font-semibold text-slate-900">
    Recovery
  </h3>

  <p className="mt-2 text-xs text-slate-500">
    Materials collected and recovered
  </p>
</div>
      <div className="text-2xl font-bold text-[#72B543]">→</div>

      {/* Step 6 */}
      <div className="flex flex-col items-center text-center max-w-[140px]">
  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
    <Trees
      size={30}
      strokeWidth={1.8}
      className="text-[#72B543]"
    />
  </div>

  <h3 className="mt-4 font-semibold text-slate-900">
    Impact
  </h3>

  <p className="mt-2 text-xs text-slate-500">
    Track rewards and sustainability impact
  </p>
</div>
</div>

    {/* Mobile Journey */}
<div className="grid gap-4 sm:grid-cols-2 lg:hidden">

  {[
    { icon: UserPlus, title: "Register" },
    { icon: ShieldCheck, title: "Verification" },
    { icon: Settings, title: "Profile Setup" },
    { icon: CalendarDays, title: "Schedule Pickup" },
    { icon: Recycle, title: "Recovery" },
    { icon: Trees, title: "Rewards & Impact" },
  ].map((step) => {
    const Icon = step.icon;

    return (
      <div
        key={step.title}
        className="rounded-3xl border border-[#DDE8D0] bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#72B543] hover:shadow-lg"
      >
        <Icon
          size={32}
          strokeWidth={1.8}
          className="mx-auto text-[#72B543]"
        />

        <h3 className="mt-3 font-semibold text-slate-900">
          {step.title}
        </h3>
      </div>
    );
  })}

</div>

  </div>
</section>

{/* Materials Accepted */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        MATERIAL CATEGORIES
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Materials Accepted
        <span className="block text-[#72B543]">
          For Recovery & Recycling
        </span>
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop supports a wide range of household,
        commercial, institutional and industrial material streams.
      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {/* Paper */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <FileText size={34} className="mb-4 text-[#72B543] transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-bold text-slate-900">Paper & Cardboard</h3>
        <p className="mt-3 text-sm text-slate-600">
          Newspapers, books, magazines, office paper and cardboard.
        </p>
      </div>

      {/* Plastic */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Package size={34} className="mb-4 text-[#72B543] transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-bold text-slate-900">Plastic</h3>
        <p className="mt-3 text-sm text-slate-600">
          PET bottles, HDPE containers, packaging and household plastics.
        </p>
      </div>

      {/* Metal */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Wrench size={34} className="mb-4 text-[#72B543] transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-bold text-slate-900">Metals</h3>
        <p className="mt-3 text-sm text-slate-600">
          Iron, steel, aluminium, copper, brass and mixed metals.
        </p>
      </div>

      {/* E-Waste */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Monitor size={34} className="mb-4 text-[#72B543] transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-bold text-slate-900">E-Waste</h3>
        <p className="mt-3 text-sm text-slate-600">
          Computers, laptops, printers, cables and accessories.
        </p>
      </div>

      {/* Appliances */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Archive size={34} className="mb-4 text-[#72B543] transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-bold text-slate-900">Appliances</h3>
        <p className="mt-3 text-sm text-slate-600">
          Refrigerators, washing machines, TVs and air conditioners.
        </p>
      </div>

      {/* Furniture */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Armchair size={34} className="mb-4 text-[#72B543] transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-bold text-slate-900">Furniture</h3>
        <p className="mt-3 text-sm text-slate-600">
          Wooden, office, plastic and metal furniture.
        </p>
      </div>

      {/* Organic */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Sprout size={34} className="mb-4 text-[#72B543] transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-bold text-slate-900">Organic Waste</h3>
        <p className="mt-3 text-sm text-slate-600">
          Food waste, garden waste and compostable materials.
        </p>
      </div>

      {/* Vehicles */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:bg-[#F8FBF4] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Truck size={34} className="mb-4 text-[#72B543] transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-bold text-slate-900">
          Vehicles & Assets
        </h3>
        <p className="mt-3 text-sm text-slate-600">
          Two-wheelers, cars, commercial vehicles and industrial assets.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Category Specific Benefits */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        TAILORED BENEFITS
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        How UrbanLoop
        <span className="block text-[#72B543]">
          Creates Value
        </span>
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop provides specialized recovery programs,
        reporting capabilities and sustainability initiatives
        tailored to your category and material streams.
      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {/* Household */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Home
          size={34}
          className="mb-5 text-[#72B543] transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="text-xl font-bold text-slate-900">
          Individual Households
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-slate-600">
          <li>✓ Doorstep pickup services</li>
          <li>✓ Better recovery value</li>
          <li>✓ Digital transaction records</li>
          <li>✓ Rewards & recognition programs</li>
        </ul>
      </div>

      {/* Apartments */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Building2
          size={34}
          className="mb-5 text-[#72B543] transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="text-xl font-bold text-slate-900">
          Apartments & Communities
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-slate-600">
          <li>✓ Community collection drives</li>
          <li>✓ Resident participation programs</li>
          <li>✓ Impact reporting</li>
          <li>✓ Waste diversion initiatives</li>
        </ul>
      </div>

      {/* Business */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Briefcase
          size={34}
          className="mb-5 text-[#72B543] transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="text-xl font-bold text-slate-900">
          Businesses
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-slate-600">
          <li>✓ Bulk material recovery</li>
          <li>✓ Operational efficiency</li>
          <li>✓ Material tracking</li>
          <li>✓ Cost optimization</li>
        </ul>
      </div>

      {/* Corporate */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Building
          size={34}
          className="mb-5 text-[#72B543] transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="text-xl font-bold text-slate-900">
          Corporate Offices
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-slate-600">
          <li>✓ ESG reporting support</li>
          <li>✓ Asset recovery programs</li>
          <li>✓ Sustainability dashboards</li>
          <li>✓ Compliance visibility</li>
        </ul>
      </div>

      {/* Education */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <GraduationCap
          size={34}
          className="mb-5 text-[#72B543] transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="text-xl font-bold text-slate-900">
          Educational Institutions
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-slate-600">
          <li>✓ Campus sustainability programs</li>
          <li>✓ Student engagement initiatives</li>
          <li>✓ Environmental awareness campaigns</li>
          <li>✓ Impact measurement</li>
        </ul>
      </div>

      {/* Institutions */}
      <div className="group rounded-[28px] border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_20px_40px_rgba(114,181,67,0.18)]">
        <Landmark
          size={34}
          className="mb-5 text-[#72B543] transition-transform duration-300 group-hover:scale-110"
        />

        <h3 className="text-xl font-bold text-slate-900">
          Hospitals & Institutions
        </h3>

        <ul className="mt-5 space-y-3 text-sm text-slate-600">
          <li>✓ Structured recovery workflows</li>
          <li>✓ Compliance support</li>
          <li>✓ Reporting visibility</li>
          <li>✓ Responsible recovery channels</li>
        </ul>
      </div>

    </div>

  </div>
</section>

{/* Frequently Asked Questions */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-5xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        FAQ
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Frequently Asked
        <span className="block text-[#72B543]">
          Questions
        </span>
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Everything you need to know before becoming part of the
        UrbanLoop circular economy ecosystem.
      </p>

    </div>

    <div className="space-y-4">

      {[
        {
          q: "Is registration free?",
          a: "Yes. Registration with UrbanLoop is completely free for households, apartment communities, institutions, businesses and corporate offices.",
        },
        {
          q: "How do I receive payment for my materials?",
          a: "Payments are determined based on material category, quantity, quality and applicable recovery rates through approved UrbanLoop channels.",
        },
        {
          q: "Can I schedule recurring pickups?",
          a: "Yes. Communities, institutions, businesses and corporate offices can establish recurring collection schedules for ongoing recovery programs.",
        },
        {
          q: "What materials does UrbanLoop accept?",
          a: "UrbanLoop supports paper, cardboard, plastics, metals, e-waste, appliances, furniture, organic waste, vehicles and other approved recovery streams.",
        },
        {
          q: "Do you support apartments and gated communities?",
          a: "Yes. UrbanLoop offers dedicated programs for apartment communities, RWAs and gated communities including reporting and engagement initiatives.",
        },
        {
          q: "Do you provide sustainability and impact reports?",
          a: "Yes. UrbanLoop provides recovery summaries, diversion metrics and environmental impact reporting based on category and participation level.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[24px] border border-[#DDE8D0] bg-white shadow-sm transition-all duration-300"
        >

          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="flex w-full items-center justify-between px-8 py-6 text-left"
          >
            <span className="text-lg font-semibold text-slate-900">
              {faq.q}
            </span>

            <ChevronDown
              size={22}
              className={`text-[#72B543] transition-transform duration-300 ${
                openFaq === index ? "rotate-180" : ""
              }`}
            />
          </button>

          {openFaq === index && (
            <div className="border-t border-[#E6EFE0] px-8 py-6">
              <p className="leading-relaxed text-slate-600">
                {faq.a}
              </p>
            </div>
          )}

        </div>
      ))}

    </div>

  </div>
</section>

{/* Final CTA */}
<section className="bg-gradient-to-br from-[#72B543] to-[#5FA032] py-24">
  <div className="mx-auto max-w-5xl px-6 text-center">

    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
      <Handshake
        size={40}
        strokeWidth={1.8}
        className="text-white"
      />
    </div>

    <h2 className="mt-8 text-4xl font-bold text-white md:text-5xl">
      Let's Build A More Valuable
      <span className="block">
        Circular Economy Together
      </span>
    </h2>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/90">
      Whether you generate recyclable materials or manage
      large recovery volumes, UrbanLoop helps connect value,
      transparency and sustainability across the recovery ecosystem.
    </p>

    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

      <Link
        href="#categories"
        className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#72B543] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        Start Registration
        <ArrowRight size={18} />
      </Link>

      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
      >
        Contact UrbanLoop
      </Link>

    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
}