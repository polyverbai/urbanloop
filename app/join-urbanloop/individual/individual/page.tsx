"use client";

import { useNotification } from "@/components/ui/notification/useNotification";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link"; 
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegistrationDuplicateModal
from "@/components/common/RegistrationDuplicateModal";
import ContactInformationSection
from "../components/ContactInformationSection";

import AddressSection
from "../components/AddressSection";


import MaterialCategoriesSection
from "../components/MaterialCategoriesSection";

import CollectionPreferencesSection
from "../components/CollectionPreferencesSection";

import CommunicationPreferencesSection
from "../components/CommunicationPreferencesSection";

import ReferralInformationSection
from "../components/ReferralInformationSection";

import DeclarationConsentSection
from "../components/DeclarationConsentSection";

export default function ResidenceRegistrationPage() {

  const router = useRouter();

  const notify =
    useNotification();

  const [loading, setLoading] =
    useState(false);
const [
  residencyCategory,
  setResidencyCategory,
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


// Residence Information
const [residenceName, setResidenceName] =
  useState("");


// Contact Information
const [
  contactPersonName,
  setContactPersonName,
] = useState("");


const [mobileNumber, setMobileNumber] =
  useState("");

const [email, setEmail] =
  useState("");

  // Address
const [
  houseFlatNumber,
  setHouseFlatNumber,
] = useState("");

const [
  buildingName,
  setBuildingName,
] = useState("");

const [
  streetArea,
  setStreetArea,
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

  if (!residencyCategory) {
  newErrors.residencyCategory =
    "Please select your residential category.";
}

if (!contactPersonName.trim()) {
  newErrors.contactPersonName =
    "Please enter your name.";
}


  if (!/^\d{10}$/.test(mobileNumber))
    newErrors.mobileNumber =
      "Mobile number should be 10 digits";

  if (
  email.trim() &&
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    email
  )
) {
  newErrors.email =
    "Please enter a valid email address";
}

  if (!houseFlatNumber.trim())
  newErrors.houseFlatNumber =
    "House / Flat Number is required";

if (!buildingName.trim())
  newErrors.buildingName =
    "Building / Apartment Name is required";

if (!streetArea.trim())
  newErrors.streetArea =
    "Street / Area is required";

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

  const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  notify.error(
  "Session Expired",
  "Please login again."
);

  setLoading(false);

  return;
}

  const response = await fetch(
  "/api/residential-registration",
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
  auth_user_id: user.id,

  residency_category: residencyCategory,

  contact_person_name:
    contactPersonName,

  mobile_number: mobileNumber,

  email,

  house_flat_number:
    houseFlatNumber,

  building_name:
    buildingName,

  street_area:
    streetArea,

  landmark,

  city,

  state_name: stateName,

  pin_code: pinCode,

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
    }),
  }
);

const result = await response.json();

if (!response.ok) {

  if (response.status === 409) {

    if (
      result.message.includes("mobile")
    ) {

      setDuplicateField(
        "Mobile Number"
      );

      setDuplicateValue(
        mobileNumber
      );

    } else if (
      result.message.includes("email")
    ) {

      setDuplicateField(
        "Email Address"
      );

      setDuplicateValue(
        email
      );

    }

    setShowDuplicateModal(true);

    setLoading(false);

    return;

  }

  notify.error(
    "Registration Failed",
    result.message
  );

  setLoading(false);

  return;

}

const registrationNumber =
  result.registrationNumber;

setLoading(false);

router.push(
  `/registration-success?type=Residential Registration&registrationNumber=${registrationNumber}&return=/join-urbanloop/categories&returnText=Back To Categories`
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
                Residence Registration
              </h1>

<p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Register your individual residence, apartments, villas, societies etc. with UrbanLoop to enable responsible recycling efficiently and build a greener, more sustainable locality.
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

             

<ContactInformationSection
  residencyCategory={residencyCategory}
  contactPersonName={contactPersonName}
  mobileNumber={mobileNumber}
  email={email}
  errors={errors}
  setResidencyCategory={setResidencyCategory}
  setContactPersonName={setContactPersonName}
  setMobileNumber={setMobileNumber}
  setEmail={setEmail}
/>

<AddressSection
  houseFlatNumber={houseFlatNumber}
  buildingName={buildingName}
  streetArea={streetArea}
  landmark={landmark}
  city={city}
  stateName={stateName}
  pinCode={pinCode}
  errors={errors}
  setHouseFlatNumber={setHouseFlatNumber}
  setBuildingName={setBuildingName}
  setStreetArea={setStreetArea}
  setLandmark={setLandmark}
  setCity={setCity}
  setStateName={setStateName}
  setPinCode={setPinCode}
/>

<MaterialCategoriesSection
  materialCategories={materialCategories}
  errors={errors}
  setMaterialCategories={setMaterialCategories}
/>

<CollectionPreferencesSection
  pickupFrequency={pickupFrequency}
  pickupDay={pickupDay}
  pickupTime={pickupTime}
  errors={errors}
  setPickupFrequency={setPickupFrequency}
  setPickupDay={setPickupDay}
  setPickupTime={setPickupTime}
/>

<CommunicationPreferencesSection
  communicationPreferences={communicationPreferences}
  errors={errors}
  setCommunicationPreferences={setCommunicationPreferences}
/>

<ReferralInformationSection
  referralSource={referralSource}
  referralCode={referralCode}
  additionalComments={additionalComments}
  errors={errors}
  setReferralSource={setReferralSource}
  setReferralCode={setReferralCode}
  setAdditionalComments={setAdditionalComments}
/>

<DeclarationConsentSection
  declarationConfirmed={declarationConfirmed}
  termsAccepted={termsAccepted}
  communicationConsent={communicationConsent}
  errors={errors}
  setDeclarationConfirmed={setDeclarationConfirmed}
  setTermsAccepted={setTermsAccepted}
  setCommunicationConsent={setCommunicationConsent}
/>


<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="text-center">

    <button
  type="submit"
  className="rounded-xl bg-[#72B543] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
>
  {loading
    ? "Submitting..."
    : "Register Your Residence"}
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
  type="Residential Registration"
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
