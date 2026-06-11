export default function Hero() {
  return (
    <section
  id="home"
  className="scroll-mt-28 bg-gradient-to-b from-[#EAF7D7] to-white"
>
      <div className="mx-auto max-w-7xl px-6 pt-15 pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-[#72B543]/10 px-5 py-2 text-sm font-medium text-[#72B543]">
              POWERING THE CIRCULAR ECONOMY
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Turn Waste Into{" "}
              <span className="text-[#72B543]">Wealth</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-600">
              UrbanLoop helps households, apartments, businesses and
              institutions transform waste into value through smart recycling,
              rewards, composting and measurable environmental impact.
            </p>

            {/* Desktop Buttons Only */}
            <div className="mt-10 hidden gap-4 lg:flex">
              <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Schedule Pickup
              </button>

              <button className="rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(114,181,67,0.40)]">
                Become A Partner
              </button>
            </div>
          </div>

          {/* Right Infographic */}
          <div className="relative flex justify-center lg:justify-end pointer-events-none">
            {/* Green Glow */}
            <div className="absolute left-10 top-20 h-56 w-56 rounded-full bg-[#72B543]/20 blur-3xl"></div>

            {/* Blue Glow */}
            <div className="absolute right-10 bottom-16 h-56 w-56 rounded-full bg-[#2A6FA3]/20 blur-3xl"></div>

            {/* Infographic */}
            <img
              src="/images/urbanloop-circular-economy.png"
              alt="UrbanLoop Circular Economy Ecosystem"
                className="pointer-events-none relative h-auto w-full max-w-[420px] drop-shadow-[0_25px_50px_rgba(15,76,129,0.15)]"
            />
          </div>
        </div>

        {/* Mobile Buttons Only */}
        <div className="mt-8 flex flex-col items-center gap-4 lg:hidden">
          <button className="w-full max-w-[320px] rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            Schedule Pickup
          </button>

          <button className="w-full max-w-[320px] rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(114,181,67,0.40)]">
            Become A Partner
          </button>
        </div>
      </div>
    </section>
  );
}