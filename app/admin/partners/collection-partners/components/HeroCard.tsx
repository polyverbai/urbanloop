export default function HeroCard() {
  return (
    <section
      className="
        rounded-3xl
        bg-gradient-to-r
        from-[#72B543]
        to-[#5FA032]
        p-8
        text-white
        shadow-lg
      "
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm opacity-90">
            UrbanLoop Admin Portal
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Collection Partners
          </h1>

          <p className="mt-3 max-w-3xl text-white/90">
            Manage all registered Collection Partners, verify applications,
            approve onboarding, and monitor partner status across UrbanLoop.
          </p>

        </div>

        <div className="rounded-2xl bg-white/15 px-6 py-5">

          <p className="text-sm opacity-90">
            Module
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Collection Partner Management
          </h2>

        </div>

      </div>

    </section>
  );
}