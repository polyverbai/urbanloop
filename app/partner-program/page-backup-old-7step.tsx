"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

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


export default function CollectionPartnerRegistration() {
  const router = useRouter();

  const totalSteps = 7;

  const formTopRef =
    useRef<HTMLElement>(null);

  const [currentStep, setCurrentStep] =
    useState(1);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [errors, setErrors] =
    useState<Record<string, string>>({});


  /* =====================================================
     FORM DATA
  ===================================================== */

  const [formData, setFormData] =
  useState<CollectionPartnerForm>({

      businessInformation: {
  collectionPartnerCategory: "",
  shopName: "",
  ownerName: "",
  primaryContactPerson: "",
  mobileNumber: "",
  alternateMobileNumber: "",
  whatsappNumber: "",
  email: "",
  gstNumber: "",
  panNumber: "",

  website: "",
  yearEstablished: "",
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
  monthlyCollectionCapacity: "",
  collectionCapacityUnit: "",

  sortingFacilityAvailable: "",
  storageSpaceAvailable: "",

  storageCapacity: "",
  storageCapacityUnit: "",
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

    /* =====================================================
   RESTORE FORM AFTER DUPLICATE REGISTRATION
===================================================== */

useEffect(() => {
  const savedForm = sessionStorage.getItem(
    "collectionPartnerForm"
  );

  console.log("Saved Form:", savedForm);

  const savedStep = sessionStorage.getItem(
    "collectionPartnerStep"
  );

  if (savedForm) {
    setFormData(JSON.parse(savedForm));
  }

console.log("Parsed Form:", parsedForm);
console.log("Restoring Form Data");

  if (savedStep) {
    setCurrentStep(Number(savedStep));
  }
}, []);

  /* =====================================================
     UPDATE FIELD
  ===================================================== */

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


  /* =====================================================
     UPDATE FILE
  ===================================================== */

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


    /* =================================================
       CLEAR DOCUMENT ERROR WHEN FILE CHANGES
    ================================================= */

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
          validateStep1(formData);
        break;

      case 2:
        validationErrors =
          validateStep2(formData);
        break;

      case 3:
        validationErrors =
          validateStep3(formData);
        break;

      case 4:
        validationErrors =
          validateStep4(formData);
        break;

      case 5:
        validationErrors =
          validateStep5(formData);
        break;

      case 6:
        validationErrors =
          validateStep6(formData);
        break;

      case 7:
        validationErrors =
          validateStep7(formData);
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


/* =====================================================
   REVALIDATE VEHICLE DOCUMENTS AFTER STEP 4

   Step 2 document requirements can change after the
   applicant selects whether they own/operate vehicles
   in Step 4.
===================================================== */

if (currentStep === 4) {
  const step2Errors =
    validateStep2(formData);

  if (
    Object.keys(step2Errors).length > 0
  ) {
    setErrors(step2Errors);

    setCurrentStep(2);

    moveToFormTop();

    return;
  }
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
     SUBMIT COLLECTION PARTNER REGISTRATION
===================================================== */

  const handleSubmit = async () => {
console.log("STEP 1 - handleSubmit started");

    /*
      Validate the complete form before submission.
    */
const handleSubmit = async () => {

  /*
    Validate the complete form before submission.
  */

  const step1Errors = validateStep1(formData);

  if (Object.keys(step1Errors).length > 0) {
    setErrors(step1Errors);
    setCurrentStep(1);
    moveToFormTop();
    return;
  }

  const step2Errors = validateStep2(formData);

      if (
        Object.keys(step2Errors).length > 0
      ) {
        setErrors(step2Errors);
        setCurrentStep(2);
        moveToFormTop();
        return;
      }


      const step3Errors =
        validateStep3(formData);

      if (
        Object.keys(step3Errors).length > 0
      ) {
        setErrors(step3Errors);
        setCurrentStep(3);
        moveToFormTop();
        return;
      }


      const step4Errors =
        validateStep4(formData);

      if (
        Object.keys(step4Errors).length > 0
      ) {
        setErrors(step4Errors);
        setCurrentStep(4);
        moveToFormTop();
        return;
      }


      const step5Errors =
        validateStep5(formData);

      if (
        Object.keys(step5Errors).length > 0
      ) {
        setErrors(step5Errors);
        setCurrentStep(5);
        moveToFormTop();
        return;
      }


      const step6Errors =
        validateStep6(formData);

      if (
        Object.keys(step6Errors).length > 0
      ) {
        setErrors(step6Errors);
        setCurrentStep(6);
        moveToFormTop();
        return;
      }


      const step7Errors =
        validateStep7(formData);

      setErrors(step7Errors);

      if (
        Object.keys(step7Errors).length > 0
      ) {
        setCurrentStep(7);
        moveToFormTop();
        return;
      }
    }


    setErrors({});
    setIsSubmitting(true);


    try {

      /* =================================================
         REGISTRATION DATA

         File objects are excluded from this JSON object.
         Documents are appended separately below.
      ================================================= */

      const registrationData = {
  businessInformation: formData.businessInformation,

  businessVerification: formData.businessVerification,

  businessAddress: formData.businessAddress,

  materialCollection: formData.materialCollection,

  facilityTransportation: formData.facilityTransportation,

  coveragePayment: formData.coveragePayment,

  declaration: formData.declaration,
};


      /* =================================================
         MULTIPART REQUEST
      ================================================= */

      const submissionData =
        new FormData();

console.log("STEP 2 - FormData created");


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

if (verification.pollutionCertificate) {
  submissionData.append(
    "pollutionCertificate",
    verification.pollutionCertificate
  );
}

if (verification.aadhaarFront) {
  submissionData.append(
    "aadhaarFront",
    verification.aadhaarFront
  );
}

if (verification.aadhaarBack) {
  submissionData.append(
    "aadhaarBack",
    verification.aadhaarBack
  );
}

if (verification.ownerPhoto) {
  submissionData.append(
    "ownerPhoto",
    verification.ownerPhoto
  );
}


      /* =================================================
         SEND REGISTRATION
      ================================================= */

console.log("STEP 3 - About to call API");

      const response = await fetch(
  "/api/collection-partner-registration",
  {
    method: "POST",
    body: submissionData,
  }
);

console.log("STEP 4 - API returned");


      const result =
        await response.json();

        console.log("====================================");
console.log("Response Status:", response.status);
console.log("API Result:", result);
console.log("====================================");


      /* =================================================
         API ERROR
      ================================================= */

      if (!response.ok) {

        /* ===============================================
           DOCUMENT VALIDATION / UPLOAD ERROR
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

/* ===============================================
   DUPLICATE REGISTRATION
=============================================== */

if (response.status === 409) {

  sessionStorage.setItem(
    "collectionPartnerForm",
    JSON.stringify(formData)
  );

  sessionStorage.setItem(
    "collectionPartnerStep",
    currentStep.toString()
  );

  console.log(
    "Saved Form:",
    sessionStorage.getItem("collectionPartnerForm")
  );

  
console.log(
  "Saved Form Raw:",
  sessionStorage.getItem("collectionPartnerForm")
);
  
  console.log(
    "Saved Step:",
    sessionStorage.getItem("collectionPartnerStep")
  );

  router.push(
    `/registration-duplicate?type=${encodeURIComponent(
      "Collection Partner Registration"
    )}&field=${encodeURIComponent(
      result.duplicateFields?.join(", ") ??
      "Information"
    )}&value=${encodeURIComponent(
      result.duplicateValue ?? ""
    )}&returnUrl=${encodeURIComponent(
      "/partner-program/collection-partner"
    )}&returnText=${encodeURIComponent(
      "Back To Collection Partner Registration"
    )}`
  );

  return;
}


        /* ===============================================
           OTHER API ERROR
        =============================================== */

        throw new Error(
  result.message ||
    "Unable to submit Collection Partner registration."
);
      }


      /* =================================================
         SUCCESS
      ================================================= */

      router.push(
        `/registration-success?type=${encodeURIComponent(
          "Collection Partner Registration"
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
        "Collection Partner Submission Error:",
        error
      );

      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit Collection Partner registration.";

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
          className="bg-gradient-to-r from-[#A9D67A] via-[#8CCB5E] to-[#72B543] py-12"
        >
          <div className="mx-auto max-w-7xl px-6">

            <h1 className="text-4xl font-bold text-white">
              Transport Partner Registration
            </h1>

            <p className="mt-3 max-w-3xl text-green-100">
              Register your transport operations with UrbanLoop
              and become part of our verified pickup and logistics
              partner network.
            </p>

          </div>
        </section>


        {/* REGISTRATION FORM */}

        <section className="mx-auto max-w-7xl px-6 py-10">

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