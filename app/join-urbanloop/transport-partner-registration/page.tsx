"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ProgressBar from "./components/ProgressBar";
import StepNavigation from "./components/StepNavigation";

import Step1BusinessInformation from "./components/Step1BusinessInformation";
import Step2BusinessVerification from "./components/Step2BusinessVerification";
import Step3BusinessAddress from "./components/Step3BusinessAddress";
import Step4FleetCapability from "./components/Step4FleetCapability";
import Step5ServiceOperations from "./components/Step5ServiceOperations";
import Step6CommercialPayment from "./components/Step6CommercialPayment";
import Step7Declaration from "./components/Step7Declaration";

import {
  validateStep1,
  validateStep2,
  validateStep3,
  validateStep4,
  validateStep5,
  validateStep6,
  validateStep7,
  validateTransportPartnerForm,
} from "./validation";

import type {
  TransportPartnerForm,
  TransportBusinessVerification,
} from "./types";


export default function TransportPartnerRegistrationPage() {
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
    useState<TransportPartnerForm>({

      businessInformation: {
        transportPartnerCategory: "",
        businessName: "",
        ownerName: "",
        primaryContactPerson: "",

        mobileNumber: "",
        alternateMobileNumber: "",
        whatsappNumber: "",
        email: "",

        panNumber: "",
        gstNumber: "",

        yearsInBusiness: "",
        employeeDriverCount: "",
      },


      businessVerification: {
        panCard: null,
        gstCertificate: null,
        authorizedPersonId: null,

        drivingLicence: null,

        vehicleRegistrationCertificate: null,
        vehicleInsurance: null,
        pucCertificate: null,
        commercialPermit: null,
        fitnessCertificate: null,

        businessRegistration: null,
        vehiclePhoto: null,
      },


      businessAddress: {
        addressLine: "",
        buildingName: "",
        streetArea: "",
        landmark: "",
        city: "",
        state: "",
        pinCode: "",
      },


      fleetCapability: {
        ownsOperatesVehicles: "",
        numberOfVehicles: "",

        vehicleTypes: [],
        pickupCapabilities: [],
        materialCategories: [],

        minimumLoad: "",
        minimumLoadUnit: "",

        maximumTransportCapacity: "",
        maximumTransportCapacityUnit: "",

        loadingAssistanceAvailable: "",
        unloadingAssistanceAvailable: "",
      },


      serviceOperations: {
        operatingStates: [],
        operatingCitiesDistricts: [],
        serviceAreas: "",
        serviceRadius: "",

        operationalScope: [],

        operatingDays: [],
        operatingTime: [],

        sameDayPickupAvailable: "",
        weekendServiceAvailable: "",
      },


      commercialPayment: {
        commercialPreferences: [],

        preferredSettlementMethod: "",

        accountHolderName: "",
        bankName: "",
        accountNumber: "",
        confirmAccountNumber: "",
        ifscCode: "",

        upiId: "",
      },


      declaration: {
        informationConfirmed: false,
        termsAccepted: false,
        communicationConsent: false,
        vehicleComplianceConfirmed: false,
      },
    });


  /* =====================================================
     UPDATE FIELD
  ===================================================== */

  const updateField = <
    T extends keyof TransportPartnerForm,
    K extends keyof TransportPartnerForm[T]
  >(
    section: T,
    field: K,
    value: TransportPartnerForm[T][K]
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
    field: keyof TransportBusinessVerification,
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
     SUBMIT TRANSPORT PARTNER REGISTRATION
  ===================================================== */

  const handleSubmit = async () => {

    /*
      Validate the complete form before submission.

      This is particularly important for Transport Partner
      because some Step 2 document requirements depend on
      information selected later in Step 4.
    */

    const validationErrors =
      validateTransportPartnerForm(
        formData
      );

    if (
      Object.keys(validationErrors).length > 0
    ) {

      /*
        Find the first step containing an error so the
        applicant is returned directly to the relevant
        section instead of remaining on Step 7.
      */

      const step1Errors =
        validateStep1(formData);

      if (
        Object.keys(step1Errors).length > 0
      ) {
        setErrors(step1Errors);
        setCurrentStep(1);
        moveToFormTop();
        return;
      }


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
        businessInformation:
          formData.businessInformation,

        businessAddress:
          formData.businessAddress,

        fleetCapability:
          formData.fleetCapability,

        serviceOperations:
          formData.serviceOperations,

        commercialPayment:
          formData.commercialPayment,

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


      if (verification.panCard) {
        submissionData.append(
          "panCard",
          verification.panCard
        );
      }


      if (verification.gstCertificate) {
        submissionData.append(
          "gstCertificate",
          verification.gstCertificate
        );
      }


      if (verification.authorizedPersonId) {
        submissionData.append(
          "authorizedPersonId",
          verification.authorizedPersonId
        );
      }


      if (verification.drivingLicence) {
        submissionData.append(
          "drivingLicence",
          verification.drivingLicence
        );
      }


      if (
        verification.vehicleRegistrationCertificate
      ) {
        submissionData.append(
          "vehicleRegistrationCertificate",
          verification.vehicleRegistrationCertificate
        );
      }


      if (verification.vehicleInsurance) {
        submissionData.append(
          "vehicleInsurance",
          verification.vehicleInsurance
        );
      }


      if (verification.pucCertificate) {
        submissionData.append(
          "pucCertificate",
          verification.pucCertificate
        );
      }


      if (verification.commercialPermit) {
        submissionData.append(
          "commercialPermit",
          verification.commercialPermit
        );
      }


      if (verification.fitnessCertificate) {
        submissionData.append(
          "fitnessCertificate",
          verification.fitnessCertificate
        );
      }


      if (verification.businessRegistration) {
        submissionData.append(
          "businessRegistration",
          verification.businessRegistration
        );
      }


      if (verification.vehiclePhoto) {
        submissionData.append(
          "vehiclePhoto",
          verification.vehiclePhoto
        );
      }


      /* =================================================
         SEND REGISTRATION
      ================================================= */

      const response = await fetch(
        "/api/transport-partner-registration",
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
              "A Transport Partner registration already exists with these details."
          );

          return;
        }


        /* ===============================================
           OTHER API ERROR
        =============================================== */

        throw new Error(
          result.message ||
            "Unable to submit Transport Partner registration."
        );
      }


      /* =================================================
         SUCCESS
      ================================================= */

      router.push(
        `/registration-success?type=${encodeURIComponent(
          "Transport Partner Registration"
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
        "Transport Partner Submission Error:",
        error
      );

      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit Transport Partner registration.";

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
  businessInformation={formData.businessInformation}
  fleetCapability={formData.fleetCapability}
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
      <Step4FleetCapability
        data={formData.fleetCapability}
        errors={errors}
        updateField={updateField}
      />
    ),

    5: (
      <Step5ServiceOperations
        data={formData.serviceOperations}
        errors={errors}
        updateField={updateField}
      />
    ),

    6: (
      <Step6CommercialPayment
        data={formData.commercialPayment}
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
          className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 py-12"
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