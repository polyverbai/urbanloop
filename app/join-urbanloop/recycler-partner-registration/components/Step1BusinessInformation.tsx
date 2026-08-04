"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import {
  EMPLOYEE_COUNT_OPTIONS,
  RECYCLER_PARTNER_CATEGORIES,
} from "../constants";

import type {
  RecyclerBusinessInformation,
} from "../types";

interface Step1BusinessInformationProps {
  data: RecyclerBusinessInformation;
  errors: Record<string, string>;

  onChange: (
    field: keyof RecyclerBusinessInformation,
    value: string
  ) => void;
}

export default function Step1BusinessInformation({
  data,
  errors,
  onChange,
}: Step1BusinessInformationProps) {

  const recyclerPartnerCategoryOptions =
    RECYCLER_PARTNER_CATEGORIES.map(
      (option) => ({
        label: option,
        value: option,
      })
    );

  const employeeCountOptions =
    EMPLOYEE_COUNT_OPTIONS.map(
      (option) => ({
        label: option,
        value: option,
      })
    );

  return (
    <div className="space-y-6">

      {/* BUSINESS INFORMATION */}

      <SectionCard
        title="Business Information"
        description="Provide details about your recycling business or organization."
      >
        <div className="grid gap-6 md:grid-cols-2">

          <SelectField
            name="recyclerPartnerCategory"
            label="Recycler Partner Category"
            value={data.recyclerPartnerCategory}
            onChange={(value) =>
              onChange(
                "recyclerPartnerCategory",
                value
              )
            }
            options={recyclerPartnerCategoryOptions}
            placeholder="Select Recycler Partner Category"
            required
            error={errors.recyclerPartnerCategory}
          />

          <InputField
            name="businessName"
            label="Business / Company Name"
            value={data.businessName}
            onChange={(value) =>
              onChange("businessName", value)
            }
            required
            error={errors.businessName}
          />

          <InputField
            name="ownerName"
            label="Owner / Authorized Person Name"
            value={data.ownerName}
            onChange={(value) =>
              onChange("ownerName", value)
            }
            required
            error={errors.ownerName}
          />

          <InputField
            name="primaryContactPerson"
            label="Primary Contact Person"
            value={data.primaryContactPerson}
            onChange={(value) =>
              onChange(
                "primaryContactPerson",
                value
              )
            }
            required
            error={errors.primaryContactPerson}
          />

        </div>
      </SectionCard>


      {/* CONTACT INFORMATION */}

      <SectionCard
        title="Contact Information"
        description="Provide the primary contact details for UrbanLoop communication."
      >
        <div className="grid gap-6 md:grid-cols-2">

          <InputField
            name="mobileNumber"
            label="Mobile Number"
            value={data.mobileNumber}
            onChange={(value) =>
              onChange(
                "mobileNumber",
                value
                  .replace(/\D/g, "")
                  .slice(0, 10)
              )
            }
            maxLength={10}
            required
            error={errors.mobileNumber}
          />

          <InputField
            name="alternateMobileNumber"
            label="Alternate Mobile Number"
            value={data.alternateMobileNumber}
            onChange={(value) =>
              onChange(
                "alternateMobileNumber",
                value
                  .replace(/\D/g, "")
                  .slice(0, 10)
              )
            }
            maxLength={10}
            error={errors.alternateMobileNumber}
          />

          <InputField
            name="whatsappNumber"
            label="WhatsApp Number"
            value={data.whatsappNumber}
            onChange={(value) =>
              onChange(
                "whatsappNumber",
                value
                  .replace(/\D/g, "")
                  .slice(0, 10)
              )
            }
            maxLength={10}
            error={errors.whatsappNumber}
          />

          <InputField
            name="email"
            label="Email Address"
            type="email"
            value={data.email}
            onChange={(value) =>
              onChange("email", value)
            }
            required
            error={errors.email}
          />

          <InputField
            name="website"
            label="Website"
            value={data.website}
            onChange={(value) =>
              onChange("website", value)
            }
            placeholder="https://"
            error={errors.website}
          />

        </div>
      </SectionCard>


      {/* BUSINESS REGISTRATION */}

      <SectionCard
        title="Business Registration"
        description="Provide business registration and organizational information."
      >
        <div className="grid gap-6 md:grid-cols-2">

          <InputField
            name="gstNumber"
            label="GST Number"
            value={data.gstNumber}
            onChange={(value) =>
              onChange(
                "gstNumber",
                value
                  .toUpperCase()
                  .replace(/[^A-Z0-9]/g, "")
                  .slice(0, 15)
              )
            }
            maxLength={15}
            required
            error={errors.gstNumber}
          />

          <InputField
            name="panNumber"
            label="PAN Number"
            value={data.panNumber}
            onChange={(value) =>
              onChange(
                "panNumber",
                value
                  .toUpperCase()
                  .replace(/[^A-Z0-9]/g, "")
                  .slice(0, 10)
              )
            }
            maxLength={10}
            required
            error={errors.panNumber}
          />

          <InputField
            name="yearEstablished"
            label="Year Established"
            value={data.yearEstablished}
            onChange={(value) =>
              onChange(
                "yearEstablished",
                value
                  .replace(/\D/g, "")
                  .slice(0, 4)
              )
            }
            maxLength={4}
            error={errors.yearEstablished}
          />

          <SelectField
            name="numberOfEmployees"
            label="Number of Employees"
            value={data.numberOfEmployees}
            onChange={(value) =>
              onChange(
                "numberOfEmployees",
                value
              )
            }
            options={employeeCountOptions}
            placeholder="Select Number of Employees"
            error={errors.numberOfEmployees}
          />

        </div>
      </SectionCard>

    </div>
  );
}