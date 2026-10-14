export interface BusinessInformation {
  partnerType: "" | "Collection Partner" | "Transport Partner" | "Recycler Partner";

  businessName: string;
  ownerName: string;
  mobileNumber: string;
  email: string;
}

export interface BusinessAddress {
  shopNumber: string;
  buildingName: string;
  streetArea: string;
  landmark: string;
  city: string;
  state: string;
  pinCode: string;
}

export interface BusinessRegistration {
  panAvailable: "" | "Yes" | "No";
  panNumber: string;

  gstAvailable: "" | "Yes" | "No";
  gstNumber: string;

  tradeLicenseAvailable: "" | "Yes" | "No";
  tradeLicenseNumber: string;
}

export interface Declaration {
  declarationAccepted: boolean;
  termsAccepted: boolean;
  communicationConsent: boolean;
}

export interface BusinessPartnerForm {
  businessInformation: BusinessInformation;
  businessAddress: BusinessAddress;
  businessRegistration: BusinessRegistration;
  declaration: Declaration;
}