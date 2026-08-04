export type AccountType =
  | "residential"
  | "business"
  | "corporate"
  | "educational"
  | "hospital"
  | "collection-partner"
  | "recycler";

export interface UserAccount {
  accountType: AccountType;

  registrationNumber: string;

  displayName: string;

  mobileNumber: string;

  dashboardUrl: string;

  registrationTable: string;
}