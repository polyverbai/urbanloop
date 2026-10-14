"use client";

import { validateRetailRegistration } from "./components/validation";
import BusinessContactSection from "./components/BusinessContactSection";
import BusinessAddressSection from "./components/BusinessAddressSection";
import RetailBusinessProfileSection from "./components/RetailBusinessProfileSection";
import MaterialCategoriesSection from "./components/MaterialCategoriesSection";
import ServiceRequirementsSection from "./components/ServiceRequirementsSection";
import CommunicationPreferencesSection from "./components/CommunicationPreferencesSection";
import CollectionPreferencesSection from "./components/CollectionPreferencesSection"; 
import ReferralInformationSection from "./components/ReferralInformationSection";
import DeclarationConsentSection from "./components/DeclarationConsentSection";
import { useState } from "react";
import { useNotification } from "@/components/ui/notification/useNotification";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegistrationDuplicateModal



from "@/components/common/RegistrationDuplicateModal";


export default function RetailRegistrationPage() {
  const [loading, setLoading] = useState(false);
const router = useRouter();
const notify = useNotification();
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

  // Contact Information
  
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [alternateMobile, setAlternateMobile] = useState("");

  // Address
  const [shopNumber, setShopNumber] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [streetArea, setStreetArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pinCode, setPinCode] = useState("");

  // Retail Profile
  const [businessProfileType, setBusinessProfileType] =
    useState("");

  const [outletCount, setOutletCount] =
    useState("");

  const [monthlyRecyclables, setMonthlyRecyclables] =
    useState("");

  const [storageSpaceAvailable,
    setStorageSpaceAvailable] =
    useState("");

  // Materials
  const [materialCategories,
    setMaterialCategories] =
    useState<string[]>([]);

  // Services
  const [requiredServices,
    setRequiredServices] =
    useState<string[]>([]);

  // Collection
  const [collectionFrequency,
    setCollectionFrequency] =
    useState("");

  const [collectionDay,
    setCollectionDay] =
    useState("");

  const [collectionTime,
    setCollectionTime] =
    useState("");

  // Communication
  const [communicationPreferences,
    setCommunicationPreferences] =
    useState<string[]>([]);

  // Referral
  const [referralSource,
    setReferralSource] =
    useState("");

  const [referralCode,
    setReferralCode] =
    useState("");

  const [additionalComments,
    setAdditionalComments] =
    useState("");

  // Consent
  const [declarationConfirmed,
    setDeclarationConfirmed] =
    useState(false);

  const [termsAccepted,
    setTermsAccepted] =
    useState(false);

  const [communicationConsent,
    setCommunicationConsent] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const validationErrors = validateRetailRegistration({
  fullName,
  mobileNumber,
  email,
  alternateMobile,

  shopNumber,
  buildingName,
  streetArea,
  landmark,
  city,
  stateName,
  pinCode,

  businessProfileType,
  outletCount,
  monthlyRecyclables,
  storageSpaceAvailable,

  materialCategories,

  requiredServices,

  collectionFrequency,
  collectionDay,
  collectionTime,

  communicationPreferences,

  referralSource,
  referralCode,
  additionalComments,

  declarationConfirmed,
  termsAccepted,
  communicationConsent,
});

if (
  Object.keys(validationErrors).length > 0
) {
  setErrors(validationErrors);
  return;
}

setErrors({});


    setLoading(true);

    try {

const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  throw new Error(
    "User authentication required."
  );
}

const payload = {
  full_name: fullName,
  mobile_number: mobileNumber,
  email,
  alternate_mobile: alternateMobile,

  shop_number: shopNumber,
  building_name: buildingName,
  street_area: streetArea,
  landmark,
  city,
  state_name: stateName,
  pin_code: pinCode,

  business_profile_type:
    businessProfileType,

  outlet_count:
    outletCount,

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

  auth_user_id:
    user.id,
};

const response = await fetch(
  "/api/business-registration",
  {
    method: "POST",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify(payload),
  }
);

const result =
  await response.json();

if (!response.ok) {

  if (response.status === 409) {

    setDuplicateField(
      result.field ?? "Information"
    );

    setDuplicateValue(
      result.value ?? ""
    );

    setShowDuplicateModal(
      true
    );

    return;
  }

  throw new Error(
    result.message
  );
}


  // Redirect to common success page.

router.push(
  `/registration-success?type=Business Registration&registrationNumber=${result.registrationNumber}&returnUrl=/join-urbanloop/categories&returnText=Back To Categories`
);


} catch (error: any) {

  console.error(
    "Business Registration Failed:",
    error
  );

  console.log(error);
console.log(error.message);
  const errorMessage =
    error?.message?.toLowerCase() ?? "";


  if (
    errorMessage.includes(
      "business_mobile_unique"
    )
  ) {

    router.push(
  `/registration-duplicate?type=Business Registration&field=Mobile Number&value=${mobileNumber}&returnUrl=/join-urbanloop/business-registration/retail&returnText=Back To Registration Form`
);

  }

  else if (
    errorMessage.includes(
      "business_email_unique"
    )
  ) {

    router.push(
  `/registration-duplicate?type=Business Registration&field=Email Address&value=${email}&returnUrl=/join-urbanloop/business-registration/retail&returnText=Back To Registration Form`
);

  }

  
  else {

    alert(
      "Something went wrong while submitting your registration. Please try again."
    );

  }

} finally {

  setLoading(false);

}
  }

  return (
    <>
      <Header />

      <main className="min-h-screen">

        <section className="py-20">

          <div className="mx-auto max-w-5xl px-6">

            <div className="mb-12 text-center">

              <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Retail & Commercial Establishments Registration
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Register your retail business
                with UrbanLoop and recover
                value from recyclable
                materials.
              </p>


            </div>

  <div className="mb-10 flex justify-center">

  <Link
    href="/join-urbanloop/categories"
  className="inline-flex items-center gap-2 rounded-xl bg-[#D7EFC2] px-5 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg">
    ← Back
  </Link>

</div>
            <form
              onSubmit={handleSubmit}
              className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]"
            >

<BusinessContactSection
  fullName={fullName}
  mobileNumber={mobileNumber}
  email={email}
  alternateMobile={alternateMobile}
  errors={errors}
  setFullName={setFullName}
  setMobileNumber={setMobileNumber}
  setEmail={setEmail}
  setAlternateMobile={setAlternateMobile}
/>

              <BusinessAddressSection
  shopNumber={shopNumber}
  buildingName={buildingName}
  streetArea={streetArea}
  landmark={landmark}
  city={city}
  stateName={stateName}
  pinCode={pinCode}
  errors={errors}
  setShopNumber={setShopNumber}
  setBuildingName={setBuildingName}
  setStreetArea={setStreetArea}
  setLandmark={setLandmark}
  setCity={setCity}
  setStateName={setStateName}
  setPinCode={setPinCode}
/>

              <RetailBusinessProfileSection
  businessProfileType={businessProfileType}
  outletCount={outletCount}
  monthlyRecyclables={monthlyRecyclables}
  storageSpaceAvailable={storageSpaceAvailable}
  errors={errors}
  setBusinessProfileType={setBusinessProfileType}
  setOutletCount={setOutletCount}
  setMonthlyRecyclables={setMonthlyRecyclables}
  setStorageSpaceAvailable={setStorageSpaceAvailable}
/>

<MaterialCategoriesSection
  businessProfileType={businessProfileType}
  materialCategories={materialCategories}
  errors={errors}
  setMaterialCategories={setMaterialCategories}
/>

<ServiceRequirementsSection
  requiredServices={requiredServices}
  errors={errors}
  setRequiredServices={setRequiredServices}
/>

<CollectionPreferencesSection
  collectionFrequency={collectionFrequency}
  collectionDay={collectionDay}
  collectionTime={collectionTime}

  errors={errors}

  setCollectionFrequency={setCollectionFrequency}
  setCollectionDay={setCollectionDay}
  setCollectionTime={setCollectionTime}
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

{/* SUBMIT */}

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="flex flex-col items-center">

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
  type="Business Registration"
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