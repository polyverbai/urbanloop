"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ProgressBar from "./components/ProgressBar";
import StepNavigation from "./components/StepNavigation";

import Step1BusinessInformation from "./components/Step1BusinessInformation";
import Step2BusinessVerification from "./components/Step2BusinessVerification";
import Step3FacilityAddress from "./components/Step3FacilityAddress";
import Step4MaterialsProcessing from "./components/Step4MaterialsProcessing";
import Step5ProcurementRequirements from "./components/Step5ProcurementRequirements";
import Step6LogisticsCommercial from "./components/Step6LogisticsCommercial";
import Step7Declaration from "./components/Step7Declaration";

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
  RecyclerPartnerForm,
  RecyclerBusinessVerification,
} from "./types";

export default function RecyclerPartnerRegistrationPage() {
  const router = useRouter();

  const totalSteps = 7;

  const formTopRef = useRef<HTMLElement>(null);

  const [currentStep, setCurrentStep] =
    useState(1);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  const [formData, setFormData] =
    useState<RecyclerPartnerForm>({

      businessInformation: {
        recyclerPartnerCategory: "",
        businessName: "",
        ownerName: "",
        primaryContactPerson: "",

        mobileNumber: "",
        alternateMobileNumber: "",
        whatsappNumber: "",

        email: "",
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

        pollutionControlCertificate: null,
        recyclingAuthorization: null,

        authorizedPersonId: null,
        facilityPhoto: null,
      },

      facilityAddress: {
        facilityNumber: "",
        facilityName: "",

        streetArea: "",
        landmark: "",

        city: "",
        stateName: "",
        pinCode: "",
      },

      materialsProcessing: {
        materialsAccepted: [],

        dailyProcessingCapacity: "",
        monthlyProcessingCapacity: "",
        storageCapacity: "",

        processingTechnology: "",
        recycledOutputs: "",
      },

      procurementRequirements: {
        materialsRequired: [],

        monthlyProcurementRequirement: "",
        minimumOrderQuantity: "",

        procurementFrequency: "",

        acceptedMaterialConditions: [],

        preferredMaterialGrade: "",
      },

      logisticsCommercial: {
        procurementAreas: [],

        fulfilmentPreference: "",

        receivingDays: [],
        preferredReceivingTime: "",

        vehicleTypes: [],
        numberOfVehicles: "",

        bankName: "",
        accountHolderName: "",
        accountNumber: "",
        ifscCode: "",
        upiId: "",

        emergencyContactName: "",
        emergencyContactNumber: "",
      },

      declaration: {
        informationConfirmed: false,
        complianceConfirmed: false,
        termsAccepted: false,
        recyclingComplianceAccepted: false,
        communicationConsent: false,
      },
    });

  /* =====================================================
     UPDATE FIELD
  ===================================================== */

  const updateField = <
    T extends keyof RecyclerPartnerForm,
    K extends keyof RecyclerPartnerForm[T]
  >(
    section: T,
    field: K,
    value: RecyclerPartnerForm[T][K]
  ) => {
    setFormData((prev) => ({
      ...prev,

      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };


  /* =====================================================
     UPDATE FILE
  ===================================================== */

  const updateFile = (
  field: keyof RecyclerBusinessVerification,
  file: File | null
) => {
  setFormData((prev) => ({
    ...prev,

    businessVerification: {
      ...prev.businessVerification,
      [field]: file,
    },
  }));

  /* =====================================================
     CLEAR DOCUMENT ERROR WHEN FILE CHANGES
  ===================================================== */

  setErrors((prev) => {
    if (!prev[field]) {
      return prev;
    }

    const updatedErrors = {
      ...prev,
    };

    delete updatedErrors[field];

    return updatedErrors;
  });
};

/* =====================================================
   MOVE TO FORM TOP
===================================================== */

const moveToFormTop = () => {
  requestAnimationFrame(() => {
    formTopRef.current?.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  });
};


  /* =====================================================
     NEXT STEP
  ===================================================== */

  const nextStep = () => {
    let validationErrors:
      Record<string, string> = {};

    switch (currentStep) {
  case 1:
    validationErrors =
      validateStep1(
        formData.businessInformation
      );
    break;

  case 2:
    validationErrors =
      validateStep2(
        formData.businessVerification
      );
    break;

  case 3:
    validationErrors =
      validateStep3(
        formData.facilityAddress
      );
    break;

  case 4:
    validationErrors =
      validateStep4(
        formData.materialsProcessing
      );
    break;

  case 5:
    validationErrors =
      validateStep5(
        formData.procurementRequirements
      );
    break;

  case 6:
    validationErrors =
      validateStep6(
        formData.logisticsCommercial
      );
    break;

  case 7:
    validationErrors =
      validateStep7(
        formData.declaration
      );
    break;

  default:
    validationErrors = {};
}

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    if (currentStep < totalSteps) {
  setErrors({});

  setCurrentStep(
    (prev) => prev + 1
  );

  moveToFormTop();
}
  };


  /* =====================================================
     PREVIOUS STEP
  ===================================================== */

  const previousStep = () => {
  setErrors({});

  if (currentStep > 1) {
    setCurrentStep(
      (prev) => prev - 1
    );

    moveToFormTop();
  }
};


  /* =====================================================
   SUBMIT RECYCLER PARTNER REGISTRATION
===================================================== */

const handleSubmit = async () => {
  const validationErrors =
    validateStep7(
      formData.declaration
    );

  setErrors(validationErrors);

  if (
    Object.keys(validationErrors).length > 0
  ) {
    return;
  }

  setIsSubmitting(true);

  try {
    /* =================================================
       REGISTRATION DATA

       File objects are excluded from this JSON object.
       They are appended separately to multipart FormData.
    ================================================= */

    const registrationData = {
      businessInformation:
        formData.businessInformation,

      facilityAddress:
        formData.facilityAddress,

      materialsProcessing:
        formData.materialsProcessing,

      procurementRequirements:
        formData.procurementRequirements,

      logisticsCommercial:
        formData.logisticsCommercial,

      declaration:
        formData.declaration,
    };


    /* =================================================
       MULTIPART REQUEST
    ================================================= */

    const submissionData =
      new FormData();

    submissionData.append(
      "registrationData",
      JSON.stringify(registrationData)
    );


    /* =================================================
       BUSINESS VERIFICATION DOCUMENTS
    ================================================= */

    const verification =
      formData.businessVerification;

    if (verification.gstCertificate) {
      submissionData.append(
        "gstCertificate",
        verification.gstCertificate
      );
    }

    if (verification.panCard) {
      submissionData.append(
        "panCard",
        verification.panCard
      );
    }

    if (verification.tradeLicense) {
      submissionData.append(
        "tradeLicense",
        verification.tradeLicense
      );
    }

    if (
      verification.pollutionControlCertificate
    ) {
      submissionData.append(
        "pollutionControlCertificate",
        verification.pollutionControlCertificate
      );
    }

    if (
      verification.recyclingAuthorization
    ) {
      submissionData.append(
        "recyclingAuthorization",
        verification.recyclingAuthorization
      );
    }

    if (verification.authorizedPersonId) {
      submissionData.append(
        "authorizedPersonId",
        verification.authorizedPersonId
      );
    }

    if (verification.facilityPhoto) {
      submissionData.append(
        "facilityPhoto",
        verification.facilityPhoto
      );
    }


    /* =================================================
       SEND REGISTRATION
    ================================================= */

    const response = await fetch(
      "/api/recycler-partner-registration",
      {
        method: "POST",
        body: submissionData,
      }
    );

    const result =
      await response.json();


    /* =================================================
   API ERROR
================================================= */

if (!response.ok) {

  /* ===============================================
     DOCUMENT VALIDATION / UPLOAD ERROR

     Return the user directly to Step 2 and display
     the error against the exact document field.
  =============================================== */

  if (
    (
      result.errorType ===
        "document_validation" ||
      result.errorType ===
        "document_upload"
    ) &&
    typeof result.field === "string"
  ) {
    setErrors({
  [result.field]:
    result.message ||
    "Unable to process this document. Please upload another file.",
});

setCurrentStep(2);
moveToFormTop();

return;
  }


  /* ===============================================
     DUPLICATE REGISTRATION
  =============================================== */

  if (response.status === 409) {
    alert(
      result.message ||
        "A Recycler Partner registration already exists with these details."
    );

    return;
  }


  /* ===============================================
     OTHER API ERROR
  =============================================== */

  throw new Error(
    result.message ||
      "Unable to submit Recycler Partner registration."
  );
}


   /* =================================================
   SUCCESS
================================================= */

router.push(
  `/registration-success?type=${encodeURIComponent(
    "Recycler Partner Registration"
  )}&registrationNumber=${encodeURIComponent(
    result.registrationNumber
  )}&return=${encodeURIComponent(
    "/join-urbanloop"
  )}&returnText=${encodeURIComponent(
    "Back To Partnership Program"
  )}`
);

} catch (error) {
    console.error(
      "Recycler Partner Submission Error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Unable to submit Recycler Partner registration.";

    alert(message);

  } finally {
    setIsSubmitting(false);
  }
};


  /* =====================================================
     STEP COMPONENTS
  ===================================================== */

  const stepComponents:
    Record<number, React.ReactNode> = {

    1: (
      <Step1BusinessInformation
        data={
          formData.businessInformation
        }
        errors={errors}
        onChange={(field, value) =>
          updateField(
            "businessInformation",
            field,
            value
          )
        }
      />
    ),

    2: (
      <Step2BusinessVerification
        data={
          formData.businessVerification
        }
        errors={errors}
        updateFile={updateFile}
      />
    ),

    3: (
      <Step3FacilityAddress
        data={formData.facilityAddress}
        errors={errors}
        updateField={updateField}
      />
    ),

    4: (
      <Step4MaterialsProcessing
        data={
          formData.materialsProcessing
        }
        errors={errors}
        updateField={updateField}
      />
    ),

    5: (
      <Step5ProcurementRequirements
        data={
          formData.procurementRequirements
        }
        errors={errors}
        updateField={updateField}
      />
    ),

    6: (
      <Step6LogisticsCommercial
        data={
          formData.logisticsCommercial
        }
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


  /* =====================================================
     PAGE
  ===================================================== */

 /* =====================================================
   PAGE
===================================================== */

return (
  <>
    <Header />

    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section
  ref={formTopRef}
  className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 py-12"
>
  <div className="mx-auto max-w-7xl px-6">

    <h1 className="text-4xl font-bold text-white">
      Recycler Partner Registration
    </h1>

          <p className="mt-3 max-w-3xl text-green-100">
            Register your recycling facility with UrbanLoop
            and become part of our verified recycling and
            circular economy partner network.
          </p>

        </div>
      </section>


      {/* REGISTRATION FORM */}

<section className="max-w-7xl mx-auto px-6 py-10">

  <div className="rounded-2xl bg-white p-8 shadow-lg">

    <ProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
          />


          {/* CURRENT STEP */}

          <div className="mt-8">
            {stepComponents[currentStep]}
          </div>


          {/* NAVIGATION */}

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

    <Footer />
  </>
);
}