"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import {
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Package,
  Truck,
  TrendingUp,
  Receipt,
  Leaf,
  CheckCircle2,
} from "lucide-react";

export default function ResidentialRegistrationPage() {

  const [residentialType, setResidentialType] = useState("individual");

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">
        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">

            <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-4xl">
  Residential Registration
</h1>

      {/* Registration Progress */}

<div className="mx-auto mt-8 max-w-4xl">

  <div className="hidden md:flex items-center justify-between">

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        1
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Personal
      </span>
    </div>

    <div className="mb-5 h-[2px] flex-1 bg-[#72B543]/30"></div>

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        2
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Address
      </span>
    </div>

    <div className="mb-5 h-[2px] flex-1 bg-[#72B543]/30"></div>

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        3
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Profile
      </span>
    </div>

    <div className="mb-5 h-[2px] flex-1 bg-[#72B543]/30"></div>

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        4
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Materials
      </span>
    </div>

    <div className="mb-5 h-[2px] flex-1 bg-[#72B543]/30"></div>

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        5
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Preferences
      </span>
    </div>

    <div className="mb-5 h-[2px] flex-1 bg-[#72B543]/30"></div>

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        6
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Submit
      </span>
    </div>

  </div>

</div>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
        Recover more value from recyclable materials while
        contributing to a cleaner and more sustainable future.
      </p>

    </div>

    <div className="mx-auto max-w-5xl">

  <div className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]">

    {/* Residential Type */}

<h2 className="mb-8 text-2xl font-bold text-slate-900">
  Select Residential Type
</h2>

<div className="mb-16 grid gap-4 md:grid-cols-3">

  <button
    type="button"
    onClick={() => setResidentialType("individual")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      residentialType === "individual"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Individual Household
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Register a single household.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setResidentialType("villa")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      residentialType === "villa"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Villa
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Register an independent villa property.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setResidentialType("community")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      residentialType === "community"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Apartment & Community
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Register apartments, gated communities and housing societies.
    </p>
  </button>

</div>

<h2 className="mb-24 text-2xl font-bold text-slate-900">
  {residentialType === "community"
    ? "Community Contact Information"
    : "Personal Information"}
</h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Full Name *
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
          Email Address
        </label>
        <input
          type="email"
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

    </div>
<div className="pt-10"></div>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  {residentialType === "community"
    ? "Community Address"
    : "Residential Address"}
</h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          House / Flat Number *
        </label>
        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Building / Apartment Name
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
          Landmark
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


    </div>

<div className="pt-10"></div>

{/* INDIVIDUAL HOUSEHOLD */}

{residentialType === "individual" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Property Information
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Property Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Property Type</option>
          <option>Apartment</option>
          <option>Independent House</option>
          <option>Villa</option>
          <option>Row House</option>
          <option>Farm House</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Occupancy Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Occupancy Type</option>
          <option>Owner Occupied</option>
          <option>Tenant</option>
          <option>Company Accommodation</option>
        </select>
      </div>

    </div>

    <div className="pt-10"></div>

    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Household Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Household Size *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Household Size</option>
          <option>1-2 Members</option>
          <option>3-4 Members</option>
          <option>5-6 Members</option>
          <option>7-10 Members</option>
          <option>10+ Members</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Monthly Recyclable Material Generated *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Quantity</option>
          <option>Less than 10 kg</option>
          <option>10 - 25 kg</option>
          <option>25 - 50 kg</option>
          <option>50 - 100 kg</option>
          <option>100+ kg</option>
        </select>
      </div>

    </div>
  </>
)}

{residentialType === "villa" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Villa Information
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Villa Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Villa Type</option>
          <option>Independent Villa</option>
          <option>Duplex Villa</option>
          <option>Luxury Villa</option>
          <option>Farm Villa</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Occupancy Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Occupancy Type</option>
          <option>Owner Occupied</option>
          <option>Tenant</option>
        </select>
      </div>

    </div>

    <div className="pt-10"></div>

    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Villa Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Household Size *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Household Size</option>
          <option>1-2 Members</option>
          <option>3-4 Members</option>
          <option>5-6 Members</option>
          <option>7+ Members</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Garden Area Available *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Option</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>

    </div>
  </>
)}

{residentialType === "community" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Community Information
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Community Name *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Community Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Community Type</option>
          <option>Apartment Complex</option>
          <option>Gated Community</option>
          <option>Villa Community</option>
          <option>Housing Society</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Residential Units *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Approximate Resident Population
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}



{/* Material Categories */}
<div className="pt-10"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Material Categories
</h2>

<p className="mb-6 text-slate-600">
  Select the recyclable material categories applicable to your residential property.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

  {(residentialType === "individual"
    ? [
        "Paper & Cardboard",
        "Plastic",
        "Metal",
        "Glass",
        "E-Waste",
        "Appliances",
        "Furniture",
        "Textiles",
        "Organic Waste",
      ]
    : residentialType === "villa"
    ? [
        "Paper & Cardboard",
        "Plastic",
        "Metal",
        "Glass",
        "E-Waste",
        "Appliances",
        "Furniture",
        "Textiles",
        "Organic Waste",
        "Garden Waste",
        "Landscape Waste",
        "Tree Trimmings",
      ]
    : [
        "Paper & Cardboard",
        "Plastic",
        "Metal",
        "Glass",
        "Community E-Waste",
        "Furniture",
        "Organic Waste",
        "Garden Waste",
        "Bulk Waste",
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

{/* Pickup Preferences */}
<div className="pt-10"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Pickup Preferences
</h2>

<div className="space-y-8">

  <div>
    <label className="mb-4 block text-sm font-medium text-slate-700">
      Preferred Pickup Frequency *
    </label>

    <div className="grid gap-4 md:grid-cols-2">

      {[
        "One-Time Pickup",
        "On-Demand Pickup",
        "Monthly Pickup",
        "Quarterly Pickup",
      ].map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
        >
          <input
            type="radio"
            name="pickupFrequency"
            className="accent-[#72B543]"
          />
          <span className="font-medium text-slate-700">
            {option}
          </span>
        </label>
      ))}

    </div>
  </div>

  <div className="grid gap-6 md:grid-cols-2">

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Occupancy Percentage
  </label>

  <input
    type="number"
    placeholder="e.g. 85"
    className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Existing Waste Management Vendor
  </label>

  <input
    type="text"
    placeholder="Vendor Name"
    className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Dedicated Collection Area Available?
  </label>

  <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
    <option>Select Option</option>
    <option>Yes</option>
    <option>No</option>
    <option>Planning to Create</option>
  </select>
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Estimated Monthly Recyclables Generated
  </label>

  <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
    <option>Select Quantity</option>
    <option>Less than 100 kg</option>
    <option>100 - 500 kg</option>
    <option>500 - 1000 kg</option>
    <option>1 - 5 Tons</option>
    <option>5+ Tons</option>
  </select>
</div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Preferred Pickup Day
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]">
        <option>Select Day</option>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Preferred Time Slot
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]">
        <option>Select Time Slot</option>
        <option>08:00 AM - 10:00 AM</option>
        <option>10:00 AM - 12:00 PM</option>
        <option>12:00 PM - 03:00 PM</option>
        <option>03:00 PM - 06:00 PM</option>
        <option>06:00 PM - 08:00 PM</option>
      </select>
    </div>

  </div>

</div>

{/* Communication Preferences */}
<div className="pt-10"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Communication Preferences
</h2>

<p className="mb-6 text-slate-600">
  Choose how you would like UrbanLoop to communicate with you.
</p>

<div className="grid gap-4 md:grid-cols-2">

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input
      type="checkbox"
      className="h-4 w-4 accent-[#72B543]"
    />
    <span className="font-medium text-slate-700">
      Email Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input
      type="checkbox"
      className="h-4 w-4 accent-[#72B543]"
    />
    <span className="font-medium text-slate-700">
      SMS Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input
      type="checkbox"
      className="h-4 w-4 accent-[#72B543]"
    />
    <span className="font-medium text-slate-700">
      WhatsApp Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input
      type="checkbox"
      className="h-4 w-4 accent-[#72B543]"
    />
    <span className="font-medium text-slate-700">
      Sustainability & Impact Reports
    </span>
  </label>

</div>

{/* Referral Information */}
<div className="pt-10"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Referral Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      How Did You Hear About UrbanLoop?
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]">
      <option>Select Source</option>
      <option>Google Search</option>
      <option>Social Media</option>
      <option>Friend / Family</option>
      <option>Apartment Community</option>
      <option>Corporate Partner</option>
      <option>Educational Institution</option>
      <option>Newspaper / Media</option>
      <option>Event / Campaign</option>
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
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

</div>

<div className="mt-6">
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Additional Comments (Optional)
  </label>

  <textarea
    rows={4}
    placeholder="Any specific requirements, pickup notes, or comments..."
    className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
  />
</div>

{/* Declaration & Consent */}
<div className="pt-10"></div>
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
      I confirm that all information provided in this registration
      form is accurate and complete to the best of my knowledge.
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
      I consent to receiving service updates, pickup reminders,
      payment notifications and sustainability reports.
    </span>
  </label>

</div>

{/* Submit Button */}

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="flex flex-col items-center text-center">

    {
  residentialType === "individual"
    ? "Register Household With UrbanLoop"
    : residentialType === "villa"
    ? "Register Villa With UrbanLoop"
    : "Register Community With UrbanLoop"
}

    <p className="mt-4 text-sm text-slate-500">
  {
    residentialType === "community"
      ? "Our team will review your community registration and contact you shortly."
      : residentialType === "villa"
      ? "Our team will review your villa registration and contact you shortly."
      : "Our team will review your household registration and contact you shortly."
  }
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