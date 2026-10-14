"use client";

import { useState } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

import { INITIAL_COLLECTION_PARTNER_FORM } from "./initialData";
import type { CollectionPartnerForm } from "./types";

import SectionCard from "@/components/forms/SectionCard";import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import RadioGroup from "@/components/forms/RadioGroup";
import FileUpload from "@/components/forms/FileUpload";
import Checkbox from "@/components/forms/Checkbox";

import {
  COLLECTION_PARTNER_CATEGORIES,
  EMPLOYEE_OPTIONS,
  MATERIAL_TYPES,
  COLLECTION_SERVICES,
  VEHICLE_TYPES,
} from "./constants";

export default function CollectionPartnerPage() {

const [formData, setFormData] = useState<CollectionPartnerForm>(
  INITIAL_COLLECTION_PARTNER_FORM
);

const [loading, setLoading] = useState(false);

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


  // Vehicle Details
  if (
    formData.selfTransportation.vehicleAvailable === "Yes"
  ) {

  // Collection Services

}

async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  console.log("Submit clicked");
}

  return (
    <>
      <Header />

      <main className="min-h-screen">
  <section className="pt-20 pb-2">
    
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
  </div>

<div className="mt-8 flex justify-center">

                <Link
  href="/join-urbanloop/categories"
  className="inline-flex items-center gap-2 rounded-xl bg-[#D7EFC2] px-5 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
>
  ← Back
</Link>

</div>
  </section>

  <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

  <div className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]">

  <form
  onSubmit={handleSubmit}
>
  <div className="mb-10 border-b border-[#E6EFE0] pb-6">
    <h2 className="text-2xl font-bold text-slate-900">
      Collection Partner Registration
    </h2>

    <p className="mt-2 text-slate-600">
      Complete the details below to register your business as an UrbanLoop Collection Partner.
    </p>
  </div>

  <SectionCard
  title="Business Information"
  description="Provide your basic business details."
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <SelectField
      label="Collection Partner Category"
      name="collectionPartnerCategory"
      value={formData.businessInformation.collectionPartnerCategory}
      options={COLLECTION_PARTNER_CATEGORIES}
      required
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
  placeholder="Enter business / shop name"
  required
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
  value={formData.businessInformation.ownerName}
  placeholder="Enter owner name"
  required
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
  placeholder="Enter mobile number"
  required
  onChange={(value) =>
    updateField(
      "businessInformation",
      "mobileNumber",
      value
    )
  }
/>

<InputField
  label="Email Address"
  name="email"
  type="email"
  value={formData.businessInformation.email}
  placeholder="Enter email address"
  required
  onChange={(value) =>
    updateField(
      "businessInformation",
      "email",
      value
    )
  }
/>

</div>

</SectionCard>

<SectionCard
  title="Business Address"
  description="Provide your business location details."
>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <InputField
    label="Shop No."
    name="shopNumber"
    value={formData.businessAddress.shopNumber}
    placeholder="Enter shop number"
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
    value={formData.businessAddress.buildingName}
    placeholder="Enter building name"
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
  value={formData.businessAddress.streetArea}
  placeholder="Enter street / area"
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
  label="City"
  name="city"
  value={formData.businessAddress.city}
  placeholder="Enter city"
  required
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
  value={formData.businessAddress.state}
  placeholder="Enter state"
  required
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
  value={formData.businessAddress.pinCode}
  placeholder="Enter PIN code"
  required
  onChange={(value) =>
    updateField(
      "businessAddress",
      "pinCode",
      value
    )
  }
/>

<InputField
  label="Landmark"
  name="landmark"
  value={formData.businessAddress.landmark}
  placeholder="Enter landmark"
  onChange={(value) =>
    updateField(
      "businessAddress",
      "landmark",
      value
    )
  }
/>


</div>

</SectionCard>

<SectionCard
  title="Business Registration"
  description="Provide Your Business registration details."
>
  <div className="rounded-xl border border-gray-300 bg-white p-5">

  <div className="flex items-start gap-2">

  {/* LEFT SIDE */}

  <div className="min-w-[260px]">

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
      value as "Yes" | "No"
    )
  }
/>

  </div>

  {/* RIGHT SIDE */}

  {formData.businessInformation.tradeLicenseAvailable === "Yes" && (

    <div className="w-[360px]">

      <InputField
        label=""
        name="tradeLicenseNumber"
        value={formData.businessInformation.tradeLicenseNumber}
        placeholder="Enter Trade License Number"
        onChange={(value) =>
          updateField(
            "businessInformation",
            "tradeLicenseNumber",
            value
          )
        }
      />

    </div>

  )}

</div>
</div>

<div className="mt-6 rounded-xl border border-gray-300 bg-white p-5">

  <div className="flex items-start gap-2">

    <div className="min-w-[260px]">

      <RadioGroup
        label="GST Registration Available?"
        options={[
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" },
        ]}
        value={formData.businessInformation.gstAvailable}
        onChange={(value) =>
          updateField(
            "businessInformation",
            "gstAvailable",
            value as "Yes" | "No"
          )
        }
      />

    </div>

    {formData.businessInformation.gstAvailable === "Yes" && (

      <div className="w-[360px]">

        <InputField
          label=""
          name="gstNumber"
          value={formData.businessInformation.gstNumber}
          placeholder="Enter GST Number"
          onChange={(value) =>
            updateField(
              "businessInformation",
              "gstNumber",
              value
            )
          }
        />

      </div>

    )}

</div>
</div>

<div className="mt-6 rounded-xl border border-gray-300 bg-white p-5">

  <div className="flex items-start gap-2">

    <div className="min-w-[260px]">

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
            value as "Yes" | "No"
          )
        }
      />

    </div>

    {formData.businessInformation.panAvailable === "Yes" && (

      <div className="w-[360px]">

        <InputField
          label=""
          name="panNumber"
          value={formData.businessInformation.panNumber}
          placeholder="Enter PAN Number"
          onChange={(value) =>
            updateField(
              "businessInformation",
              "panNumber",
              value
            )
          }
        />

      </div>

    )}

  </div>

</div>

</SectionCard>

<SectionCard
  title="Material Collection"
  description="Provide details about the recyclable materials your business collects."
>
  <div className="rounded-xl border border-gray-300 bg-white p-5">

<div className="mb-8">

  <label
  className={`text-sm font-medium ${
      ? "text-red-600"
      : "text-slate-700"
  }`}
>
  Materials Handled
  <span className="ml-1 text-red-600">*</span>
</label>

  <p className="mb-5 text-sm text-slate-500">
    Select all recyclable materials your business currently collects.
  </p>

  <div
  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-4 rounded-xl p-4 transition-colors ${
      ? "border border-red-500 bg-red-50"
      : ""
  }`}
>


    {MATERIAL_TYPES.map((material) => (

      <div
  key={material}
  className={
    material === "All Materials"
      ? "col-span-full mb-2 border-b border-gray-200 pb-3"
      : ""
  }
>
  <Checkbox
    label={material}
    checked={formData.materialCollection.materialsHandled.includes(material)}
    onChange={(checked) => {
    const current = formData.materialCollection.materialsHandled;

    if (material === "All Materials") {
      updateField(
        "materialCollection",
        "materialsHandled",
        checked ? [...MATERIAL_TYPES] : []
      );
      return;
    }

    let updated = checked
      ? [...current, material]
      : current.filter((item) => item !== material);

    updated = updated.filter(
      (item) => item !== "All Materials"
    );

    const individualMaterials = MATERIAL_TYPES.filter(
      (item) => item !== "All Materials"
    );

    if (
      individualMaterials.every((item) =>
        updated.includes(item)
      )
    ) {
      updated = [...MATERIAL_TYPES];
    }

    updateField(
      "materialCollection",
      "materialsHandled",
      updated
    );
    }}
  />
</div>

    ))}

  </div>

  <p className="mt-3 text-sm text-red-600">
  </p>


 <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

    <InputField
      label="Average Daily Collection Capacity"
      name="dailyCollectionCapacity"
      value={formData.materialCollection.dailyCollectionCapacity}
      placeholder="Enter daily collection capacity"
      onChange={(value) =>
        updateField(
          "materialCollection",
          "dailyCollectionCapacity",
          value
        )
      }
    />

    <SelectField
      label="Capacity Unit"
      name="collectionCapacityUnit"
      value={formData.materialCollection.collectionCapacityUnit}
      options={[
        { label: "Kilograms (Kg)", value: "Kg" },
        { label: "Metric Tons (MT)", value: "MT" },
      ]}
      onChange={(value) =>
        updateField(
          "materialCollection",
          "collectionCapacityUnit",
          value
        )
      }
    />

  </div>

  <div className="mt-8">

  <label
  className={`block text-sm font-semibold ${
    errors.collectionServices
      ? "text-red-600"
      : "text-slate-900"
  }`}
>
  Collection Services
  <span className="ml-1 text-red-500">*</span>
</label>

  <p className="mb-5 text-sm text-slate-500">
    Select all collection services offered by your business.
  </p>

  {errors.collectionServices && (
    <p className="mb-4 text-sm text-red-600">
      {errors.collectionServices}
    </p>
  )}

  <div
  className={`rounded-xl p-4 transition-colors ${
    errors.collectionServices
      ? "border border-red-500 bg-red-50"
      : ""
  }`}
>

  {/* All Services */}

  <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">

    <input
      type="checkbox"
      checked={formData.materialCollection.collectionServices.includes("All Services")}
      onChange={(e) => {
        const checked = e.target.checked;

        updateField(
          "materialCollection",
          "collectionServices",
          checked ? [...COLLECTION_SERVICES] : []
        );
      }}
      className="h-4 w-4 rounded border-gray-300"
    />

    All Services

  </label>

  <hr className="my-5 border-gray-200" />

  <div
  className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 rounded-xl p-4 transition-colors ${
    errors.collectionServices
      ? "border border-red-500 bg-red-50"
      : ""
  }`}
>

    {COLLECTION_SERVICES
      .filter((service) => service !== "All Services")
      .map((service) => (
        <label
          key={service}
          className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={formData.materialCollection.collectionServices.includes(service)}
            onChange={(e) => {
              const checked = e.target.checked;
              const current =
                formData.materialCollection.collectionServices;

              const updated = checked
                ? [...current, service]
                : current.filter((item) => item !== service);

              updateField(
                "materialCollection",
                "collectionServices",
                updated
              );
            }}
            className="h-4 w-4 rounded border-gray-300"
          />

            {service}
        </label>
      ))}
  </div>

  </div>

  </div>

  </div>
</div>
</SectionCard>

<SectionCard
  title="Segregation Facility"
  description="Provide details about your material segregation facility."
>
  <div className="rounded-xl border border-gray-300 bg-white p-5">

  <div className="flex items-start gap-2">

    {/* LEFT SIDE */}

    <div className="min-w-[260px]">

      <RadioGroup
        label="Segregation Facility Available?"
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

</div>

{/* RIGHT SIDE */}

{formData.segregationFacility.segregationFacilityAvailable === "Yes" && (

  <div className="flex items-end gap-4">

    <div className="w-[240px]">

      <InputField
        label=""
        name="segregationCapacity"
        value={formData.segregationFacility.segregationCapacity}
        placeholder="Enter Segregation Capacity"
        onChange={(value) =>
          updateField(
            "segregationFacility",
            "segregationCapacity",
            value
          )
        }
      />

    </div>

    <div className="w-[200px]">

      <SelectField
        label=""
        name="segregationCapacityUnit"
        value={formData.segregationFacility.segregationCapacityUnit}
        options={[
          { label: "Kilograms (Kg)", value: "Kg" },
          { label: "Metric Tons (MT)", value: "MT" },
        ]}
        onChange={(value) =>
          updateField(
            "segregationFacility",
            "segregationCapacityUnit",
            value
          )
        }
      />

    </div>

</div>

)}

</div>

</div>
</SectionCard>

<SectionCard
  title="Self Transportation"
  description="Provide details about your transportation vehicles."
>
  <div className="rounded-xl border border-gray-300 bg-white p-5">

    <div className="flex items-start gap-2">

      <div className="min-w-[260px]">

        <RadioGroup
          label="Own Transportation Available?"
          options={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          value={formData.selfTransportation.vehicleAvailable}
          onChange={(value) =>
  updateField(
    "selfTransportation",
    "vehicleAvailable",
    value as "Yes" | "No"
  )
}
        />

{formData.selfTransportation.vehicleAvailable === "Yes" && (
  <div className="mt-6">
    <InputField
      label="Vehicle Numbers"
      name="vehicleNumbers"
      required
      error={errors.vehicleNumbers}
      value={formData.selfTransportation.vehicleNumbers}
      placeholder="KA01AB1234, KA02CD5678, KA03EF9012"
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

{formData.selfTransportation.vehicleAvailable === "Yes" && (
  <div
    className={`mt-6 rounded-xl p-4 transition-colors ${
      errors.drivingLicence
        ? "border border-red-500 bg-red-50"
        : ""
    }`}
  >
    <FileUpload
      label="Driving Licence"
      name="drivingLicence"
      file={formData.selfTransportation.drivingLicence}
      required
      onChange={(file) =>
        updateField(
          "selfTransportation",
          "drivingLicence",
          file
        )
      }
    />
{errors.drivingLicence && (
  <p className="mt-3 text-sm text-red-600">
    {errors.drivingLicence}
  </p>
)}

  </div>
)}

      </div>

{formData.selfTransportation.vehicleAvailable === "Yes" && (

  <div className="flex-1">

    <label
  className={`block text-sm font-semibold ${
    errors.vehicleTypes
      ? "text-red-600"
      : "text-slate-900"
  }`}
>
  Vehicle Types
  <span className="ml-1 text-red-500">*</span>
</label>

    {/* All Vehicles */}

<div className="mb-2 mt-2">
  <Checkbox
    label="All Vehicles"
    checked={formData.selfTransportation.vehicleTypes.includes("All Vehicles")}
    onChange={(checked) => {
      updateField(
        "selfTransportation",
        "vehicleTypes",
        checked ? [...VEHICLE_TYPES] : []
      );
    }}
  />
</div>

<hr className="mb-6 border-gray-200" />

<div
  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-xl p-4 transition-colors ${
    errors.vehicleTypes
      ? "border border-red-500 bg-red-50"
      : ""
  }`}
>

  {VEHICLE_TYPES
    .filter((vehicle) => vehicle !== "All Vehicles")
    .map((vehicle) => (
      <Checkbox
        key={vehicle}
        label={vehicle}
        checked={formData.selfTransportation.vehicleTypes.includes(vehicle)}
        onChange={(checked) => {
          // Keep your existing onChange logic here
        }}
      />
    ))}

</div>

{errors.vehicleTypes && (
  <p className="mt-3 text-sm text-red-600">
    {errors.vehicleTypes}
  </p>
)}


<div className="mt-10 border-t border-gray-200 pt-8">

  <label
  className={`block text-sm font-semibold ${
    errors.primaryCity
      ? "text-red-600"
      : "text-slate-900"
  }`}
>
  Coverage Area
  <span className="ml-1 text-red-500">*</span>
</label>

  <div
  className={`grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl p-4 transition-colors ${
    errors.primaryCity
      ? "border border-red-500 bg-red-50"
      : ""
  }`}
>

    <InputField
  label="Primary City"
  name="primaryCity"
  required
  error={errors.primaryCity}
  value={formData.selfTransportation.primaryCity}
  placeholder="Enter primary city"
  onChange={(value) =>
    updateField(
      "selfTransportation",
      "primaryCity",
      value
    )
  }
/>

<InputField
  label="District"
  name="district"
  value={formData.selfTransportation.district}
  placeholder="Enter district"
  onChange={(value) =>
    updateField(
      "selfTransportation",
      "district",
      value
    )
  }
/>

<InputField
  label="PIN Codes Covered"
  name="pinCodes"
  value={formData.selfTransportation.pinCodes}
  placeholder="Example: 560001, 560002"
  onChange={(value) =>
    updateField(
      "selfTransportation",
      "pinCodes",
      value
    )
  }
/>

<InputField
  label="Collection Radius (KM)"
  name="collectionRadius"
  value={formData.selfTransportation.collectionRadius}
  placeholder="Enter radius in KM"
  onChange={(value) =>
    updateField(
      "selfTransportation",
      "collectionRadius",
      value
    )
  }
/>

  </div>

{errors.primaryCity && (
  <p className="mt-3 text-sm text-red-600">
    {errors.primaryCity}
  </p>
)}

{errors.coverageRadius && (
  <p className="mt-2 text-sm text-red-600">
    {errors.coverageRadius}
  </p>
)}

{errors.serviceAreas && (
  <p className="mt-2 text-sm text-red-600">
    {errors.serviceAreas}
  </p>
)}

</div>

  </div>

)}

    </div>

  </div>


</SectionCard>

<SectionCard
  title="Payment Details"
  description="Provide your bank account details for receiving payments."
>

<div className="rounded-xl border border-gray-300 bg-white p-5">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <InputField
  label="Bank Name"
  required
  name="bankName"
  value={formData.coveragePayment.bankName}
  placeholder="Enter bank name"
  onChange={(value) =>
    updateField(
      "coveragePayment",
      "bankName",
      value
    )
  }
/>

<InputField
  label="Account Holder Name"
  required
  name="accountHolderName"
  value={formData.coveragePayment.accountHolderName}
  placeholder="Enter account holder name"
  onChange={(value) =>
    updateField(
      "coveragePayment",
      "accountHolderName",
      value
    )
  }
/>

<InputField
  label="Account Number"
  required
  name="accountNumber"
  value={formData.coveragePayment.accountNumber}
  placeholder="Enter account number"
  onChange={(value) =>
    updateField(
      "coveragePayment",
      "accountNumber",
      value
    )
  }
/>

<InputField
  label="IFSC Code"
  required
  name="ifscCode"
  value={formData.coveragePayment.ifscCode}
  placeholder="Enter IFSC code"
  onChange={(value) =>
    updateField(
      "coveragePayment",
      "ifscCode",
      value
    )
  }
/>

<InputField
  label="UPI ID (Optional)"
  name="upiId"
  value={formData.coveragePayment.upiId}
  placeholder="example@upi"
  onChange={(value) =>
    updateField(
      "coveragePayment",
      "upiId",
      value
    )
  }
/>

</div>

</div>

</SectionCard>

{/* ====================================================== */}
{/* DECLARATION */}
{/* ====================================================== */}

<div className="rounded-2xl border bg-white p-8 mb-8">

  <h2 className="mb-2 text-2xl font-bold text-slate-800">
  Declaration
  <span className="ml-1 text-red-500">*</span>
</h2>

  <p className="mb-8 text-sm text-slate-600">
    Please review and accept the declaration before submitting your application.
  </p>

  <div className="space-y-6">

    <Checkbox
      label="I hereby declare that all the information provided by me is true and correct to the best of my knowledge."
      checked={formData.declaration.declarationAccepted}
      onChange={(checked) =>
        updateField(
          "declaration",
          "declarationAccepted",
          checked
        )
      }
    />

    <Checkbox
      label="I agree to UrbanLoop's Terms & Conditions and Privacy Policy."
      checked={formData.declaration.termsAccepted}
      onChange={(checked) =>
        updateField(
          "declaration",
          "termsAccepted",
          checked
        )
      }
    />

    <Checkbox
      label="I consent to receive communication from UrbanLoop regarding pickups, payments, account updates and partnership activities."
      checked={formData.declaration.communicationConsent}
      onChange={(checked) =>
        updateField(
          "declaration",
          "communicationConsent",
          checked
        )
      }
    />

  </div>

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="text-center">

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
      Our team will review your application and contact you after verification.
    </p>

  </div>

</div>

</div>

</form>

</div>
</section>

</main>

      <Footer />
    </>
  );
}