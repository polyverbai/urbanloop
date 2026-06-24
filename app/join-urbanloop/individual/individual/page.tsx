"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/lib/supabase";

export default function IndividualHouseholdRegistrationPage() {

const [loading, setLoading] = useState(false);
const router = useRouter();
const [fullName, setFullName] = useState("");
const [mobileNumber, setMobileNumber] = useState("");
const [email, setEmail] = useState("");
const [alternateMobile, setAlternateMobile] = useState("");

const [houseFlatNumber, setHouseFlatNumber] = useState("");
const [buildingName, setBuildingName] = useState("");
const [streetArea, setStreetArea] = useState("");
const [landmark, setLandmark] = useState("");
const [city, setCity] = useState("");
const [stateName, setStateName] = useState("");
const [pinCode, setPinCode] = useState("");

const [propertyType, setPropertyType] = useState("");
const [occupancyType, setOccupancyType] = useState("");

const [householdSize, setHouseholdSize] = useState("");
const [monthlyRecyclables, setMonthlyRecyclables] = useState("");

const [materialCategories, setMaterialCategories] = useState<string[]>([]);

const [pickupFrequency, setPickupFrequency] = useState("");
const [pickupDay, setPickupDay] = useState("");
const [pickupTime, setPickupTime] = useState("");

const [communicationPreferences, setCommunicationPreferences] =
  useState<string[]>([]);

const [referralSource, setReferralSource] = useState("");
const [referralCode, setReferralCode] = useState("");
const [additionalComments, setAdditionalComments] = useState("");

const [declarationConfirmed, setDeclarationConfirmed] =
  useState(false);

const [termsAccepted, setTermsAccepted] =
  useState(false);

const [communicationConsent, setCommunicationConsent] =
  useState(false);

const handleMaterialCategory = (value: string) => {
    setMaterialCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleCommunicationPreference = (value: string) => {
    setCommunicationPreferences((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };



  const handleSubmit = async () => {
  try {
    if (
      !fullName ||
      !mobileNumber ||
      !houseFlatNumber ||
      !streetArea ||
      !city ||
      !stateName ||
      !pinCode ||
      !propertyType
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("residential_registrations")
      .insert([
        {
          residential_type: "Individual Household",

          full_name: fullName,
          mobile_number: mobileNumber,
          email: email,
          alternate_mobile: alternateMobile,

          house_flat_number: houseFlatNumber,
          building_name: buildingName,
          street_area: streetArea,
          landmark: landmark,
          city: city,
          state_name: stateName,
          pin_code: pinCode,

          property_type: propertyType,
          occupancy_type: occupancyType,

          household_size: householdSize,
          monthly_recyclables: monthlyRecyclables,

          material_categories: materialCategories,

          pickup_frequency: pickupFrequency,
          pickup_day: pickupDay,
          pickup_time: pickupTime,

          communication_preferences:
            communicationPreferences,

          referral_source: referralSource,
          referral_code: referralCode,

          additional_comments: additionalComments,

          declaration_confirmed:
            declarationConfirmed,

          terms_accepted:
            termsAccepted,

          communication_consent:
            communicationConsent,
        },
      ]);

    if (error) throw error;

    router.push("/registration-success");

  } catch (err) {
    console.error(err);
    alert("Unable to submit registration.");
  } finally {
    setLoading(false);
  }
};



  return (
    <>

      <Header />

      <main className="bg-white min-h-screen">

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            <div className="mb-12 text-center">

              <h1 className="text-5xl font-bold text-slate-900">
                Household Registration
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
                Register your household with UrbanLoop and schedule recyclable
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
                Personal Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>
                  <input
  type="text"
  value={fullName}
  onChange={(e) =>
    setFullName(e.target.value)
  }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Mobile Number *
                  </label>
                  <input
  type="tel"
  value={mobileNumber}
  onChange={(e) => setMobileNumber(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Alternate Mobile Number
                  </label>
  <input
  type="tel"
  value={alternateMobile}
  onChange={(e) => setAlternateMobile(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

              </div>

              {/* Residential Address */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

              <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
                Residential Address
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    House / Flat Number *
                  </label>
  <input
  type="text"
  value={houseFlatNumber}
  onChange={(e) => setHouseFlatNumber(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Building / Apartment Name
                  </label>
                  <input
  type="text"
  value={buildingName}
  onChange={(e) => setBuildingName(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Street / Area *
                  </label>
                  <input
  type="text"
  value={streetArea}
  onChange={(e) => setStreetArea(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Landmark
                  </label>
                  <input
  type="text"
  value={landmark}
  onChange={(e) => setLandmark(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    PIN Code *
                  </label>
  <input
  type="text"
  value={pinCode}
  onChange={(e) => setPinCode(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    City *
                  </label>
                  <input
  type="text"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    State *
                  </label>
                  <input
  type="text"
  value={stateName}
  onChange={(e) => setStateName(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
                </div>

              </div>

              {/* Property Information */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

              <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
                Property Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Property Type *
                  </label>
<select
  value={propertyType}
  onChange={(e) => setPropertyType(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
>
                    <option value="">Select Property Type</option>
<option>Apartment</option>
<option>Community</option>
<option>Independent House</option>
<option>Villa</option>
<option>Row House</option>
<option>Farm House</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Occupancy Type
                  </label>
<select
  value={occupancyType}
  onChange={(e) => setOccupancyType(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
>
                    <option>Select Occupancy Type</option>
                    <option>Owner Occupied</option>
                    <option>Tenant</option>
                    <option>Company Accommodation</option>
                  </select>
                </div>

              </div>

              {/* Household Profile */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

              <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
                Household Profile
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Household Size
                  </label>
<select
  value={householdSize}
  onChange={(e) => setHouseholdSize(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
>
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
<select
  value={monthlyRecyclables}
  onChange={(e) => setMonthlyRecyclables(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
>
                    <option>Select Quantity</option>
                    <option>Less than 10 kg</option>
                    <option>10 - 25 kg</option>
                    <option>25 - 50 kg</option>
                    <option>50 - 100 kg</option>
                    <option>100+ kg</option>
                  </select>
                </div>

              </div>

{/* Material Categories */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Material Categories
</h2>

<p className="mb-6 text-slate-600">
  Select the recyclable material categories applicable to your household.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

{[
  "Paper & Cardboard",
  "Plastic",
  "Metal",
  "Glass",
  "E-Waste",
  "Appliances",
  "Furniture",
  "Textiles",
  "Organic Waste",
].map((item) => (
  <label
    key={item}
    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 hover:border-[#72B543] hover:bg-[#F8FBF4]"
  >
    <input
  type="checkbox"
  checked={materialCategories.includes(item)}
  onChange={() => handleMaterialCategory(item)}
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
  value={option}
  checked={pickupFrequency === option}
  onChange={(e) =>
    setPickupFrequency(e.target.value)
  }
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

      <select
  value={pickupDay}
  onChange={(e) =>
    setPickupDay(e.target.value)
  }
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
>
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

      <select
  value={pickupTime}
  onChange={(e) =>
    setPickupTime(e.target.value)
  }
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
>
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
  checked={communicationPreferences.includes(item)}
  onChange={() =>
    handleCommunicationPreference(item)
  }
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
<select
  value={referralSource}
  onChange={(e) => setReferralSource(e.target.value)}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
>
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
  value={referralCode}
  onChange={(e) => setReferralCode(e.target.value)}
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
  value={additionalComments}
  onChange={(e) => setAdditionalComments(e.target.value)}
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
  checked={declarationConfirmed}
  onChange={(e) =>
    setDeclarationConfirmed(
      e.target.checked
    )
  }
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I confirm that all information provided in this registration form is accurate and complete.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={termsAccepted}
  onChange={(e) =>
    setTermsAccepted(e.target.checked)
  }
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I agree to UrbanLoop's Terms & Conditions and Privacy Policy.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={communicationConsent}
  onChange={(e) =>
    setCommunicationConsent(e.target.checked)
  }
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
  type="button"
  onClick={handleSubmit}
  disabled={loading}
      className="rounded-xl bg-[#72B543] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
    >
      {loading
  ? "Submitting..."
  : "Register Household With UrbanLoop"}
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