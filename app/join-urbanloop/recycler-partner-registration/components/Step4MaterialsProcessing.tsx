"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import InputField from "@/components/forms/InputField";

import {
  RECYCLABLE_MATERIALS,
} from "../constants";

import type {
  RecyclerMaterialsProcessing,
  RecyclerPartnerForm,
} from "../types";

interface Step4MaterialsProcessingProps {
  data: RecyclerMaterialsProcessing;
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

export default function Step4MaterialsProcessing({
  data,
  errors,
  updateField,
}: Step4MaterialsProcessingProps) {

  const handleMaterialsChange = (
    values: string[],
    clickedValue?: string
  ) => {

    const allMaterials =
      RECYCLABLE_MATERIALS.filter(
        (item) => item !== "All Materials"
      );

    // User clicked All Materials.
    if (clickedValue === "All Materials") {

      // Everything is already selected.
      if (
        data.materialsAccepted.length ===
        allMaterials.length
      ) {
        updateField(
          "materialsProcessing",
          "materialsAccepted",
          []
        );
      } else {
        updateField(
          "materialsProcessing",
          "materialsAccepted",
          allMaterials
        );
      }

      return;
    }

    // Never store "All Materials" in actual form data.
    const selectedMaterials = values.filter(
      (value) => value !== "All Materials"
    );

    updateField(
      "materialsProcessing",
      "materialsAccepted",
      selectedMaterials
    );
  };

  return (
    <div className="space-y-8">

      <SectionCard
        title="Materials & Processing Capability"
        description="Provide the recyclable materials accepted by your facility and its processing and storage capabilities."
      >

        <CheckboxGroup
          label="Materials Accepted"
          required
          values={
            data.materialsAccepted.length ===
            RECYCLABLE_MATERIALS.length - 1
              ? RECYCLABLE_MATERIALS
              : data.materialsAccepted
          }
          error={errors.materialsAccepted}
          options={RECYCLABLE_MATERIALS.map(
            (item) => ({
              label: item,
              value: item,
            })
          )}
          onChange={handleMaterialsChange}
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          <InputField
            label="Daily Processing Capacity (Kg)"
            name="dailyProcessingCapacity"
            value={data.dailyProcessingCapacity}
            placeholder="Example: 5000"
            required
            error={errors.dailyProcessingCapacity}
            onChange={(value) =>
              updateField(
                "materialsProcessing",
                "dailyProcessingCapacity",
                value.replace(/\D/g, "")
              )
            }
          />

          <InputField
            label="Monthly Processing Capacity (Kg)"
            name="monthlyProcessingCapacity"
            value={data.monthlyProcessingCapacity}
            placeholder="Example: 100000"
            required
            error={errors.monthlyProcessingCapacity}
            onChange={(value) =>
              updateField(
                "materialsProcessing",
                "monthlyProcessingCapacity",
                value.replace(/\D/g, "")
              )
            }
          />

          <InputField
            label="Storage Capacity (Kg)"
            name="storageCapacity"
            value={data.storageCapacity}
            placeholder="Example: 25000"
            required
            error={errors.storageCapacity}
            onChange={(value) =>
              updateField(
                "materialsProcessing",
                "storageCapacity",
                value.replace(/\D/g, "")
              )
            }
          />

          <InputField
            label="Processing / Recycling Technology"
            name="processingTechnology"
            value={data.processingTechnology}
            placeholder="Example: Shredding, pulping, baling"
            error={errors.processingTechnology}
            onChange={(value) =>
              updateField(
                "materialsProcessing",
                "processingTechnology",
                value
              )
            }
          />

          <InputField
            label="Recycled Outputs"
            name="recycledOutputs"
            value={data.recycledOutputs}
            placeholder="Example: Recycled paper pulp, plastic flakes"
            error={errors.recycledOutputs}
            onChange={(value) =>
              updateField(
                "materialsProcessing",
                "recycledOutputs",
                value
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}