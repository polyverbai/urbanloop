"use client";

import { useState } from "react";
import { useNotification } from "@/components/ui/notification/useNotification";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegistrationDuplicateModal
from "@/components/common/RegistrationDuplicateModal";

import { supabase } from "@/lib/supabase";

import CompanyInformationSection from "./components/CompanyInformationSection";
import ContactInformationSection from "./components/ContactInformationSection";
import AddressSection from "./components/AddressSection";
import SustainabilityInitiativesSection
from "./components/SustainabilityInitiativesSection";
import MaterialCategoriesSection from "./components/MaterialCategoriesSection";
import CollectionPreferencesSection from "./components/CollectionPreferencesSection";
import CommunicationPreferencesSection from "./components/CommunicationPreferencesSection";
import ReferralInformationSection from "./components/ReferralInformationSection";
import DeclarationConsentSection from "./components/DeclarationConsentSection";

import { validateCorporateRegistration } from "./components/validation";

export default function ITCompanyRegistration() {

  const router = useRouter();
  const notify =
  useNotification();

const [
  showDuplicateModal,
  setShowDuplicateModal,
] = useState(false);

const [
  duplicateField,
  setDuplicateField,
] = useState("");

const [
  duplicateValue,
  setDuplicateValue,
] = useState("");

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [registrationNumber, setRegistrationNumber] =
    useState("");

  const [registrationCompleted, setRegistrationCompleted] =
    useState(false);

  /* ==========================================
     COMPANY INFORMATION
  ========================================== */

  const [
  companyCategory,
  setCompanyCategory,
] = useState("IT & Technology Company");

  const [companyName, setCompanyName] =
    useState("");

  const [gstNumber, setGstNumber] =
    useState("");

  const [panNumber, setPanNumber] =
    useState("");

  const [website, setWebsite] =
    useState("");

  const [yearEstablished, setYearEstablished] =
    useState("");

  /* ==========================================
     CONTACT INFORMATION
  ========================================== */

  const [contactPersonName, setContactPersonName] =
    useState("");

  const [designation, setDesignation] =
    useState("");

  const [mobileNumber, setMobileNumber] =
    useState("");

  const [email, setEmail] =
    useState("");

  /* ==========================================
     OFFICE ADDRESS
  ========================================== */

  const [officeUnitNumber, setOfficeUnitNumber] =
    useState("");

  const [buildingName, setBuildingName] =
    useState("");

  const [streetArea, setStreetArea] =
    useState("");

  const [landmark, setLandmark] =
    useState("");

  const [city, setCity] =
    useState("");

  const [stateName, setStateName] =
    useState("");

  const [pinCode, setPinCode] =
    useState("");

  /* ==========================================
     SUSTAINABILITY
  ========================================== */

  const [sustainabilityInitiatives,
    setSustainabilityInitiatives] =
    useState<string[]>([]);

  /* ==========================================
     MATERIALS
  ========================================== */

  const [materialCategories,
    setMaterialCategories] =
    useState<string[]>([]);

  /* ==========================================
     COLLECTION
  ========================================== */

  const [monthlyRecyclables,
    setMonthlyRecyclables] =
    useState("");

  const [pickupFrequency,
    setPickupFrequency] =
    useState("");

  const [pickupDay,
    setPickupDay] =
    useState("");

  const [pickupTime,
    setPickupTime] =
    useState("");

  /* ==========================================
     COMMUNICATION
  ========================================== */

  const [communicationPreferences,
    setCommunicationPreferences] =
    useState<string[]>([]);

  /* ==========================================
     REFERRAL
  ========================================== */

  const [referralSource,
    setReferralSource] =
    useState("");

  const [referralCode,
    setReferralCode] =
    useState("");

  const [additionalComments,
    setAdditionalComments] =
    useState("");

  /* ==========================================
     DECLARATION
  ========================================== */

  const [declarationConfirmed,
    setDeclarationConfirmed] =
    useState(false);

  const [termsAccepted,
    setTermsAccepted] =
    useState(false);

  const [communicationConsent,
    setCommunicationConsent] =
    useState(false);

    /* ==========================================
   VALIDATE FORM
========================================== */

function validateForm() {

  const formData = {

    companyInformation: {
      companyCategory,
      companyName,
      gstNumber,
      panNumber,
      website,
      yearEstablished,
    },

    contactInformation: {
      contactPersonName,
      designation,
      mobileNumber,
      email,
    },

    officeAddress: {
      officeUnitNumber,
      buildingName,
      streetArea,
      landmark,
      city,
      stateName,
      pinCode,
    },

    sustainabilityInitiatives: {
      sustainabilityInitiatives,
    },

    materialCollection: {
      materialCategories,
    },

    collectionPreferences: {
      monthlyRecyclables,
      pickupFrequency,
      pickupDay,
      pickupTime,
    },

    communicationPreferences: {
      communicationPreferences,
    },

    referralInformation: {
      referralSource,
      referralCode,
      additionalComments,
    },

    declarationConsent: {
      declarationConfirmed,
      termsAccepted,
      communicationConsent,
    },

  };

  return validateCorporateRegistration(formData);

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
  "/api/corporate-registration",
  {

    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({

      auth_user_id: user.id,

      company_category:
        companyCategory,

      company_name:
        companyName,

      gst_number:
        gstNumber,

      pan_number:
        panNumber,

      website,

      year_established:
        yearEstablished,

      contact_person_name:
        contactPersonName,

      designation,

      mobile_number:
        mobileNumber,

      email,

      office_unit_number:
        officeUnitNumber,

      building_name:
        buildingName,

      street_area:
        streetArea,

      landmark,

      city,

      state_name:
        stateName,

      pin_code:
        pinCode,

      sustainability_initiatives:
        sustainabilityInitiatives,

      material_categories:
        materialCategories,

      monthly_recyclables:
        monthlyRecyclables,

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

const result =
  await response.json();

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

setRegistrationNumber(
  registrationNumber
);

setRegistrationCompleted(true);

setLoading(false);

router.push(
  `/registration-success?type=Corporate Registration&registrationNumber=${registrationNumber}&return=/join-urbanloop/categories&returnText=Back To Categories`
);

}

return (

  <>
    <Header />

    <main className="min-h-screen">

      <section className="py-20">

        <div className="mx-auto max-w-5xl px-6">

          {/* Hero Section */}

          <div className="mb-12 text-center">

            <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Corporate IT Company Registration
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              Register your IT company with UrbanLoop to enable responsible recycling,
              sustainability initiatives and efficient recyclable waste collection.
            </p>

            <div className="mt-8 flex justify-center">

              <Link
  href="/join-urbanloop/categories"
  className="inline-flex items-center gap-2 rounded-xl bg-[#D7EFC2] px-5 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
>
  ← Back
</Link>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]"
          >
            <CompanyInformationSection
  companyCategory={companyCategory}
  setCompanyCategory={setCompanyCategory}
  companyName={companyName}
  gstNumber={gstNumber}
  panNumber={panNumber}
  website={website}
  yearEstablished={yearEstablished}
  errors={errors}
  setCompanyName={setCompanyName}
  setGstNumber={setGstNumber}
  setPanNumber={setPanNumber}
  setWebsite={setWebsite}
  setYearEstablished={setYearEstablished}
/>

<ContactInformationSection
  contactPersonName={contactPersonName}
  designation={designation}
  mobileNumber={mobileNumber}
  email={email}
  errors={errors}
  setContactPersonName={setContactPersonName}
  setDesignation={setDesignation}
  setMobileNumber={setMobileNumber}
  setEmail={setEmail}
/>

<AddressSection
  officeUnitNumber={officeUnitNumber}
  buildingName={buildingName}
  streetArea={streetArea}
  landmark={landmark}
  city={city}
  stateName={stateName}
  pinCode={pinCode}
  errors={errors}
  setOfficeUnitNumber={setOfficeUnitNumber}
  setBuildingName={setBuildingName}
  setStreetArea={setStreetArea}
  setLandmark={setLandmark}
  setCity={setCity}
  setStateName={setStateName}
  setPinCode={setPinCode}
/>

<SustainabilityInitiativesSection
  sustainabilityInitiatives={sustainabilityInitiatives}
  setSustainabilityInitiatives={
    setSustainabilityInitiatives
  }
/>

<MaterialCategoriesSection
  materialCategories={materialCategories}
  errors={errors}
  setMaterialCategories={setMaterialCategories}
/>

<CollectionPreferencesSection
  monthlyRecyclables={monthlyRecyclables}
  pickupFrequency={pickupFrequency}
  pickupDay={pickupDay}
  pickupTime={pickupTime}
  errors={errors}
  setMonthlyRecyclables={setMonthlyRecyclables}
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

<div className="mt-10 flex flex-col items-center">

  <button
    type="submit"
    disabled={loading}
    className={`rounded-xl bg-[#D7EFC2] px-8 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 ${
      loading
        ? "cursor-not-allowed bg-gray-400 text-white"
        : "hover:bg-[#72B543] hover:text-black hover:shadow-lg"
    }`}
  >
    {loading
      ? "Submitting..."
      : "Submit Registration"}
  </button>

  <p className="mt-4 text-center text-sm text-slate-500">
    Our team will review your registration and contact you shortly.
  </p>

</div>

</form>

          <RegistrationDuplicateModal
  type="Corporate Registration"
  field={duplicateField}
  value={duplicateValue}
  isOpen={showDuplicateModal}
  onClose={() =>
    setShowDuplicateModal(false)
  }
/>

        </div>

      </section>

    </main>

    <Footer />

  </>

);

}