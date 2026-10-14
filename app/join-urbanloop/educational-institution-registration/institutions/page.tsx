"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegistrationDuplicateModal from "@/components/common/RegistrationDuplicateModal";

import InstitutionInformationSection from "./components/InstitutionInformationSection";
import InstitutionAddressSection from "./components/InstitutionAddressSection";
import MaterialCollectionSection from "./components/MaterialCollectionSection";
import CommunicationPreferenceSection from "./components/CommunicationSection";
import ReferralInformationSection from "./components/ReferralSection";
import DeclarationSection from "./components/DeclarationSection";

import type {
  EducationalInstitutionForm,
  InstitutionInformation,
  ContactInformation,
  InstitutionAddress,
  MaterialCollection,
  CommunicationInformation,
  ReferralInformation,
  DeclarationInformation,
} from "./components/types";

import { validateForm } from "./components/validation";
const INITIAL_FORM_DATA: EducationalInstitutionForm = {
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
    buildingNumber: "",
    buildingName: "",
    streetArea: "",
    landmark: "",
    city: "",
    stateName: "",
    pinCode: "",
  },

  materialCollection: {
    materialCategories: [],
    monthlyRecyclables: "",
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
    useState<EducationalInstitutionForm>(
      INITIAL_FORM_DATA
    );

    const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [showDuplicateModal, setShowDuplicateModal] =
    useState(false);

  const [duplicateField, setDuplicateField] =
    useState("");

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

  try {
    /*
     * Check duplicate Mobile Number
     */

    const { data: existingMobile } = await supabase
      .from("educational_registrations")
      .select("id")
      .eq(
        "mobile_number",
        formData.contactInformation.mobileNumber
      )
      .maybeSingle();

    if (existingMobile) {
      setDuplicateField("Mobile Number");

      setDuplicateValue(
        formData.contactInformation.mobileNumber
      );

      setShowDuplicateModal(true);

      setIsSubmitting(false);

      return;
    }

    /*
     * Check duplicate Email Address
     */

    if (formData.contactInformation.email) {
      const { data: existingEmail } = await supabase
        .from("educational_registrations")
        .select("id")
        .eq(
          "email",
          formData.contactInformation.email
        )
        .maybeSingle();

      if (existingEmail) {
        setDuplicateField("Email Address");

        setDuplicateValue(
          formData.contactInformation.email
        );

        setShowDuplicateModal(true);

        setIsSubmitting(false);

        return;
      }
    }

    /*
     * Insert Registration
     */

    const { data, error } = await supabase
      .from("educational_registrations")
      .insert([
        {
          institution_category:
            formData.institutionInformation
              .institutionCategory,

          institution_name:
            formData.institutionInformation
              .institutionName,

          website:
            formData.institutionInformation
              .website,

          year_established:
            formData.institutionInformation
              .yearEstablished,

          contact_person_name:
            formData.contactInformation
              .contactPersonName,

          designation:
            formData.contactInformation
              .designation,

          mobile_number:
            formData.contactInformation
              .mobileNumber,

          email:
            formData.contactInformation
              .email,

          building_number:
            formData.institutionAddress
              .buildingNumber,

          building_name:
            formData.institutionAddress
              .buildingName,

          street_area:
            formData.institutionAddress
              .streetArea,

          landmark:
            formData.institutionAddress
              .landmark,

          city:
            formData.institutionAddress
              .city,

          state_name:
            formData.institutionAddress
              .stateName,

          pin_code:
            formData.institutionAddress
              .pinCode,

          material_categories:
            formData.materialCollection
              .materialCategories,

          monthly_recyclables:
            formData.materialCollection
              .monthlyRecyclables,

          pickup_frequency:
            formData.materialCollection
              .pickupFrequency,

          pickup_day:
            formData.materialCollection
              .pickupDay,

          pickup_time:
            formData.materialCollection
              .pickupTime,

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
        },
      ])
      .select("id")
      .single();

    if (error) {
      throw error;
    }

    /*
     * Generate Registration Number
     */

    const { count } = await supabase
      .from("educational_registrations")
      .select("*", {
        count: "exact",
        head: true,
      });

    const registrationNumber =
      `UL-EDU-${String(
        count ?? 0
      ).padStart(6, "0")}`;

    /*
     * Save Registration Number
     */

    const { error: registrationNumberError } =
      await supabase
        .from("educational_registrations")
        .update({
          registration_number:
            registrationNumber,
        })
        .eq("id", data.id);

    if (registrationNumberError) {
      throw registrationNumberError;
    }

    /*
     * Redirect to Registration Success Page
     */

    router.push(
      `/registration-success?type=Educational Institution Registration&registrationNumber=${registrationNumber}&return=/join-urbanloop/categories&returnText=Back To Categories`
    );

  } catch (error) {
    console.error(
      "Educational Institution Registration Error:",
      error
    );

    alert(
      error instanceof Error
        ? error.message
        : "Unable to submit registration. Please try again."
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

            <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Educational Institution Registration
            </h1>

      <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
        Register your institution with UrbanLoop for sustainable recycling and waste management services.
      </p>
    <div className="mt-12 flex justify-center">

              <Link
                  href="/join-urbanloop/categories"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#D7EFC2] px-6 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
                >
                  ← Back
                </Link>

            </div>

          </div>

    <div className="rounded-3xl border border-[#DDE8D0] bg-white/80 backdrop-blur-sm shadow-[0_20px_60px_rgba(114,181,67,0.10)] overflow-hidden px-10 py-10">  

        {submitSuccess && (
          <div className="mx-8 mt-8 mb-4 rounded-xl border border-green-200 bg-green-50 p-4">
            Registration submitted successfully.
          </div>
        )}

        <form
  onSubmit={handleSubmit}
>
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
          />

          <MaterialCollectionSection
            data={formData.materialCollection}
            errors={errors}
            onChange={handleMaterialCollectionChange}
          />

          <CommunicationPreferenceSection
            data={formData.communicationInformation}
            errors={errors}
            onChange={handleCommunicationChange}
          />

          <ReferralInformationSection
            data={formData.referralInformation}
            errors={errors}
            onChange={handleReferralChange}
          />

          <DeclarationSection
            data={formData.declarationInformation}
            errors={errors}
            onChange={handleDeclarationChange}
          />

          <div className="mt-10 flex justify-center">

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


</div>
        
        </form>
      </div>
            </div>
</section>
    </main>

<RegistrationDuplicateModal
      type="Educational Institution Registration"
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