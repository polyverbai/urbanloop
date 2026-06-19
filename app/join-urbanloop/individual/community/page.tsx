"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function apartmentandcommunityRegistrationPage() {
  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            <div className="mb-12 text-center">

              <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Appartment & Community Registration
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Register your apartment & community with UrbanLoop and schedule recyclable
                material pickups conveniently from your residence.
              </p>

            </div>

<div className="mb-10 flex justify-center">

  <Link
    href="/join-urbanloop/individual"
    className="inline-flex items-center gap-2 rounded-xl border border-[#72B543] px-5 py-3 text-sm font-medium text-[#72B543] transition-all duration-300 hover:bg-[#72B543] hover:text-white"
  >
    ← Back
  </Link>

</div>

            <div className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]">

              {/* Personal Information */}

              <h2 className="mb-8 text-2xl font-bold text-slate-900">
                Appartment & Community Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Alternate Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

              </div>

              {/* Residential Address */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

              <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
                Appartment & Community Address
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Apartment & Community Number *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Apartment & Community Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Street / Area *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Landmark
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    City *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    State *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

              </div>

              {/* Apartment & Community Information */}
              <div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Community Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Community Name *
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Community Type *
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 px-4 py-3">
      <option>Select Community Type</option>
      <option>Apartment Complex</option>
      <option>Gated Community</option>
      <option>Villa Community</option>
      <option>Housing Society</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Number Of Residential Units *
    </label>

    <input
      type="number"
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Approximate Resident Population
    </label>

    <input
      type="number"
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

</div>

              {/* Apartment & Community Profile */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

              <h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Apartment & Community Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Apartmenbt & Community Size *
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 px-4 py-3">
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

    <select className="w-full rounded-xl border-2 border-slate-300 px-4 py-3">
      <option>Select Option</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

</div>

              {/* Remaining Sections */}

              {/* Material Categories */}
              {/* Pickup Preferences */}
              {/* Communication Preferences */}
              {/* Referral Information */}
              {/* Declaration & Consent */}


{/* Material Categories */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Material Categories
</h2>

<p className="mb-6 text-slate-600">
  Select the recyclable material categories applicable to your apartment & community.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

{[
  "Paper & Cardboard",
  "Plastic",
  "Metal",
  "Glass",
  "Community E-Waste",
  "Furniture",
  "Organic Waste",
  "Garden Waste",
  "Bulk Waste",
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
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

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
          className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]"
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
        Preferred Pickup Day
      </label>

      <select className="w-full rounded-xl border-2 border-slate-300 px-4 py-3">
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

      <select className="w-full rounded-xl border-2 border-slate-300 px-4 py-3">
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

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Community Operations
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Occupancy Percentage
    </label>

    <input
      type="number"
      placeholder="e.g. 85"
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Existing Waste Management Vendor
    </label>

    <input
      type="text"
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Dedicated Collection Area Available?
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 px-4 py-3">
      <option>Select Option</option>
      <option>Yes</option>
      <option>No</option>
      <option>Planning To Create</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Estimated Monthly Recyclables Generated
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 px-4 py-3">
      <option>Select Quantity</option>
      <option>Less than 100 kg</option>
      <option>100 - 500 kg</option>
      <option>500 - 1000 kg</option>
      <option>1 - 5 Tons</option>
      <option>5+ Tons</option>
    </select>
  </div>

</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Communication Preferences
</h2>

<p className="mb-6 text-slate-600">
  Choose how you would like UrbanLoop to communicate with you.
</p>

<div className="grid gap-4 md:grid-cols-2">

  {[
    "Email Notifications",
    "SMS Notifications",
    "WhatsApp Notifications",
    "Sustainability & Impact Reports",
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
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Referral Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      How Did You Hear About UrbanLoop?
    </label>

    <select className="w-full rounded-xl border-2 border-slate-300 px-4 py-3">
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
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
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
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />

</div>
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

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
      I confirm that all information provided in this registration form is accurate and complete.
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

  <div className="text-center">

    <button
      type="submit"
      className="rounded-xl bg-[#72B543] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
    >
      Register Apartment & Community With UrbanLoop
    </button>

    <p className="mt-4 text-sm text-slate-500">
      Our team will review your apartment & community registration and contact you shortly.
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