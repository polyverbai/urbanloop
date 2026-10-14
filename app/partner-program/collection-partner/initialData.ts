import type { CollectionPartnerForm } from "./types";

export const INITIAL_COLLECTION_PARTNER_FORM: CollectionPartnerForm = {
  businessInformation: {
  collectionPartnerCategory: "",
  shopName: "",
  ownerName: "",
  mobileNumber: "",
  email: "",
  yearEstablished: "",

panAvailable: "",
panNumber: "",

numberOfEmployees: "",

  tradeLicenseAvailable: "No",
tradeLicenseNumber: "",

gstAvailable: "No",
gstNumber: "",

},

  businessVerification: {
    gstCertificate: null,
    panCard: null,
    tradeLicense: null,
    pollutionCertificate: null,
    aadhaarFront: null,
    aadhaarBack: null,
    ownerPhoto: null,
  },

  businessAddress: {
    shopNumber: "",
    buildingName: "",
    streetArea: "",
    landmark: "",
    city: "",
    state: "",
    pinCode: "",
    latitude: "",
    longitude: "",
  },

  materialCollection: {
  materialsHandled: [],
  collectionServices: [],

  dailyCollectionCapacity: "",
  monthlyCollectionCapacity: "",
  collectionCapacityUnit: "",

  sortingFacilityAvailable: "",
  sortingCapacity: "",

  storageSpaceAvailable: "",

  storageCapacity: "",
  storageCapacityUnit: "",
},

  segregationFacility: {
  segregationFacilityAvailable: "",
  segregationCapacity: "",
  segregationCapacityUnit: "Kg",
},

selfTransportation: {
  vehicleAvailable: "",
  vehicleTypes: [],

  numberOfVehicles: "",

  primaryCity: "",
  district: "",
  state: "",
  pinCodes: "",
  collectionRadius: "",
  vehicleNumbers: "",

  drivingLicence: null,
},

  facilityTransportation: {
    processingFacilityAvailable: "",
    facilityAddress: "",
    storageCapacity: "",
    vehicleTypes: [],
    numberOfVehicles: "",
  },

  
coveragePayment: {
  operatingAreas: [],

  preferredPickupDays: [],

  preferredPickupTime: "",

  bankName: "",

  accountHolderName: "",

  accountNumber: "",

  confirmAccountNumber: "",

  ifscCode: "",

  upiId: "",

  emergencyContactName: "",

  emergencyContactNumber: "",
},

  declaration: {
    declarationAccepted: false,
    termsAccepted: false,
    communicationConsent: false,
  },
};