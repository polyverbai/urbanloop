import { RetailRegistrationForm } from "./types";

export function validateRetailRegistration(
  data: RetailRegistrationForm
): Record<string, string> {
  const errors: Record<string, string> = {};

  // Contact Information
  if (!/^[A-Za-z\s.'-]+$/.test(data.fullName.trim()))
  errors.fullName =
    "Please enter a valid full name";

  if (!/^\d{10}$/.test(data.mobileNumber))
    errors.mobileNumber = "Mobile number should be 10 digits";

  if (
    data.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
  ) {
    errors.email = "Email address is not correct";
  }

  if (
    data.alternateMobile &&
    !/^\d{10}$/.test(data.alternateMobile)
  ) {
    errors.alternateMobile =
      "Alternate mobile should be 10 digits";
  }

  // Address
  if (!data.shopNumber.trim())
    errors.shopNumber = "Required";

  if (!data.buildingName.trim())
    errors.buildingName = "Required";

  if (!data.streetArea.trim())
    errors.streetArea = "Required";

  if (!data.landmark.trim())
    errors.landmark = "Required";

  if (!data.city.trim())
    errors.city = "Required";

  if (!data.stateName.trim())
    errors.stateName = "Required";

  if (!/^\d{6}$/.test(data.pinCode))
  errors.pinCode = "PIN Code should be exactly 6 digits";

  // Business Profile
  if (!data.businessProfileType)
    errors.businessProfileType =
      "Please select Store Type";

  if (
  [
    "Retail Store",
    "Restaurant & Café",
    "Hotel & Hospitality",
  ].includes(data.businessProfileType) &&
  !data.outletCount
) {
  errors.outletCount =
    "Required";
}

  if (!data.monthlyRecyclables)
    errors.monthlyRecyclables = "Required";

  if (!data.storageSpaceAvailable)
    errors.storageSpaceAvailable = "Required";

  // Materials
  if (data.materialCategories.length === 0)
    errors.materialCategories =
      "Select at least one category";

  // Services
  if (data.requiredServices.length === 0)
    errors.requiredServices =
      "Select at least one service";

// Collection Preferences
if (!data.collectionFrequency)
  errors.collectionFrequency =
    "Collection Frequency is required";

if (!data.collectionDay)
  errors.collectionDay =
    "Preferred Collection Day is required";

if (!data.collectionTime)
  errors.collectionTime =
    "Preferred Collection Time is required";

  // Communication
  if (
    data.communicationPreferences.length === 0
  ) {
    errors.communicationPreferences =
      "Select at least one preference";
  }

  // Referral
  if (!data.referralSource)
    errors.referralSource =
      "Select referral source";

  // Declaration
  if (!data.declarationConfirmed)
    errors.declarationConfirmed =
      "Required";

  if (!data.termsAccepted)
    errors.termsAccepted =
      "Required";

  if (!data.communicationConsent)
    errors.communicationConsent =
      "Required";

  return errors;
}