export interface ResidentialRegistrationForm {
  // Residential Information
  residencyCategory: string;

  // Contact Information
  contactPersonName: string;
  mobileNumber: string;
  email: string;

  // Address
houseFlatNumber: string;
buildingName: string;
streetArea: string;
landmark: string;
city: string;
stateName: string;
pinCode: string

  // Recyclable Materials
  materialCategories: string[];

  // Collection Preferences
  pickupFrequency: string;
  pickupDay: string;
  pickupTime: string;

  // Communication
  communicationPreferences: string[];

  // Referral
  referralSource: string;
  referralCode: string;
  additionalComments: string;

  // Declaration
  declarationConfirmed: boolean;
  termsAccepted: boolean;
  communicationConsent: boolean;
}