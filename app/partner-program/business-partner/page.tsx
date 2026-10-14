"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import BusinessPartnerFormComponent from "./components/BusinessPartnerForm";

import { defaultValues } from "./defaultValues";

import {
  validateForm,
} from "./validation";

import type {
  BusinessPartnerForm as BusinessPartnerFormData,
} from "./types";

export default function BusinessPartnerPage() {

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

  const [submitted, setSubmitted] =
    useState(false);

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
      alert(result.message);
      return;
    }

    alert("Registration submitted successfully.");

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

<Footer />

</>

);

}