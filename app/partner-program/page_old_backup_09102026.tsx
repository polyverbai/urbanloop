"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

import { supabase } from "@/lib/supabase";

import { INITIAL_COLLECTION_PARTNER_FORM } from "./initialData_old";
import type { CollectionPartnerForm } from "./types";
import { validateForm } from "./validation_old";


import SectionCard from "@/components/forms/SectionCard";import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import RadioGroup from "@/components/forms/RadioGroup";
import FileUpload from "@/components/forms/FileUpload";
import Checkbox from "@/components/forms/Checkbox";
import Step7Declaration from "./components/Step7Declaration";

import RegistrationDuplicateModal from "@/components/common/RegistrationDuplicateModal";

import {
  COLLECTION_PARTNER_CATEGORIES,
  EMPLOYEE_OPTIONS,
  MATERIAL_TYPES,
  COLLECTION_SERVICES,
  VEHICLE_TYPES,
} from "./constants_old";

export default function CollectionPartnerPage() {
const router = useRouter();

    const [formData, setFormData] = useState<CollectionPartnerForm>(
  INITIAL_COLLECTION_PARTNER_FORM
);

const [loading, setLoading] = useState(false);

const [showDuplicateModal, setShowDuplicateModal] =
  useState(false);

const [duplicateField, setDuplicateField] =
  useState("");

const [duplicateValue, setDuplicateValue] =
  useState("");

const [errors, setErrors] = useState<Record<string, string>>({});

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

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();
  console.log("Submit clicked");

  setErrors({});

  const validationErrors = validateForm(formData);

console.log("========== VALIDATION ERRORS ==========");
console.log(validationErrors);
console.log(JSON.stringify(validationErrors, null, 2));

setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) {
    const firstError = document.querySelector(
      ".border-red-500, .text-red-600"
    );

    firstError?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    return;
  }

 try {
  setLoading(true);

  const requestData = new FormData();

// Add complete form as JSON
requestData.append(
  "formData",
  JSON.stringify(formData)
);

// Attach all documents
if (formData.businessVerification.gstCertificate) {
  requestData.append(
    "gstCertificate",
    formData.businessVerification.gstCertificate
  );
}

if (formData.businessVerification.panCard) {
  requestData.append(
    "panCard",
    formData.businessVerification.panCard
  );
}

if (formData.businessVerification.tradeLicense) {
  requestData.append(
    "tradeLicense",
    formData.businessVerification.tradeLicense
  );
}

if (formData.businessVerification.aadhaarFront) {
  requestData.append(
    "aadhaarFront",
    formData.businessVerification.aadhaarFront
  );
}

if (formData.businessVerification.aadhaarBack) {
  requestData.append(
    "aadhaarBack",
    formData.businessVerification.aadhaarBack
  );
}

if (formData.businessVerification.ownerPhoto) {
  requestData.append(
    "ownerPhoto",
    formData.businessVerification.ownerPhoto
  );
}

if (formData.selfTransportation.drivingLicence) {
  requestData.append(
    "drivingLicence",
    formData.selfTransportation.drivingLicence
  );
}

const response = await fetch(
  "/api/collection-partner-registration",
  {
    method: "POST",
    body: requestData,
  }
);

const result = await response.json();

if (!response.ok) {

  if (response.status === 409) {

    setDuplicateField("Mobile Number");

    setDuplicateValue(
      formData.businessInformation.mobileNumber
    );

    setShowDuplicateModal(true);

    setLoading(false);

    return;
  }

  alert(result.message);

  setLoading(false);

  return;
}

if (!response.ok) {

    if (response.status === 409) {

        if (result.message.toLowerCase().includes("mobile")) {

            setDuplicateField("Mobile Number");
            setDuplicateValue(
                formData.businessInformation.mobileNumber
            );

        } else if (result.message.toLowerCase().includes("email")) {

            setDuplicateField("Email Address");
            setDuplicateValue(
                formData.businessInformation.email
            );

        }

        setShowDuplicateModal(true);
        return;
    }

    alert(result.message);
    return;
}

const registrationNumber =
    result.registrationNumber;

router.push(
    `/registration-success?type=Collection Partner Registration&registrationNumber=${registrationNumber}&return=/partner-program&returnText=Back To Partner Program`
);

} finally {
  setLoading(false);
} 
};

return (
  <>
    <Header />

    <main className="min-h-screen">
      <section className="pt-20 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

  <div className="mb-12 text-center">
    <h1 className="text-4xl font-bold text-slate-900">
      Become a Collection Partner
    </h1>

    <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
      Partner with UrbanLoop to collect recyclable materials from homes,
      businesses and institutions while contributing to a cleaner, greener,
      and more sustainable future.
    </p>
  </div>

  <form
  onSubmit={handleSubmit}
  className="rounded-3xl bg-white shadow-sm border border-slate-200 p-8 space-y-8"
>

  <SectionCard
  title="Business Information"
  description="Provide your business details."
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <SelectField
  label="Collection Partner Category"
  name="collectionPartnerCategory"
  value={formData.businessInformation.collectionPartnerCategory}
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
  value={formData.businessInformation.shopName}
  onChange={(value) =>
    updateField(
      "businessInformation",
      "shopName",
      value
    )
  }
  required
  error={errors.shopName}
/>

  <InputField
    label="Owner Name"
    name="ownerName"
    value={formData.businessInformation.ownerName}
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
    label="Mobile Number"
    name="mobileNumber"
    value={formData.businessInformation.mobileNumber}
    required
    error={errors.mobileNumber}
    onChange={(value) =>
      updateField(
        "businessInformation",
        "mobileNumber",
        value
      )
    }
  />

  <InputField
    label="Email"
    name="email"
    value={formData.businessInformation.email}
    error={errors.email}
    onChange={(value) =>
      updateField(
        "businessInformation",
        "email",
        value
      )
    }
  />

<RadioGroup
  label="PAN Available?"
  options={[
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]}
  value={formData.businessInformation.panAvailable}
  onChange={(value) =>
    updateField(
      "businessInformation",
      "panAvailable",
      value as "" | "Yes" | "No"
    )
  }
/>

{formData.businessInformation.panAvailable === "Yes" && (
  <InputField
    label="PAN Number"
    name="panNumber"
    value={formData.businessInformation.panNumber}
      error={errors.panNumber}
    onChange={(value) =>
      updateField(
        "businessInformation",
        "panNumber",
        value
      )
    }
  />
)}

<RadioGroup
  label="GST Available?"
  options={[
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]}
  value={formData.businessInformation.gstAvailable}
  onChange={(value) =>
    updateField(
      "businessInformation",
      "gstAvailable",
      value as "" | "Yes" | "No"
    )
  }
/>

{formData.businessInformation.gstAvailable === "Yes" && (
  <InputField
    label="GST Number"
    name="gstNumber"
    value={formData.businessInformation.gstNumber}
    error={errors.gstNumber}
    onChange={(value) =>
      updateField(
        "businessInformation",
        "gstNumber",
        value
      )
    }
  />
)}

<RadioGroup
  label="Trade License Available?"
  options={[
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]}
  value={formData.businessInformation.tradeLicenseAvailable}
  onChange={(value) =>
    updateField(
      "businessInformation",
      "tradeLicenseAvailable",
      value as "" | "Yes" | "No"
    )
  }
/>

{formData.businessInformation.tradeLicenseAvailable === "Yes" && (
  <InputField
    label="Trade License Number"
    name="tradeLicenseNumber"
    value={formData.businessInformation.tradeLicenseNumber}
    required
    error={errors.tradeLicense}
    onChange={(value) =>
      updateField(
        "businessInformation",
        "tradeLicenseNumber",
        value
      )
    }
  />
)}

</div>
</SectionCard>

<SectionCard
  title="Business Address"
  description="Provide your business address."
>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <InputField
  label="Shop Number"
  name="shopNumber"
  value={formData.businessAddress.shopNumber}
  error={errors.shopNumber}
  onChange={(value) =>
    updateField(
      "businessAddress",
      "shopNumber",
      value
    )
  }
/>

  <InputField
    label="Building Name"
    name="buildingName"
    required
    value={formData.businessAddress.buildingName}
    error={errors.buildingName}
    onChange={(value) =>
      updateField(
        "businessAddress",
        "buildingName",
        value
      )
    }
  />

  <InputField
    label="Street / Area"
    name="streetArea"
    required
    value={formData.businessAddress.streetArea}
    error={errors.streetArea}
    onChange={(value) =>
      updateField(
        "businessAddress",
        "streetArea",
        value
      )
    }
  />

  <InputField
    label="Landmark"
    name="landmark"
    value={formData.businessAddress.landmark}
    onChange={(value) =>
      updateField(
        "businessAddress",
        "landmark",
        value
      )
    }
  />

  <InputField
    label="City"
    name="city"
    required
    value={formData.businessAddress.city}
    error={errors.city}
    onChange={(value) =>
      updateField(
        "businessAddress",
        "city",
        value
      )
    }
  />

  <InputField
    label="State"
    name="state"
    required
    value={formData.businessAddress.state}
    error={errors.state}
    onChange={(value) =>
      updateField(
        "businessAddress",
        "state",
        value
      )
    }
  />

  <InputField
    label="PIN Code"
    name="pinCode"
    required
    value={formData.businessAddress.pinCode}
    error={errors.pinCode}
    onChange={(value) =>
      updateField(
        "businessAddress",
        "pinCode",
        value
      )
    }
  />

</div>

</SectionCard>

<SectionCard
  title="Material Collection"
  description="Provide details about the recyclable materials you collect."
>
  <div className="space-y-8">

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-3">
        Materials Handled
      </label>

      {errors.materialsHandled && (
  <p className="text-red-600 text-sm mb-2">
    {errors.materialsHandled}
  </p>
)}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {MATERIAL_TYPES.map((material) => (
          <Checkbox
            key={material}
label={material}
checked={formData.materialCollection.materialsHandled.includes(material)}
            onChange={(checked) => {

  if (material === "All Materials") {

    updateField(
      "materialCollection",
      "materialsHandled",
      checked ? [...MATERIAL_TYPES] : []
    );

    return;

  }

  let updated = checked
    ? [
        ...formData.materialCollection.materialsHandled,
        material,
      ]
    : formData.materialCollection.materialsHandled.filter(
        (item) => item !== material
      );

  updated = updated.filter(
    (item) => item !== "All Materials"
  );

  updateField(
    "materialCollection",
    "materialsHandled",
    updated
  );

}}
          />
        ))}
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-3">
        Collection Services
      </label>

      {errors.collectionServices && (
  <p className="text-red-600 text-sm mb-2">
    {errors.collectionServices}
  </p>
)}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {COLLECTION_SERVICES.map((service) => (
          <Checkbox
            key={service}
            label={service}
            checked={formData.materialCollection.collectionServices.includes(
              service
            )}
            onChange={(checked) => {

  if (service === "All Services") {

    updateField(
      "materialCollection",
      "collectionServices",
      checked ? [...COLLECTION_SERVICES] : []
    );

    return;
  }

  let updated = checked
    ? [
        ...formData.materialCollection.collectionServices,
        service,
      ]
    : formData.materialCollection.collectionServices.filter(
        (item) => item !== service
      );

  updated = updated.filter(
    (item) => item !== "All Services"
  );

  updateField(
    "materialCollection",
    "collectionServices",
    updated
  );

}}
          />
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <InputField
        label="Daily Collection Capacity"
        name="dailyCollectionCapacity"
        value={formData.materialCollection.dailyCollectionCapacity}
        error={errors.dailyCollectionCapacity}
        onChange={(value) =>
          updateField(
            "materialCollection",
            "dailyCollectionCapacity",
            value
          )
        }
      />

      <InputField
        label="Monthly Collection Capacity"
        name="monthlyCollectionCapacity"
        value={formData.materialCollection.monthlyCollectionCapacity}
        error={errors.monthlyCollectionCapacity}
        onChange={(value) =>
          updateField(
            "materialCollection",
            "monthlyCollectionCapacity",
            value
          )
        }
      />

      <InputField
        label="Capacity Unit"
        name="collectionCapacityUnit"
        value={formData.materialCollection.collectionCapacityUnit}
        error={errors.collectionCapacityUnit}
        onChange={(value) =>
          updateField(
            "materialCollection",
            "collectionCapacityUnit",
            value
          )
        }
      />

    </div>

  </div>
</SectionCard>

<SectionCard
  title="Segregation Facility"
  description="Provide details about your material segregation facility."
>
  <div className="space-y-6">

    <RadioGroup
      label="Do you have a segregation facility?"
      options={[
        { label: "Yes", value: "Yes" },
        { label: "No", value: "No" },
      ]}
      value={formData.segregationFacility.segregationFacilityAvailable}
      onChange={(value) =>
        updateField(
          "segregationFacility",
          "segregationFacilityAvailable",
          value
        )
      }
    />

    {formData.segregationFacility.segregationFacilityAvailable === "Yes" && (

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <InputField
          label="Segregation Capacity"
          name="segregationCapacity"
          value={formData.segregationFacility.segregationCapacity}
          onChange={(value) =>
            updateField(
              "segregationFacility",
              "segregationCapacity",
              value
            )
          }
        />

        <InputField
          label="Capacity Unit"
          name="segregationCapacityUnit"
          value={formData.segregationFacility.segregationCapacityUnit}
          onChange={(value) =>
            updateField(
              "segregationFacility",
              "segregationCapacityUnit",
              value
            )
          }
        />

      </div>

    )}

  </div>
</SectionCard>

{/* ====================================================== */}
{/* STEP 5 - SELF TRANSPORTATION */}
{/* ====================================================== */}

<SectionCard
  title="Self Transportation"
  description="Tell us about your transportation facilities."
>

<div className="space-y-6">

  <RadioGroup
  label="Do you have your own collection vehicle?"
  options={[
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ]}
  value={formData.selfTransportation.vehicleAvailable}
  error={errors.vehicleAvailable}
  onChange={(value) =>
    updateField(
      "selfTransportation",
      "vehicleAvailable",
      value as "" | "Yes" | "No"
    )
  }
/>

{formData.selfTransportation.vehicleAvailable === "Yes" && (

  <div>

    <label className="block text-sm font-medium text-slate-700 mb-3">
      Vehicle Types
    </label>

{errors.vehicleTypes && (
  <p className="text-red-600 text-sm mb-2">
    {errors.vehicleTypes}
  </p>
)}

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

      {VEHICLE_TYPES.map((vehicle) => (

        <Checkbox
          key={vehicle}
          label={vehicle}
          checked={formData.selfTransportation.vehicleTypes.includes(vehicle)}
          onChange={(checked) => {

  if (vehicle === "All Vehicles") {

  updateField(
    "selfTransportation",
    "vehicleTypes",
    checked ? [...VEHICLE_TYPES] : []
  );

  return;
}

  let updated = checked
    ? [
        ...formData.selfTransportation.vehicleTypes,
        vehicle,
      ]
    : formData.selfTransportation.vehicleTypes.filter(
        (item) => item !== vehicle
      );

  updated = updated.filter(
  (item) => item !== "All Vehicles"
);

  updateField(
    "selfTransportation",
    "vehicleTypes",
    updated
  );

}}
        />

      ))}

    </div>

  </div>

)}

{formData.selfTransportation.vehicleAvailable === "Yes" && (

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <InputField
  label="Number of Vehicles"
  name="numberOfVehicles"
  value={formData.selfTransportation.numberOfVehicles}
  error={errors.numberOfVehicles}
      onChange={(value) =>
        updateField(
          "selfTransportation",
          "numberOfVehicles",
          value
        )
      }
    />

    <InputField
  label="Vehicle Registration Number(s)"
  name="vehicleNumbers"
  value={formData.selfTransportation.vehicleNumbers}
  error={errors.vehicleNumbers}
      onChange={(value) =>
        updateField(
          "selfTransportation",
          "vehicleNumbers",
          value
        )
      }
    />



  </div>

)}

</div>

</SectionCard>

{/* ====================================================== */}
{/* STEP 6 - BUSINESS VERIFICATION */}
{/* ====================================================== */}

<SectionCard
  title="Business Verification"
  description="Upload your business verification documents."
>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  {formData.businessInformation.gstAvailable === "Yes" && (
    <FileUpload
  name="gstCertificate"
  label="GST Certificate"
  file={formData.businessVerification.gstCertificate}
  error={errors.gstCertificate}
  onChange={(file) =>
        updateField(
          "businessVerification",
          "gstCertificate",
          file
        )
      }
    />
  )}

  {formData.businessInformation.panAvailable === "Yes" && (
  <FileUpload
  name="panCard"
  label="PAN Card"
  file={formData.businessVerification.panCard}
  error={errors.panCard}
  onChange={(file) =>
      updateField(
        "businessVerification",
        "panCard",
        file
      )
    }
  />
)}

  {formData.businessInformation.tradeLicenseAvailable === "Yes" && (
  <FileUpload
  name="tradeLicense"
  label="Trade License"
  file={formData.businessVerification.tradeLicense}
  error={errors.tradeLicense}
  onChange={(file) =>
      updateField(
        "businessVerification",
        "tradeLicense",
        file
      )
    }
  />
)}

  <FileUpload
    name="aadhaarFront"
    label="Owner Aadhaar Card (Front)"
    file={formData.businessVerification.aadhaarFront}
    error={errors.aadhaarFront}
    onChange={(file) =>
      updateField(
        "businessVerification",
        "aadhaarFront",
        file
      )
    }
  />

  <FileUpload
    name="aadhaarBack"
    label="Owner Aadhaar Card (Back)"
    file={formData.businessVerification.aadhaarBack}
    error={errors.aadhaarBack}
    onChange={(file) =>
      updateField(
        "businessVerification",
        "aadhaarBack",
        file
      )
    }
  />

  <FileUpload
    name="ownerPhoto"
    label="Owner Photograph"
    file={formData.businessVerification.ownerPhoto}
    error={errors.ownerPhoto}
    onChange={(file) =>
      updateField(
        "businessVerification",
        "ownerPhoto",
        file
      )
    }
  />

  <FileUpload
  name="drivingLicence"
  label="Driving Licence"
  file={formData.selfTransportation.drivingLicence}
  error={errors.drivingLicence}
  onChange={(file) =>
    updateField(
      "selfTransportation",
      "drivingLicence",
      file
    )
  }
/>

</div>

</SectionCard>

{/* ====================================================== */}
{/* STEP 7 - COVERAGE & PAYMENT */}
{/* ====================================================== */}

<SectionCard
  title="Coverage & Payment Information"
  description="Tell us where you operate and provide your payment details."
>

  <div className="space-y-8">

  <div>

    <label className="mb-3 block text-sm font-medium text-slate-700">
      Operating Areas
    </label>

{errors.operatingAreas && (
  <p className="text-red-600 text-sm mb-2">
    {errors.operatingAreas}
  </p>
)}

    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3"
>

      {[
        "Bangalore North",
        "Bangalore South",
        "Bangalore East",
        "Bangalore West",
        "Rural Bangalore",
      ].map((area) => (

        <Checkbox
          key={area}
          label={area}
          checked={formData.coveragePayment.operatingAreas.includes(area)}
          onChange={(checked) => {

            if (checked) {
              updateField(
                "coveragePayment",
                "operatingAreas",
                [
                  ...formData.coveragePayment.operatingAreas,
                  area,
                ]
              );
            } else {
              updateField(
                "coveragePayment",
                "operatingAreas",
                formData.coveragePayment.operatingAreas.filter(
                  (item) => item !== area
                )
              );
            }

          }}
        />

      ))}



    </div>


  </div>

<div>

  <label className="mb-3 block text-sm font-medium text-slate-700">
    Preferred Pickup Days
  </label>

  {errors.preferredPickupDays && (
  <p className="text-red-600 text-sm mb-2">
    {errors.preferredPickupDays}
  </p>
)}

  <div className="grid grid-cols-2 md:grid-cols-7 gap-3">

    {[
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ].map((day) => (

      <Checkbox
        key={day}
        label={day}
        checked={formData.coveragePayment.preferredPickupDays.includes(day)}
        onChange={(checked) => {

          if (checked) {
            updateField(
              "coveragePayment",
              "preferredPickupDays",
              [
                ...formData.coveragePayment.preferredPickupDays,
                day,
              ]
            );
          } else {
            updateField(
              "coveragePayment",
              "preferredPickupDays",
              formData.coveragePayment.preferredPickupDays.filter(
                (item) => item !== day
              )
            );
          }

        }}
      />

    ))}

  </div>

</div>

<SelectField
  className="max-w-sm"
  label="Preferred Pickup Time"
  name="preferredPickupTime"
  value={formData.coveragePayment.preferredPickupTime}
    error={errors.preferredPickupTime}
  options={[
    { value: "Morning", label: "Morning (8 AM - 12 PM)" },
    { value: "Afternoon", label: "Afternoon (12 PM - 4 PM)" },
    { value: "Evening", label: "Evening (4 PM - 8 PM)" },
    { value: "Anytime", label: "Anytime" },
  ]}
  onChange={(value) =>
    updateField(
      "coveragePayment",
      "preferredPickupTime",
      value
    )
  }
/>

</div>

</SectionCard>

{/* ====================================================== */}
{/* STEP 8 - BANK DETAILS */}
{/* ====================================================== */}

<SectionCard
  title="Bank Account Details"
  description="Provide your bank account details for settlements."
>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <InputField
      label="Bank Name"
      name="bankName"
      value={formData.bankDetails.bankName}
      error={errors.bankName}
      onChange={(value) =>
        updateField(
          "bankDetails",
          "bankName",
          value
        )
      }
    />

    <InputField
      label="Account Holder Name"
      name="accountHolderName"
      value={formData.bankDetails.accountHolderName}
      error={errors.accountHolderName}
      onChange={(value) =>
        updateField(
          "bankDetails",
          "accountHolderName",
          value
        )
      }
    />

    <InputField
      label="Account Number"
      name="accountNumber"
      value={formData.bankDetails.accountNumber}
      error={errors.accountNumber}
      onChange={(value) =>
        updateField(
          "bankDetails",
          "accountNumber",
          value
        )
      }
    />

    <InputField
      label="IFSC Code"
      name="ifscCode"
      value={formData.bankDetails.ifscCode}
      error={errors.ifscCode}
      onChange={(value) =>
        updateField(
          "bankDetails",
          "ifscCode",
          value
        )
      }
    />

    <InputField
      label="UPI ID"
      name="upiId"
      value={formData.bankDetails.upiId}
      onChange={(value) =>
        updateField(
          "bankDetails",
          "upiId",
          value
        )
      }
    />

  </div>

</SectionCard>

<Step7Declaration
  data={formData.declaration}
  errors={errors}
  updateField={updateField}
/>

{/* ====================================================== */}
{/* SUBMIT REGISTRATION */}
{/* ====================================================== */}

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="flex flex-col items-center">

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

    <p className="mt-4 text-sm text-slate-500">
      Our team will review your registration and contact you shortly.
    </p>

  </div>

</div>

</form>

</div>
      </section>
    </main>

    <RegistrationDuplicateModal
    type="Collection Partner Registration"
    field={duplicateField}
    value={duplicateValue}
    isOpen={showDuplicateModal}
    onClose={() => setShowDuplicateModal(false)}
/>

<Footer />
  </>
);
}