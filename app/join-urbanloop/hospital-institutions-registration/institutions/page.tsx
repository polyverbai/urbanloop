"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import RegistrationDuplicateModal from "@/components/common/RegistrationDuplicateModal";

import InstitutionInformationSection from "./components/InstitutionInformationSection";
import InstitutionAddressSection from "./components/InstitutionAddressSection";
import MaterialCollectionSection from "./components/MaterialCollectionSection";
import CommunicationSection from "./components/CommunicationSection";
import ReferralSection from "./components/ReferralSection";
import DeclarationSection from "./components/DeclarationSection";

import type {
  HospitalInstitutionForm,
  InstitutionInformation,
  ContactInformation,
  InstitutionAddress,
  MaterialCollection,
  CommunicationInformation,
  ReferralInformation,
  DeclarationInformation,
} from "./components/types";

import { validateForm } from "./components/validation";
import { supabase } from "@/lib/supabase";

const INITIAL_FORM_DATA: HospitalInstitutionForm = {
  institutionInformation: {
    institutionCategory: "",
    institutionName: "",
    website: "",
    yearEstablished: "",
  },

  contactInformation: {
    contactPersonName: "",
    designation: "",
    mobileNumber: "",
    email: "",
  },

  institutionAddress: {
    address: "",
    landmark: "",
    city: "",
    stateName: "",
    pinCode: "",
  },

  materialCollection: {
    materialCategories: [],
    pickupFrequency: "",
    pickupDay: "",
    pickupTime: "",
  },

  communicationInformation: {
    communicationPreferences: [],
  },

  referralInformation: {
    referralSource: "",
    referralCode: "",
    additionalComments: "",
  },

  declarationInformation: {
    declarationConfirmed: false,
    termsAccepted: false,
    communicationConsent: false,
  },
};

export default function Page() {
  const router = useRouter();

  const [formData, setFormData] =
    useState<HospitalInstitutionForm>(
      INITIAL_FORM_DATA
    );

    const [loading, setLoading] = useState(false);


  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitSuccess, setSubmitSuccess] =
    useState(false);

  const [showDuplicateModal, setShowDuplicateModal] =
    useState(false);

  const [duplicateField, setDuplicateField] =
    useState<"mobileNumber" | "email">(
      "mobileNumber"
    );

  const [duplicateValue, setDuplicateValue] =
    useState("");

    const handleInstitutionChange = (
    field: keyof InstitutionInformation,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      institutionInformation: {
        ...prev.institutionInformation,
        [field]: value,
      },
    }));
  };

  const handleContactChange = (
    field: keyof ContactInformation,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      contactInformation: {
        ...prev.contactInformation,
        [field]: value,
      },
    }));
  };

  const handleAddressChange = (
    field: keyof InstitutionAddress,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      institutionAddress: {
        ...prev.institutionAddress,
        [field]: value,
      },
    }));
  };

  const handleMaterialCollectionChange = (
    field: keyof MaterialCollection,
    value: string | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      materialCollection: {
        ...prev.materialCollection,
        [field]: value,
      },
    }));
  };

  const handleCommunicationChange = (
    field: keyof CommunicationInformation,
    value: string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      communicationInformation: {
        ...prev.communicationInformation,
        [field]: value,
      },
    }));
  };

  const handleReferralChange = (
    field: keyof ReferralInformation,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      referralInformation: {
        ...prev.referralInformation,
        [field]: value,
      },
    }));
  };

const handleDeclarationChange = (
    field: keyof DeclarationInformation,
    value: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      declarationInformation: {
        ...prev.declarationInformation,
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSubmitSuccess(false);

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
console.log("Step 1: Validation passed");

    try {
      /*
       * Duplicate Mobile Check
       */
      const { data: existingMobile } = await supabase
        .from("hospital_registrations")
        .select("id")
        .eq(
          "mobile_number",
          formData.contactInformation.mobileNumber
        )
        .maybeSingle();

      if (existingMobile) {
        setDuplicateField("mobileNumber");
        setDuplicateValue(
          formData.contactInformation.mobileNumber
        );
        setShowDuplicateModal(true);
        return;
      }

      /*
       * Duplicate Email Check
       */
      const { data: existingEmail } = await supabase
        .from("hospital_registrations")
        .select("id")
        .eq(
          "email",
          formData.contactInformation.email
        )
        .maybeSingle();

      if (existingEmail) {
        setDuplicateField("email");
        setDuplicateValue(
          formData.contactInformation.email
        );
        setShowDuplicateModal(true);
        return;
      }

      console.log("Step 2: Duplicate check passed");

      /*
       * Insert Registration
       */
      const { data: insertedData, error } = await supabase
        .from("hospital_registrations")
        .insert({
          institution_category:
            formData.institutionInformation
              .institutionCategory,

          institution_name:
            formData.institutionInformation
              .institutionName,

          website:
            formData.institutionInformation.website,

          year_established:
            formData.institutionInformation
              .yearEstablished,

          contact_person_name:
            formData.contactInformation
              .contactPersonName,

          designation:
            formData.contactInformation.designation,

          mobile_number:
            formData.contactInformation.mobileNumber,

          email:
            formData.contactInformation.email,

          address:
            formData.institutionAddress.address,

          landmark:
            formData.institutionAddress.landmark,

          city:
            formData.institutionAddress.city,

          state_name:
            formData.institutionAddress.stateName,

          pin_code:
            formData.institutionAddress.pinCode,

          material_categories:
            formData.materialCollection
              .materialCategories,

          pickup_frequency:
            formData.materialCollection
              .pickupFrequency,

          pickup_day:
            formData.materialCollection.pickupDay,

          pickup_time:
            formData.materialCollection.pickupTime,

          communication_preferences:
            formData.communicationInformation
              .communicationPreferences,

          referral_source:
            formData.referralInformation
              .referralSource,

          referral_code:
            formData.referralInformation
              .referralCode,

          additional_comments:
            formData.referralInformation
              .additionalComments,

          declaration_confirmed:
            formData.declarationInformation
              .declarationConfirmed,

          terms_accepted:
            formData.declarationInformation
              .termsAccepted,

          communication_consent:
            formData.declarationInformation
              .communicationConsent,

          registration_status: "Pending",
        })
        .select("id")
        .single();

      if (error) {
        throw error;
      }

      console.log("Step 3: Insert successful", insertedData);

      /*
       * Generate Registration Number
       */
      const registrationNumber =
        `UL-HOS-${String(insertedData.id)
          .slice(0, 6)
          .toUpperCase()}`;

      /*
       * Update Registration Number
       */
      const { error: updateError } =
        await supabase
          .from("hospital_registrations")
          .update({
            registration_number:
              registrationNumber,
          })
          .eq("id", insertedData.id);

      if (updateError) {
        throw updateError;
      }

      console.log("Step 4: Registration number updated");

      /*
       * Success
       */
      setSubmitSuccess(true);

      setFormData(INITIAL_FORM_DATA);
      setErrors({});

      router.push(
        `/registration-success?type=${encodeURIComponent(
          "Hospital & Healthcare Institution Registration"
        )}&registrationNumber=${encodeURIComponent(
          registrationNumber
        )}&return=${encodeURIComponent(
          "/join-urbanloop/categories"
        )}&returnText=${encodeURIComponent(
          "Back To Categories"
        )}`
      );
    } catch (error) {
      console.error(
        "Hospital registration submission failed:",
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
          
              <main className="min-h-screen">
      
            <section className="py-20">
      
              <div className="mx-auto max-w-5xl px-6">
      
                {/* Hero Section */}
      
                <div className="mb-12 text-center">

      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Hospital & Healthcare Institution Registration
      </h1>

      <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600">
        Register your hospital, clinic, diagnostic centre, nursing home, medical
        college or healthcare institution with UrbanLoop to enable sustainable
        waste collection and environmentally responsible recycling services.
      </p>

      <div className="mt-12 flex justify-center">

              <Link
  href="/join-urbanloop/categories"
  className="inline-flex items-center gap-2 rounded-xl bg-[#D7EFC2] px-5 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
>
  ← Back
</Link>

            </div>
    </div>

      <div className="rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden px-10 py-10">



    <form onSubmit={handleSubmit} className="space-y-8">

  <InstitutionInformationSection
  institutionData={formData.institutionInformation}
  contactData={formData.contactInformation}
  errors={errors}
  onInstitutionChange={handleInstitutionChange}
  onContactChange={handleContactChange}
/>

<InstitutionAddressSection
  data={formData.institutionAddress}
  errors={errors}
  onChange={handleAddressChange}
  className="-mt-8"
/>

<MaterialCollectionSection
  data={formData.materialCollection}
  errors={errors}
  onChange={handleMaterialCollectionChange}
  className="-mt-8"
/>

<CommunicationSection
  data={formData.communicationInformation}
  errors={errors}
  onChange={handleCommunicationChange}
className="-mt-8"
/>

         <ReferralSection
            data={formData.referralInformation}
            errors={errors}
            onChange={handleReferralChange}
            className="-mt-8"
          />

          <DeclarationSection
            data={formData.declarationInformation}
            errors={errors}
            onChange={handleDeclarationChange}
            className="-mt-8"
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
<p className="mt-4 text-sm text-slate-500">
      Our team will review your registration and contact you shortly.
    </p>

</div>

</form>
  </div>
  </div>
  </section>

</main>

      <Footer />

      <RegistrationDuplicateModal
        type="Hospital & Healthcare Institution Registration"
        field={duplicateField}
        value={duplicateValue}
        isOpen={showDuplicateModal}
        onClose={() =>
          setShowDuplicateModal(false)
        }
      />
    </>
  );
}
