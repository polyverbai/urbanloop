"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BusinessRegistrationPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Business Information
const [businessCategory, setBusinessCategory] =
  useState("");

const [businessName, setBusinessName] =
  useState("");

const [
  contactPersonName,
  setContactPersonName,
] = useState("");

const [mobileNumber, setMobileNumber] =
  useState("");

const [email, setEmail] =
  useState("");

const [gstNumber, setGstNumber] =
  useState("");

// Address
const [address, setAddress] =
  useState("");

const [landmark, setLandmark] =
  useState("");

const [city, setCity] =
  useState("");

const [stateName, setStateName] =
  useState("");

const [pinCode, setPinCode] =
  useState("");

// Business Profile
const [employeeCount, setEmployeeCount] =
  useState("");

const [branchCount, setBranchCount] =
  useState("");

const [
  monthlyRecyclables,
  setMonthlyRecyclables,
] = useState("");

const [
  storageSpaceAvailable,
  setStorageSpaceAvailable,
] = useState("");

// Arrays
const [
  materialCategories,
  setMaterialCategories,
] = useState<string[]>([]);

const [
  requiredServices,
  setRequiredServices,
] = useState<string[]>([]);

const [
  communicationPreferences,
  setCommunicationPreferences,
] = useState<string[]>([]);

// Pickup
const [
  collectionFrequency,
  setCollectionFrequency,
] = useState("");

const [
  collectionDay,
  setCollectionDay,
] = useState("");

const [
  collectionTime,
  setCollectionTime,
] = useState("");

// Referral
const [
  referralSource,
  setReferralSource,
] = useState("");

const [
  referralCode,
  setReferralCode,
] = useState("");

const [
  additionalComments,
  setAdditionalComments,
] = useState("");

// Consent
const [
  declarationConfirmed,
  setDeclarationConfirmed,
] = useState(false);

const [
  termsAccepted,
  setTermsAccepted,
] = useState(false);

const [
  communicationConsent,
  setCommunicationConsent,
] = useState(false);

function toggleArrayValue(
  value: string,
  current: string[],
  setter: React.Dispatch<
    React.SetStateAction<string[]>
  >
) {
  if (current.includes(value)) {
    setter(
      current.filter(
        (item) => item !== value
      )
    );
  } else {
    setter([...current, value]);
  }
}

async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  if (!businessCategory) {
    alert("Select Business Category");
    return;
  }

  if (!businessName.trim()) {
    alert("Business Name is required");
    return;
  }

  if (!contactPersonName.trim()) {
    alert(
      "Contact Person Name is required"
    );
    return;
  }

  if (
    !/^[0-9]{10}$/.test(
      mobileNumber
    )
  ) {
    alert(
      "Mobile Number must contain exactly 10 digits"
    );
    return;
  }

  if (
    email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      email
    )
  ) {
    alert(
      "Please enter a valid Email Address"
    );
    return;
  }

  if (
    !address.trim() ||
    !city.trim() ||
    !stateName.trim() ||
    !pinCode.trim()
  ) {
    alert(
      "Please complete the address"
    );
    return;
  }

  if (
    materialCategories.length ===
    0
  ) {
    alert(
      "Select at least one material category"
    );
    return;
  }

  if (
    communicationPreferences.length ===
    0
  ) {
    alert(
      "Select at least one communication preference"
    );
    return;
  }

  if (!declarationConfirmed) {
    alert(
      "Please confirm the declaration"
    );
    return;
  }

  if (!termsAccepted) {
    alert(
      "Please accept Terms & Conditions"
    );
    return;
  }

  if (!communicationConsent) {
    alert(
      "Please provide communication consent"
    );
    return;
  }

  setLoading(true);

  const { error } =
    await supabase
      .from(
        "business_registrations"
      )
      .insert([
        {
          business_category:
            businessCategory,

          business_name:
            businessName,

          contact_person_name:
            contactPersonName,

          mobile_number:
            mobileNumber,

          email,

          gst_number:
            gstNumber,

          address,
          landmark,
          city,

          state_name:
            stateName,

          pin_code:
            pinCode,

          employee_count:
            employeeCount,

          branch_count:
            branchCount,

          monthly_recyclables:
            monthlyRecyclables,

          storage_space_available:
            storageSpaceAvailable,

          material_categories:
            materialCategories,

          required_services:
            requiredServices,

          collection_frequency:
            collectionFrequency,

          collection_day:
            collectionDay,

          collection_time:
            collectionTime,

          communication_preferences:
            communicationPreferences,

          referral_source:
            referralSource,

          referral_code:
            referralCode,

          additional_comments:
            additionalComments,

          declaration_confirmed:
            declarationConfirmed,

          terms_accepted:
            termsAccepted,

          communication_consent:
            communicationConsent,
        },
      ]);

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  router.push(
    "/registration-success?type=Business%20Registration&return=/join-urbanloop"
  );
}

return (
  <>
    <Header />

    <main className="bg-white min-h-screen">
      <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">
        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-12 text-center">
  <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
    Business Registration
  </h1>

  <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
    Register your business with UrbanLoop and start managing your
    recyclable waste responsibly while generating value from your
    recyclable materials.
  </p>

  <div className="mt-8 flex justify-center">
    <Link
      href="/join-urbanloop"
      className="inline-flex items-center gap-2 rounded-xl border border-[#72B543] px-5 py-3 text-sm font-medium text-[#72B543] transition-all duration-300 hover:bg-[#72B543] hover:text-white"
    >
      ← Back
    </Link>
  </div>
</div>

<form
  onSubmit={handleSubmit}
  className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]"
>

  <h2 className="mb-8 text-2xl font-bold text-slate-900">
  Business Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Business Category *
  </label>

  <select
    value={businessCategory}
    onChange={(e) =>
      setBusinessCategory(
        e.target.value
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Category
    </option>

    <option>Retail Store</option>
    <option>Restaurant & Cafe</option>
    <option>Supermarket</option>
    <option>Bakery</option>
    <option>Pharmacy</option>
    <option>Salon & Spa</option>
    <option>Clinic</option>
    <option>Warehouse</option>
    <option>Manufacturing Unit</option>
    <option>Automobile Shop</option>
    <option>Jewellery Store</option>
    <option>Other</option>
  </select>
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Business Name *
  </label>

  <input
    type="text"
    value={businessName}
    onChange={(e) =>
      setBusinessName(
        e.target.value
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Contact Person *
  </label>

  <input
    type="text"
    value={contactPersonName}
    onChange={(e) =>
      setContactPersonName(
        e.target.value
      )
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
    onChange={(e) =>
      setMobileNumber(
        e.target.value
          .replace(/\D/g, "")
          .slice(0, 10)
      )
    }
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
    onChange={(e) =>
      setEmail(
        e.target.value
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />
</div>

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Business Address
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div className="md:col-span-2">
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Address *
  </label>

  <textarea
    rows={3}
    value={address}
    onChange={(e) =>
      setAddress(
        e.target.value
      )
    }
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
    onChange={(e) =>
      setLandmark(
        e.target.value
      )
    }
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
    onChange={(e) =>
      setPinCode(
        e.target.value
          .replace(/\D/g, "")
          .slice(0, 6)
      )
    }
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
    onChange={(e) =>
      setCity(
        e.target.value
      )
    }
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
    onChange={(e) =>
      setStateName(
        e.target.value
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />
</div>

</div>

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Business Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Number of Employees
  </label>

  <select
    value={employeeCount}
    onChange={(e) =>
      setEmployeeCount(
        e.target.value
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Employee Range
    </option>

    <option>1 - 5</option>
    <option>6 - 20</option>
    <option>21 - 50</option>
    <option>51 - 100</option>
    <option>100+</option>
  </select>
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Number of Branches
  </label>

  <input
    type="number"
    value={branchCount}
    onChange={(e) =>
      setBranchCount(
        e.target.value
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Monthly Recyclables Generated
  </label>

  <select
    value={monthlyRecyclables}
    onChange={(e) =>
      setMonthlyRecyclables(
        e.target.value
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Quantity
    </option>

    <option>
      Less than 50 kg
    </option>

    <option>
      50 - 250 kg
    </option>

    <option>
      250 - 500 kg
    </option>

    <option>
      500 kg - 1 Ton
    </option>

    <option>
      1 - 5 Tons
    </option>

    <option>
      5+ Tons
    </option>
  </select>
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Storage Space Available
  </label>

  <select
    value={storageSpaceAvailable}
    onChange={(e) =>
      setStorageSpaceAvailable(
        e.target.value
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Option
    </option>

    <option>Yes</option>
    <option>No</option>
    <option>Limited</option>
  </select>
</div>

</div>

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Material Categories
</h2>

<p className="mb-6 text-slate-600">
  Select recyclable materials generated by your business.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {[
  "Paper & Cardboard",
  "Plastic",
  "Metal",
  "Glass",
  "E-Waste",
  "Furniture",
  "Packaging Materials",
  "Organic Waste",
  "Textiles",
  "Wood",
].map((item) => (
  <label
    key={item}
    className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
  >
    <input
      type="checkbox"
      checked={materialCategories.includes(
        item
      )}
      onChange={() =>
        toggleArrayValue(
          item,
          materialCategories,
          setMaterialCategories
        )
      }
      className="h-4 w-4 accent-[#72B543]"
    />

    <span>{item}</span>
  </label>
))}
</div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Services Required
</h2>

<div className="grid gap-4 md:grid-cols-2">
{[
  "Recurring Collection",
  "One-Time Pickup",
  "E-Waste Collection",
  "Asset Recovery",
  "Furniture Recovery",
  "Sustainability Reporting",
].map((item) => (
  <label
    key={item}
    className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
  >
    <input
      type="checkbox"
      checked={requiredServices.includes(
        item
      )}
      onChange={() =>
        toggleArrayValue(
          item,
          requiredServices,
          setRequiredServices
        )
      }
      className="h-4 w-4 accent-[#72B543]"
    />

    <span>{item}</span>
  </label>
))}
</div>

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Pickup Preferences
</h2>

<div className="grid gap-6 md:grid-cols-3">

  <select
  value={collectionFrequency}
  onChange={(e) =>
    setCollectionFrequency(
      e.target.value
    )
  }
  className="rounded-xl border-2 border-slate-300 px-4 py-3"
>
  <option value="">
    Select Frequency
  </option>

  <option>Daily</option>
  <option>Weekly</option>
  <option>Bi-Weekly</option>
  <option>Monthly</option>
  <option>Quarterly</option>
  <option>On-Demand</option>
</select>

<select
  value={collectionDay}
  onChange={(e) =>
    setCollectionDay(
      e.target.value
    )
  }
  className="rounded-xl border-2 border-slate-300 px-4 py-3"
>
  <option value="">
    Select Day
  </option>

  <option>Monday</option>
  <option>Tuesday</option>
  <option>Wednesday</option>
  <option>Thursday</option>
  <option>Friday</option>
  <option>Saturday</option>
  <option>Sunday</option>
</select>

<select
  value={collectionTime}
  onChange={(e) =>
    setCollectionTime(
      e.target.value
    )
  }
  className="rounded-xl border-2 border-slate-300 px-4 py-3"
>
  <option value="">
    Select Time Slot
  </option>

  <option>
    08:00 AM - 10:00 AM
  </option>

  <option>
    10:00 AM - 12:00 PM
  </option>

  <option>
    12:00 PM - 03:00 PM
  </option>

  <option>
    03:00 PM - 06:00 PM
  </option>

  <option>
    06:00 PM - 08:00 PM
  </option>
</select>

</div>

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
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
  "Sustainability Reports",
].map((item) => (
  <label
    key={item}
    className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
  >
    <input
      type="checkbox"
      checked={communicationPreferences.includes(
        item
      )}
      onChange={() =>
        toggleArrayValue(
          item,
          communicationPreferences,
          setCommunicationPreferences
        )
      }
      className="h-4 w-4 accent-[#72B543]"
    />

    <span>{item}</span>
  </label>
))}
</div>
</div>

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Referral Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

<select
  value={referralSource}
  onChange={(e) =>
    setReferralSource(
      e.target.value
    )
  }
  className="rounded-xl border-2 border-slate-300 px-4 py-3"
>
  <option value="">
    Select Source
  </option>

  <option>
    Google Search
  </option>

  <option>
    Social Media
  </option>

  <option>
    Friend / Family
  </option>

  <option>
    Existing Customer
  </option>

  <option>
    Campaign
  </option>

  <option>
    Other
  </option>
</select>

<input
  type="text"
  value={referralCode}
  onChange={(e) =>
    setReferralCode(
      e.target.value
    )
  }
  placeholder="Referral Code"
  className="rounded-xl border-2 border-slate-300 px-4 py-3"
/>

</div>

<div className="mt-6">
  <textarea
    rows={4}
    value={additionalComments}
    onChange={(e) =>
      setAdditionalComments(
        e.target.value
      )
    }
    placeholder="Additional Comments"
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />
</div>

<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Declaration & Consent
</h2>

<div className="space-y-5">

  <label className="flex items-start gap-3">
  <input
    type="checkbox"
    checked={
      declarationConfirmed
    }
    onChange={(e) =>
      setDeclarationConfirmed(
        e.target.checked
      )
    }
    className="mt-1 h-4 w-4 accent-[#72B543]"
  />

  <span className="text-slate-700">
    I confirm that all
    information provided in this
    registration form is accurate
    and complete to the best of my
    knowledge.
  </span>
</label>

<label className="flex items-start gap-3">
  <input
    type="checkbox"
    checked={termsAccepted}
    onChange={(e) =>
      setTermsAccepted(
        e.target.checked
      )
    }
    className="mt-1 h-4 w-4 accent-[#72B543]"
  />

  <span className="text-slate-700">
    I agree to UrbanLoop's Terms &
    Conditions and Privacy Policy.
  </span>
</label>

<label className="flex items-start gap-3">
  <input
    type="checkbox"
    checked={
      communicationConsent
    }
    onChange={(e) =>
      setCommunicationConsent(
        e.target.checked
      )
    }
    className="mt-1 h-4 w-4 accent-[#72B543]"
  />

  <span className="text-slate-700">
    I consent to receiving service
    updates, pickup reminders and
    sustainability reports.
  </span>
</label>

</div>

<div className="mt-12 border-t border-[#E6EFE0] pt-10">
  <div className="flex flex-col items-center">

    <button
      type="submit"
      className="rounded-xl bg-[#72B543] px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
    >
      {loading
        ? "Submitting..."
        : "Register Business"}
    </button>

    <p className="mt-4 text-sm text-slate-500">
      Our team will review your
      registration and contact you
      shortly.
    </p>

  </div>
</div>

</form>
</div>
</section>
</main>

<Footer />
</>
);
}