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

  const validationErrors =
    validateForm(formData);

  setErrors(validationErrors);

  if (
    Object.keys(validationErrors).length > 0
  ) {
    return;
  }

  console.log(formData);

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