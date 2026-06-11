"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HospitalRegistrationPage() {

  const [hospitalType, setHospitalType] = useState("hospital");

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">

              <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-4xl">
                Hospital & Healthcare Registration
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
                Partner with UrbanLoop to recover recyclable materials,
                furniture, IT assets and non-biomedical waste while
                supporting sustainability and circular economy goals.
              </p>

            </div>

            <div className="mx-auto max-w-5xl">

              <div className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]">

                {/* Hospital Type Section Goes Here */}
<h2 className="mb-8 text-2xl font-bold text-slate-900">
  Select Healthcare Facility Type
</h2>

<div className="mb-16 grid gap-4 md:grid-cols-3">

  <button
    type="button"
    onClick={() => setHospitalType("hospital")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      hospitalType === "hospital"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Hospital
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Multi-specialty, specialty and general hospitals.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setHospitalType("clinic")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      hospitalType === "clinic"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Clinic
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Private clinics and specialty practices.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setHospitalType("diagnostic")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      hospitalType === "diagnostic"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Diagnostic Center
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Labs, imaging centres and diagnostic facilities.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setHospitalType("medicalcollege")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      hospitalType === "medicalcollege"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Medical College
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Medical colleges and teaching hospitals.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setHospitalType("nursinghome")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      hospitalType === "nursinghome"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Nursing Home
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Nursing homes and assisted care facilities.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setHospitalType("network")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      hospitalType === "network"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Healthcare Network
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Multiple hospitals, clinics and healthcare groups.
    </p>
  </button>

</div>

<h2 className="mb-10 text-2xl font-bold text-slate-900">
  Healthcare Facility Contact Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Facility Name *
    </label>

    <input
      type="text"
      placeholder="Facility Name"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Registration Number
    </label>

    <input
      type="text"
      placeholder="Registration Number"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Contact Person *
    </label>

    <input
      type="text"
      placeholder="Administrator / Facility Manager"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Designation *
    </label>

    <input
      type="text"
      placeholder="Designation"
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
      Official Email *
    </label>

    <input
      type="email"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

</div>

<div className="pt-10">

</div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Healthcare Facility Address
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Building / Facility Name *
    </label>

    <input
      type="text"
      placeholder="Facility Name"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Facility Type Location
    </label>

    <input
      type="text"
      placeholder="Main Facility / Branch"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div className="md:col-span-2">
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Street Address *
    </label>

    <input
      type="text"
      placeholder="Street Address"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Landmark
    </label>

    <input
      type="text"
      placeholder="Nearby Landmark"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      PIN Code *
    </label>

    <input
      type="text"
      placeholder="PIN Code"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      City *
    </label>

    <input
      type="text"
      placeholder="City"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      State *
    </label>

    <input
      type="text"
      placeholder="State"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

</div>

<div className="pt-10">

</div>

{/* HOSPITAL */}

{hospitalType === "hospital" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Hospital Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Hospital Category *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Category</option>
          <option>General Hospital</option>
          <option>Multi-Specialty Hospital</option>
          <option>Specialty Hospital</option>
          <option>Government Hospital</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Beds *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Daily Patient Footfall
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

{/* CLINIC */}

{hospitalType === "clinic" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Clinic Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Clinic Type *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Doctors *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* DIAGNOSTIC CENTER */}

{hospitalType === "diagnostic" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Diagnostic Center Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Diagnostic Facility Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Type</option>
          <option>Laboratory</option>
          <option>Imaging Centre</option>
          <option>Diagnostic Lab</option>
          <option>Multi-Diagnostic Centre</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Daily Test Volume *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* MEDICAL COLLEGE */}

{hospitalType === "medicalcollege" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Medical College Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Students *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Teaching Hospital Beds *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* NURSING HOME */}

{hospitalType === "nursinghome" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Nursing Home Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Bed Capacity *
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
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* HEALTHCARE NETWORK */}

{hospitalType === "network" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Healthcare Network Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Facilities *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Total Bed Capacity
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

<div className="pt-10">

</div>

{/* Material Categories */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Material Categories
</h2>

<p className="mb-6 text-slate-600">
  Select recyclable and recoverable materials generated by your healthcare facility.
  Biomedical waste should continue to be handled through your authorized biomedical waste management partner.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

  {[
    "Paper & Cardboard",
    "Plastic",
    "Metal",
    "Glass",
    "Furniture",
    "Hospital Furniture",
    "Office Furniture",
    "IT Assets",
    "Computers & Laptops",
    "Servers & Networking Equipment",
    "Printers & Peripherals",
    "E-Waste",
    "Electrical Equipment",
    "Batteries",
    "Packaging Materials",
    "Storage Racks",
    "Non-Biomedical Medical Equipment",
    "Air Conditioners & Appliances",
  ].map((item) => (
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

{/* Collection & Service Requirements */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Collection & Service Requirements
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
        "Furniture Recovery",
        "Hospital Furniture Recovery",
        "Medical Equipment Recovery",
        "IT Asset Recovery",
        "E-Waste Collection",
        "Asset Buyback Program",
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
        Collection Frequency *
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
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
        Biomedical Waste Vendor
      </label>

      <input
        type="text"
        placeholder="Authorized Biomedical Waste Vendor"
        className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Dedicated Storage Area Available?
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
        Preferred Collection Day
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
        <option>Select Day</option>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
      </select>
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Preferred Collection Time
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
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

<div className="pt-10">

</div>

{/* Communication Preferences */}

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Communication Preferences
</h2>

<p className="mb-6 text-slate-600">
  Choose how UrbanLoop should communicate service updates,
  collection schedules, recovery reports and sustainability reports.
</p>

<div className="grid gap-4 md:grid-cols-2">

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input type="checkbox" className="h-4 w-4 accent-[#72B543]" />
    <span className="font-medium text-slate-700">
      Email Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input type="checkbox" className="h-4 w-4 accent-[#72B543]" />
    <span className="font-medium text-slate-700">
      SMS Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input type="checkbox" className="h-4 w-4 accent-[#72B543]" />
    <span className="font-medium text-slate-700">
      WhatsApp Notifications
    </span>
  </label>

  <label className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]">
    <input type="checkbox" className="h-4 w-4 accent-[#72B543]" />
    <span className="font-medium text-slate-700">
      Sustainability Reports
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
      <option>Healthcare Association</option>
      <option>Industry Conference</option>
      <option>Hospital Network</option>
      <option>Existing Customer</option>
      <option>LinkedIn</option>
      <option>Social Media</option>
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
    placeholder="Additional requirements, collection notes or comments..."
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
      I consent to receiving service notifications, collection schedules,
      recovery reports and sustainability reports.
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
      Register Healthcare Facility With UrbanLoop
    </button>

    <p className="mt-4 text-sm text-slate-500">
      Our healthcare partnerships team will review your registration
      and contact you shortly.
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