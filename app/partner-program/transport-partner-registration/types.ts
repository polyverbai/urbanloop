/* =====================================================
   TRANSPORT PARTNER REGISTRATION TYPES
===================================================== */


/* =====================================================
   STEP 1 — BUSINESS INFORMATION
===================================================== */

export interface TransportBusinessInformation {
  transportPartnerCategory: string;

  businessName: string;

  ownerName: string;

  primaryContactPerson: string;

  mobileNumber: string;

  alternateMobileNumber: string;

  whatsappNumber: string;

  email: string;

  panNumber: string;

  gstNumber: string;

  yearsInBusiness: string;

  employeeDriverCount: string;
}


/* =====================================================
   STEP 2 — BUSINESS & COMPLIANCE VERIFICATION
===================================================== */

export interface TransportBusinessVerification {
  panCard: File | null;

  gstCertificate: File | null;

  authorizedPersonId: File | null;

  drivingLicence: File | null;

  vehicleRegistrationCertificate: File | null;

  vehicleInsurance: File | null;

  pucCertificate: File | null;

  commercialPermit: File | null;

  fitnessCertificate: File | null;

  businessRegistration: File | null;

  vehiclePhoto: File | null;
}


/* =====================================================
   STEP 3 — BUSINESS / OPERATIONAL ADDRESS
===================================================== */

export interface TransportBusinessAddress {
  addressLine: string;

  buildingName: string;

  streetArea: string;

  landmark: string;

  city: string;

  state: string;

  pinCode: string;
}


/* =====================================================
   STEP 4 — FLEET & VEHICLE CAPABILITY
===================================================== */

export interface TransportFleetCapability {
  ownsOperatesVehicles: string;

  numberOfVehicles: string;

  vehicleTypes: string[];

  pickupCapabilities: string[];

  materialCategories: string[];

  minimumLoad: string;

  minimumLoadUnit: string;

  maximumTransportCapacity: string;

  maximumTransportCapacityUnit: string;

  loadingAssistanceAvailable: string;

  unloadingAssistanceAvailable: string;
}


/* =====================================================
   STEP 5 — SERVICE AREA & OPERATIONS
===================================================== */

export interface TransportServiceOperations {
  operatingStates: string[];

  operatingCitiesDistricts: string[];

  serviceAreas: string;

  serviceRadius: string;

  operationalScope: string[];

  operatingDays: string[];

  operatingTime: string[];

  sameDayPickupAvailable: string;

  weekendServiceAvailable: string;
}


/* =====================================================
   STEP 6 — COMMERCIAL & PAYMENT INFORMATION
===================================================== */

export interface TransportCommercialPayment {
  commercialPreferences: string[];

  preferredSettlementMethod: string;

  accountHolderName: string;

  bankName: string;

  accountNumber: string;

  confirmAccountNumber: string;

  ifscCode: string;

  upiId: string;
}


/* =====================================================
   STEP 7 — DECLARATION & CONSENT
===================================================== */

export interface TransportDeclaration {
  informationConfirmed: boolean;

  termsAccepted: boolean;

  communicationConsent: boolean;

  vehicleComplianceConfirmed: boolean;
}


/* =====================================================
   COMPLETE TRANSPORT PARTNER FORM
===================================================== */

export interface TransportPartnerForm {
  businessInformation: TransportBusinessInformation;

  businessVerification: TransportBusinessVerification;

  businessAddress: TransportBusinessAddress;

  fleetCapability: TransportFleetCapability;

  serviceOperations: TransportServiceOperations;

  commercialPayment: TransportCommercialPayment;

  declaration: TransportDeclaration;
}