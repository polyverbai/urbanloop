"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RecyclerPartnerRegistrationPage() {

  const [partnerType, setPartnerType] = useState("scrapDealer");

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">

              <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-4xl">
                Recycler & Recovery Partner Registration
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
                Join UrbanLoop's circular economy network as a recycler,
                refurbisher, aggregator, scrap dealer or recovery partner.
                Access quality material streams and grow your recovery business.
              </p>

            </div>

            <div className="mx-auto max-w-5xl">

              <div className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]">

                {/* Partner Type Section Goes Here */}
<h2 className="mb-8 text-2xl font-bold text-slate-900">
  Select Partner Type
</h2>

<div className="mb-16 grid gap-4 md:grid-cols-3">

  <button
    type="button"
    onClick={() => setPartnerType("scrapDealer")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      partnerType === "scrapDealer"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Scrap Dealer
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Purchase, aggregate and trade recyclable materials.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setPartnerType("recycler")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      partnerType === "recycler"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Recycler
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Process recyclable materials into reusable resources.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setPartnerType("refurbisher")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      partnerType === "refurbisher"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Refurbisher
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Restore furniture, IT assets and equipment for reuse.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setPartnerType("ewaste")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      partnerType === "ewaste"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      E-Waste Processor
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Authorized e-waste dismantling and recycling facilities.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setPartnerType("aggregator")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      partnerType === "aggregator"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Aggregator
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Collect and consolidate materials from multiple sources.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setPartnerType("logistics")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      partnerType === "logistics"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Logistics Partner
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Transportation and material movement services.
    </p>
  </button>

</div>

<h2 className="mb-24 text-2xl font-bold text-slate-900">
  Partner Contact Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Contact Person Name *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Company / Business Name *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Mobile Number *
    </label>

    <input
      type="tel"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Alternate Mobile Number
    </label>

    <input
      type="tel"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Email Address *
    </label>

    <input
      type="email"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Website
    </label>

    <input
      type="url"
      placeholder="https://"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      GST Number
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Years in Business *
    </label>

    <input
      type="number"
      min="0"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

</div>

<div className="pt-10">

</div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Business Address & Operational Coverage
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Office / Facility Address *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Facility / Yard Name
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div className="md:col-span-2">
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Street / Area *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      City *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      State *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      PIN Code *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Service Radius (KM)
    </label>

    <input
      type="number"
      placeholder="e.g. 50"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Number of Collection Vehicles
    </label>

    <input
      type="number"
      placeholder="e.g. 5"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Number of Employees
    </label>

    <input
      type="number"
      placeholder="e.g. 25"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

</div>

<div className="mt-6">

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Cities / Regions Served *
  </label>

  <textarea
    rows={3}
    placeholder="Example: Bengaluru, Mysuru, Tumakuru, Hosur, Chennai"
    className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
  />

</div>

<div className="pt-10">

</div>

{/* Recovery & Processing Capabilities */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Recovery & Processing Capabilities
</h2>

<p className="mb-6 text-slate-600">
  Select the material categories your organization can collect,
  process, refurbish, recycle or recover.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

  {(
    partnerType === "scrapDealer"
      ? [
          "Paper & Cardboard",
          "Plastic",
          "Metal",
          "Glass",
          "Furniture",
          "Office Assets",
          "Packaging Materials",
          "Wood",
        ]
      : partnerType === "recycler"
      ? [
          "Paper Recycling",
          "Plastic Recycling",
          "Metal Recycling",
          "Glass Recycling",
          "Textile Recycling",
          "Wood Recycling",
          "Packaging Recovery",
          "Industrial Scrap",
        ]
      : partnerType === "refurbisher"
      ? [
          "Office Furniture",
          "Hospital Furniture",
          "School Furniture",
          "Computers",
          "Laptops",
          "Printers",
          "Electrical Equipment",
          "Office Assets",
        ]
      : partnerType === "ewaste"
      ? [
          "Computers",
          "Laptops",
          "Servers",
          "Networking Equipment",
          "Printers",
          "Monitors",
          "Batteries",
          "Consumer Electronics",
          "Industrial Electronics",
        ]
      : partnerType === "aggregator"
      ? [
          "Paper",
          "Plastic",
          "Metal",
          "Glass",
          "Furniture",
          "E-Waste",
          "Packaging Waste",
          "Industrial Scrap",
        ]
      : [
          "Paper",
          "Plastic",
          "Metal",
          "Furniture",
          "E-Waste",
          "Bulk Assets",
          "Industrial Equipment",
          "Special Project Logistics",
        ]
  ).map((item) => (
    <label
      key={item}
      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
    >
      <input
        type="checkbox"
        className="h-4 w-4 accent-[#72B543]"
      />

      <span className="font-medium text-slate-700">
        {item}
      </span>
    </label>
  ))}

</div>

<div className="pt-10">

</div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Processing Capacity
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Monthly Processing Capacity *
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
      <option>Select Capacity</option>
      <option>Less than 1 Ton</option>
      <option>1 - 5 Tons</option>
      <option>5 - 25 Tons</option>
      <option>25 - 100 Tons</option>
      <option>100 - 500 Tons</option>
      <option>500+ Tons</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Storage Capacity
    </label>

    <input
      type="text"
      placeholder="e.g. 5000 sq.ft."
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Pickup Service Available?
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
      <option>Select Option</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Weighing Facility Available?
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
      <option>Select Option</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

</div>

<div className="pt-10">

</div>

{/* Compliance & Certifications */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Compliance & Certifications
</h2>

<p className="mb-6 text-slate-600">
  Provide information about licenses, certifications and regulatory
  approvals applicable to your operations.
</p>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      GST Registration Number
    </label>

    <input
      type="text"
      placeholder="GST Number"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Trade License Number
    </label>

    <input
      type="text"
      placeholder="Trade License Number"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Pollution Control Board Authorization
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
      <option>Select Option</option>
      <option>Yes</option>
      <option>No</option>
      <option>Applied</option>
      <option>Not Applicable</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      E-Waste Authorization
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
      <option>Select Option</option>
      <option>Yes</option>
      <option>No</option>
      <option>Applied</option>
      <option>Not Applicable</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      ISO Certification
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
      <option>Select Option</option>
      <option>ISO 9001</option>
      <option>ISO 14001</option>
      <option>ISO 45001</option>
      <option>Multiple Certifications</option>
      <option>None</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Public Liability Insurance
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
      <option>Select Option</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

</div>

<div className="mt-6">

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Additional Certifications & Approvals
  </label>

  <textarea
    rows={4}
    placeholder="Mention any certifications, environmental approvals, industry memberships or special authorizations..."
    className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
  />

</div>

<div className="pt-10">

</div>

{/* Commercial & Partnership Preferences */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Commercial & Partnership Preferences
</h2>

<p className="mb-6 text-slate-600">
  Tell us how you would like to collaborate with UrbanLoop and what
  types of opportunities you are interested in.
</p>

<div className="space-y-8">

  <div>
    <label className="mb-4 block text-sm font-medium text-slate-700">
      Preferred Engagement Model
    </label>

    <div className="grid gap-4 md:grid-cols-2">

      {[
        "Material Purchase",
        "Revenue Sharing",
        "Collection Service Provider",
        "Asset Recovery Partner",
        "Refurbishment Partner",
        "Recycling Partner",
        "Auction Participation",
        "Long-Term Strategic Partnership",
      ].map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]"
        >
          <input
            type="checkbox"
            className="h-4 w-4 accent-[#72B543]"
          />

          <span className="font-medium text-slate-700">
            {option}
          </span>
        </label>
      ))}

    </div>
  </div>

  <div>
    <label className="mb-4 block text-sm font-medium text-slate-700">
      Preferred Material Categories
    </label>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

      {[
        "Paper & Cardboard",
        "Plastic",
        "Metal",
        "Glass",
        "Furniture",
        "Office Assets",
        "Industrial Equipment",
        "IT Assets",
        "E-Waste",
        "Wood",
        "Packaging Waste",
        "Textiles",
      ].map((item) => (
        <label
          key={item}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]"
        >
          <input
            type="checkbox"
            className="h-4 w-4 accent-[#72B543]"
          />

          <span className="font-medium text-slate-700">
            {item}
          </span>
        </label>
      ))}

    </div>
  </div>

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Preferred Payment Terms
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
        <option>Select Payment Terms</option>
        <option>Immediate Payment</option>
        <option>7 Days</option>
        <option>15 Days</option>
        <option>30 Days</option>
        <option>Mutually Agreed Terms</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Minimum Transaction Size
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
        <option>Select Volume</option>
        <option>Any Quantity</option>
        <option>100 kg+</option>
        <option>500 kg+</option>
        <option>1 Ton+</option>
        <option>5 Tons+</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Collection Service Available?
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
        <option>Select Option</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Nationwide Operations
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
        <option>Select Option</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

  </div>

</div>

<div className="pt-10">

</div>

{/* Communication Preferences */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Communication Preferences
</h2>

<p className="mb-6 text-slate-600">
  Choose how UrbanLoop should communicate partnership opportunities,
  collection requests, marketplace transactions and operational updates.
</p>

<div className="grid gap-4 md:grid-cols-2">

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input
      type="checkbox"
      className="h-4 w-4 accent-[#72B543]"
    />
    <span className="font-medium text-slate-700">
      Email Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input
      type="checkbox"
      className="h-4 w-4 accent-[#72B543]"
    />
    <span className="font-medium text-slate-700">
      SMS Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input
      type="checkbox"
      className="h-4 w-4 accent-[#72B543]"
    />
    <span className="font-medium text-slate-700">
      WhatsApp Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input
      type="checkbox"
      className="h-4 w-4 accent-[#72B543]"
    />
    <span className="font-medium text-slate-700">
      Marketplace Opportunities
    </span>
  </label>

</div>

<div className="pt-10"></div>

{/* Referral Information */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Referral Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      How Did You Hear About UrbanLoop?
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
      <option>Select Source</option>
      <option>Google Search</option>
      <option>Industry Association</option>
      <option>Recycler Network</option>
      <option>Existing Partner</option>
      <option>Social Media</option>
      <option>LinkedIn</option>
      <option>Trade Event</option>
      <option>Referral</option>
      <option>Other</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Referral Code (Optional)
    </label>

    <input
      type="text"
      placeholder="Enter Referral Code"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
    />
  </div>

</div>

<div className="mt-6">

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Additional Comments
  </label>

  <textarea
    rows={4}
    placeholder="Additional information, special capabilities or partnership requirements..."
    className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
  />

</div>

<div className="pt-10"></div>

{/* Declaration & Consent */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Declaration & Consent
</h2>

<div className="space-y-5">

  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      className="mt-1 h-4 w-4 accent-[#72B543]"
    />

    <span className="text-slate-700">
      I confirm that all information provided is accurate and complete.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      className="mt-1 h-4 w-4 accent-[#72B543]"
    />

    <span className="text-slate-700">
      I agree to UrbanLoop's Terms & Conditions and Privacy Policy.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      className="mt-1 h-4 w-4 accent-[#72B543]"
    />

    <span className="text-slate-700">
      I consent to receiving partnership opportunities, collection requests,
      marketplace notifications and sustainability updates.
    </span>
  </label>

</div>

{/* Submit Button */}

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="flex flex-col items-center text-center">

    <button
      type="submit"
      className="rounded-xl bg-[#72B543] px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
    >
      Register As Recycler Partner
    </button>

    <p className="mt-4 text-sm text-slate-500">
      Our partnerships team will review your application and contact you
      regarding onboarding and qualification.
    </p>

  </div>

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