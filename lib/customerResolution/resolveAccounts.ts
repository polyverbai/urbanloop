import { supabase } from "@/lib/supabase";

import type {
  UserAccount,
} from "./types";

export async function resolveAccounts(
  mobileNumber: string
): Promise<UserAccount[]> {

  const accounts: UserAccount[] = [];

  /*
   * Residential
   */

  const {
    data: residential,
  } = await supabase
    .from("residential_registrations")
    .select(`
      full_name,
      mobile_number,
      registration_number
    `)
    .eq("mobile_number", mobileNumber)
    .maybeSingle();

  if (residential) {

    accounts.push({
      accountType: "residential",

      registrationNumber:
        residential.registration_number,

      displayName:
        residential.full_name,

      mobileNumber:
        residential.mobile_number,

      dashboardUrl:
        "/dashboard/residential",

      registrationTable:
        "residential_registrations",
    });

  }

  /*
   * Business
   */

  const {
    data: business,
  } = await supabase
    .from("business_registrations")
    .select(`
      full_name,
      mobile_number,
      registration_number
    `)
    .eq("mobile_number", mobileNumber)
    .maybeSingle();

  if (business) {

    accounts.push({
      accountType: "business",

      registrationNumber:
        business.registration_number,

      displayName:
        business.full_name,

      mobileNumber:
        business.mobile_number,

      dashboardUrl:
        "/dashboard/business",

      registrationTable:
        "business_registrations",
    });

  }

  return accounts;

}