"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function EducationalInstitutionRegistrationPage() {

  const [institutionType, setInstitutionType] = useState("school");

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">

              <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-4xl">
                Educational Institution Registration
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-600">
                Partner with UrbanLoop to recover recyclable materials,
                furniture, laboratory assets, books and e-waste while
                supporting sustainability goals.
              </p>

            </div>

            <div className="mx-auto max-w-5xl">

              <div className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]">

                {/* Institution Type Section Goes Here */}
<h2 className="mb-8 text-2xl font-bold text-slate-900">
  Select Institution Type
</h2>

<div className="mb-16 grid gap-4 md:grid-cols-3">

  <button
    type="button"
    onClick={() => setInstitutionType("school")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      institutionType === "school"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      School
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Primary, secondary and higher secondary schools.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setInstitutionType("college")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      institutionType === "college"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      College
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Arts, science, commerce and professional colleges.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setInstitutionType("university")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      institutionType === "university"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      University
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Public, private and deemed universities.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setInstitutionType("training")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      institutionType === "training"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Training Institute
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Vocational, technical and skill development institutes.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setInstitutionType("coaching")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      institutionType === "coaching"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Coaching Center
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Coaching centres and tutorial academies.
    </p>
  </button>

  <button
    type="button"
    onClick={() => setInstitutionType("research")}
    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
      institutionType === "research"
        ? "border-[#72B543] bg-[#F8FBF4]"
        : "border-[#DDE8D0]"
    }`}
  >
    <h3 className="font-semibold text-slate-900">
      Research Institution
    </h3>

    <p className="mt-2 text-sm text-slate-600">
      Research labs, innovation centres and think tanks.
    </p>
  </button>

</div>

<h2 className="mb-10 text-2xl font-bold text-slate-900">
  Institution Contact Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Name *
    </label>

    <input
      type="text"
      placeholder="Institution Name"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Code / Registration Number
    </label>

    <input
      type="text"
      placeholder="Registration Number"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Contact Person Name *
    </label>

    <input
      type="text"
      placeholder="Contact Person"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Designation *
    </label>

    <input
      type="text"
      placeholder="Principal / Dean / Administrator"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Mobile Number *
    </label>

    <input
      type="tel"
      placeholder="Mobile Number"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Alternate Mobile Number
    </label>

    <input
      type="tel"
      placeholder="Alternate Mobile"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Official Email Address *
    </label>

    <input
      type="email"
      placeholder="Email Address"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Website
    </label>

    <input
      type="text"
      placeholder="Institution Website"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

</div>

<div className="pt-10">

</div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Institution Address
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Building / Campus Name *
    </label>

    <input
      type="text"
      placeholder="Campus Name"
      className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none focus:border-[#72B543]"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Type Location
    </label>

    <input
      type="text"
      placeholder="Main Campus / Branch Campus"
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

{/* SCHOOL */}

{institutionType === "school" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      School Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          School Category *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Category</option>
          <option>Primary School</option>
          <option>Secondary School</option>
          <option>Higher Secondary School</option>
          <option>International School</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Student Strength *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* COLLEGE */}

{institutionType === "college" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      College Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          College Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Type</option>
          <option>Arts & Science</option>
          <option>Engineering</option>
          <option>Medical</option>
          <option>Management</option>
          <option>Commerce</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Student Strength *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* UNIVERSITY */}

{institutionType === "university" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      University Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          University Type *
        </label>

        <select className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3">
          <option>Select Type</option>
          <option>Public University</option>
          <option>Private University</option>
          <option>Deemed University</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Students *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* TRAINING INSTITUTE */}

{institutionType === "training" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Training Institute Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Training Category *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Trainee Capacity *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* COACHING CENTER */}

{institutionType === "coaching" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Coaching Center Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Coaching Category *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Student Capacity *
        </label>

        <input
          type="number"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

    </div>
  </>
)}

{/* RESEARCH INSTITUTION */}

{institutionType === "research" && (
  <>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Research Institution Profile
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Research Domain *
        </label>

        <input
          type="text"
          className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Number of Researchers *
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
  Select the recyclable materials generated by your institution.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

  {[
    "Paper & Examination Papers",
    "Books & Library Materials",
    "Cardboard",
    "Plastic",
    "Metal",
    "Glass",
    "Furniture",
    "Classroom Furniture",
    "Laboratory Equipment",
    "IT Assets",
    "Computers & Laptops",
    "Printers & Peripherals",
    "E-Waste",
    "Electrical Equipment",
    "Batteries",
    "Cables & Networking Equipment",
    "Uniforms & Textiles",
    "Sports Equipment",
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
        "Library Asset Recovery",
        "Furniture Recovery",
        "Laboratory Equipment Recovery",
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
      </select>
    </div>

  </div>

</div>

<div className="pt-10">

</div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Communication Preferences
</h2>

<p className="mb-6 text-slate-600">
  Choose how UrbanLoop should communicate collection schedules,
  service updates and sustainability reports.
</p>

<div className="grid gap-4 md:grid-cols-2">

  {[
    "Email Notifications",
    "SMS Notifications",
    "WhatsApp Notifications",
    "Sustainability Reports",
    "Impact Reports",
    "Collection Reminders",
  ].map((item) => (
    <label
      key={item}
      className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]"
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
      <option>Social Media</option>
      <option>Educational Network</option>
      <option>Existing Institution</option>
      <option>Faculty Referral</option>
      <option>Student Referral</option>
      <option>Event / Seminar</option>
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
    placeholder="Any additional information..."
    className="w-full rounded-xl border-2 border-slate-300 bg-white px-4 py-3"
  />
</div>

<div className="pt-10">

</div>

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
      I consent to receiving service updates and sustainability reports.
    </span>
  </label>

</div>

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="flex flex-col items-center text-center">

    <button
      type="submit"
      className="rounded-xl bg-[#72B543] px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
    >
      Register Institution With UrbanLoop
    </button>

    <p className="mt-4 text-sm text-slate-500">
      Our team will review your institution registration and contact you shortly.
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