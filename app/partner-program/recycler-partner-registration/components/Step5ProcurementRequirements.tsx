"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import SelectField from "@/components/forms/SelectField";
import InputField from "@/components/forms/InputField";

import {
  RECYCLABLE_MATERIALS,
  MATERIAL_CONDITIONS,
  PROCUREMENT_FREQUENCIES,
} from "../constants";

import type {
  RecyclerProcurementRequirements,
  RecyclerPartnerForm,
} from "../types";

interface Step5ProcurementRequirementsProps {
  data: RecyclerProcurementRequirements;
  errors: Record<string, string>;

  updateField: <
    T extends keyof RecyclerPartnerForm,
    K extends keyof RecyclerPartnerForm[T]
  >(
    section: T,
    field: K,
    value: RecyclerPartnerForm[T][K]
  ) => void;
}

export default function Step5ProcurementRequirements({
  data,
  errors,
  updateField,
}: Step5ProcurementRequirementsProps) {

  /*
   * MATERIALS REQUIRED
   */

  const handleMaterialsRequiredChange = (
    values: string[],
    clickedValue?: string
  ) => {

    const allMaterials =
      RECYCLABLE_MATERIALS.filter(
        (item) => item !== "All Materials"
      );

    // User clicked All Materials.
    if (clickedValue === "All Materials") {

      // Everything already selected.
      if (
        data.materialsRequired.length ===
        allMaterials.length
      ) {
        updateField(
          "procurementRequirements",
          "materialsRequired",
          []
        );
      } else {
        updateField(
          "procurementRequirements",
          "materialsRequired",
          allMaterials
        );
      }

      return;
    }

    // Remove All Materials before saving.
    const selectedMaterials =
      values.filter(
        (value) =>
          value !== "All Materials"
      );

    updateField(
      "procurementRequirements",
      "materialsRequired",
      selectedMaterials
    );
  };


  /*
   * ACCEPTED MATERIAL CONDITIONS
   */

  const handleMaterialConditionsChange = (
    values: string[]
  ) => {

    updateField(
      "procurementRequirements",
      "acceptedMaterialConditions",
      values
    );
  };


  return (
    <div className="space-y-8">

      {/* MATERIAL REQUIREMENTS */}

      <SectionCard
        title="Material Procurement Requirements"
        description="Specify the recyclable materials you would like to procure from UrbanLoop."
      >

        <CheckboxGroup
          label="Materials Required"
          required
          values={
            data.materialsRequired.length ===
            RECYCLABLE_MATERIALS.length - 1
              ? RECYCLABLE_MATERIALS
              : data.materialsRequired
          }
          error={errors.materialsRequired}
          options={RECYCLABLE_MATERIALS.map(
            (item) => ({
              label: item,
              value: item,
            })
          )}
          onChange={
            handleMaterialsRequiredChange
          }
        />

      </SectionCard>


      {/* PROCUREMENT VOLUME */}

      <SectionCard
        title="Procurement Volume"
        description="Provide your expected material procurement requirements."
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField
            label="Monthly Procurement Requirement (Kg)"
            name="monthlyProcurementRequirement"
            value={
              data.monthlyProcurementRequirement
            }
            placeholder="Example: 25000"
            required
            error={
              errors.monthlyProcurementRequirement
            }
            onChange={(value) =>
              updateField(
                "procurementRequirements",
                "monthlyProcurementRequirement",
                value.replace(/\D/g, "")
              )
            }
          />

          <InputField
            label="Minimum Order Quantity (Kg)"
            name="minimumOrderQuantity"
            value={
              data.minimumOrderQuantity
            }
            placeholder="Example: 1000"
            required
            error={
              errors.minimumOrderQuantity
            }
            onChange={(value) =>
              updateField(
                "procurementRequirements",
                "minimumOrderQuantity",
                value.replace(/\D/g, "")
              )
            }
          />

        </div>

        <div className="mt-8">

          <SelectField
  label="Procurement Frequency"
  name="procurementFrequency"
  value={
    data.procurementFrequency
  }
  placeholder="Select Procurement Frequency"
  required
  error={
    errors.procurementFrequency
  }
  options={PROCUREMENT_FREQUENCIES.map(
    (frequency) => ({
      label: frequency,
      value: frequency,
    })
  )}
  onChange={(value) =>
    updateField(
      "procurementRequirements",
      "procurementFrequency",
      value
    )
  }
/>

        </div>

      </SectionCard>


      {/* MATERIAL QUALITY */}

      <SectionCard
        title="Material Quality Requirements"
        description="Specify the material condition and grade requirements for procurement."
      >

        <CheckboxGroup
          label="Accepted Material Conditions"
          required
          values={
            data.acceptedMaterialConditions
          }
          error={
            errors.acceptedMaterialConditions
          }
          options={
            MATERIAL_CONDITIONS.map(
              (item) => ({
                label: item,
                value: item,
              })
            )
          }
          onChange={
            handleMaterialConditionsChange
          }
        />

        <div className="mt-8">

          <InputField
            label="Preferred Material Grade"
            name="preferredMaterialGrade"
            value={
              data.preferredMaterialGrade
            }
            placeholder="Example: Grade A, OCC, Sorted PET"
            error={
              errors.preferredMaterialGrade
            }
            onChange={(value) =>
              updateField(
                "procurementRequirements",
                "preferredMaterialGrade",
                value
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}