"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

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
  validateBusinessInformation,
  validateBusinessVerification,
  validateBusinessAddress,
  validateMaterialCollection,
  validateSegregationFacility,
  validateSelfTransportation,
  validateCoveragePayment,
  validateDeclaration,
} from "./validation";

import {
  validateDuplicateBusinessInformation,
} from "./utils/duplicateValidation";

import type {
  CollectionPartnerForm,
  BusinessVerification,
} from "./types";


export default function CollectionPartnerRegistration() {

  console.log("PAGE COMPONENT LOADED");

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
  mobileNumber: "",
  email: "",

  yearEstablished: "",
  numberOfEmployees: "",

  panAvailable: "",
  panNumber: "",

  tradeLicenseAvailable: "",
  tradeLicenseNumber: "",

  gstAvailable: "",
  gstNumber: "",
},

      businessVerification: {
  panCard: null,
  tradeLicense: null,
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

  sortingFacilityAvailable: "",

  sortingCapacity: "",
},

segregationFacility: {
  segregationFacilityAvailable: "",
  segregationCapacity: "",
  segregationCapacityUnit: "",
},

selfTransportation: {
  vehicleAvailable: "",
  vehicleTypes: [],
  numberOfVehicles: "",

  primaryCity: "",
  district: "",
  state: "",
  pinCodes: "",
  collectionRadius: "",

  vehicleNumbers: "",
  drivingLicence: null,
},

facilityTransportation: {
    processingFacilityAvailable: "",
    facilityAddress: "",

    vehicleTypes: [],
    numberOfVehicles: "",
    vehicleNumbers: "",
},
coveragePayment: {
    operatingAreas: [],
    preferredPickupDays: [],
    preferredPickupTime: "",

    bankName: "",
    bankState: "",
    bankDistrict: "",
    bankBranch: "",
    bankAddress: "",

    accountHolderName: "",
    accountNumber: "",
    confirmAccountNumber: "",
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

  console.log("=================================");
  console.log("Field :", field);
  console.log("File :", file);
  console.log("Name :", file?.name);
  console.log("=================================");

  // Save the selected file
  setFormData((prev) => ({
    ...prev,
    businessVerification: {
      ...prev.businessVerification,
      [field]: file,
    },
  }));

  // Clear any validation error
  setErrors((prev) => {
    if (!prev[field]) {
      return prev;
    }

    const updatedErrors = { ...prev };
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

  const nextStep = async () => {
    let validationErrors:
      Record<string, string> = {};

    switch (currentStep) {
      case 1:
        validationErrors =
          validateBusinessInformation(formData);
        break;

      case 2:
        validationErrors =
          validateBusinessVerification(formData);
        break;

      case 3:
        validationErrors =
          validateBusinessAddress(formData);
        break;

      case 4:
        validationErrors =
          validateMaterialCollection(formData);
        break;

      case 5:
  validationErrors = {};
  break;

      case 6:
        validationErrors =
          validateCoveragePayment(formData);
        break;

      case 7:
        validationErrors =
          validateDeclaration(formData);
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
   STEP 1 DUPLICATE VALIDATION
===================================================== */

if (currentStep === 1) {

    const duplicate =
        await validateDuplicateBusinessInformation(
            formData.businessInformation
        );

        console.log("Duplicate Result:", duplicate);


    if (duplicate) {

        setErrors({
            [duplicate.field]: duplicate.message,
        });

        return;
    }
}

/* =====================================================
   REVALIDATE VEHICLE DOCUMENTS AFTER STEP 4

   Step 2 document requirements can change after the
   applicant selects whether they own/operate vehicles
   in Step 4.
===================================================== */

if (currentStep === 4) {
  const step2Errors =
    validateBusinessVerification(formData);

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

  const step1Errors = validateBusinessInformation(formData);

  if (Object.keys(step1Errors).length > 0) {
    setErrors(step1Errors);
    setCurrentStep(1);
    moveToFormTop();
    return;
  }

  const step2Errors = validateBusinessVerification(formData);

      if (
        Object.keys(step2Errors).length > 0
      ) {
        setErrors(step2Errors);
        setCurrentStep(2);
        moveToFormTop();
        return;
      }


      const step3Errors =
        validateBusinessAddress(formData);

      if (
        Object.keys(step3Errors).length > 0
      ) {
        setErrors(step3Errors);
        setCurrentStep(3);
        moveToFormTop();
        return;
      }


      const step4Errors =
        validateMaterialCollection(formData);

      if (
        Object.keys(step4Errors).length > 0
      ) {
        setErrors(step4Errors);
        setCurrentStep(4);
        moveToFormTop();
        return;
      }


      const step5Errors = {};

      if (
        Object.keys(step5Errors).length > 0
      ) {
        setErrors(step5Errors);
        setCurrentStep(5);
        moveToFormTop();
        return;
      }


      const step6Errors =
        validateCoveragePayment(formData);

      if (
        Object.keys(step6Errors).length > 0
      ) {
        setErrors(step6Errors);
        setCurrentStep(6);
        moveToFormTop();
        return;
      }


      const step7Errors =
  validateDeclaration(formData);

setErrors(step7Errors);

if (
  Object.keys(step7Errors).length > 0
) {
  setCurrentStep(7);
  moveToFormTop();
  return;
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

console.log("Verification Object");
console.log(JSON.stringify(verification, null, 2));
console.log("TradeLicense =", verification.tradeLicense);

if (verification.panCard) {
  submissionData.append(
    "panCard",
    verification.panCard
  );
}

console.log("Trade License File");
console.log(verification.tradeLicense);

if (verification.tradeLicense) {
  submissionData.append(
    "tradeLicense",
    verification.tradeLicense
  );
}

console.log(
    "Trade License Before Submit:",
    verification.tradeLicense
);

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

const transportation =
  formData.selfTransportation;

if (transportation.drivingLicence) {
  submissionData.append(
    "drivingLicence",
    transportation.drivingLicence
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
              Collection Partner Registration
            </h1>

            <p className="mt-3 max-w-3xl text-green-100">
              Register your collection business with UrbanLoop and become a verified Collection Partner,
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