export interface BusinessInformation {
  collectionPartnerCategory: string;
  shopName: string;
  ownerName: string;
  primaryContactPerson: string;
  mobileNumber: string;
  alternateMobileNumber: string;
  email: string;
  whatsappNumber: string;
  website: string;
  yearEstablished: string;
  gstNumber: string;
  panNumber: string;
  numberOfEmployees: string;
}

export interface BusinessVerification {
  gstCertificate: File | null;
  panCard: File | null;
  tradeLicense: File | null;
  pollutionCertificate: File | null;
  aadhaarFront: File | null;
  aadhaarBack: File | null;
  ownerPhoto: File | null;
}

export interface BusinessAddress {
  shopNumber: string;
  buildingName: string;
  streetArea: string;
  landmark: string;
  city: string;
  state: string;
  pinCode: string;
  latitude: string;
  longitude: string;
}

export interface MaterialCollection {
  materialsHandled: string[];
  collectionServices: string[];
  dailyCollectionCapacity: string;
  monthlyProcessingCapacity: string;
}

export interface FacilityTransportation {
  processingFacilityAvailable: string;
  facilityAddress: string;
  storageCapacity: string;
  vehicleTypes: string[];
  numberOfVehicles: string;
}

export interface CoveragePayment {
  operatingAreas: string[];
  preferredPickupDays: string[];
  preferredPickupTime: string;
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  upiId: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
}

export interface Declaration {
  declarationAccepted: boolean;
  termsAccepted: boolean;
  communicationConsent: boolean;
}

export interface CollectionPartnerForm {
  businessInformation: BusinessInformation;
  businessVerification: BusinessVerification;
  businessAddress: BusinessAddress;
  materialCollection: MaterialCollection;
  facilityTransportation: FacilityTransportation;
  coveragePayment: CoveragePayment;
  declaration: Declaration;
}