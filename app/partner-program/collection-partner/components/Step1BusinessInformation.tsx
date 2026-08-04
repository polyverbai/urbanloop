"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import type {
  BusinessInformation,
  CollectionPartnerForm,
} from "../types";

import {
  COLLECTION_PARTNER_CATEGORIES,
  EMPLOYEE_OPTIONS,
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
  return (
    <div className="space-y-8">

      <SectionCard
        title="Business Information"
        description="Provide your basic business information."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
            placeholder="Enter business / shop name"
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
            placeholder="Enter owner name"
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
            label="Primary Contact Person"
            name="primaryContactPerson"
            value={data.primaryContactPerson}
            placeholder="Enter contact person"
            required
            error={errors.primaryContactPerson}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "primaryContactPerson",
                value
              )
            }
          />

        </div>
      </SectionCard>

<SectionCard
  title="Contact Information"
  description="Provide your primary contact details."
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <InputField
      label="Mobile Number"
      name="mobileNumber"
      value={data.mobileNumber}
      placeholder="Enter mobile number"
      required
      maxLength={10}
      error={errors.mobileNumber}
      onChange={(value) =>
        updateField(
          "businessInformation",
          "mobileNumber",
          value.replace(/\D/g, "").slice(0, 10)
        )
      }
    />

    <InputField
      label="Alternate Mobile Number"
      name="alternateMobileNumber"
      value={data.alternateMobileNumber}
      placeholder="Enter alternate mobile number"
      maxLength={10}
      error={errors.alternateMobileNumber}
      onChange={(value) =>
        updateField(
          "businessInformation",
          "alternateMobileNumber",
          value.replace(/\D/g, "").slice(0, 10)
        )
      }
    />

    <InputField
      label="WhatsApp Number"
      name="whatsappNumber"
      value={data.whatsappNumber}
      placeholder="Enter WhatsApp number"
      maxLength={10}
      error={errors.whatsappNumber}
      onChange={(value) =>
        updateField(
          "businessInformation",
          "whatsappNumber",
          value.replace(/\D/g, "").slice(0, 10)
        )
      }
    />

    <InputField
      label="Email Address"
      name="email"
      type="email"
      value={data.email}
      placeholder="Enter email address"
      required
      error={errors.email}
      onChange={(value) =>
        updateField(
          "businessInformation",
          "email",
          value
        )
      }
    />

    <div className="md:col-span-2">
      <InputField
        label="Website"
        name="website"
        value={data.website}
        placeholder="https://example.com"
        onChange={(value) =>
          updateField(
            "businessInformation",
            "website",
            value
          )
        }
      />
    </div>

  </div>
</SectionCard>

<SectionCard
  title="Business Registration"
  description="Provide your business registration details."
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <InputField
      label="Year Established"
      name="yearEstablished"
      type="number"
      value={data.yearEstablished}
      placeholder="Enter year"
      onChange={(value) =>
        updateField(
          "businessInformation",
          "yearEstablished",
          value
        )
      }
    />

    <InputField
      label="GST Number"
      name="gstNumber"
      value={data.gstNumber}
      required
      placeholder="Enter GST Number"
      error={errors.gstNumber}
      onChange={(value) =>
        updateField(
          "businessInformation",
          "gstNumber",
          value.toUpperCase()
        )
      }
    />

    <InputField
      label="PAN Number"
      name="panNumber"
      value={data.panNumber}
      required
      placeholder="Enter PAN Number"
      error={errors.panNumber}
      onChange={(value) =>
        updateField(
          "businessInformation",
          "panNumber",
          value.toUpperCase()
        )
      }
    />

    <SelectField
      label="Number of Employees"
      name="numberOfEmployees"
      value={data.numberOfEmployees}
      placeholder="Select"
      options={EMPLOYEE_OPTIONS}
      onChange={(value) =>
        updateField(
          "businessInformation",
          "numberOfEmployees",
          value
        )
      }
    />

  </div>
</SectionCard>



    </div>
  );
}
