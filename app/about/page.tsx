import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  Wallet,
  Gift,
  BarChart3,
  Recycle,
  WalletCards,
  CreditCard,
  ShoppingCart,
  Leaf,
  Sprout,
  Trees,
  Flower2,
  Store,
  Truck,
  ShieldCheck,
  Network,
  Smartphone,
  CalendarDays,
  WalletMinimal,
  Bell,
  ScanLine,
  Eye,
  Target,
  Globe,
  TreePine,
  Users,
  Factory,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-white">

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-24">
          <div className="mx-auto max-w-7xl px-6">

            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex rounded-full bg-[#72B543]/10 px-5 py-2 text-sm font-medium text-[#72B543]">
                ABOUT URBANLOOP
              </span>

              <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
                Building The Future Of{" "}
                <span className="text-[#72B543]">
                  Circular Economy
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
                UrbanLoop is a technology-driven circular economy platform
                transforming the way individuals, communities, businesses and
                institutions manage waste, recover value and contribute to
                environmental sustainability.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <Link
                  href="/join-urbanloop/categories"
                  className="rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
                >
                  Schedule Pickup
                </Link>

                <Link
                  href="/partner-program"
                  className="rounded-xl bg-slate-200 px-8 py-4 font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7EFC2] hover:text-[#5FA032] hover:shadow-lg"
                >
                  Become A Partner
                </Link>

              </div>

            </div>

          </div>
        </section>

{/* Who We Are */}
<section className="py-24">
  <div className="mx-auto max-w-5xl px-6">

    <div>


      <h2 className="text-center text-4xl font-bold text-slate-900 md:text-5xl">
        Who We Are
      </h2>

      <div className="mx-auto mt-10 max-w-3xl text-left">

        <p className="text-lg leading-relaxed text-slate-600">
          UrbanLoop is a technology-driven circular economy platform
          transforming the way individuals, communities, businesses and
          institutions manage waste, recover value and contribute to
          environmental sustainability.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          We believe that waste is not a liability—it is an untapped resource
          with economic, environmental and social value. Through innovation,
          transparency and participation, UrbanLoop is helping create a future
          where materials remain in productive use instead of ending up in
          landfills.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Our mission is to connect waste generators, recovery partners,
          recyclers, commerce partners and communities through technology,
          transparency and rewards, creating measurable impact while building
          a more sustainable future.
        </p>

      </div>

      <div className="mx-auto mt-24 mb-10 max-w-4xl text-center">

        <h3 className="text-3xl font-bold text-slate-900 md:text-4xl">
          The UrbanLoop Circular Economy
        </h3>

        <p className="mt-6 text-lg text-slate-600">
          From waste generation and collection to rewards, recovery,
          recycling and measurable environmental impact, UrbanLoop
          creates a complete circular economy ecosystem.
        </p>

      </div>

      <div className="overflow-hidden rounded-[32px] border-2 border-[#72B543] bg-white p-6 shadow-[0_20px_50px_rgba(114,181,67,0.15)]">

        <img
          src="/images/urbanloop-circular-economy-story.png"
          alt="UrbanLoop Circular Economy Story"
          className="w-full rounded-2xl"
        />

      </div>

    </div>

  </div>
</section>
      </main>

{/* The Challenge We Are Solving */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">
      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        THE CHALLENGE
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        The Challenge We Are Solving
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        Modern waste management systems often focus on disposal rather than
        recovery. Valuable recyclable materials are frequently lost due to
        fragmented collection systems, limited transparency and lack of
        incentives for participation.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

  <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">

    <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
      <Eye size={40} className="text-[#72B543]" />
    </div>

    <h3 className="text-xl font-bold text-slate-900">
      Limited Transparency
    </h3>

    <p className="mt-4 text-slate-600">
      Most users have little visibility into what happens after waste leaves
      their homes, communities or businesses, creating uncertainty in the
      recovery process.
    </p>

  </div>

  <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">

    <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
      <Wallet size={40} className="text-[#72B543]" />
    </div>

    <h3 className="text-xl font-bold text-slate-900">
      Lost Economic Value
    </h3>

    <p className="mt-4 text-slate-600">
      Recyclable materials often generate less value than they should due to
      fragmented collection systems and inefficient recovery channels.
    </p>

  </div>

  <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">

    <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
      <Gift size={40} className="text-[#72B543]" />
    </div>

    <h3 className="text-xl font-bold text-slate-900">
      Lack Of Incentives
    </h3>

    <p className="mt-4 text-slate-600">
      Citizens and organizations rarely receive meaningful rewards for
      participating in sustainability, recycling and recovery initiatives.
    </p>

  </div>

  <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">

    <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
      <TreePine size={40} className="text-[#72B543]" />
    </div>

    <h3 className="text-xl font-bold text-slate-900">
      Environmental Impact
    </h3>

    <p className="mt-4 text-slate-600">
      Valuable resources continue to end up in landfills instead of being
      recovered, recycled and returned to productive use.
    </p>

  </div>

</div>

  </div>
</section>

{/* Why UrbanLoop Is Different */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">
      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        WHY URBANLOOP
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        More Than Recycling
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        UrbanLoop combines recovery, rewards, technology and sustainability
        into a single circular economy ecosystem.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

  <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">

    <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
      <Wallet size={40} className="text-[#72B543]" />
    </div>

    <h3 className="text-xl font-bold text-slate-900">
      Earn More Value
    </h3>

    <p className="mt-4 text-slate-600">
      Recover better value for recyclable materials through a structured
      recovery ecosystem.
    </p>

  </div>

  <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">

    <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
      <Gift size={40} className="text-[#72B543]" />
    </div>

    <h3 className="text-xl font-bold text-slate-900">
      Reward Points
    </h3>

    <p className="mt-4 text-slate-600">
      Earn points for recycling, composting and participating in
      sustainability initiatives.
    </p>

  </div>

  <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">

    <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
      <BarChart3 size={40} className="text-[#72B543]" />
    </div>

    <h3 className="text-xl font-bold text-slate-900">
      Track Impact
    </h3>

    <p className="mt-4 text-slate-600">
      Monitor environmental contributions through measurable impact
      reporting.
    </p>

  </div>

  <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">

    <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
      <Recycle size={40} className="text-[#72B543]" />
    </div>

    <h3 className="text-xl font-bold text-slate-900">
      Circular Economy
    </h3>

    <p className="mt-4 text-slate-600">
      Keep materials in productive use while reducing landfill dependency.
    </p>

  </div>

</div>
</div>
</section>

{/* Sustainability That Rewards Participation */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        REWARDS ECOSYSTEM
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Sustainability That Rewards Participation
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop believes sustainability should create value for everyone.
        Instead of simply disposing waste, participants can recover value,
        earn rewards and contribute to measurable environmental impact while
        becoming active members of a circular economy ecosystem.
      </p>

    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      <div>

        <h3 className="text-3xl font-bold text-slate-900">
  More Than Traditional Scrap Collection
</h3>

<p className="mt-6 text-lg leading-relaxed text-slate-600">
  UrbanLoop is transforming waste recovery from a simple transaction into a technology-driven circular economy ecosystem. Unlike traditional scrap collection, which typically ends with a one-time sale, UrbanLoop enables households, apartment communities, businesses and institutions to recover greater value from recyclable materials through transparent pricing, digital tracking and a structured recovery network. Every collection contributes not only to economic value creation but also to measurable environmental impact by ensuring materials are responsibly recovered and reintroduced into the circular economy.
</p>

<p className="mt-6 text-lg leading-relaxed text-slate-600">
  Beyond recycling, UrbanLoop creates an ecosystem where participation is continuously rewarded. Users can choose how they wish to benefit from their collections, while also gaining access to rewards, sustainability programs and future marketplace opportunities. By connecting recovery, technology, transparency and community participation, UrbanLoop empowers individuals and organizations to turn everyday waste into long-term economic, environmental and social value.
</p>

      </div>

      <div className="rounded-[32px] border-2 border-[#A8D67A] bg-[#F8FBF4] p-8 shadow-[0_15px_40px_rgba(114,181,67,0.08)]">

  <h3 className="text-2xl font-bold text-slate-900">
    Flexible Value Options
  </h3>

  <div className="mt-8 space-y-6">

    <div className="flex items-start gap-4">
      <CreditCard
        size={28}
        className="mt-1 shrink-0 text-[#72B543]"
      />

      <div>
        <h4 className="font-semibold text-slate-900">
          Instant Bank Transfer
        </h4>

        <p className="mt-1 text-slate-600">
          Receive payment directly into your bank account after successful
          material collection and verification.
        </p>
      </div>
    </div>

    <div className="border-t border-[#DDE8D0]"></div>

    <div className="flex items-start gap-4">
      <WalletCards
        size={28}
        className="mt-1 shrink-0 text-[#72B543]"
      />

      <div>
        <h4 className="font-semibold text-slate-900">
          UrbanLoop Wallet
        </h4>

        <p className="mt-1 text-slate-600">
          Store earnings securely within your UrbanLoop wallet and redeem
          them whenever you choose.
        </p>
      </div>
    </div>

    <div className="border-t border-[#DDE8D0]"></div>

    <div className="flex items-start gap-4">
      <Gift
        size={28}
        className="mt-1 shrink-0 text-[#72B543]"
      />

      <div>
        <h4 className="font-semibold text-slate-900">
          Reward Points
        </h4>

        <p className="mt-1 text-slate-600">
          Earn reward points for recycling, composting and sustainable
          actions performed through UrbanLoop.
        </p>
      </div>
    </div>

    <div className="border-t border-[#DDE8D0]"></div>

    <div className="flex items-start gap-4">
      <ShoppingCart
        size={28}
        className="mt-1 shrink-0 text-[#72B543]"
      />

      <div>
        <h4 className="font-semibold text-slate-900">
          Future Marketplace
        </h4>

        <p className="mt-1 text-slate-600">
          Redeem rewards for groceries, medicines, beauty products,
          household essentials and other participating merchant offers.
        </p>
      </div>
    </div>

  </div>

</div>
</div>
</div>
</section>

{/* Creating Value From Organic Waste */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        ORGANIC WASTE ECONOMY
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Transforming Organic Waste Into Sustainable Value
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop believes organic waste should not end up in landfills.
        Through composting and sustainable recovery programs, wet waste can
        be transformed into valuable compost that benefits households,
        communities, urban gardening initiatives and agriculture.
      </p>

    </div>

    <div className="mt-16 grid gap-16 lg:grid-cols-2">

      {/* Left Content */}
      <div>

        <h3 className="text-3xl font-bold text-slate-900">
          From Kitchen Waste To Circular Value
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Every day, large quantities of organic waste are discarded despite
          having the potential to become nutrient-rich compost. UrbanLoop
          supports households, apartment communities, educational
          institutions, businesses and commercial establishments in
          converting wet waste into valuable organic resources.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Through structured composting programs and recovery initiatives,
          participants can contribute to cleaner communities while creating
          additional environmental and economic value. Compost generated
          through UrbanLoop can support gardening, landscaping, urban
          farming and agricultural activities.
        </p>

      </div>

      {/* Right Features */}
      <div className="rounded-[32px] border-2 border-[#A8D67A] bg-white p-8 shadow-[0_15px_40px_rgba(114,181,67,0.08)]">

        <h3 className="text-2xl font-bold text-slate-900">
          Organic Waste Benefits
        </h3>

        <div className="mt-8 space-y-6">

          <div className="flex items-start gap-4">
            <Leaf
              size={28}
              className="mt-1 shrink-0 text-[#72B543]"
            />

            <div>
              <h4 className="font-semibold text-slate-900">
                Household Composting
              </h4>

              <p className="mt-1 text-slate-600">
                Convert kitchen and food waste into useful compost for home
                gardens and landscaping.
              </p>
            </div>
          </div>

          <div className="border-t border-[#DDE8D0]"></div>

          <div className="flex items-start gap-4">
            <Sprout
              size={28}
              className="mt-1 shrink-0 text-[#72B543]"
            />

            <div>
              <h4 className="font-semibold text-slate-900">
                Community Compost Programs
              </h4>

              <p className="mt-1 text-slate-600">
                Enable apartment communities and institutions to manage wet
                waste responsibly and efficiently.
              </p>
            </div>
          </div>

          <div className="border-t border-[#DDE8D0]"></div>

          <div className="flex items-start gap-4">
            <Flower2
              size={28}
              className="mt-1 shrink-0 text-[#72B543]"
            />

            <div>
              <h4 className="font-semibold text-slate-900">
                Gardening & Landscaping
              </h4>

              <p className="mt-1 text-slate-600">
                Create value by using compost for gardens, parks and green
                community spaces.
              </p>
            </div>
          </div>

          <div className="border-t border-[#DDE8D0]"></div>

          <div className="flex items-start gap-4">
            <Trees
              size={28}
              className="mt-1 shrink-0 text-[#72B543]"
            />

            <div>
              <h4 className="font-semibold text-slate-900">
                Carbon & Landfill Reduction
              </h4>

              <p className="mt-1 text-slate-600">
                Divert organic waste from landfills, reduce methane emissions
  and support a healthier environment.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

{/* Empowering Recovery Partners */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        RECOVERY PARTNER NETWORK
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Empowering Recovery Partners
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop is building a nationwide network of trained recovery
        partners who play a critical role in the circular economy ecosystem.
        Rather than replacing existing scrap dealers and collection centers,
        UrbanLoop empowers them with technology, training, operational
        support and access to a larger recovery network.
      </p>

    </div>

    <div className="mt-16 grid gap-16 lg:grid-cols-2">

      {/* Left Content */}
      <div>

        <h3 className="text-3xl font-bold text-slate-900">
          Transforming Local Scrap Dealers Into Circular Economy Partners
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Existing kabadi shops, waste collectors and recovery businesses can
          join UrbanLoop as certified Recovery Partners. Through structured
          onboarding, training and technology enablement, partners gain
          access to new customers, scheduled pickups, operational tools and
          a wider marketplace for recovered materials.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          Recovery Partners benefit from standardized material handling,
          improved segregation practices, transparent transactions and
          stronger demand channels. This enables them to increase efficiency,
          improve material quality and unlock better earning opportunities
          while contributing to environmental sustainability.
        </p>

      </div>

      {/* Right Panel */}
      <div className="rounded-[32px] border-2 border-[#A8D67A] bg-[#F8FBF4] p-8 shadow-[0_15px_40px_rgba(114,181,67,0.08)]">

        <h3 className="text-2xl font-bold text-slate-900">
          Recovery Partner Benefits
        </h3>

        <div className="mt-8 space-y-6">

          <div className="flex items-start gap-4">
            <Store
              size={28}
              className="mt-1 shrink-0 text-[#72B543]"
            />

            <div>
              <h4 className="font-semibold text-slate-900">
                Business Growth
              </h4>

              <p className="mt-1 text-slate-600">
                Access new customers, communities and collection
                opportunities through UrbanLoop.
              </p>
            </div>
          </div>

          <div className="border-t border-[#DDE8D0]"></div>

          <div className="flex items-start gap-4">
            <Truck
              size={28}
              className="mt-1 shrink-0 text-[#72B543]"
            />

            <div>
              <h4 className="font-semibold text-slate-900">
                Scheduled Pickups
              </h4>

              <p className="mt-1 text-slate-600">
                Receive organized pickup requests and optimize collection
                operations through technology.
              </p>
            </div>
          </div>

          <div className="border-t border-[#DDE8D0]"></div>

          <div className="flex items-start gap-4">
            <ShieldCheck
              size={28}
              className="mt-1 shrink-0 text-[#72B543]"
            />

            <div>
              <h4 className="font-semibold text-slate-900">
                Training & Compliance
              </h4>

              <p className="mt-1 text-slate-600">
                Learn best practices for waste segregation, material handling
                and sustainability standards.
              </p>
            </div>
          </div>

          <div className="border-t border-[#DDE8D0]"></div>

          <div className="flex items-start gap-4">
            <Network
              size={28}
              className="mt-1 shrink-0 text-[#72B543]"
            />

            <div>
              <h4 className="font-semibold text-slate-900">
                Larger Recovery Network
              </h4>

              <p className="mt-1 text-slate-600">
                Connect with recyclers, processors and recovery channels
                that create better value realization.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

{/* Technology At The Core */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        TECHNOLOGY PLATFORM
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Technology At The Core
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop combines technology, automation and data intelligence to
        simplify waste recovery, improve transparency and create a seamless
        experience for households, communities, businesses, institutions and
        recovery partners.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
          <Smartphone size={40} className="text-[#72B543]" />
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Mobile Experience
        </h3>

        <p className="mt-4 text-slate-600">
          Manage pickups, earnings, rewards and sustainability activities
          from a single platform.
        </p>
      </div>

      <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
          <CalendarDays size={40} className="text-[#72B543]" />
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Smart Scheduling
        </h3>

        <p className="mt-4 text-slate-600">
          Schedule pickups conveniently while optimizing collection routes
          and operational efficiency.
        </p>
      </div>

      <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
          <ScanLine size={40} className="text-[#72B543]" />
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Digital Tracking
        </h3>

        <p className="mt-4 text-slate-600">
          Track collections, materials, transactions and recovery activities
          with complete transparency.
        </p>
      </div>

      <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
          <WalletMinimal size={40} className="text-[#72B543]" />
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Wallet & Rewards
        </h3>

        <p className="mt-4 text-slate-600">
          Manage earnings, reward points and redemption options through a
          secure digital wallet.
        </p>
      </div>

      <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
          <Bell size={40} className="text-[#72B543]" />
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Real-Time Notifications
        </h3>

        <p className="mt-4 text-slate-600">
          Receive updates for pickups, payments, rewards and community
          sustainability activities.
        </p>
      </div>

      <div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <div className="mb-5 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
          <BarChart3 size={40} className="text-[#72B543]" />
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Sustainability Analytics
        </h3>

        <p className="mt-4 text-slate-600">
          Measure waste recovery, recycling impact, compost generation and
          environmental contributions through insightful dashboards.
        </p>
      </div>

    </div>

  </div>
</section>


{/* Vision & Mission */}
<section className="bg-[#F8FBF4] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-16 max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        OUR PURPOSE
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Vision & Mission
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop is building the foundation for a future where waste is
        recognized as a valuable resource and every individual, community,
        business and institution becomes an active participant in the
        circular economy.
      </p>

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Vision */}
      <div className="rounded-[32px] border-2 border-[#A8D67A] bg-[#F8FBF4] p-10 shadow-[0_15px_40px_rgba(114,181,67,0.08)]">

        <div className="mb-6 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
          <Eye
            size={44}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="text-3xl font-bold text-slate-900">
          Our Vision
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          To create India's most trusted circular economy ecosystem where
          households, communities, businesses, institutions and recovery
          partners collaborate to transform waste into measurable economic,
          environmental and social value.
        </p>

      </div>

      {/* Mission */}
      <div className="rounded-[32px] border-2 border-[#A8D67A] bg-white p-10 shadow-[0_15px_40px_rgba(114,181,67,0.08)]">

        <div className="mb-6 inline-flex rounded-2xl bg-[#72B543]/10 p-4">
          <Target
            size={44}
            className="text-[#72B543]"
          />
        </div>

        <h3 className="text-3xl font-bold text-slate-900">
          Our Mission
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          To connect waste generators, recovery partners, recyclers,
          composting ecosystems and commerce networks through technology,
          transparency and rewards, creating a scalable and sustainable
          platform that accelerates resource recovery and environmental
          responsibility.
        </p>

      </div>

    </div>

  </div>
</section>

{/* Impact We Aim To Create */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        IMPACT
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        The Impact We Aim To Create
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        UrbanLoop is committed to creating measurable economic,
        environmental and social outcomes through circular economy
        participation and sustainable resource recovery.
      </p>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <Recycle size={42} className="text-[#72B543]" />
        <h3 className="mt-5 text-xl font-bold">Waste Recovery</h3>
        <p className="mt-3 text-slate-600">
          Increase responsible recovery and recycling of valuable materials.
        </p>
      </div>

<div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <Sprout size={42} className="text-[#72B543]" />
        <h3 className="mt-5 text-xl font-bold">Organic Waste Utilization</h3>
        <p className="mt-3 text-slate-600">
          Convert wet waste into valuable compost and sustainable resources.
        </p>
      </div>

<div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <Users size={42} className="text-[#72B543]" />
        <h3 className="mt-5 text-xl font-bold">Community Participation</h3>
        <p className="mt-3 text-slate-600">
          Enable citizens and communities to actively participate in sustainability.
        </p>
      </div>

<div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <Factory size={42} className="text-[#72B543]" />
        <h3 className="mt-5 text-xl font-bold">Recovery Partner Growth</h3>
        <p className="mt-3 text-slate-600">
          Empower recovery partners with technology and new earning opportunities.
        </p>
      </div>

<div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <TreePine size={42} className="text-[#72B543]" />
        <h3 className="mt-5 text-xl font-bold">Environmental Impact</h3>
        <p className="mt-3 text-slate-600">
          Reduce landfill dependency and improve resource efficiency.
        </p>
      </div>

<div className="rounded-3xl border border-[#DDE8D0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#72B543] hover:shadow-[0_15px_35px_rgba(114,181,67,0.12)]">
        <Globe size={42} className="text-[#72B543]" />
        <h3 className="mt-5 text-xl font-bold">Circular Economy Adoption</h3>
        <p className="mt-3 text-slate-600">
          Accelerate adoption of circular economy practices across India.
        </p>
      </div>

    </div>

  </div>
</section>

{/* Take Action */}
<section className="bg-[#F8FBF4] py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
        Join India's Circular Economy Movement
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
        Whether you are a household, apartment community, business,
  institution or recovery partner, UrbanLoop helps you recover
  value, reduce waste and create measurable environmental impact
  through a connected circular economy ecosystem.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

        <Link
          href="/join-urbanloop/categories"
          className="rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
        >
          Schedule Pickup
        </Link>

        <Link
          href="/partner-program"
          className="rounded-xl bg-slate-200 px-8 py-4 font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#D7EFC2] hover:text-[#5FA032] hover:shadow-lg"
        >
          Become A Partner
        </Link>

      </div>

    </div>

  </div>
</section>
      <Footer />
    </>
  );
}