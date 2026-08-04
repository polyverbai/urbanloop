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
  return (
    <SectionCard
      title="Recyclable Materials Generated"
    >
      <CheckboxGroup
        label="Recyclable Materials Generated"
        required
        values={materialCategories}
        options={toCheckboxOptions(MATERIAL_CATEGORIES)}
        onChange={setMaterialCategories}
        error={errors.materialCategories}
      />
    </SectionCard>
  );
}