import {
  Recycle,
  Wallet,
  Trees,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#72B543] to-[#2A6FA3] px-10 py-16 text-center text-white shadow-[0_30px_80px_rgba(42,111,163,0.25)] md:px-16">

          <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
            JOIN THE MOVEMENT
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Ready To Join The Circular Economy?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            Whether you're a household, apartment community, business or
            collection partner, UrbanLoop makes it easy to transform waste
            into value while creating measurable environmental impact.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-[#72B543] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              Schedule Pickup
            </button>

            <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#72B543]">
              Become A Partner
            </button>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
              <div className="mb-4 flex justify-center">
                <div className="relative">
  <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-black/20"></div>

  <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/30 to-white/10 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
    <Recycle
      size={42}
      strokeWidth={2}
      className="text-white drop-shadow-md"
    />
  </div>
</div>
              </div>

              <p className="font-medium text-white">
                Responsible Recycling
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
              <div className="mb-4 flex justify-center">
                <div className="relative">
  <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-black/20"></div>

  <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/30 to-white/10 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
    <Wallet
      size={42}
      strokeWidth={2}
      className="text-white drop-shadow-md"
    />
  </div>
</div>
              </div>

              <p className="font-medium text-white">
                Instant Rewards
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
              <div className="mb-4 flex justify-center">
                <div className="relative">
  <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-black/20"></div>

  <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/30 to-white/10 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
    <Trees
      size={42}
      strokeWidth={2}
      className="text-white drop-shadow-md"
    />
  </div>
</div>
              </div>

              <p className="font-medium text-white">
                Positive Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}