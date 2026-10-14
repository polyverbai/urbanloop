import { BusinessPartnerForm } from "./types";

export const defaultValues: BusinessPartnerForm = {
  businessInformation: {
    partnerType: "",

    businessName: "",
    ownerName: "",
    mobileNumber: "",
    email: "",
  },

  businessAddress: {
    shopNumber: "",
    buildingName: "",
    streetArea: "",
    landmark: "",
    city: "",
    state: "",
    pinCode: "",
  },

  businessRegistration: {
    panAvailable: "",
    panNumber: "",

    gstAvailable: "",
    gstNumber: "",

    tradeLicenseAvailable: "",
    tradeLicenseNumber: "",
  },

  declaration: {
    declarationAccepted: false,
    termsAccepted: false,
    communicationConsent: false,
  },
};