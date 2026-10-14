import { CorporateRegistrationForm } from "./types";

export function validateCorporateRegistration(
  data: CorporateRegistrationForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  /* ==========================================
     COMPANY INFORMATION
  ========================================== */

  if (!data.companyInformation.companyName.trim()) {
    errors.companyName = "Company Name is required";
  }

  if (
    !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][A-Z0-9]{3}$/.test(
      data.companyInformation.gstNumber.toUpperCase()
    )
  ) {
    errors.gstNumber = "Enter a valid GST Number";
  }

  if (
    !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(
      data.companyInformation.panNumber.toUpperCase()
    )
  ) {
    errors.panNumber = "Enter a valid PAN Number";
  }

  /* ==========================================
     CONTACT INFORMATION
  ========================================== */

  if (!data.contactInformation.contactPersonName.trim()) {
    errors.contactPersonName = "Contact Person Name is required";
  }

  if (
    !/^\d{10}$/.test(
      data.contactInformation.mobileNumber
    )
  ) {
    errors.mobileNumber = "Mobile Number should be 10 digits";
  }

  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      data.contactInformation.email
    )
  ) {
    errors.email = "Enter a valid Email Address";
  }

  /* ==========================================
     OFFICE ADDRESS
  ========================================== */

  if (!data.officeAddress.officeUnitNumber.trim())
    errors.officeUnitNumber = "Required";

  if (!data.officeAddress.buildingName.trim())
    errors.buildingName = "Required";

  if (!data.officeAddress.streetArea.trim())
    errors.streetArea = "Required";

  if (!data.officeAddress.city.trim())
    errors.city = "Required";

  if (!data.officeAddress.stateName.trim())
    errors.stateName = "Required";

  if (
    !/^\d{6}$/.test(
      data.officeAddress.pinCode
    )
  ) {
    errors.pinCode = "PIN Code should be exactly 6 digits";
  }

  /* ==========================================
     MATERIALS
  ========================================== */

  if (
    data.materialCollection.materialCategories.length === 0
  ) {
    errors.materialCategories =
      "Select at least one material";
  }

  /* ==========================================
     COLLECTION PREFERENCES
  ========================================== */

  if (
    !data.collectionPreferences.monthlyRecyclables
  ) {
    errors.monthlyRecyclables = "Required";
  }

  if (
    !data.collectionPreferences.pickupFrequency
  ) {
    errors.pickupFrequency = "Required";
  }

  if (
    !data.collectionPreferences.pickupDay
  ) {
    errors.pickupDay = "Required";
  }

  if (
    !data.collectionPreferences.pickupTime
  ) {
    errors.pickupTime = "Required";
  }

  /* ==========================================
     COMMUNICATION
  ========================================== */

  if (
    data.communicationPreferences.communicationPreferences.length === 0
  ) {
    errors.communicationPreferences =
      "Select at least one communication preference";
  }

  /* ==========================================
     DECLARATION
  ========================================== */

  if (
    !data.declarationConsent.declarationConfirmed
  ) {
    errors.declarationConfirmed = "Required";
  }

  if (
    !data.declarationConsent.termsAccepted
  ) {
    errors.termsAccepted = "Required";
  }

  if (
    !data.declarationConsent.communicationConsent
  ) {
    errors.communicationConsent = "Required";
  }

  return errors;
}