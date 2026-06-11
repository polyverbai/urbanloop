"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CorporateRegistrationPage() {

  const [officeType, setOfficeType] = useState("corporate");

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">
        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">

              <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-4xl">
                Corporate Office Registration
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
                Partner with UrbanLoop to recover office assets,
                recyclables, IT equipment and improve ESG performance.
              </p>

            </div>

            <div className="mx-auto max-w-5xl">

              <div className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]">

                {/* Office Type */}

                <h2 className="mb-8 text-2xl font-bold text-slate-900">
                  Select Office Type
                </h2>

                <div className="mb-16 grid gap-4 md:grid-cols-3"></div>

<button
  type="button"
  onClick={() => setOfficeType("corporate")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    officeType === "corporate"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Corporate Headquarters
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Main corporate offices and headquarters.
  </p>
</button>

<button
  type="button"
  onClick={() => setOfficeType("branch")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    officeType === "branch"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Branch Office
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Regional and branch office locations.
  </p>
</button>

<button
  type="button"
  onClick={() => setOfficeType("itpark")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    officeType === "itpark"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    IT Park / Tech Campus
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Technology campuses and business parks.
  </p>
</button>

<button
  type="button"
  onClick={() => setOfficeType("coworking")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    officeType === "coworking"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Co-Working Space
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Shared offices and flexible workspaces.
  </p>
</button>

<button
  type="button"
  onClick={() => setOfficeType("bpo")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    officeType === "bpo"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    BPO / Call Center
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Customer support and outsourcing centres.
  </p>
</button>

<button
  type="button"
  onClick={() => setOfficeType("government")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    officeType === "government"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Government Office
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Government and public sector offices.
  </p>
</button>

</div>

<h2 className="mb-24 text-2xl font-bold text-slate-900">
  Organization Information
</h2>



<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Organization Name *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Industry Sector *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      GST Number
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Number of Office Locations
    </label>

    <input
      type="number"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

</div>

<div className="pt-10"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Primary Contact Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Contact Person *
    </label>
    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Designation *
    </label>
    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Mobile Number *
    </label>
    <input
      type="tel"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Email Address *
    </label>
    <input
      type="email"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

</div>

<div className="pt-10"></div>

{officeType === "corporate" && (
<>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
Corporate Headquarters Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Employee Strength *
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Office Area (sq.ft.)
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

</div>
</>
)}

{officeType === "branch" && (
<>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
Branch Office Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Branch Count
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Employees
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

</div>
</>
)}

{officeType === "itpark" && (
<>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
IT Park Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Number of Buildings
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Tenant Companies
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

</div>
</>
)}

{officeType === "coworking" && (
<>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
Co-Working Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Available Seats
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Occupancy %
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

</div>
</>
)}

{officeType === "bpo" && (
<>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
BPO / Call Center Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Agents / Employees
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Workstations
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

</div>
</>
)}

{officeType === "government" && (
<>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
Government Office Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Department Name
</label>
<input type="text" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

<div>
<label className="mb-2 block text-sm font-medium text-slate-700">
Employee Strength
</label>
<input type="number" className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3" />
</div>

</div>
</>
)}

<div className="pt-10"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
Material Categories
</h2>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

{[
"Paper",
"Cardboard",
"Plastic",
"Metal",
"Office Furniture",
"IT Assets",
"E-Waste",
"Electrical Equipment",
"Batteries",
"Lighting Fixtures",
"Storage Systems",
"Cables & Accessories"
].map((item) => (
<label
key={item}
className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
>
<input type="checkbox" className="h-4 w-4 accent-[#72B543]" />
<span>{item}</span>
</label>
))}

</div>

<div className="pt-10"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
Required Services
</h2>

<div className="grid gap-4 md:grid-cols-2">

{[
"Office Asset Recovery",
"IT Asset Recovery",
"Furniture Recovery",
"E-Waste Collection",
"Recurring Collection",
"One-Time Clearance",
"ESG Reporting",
"Sustainability Reporting"
].map((item) => (
<label
key={item}
className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
>
<input type="checkbox" className="h-4 w-4 accent-[#72B543]" />
<span>{item}</span>
</label>
))}

</div>

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

<div className="flex flex-col items-center text-center">

<button
type="submit"
className="rounded-xl bg-[#72B543] px-10 py-4 text-lg font-semibold text-white"
>
Register Corporate Office
</button>

<p className="mt-4 text-sm text-slate-500">
Our team will review your registration and contact you shortly.
</p>

</div>

</div>


</div>
            </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
