"use client";

import { useState, useEffect } from "react";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import RadioGroup from "@/components/forms/RadioGroup";

import type {
  BusinessInformation,
  CollectionPartnerForm,
} from "../types";

import {
  COLLECTION_PARTNER_CATEGORIES,
} from "../constants";

interface Step1BusinessInformationProps {
  data: BusinessInformation;
  errors: Record<string, string>;

  updateField: <
    T extends keyof CollectionPartnerForm,
    K extends keyof CollectionPartnerForm[T]
  >(
    section: T,
    field: K,
    value: CollectionPartnerForm[T][K]
  ) => void;
}

export default function Step1BusinessInformation({
  data,
  errors,
  updateField,
}: Step1BusinessInformationProps) {

  const [mobileDuplicate, setMobileDuplicate] =
  useState(false);

const [checkingMobile, setCheckingMobile] =
  useState(false);

const [panDuplicate, setPanDuplicate] =
  useState(false);

useEffect(() => {
    console.log(
        "PAN Duplicate changed:",
        panDuplicate
    );
}, [panDuplicate]);

const [checkingPan, setCheckingPan] =
  useState(false);

useEffect(() => {
  console.log(
    "Step1 Render",
    "PAN:",
    data.panNumber,
    "Duplicate:",
    panDuplicate
  );
}, [panDuplicate, data.panNumber]);

 async function validateMobileNumber(
  mobileNumber: string
) {
  if (mobileNumber.length !== 10) {
    setMobileDuplicate(false);
    return;
  }

  try {
    setCheckingMobile(true);

    const response = await fetch(
  "/api/collection-partner-registration/validate-mobile",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mobileNumber,
    }),
  }
);

const result = await response.json();


console.log("Result:", result);
console.log("Validating:", mobileNumber);

setMobileDuplicate(result.exists);

  } catch (error) {
    console.error(error);
  } finally {
    setCheckingMobile(false);
  }
}

async function validatePanNumber(
  panNumber: string
) {

  if (panNumber.length !== 10) {
    setPanDuplicate(false);
    return;
  }

  try {

    setCheckingPan(true);

    const response = await fetch(
      "/api/collection-partner-registration/validate-pan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          panNumber,
        }),
      }
    );

    const result = await response.json();

console.log("==========================");
console.log("Full PAN API Response:", result);
console.log("Exists Value:", result.exists);
console.log("Response Type:", typeof result.exists);
console.log("==========================");

setPanDuplicate(result.exists);

  } catch (error) {

    console.error(error);

  } finally {

    setCheckingPan(false);

  }
}
  
  return (
    <div className="space-y-8">



      {/* =================================================
          BUSINESS INFORMATION
      ================================================= */}

       <SectionCard
        title="Business Information"
        description="Provide your basic business details."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <SelectField
            label="Collection Partner Category"
            name="collectionPartnerCategory"
            value={data.collectionPartnerCategory}
            options={COLLECTION_PARTNER_CATEGORIES}
            required
            error={errors.collectionPartnerCategory}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "collectionPartnerCategory",
                value
              )
            }
          />

          <InputField
            label="Business / Shop Name"
            name="shopName"
            value={data.shopName}
            placeholder="Enter Business / Shop Name"
            required
            error={errors.shopName}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "shopName",
                value
              )
            }
          />

          <InputField
            label="Owner Name"
            name="ownerName"
            value={data.ownerName}
            placeholder="Enter Owner Name"
            required
            error={errors.ownerName}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "ownerName",
                value
              )
            }
          />

          <InputField
  label="Email Address"
  name="email"
  type="email"
  value={data.email}
  placeholder="Enter Email Address"
  error={errors.email}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "email",
                value
              )
            }
          />

          <InputField
            label="Year Established"
            name="yearEstablished"
            value={data.yearEstablished}
            placeholder="Enter Year Established"
            error={errors.yearEstablished}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "yearEstablished",
                value
              )
            }
          />

        </div>
      </SectionCard>

      {/* =================================================
          CONTACT INFORMATION
      ================================================= */}

      <SectionCard
        title="Contact Information"
        description="Provide your primary contact details."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div>

  <InputField
    label="Mobile Number"
    name="mobileNumber"
    value={data.mobileNumber}
    placeholder="Enter mobile number"
    required
    maxLength={10}
    error={
    mobileDuplicate
        ? "This mobile number is already registered."
        : errors.mobileNumber
}
    onChange={(value) => {
      const mobile = value
        .replace(/\D/g, "")
        .slice(0, 10);

      updateField(
        "businessInformation",
        "mobileNumber",
        mobile
      );

      if (mobileDuplicate) {
        setMobileDuplicate(false);
      }
    }}
    onBlur={() =>
      validateMobileNumber(data.mobileNumber)
    }
  />

  </div>

                 </div>
      </SectionCard>


      {/* =================================================
          BUSINESS REGISTRATION
      ================================================= */}

      <SectionCard
        title="Business Registration"
        description="Provide your transport business registration and operating details."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <InputField
    label="PAN Number"
    name="panNumber"
    value={data.panNumber}
    placeholder="Enter PAN Number"
    required
    error={
        panDuplicate
            ? "This PAN number is already registered."
            : errors.panNumber
    }
            onChange={(value) => {

    const pan = value.toUpperCase();

    updateField(
        "businessInformation",
        "panNumber",
        pan
    );

    if (panDuplicate) {
        setPanDuplicate(false);
    }

}}

onBlur={() =>
    validatePanNumber(data.panNumber)
}
          />

            
        </div>
      </SectionCard>

    </div>
  );
}