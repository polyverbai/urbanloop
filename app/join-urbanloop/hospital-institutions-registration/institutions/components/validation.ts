import type {
  HospitalInstitutionForm,
} from "./types";

export function validateForm(
  formData: HospitalInstitutionForm
): Record<string, string> {
  const errors: Record<string, string> = {};

  const {
    institutionInformation,
    contactInformation,
    institutionAddress,
    materialCollection,
    communicationInformation,
    referralInformation,
    declarationInformation,
  } = formData;

  // Institution Information
  if (!institutionInformation.institutionCategory) {
    errors.institutionCategory =
      "Please select Institution Category";
  }

  if (!institutionInformation.institutionName.trim()) {
    errors.institutionName =
      "Institution Name is required";
  }

  // Contact Information
  if (!contactInformation.contactPersonName.trim()) {
    errors.contactPersonName =
      "Contact Person Name is required";
  }

  if (!contactInformation.designation.trim()) {
    errors.designation =
      "Designation is required";
  }

  if (!/^\d{10}$/.test(contactInformation.mobileNumber)) {
    errors.mobileNumber =
      "Mobile number should be 10 digits";
  }

  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      contactInformation.email
    )
  ) {
    errors.email =
      "Please enter a valid email address";
  }

  // Institution Address
  if (!institutionAddress.address.trim()) {
    errors.address =
      "Institution Address is required";
  }

  if (!institutionAddress.landmark.trim()) {
    errors.landmark =
      "Landmark is required";
  }

  if (!institutionAddress.city.trim()) {
    errors.city =
      "City is required";
  }

  if (!institutionAddress.stateName.trim()) {
    errors.stateName =
      "State is required";
  }

  if (!institutionAddress.pinCode.trim()) {
    errors.pinCode =
      "PIN Code is required";
  }

  // Material Collection
  if (
    materialCollection.materialCategories.length === 0
  ) {
    errors.materialCategories =
      "Select at least one category";
  }

  if (!materialCollection.pickupFrequency) {
    errors.pickupFrequency =
      "Select pickup frequency";
  }

  if (!materialCollection.pickupDay) {
    errors.pickupDay =
      "Select pickup day";
  }

  if (!materialCollection.pickupTime) {
    errors.pickupTime =
      "Select pickup time";
  }

  // Communication Preferences
  if (
    communicationInformation.communicationPreferences
      .length === 0
  ) {
    errors.communicationPreferences =
      "Select at least one preference";
  }

  // Referral Information
  if (!referralInformation.referralSource) {
    errors.referralSource =
      "Select referral source";
  }

  // Declaration & Consent
  if (
    !declarationInformation.declarationConfirmed
  ) {
    errors.declarationConfirmed =
      "Required";
  }

  if (!declarationInformation.termsAccepted) {
    errors.termsAccepted =
      "Required";
  }

  if (
    !declarationInformation.communicationConsent
  ) {
    errors.communicationConsent =
      "Required";
  }

  return errors;
}