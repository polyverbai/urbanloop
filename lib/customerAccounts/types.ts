export type CustomerAccountType =
  | "Residential"
  | "Business"
  | "Corporate"
  | "Educational"
  | "Hospital"
  | "Collection Partner"
  | "Recycler";

export interface CreateCustomerAccountInput {
  authUserId: string;

  customerType: CustomerAccountType;

  registrationId: string;

  registrationNumber: string;

  fullName: string;

  mobileNumber: string;

  email: string | null;

  dashboardUrl: string;
}