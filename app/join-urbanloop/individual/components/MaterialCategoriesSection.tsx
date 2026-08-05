"use client";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

import {
  MATERIAL_CATEGORIES,
  toCheckboxOptions,
} from "./constants";

interface MaterialCategoriesSectionProps {
  materialCategories: string[];

  errors: Record<string, string>;

  setMaterialCategories: (
    values: string[],
    clickedValue?: string
  ) => void;
}

export default function MaterialCategoriesSection({
  materialCategories,
  errors,
  setMaterialCategories,
}: MaterialCategoriesSectionProps) {
  
  const handleMaterialCategoriesChange = (
  values: string[],
  clickedValue?: string
) => {

  const allMaterials = MATERIAL_CATEGORIES.filter(
    (item) => item !== "All"
  );

  // User clicked All
  if (clickedValue === "All") {

    if (
      materialCategories.length ===
      allMaterials.length
    ) {

      setMaterialCategories([]);

    } else {

      setMaterialCategories(allMaterials);

    }

    return;
  }

  // Remove All before saving
  const selectedMaterials = values.filter(
    (value) => value !== "All"
  );

  setMaterialCategories(selectedMaterials);

};
    return (
    <SectionCard
      title="Recyclable Materials Generated"
    >
      <CheckboxGroup
        label="Recyclable Materials Generated"
        required
        values={
  materialCategories.length ===
  MATERIAL_CATEGORIES.length - 1
    ? MATERIAL_CATEGORIES
    : materialCategories
}
        options={toCheckboxOptions(MATERIAL_CATEGORIES)}
        onChange={handleMaterialCategoriesChange}
        error={errors.materialCategories}
      />
    </SectionCard>
  );
}