"use client";

import SectionCard from "@/components/forms/SectionCard";
import RadioGroup from "@/components/forms/RadioGroup";
import InputField from "@/components/forms/InputField";
import SelectField from "@/components/forms/SelectField";
import CheckboxGroup from "@/components/forms/CheckboxGroup";

import {
  TRANSPORT_VEHICLE_TYPES,
  PICKUP_CAPABILITIES,
  TRANSPORT_MATERIAL_CATEGORIES,
  TRANSPORT_CAPACITY_UNITS,
  YES_NO_OPTIONS,
} from "../constants";

import type {
  TransportFleetCapability,
  TransportPartnerForm,
} from "../types";


interface Step4FleetCapabilityProps {
  data: TransportFleetCapability;
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


export default function Step4FleetCapability({
  data,
  errors,
  updateField,
}: Step4FleetCapabilityProps) {

  /* =====================================================
     VEHICLE TYPES — SELECT / DESELECT ALL
  ===================================================== */

  const handleVehicleTypesChange = (
    values: string[],
    clickedValue?: string
  ) => {
    const allVehicles =
      TRANSPORT_VEHICLE_TYPES.filter(
        (vehicle) =>
          vehicle !== "All Vehicle Types"
      );

    if (clickedValue === "All Vehicle Types") {
      if (
        data.vehicleTypes.length ===
        allVehicles.length
      ) {
        updateField(
          "fleetCapability",
          "vehicleTypes",
          []
        );
      } else {
        updateField(
          "fleetCapability",
          "vehicleTypes",
          allVehicles
        );
      }

      return;
    }

    const selectedVehicles =
      values.filter(
        (value) =>
          value !== "All Vehicle Types"
      );

    updateField(
      "fleetCapability",
      "vehicleTypes",
      selectedVehicles
    );
  };


  /* =====================================================
     PICKUP CAPABILITIES — SELECT / DESELECT ALL
  ===================================================== */

  const handlePickupCapabilitiesChange = (
    values: string[],
    clickedValue?: string
  ) => {
    const allPickupTypes =
      PICKUP_CAPABILITIES.filter(
        (pickup) =>
          pickup !== "All Pickup Types"
      );

    if (clickedValue === "All Pickup Types") {
      if (
        data.pickupCapabilities.length ===
        allPickupTypes.length
      ) {
        updateField(
          "fleetCapability",
          "pickupCapabilities",
          []
        );
      } else {
        updateField(
          "fleetCapability",
          "pickupCapabilities",
          allPickupTypes
        );
      }

      return;
    }

    const selectedPickupTypes =
      values.filter(
        (value) =>
          value !== "All Pickup Types"
      );

    updateField(
      "fleetCapability",
      "pickupCapabilities",
      selectedPickupTypes
    );
  };


  /* =====================================================
     MATERIALS — SELECT / DESELECT ALL
  ===================================================== */

  const handleMaterialCategoriesChange = (
    values: string[],
    clickedValue?: string
  ) => {
    const allMaterials =
      TRANSPORT_MATERIAL_CATEGORIES.filter(
        (material) =>
          material !== "All Materials"
      );

    if (clickedValue === "All Materials") {
      if (
        data.materialCategories.length ===
        allMaterials.length
      ) {
        updateField(
          "fleetCapability",
          "materialCategories",
          []
        );
      } else {
        updateField(
          "fleetCapability",
          "materialCategories",
          allMaterials
        );
      }

      return;
    }

    const selectedMaterials =
      values.filter(
        (value) =>
          value !== "All Materials"
      );

    updateField(
      "fleetCapability",
      "materialCategories",
      selectedMaterials
    );
  };


  return (
    <div className="space-y-8">

      {/* =================================================
          VEHICLE PROFILE
      ================================================= */}

      <SectionCard
        title="Fleet & Vehicle Information"
        description="Provide details about the vehicles available for UrbanLoop pickup and transportation assignments."
      >

        <RadioGroup
          label="Do you own or operate vehicles?"
          value={data.ownsOperatesVehicles}
          required
          error={errors.ownsOperatesVehicles}
          options={YES_NO_OPTIONS.map(
            (option) => ({
              label: option,
              value: option,
            })
          )}
          onChange={(value) =>
            updateField(
              "fleetCapability",
              "ownsOperatesVehicles",
              value
            )
          }
        />

        {data.ownsOperatesVehicles === "Yes" && (
          <div className="mt-8 space-y-8">

            <CheckboxGroup
              label="Vehicle Types"
              values={
                data.vehicleTypes.length ===
                TRANSPORT_VEHICLE_TYPES.length - 1
                  ? TRANSPORT_VEHICLE_TYPES
                  : data.vehicleTypes
              }
              required
              error={errors.vehicleTypes}
              options={TRANSPORT_VEHICLE_TYPES.map(
                (vehicle) => ({
                  label: vehicle,
                  value: vehicle,
                })
              )}
              onChange={handleVehicleTypesChange}
            />

            <InputField
              label="Number of Vehicles"
              name="numberOfVehicles"
              value={data.numberOfVehicles}
              placeholder="Enter number of vehicles"
              required
              error={errors.numberOfVehicles}
              onChange={(value) =>
                updateField(
                  "fleetCapability",
                  "numberOfVehicles",
                  value.replace(/\D/g, "")
                )
              }
            />

          </div>
        )}

      </SectionCard>


      {/* =================================================
          PICKUP CAPABILITY
      ================================================= */}

      <SectionCard
        title="Pickup Capability"
        description="Select the types of UrbanLoop pickup and transport assignments you can support."
      >

        <CheckboxGroup
          label="Pickup Types"
          values={
            data.pickupCapabilities.length ===
            PICKUP_CAPABILITIES.length - 1
              ? PICKUP_CAPABILITIES
              : data.pickupCapabilities
          }
          required
          error={errors.pickupCapabilities}
          options={PICKUP_CAPABILITIES.map(
            (pickup) => ({
              label: pickup,
              value: pickup,
            })
          )}
          onChange={handlePickupCapabilitiesChange}
        />

      </SectionCard>


      {/* =================================================
          MATERIAL CAPABILITY
      ================================================= */}

      <SectionCard
        title="Material Transportation Capability"
        description="Select the recyclable and recoverable material categories you can transport."
      >

        <CheckboxGroup
          label="Material Categories"
          values={
            data.materialCategories.length ===
            TRANSPORT_MATERIAL_CATEGORIES.length - 1
              ? TRANSPORT_MATERIAL_CATEGORIES
              : data.materialCategories
          }
          required
          error={errors.materialCategories}
          options={TRANSPORT_MATERIAL_CATEGORIES.map(
            (material) => ({
              label: material,
              value: material,
            })
          )}
          onChange={handleMaterialCategoriesChange}
        />

      </SectionCard>


      {/* =================================================
          LOAD & CAPACITY
      ================================================= */}

      <SectionCard
        title="Load & Transport Capacity"
        description="Provide the load and transport capacity supported by your operations."
      >

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <InputField
            label="Minimum Load"
            name="minimumLoad"
            type="number"
            value={data.minimumLoad}
            placeholder="Enter minimum load, if applicable"
            error={errors.minimumLoad}
            onChange={(value) =>
              updateField(
                "fleetCapability",
                "minimumLoad",
                value
              )
            }
          />

          <SelectField
  label="Minimum Load Unit"
  name="minimumLoadUnit"
  value={data.minimumLoadUnit}
  placeholder="Select Unit"
  required={Boolean(data.minimumLoad.trim())}
  error={errors.minimumLoadUnit}
            options={TRANSPORT_CAPACITY_UNITS.map(
              (unit) => ({
                label: unit,
                value: unit,
              })
            )}
            onChange={(value) =>
              updateField(
                "fleetCapability",
                "minimumLoadUnit",
                value
              )
            }
          />

          <InputField
            label="Maximum Transport Capacity"
            name="maximumTransportCapacity"
            type="number"
            value={data.maximumTransportCapacity}
            placeholder="Enter maximum transport capacity"
            required={
              data.ownsOperatesVehicles === "Yes"
            }
            error={errors.maximumTransportCapacity}
            onChange={(value) =>
              updateField(
                "fleetCapability",
                "maximumTransportCapacity",
                value
              )
            }
          />

          <SelectField
            label="Maximum Transport Capacity Unit"
            name="maximumTransportCapacityUnit"
            value={data.maximumTransportCapacityUnit}
            placeholder="Select Unit"
            required={
              data.ownsOperatesVehicles === "Yes"
            }
            error={
              errors.maximumTransportCapacityUnit
            }
            options={TRANSPORT_CAPACITY_UNITS.map(
              (unit) => ({
                label: unit,
                value: unit,
              })
            )}
            onChange={(value) =>
              updateField(
                "fleetCapability",
                "maximumTransportCapacityUnit",
                value
              )
            }
          />

        </div>

      </SectionCard>


      {/* =================================================
          LOADING / UNLOADING SUPPORT
      ================================================= */}

      <SectionCard
        title="Loading & Unloading Support"
        description="Specify whether your operations can provide loading and unloading assistance."
      >

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          <RadioGroup
            label="Loading Assistance Available?"
            value={data.loadingAssistanceAvailable}
            required
            error={errors.loadingAssistanceAvailable}
            options={YES_NO_OPTIONS.map(
              (option) => ({
                label: option,
                value: option,
              })
            )}
            onChange={(value) =>
              updateField(
                "fleetCapability",
                "loadingAssistanceAvailable",
                value
              )
            }
          />

          <RadioGroup
            label="Unloading Assistance Available?"
            value={data.unloadingAssistanceAvailable}
            required
            error={errors.unloadingAssistanceAvailable}
            options={YES_NO_OPTIONS.map(
              (option) => ({
                label: option,
                value: option,
              })
            )}
            onChange={(value) =>
              updateField(
                "fleetCapability",
                "unloadingAssistanceAvailable",
                value
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}