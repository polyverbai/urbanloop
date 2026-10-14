import type {
  EducationalInstitutionForm,
} from "./types";

export function validateForm(
  data: EducationalInstitutionForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  /* ================================
     Institution Information
  ================================ */

  if (!data.institutionInformation.institutionCategory) {
    errors.institutionCategory =
      "Institution Category is required.";
  }

  if (!data.institutionInformation.institutionName.trim()) {
    errors.institutionName =
      "Institution Name is required.";
  }

  if (!data.contactInformation.contactPersonName.trim()) {
    errors.contactPersonName =
      "Contact Person Name is required.";
  }

  if (
    !/^[0-9]{10}$/.test(
      data.contactInformation.mobileNumber
    )
  ) {
    errors.mobileNumber =
      "Enter a valid 10-digit Mobile Number.";
  }

  if (
    data.contactInformation.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      data.contactInformation.email
    )
  ) {
    errors.email =
      "Enter a valid Email Address.";
  }

/* ================================
   Address
================================ */

if (!data.institutionAddress.buildingNumber.trim()) {
  errors.buildingNumber =
    "Building / Unit Number is required.";
}

if (!data.institutionAddress.buildingName.trim()) {
  errors.buildingName =
    "Building Name is required.";
}

if (!data.institutionAddress.streetArea.trim()) {
  errors.streetArea =
    "Street / Area is required.";
}

if (!data.institutionAddress.landmark.trim()) {
  errors.landmark =
    "Landmark is required.";
}

if (!data.institutionAddress.city.trim()) {
  errors.city =
    "City is required.";
}

if (!data.institutionAddress.stateName.trim()) {
  errors.stateName =
    "State is required.";
}

if (!data.institutionAddress.pinCode.trim()) {
  errors.pinCode =
    "PIN Code is required.";
}

/* ================================
   Material Collection
================================ */

if (
  data.materialCollection.materialCategories.length === 0
) {
  errors.materialCategories =
    "Select at least one Material Category.";
}

if (!data.materialCollection.monthlyRecyclables.trim()) {
  errors.monthlyRecyclables =
    "Estimated Monthly Recyclables is required.";
}

if (!data.materialCollection.pickupFrequency.trim()) {
  errors.pickupFrequency =
    "Collection Frequency is required.";
}

if (!data.materialCollection.pickupDay.trim()) {
  errors.pickupDay =
    "Preferred Collection Day is required.";
}

if (!data.materialCollection.pickupTime.trim()) {
  errors.pickupTime =
    "Preferred Collection Time is required.";
}

  /* ================================
     Communication
  ================================ */

  if (
    data.communicationInformation
      .communicationPreferences.length === 0
  ) {
    errors.communicationPreferences =
      "Select at least one Communication Preference.";
  }
  

  /* ================================
     Declaration
  ================================ */

  if (
    !data.declarationInformation
      .declarationConfirmed
  ) {
    errors.declarationConfirmed =
      "Declaration must be accepted.";
  }

  if (
    !data.declarationInformation
      .termsAccepted
  ) {
    errors.termsAccepted =
      "Terms & Conditions must be accepted.";
  }

  if (
    !data.declarationInformation
      .communicationConsent
  ) {
    errors.communicationConsent =
      "Communication Consent is required.";
  }

  return errors;
}