import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  Recycle,
  Sprout,
  Laptop,
  Car,
  Package,
  CalendarDays,
  Truck,
  Wallet,
  Trees,
  Factory,
  Tv,
  BookOpen,
  Store,
  UtensilsCrossed,
  Trash2,
  RefreshCw,
  BadgeIndianRupee,
  Scale,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
export default function ServicesPage() {
  return (
    <>
    <Header />

    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF7D7] via-white to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-17">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <span className="inline-flex rounded-full bg-[#72B543]/10 px-5 py-2 text-sm font-medium text-[#72B543]">
                CIRCULAR ECONOMY MARKETPLACE
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
  What Can You Sell To{" "}
  <span className="text-[#72B543]">
    UrbanLoop?
  </span>
</h1>

              <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600">
  From newspapers, books, plastics and metals to refrigerators,
  televisions, vehicles, industrial scrap and organic compost,
  UrbanLoop helps households, communities and businesses
  transform unwanted materials into value, rewards and
  measurable environmental impact.
</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(114,181,67,0.40)]">
                  Schedule Pickup
                </button>

                <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  Become A Partner
                </button>
              </div>
            </div>

            {/* Right Visual */}
{/* Right Visual */}
<div className="relative flex justify-center">
  {/* Green Glow */}
  <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-[#72B543]/20 blur-3xl"></div>

  {/* Blue Glow */}
  <div className="absolute right-10 bottom-16 h-56 w-56 rounded-full bg-[#2A6FA3]/15 blur-3xl"></div>

  <div className="relative w-full max-w-[620px] rounded-[36px] border border-[#DDE8D0] bg-white p-8 shadow-[0_25px_60px_rgba(15,76,129,0.12)]">

    <div className="mb-8 text-center">
      <h3 className="text-xl font-bold text-slate-900">
        UrbanLoop Value Journey
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Turn unwanted materials into value and environmental impact
      </p>
    </div>

    {/* Desktop Workflow */}
    <div className="hidden md:flex items-center justify-between gap-2">

      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Package size={26} strokeWidth={1.8} className="text-[#72B543]" />
        </div>
        <p className="mt-3 text-xs font-medium text-slate-700">
          Materials
        </p>
      </div>

      <div className="text-xl font-bold text-[#72B543]">→</div>

      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <CalendarDays size={26} strokeWidth={1.8} className="text-[#72B543]" />
        </div>
        <p className="mt-3 text-xs font-medium text-slate-700">
          Pickup
        </p>
      </div>

      <div className="text-xl font-bold text-[#72B543]">→</div>

      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Truck size={26} strokeWidth={1.8} className="text-[#72B543]" />
        </div>
        <p className="mt-3 text-xs font-medium text-slate-700">
          Collection
        </p>
      </div>

      <div className="text-xl font-bold text-[#72B543]">→</div>

      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Wallet size={26} strokeWidth={1.8} className="text-[#72B543]" />
        </div>
        <p className="mt-3 text-xs font-medium text-slate-700">
          Rewards
        </p>
      </div>

      <div className="text-xl font-bold text-[#72B543]">→</div>

      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Recycle size={26} strokeWidth={1.8} className="text-[#72B543]" />
        </div>
        <p className="mt-3 text-xs font-medium text-slate-700">
          Recovery
        </p>
      </div>

      <div className="text-xl font-bold text-[#72B543]">→</div>

      <div className="flex flex-col items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Trees size={26} strokeWidth={1.8} className="text-[#72B543]" />
        </div>
        <p className="mt-3 text-xs font-medium text-slate-700">
          Impact
        </p>
      </div>

    </div>

    {/* Mobile Workflow */}
    <div className="grid grid-cols-2 gap-4 md:hidden">

      <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
        <Package size={26} className="mx-auto text-[#72B543]" />
        <p className="mt-2 text-sm font-medium">Materials</p>
      </div>

      <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
        <CalendarDays size={26} className="mx-auto text-[#72B543]" />
        <p className="mt-2 text-sm font-medium">Pickup</p>
      </div>

      <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
        <Truck size={26} className="mx-auto text-[#72B543]" />
        <p className="mt-2 text-sm font-medium">Collection</p>
      </div>

      <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
        <Wallet size={26} className="mx-auto text-[#72B543]" />
        <p className="mt-2 text-sm font-medium">Rewards</p>
      </div>

      <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
        <Recycle size={26} className="mx-auto text-[#72B543]" />
        <p className="mt-2 text-sm font-medium">Recovery</p>
      </div>

      <div className="rounded-2xl bg-[#F8FBF4] p-4 text-center">
        <Trees size={26} className="mx-auto text-[#72B543]" />
        <p className="mt-2 text-sm font-medium">Impact</p>
      </div>

    </div>
</div>
  </div>
</div>
        </div>
      </section>
    </main>

{/* Resources For Recovery */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        RESOURCES FOR RECOVERY
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Materials We Recover & Reintroduce
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop helps households, communities and businesses
        recover value from recyclable materials, appliances,
        e-waste, scrap metals, vehicle components and organic waste.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Recyclables */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <Recycle
          size={52}
          strokeWidth={1.8}
          className="mb-6 text-[#72B543]"
        />

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Recyclables
        </h3>

        <p className="leading-relaxed text-slate-600">
          Newspapers, books, cardboard, plastic, glass and
          other recyclable materials from homes and businesses.
        </p>
      </div>

      {/* Metals & Scrap */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <Factory
          size={52}
          strokeWidth={1.8}
          className="mb-6 text-[#72B543]"
        />

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Metals & Scrap
        </h3>

        <p className="leading-relaxed text-slate-600">
          Iron, steel, copper, aluminium, brass and industrial
          scrap materials recovered responsibly.
        </p>
      </div>

      {/* Appliances */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <Tv
          size={52}
          strokeWidth={1.8}
          className="mb-6 text-[#72B543]"
        />

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Household Appliances
        </h3>

        <p className="leading-relaxed text-slate-600">
          Televisions, refrigerators, washing machines,
          microwaves and other household appliances.
        </p>
      </div>

      {/* E-Waste */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <Laptop
          size={52}
          strokeWidth={1.8}
          className="mb-6 text-[#72B543]"
        />

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          E-Waste
        </h3>

        <p className="leading-relaxed text-slate-600">
          Laptops, computers, mobiles, printers,
          batteries and electronic devices.
        </p>
      </div>

      {/* Automotive */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <Car
          size={52}
          strokeWidth={1.8}
          className="mb-6 text-[#72B543]"
        />

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Automotive Scrap
        </h3>

        <p className="leading-relaxed text-slate-600">
          Cars, two-wheelers, tyres, batteries and
          vehicle components ready for recovery.
        </p>
      </div>

      {/* Compost */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <Sprout
          size={52}
          strokeWidth={1.8}
          className="mb-6 text-[#72B543]"
        />

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Wet Waste & Compost
        </h3>

        <p className="leading-relaxed text-slate-600">
          Vegetable peels, fruit waste, kitchen scraps,
          garden waste and organic compost.
        </p>
      </div>

    </div>
  </div>
</section>

{/* How UrbanLoop Creates Value */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        HOW URBANLOOP CREATES VALUE
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Transforming Waste Into Income & Impact
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop connects households, communities and businesses
        with a transparent circular economy ecosystem that rewards
        responsible resource recovery and sustainable practices.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Card 1 */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Package
            size={34}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Recover Valuable Materials
        </h3>

        <p className="leading-relaxed text-slate-600">
          Identify recyclable materials, appliances,
          e-waste, scrap metals, automotive components
          or organic waste ready for recovery.
        </p>

      </div>

      {/* Card 2 */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Wallet
            size={34}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Earn Fair Value
        </h3>

        <p className="leading-relaxed text-slate-600">
          UrbanLoop offers transparent weighing,
          competitive pricing and rewards for eligible
          materials recovered through the platform.
        </p>

      </div>

      {/* Card 3 */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Recycle
            size={34}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Enable Circular Recovery
        </h3>

        <p className="leading-relaxed text-slate-600">
          Materials are directed towards recycling,
          refurbishment, composting and recovery channels
          to maximize their useful life.
        </p>

      </div>

      {/* Card 4 */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72B543]/10">
          <Trees
            size={34}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Create Lasting Impact
        </h3>

        <p className="leading-relaxed text-slate-600">
          Reduce landfill waste, support resource
          recovery and contribute towards cleaner,
          greener and more sustainable communities.
        </p>

      </div>

    </div>
  </div>
</section>

{/* Compost Ecosystem */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        COMPOST ECOSYSTEM
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        From Kitchen Waste To Organic Value
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop empowers households and communities to convert
        wet waste into nutrient-rich organic compost through
        simple, guided processes that create environmental
        and economic value.
      </p>
    </div>

    {/* Desktop Flow */}
    <div className="hidden lg:flex items-start justify-between gap-4">

      {/* Step 1 */}
      <div className="flex-1 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#72B543]/10">
          <UtensilsCrossed
            size={40}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Kitchen Waste
        </h3>

        <p className="mt-3 text-slate-600">
          Fruit peels, vegetable scraps and biodegradable waste.
        </p>
      </div>

      <div className="pt-10 text-3xl font-bold text-[#72B543]">→</div>

      {/* Step 2 */}
      <div className="flex-1 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#72B543]/10">
          <BookOpen
            size={40}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          UrbanLoop Guidance
        </h3>

        <p className="mt-3 text-slate-600">
          Easy composting methods and practical support.
        </p>
      </div>

      <div className="pt-10 text-3xl font-bold text-[#72B543]">→</div>

      {/* Step 3 */}
      <div className="flex-1 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#72B543]/10">
          <Sprout
            size={40}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Organic Compost
        </h3>

        <p className="mt-3 text-slate-600">
          Transform waste into nutrient-rich organic manure.
        </p>
      </div>

      <div className="pt-10 text-3xl font-bold text-[#72B543]">→</div>

      {/* Step 4 */}
      <div className="flex-1 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#72B543]/10">
          <Store
            size={40}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          UrbanLoop Recovery
        </h3>

        <p className="mt-3 text-slate-600">
          Compost can be sold, exchanged or reused.
        </p>
      </div>

      <div className="pt-10 text-3xl font-bold text-[#72B543]">→</div>

      {/* Step 5 */}
      <div className="flex-1 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#72B543]/10">
          <Trees
            size={40}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mt-5 text-xl font-semibold text-slate-900">
          Greener Communities
        </h3>

        <p className="mt-3 text-slate-600">
          Support gardens, farms and sustainable landscapes.
        </p>
      </div>

    </div>

    {/* Mobile Layout */}
    <div className="grid gap-6 lg:hidden">

      {[
        {
          icon: UtensilsCrossed,
          title: "Kitchen Waste",
          text: "Fruit peels, vegetable scraps and biodegradable waste.",
        },
        {
          icon: BookOpen,
          title: "UrbanLoop Guidance",
          text: "Easy composting methods and practical support.",
        },
        {
          icon: Sprout,
          title: "Organic Compost",
          text: "Transform waste into nutrient-rich organic manure.",
        },
        {
          icon: Store,
          title: "UrbanLoop Recovery",
          text: "Compost can be sold, exchanged or reused.",
        },
        {
          icon: Trees,
          title: "Greener Communities",
          text: "Support gardens, farms and sustainable landscapes.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <item.icon
            size={36}
            strokeWidth={1.8}
            className="mb-4 text-[#72B543]"
          />

          <h3 className="mb-3 text-xl font-semibold text-slate-900">
            {item.title}
          </h3>

          <p className="text-slate-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    {/* Highlight Box */}
    <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#72B543] to-[#8CCB5E] p-8 text-center text-white shadow-[0_15px_35px_rgba(15,76,129,0.30)]">

      <h3 className="text-3xl font-bold">
        Why Compost Through UrbanLoop?
      </h3>

      <div className="mt-10 grid gap-8 md:grid-cols-5">

        <div className="flex flex-col items-center text-center">
  <div className="mb-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
    <Trash2
      size={38}
      strokeWidth={1.8}
      className="text-white"
    />
  </div>

  <p className="font-semibold">
    Reduce
    <span className="block font-normal">
      Landfill Waste
    </span>
  </p>
</div>
        <div className="flex flex-col items-center text-center">
  <div className="mb-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
    <Sprout
      size={38}
      strokeWidth={1.8}
      className="text-white"
    />
  </div>

  <p className="font-semibold">
    Create
    <span className="block font-normal">
      Organic Manure
    </span>
  </p>
</div>
        <div className="flex flex-col items-center text-center">
  <div className="mb-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
    <Wallet
      size={38}
      strokeWidth={1.8}
      className="text-white"
    />
  </div>

  <p className="font-semibold">
    Generate
    <span className="block font-normal">
      Additional Value
    </span>
  </p>
</div>
        <div className="flex flex-col items-center text-center">
  <div className="mb-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
    <Trees
      size={38}
      strokeWidth={1.8}
      className="text-white"
    />
  </div>

  <p className="font-semibold">
    Support
    <span className="block font-normal">
      Local Agriculture
    </span>
  </p>
</div>
        <div className="flex flex-col items-center text-center">
  <div className="mb-4 rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
    <RefreshCw
      size={38}
      strokeWidth={1.8}
      className="text-white"
    />
  </div>

  <p className="font-semibold">
    Strengthen
    <span className="block font-normal">
      Circular Economy
    </span>
  </p>
</div>

      </div>

    </div>

  </div>
</section>

{/* Why Choose UrbanLoop */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        WHY CHOOSE URBANLOOP
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Built For Transparency, Rewards & Impact
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop combines technology, transparency and
        circular economy principles to create a smarter
        resource recovery experience for households,
        communities and businesses.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {/* Fair Pricing */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <div className="mb-6 rounded-2xl bg-[#72B543]/10 p-4 w-fit">
          <BadgeIndianRupee
            size={42}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Fair Pricing
        </h3>

        <p className="leading-relaxed text-slate-600">
          Transparent pricing aligned with market rates
          for eligible recyclable and recoverable materials.
        </p>
      </div>

      {/* Transparent Weighing */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <div className="mb-6 rounded-2xl bg-[#72B543]/10 p-4 w-fit">
          <Scale
            size={42}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Transparent Weighing
        </h3>

        <p className="leading-relaxed text-slate-600">
          Digital verification and accurate measurement
          ensure complete transparency in every transaction.
        </p>
      </div>

      {/* Instant Rewards */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <div className="mb-6 rounded-2xl bg-[#72B543]/10 p-4 w-fit">
          <Wallet
            size={42}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Instant Rewards
        </h3>

        <p className="leading-relaxed text-slate-600">
          Receive payments and rewards through a simple,
          transparent and customer-friendly process.
        </p>
      </div>

      {/* Doorstep Collection */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <div className="mb-6 rounded-2xl bg-[#72B543]/10 p-4 w-fit">
          <Truck
            size={42}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Doorstep Collection
        </h3>

        <p className="leading-relaxed text-slate-600">
          Convenient pickup services for homes,
          apartments, institutions and businesses.
        </p>
      </div>

      {/* Impact Tracking */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <div className="mb-6 rounded-2xl bg-[#72B543]/10 p-4 w-fit">
          <BarChart3
            size={42}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Impact Tracking
        </h3>

        <p className="leading-relaxed text-slate-600">
          Monitor recovery volumes, rewards earned
          and environmental impact over time.
        </p>
      </div>

      {/* Trusted Recovery Network */}
      <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#72B543]/40 hover:shadow-[0_25px_60px_rgba(114,181,67,0.12)]">
        <div className="mb-6 rounded-2xl bg-[#72B543]/10 p-4 w-fit">
          <ShieldCheck
            size={42}
            strokeWidth={1.8}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Trusted Recovery Network
        </h3>

        <p className="leading-relaxed text-slate-600">
          Materials are routed through responsible
          recovery channels focused on sustainability.
        </p>
      </div>

    </div>

    {/* Brand Statement */}
    <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#72B543] to-[#8CCB5E] p-10 text-center text-white shadow-[0_15px_35px_rgba(15,76,129,0.30)]">

      <h3 className="text-3xl font-bold">
        More Than Recycling. A Circular Economy Ecosystem.
      </h3>

      <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/90">
        UrbanLoop connects people, communities,
        businesses and recovery partners through a
        transparent platform designed to transform
        waste into measurable economic and environmental value.
      </p>

    </div>

  </div>
</section>

{/* Final CTA */}
<section className="bg-gradient-to-b from-[#EAF7D7] to-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-5xl rounded-[36px] border border-[#DDE8D0] bg-white p-10 text-center shadow-[0_20px_50px_rgba(15,76,129,0.08)]">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        GET STARTED
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Transform Waste Into Wealth
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
        Whether you're a household, apartment community,
        business or institution, UrbanLoop helps you recover
        value from materials while contributing to a cleaner,
        greener and more sustainable future.
      </p>

      {/* Benefits */}
      <div className="mt-12 grid gap-6 md:grid-cols-4">


        <div className="group rounded-3xl border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-[0_20px_40px_rgba(114,181,67,0.15)]">
          <h3 className="font-semibold text-slate-900">
            <BadgeIndianRupee
  size={36}
  strokeWidth={1.8}
  className="mb-4 text-[#72B543]"
/>
            <h3 className="font-semibold text-slate-900">
  Fair
</h3>
</h3>

          <p className="mt-2 text-sm text-slate-600">
            Market-Linked Pricing
          </p>
        </div>

        <div className="group rounded-3xl border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-[0_20px_40px_rgba(114,181,67,0.15)]">
          <h3 className="font-semibold text-slate-900">
            <ShieldCheck
  size={36}
  strokeWidth={1.8}
  className="mb-4 text-[#72B543]"
/>
            <h3 className="font-semibold text-slate-900">
  Transparant
</h3>
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Digital Verification
          </p>
        </div>

        <div className="group rounded-3xl border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-[0_20px_40px_rgba(114,181,67,0.15)]">
          <h3 className="font-semibold text-slate-900">
            <Truck
  size={36}
  strokeWidth={1.8}
  className="mb-4 text-[#72B543]"
/>
            <h3 className="font-semibold text-slate-900">
  Convenient
</h3>
            
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Doorstep Collection
          </p>
        </div>

        <div className="group rounded-3xl border border-[#DDE8D0] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#72B543]/40 hover:shadow-[0_20px_40px_rgba(114,181,67,0.15)]">
          <h3 className="font-semibold text-slate-900">
            <Trees
  size={36}
  strokeWidth={1.8}
  className="mb-4 text-[#72B543]"
/>
<h3 className="font-semibold text-slate-900">
  Sustainable
</h3>
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Circular Economy Impact
          </p>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

        <button className="rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(114,181,67,0.40)]">
          Schedule Pickup
        </button>

        <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          Become A Partner
        </button>

      </div>

    </div>

  </div>
</section>

    <Footer />
  </>
);
}