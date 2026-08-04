"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import SelectField from "@/components/forms/SelectField";
import InputField from "@/components/forms/InputField";
import RadioGroup from "@/components/forms/RadioGroup";

import {
  INDIAN_STATES,
  SERVICE_RADIUS_OPTIONS,
  OPERATIONAL_SCOPE_OPTIONS,
  OPERATING_DAYS,
  OPERATING_TIME_OPTIONS,
  YES_NO_OPTIONS,
} from "../constants";

import type {
  TransportServiceOperations,
  TransportPartnerForm,
} from "../types";


interface Step5ServiceOperationsProps {
  data: TransportServiceOperations;
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


export default function Step5ServiceOperations({
  data,
  errors,
  updateField,
}: Step5ServiceOperationsProps) {

  /* =====================================================
     OPERATING DAYS — SELECT / DESELECT ALL
  ===================================================== */

  const handleOperatingDaysChange = (
    values: string[],
    clickedValue?: string
  ) => {
    const allDays = OPERATING_DAYS.filter(
      (day) => day !== "All Days"
    );

    if (clickedValue === "All Days") {
      if (
        data.operatingDays.length ===
        allDays.length
      ) {
        updateField(
          "serviceOperations",
          "operatingDays",
          []
        );
      } else {
        updateField(
          "serviceOperations",
          "operatingDays",
          allDays
        );
      }

      return;
    }

    const selectedDays = values.filter(
      (value) => value !== "All Days"
    );

    updateField(
      "serviceOperations",
      "operatingDays",
      selectedDays
    );
  };


  /* =====================================================
     OPERATING TIME — SELECT / DESELECT ALL
  ===================================================== */

  const handleOperatingTimeChange = (
    values: string[],
    clickedValue?: string
  ) => {
    const allTimes =
      OPERATING_TIME_OPTIONS.filter(
        (time) => time !== "All Time"
      );

    if (clickedValue === "All Time") {
      if (
        data.operatingTime.length ===
        allTimes.length
      ) {
        updateField(
          "serviceOperations",
          "operatingTime",
          []
        );
      } else {
        updateField(
          "serviceOperations",
          "operatingTime",
          allTimes
        );
      }

      return;
    }

    const selectedTimes = values.filter(
      (value) => value !== "All Time"
    );

    updateField(
      "serviceOperations",
      "operatingTime",
      selectedTimes
    );
  };


  return (
    <div className="space-y-8">

      {/* =================================================
          OPERATING LOCATION
      ================================================= */}

      <SectionCard
        title="Service Area"
        description="Specify the states, cities, districts, and localities where you can provide UrbanLoop transport services."
      >

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <SelectField
            label="Primary Operating State"
            name="operatingStates"
            value={data.operatingStates[0] ?? ""}
            placeholder="Select State"
            required
            error={errors.operatingStates}
            options={INDIAN_STATES.map((state) => ({
              label: state,
              value: state,
            }))}
            onChange={(value) =>
              updateField(
                "serviceOperations",
                "operatingStates",
                value ? [value] : []
              )
            }
          />

          <SelectField
            label="Service Radius"
            name="serviceRadius"
            value={data.serviceRadius}
            placeholder="Select Service Radius"
            required
            error={errors.serviceRadius}
            options={SERVICE_RADIUS_OPTIONS.map(
              (radius) => ({
                label: radius,
                value: radius,
              })
            )}
            onChange={(value) =>
              updateField(
                "serviceOperations",
                "serviceRadius",
                value
              )
            }
          />

          <div className="md:col-span-2">
            <InputField
              label="Operating Cities / Districts"
              name="operatingCitiesDistricts"
              value={
                data.operatingCitiesDistricts.join(", ")
              }
              placeholder="Example: Bengaluru, Mysuru, Tumakuru"
              required
              error={errors.operatingCitiesDistricts}
              onChange={(value) =>
                updateField(
                  "serviceOperations",
                  "operatingCitiesDistricts",
                  value
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean)
                )
              }
            />
          </div>

          <div className="md:col-span-2">
            <InputField
              label="Service Areas / Localities"
              name="serviceAreas"
              value={data.serviceAreas}
              placeholder="Example: RT Nagar, Hebbal, Yelahanka, Indiranagar"
              required
              error={errors.serviceAreas}
              onChange={(value) =>
                updateField(
                  "serviceOperations",
                  "serviceAreas",
                  value
                )
              }
            />
          </div>

        </div>

      </SectionCard>


      {/* =================================================
          OPERATIONAL SCOPE
      ================================================= */}

      <SectionCard
        title="Operational Scope"
        description="Select the geographic transport operations your business can support."
      >

        <CheckboxGroup
          label="Operational Scope"
          values={data.operationalScope}
          required
          error={errors.operationalScope}
          options={OPERATIONAL_SCOPE_OPTIONS.map(
            (scope) => ({
              label: scope,
              value: scope,
            })
          )}
          onChange={(values) =>
            updateField(
              "serviceOperations",
              "operationalScope",
              values
            )
          }
        />

      </SectionCard>


      {/* =================================================
          OPERATING SCHEDULE
      ================================================= */}

      <SectionCard
        title="Operating Schedule"
        description="Specify the days and time periods when your transport services are normally available."
      >

        <CheckboxGroup
          label="Operating Days"
          values={
            data.operatingDays.length ===
            OPERATING_DAYS.length - 1
              ? OPERATING_DAYS
              : data.operatingDays
          }
          required
          error={errors.operatingDays}
          options={OPERATING_DAYS.map(
            (day) => ({
              label: day,
              value: day,
            })
          )}
          onChange={handleOperatingDaysChange}
        />

        <div className="mt-8">

          <CheckboxGroup
            label="Operating Time"
            values={
              data.operatingTime.length ===
              OPERATING_TIME_OPTIONS.length - 1
                ? OPERATING_TIME_OPTIONS
                : data.operatingTime
            }
            required
            error={errors.operatingTime}
            options={OPERATING_TIME_OPTIONS.map(
              (time) => ({
                label: time,
                value: time,
              })
            )}
            onChange={handleOperatingTimeChange}
          />

        </div>

      </SectionCard>


      {/* =================================================
          SERVICE AVAILABILITY
      ================================================= */}

      <SectionCard
        title="Service Availability"
        description="Specify additional availability for UrbanLoop pickup assignments."
      >

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          <RadioGroup
            label="Same-Day Pickup Available?"
            value={data.sameDayPickupAvailable}
            required
            error={errors.sameDayPickupAvailable}
            options={YES_NO_OPTIONS.map(
              (option) => ({
                label: option,
                value: option,
              })
            )}
            onChange={(value) =>
              updateField(
                "serviceOperations",
                "sameDayPickupAvailable",
                value
              )
            }
          />

          <RadioGroup
            label="Weekend Service Available?"
            value={data.weekendServiceAvailable}
            required
            error={errors.weekendServiceAvailable}
            options={YES_NO_OPTIONS.map(
              (option) => ({
                label: option,
                value: option,
              })
            )}
            onChange={(value) =>
              updateField(
                "serviceOperations",
                "weekendServiceAvailable",
                value
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}