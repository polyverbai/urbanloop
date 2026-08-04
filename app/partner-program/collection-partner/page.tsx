"use client";

import { useRef, useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ProgressBar from "./components/ProgressBar";
import StepNavigation from "./components/StepNavigation";

import Step1BusinessInformation from "./components/Step1BusinessInformation";
import Step2BusinessVerification from "./components/Step2BusinessVerification";
import Step3BusinessAddress from "./components/Step3BusinessAddress";
import Step4MaterialCollection from "./components/Step4MaterialCollection";
import Step5FacilityTransportation from "./components/Step5FacilityTransportation";
import Step6CoveragePayment from "./components/Step6CoveragePayment";
import Step7Declaration from "./components/Step7Declaration";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";
import preparePayload from "@/lib/preparePayload";
import uploadDocument from "@/lib/uploadDocument";
import generateRegistrationNumber from "@/lib/generateRegistrationNumber";

import RegistrationDuplicateModal
from "@/components/common/RegistrationDuplicateModal";

import {
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  validateStep5,
  validateStep6,
  validateStep7,
} from "./validation";

import type {
  CollectionPartnerForm,
  BusinessVerification,
} from "./types";

export default function CollectionPartnerPage() {
  const totalSteps = 7;

  const router = useRouter();

  const formTopRef = useRef<HTMLDivElement>(null);

  const [currentStep, setCurrentStep] = useState(1);

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const [formData, setFormData] =
    useState<CollectionPartnerForm>({
      businessInformation: {
        collectionPartnerCategory: "",
        shopName: "",
        ownerName: "",
        primaryContactPerson: "",
        mobileNumber: "",
        alternateMobileNumber: "",
        email: "",
        whatsappNumber: "",
        website: "",
        yearEstablished: "",
        gstNumber: "",
        panNumber: "",
        numberOfEmployees: "",
      },

      businessVerification: {
        gstCertificate: null,
        panCard: null,
        tradeLicense: null,
        pollutionCertificate: null,
        aadhaarFront: null,
        aadhaarBack: null,
        ownerPhoto: null,
      },

      businessAddress: {
        shopNumber: "",
        buildingName: "",
        streetArea: "",
        landmark: "",
        city: "",
        state: "",
        pinCode: "",
        latitude: "",
        longitude: "",
      },

      materialCollection: {
        materialsHandled: [],
        collectionServices: [],
        dailyCollectionCapacity: "",
        monthlyProcessingCapacity: "",
      },

      facilityTransportation: {
        processingFacilityAvailable: "",
        facilityAddress: "",
        storageCapacity: "",
        vehicleTypes: [],
        numberOfVehicles: "",
      },

      coveragePayment: {
        operatingAreas: [],
        preferredPickupDays: [],
        preferredPickupTime: "",
        bankName: "",
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
        upiId: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
      },

      declaration: {
        declarationAccepted: false,
        termsAccepted: false,
        communicationConsent: false,
      },
    });

  const updateField = <
    T extends keyof CollectionPartnerForm,
    K extends keyof CollectionPartnerForm[T]
  >(
    section: T,
    field: K,
    value: CollectionPartnerForm[T][K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const updateArrayField = <
    T extends keyof CollectionPartnerForm,
    K extends keyof CollectionPartnerForm[T]
  >(
    section: T,
    field: K,
    value: string
  ) => {
    setFormData((prev) => {
      const current = prev[section][field] as string[];

      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: updated,
        },
      };
    });
  };

  const updateFile = (
    field: keyof BusinessVerification,
    file: File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      businessVerification: {
        ...prev.businessVerification,
        [field]: file,
      },
    }));
  };

const moveToFormTop = () => {
  requestAnimationFrame(() => {
    formTopRef.current?.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
};

  const nextStep = () => {
  let validationErrors: Record<string, string> = {};

  switch (currentStep) {
    case 1:
      validationErrors = validateStep1(formData);
      break;

    case 2:
      validationErrors = validateStep2(formData);
      break;

    case 3:
      validationErrors = validateStep3(formData);
      break;

    case 4:
      validationErrors = validateStep4(formData);
      break;

    case 5:
      validationErrors = validateStep5(formData);
      break;

    case 6:
      validationErrors = validateStep6(formData);
      break;

    case 7:
      validationErrors = validateStep7(formData);
      break;

    default:
      validationErrors = {};
  }

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  if (currentStep < totalSteps) {
  setErrors({});
  setCurrentStep((prev) => prev + 1);
  moveToFormTop();
}
};

  const previousStep = () => {
  setErrors({});

  if (currentStep > 1) {
    setCurrentStep((prev) => prev - 1);
    moveToFormTop();
  }
};

  const handleSubmit = async () => {
  setIsSubmitting(true);

  try {

const { data: existingMobile } =
await supabase
  .from(
    "collection_partner_registrations"
  )
  .select("id")
  .eq(
    "mobile_number",
    formData.businessInformation.mobileNumber
  );

if (
  existingMobile &&
  existingMobile.length > 0
) {

  setDuplicateField(
    "Mobile Number"
  );

  setDuplicateValue(
    formData.businessInformation.mobileNumber
  );

  setShowDuplicateModal(
    true
  );

  setIsSubmitting(false);

  return;

}

const { data: existingEmail } =
await supabase
  .from(
    "collection_partner_registrations"
  )
  .select("id")
  .eq(
    "email",
    formData.businessInformation.email
  );

if (
  existingEmail &&
  existingEmail.length > 0
) {

  setDuplicateField(
    "Email Address"
  );

  setDuplicateValue(
    formData.businessInformation.email
  );

  setShowDuplicateModal(
    true
  );

  setIsSubmitting(false);

  return;

}

const { data: existingGST } =
await supabase
  .from(
    "collection_partner_registrations"
  )
  .select("id")
  .eq(
    "gst_number",
    formData.businessInformation.gstNumber
  );

if (
  existingGST &&
  existingGST.length > 0
) {

  setDuplicateField(
    "GST Number"
  );

  setDuplicateValue(
    formData.businessInformation.gstNumber
  );

  setShowDuplicateModal(
    true
  );

  setIsSubmitting(false);

  return;

}


const { data: existingPAN } =
await supabase
  .from(
    "collection_partner_registrations"
  )
  .select("id")
  .eq(
    "pan_number",
    formData.businessInformation.panNumber
  );

if (
  existingPAN &&
  existingPAN.length > 0
) {

  setDuplicateField(
    "PAN Number"
  );

  setDuplicateValue(
    formData.businessInformation.panNumber
  );

  setShowDuplicateModal(
    true
  );

  setIsSubmitting(false);

  return;

}

    // ----------------------------------
    // Prepare payload.
    // ----------------------------------

    const payload = preparePayload(formData);

    // ----------------------------------
    // Upload documents.
    // ----------------------------------

    if (formData.businessVerification.gstCertificate) {
      payload.gst_certificate_path =
        await uploadDocument(
          "collection-partner",
          "gst-certificates",
          formData.businessVerification.gstCertificate
        );
    }

    if (formData.businessVerification.panCard) {
      payload.pan_card_path =
        await uploadDocument(
          "collection-partner",
          "pan-cards",
          formData.businessVerification.panCard
        );
    }

    if (formData.businessVerification.tradeLicense) {
      payload.trade_license_path =
        await uploadDocument(
          "collection-partner",
          "trade-licenses",
          formData.businessVerification.tradeLicense
        );
    }

    if (formData.businessVerification.pollutionCertificate) {
      payload.pollution_certificate_path =
        await uploadDocument(
          "collection-partner",
          "pollution-certificates",
          formData.businessVerification.pollutionCertificate
        );
    }

    if (formData.businessVerification.aadhaarFront) {
      payload.aadhaar_front_path =
        await uploadDocument(
          "collection-partner",
          "aadhaar-front",
          formData.businessVerification.aadhaarFront
        );
    }

    if (formData.businessVerification.aadhaarBack) {
      payload.aadhaar_back_path =
        await uploadDocument(
          "collection-partner",
          "aadhaar-back",
          formData.businessVerification.aadhaarBack
        );
    }

    if (formData.businessVerification.ownerPhoto) {
      payload.owner_photo_path =
        await uploadDocument(
          "collection-partner",
          "owner-photos",
          formData.businessVerification.ownerPhoto
        );
    }

    // ----------------------------------
    // Insert payload.
    // ----------------------------------

    const { data, error } = await supabase
      .from("collection_partner_registrations")
      .insert(payload)
      .select("id")
      .single();

    if (error) {
      throw error;
    }

    // ----------------------------------
    // Get registration count.
    // ----------------------------------

    const { count, error: countError } =
      await supabase
        .from("collection_partner_registrations")
        .select("*", {
          count: "exact",
          head: true,
        });

    if (countError) {
      throw countError;
    }

    // ----------------------------------
    // Generate registration number.
    // ----------------------------------

    const registrationNumber =
      generateRegistrationNumber(
        "CP",
        count ?? 1
      );

    // ----------------------------------
    // Update registration number.
    // ----------------------------------

    const { error: updateError } =
      await supabase
        .from("collection_partner_registrations")
        .update({
          registration_number:
            registrationNumber,
        })
        .eq("id", data.id);

    if (updateError) {
      throw updateError;
    }

    // ----------------------------------
    // Redirect.
    // ----------------------------------

    router.push(
      `/partner-program/collection-partner/success?registrationNumber=${registrationNumber}`
    );

} catch (error: any) {
  console.error(
    "Collection Partner Registration Failed:",
    error
  );

  const errorMessage =
    error?.message?.toLowerCase() ?? "";

  if (
    errorMessage.includes(
      "mobile_number_key"
    )
  ) {
    alert(
      "A Collection Partner registration already exists with this Mobile Number."
    );
  }

  else if (
    errorMessage.includes(
      "email_key"
    )
  ) {
    alert(
      "A Collection Partner registration already exists with this Email Address."
    );
  }

  else if (
    errorMessage.includes(
      "gst_number_key"
    )
  ) {
    alert(
      "This GST Number has already been registered with UrbanLoop."
    );
  }

  else if (
    errorMessage.includes(
      "pan_number_key"
    )
  ) {
    alert(
      "This PAN Number has already been registered with UrbanLoop."
    );
  }

  else {
    alert(
      "Something went wrong while submitting your registration. Please try again."
    );
  }

} finally {
  setIsSubmitting(false);
}
};

  const stepComponents: Record<number, React.ReactNode> = {
    1: (
      <Step1BusinessInformation
  data={formData.businessInformation}
  errors={errors}
  updateField={updateField}
/>
    ),

    2: (
  <Step2BusinessVerification
    data={formData.businessVerification}
    errors={errors}
    updateFile={updateFile}
  />
),

    3: (
  <Step3BusinessAddress
    data={formData.businessAddress}
    errors={errors}
    updateField={updateField}
  />
),

    4: (
  <Step4MaterialCollection
    data={formData.materialCollection}
    errors={errors}
    updateField={updateField}
  />
),

    5: (
  <Step5FacilityTransportation
    data={formData.facilityTransportation}
    errors={errors}
    updateField={updateField}
  />
),

    6: (
  <Step6CoveragePayment
    data={formData.coveragePayment}
    errors={errors}
    updateField={updateField}
  />
),

    7: (
  <Step7Declaration
    data={formData.declaration}
    errors={errors}
    updateField={updateField}
  />
),
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">

        <section
  ref={formTopRef}
  className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 py-12"
>
  <div className="max-w-7xl mx-auto px-6">

    <h1 className="text-4xl font-bold text-white">
      Collection Partner Registration
    </h1>

            <p className="text-green-100 mt-3 max-w-3xl">
              Join UrbanLoop's Collection Partner Network and become an
              authorized recycling and waste collection partner.
            </p>

          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10">

  <div className="bg-white rounded-xl shadow-lg p-8">

    <ProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
            />

            <div className="mt-8">
              {stepComponents[currentStep]}
            </div>

            <StepNavigation
              currentStep={currentStep}
              totalSteps={totalSteps}
              isSubmitting={isSubmitting}
              onPrevious={previousStep}
              onNext={nextStep}
              onSubmit={handleSubmit}
            />

          </div>

        

        </section>

      </main>

<RegistrationDuplicateModal
  type="Collection Partner Registration"
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