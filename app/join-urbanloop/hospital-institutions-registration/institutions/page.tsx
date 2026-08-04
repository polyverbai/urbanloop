"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegistrationDuplicateModal
from "@/components/common/RegistrationDuplicateModal";

export default function HospitalInstitutionRegistrationPage() {
  const router = useRouter();
const [loading, setLoading] = useState(false);
const [
  institutionCategory,
  setInstitutionCategory,
] = useState("");

const [errors, setErrors] = useState<Record<string, string>>({});

const [showDuplicateModal,
  setShowDuplicateModal] =
  useState(false);

const [duplicateField,
  setDuplicateField] =
  useState("");

const [duplicateValue,
  setDuplicateValue] =
  useState("");

// Company Information
const [institutionName, setInstitutionName] =
  useState("");

const [website, setWebsite] =
  useState("");

const [
  yearEstablished,
  setYearEstablished,
] = useState("");

// Contact Information
const [
  contactPersonName,
  setContactPersonName,
] = useState("");

const [designation, setDesignation] =
  useState("");

const [mobileNumber, setMobileNumber] =
  useState("");

const [email, setEmail] =
  useState("");

  // Address
const [
  address,
  setAddress,
] = useState("");

const [landmark, setLandmark] =
  useState("");

const [city, setCity] =
  useState("");

const [stateName, setStateName] =
  useState("");

const [pinCode, setPinCode] =
  useState("");

  // Arrays
const [
  materialCategories,
  setMaterialCategories,
] = useState<string[]>([]);

const [
  communicationPreferences,
  setCommunicationPreferences,
] = useState<string[]>([]);

// Pickup
const [
  pickupFrequency,
  setPickupFrequency,
] = useState("");


const [pickupDay, setPickupDay] =
  useState("");

const [pickupTime, setPickupTime] =
  useState("");

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

function validateForm() {
  const newErrors: Record<string, string> = {};

if (!institutionCategory)
  newErrors.institutionCategory =
    "Please select Institution Category";

  if (!institutionName.trim())
    newErrors.institutionName =
      "Institution Name is required";

  if (!contactPersonName.trim())
    newErrors.contactPersonName =
      "Contact Person Name is required";

  if (!designation.trim())
    newErrors.designation =
      "Designation is required";

  if (!/^\d{10}$/.test(mobileNumber))
    newErrors.mobileNumber =
      "Mobile number should be 10 digits";

  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      email
    )
  ) {
    newErrors.email =
        "Please enter a valid email address";
  }

  if (!address.trim())
    newErrors.address =
      "Institution Address is required";

  if (!landmark.trim())
    newErrors.landmark =
      "Landmark is required";

  if (!city.trim())
    newErrors.city =
      "City is required";

  if (!stateName.trim())
    newErrors.stateName =
      "State is required";

  if (!pinCode.trim())
    newErrors.pinCode =
      "PIN Code is required";

  if (materialCategories.length === 0)
    newErrors.materialCategories =
      "Select at least one category";

    if (!pickupFrequency)
    newErrors.pickupFrequency =
      "Select pickup frequency";

    if (!pickupDay)
    newErrors.pickupDay =
      "Select pickup day";

  if (!pickupTime)
    newErrors.pickupTime =
      "Select pickup time";

  if (
    communicationPreferences.length === 0
  )
    newErrors.communicationPreferences =
      "Select at least one preference";

  if (!referralSource)
    newErrors.referralSource =
      "Select referral source";

  if (!declarationConfirmed)
    newErrors.declarationConfirmed =
      "Required";

  if (!termsAccepted)
    newErrors.termsAccepted =
      "Required";

  if (!communicationConsent)
    newErrors.communicationConsent =
      "Required";

  return newErrors;
}

async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  const validationErrors =
    validateForm();

  if (
    Object.keys(validationErrors).length > 0
  ) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});

  setLoading(true);

// Check duplicate Mobile Number.

const { data: existingMobile } =
await supabase
  .from(
    "hospital_registrations"
  )
  .select("id")
  .eq(
    "mobile_number",
    mobileNumber
  );

if (
  existingMobile &&
  existingMobile.length > 0
) {

  setDuplicateField(
    "Mobile Number"
  );

  setDuplicateValue(
    mobileNumber
  );

  setShowDuplicateModal(
    true
  );

  setLoading(false);

  return;

}

// Check duplicate Email Address.

const { data: existingEmail } =
await supabase
  .from(
    "hospital_registrations"
  )
  .select("id")
  .eq(
    "email",
    email
  );

if (
  existingEmail &&
  existingEmail.length > 0
) {

  setDuplicateField(
    "Email Address"
  );

  setDuplicateValue(
    email
  );

  setShowDuplicateModal(
    true
  );

  setLoading(false);

  return;

}

  const { data, error } =
    await supabase
    .from(
      "hospital_registrations"
    )
    .insert([
      {
        institution_category:
  institutionCategory,

        institution_name:
          institutionName,

        website,

        year_established:
  yearEstablished,

        contact_person_name:
          contactPersonName,

        designation,

        mobile_number:
          mobileNumber,

        email,

        address:
  address,

        landmark,

        city,

        state_name:
          stateName,

        pin_code:
          pinCode,

        material_categories:
          materialCategories,

        pickup_frequency:
          pickupFrequency,


        pickup_day:
          pickupDay,

        pickup_time:
          pickupTime,

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
    ])

    .select("id")
    .single();

    setLoading(false);

if (error) {
  alert(error.message);
  return;
}

const { count } =
await supabase
  .from(
    "hospital_registrations"
  )
  .select("*", {
    count: "exact",
    head: true,
  });

const registrationNumber =
  `UL-HOS-${String(
    count
  ).padStart(6, "0")}`;

await supabase
  .from(
    "hospital_registrations"
  )
  .update({
    registration_number:
      registrationNumber,
  })
  .eq(
    "id",
    data.id
  );

router.push(
`/registration-success?type=Hospital & Healthcare Institution Registration&registrationNumber=${registrationNumber}&return=/join-urbanloop/categories&returnText=Back To Categories`
);

}

  return (

    
    <>
      <Header />

      <main className="bg-white min-h-screen">

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            {/* Hero Section */}

            <div className="mb-12 text-center">

<h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Hospital & Healthcare Institution Registration
              </h1>

<p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Register your hospital or healthcare institution with UrbanLoop to responsibly recover recyclable materials, office assets and e-waste while building a cleaner and more sustainable healthcare environment.
              </p>

              <div className="mt-8 flex justify-center">

                <Link
                      href="/join-urbanloop/categories"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#72B543] px-5 py-3 text-sm font-medium text-[#72B543] transition-all duration-300 hover:bg-[#72B543] hover:text-white"
                >
                  ← Back
                </Link>

              </div>

            </div>

            {/* Form Container */}

            <form
  onSubmit={handleSubmit}
  className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]"
>

             <h2 className="mb-8 text-2xl font-bold text-slate-900">
  Institution Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  {/* Institution Category */}

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Category *
    </label>

    <select
      value={institutionCategory}
      onChange={(e) =>
        setInstitutionCategory(e.target.value)
      }
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.institutionCategory
    ? "border-red-500"
    : "border-slate-300"
}`}
    >
      <option value="">
        Select Institution
      </option>

      <option>Hospital</option>
<option>Clinic</option>
<option>Diagnostic Centre</option>
<option>Nursing Home</option>
<option>Medical College</option>
<option>Blood Bank</option>
<option>Rehabilitation Centre</option>
<option>Healthcare Institution</option>
<option>Other</option>

    </select>

{errors.institutionCategory && (
  <p className="mt-1 text-sm text-red-500">
    {errors.institutionCategory}
  </p>
)}

  </div>

  {/* Institution Name */}

  <div>

    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Name *
    </label>

    <input
      type="text"
      value={institutionName}
      onChange={(e) =>
        setInstitutionName(e.target.value)
      }
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.institutionName
    ? "border-red-500"
    : "border-slate-300"
}`}
    />
{errors.institutionName && (
  <p className="mt-1 text-sm text-red-500">
    {errors.institutionName}
  </p>
)}

  </div>

  {/* Website */}

  <div>

    <label className="mb-2 block text-sm font-medium text-slate-700">
      Website
    </label>

    <input
      type="text"
      value={website}
      onChange={(e) =>
        setWebsite(e.target.value)
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />

  </div>

   {/* Year Established */}

  <div>

    <label className="mb-2 block text-sm font-medium text-slate-700">
      Year Established
    </label>

    <input
      type="number"
      value={yearEstablished}
      onChange={(e) =>
        setYearEstablished(e.target.value)
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />

  </div>

  <div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Contact Person Name *
  </label>

  <input
    type="text"
    value={contactPersonName}
    onChange={(e) =>
      setContactPersonName(
        e.target.value
      )
    }
    className={`w-full rounded-xl border-2 px-4 py-3 ${
      errors.contactPersonName
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

  {errors.contactPersonName && (
    <p className="mt-1 text-sm text-red-500">
      {errors.contactPersonName}
    </p>
  )}
</div>

  <div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Designation *
  </label>

  <input
    type="text"
    value={designation}
    onChange={(e) =>
      setDesignation(e.target.value)
    }
    className={`w-full rounded-xl border-2 px-4 py-3 ${
      errors.designation
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

  {errors.designation && (
    <p className="mt-1 text-sm text-red-500">
      {errors.designation}
    </p>
  )}
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
    className={`w-full rounded-xl border-2 px-4 py-3 ${
      errors.mobileNumber
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

   {errors.mobileNumber && (
    <p className="mt-1 text-sm text-red-500">
      {errors.mobileNumber}
    </p>
  )}
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Email Address *
  </label>

  <input
    type="email"
    value={email}
    onChange={(e) =>
      setEmail(
        e.target.value
      )
    }
    className={`w-full rounded-xl border-2 px-4 py-3 ${
      errors.email
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

  {errors.email && (
    <p className="mt-1 text-sm text-red-500">
      {errors.email}
    </p>
  )}
</div>
</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Institution Address
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div className="md:col-span-2">
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Address *
    </label>

    <input
      type="text"
      value={address}
      onChange={(e) =>
        setAddress(e.target.value)
      }
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.address
    ? "border-red-500"
    : "border-slate-300"
}`}
    />

{errors.address && (
  <p className="mt-1 text-sm text-red-500">
    {errors.address}
  </p>
)}

  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Landmark *
    </label>

    <input
      type="text"
      value={landmark}
      onChange={(e) =>
        setLandmark(e.target.value)
      }
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.landmark
    ? "border-red-500"
    : "border-slate-300"
}`}

    />
{errors.landmark && (
  <p className="mt-1 text-sm text-red-500">
    {errors.landmark}
  </p>
)}

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
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.pinCode
    ? "border-red-500"
    : "border-slate-300"
}`}
    />
  
  {errors.pinCode && (
  <p className="mt-1 text-sm text-red-500">
    {errors.pinCode}
  </p>
)}
  
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      City *
    </label>

    <input
      type="text"
      value={city}
      onChange={(e) =>
        setCity(e.target.value)
      }
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.city
    ? "border-red-500"
    : "border-slate-300"
}`}

    />
{errors.city && (
  <p className="mt-1 text-sm text-red-500">
    {errors.city}
  </p>
)}

  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      State *
    </label>

    <input
      type="text"
      value={stateName}
      onChange={(e) =>
        setStateName(e.target.value)
      }
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.stateName
    ? "border-red-500"
    : "border-slate-300"
}`}
    />
{errors.stateName && (
  <p className="mt-1 text-sm text-red-500">
    {errors.stateName}
  </p>
)}

  </div>

</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Material Categories
</h2>

<p className="mb-6 text-slate-600">
Select the recyclable, non-biomedical materials generated within your hospital or healthcare institution.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

{[
"Paper & Cardboard",
  "Plastic",
  "Glass",
  "Metal",
  "E-Waste",
  "Hospital Furniture",
  "Medical Equipment (Non-Biomedical)",
  "Electronic & Electrical Equipment",
  "Packaging Materials",
  "Medical Records & Archive Paper",
  "Uniforms & Linen",
  "Kitchen & Cafeteria Recyclables",
  "Batteries",
  "Lighting Fixtures"
].map((item) => (

<label
key={item}
className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
>

<input
type="checkbox"
checked={materialCategories.includes(item)}
onChange={() =>
toggleArrayValue(
item,
materialCategories,
setMaterialCategories
)
}
className="h-4 w-4 accent-[#72B543]"
/>

<span className="font-medium text-slate-700">
{item}
</span>

</label>

))}

</div>

{errors.materialCategories && (
  <p className="mt-2 text-sm text-red-500">
    {errors.materialCategories}
  </p>
)}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Pickup Preferences
</h2>

<div className="space-y-8">

  <div>

    <label className="mb-4 block text-sm font-medium text-slate-700">
      Preferred Pickup Frequency *
    </label>

    <div
  className={`grid gap-4 md:grid-cols-2 rounded-xl p-3 ${
    errors.pickupFrequency
      ? "border-2 border-red-500"
      : ""
  }`}
>

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
  value={option}
  checked={
    pickupFrequency ===
    option
  }
  onChange={(e) =>
    setPickupFrequency(
      e.target.value
    )
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

{errors.pickupFrequency && (
  <p className="mt-2 text-sm text-red-500">
    {errors.pickupFrequency}
  </p>
)}

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
  Preferred Pickup Day *
</label>

      <select
  value={pickupDay}
  onChange={(e) =>
    setPickupDay(
      e.target.value
    )
  }
  className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.pickupDay
    ? "border-red-500"
    : "border-slate-300"
}`}
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
   
   {errors.pickupDay && (
  <p className="mt-1 text-sm text-red-500">
    {errors.pickupDay}
  </p>
)}

    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
  Preferred Time Slot *
</label>

      <select
  value={pickupTime}
  onChange={(e) =>
    setPickupTime(
      e.target.value
    )
  }
  className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.pickupTime
    ? "border-red-500"
    : "border-slate-300"
}`}
>
        <option>Select Time Slot</option>
        <option>08:00 AM - 10:00 AM</option>
        <option>10:00 AM - 12:00 PM</option>
        <option>12:00 PM - 03:00 PM</option>
        <option>03:00 PM - 06:00 PM</option>
        <option>06:00 PM - 08:00 PM</option>
      </select>
   
   {errors.pickupTime && (
  <p className="mt-1 text-sm text-red-500">
    {errors.pickupTime}
  </p>
)}
   
    </div>

  </div>

</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Communication Preferences
</h2>

<p className="mb-6 text-slate-600">
  Choose how you would like UrbanLoop to communicate with you.
</p>

<div
  className={`grid gap-4 md:grid-cols-2 rounded-xl p-3 ${
    errors.communicationPreferences
      ? "border-2 border-red-500"
      : ""
  }`}
>

  {[
    "Email Notifications",
    "SMS Notifications",
    "WhatsApp Notifications",
    "Sustainability Reports",
  ].map((item) => (
    <label
      key={item}
      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
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

      <span className="font-medium text-slate-700">
        {item}
      </span>
    </label>
  ))}

</div>

{errors.communicationPreferences && (
  <p className="mt-2 text-sm text-red-500">
    {errors.communicationPreferences}
  </p>
)}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Referral Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      How Did You Hear About UrbanLoop?
    </label>

    <select
  value={referralSource}
  onChange={(e) =>
    setReferralSource(
      e.target.value
    )
  }
  className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.referralSource
    ? "border-red-500"
    : "border-slate-300"
}`}
>
      <option>Select Source</option>
      <option>Google Search</option>
      <option>Social Media</option>
      <option>Friend / Family</option>
      <option>Corporate Partner</option>
      <option>Healthcare Institution</option>
      <option>Newspaper / Media</option>
      <option>Event / Campaign</option>
      <option>Other</option>
    </select>

    {errors.referralSource && (
  <p className="mt-1 text-sm text-red-500">
    {errors.referralSource}
  </p>
)}

  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Referral Code (Optional)
    </label>

    <input
  type="text"
  value={referralCode}
  onChange={(e) =>
    setReferralCode(
      e.target.value
    )
  }
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
  value={additionalComments}
  onChange={(e) =>
    setAdditionalComments(
      e.target.value
    )
  }
  placeholder="Any specific requirements, pickup notes, or comments..."
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>

</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Declaration & Consent
</h2>

<div
  className={`space-y-5 rounded-xl p-4 ${
    errors.declarationConfirmed ||
    errors.termsAccepted ||
    errors.communicationConsent
      ? "border-2 border-red-500"
      : ""
  }`}
>

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
      I confirm that all information provided in this registration form is accurate and complete to the best of my knowledge.
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
      I agree to UrbanLoop's Terms & Conditions and Privacy Policy.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={communicationConsent}
  onChange={(e) =>
    setCommunicationConsent(
      e.target.checked
    )
  }
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I consent to receiving service updates, pickup reminders, notifications and sustainability reports.
    </span>
  </label>

</div>

{(errors.declarationConfirmed ||
  errors.termsAccepted ||
  errors.communicationConsent) && (
  <p className="mt-3 text-sm text-red-500">
    Please accept all declarations and consents.
  </p>
)}

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="text-center">

    <button
  type="submit"
  className="rounded-xl bg-[#72B543] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
>
  {loading
    ? "Submitting..."
    : "Register Hospital & Healthcare Institution"}
</button>
    <p className="mt-4 text-sm text-slate-500">
      Our team will review your registration and contact you shortly.
    </p>
    
</div>
</div>
</form>
</div>
        </section>

      </main>

<RegistrationDuplicateModal
  type="Hospital & Healthcare Institution Registration"
  field={duplicateField}
  value={duplicateValue}
  isOpen={showDuplicateModal}
  onClose={() =>
    setShowDuplicateModal(false)
  }
/>

      <Footer />
    </>
  );
}
