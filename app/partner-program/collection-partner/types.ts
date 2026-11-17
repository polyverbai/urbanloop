export interface BusinessInformation {
  collectionPartnerCategory: string;
  shopName: string;
  ownerName: string;
  mobileNumber: string;
  email: string;
  yearEstablished: string;
  numberOfEmployees: string;

panAvailable: "" | "Yes" | "No";
panNumber: string;

tradeLicenseAvailable: "" | "Yes" | "No";
  tradeLicenseNumber: string;

  gstAvailable: "" | "Yes" | "No";
  gstNumber: string;
}

export interface BusinessVerification {
  panCard: File | null;
  tradeLicense: File | null;
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
  monthlyCollectionCapacity: string;

  sortingFacilityAvailable: string;
  sortingCapacity: string;

}

export interface FacilityTransportation {
  processingFacilityAvailable: string;
  facilityAddress: string;

  vehicleTypes: string[];
  numberOfVehicles: string;
  vehicleNumbers: string;
}

export interface CoveragePayment {
  operatingAreas: string[];

  preferredPickupDays: string[];

  preferredPickupTime: string;

  bankName: string;

bankState: string;

bankDistrict: string;

bankBranch: string;

bankAddress: string;

accountHolderName: string;

accountNumber: string;

confirmAccountNumber: string;

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

  segregationFacility: {
    segregationFacilityAvailable: string;
    segregationCapacity: string;
    segregationCapacityUnit: string;
  };

  selfTransportation: {
  vehicleAvailable: "" | "Yes" | "No";
  vehicleTypes: string[];

  numberOfVehicles: string;

  primaryCity: string;
  district: string;
  state: string;
  pinCodes: string;
  collectionRadius: string;
  vehicleNumbers: string;

  drivingLicence: File | null;
};


  facilityTransportation: FacilityTransportation;

coveragePayment: CoveragePayment;

declaration: Declaration;
}

