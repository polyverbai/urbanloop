export interface CompanyInformation {
  companyCategory: string;
  companyName: string;
  gstNumber: string;
  panNumber: string;
  website: string;
  yearEstablished: string;
}

export interface ContactInformation {
  contactPersonName: string;
  designation: string;
  mobileNumber: string;
  email: string;
}

export interface OfficeAddress {
  officeUnitNumber: string;
  buildingName: string;
  streetArea: string;
  landmark: string;
  city: string;
  stateName: string;
  pinCode: string;
}

export interface SustainabilityInitiatives {
  sustainabilityInitiatives: string[];
}

export interface MaterialCollection {
  materialCategories: string[];
}

export interface CollectionPreferences {
  monthlyRecyclables: string;
  pickupFrequency: string;
  pickupDay: string;
  pickupTime: string;
}

export interface CommunicationPreferences {
  communicationPreferences: string[];
}

export interface ReferralInformation {
  referralSource: string;
  referralCode: string;
  additionalComments: string;
}

export interface DeclarationConsent {
  declarationConfirmed: boolean;
  termsAccepted: boolean;
  communicationConsent: boolean;
}

export interface CorporateRegistrationForm {
  companyInformation: CompanyInformation;

  contactInformation: ContactInformation;

  officeAddress: OfficeAddress;

sustainabilityInitiatives: SustainabilityInitiatives;


  materialCollection: MaterialCollection;

  collectionPreferences: CollectionPreferences;

  communicationPreferences: CommunicationPreferences;

  referralInformation: ReferralInformation;

  declarationConsent: DeclarationConsent;
}