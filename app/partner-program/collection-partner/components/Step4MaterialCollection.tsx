"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import InputField from "@/components/forms/InputField";

import {
  MATERIAL_TYPES,
  COLLECTION_SERVICES,
} from "../constants";

import type {
  MaterialCollection,
  CollectionPartnerForm,
} from "../types";

interface Step4MaterialCollectionProps {
  data: MaterialCollection;
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

export default function Step4MaterialCollection({
  data,
  errors,
  updateField,
}: Step4MaterialCollectionProps) {

const handleMaterialsChange = (
  values: string[],
  clickedValue?: string
) => {
  
const allMaterials = MATERIAL_TYPES.filter(
  (item) => item !== "All Materials"
);

// User clicked All Materials.
if (clickedValue === "All Materials") {

  // Everything already selected.
  if (
    data.materialsHandled.length ===
    allMaterials.length
  ) {
    updateField(
      "materialCollection",
      "materialsHandled",
      []
    );
  } else {
    updateField(
      "materialCollection",
      "materialsHandled",
      allMaterials
    );
  }

  return;
}

// Remove All Materials before saving.
const selectedMaterials = values.filter(
  (value) => value !== "All Materials"
);

updateField(
  "materialCollection",
  "materialsHandled",
  selectedMaterials
);
    
};


const handleCollectionServicesChange = (
  values: string[],
  clickedValue?: string
) => {

const allServices = COLLECTION_SERVICES.filter(
  (item) => item !== "All Services"
);

// User clicked All Services.
if (clickedValue === "All Services") {

  // Everything already selected.
  if (
    data.collectionServices.length ===
    allServices.length
  ) {
    updateField(
      "materialCollection",
      "collectionServices",
      []
    );
  } else {
    updateField(
      "materialCollection",
      "collectionServices",
      allServices
    );
  }

  return;
}

// Remove All Services before saving.
const selectedServices = values.filter(
  (value) => value !== "All Services"
);

updateField(
  "materialCollection",
  "collectionServices",
  selectedServices
);

    
};    

  return (
    <div className="space-y-8">

      <SectionCard
        title="Material Collection"
        description="Select the materials handled and collection services provided."
      >

        <CheckboxGroup
  label="Materials Handled"
  required
  values={
  data.materialsHandled.length ===
  MATERIAL_TYPES.length - 1
    ? MATERIAL_TYPES
    : data.materialsHandled
}
  error={errors.materialsHandled}
  options={MATERIAL_TYPES.map((item) => ({
    label: item,
    value: item,
  }))}
  onChange={handleMaterialsChange}
/>

        <div className="mt-8">

          <CheckboxGroup
  label="Collection Services"
  required
  values={
  data.collectionServices.length ===
  COLLECTION_SERVICES.length - 1
    ? COLLECTION_SERVICES
    : data.collectionServices
}
  error={errors.collectionServices}
  options={COLLECTION_SERVICES.map((item) => ({
    label: item,
    value: item,
  }))}
  onChange={handleCollectionServicesChange}
/>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <InputField
            label="Daily Collection Capacity (Kg)"
            name="dailyCollectionCapacity"
            value={data.dailyCollectionCapacity}
            placeholder="Example: 500"
            required
            error={errors.dailyCollectionCapacity}
            onChange={(value) =>
              updateField(
                "materialCollection",
                "dailyCollectionCapacity",
                value.replace(/\D/g, "")
              )
            }
          />

          <InputField
            label="Monthly Processing Capacity (Kg)"
            name="monthlyProcessingCapacity"
            value={data.monthlyProcessingCapacity}
            placeholder="Example: 10000"
            required
            error={errors.monthlyProcessingCapacity}
            onChange={(value) =>
              updateField(
                "materialCollection",
                "monthlyProcessingCapacity",
                value.replace(/\D/g, "")
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}