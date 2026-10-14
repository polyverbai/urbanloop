"use client";

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
            label="Mobile Number"
            name="mobileNumber"
            value={data.mobileNumber}
            placeholder="Enter Mobile Number"
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
            label="Email Address"
            name="email"
            type="email"
            value={data.email}
            placeholder="Enter Email Address"
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

          <SelectField
            label="Number of Employees"
            name="numberOfEmployees"
            value={data.numberOfEmployees}
            options={EMPLOYEE_OPTIONS}
            error={errors.numberOfEmployees}
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

      {/* =================================================
          CONTACT INFORMATION
      ================================================= */}

      <SectionCard
        title="Contact Information"
        description="Provide your primary contact details."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

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
            error={errors.panNumber}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "panNumber",
                value.toUpperCase()
              )
            }
          />

          <InputField
            label="GST Number"
            name="gstNumber"
            value={data.gstNumber}
            placeholder="Enter GST Number, if applicable"
            error={errors.gstNumber}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "gstNumber",
                value.toUpperCase()
              )
            }
          />

        </div>
      </SectionCard>

    </div>
  );
}