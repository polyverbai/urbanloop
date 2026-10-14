export interface InstitutionInformation {
  institutionCategory: string;
  institutionName: string;
  website: string;
  yearEstablished: string;
}

export interface ContactInformation {
  contactPersonName: string;
  designation: string;
  mobileNumber: string;
  email: string;
}

export interface InstitutionAddress {
  address: string;
  landmark: string;
  city: string;
  stateName: string;
  pinCode: string;
}

export interface MaterialCollection {
  materialCategories: string[];
  pickupFrequency: string;
  pickupDay: string;
  pickupTime: string;
}

export interface CommunicationInformation {
  communicationPreferences: string[];
}

export interface ReferralInformation {
  referralSource: string;
  referralCode: string;
  additionalComments: string;
}

export interface DeclarationInformation {
  declarationConfirmed: boolean;
  termsAccepted: boolean;
  communicationConsent: boolean;
}

export interface HospitalInstitutionForm {
  institutionInformation: InstitutionInformation;
  contactInformation: ContactInformation;
  institutionAddress: InstitutionAddress;
  materialCollection: MaterialCollection;
  communicationInformation: CommunicationInformation;
  referralInformation: ReferralInformation;
  declarationInformation: DeclarationInformation;
}