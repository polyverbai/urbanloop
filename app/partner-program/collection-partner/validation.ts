import type { CollectionPartnerForm } from "./types";

export interface ValidationErrors {
  [key: string]: string;
}

export function validateForm(
  formData: CollectionPartnerForm
): ValidationErrors {

  return {
  ...validateBusinessInformation(formData),
  ...validateBusinessAddress(formData),
  ...validateMaterialCollection(formData),
  ...validateSegregationFacility(formData),
  ...validateSelfTransportation(formData),
  ...validateBusinessVerification(formData),
  ...validateCoveragePayment(formData),
  ...validateDeclaration(formData),
};

}

export function validateBusinessInformation(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const business = formData.businessInformation;

  if (!business.collectionPartnerCategory.trim()) {
    errors.collectionPartnerCategory =
      "Collection Partner Category is required.";
  }

  if (!business.shopName.trim()) {
    errors.shopName = "Shop Name is required.";
  }

  if (!business.ownerName.trim()) {
    errors.ownerName = "Owner Name is required.";
  }

  if (!business.mobileNumber.trim()) {
    errors.mobileNumber = "Mobile Number is required.";
  }

  if (business.panAvailable === "Yes" &&
      !business.panNumber.trim()) {
    errors.panNumber = "PAN Number is required.";
  }

  if (
    business.tradeLicenseAvailable === "Yes" &&
    !business.tradeLicenseNumber.trim()
  ) {
    errors.tradeLicenseNumber =
      "Trade License Number is required.";
  }

  if (
    business.gstAvailable === "Yes" &&
    !business.gstNumber.trim()
  ) {
    errors.gstNumber = "GST Number is required.";
  }

  return errors;
}

export function validateBusinessAddress(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const address = formData.businessAddress;

  if (!address.shopNumber.trim()) {
    errors.shopNumber = "Shop Number is required.";
  }

  if (!address.buildingName.trim()) {
    errors.buildingName = "Building Name is required.";
  }

  if (!address.streetArea.trim()) {
    errors.streetArea = "Street / Area is required.";
  }

  if (!address.city.trim()) {
    errors.city = "City is required.";
  }

  if (!address.state.trim()) {
    errors.state = "State is required.";
  }

  if (!address.pinCode.trim()) {
    errors.pinCode = "PIN Code is required.";
  }

  return errors;
}

export function validateMaterialCollection(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (
    formData.materialCollection.materialsHandled.length === 0
  ) {
    errors.materialsHandled =
      "Select at least one material";
  }

  if (
    formData.materialCollection.collectionServices.length === 0
  ) {
    errors.collectionServices =
      "Select at least one collection service";
  }

  if (
    !formData.materialCollection.dailyCollectionCapacity.trim()
  ) {
    errors.dailyCollectionCapacity =
      "Daily Collection Capacity is required";
  }

  if (
    !formData.materialCollection.monthlyCollectionCapacity.trim()
  ) {
    errors.monthlyCollectionCapacity =
      "Monthly Collection Capacity is required";
  }

  return errors;
}

export function validateSegregationFacility(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (
    !formData.segregationFacility
      .segregationFacilityAvailable
  ) {
    errors.segregationFacilityAvailable =
      "Please select Yes or No";

    return errors;
  }

  if (
    formData.segregationFacility
      .segregationFacilityAvailable === "Yes"
  ) {

    if (
      !formData.segregationFacility
        .segregationCapacity
        .trim()
    ) {
      errors.segregationCapacity =
        "Segregation Capacity is required";
    }

    if (
      !formData.segregationFacility
        .segregationCapacityUnit
        .trim()
    ) {
      errors.segregationCapacityUnit =
        "Capacity Unit is required";
    }
  }

  return errors;
}

export function validateSelfTransportation(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

// Processing Facility Validation

if (
    !formData.facilityTransportation.processingFacilityAvailable
) {
    errors.processingFacilityAvailable =
        "Please select Yes or No";
}

if (
    formData.facilityTransportation.processingFacilityAvailable === "Yes" &&
    !formData.facilityTransportation.facilityAddress.trim()
) {
    errors.facilityAddress =
        "Facility Address is required";
}

  if (!formData.selfTransportation.vehicleAvailable) {
    errors.vehicleAvailable = "Please select Yes or No";
    return errors;
  }

  if (formData.selfTransportation.vehicleAvailable === "Yes") {

    if (formData.selfTransportation.vehicleTypes.length === 0) {
      errors.vehicleTypes =
        "Select at least one vehicle type";
    }

    if (!formData.selfTransportation.numberOfVehicles.trim()) {
      errors.numberOfVehicles =
        "Number of Vehicles is required";
    }

    if (!formData.selfTransportation.vehicleNumbers.trim()) {
      errors.vehicleNumbers =
        "Vehicle Registration Number is required";
    }

    if (!formData.selfTransportation.drivingLicence) {
      errors.drivingLicence =
        "Driving Licence is required";
    }

if (
    formData.facilityTransportation.vehicleTypes.length > 0 &&
    !formData.facilityTransportation.vehicleNumbers.trim()
) {
    errors.vehicleNumbers =
        "Vehicle Registration Number is required";
}

  }

  return errors;
}

export function validateBusinessVerification(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (
  formData.businessInformation.panAvailable === "Yes" &&
  !formData.businessVerification.panCard
) {
  errors.panCard = "PAN Card is required";
}

 if (
  formData.businessInformation.tradeLicenseAvailable === "Yes" &&
  !formData.businessVerification.tradeLicense
) {
  errors.tradeLicense = "Trade License is required";
}

  if (!formData.businessVerification.aadhaarFront) {
    errors.aadhaarFront = "Aadhaar Front is required";
  }

  if (!formData.businessVerification.aadhaarBack) {
    errors.aadhaarBack = "Aadhaar Back is required";
  }

  if (!formData.businessVerification.ownerPhoto) {
    errors.ownerPhoto = "Owner Photo is required";
  }

  return errors;
}

export function validateCoveragePayment(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  // Operating Area
  if (
    formData.coveragePayment.operatingAreas.length === 0
  ) {
    errors.operatingAreas =
      "Select at least one operating area";
  }

  // Pickup Days
  if (
    formData.coveragePayment.preferredPickupDays.length === 0
  ) {
    errors.preferredPickupDays =
      "Select at least one pickup day";
  }

  // Pickup Time
  if (
    !formData.coveragePayment.preferredPickupTime
  ) {
    errors.preferredPickupTime =
      "Please select preferred pickup time";
  }

// Bank Details

if (!formData.coveragePayment.bankName.trim()) {
  errors.bankName = "Bank Name is required";
}

if (!formData.coveragePayment.bankState.trim()) {
  errors.bankState = "State is required";
}

if (!formData.coveragePayment.bankDistrict.trim()) {
  errors.bankDistrict = "District is required";
}

if (!formData.coveragePayment.bankBranch.trim()) {
  errors.bankBranch = "Branch is required";
}

if (!formData.coveragePayment.accountHolderName.trim()) {
  errors.accountHolderName = "Account Holder Name is required";
}

if (!formData.coveragePayment.accountNumber.trim()) {
  errors.accountNumber = "Account Number is required";
}

if (!formData.coveragePayment.confirmAccountNumber.trim()) {
  errors.confirmAccountNumber = "Please confirm account number";
}

if (
  formData.coveragePayment.accountNumber !==
  formData.coveragePayment.confirmAccountNumber
) {
  errors.confirmAccountNumber =
    "Account numbers do not match";
}

if (!formData.coveragePayment.ifscCode.trim()) {
  errors.ifscCode = "IFSC Code is required";
}

// UPI ID is optional

if (
  formData.coveragePayment.emergencyContactName.trim() &&
  !formData.coveragePayment.emergencyContactNumber.trim()
) {
  errors.emergencyContactNumber =
    "Emergency Contact Number is required";
}

console.log("Step 6 Validation Errors");
console.log(errors);

  return errors;
}


export function validateDeclaration(
  formData: CollectionPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (!formData.declaration.declarationAccepted) {
    errors.declarationAccepted =
      "Please accept the declaration.";
  }

  if (!formData.declaration.termsAccepted) {
    errors.termsAccepted =
      "Please accept the terms and conditions.";
  }

  if (!formData.declaration.communicationConsent) {
    errors.communicationConsent =
      "Please provide communication consent.";
  }

  return errors;
}

export const validateStep1 = validateBusinessInformation;

export const validateStep2 = validateBusinessVerification;

export const validateStep3 = validateBusinessAddress;

export const validateStep4 = validateMaterialCollection;

export const validateStep5 = validateSelfTransportation;

export const validateStep6 = validateCoveragePayment;

export const validateStep7 = validateDeclaration;