export interface RecyclerBusinessInformation {
  recyclerPartnerCategory: string;
  businessName: string;
  ownerName: string;
  primaryContactPerson: string;

  mobileNumber: string;
  alternateMobileNumber: string;
  whatsappNumber: string;

  email: string;
  website: string;

  yearEstablished: string;

  gstNumber: string;
  panNumber: string;

  numberOfEmployees: string;
}

export interface RecyclerBusinessVerification {
  gstCertificate: File | null;
  panCard: File | null;

  tradeLicense: File | null;

  pollutionControlCertificate: File | null;
  recyclingAuthorization: File | null;

  authorizedPersonId: File | null;
  facilityPhoto: File | null;
}

export interface RecyclerFacilityAddress {
  facilityNumber: string;
  facilityName: string;

  streetArea: string;
  landmark: string;

  city: string;
  stateName: string;
  pinCode: string;
}

export interface RecyclerMaterialsProcessing {
  materialsAccepted: string[];

  dailyProcessingCapacity: string;
  monthlyProcessingCapacity: string;
  storageCapacity: string;

  processingTechnology: string;
  recycledOutputs: string;
}

export interface RecyclerProcurementRequirements {
  materialsRequired: string[];

  monthlyProcurementRequirement: string;
  minimumOrderQuantity: string;

  procurementFrequency: string;

  acceptedMaterialConditions: string[];

  preferredMaterialGrade: string;
}

export interface RecyclerLogisticsCommercial {
  procurementAreas: string[];

  fulfilmentPreference: string;

  receivingDays: string[];
  preferredReceivingTime: string;

  vehicleTypes: string[];
  numberOfVehicles: string;

  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  upiId: string;

  emergencyContactName: string;
  emergencyContactNumber: string;
}

export interface RecyclerDeclaration {
  informationConfirmed: boolean;
  complianceConfirmed: boolean;
  termsAccepted: boolean;
  recyclingComplianceAccepted: boolean;
  communicationConsent: boolean;
}

export interface RecyclerPartnerForm {
  businessInformation: RecyclerBusinessInformation;

  businessVerification: RecyclerBusinessVerification;

  facilityAddress: RecyclerFacilityAddress;

  materialsProcessing: RecyclerMaterialsProcessing;

  procurementRequirements: RecyclerProcurementRequirements;

  logisticsCommercial: RecyclerLogisticsCommercial;

  declaration: RecyclerDeclaration;
}