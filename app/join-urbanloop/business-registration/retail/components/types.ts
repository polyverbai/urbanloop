export interface RetailRegistrationForm {
  // Contact Information
  fullName: string;
  mobileNumber: string;
  email: string;
  alternateMobile: string;

  // Business Address
  shopNumber: string;
  buildingName: string;
  streetArea: string;
  landmark: string;
  city: string;
  stateName: string;
  pinCode: string;

  // Retail Business Profile
  businessProfileType: string;
  outletCount: string;
  monthlyRecyclables: string;
  storageSpaceAvailable: string;

  // Material Categories
  materialCategories: string[];

  // Service Requirements
  requiredServices: string[];

  // Collection Preferences
  collectionFrequency: string;
  collectionDay: string;
  collectionTime: string;

  // Communication Preferences
  communicationPreferences: string[];

  // Referral Information
  referralSource: string;
  referralCode: string;
  additionalComments: string;

  // Declaration & Consent
  declarationConfirmed: boolean;
  termsAccepted: boolean;
  communicationConsent: boolean;
}