import { BusinessPartnerApplication } from "./types";

export const initialData: BusinessPartnerApplication = {
  partnerInformation: {
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

  declaration: {
    declarationAccepted: false,

    communicationConsent: false,
  },
};