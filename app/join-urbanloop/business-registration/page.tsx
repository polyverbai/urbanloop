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

export default function BusinessRegistrationPage() {

  const [businessType, setBusinessType] = useState("retail");

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">
        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">

            <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-4xl">
  Business Registration
</h1>

      {/* Registration Progress */}

<div className="mx-auto mt-8 max-w-4xl">

  <div className="hidden md:flex items-center justify-between">

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        1
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Contact
      </span>
    </div>

    <div className="mb-5 h-[2px] flex-1 bg-[#72B543]/30"></div>

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        2
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Business
      </span>
    </div>

    <div className="mb-5 h-[2px] flex-1 bg-[#72B543]/30"></div>

    <div className="flex flex-col items-center">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#72B543] text-xs font-bold text-white">
        3
      </div>
      <span className="mt-2 text-xs font-medium text-slate-700">
        Address
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
        Services
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
        Partner with UrbanLoop to recover value from recyclable materials,
        improve sustainability performance and support circular economy goals.
      </p>

    </div>

    <div className="mx-auto max-w-5xl">

  <div className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]">

    {/* Residential Type */}

<h2 className="mb-8 text-2xl font-bold text-slate-900">
  Select Business Type
</h2>

<div className="mb-16 grid gap-4 md:grid-cols-3">

  <button
  type="button"
  onClick={() => setBusinessType("retail")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    businessType === "retail"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Retail Store
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Retail outlets, supermarkets and commercial stores.
  </p>
</button>

<button
  type="button"
  onClick={() => setBusinessType("restaurant")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    businessType === "restaurant"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Restaurant / Café
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Restaurants, cafés, bakeries and food service outlets.
  </p>
</button>

<button
  type="button"
  onClick={() => setBusinessType("hotel")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    businessType === "hotel"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Hotel / Hospitality
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Hotels, resorts, serviced apartments and hospitality businesses.
  </p>
</button>

<button
  type="button"
  onClick={() => setBusinessType("warehouse")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    businessType === "warehouse"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Warehouse / Logistics
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Warehouses, distribution centres and logistics facilities.
  </p>
</button>

<button
  type="button"
  onClick={() => setBusinessType("manufacturing")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    businessType === "manufacturing"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Manufacturing Unit
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Factories, production facilities and industrial units.
  </p>
</button>

<button
  type="button"
  onClick={() => setBusinessType("service")}
  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
    businessType === "service"
      ? "border-[#72B543] bg-[#F8FBF4]"
      : "border-[#DDE8D0]"
  }`}
>
  <h3 className="font-semibold text-slate-900">
    Service Business
  </h3>

  <p className="mt-2 text-sm text-slate-600">
    Offices, agencies, consultancies and service providers.
  </p>
</button>

</div>

<h2 className="mb-24 text-2xl font-bold text-slate-900">
  Business Contact Information
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
  {businessType === "community"
    ? "Community Address"
    : "Business Address"}
</h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Unit / Shop Number *
        </label>
        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Business / Building Name *
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

{/* RETAIL STORE */}

{businessType === "retail" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Retail Business Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Store Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Store Type</option>
          <option>Supermarket</option>
          <option>Department Store</option>
          <option>Electronics Store</option>
          <option>Fashion Store</option>
          <option>Convenience Store</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Outlets *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Monthly Recyclables Generated *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Quantity</option>
          <option>Less than 50 kg</option>
          <option>50 - 250 kg</option>
          <option>250 - 500 kg</option>
          <option>500 kg - 1 Ton</option>
          <option>1 - 5 Tons</option>
          <option>5+ Tons</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Storage Space Available *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Option</option>
          <option>Yes</option>
          <option>No</option>
          <option>Limited</option>
        </select>
      </div>

    </div>
  </>
)}

{businessType === "restaurant" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Restaurant Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Restaurant Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Type</option>
          <option>Fine Dining</option>
          <option>Casual Dining</option>
          <option>Fast Food</option>
          <option>Café</option>
          <option>Bakery</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Seating Capacity *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Organic Waste Generated *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Quantity</option>
          <option>Less than 50 kg</option>
          <option>50 - 100 kg</option>
          <option>100 - 250 kg</option>
          <option>250+ kg</option>
        </select>
      </div>

    </div>
  </>
)}

{businessType === "hotel" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Hotel Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Hotel Category *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Category</option>
          <option>Budget Hotel</option>
          <option>Business Hotel</option>
          <option>Luxury Hotel</option>
          <option>Resort</option>
          <option>Serviced Apartment</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Rooms *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Occupancy Percentage
        </label>

        <input
          type="number"
          placeholder="e.g. 80"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{businessType === "warehouse" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Warehouse Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Warehouse Size (sq.ft.) *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Storage Capacity *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Monthly Packaging Waste Generated
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Quantity</option>
          <option>Less than 100 kg</option>
          <option>100 - 500 kg</option>
          <option>500 kg - 1 Ton</option>
          <option>1+ Ton</option>
        </select>
      </div>

    </div>
  </>
)}

{businessType === "manufacturing" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Manufacturing Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Industry Type *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Facility Size *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Monthly Recyclables Generated *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Quantity</option>
          <option>Less than 500 kg</option>
          <option>500 kg - 1 Ton</option>
          <option>1 - 5 Tons</option>
          <option>5+ Tons</option>
        </select>
      </div>

    </div>
  </>
)}

{businessType === "service" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Service Business Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Business Category *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Employee Count *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Office Area (sq.ft.)
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
  Select the recyclable material categories generated by your business operations.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

  {(businessType === "retail"
    ? [
        "Paper & Cardboard",
        "Plastic Packaging",
        "Metal",
        "Glass",
        "E-Waste",
        "Display Fixtures",
        "Wooden Crates",
      ]
    : businessType === "restaurant"
    ? [
        "Paper & Cardboard",
        "Plastic Packaging",
        "Glass Bottles",
        "Metal Cans",
        "Food Packaging",
        "Used Cooking Oil",
        "Organic Waste",
      ]
    : businessType === "hotel"
    ? [
        "Paper & Cardboard",
        "Plastic",
        "Glass Bottles",
        "Metal",
        "Furniture",
        "Textiles",
        "Mattresses",
        "E-Waste",
      ]
    : businessType === "warehouse"
    ? [
        "Cardboard",
        "Plastic Wrap",
        "Wooden Pallets",
        "Metal",
        "Packaging Materials",
        "Stretch Film",
        "E-Waste",
      ]
    : businessType === "manufacturing"
    ? [
        "Scrap Metal",
        "Industrial Plastic",
        "Wood",
        "Packaging Materials",
        "E-Waste",
        "Cardboard",
        "Production Scrap",
      ]
    : [
        "Paper",
        "Cardboard",
        "Office Furniture",
        "Office E-Waste",
        "Plastic",
        "Metal",
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
  Service Requirements
</h2>

<div className="space-y-8">

  <div>
    <label className="mb-4 block text-sm font-medium text-slate-700">
      Required Services *
    </label>

    <div className="grid gap-4 md:grid-cols-2">

      {[
        "Recurring Collection",
  "One-Time Clearance",
  "Asset Recovery",
  "Furniture Recovery",
  "IT Asset Recovery",
  "E-Waste Collection",
  "Sustainability Reporting",
  "CSR & ESG Reporting Support",
      ].map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
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
    Collection Frequency *
  </label>

  <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]">
    <option>Select Frequency</option>
    <option>Daily</option>
    <option>Weekly</option>
    <option>Bi-Weekly</option>
    <option>Monthly</option>
    <option>Quarterly</option>
    <option>On-Demand</option>
  </select>
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Preferred Collection Day
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
        Preferred Collection Time
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
  Choose how UrbanLoop should communicate service updates, collection schedules and sustainability reports.
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
<option>LinkedIn</option>
<option>Industry Event</option>
<option>Business Association</option>
<option>Corporate Referral</option>
<option>Existing Customer</option>
<option>Property Manager</option>
<option>Facility Management Partner</option>
<option>Social Media</option>
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

    <button
  type="submit"
  className="rounded-xl bg-[#72B543] px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
>
  Register Business With UrbanLoop
</button>

    <p className="mt-4 text-sm text-slate-500">
  Our team will review your business registration and contact you shortly.
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