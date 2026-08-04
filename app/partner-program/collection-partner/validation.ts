import type { CollectionPartnerForm } from "./types";

export interface ValidationErrors {
  [key: string]: string;
}

export function validateStep1(
  formData: CollectionPartnerForm
): ValidationErrors {
  const errors: ValidationErrors = {};

  const info = formData.businessInformation;

  if (!info.collectionPartnerCategory.trim()) {
    errors.collectionPartnerCategory =
      "Please select a Collection Partner Category.";
  }

  if (!info.shopName.trim()) {
    errors.shopName = "Business / Shop Name is required.";
  }

  if (!info.ownerName.trim()) {
    errors.ownerName = "Owner Name is required.";
  }

  if (!info.primaryContactPerson.trim()) {
    errors.primaryContactPerson =
      "Primary Contact Person is required.";
  }

  if (!/^[0-9]{10}$/.test(info.mobileNumber)) {
    errors.mobileNumber =
      "Enter a valid 10-digit Mobile Number.";
  }

  if (
    info.alternateMobileNumber &&
    !/^[0-9]{10}$/.test(info.alternateMobileNumber)
  ) {
    errors.alternateMobileNumber =
      "Enter a valid Alternate Mobile Number.";
  }

  if (
    info.whatsappNumber &&
    !/^[0-9]{10}$/.test(info.whatsappNumber)
  ) {
    errors.whatsappNumber =
      "Enter a valid WhatsApp Number.";
  }

  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(info.email)
  ) {
    errors.email = "Enter a valid Email Address.";
  }

  if (!info.gstNumber.trim()) {
  errors.gstNumber =
    "GST Number is required.";
} else if (
  !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/.test(
    info.gstNumber.toUpperCase()
  )
) {
  errors.gstNumber =
    "Invalid GST Number.";
}

  if (!info.panNumber.trim()) {
  errors.panNumber =
    "PAN Number is required.";
} else if (
  !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(
    info.panNumber.toUpperCase()
  )
) {
  errors.panNumber =
    "Invalid PAN Number.";
}

  return errors;
}

export function validateStep2(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const docs = formData.businessVerification;

  if (!docs.gstCertificate) {
    errors.gstCertificate =
      "GST Registration Certificate is required.";
  }

  if (!docs.panCard) {
    errors.panCard =
      "PAN Card is required.";
  }

  if (!docs.tradeLicense) {
    errors.tradeLicense =
      "Trade / Shop License is required.";
  }

  // Pollution Certificate is Optional

  if (!docs.aadhaarFront) {
    errors.aadhaarFront =
      "Aadhaar Front is required.";
  }

  if (!docs.aadhaarBack) {
    errors.aadhaarBack =
      "Aadhaar Back is required.";
  }

  if (!docs.ownerPhoto) {
    errors.ownerPhoto =
      "Owner Photograph is required.";
  }

  return errors;
}

export function validateStep3(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const address = formData.businessAddress;

  if (!address.shopNumber.trim()) {
    errors.shopNumber =
      "Shop Number is required.";
  }

  if (!address.buildingName.trim()) {
    errors.buildingName =
      "Building Name is required.";
  }

  if (!address.streetArea.trim()) {
    errors.streetArea =
      "Street / Area is required.";
  }

  if (!address.city.trim()) {
    errors.city =
      "City is required.";
  }

  if (!address.state.trim()) {
    errors.state =
      "Please select a State.";
  }

  if (!/^[0-9]{6}$/.test(address.pinCode)) {
    errors.pinCode =
      "Please enter a valid 6-digit PIN Code.";
  }

  return errors;
}

export function validateStep4(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const material = formData.materialCollection;

  if (material.materialsHandled.length === 0) {
    errors.materialsHandled =
      "Please select at least one material type.";
  }

  if (material.collectionServices.length === 0) {
    errors.collectionServices =
      "Please select at least one collection service.";
  }

  if (!material.dailyCollectionCapacity.trim()) {
    errors.dailyCollectionCapacity =
      "Daily Collection Capacity is required.";
  }

  if (!material.monthlyProcessingCapacity.trim()) {
    errors.monthlyProcessingCapacity =
      "Monthly Processing Capacity is required.";
  }

  return errors;
}

export function validateStep5(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const facility = formData.facilityTransportation;

  if (!facility.processingFacilityAvailable.trim()) {
    errors.processingFacilityAvailable =
      "Please select Processing Facility Availability.";
  }

  if (
    facility.processingFacilityAvailable === "Yes" &&
    !facility.facilityAddress.trim()
  ) {
    errors.facilityAddress =
      "Facility Address is required.";
  }

  if (!facility.storageCapacity.trim()) {
    errors.storageCapacity =
      "Storage Capacity is required.";
  }

  if (facility.vehicleTypes.length === 0) {
    errors.vehicleTypes =
      "Please select at least one vehicle type.";
  }

  if (!facility.numberOfVehicles.trim()) {
    errors.numberOfVehicles =
      "Number of Vehicles is required.";
  }

  return errors;
}

export function validateStep6(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const coverage = formData.coveragePayment;

  if (coverage.operatingAreas.length === 0) {
    errors.operatingAreas =
      "Please select at least one operating area.";
  }

  if (coverage.preferredPickupDays.length === 0) {
    errors.preferredPickupDays =
      "Please select at least one preferred pickup day.";
  }

  if (!coverage.preferredPickupTime.trim()) {
    errors.preferredPickupTime =
      "Preferred Pickup Time is required.";
  }

  if (!coverage.bankName.trim()) {
    errors.bankName =
      "Bank Name is required.";
  }

  if (!coverage.accountHolderName.trim()) {
    errors.accountHolderName =
      "Account Holder Name is required.";
  }

  if (!coverage.accountNumber.trim()) {
    errors.accountNumber =
      "Account Number is required.";
  }

  if (!coverage.ifscCode.trim()) {
    errors.ifscCode =
      "IFSC Code is required.";
  } else if (
    !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(
      coverage.ifscCode.toUpperCase()
    )
  ) {
    errors.ifscCode =
      "Please enter a valid IFSC Code.";
  }

  // UPI ID is optional.

  if (!coverage.emergencyContactName.trim()) {
    errors.emergencyContactName =
      "Emergency Contact Name is required.";
  }

  if (
    !/^[0-9]{10}$/.test(
      coverage.emergencyContactNumber
    )
  ) {
    errors.emergencyContactNumber =
      "Please enter a valid 10-digit Emergency Contact Number.";
  }

  return errors;
}

export function validateStep7(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const declaration = formData.declaration;

  if (!declaration.declarationAccepted) {
    errors.declarationAccepted =
      "Please accept the declaration.";
  }

  if (!declaration.termsAccepted) {
    errors.termsAccepted =
      "Please accept the Terms and Conditions.";
  }

  if (!declaration.communicationConsent) {
    errors.communicationConsent =
      "Please provide communication consent.";
  }

  return errors;
}