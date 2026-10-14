import type {
  RecyclerPartnerForm,
} from "./types";

export type ValidationErrors =
  Record<string, string>;


/* =========================================================
   STEP 1 — BUSINESS INFORMATION
========================================================= */

export function validateStep1(
  data: RecyclerPartnerForm["businessInformation"]
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (!data.recyclerPartnerCategory.trim()) {
    errors.recyclerPartnerCategory =
      "Recycler Partner Category is required";
  }

  if (!data.businessName.trim()) {
    errors.businessName =
      "Business / Company Name is required";
  }

  if (!data.ownerName.trim()) {
    errors.ownerName =
      "Owner / Authorized Person Name is required";
  }

  if (!data.primaryContactPerson.trim()) {
    errors.primaryContactPerson =
      "Primary Contact Person is required";
  }

  if (!/^[0-9]{10}$/.test(data.mobileNumber)) {
    errors.mobileNumber =
      "Please enter a valid 10-digit mobile number";
  }

  if (
    data.alternateMobileNumber &&
    !/^[0-9]{10}$/.test(
      data.alternateMobileNumber
    )
  ) {
    errors.alternateMobileNumber =
      "Please enter a valid 10-digit alternate mobile number";
  }

  if (
    data.whatsappNumber &&
    !/^[0-9]{10}$/.test(
      data.whatsappNumber
    )
  ) {
    errors.whatsappNumber =
      "Please enter a valid 10-digit WhatsApp number";
  }

  if (!data.email.trim()) {
    errors.email =
      "Email Address is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      data.email
    )
  ) {
    errors.email =
      "Please enter a valid email address";
  }

  if (!data.gstNumber.trim()) {
    errors.gstNumber =
      "GST Number is required";
  } else if (
    !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][A-Z0-9]{3}$/.test(
      data.gstNumber.toUpperCase()
    )
  ) {
    errors.gstNumber =
      "Please enter a valid GST Number";
  }

  if (!data.panNumber.trim()) {
    errors.panNumber =
      "PAN Number is required";
  } else if (
    !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(
      data.panNumber.toUpperCase()
    )
  ) {
    errors.panNumber =
      "Please enter a valid PAN Number";
  }

  return errors;
}


/* =========================================================
   STEP 2 — BUSINESS & COMPLIANCE VERIFICATION
========================================================= */

export function validateStep2(
  data: RecyclerPartnerForm["businessVerification"]
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (!data.gstCertificate) {
    errors.gstCertificate =
      "GST Certificate is required";
  }

  if (!data.panCard) {
    errors.panCard =
      "PAN Card is required";
  }

  if (!data.pollutionControlCertificate) {
    errors.pollutionControlCertificate =
      "Pollution Control Certificate / Consent is required";
  }

  if (!data.recyclingAuthorization) {
    errors.recyclingAuthorization =
      "Recycling Authorization / Licence is required";
  }

  return errors;
}


/* =========================================================
   STEP 3 — RECYCLER FACILITY ADDRESS
========================================================= */

export function validateStep3(
  data: RecyclerPartnerForm["facilityAddress"]
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (!data.facilityNumber.trim()) {
    errors.facilityNumber =
      "Facility / Unit Number is required";
  }

  if (!data.facilityName.trim()) {
    errors.facilityName =
      "Building / Facility Name is required";
  }

  if (!data.streetArea.trim()) {
    errors.streetArea =
      "Street / Industrial Area is required";
  }

  if (!data.city.trim()) {
    errors.city =
      "City is required";
  }

  if (!data.stateName.trim()) {
    errors.stateName =
      "State is required";
  }

  if (!/^[0-9]{6}$/.test(data.pinCode)) {
    errors.pinCode =
      "Please enter a valid 6-digit PIN Code";
  }

  return errors;
}


/* =========================================================
   STEP 4 — MATERIALS & PROCESSING CAPABILITY
========================================================= */

export function validateStep4(
  data: RecyclerPartnerForm["materialsProcessing"]
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (data.materialsAccepted.length === 0) {
    errors.materialsAccepted =
      "Select at least one material";
  }

  if (!data.dailyProcessingCapacity.trim()) {
    errors.dailyProcessingCapacity =
      "Daily Processing Capacity is required";
  }

  if (!data.monthlyProcessingCapacity.trim()) {
    errors.monthlyProcessingCapacity =
      "Monthly Processing Capacity is required";
  }

  if (!data.storageCapacity.trim()) {
    errors.storageCapacity =
      "Storage Capacity is required";
  }

  return errors;
}


/* =========================================================
   STEP 5 — PROCUREMENT REQUIREMENTS
========================================================= */

export function validateStep5(
  data: RecyclerPartnerForm["procurementRequirements"]
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (data.materialsRequired.length === 0) {
    errors.materialsRequired =
      "Select at least one material required";
  }

  if (!data.monthlyProcurementRequirement.trim()) {
    errors.monthlyProcurementRequirement =
      "Monthly Procurement Requirement is required";
  }

  if (!data.minimumOrderQuantity.trim()) {
    errors.minimumOrderQuantity =
      "Minimum Order Quantity is required";
  }

  if (!data.procurementFrequency.trim()) {
    errors.procurementFrequency =
      "Preferred Procurement Frequency is required";
  }

  if (
    data.acceptedMaterialConditions.length === 0
  ) {
    errors.acceptedMaterialConditions =
      "Select at least one accepted material condition";
  }

  return errors;
}


/* =========================================================
   STEP 6 — LOGISTICS & COMMERCIAL INFORMATION
========================================================= */

export function validateStep6(
  data: RecyclerPartnerForm["logisticsCommercial"]
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (data.procurementAreas.length === 0) {
    errors.procurementAreas =
      "Enter at least one Procurement / Service Area";
  }

  if (!data.fulfilmentPreference.trim()) {
    errors.fulfilmentPreference =
      "Fulfilment Preference is required";
  }

  if (data.receivingDays.length === 0) {
    errors.receivingDays =
      "Select at least one Receiving Day";
  }

  if (!data.preferredReceivingTime.trim()) {
    errors.preferredReceivingTime =
      "Preferred Receiving Time is required";
  }

  if (!data.emergencyContactName.trim()) {
    errors.emergencyContactName =
      "Authorized / Emergency Contact Name is required";
  }

  if (
    !/^[0-9]{10}$/.test(
      data.emergencyContactNumber
    )
  ) {
    errors.emergencyContactNumber =
      "Please enter a valid 10-digit contact number";
  }

  if (
    data.numberOfVehicles &&
    !/^[0-9]+$/.test(data.numberOfVehicles)
  ) {
    errors.numberOfVehicles =
      "Number of Vehicles must contain numbers only";
  }

  return errors;
}


/* =========================================================
   STEP 7 — DECLARATION & CONSENT
========================================================= */

export function validateStep7(
  data: RecyclerPartnerForm["declaration"]
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (!data.informationConfirmed) {
    errors.informationConfirmed =
      "Confirmation is required";
  }

  if (!data.complianceConfirmed) {
    errors.complianceConfirmed =
      "Compliance confirmation is required";
  }

  if (!data.termsAccepted) {
    errors.termsAccepted =
      "Terms & Conditions must be accepted";
  }

  if (!data.recyclingComplianceAccepted) {
    errors.recyclingComplianceAccepted =
      "Recycling compliance declaration is required";
  }

  if (!data.communicationConsent) {
    errors.communicationConsent =
      "Communication consent is required";
  }

  return errors;
}