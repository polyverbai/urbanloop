import type { BusinessPartnerForm } from "./types";

export interface ValidationErrors {
  [key: string]: string;
}

/* =====================================================
   BUSINESS INFORMATION
===================================================== */

export function validateBusinessInformation(
  formData: BusinessPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const business = formData.businessInformation;

  if (!business.partnerType) {
    errors.partnerType = "Please select Partner Type.";
  }

  if (!business.businessName.trim()) {
    errors.businessName = "Business Name is required.";
  }

  if (!business.ownerName.trim()) {
    errors.ownerName = "Owner Name is required.";
  }

  if (!business.mobileNumber.trim()) {
    errors.mobileNumber = "Mobile Number is required.";
  }

  if (!business.email.trim()) {
    errors.email = "Email Address is required.";
  }

  return errors;
}

export function validateBusinessRegistration(
  formData: BusinessPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  const registration =
    formData.businessRegistration;

  if (
    registration.panAvailable === "Yes" &&
    !registration.panNumber.trim()
  ) {
    errors.panNumber = "PAN Number is required.";
  }

  if (
    registration.gstAvailable === "Yes" &&
    !registration.gstNumber.trim()
  ) {
    errors.gstNumber = "GST Number is required.";
  }

  if (
    registration.tradeLicenseAvailable === "Yes" &&
    !registration.tradeLicenseNumber.trim()
  ) {
    errors.tradeLicenseNumber =
      "Trade License Number is required.";
  }

  return errors;
}

/* =====================================================
   BUSINESS ADDRESS
===================================================== */

export function validateBusinessAddress(
  formData: BusinessPartnerForm
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

/* =====================================================
   DECLARATION
===================================================== */

export function validateDeclaration(
  formData: BusinessPartnerForm
): ValidationErrors {

  const errors: ValidationErrors = {};

  if (!formData.declaration.declarationAccepted) {
    errors.declarationAccepted =
      "Please accept the declaration.";
  }

  if (!formData.declaration.termsAccepted) {
    errors.termsAccepted =
      "Please accept the Terms & Conditions.";
  }

  if (!formData.declaration.communicationConsent) {
    errors.communicationConsent =
      "Please provide communication consent.";
  }

  return errors;
}

/* =====================================================
   COMPLETE FORM
===================================================== */

export function validateForm(
  formData: BusinessPartnerForm
): ValidationErrors {

  return {

    ...validateBusinessInformation(formData),

    ...validateBusinessAddress(formData),

    ...validateBusinessRegistration(formData),

    ...validateDeclaration(formData),

  };

}