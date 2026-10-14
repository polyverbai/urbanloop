"use client";

import SectionCard from "@/components/forms/SectionCard";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";

import type {
  TransportBusinessInformation,
  TransportPartnerForm,
} from "../types";

import {
  TRANSPORT_PARTNER_CATEGORIES,
  EMPLOYEE_DRIVER_COUNT_OPTIONS,
} from "../constants";


interface Step1BusinessInformationProps {
  data: TransportBusinessInformation;
  errors: Record<string, string>;

  updateField: <
    T extends keyof TransportPartnerForm,
    K extends keyof TransportPartnerForm[T]
  >(
    section: T,
    field: K,
    value: TransportPartnerForm[T][K]
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
        description="Provide your basic transport business information."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <SelectField
            label="Transport Partner Category"
            name="transportPartnerCategory"
            value={data.transportPartnerCategory}
            options={TRANSPORT_PARTNER_CATEGORIES}
            required
            error={errors.transportPartnerCategory}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "transportPartnerCategory",
                value
              )
            }
          />

          <InputField
            label="Business / Transport Name"
            name="businessName"
            value={data.businessName}
            placeholder="Enter business / transport name"
            required
            error={errors.businessName}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "businessName",
                value
              )
            }
          />

          <InputField
            label="Owner / Proprietor Name"
            name="ownerName"
            value={data.ownerName}
            placeholder="Enter owner / proprietor name"
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

          <InputField
            label="Years in Transport / Logistics Business"
            name="yearsInBusiness"
            type="number"
            value={data.yearsInBusiness}
            placeholder="Enter number of years"
            error={errors.yearsInBusiness}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "yearsInBusiness",
                value
              )
            }
          />

          <SelectField
            label="Number of Employees / Drivers"
            name="employeeDriverCount"
            value={data.employeeDriverCount}
            placeholder="Select"
            options={EMPLOYEE_DRIVER_COUNT_OPTIONS}
            error={errors.employeeDriverCount}
            onChange={(value) =>
              updateField(
                "businessInformation",
                "employeeDriverCount",
                value
              )
            }
          />

        </div>
      </SectionCard>

    </div>
  );
}