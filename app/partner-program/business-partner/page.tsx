"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import BusinessPartnerFormComponent from "./components/BusinessPartnerForm";
import RegistrationDuplicateModal
  from "@/components/common/RegistrationDuplicateModal";


import { defaultValues } from "./defaultValues";

import {
  validateForm,
} from "./validation";

import type {
  BusinessPartnerForm as BusinessPartnerFormData,
} from "./types";

export default function BusinessPartnerPage() {

      const router = useRouter();

  const [formData, setFormData] =
  useState<BusinessPartnerFormData>(
    defaultValues
  );

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

const [registrationNumber, setRegistrationNumber] =
  useState("");

const [showDuplicate, setShowDuplicate] =
  useState(false);

const [duplicateField, setDuplicateField] =
  useState("");

const [duplicateValue, setDuplicateValue] =
  useState("");

const [duplicateType, setDuplicateType] =
  useState("");

const [applicationStatus, setApplicationStatus] =
  useState("");

      const updateField = <
  T extends keyof BusinessPartnerFormData,
  K extends keyof BusinessPartnerFormData[T]
>(
  section: T,
  field: K,
  value: BusinessPartnerFormData[T][K]
) => {

  setFormData((prev: BusinessPartnerFormData) => ({

    ...prev,

    [section]: {

      ...prev[section],

      [field]: value,

    },

  }));

};

const handleSubmit = async () => {

  if (isSubmitting) return;

  setErrors({});

  console.log("Submit button clicked");

  const validationErrors = validateForm(formData);

  console.log("Validation Errors:", validationErrors);

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    console.log("Validation Failed");
    return;
  }

  console.log("Validation Passed");

  console.log(formData);

  setIsSubmitting(true);

  try {

    const response = await fetch(
      "/api/business-partner-registration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    console.log(result);

    if (!response.ok) {

  if (result.duplicateType) {

  if (result.duplicateType === "mobile") {

    setDuplicateField("Mobile Number");

    setDuplicateValue(
      formData.businessInformation.mobileNumber
    );

  } else if (result.duplicateType === "pan") {

    setDuplicateField("PAN Number");

    setDuplicateValue(
      formData.businessRegistration.panNumber
    );

  } else if (result.duplicateType === "gst") {

    setDuplicateField("GST Number");

    setDuplicateValue(
      formData.businessRegistration.gstNumber
    );

  }

  setRegistrationNumber(
    result.registrationNumber ?? ""
  );

  setApplicationStatus(
    result.applicationStatus ?? ""
  );

  setShowDuplicate(true);

  return;

}

  alert(result.message);

  return;

}

    router.push(
  `/registration-success?type=Business Partner Registration&registrationNumber=${result.registrationNumber}&return=/partner-program&returnText=Back To Partnership Program`
);

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  } finally {

    setIsSubmitting(false);

  }

};


return (

<>

<Header />

<div className="container mx-auto py-12">

<BusinessPartnerFormComponent
  data={formData}
  errors={errors}
  updateField={updateField}
  handleSubmit={handleSubmit}
  isSubmitting={isSubmitting}
/>

</div>

<RegistrationDuplicateModal
  type="Business Partner Registration"
  field={duplicateField}
  value={duplicateValue}
  isOpen={showDuplicate}
  onClose={() => setShowDuplicate(false)}
/>

<Footer />

</>

);

}