import { ResidentialRegistrationForm } from "./types";

export function validateResidentialRegistration(
  data: ResidentialRegistrationForm
): Record<string, string> {
  const errors: Record<string, string> = {};

  // Residential Information
  if (!data.residencyCategory)
    errors.residencyCategory =
      "Please select your residential category.";

  // Contact Information
  if (!data.contactPersonName.trim())
    errors.contactPersonName =
      "Please enter your name.";

  if (!/^\d{10}$/.test(data.mobileNumber))
    errors.mobileNumber =
      "Mobile number should be 10 digits";

  if (
    data.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      data.email
    )
  ) {
    errors.email =
      "Please enter a valid email address";
  }

  // Address
if (!data.houseFlatNumber.trim())
  errors.houseFlatNumber = "Required";

if (!data.buildingName.trim())
  errors.buildingName = "Required";

if (!data.streetArea.trim())
  errors.streetArea = "Required";

if (!data.city.trim())
  errors.city = "City is required";

if (!data.stateName.trim())
  errors.stateName = "State is required";

if (!data.pinCode.trim())
  errors.pinCode = "PIN Code is required";

  // Materials
  if (data.materialCategories.length === 0)
    errors.materialCategories =
      "Select at least one category";

  // Collection Preferences
  if (!data.pickupFrequency)
    errors.pickupFrequency =
      "Select pickup frequency";

  if (!data.pickupDay)
    errors.pickupDay =
      "Select pickup day";

  if (!data.pickupTime)
    errors.pickupTime =
      "Select pickup time";

  // Communication
  if (
    data.communicationPreferences.length === 0
  )
    errors.communicationPreferences =
      "Select at least one preference";

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