import { supabaseAdmin } from "@/lib/supabaseAdmin";

import type {
  CreateCustomerAccountInput,
} from "./types";

export async function createCustomerAccount(
  input: CreateCustomerAccountInput
) {

  /*
   * Check whether this account already exists
   */

  const {
    data: existingAccount,
    error: existingAccountError,
  } = await supabaseAdmin
    .from("customer_accounts")
    .select("*")
    .eq("auth_user_id", input.authUserId)
    .eq("customer_type", input.customerType)
    .eq("registration_id", input.registrationId)
    .maybeSingle();

  if (existingAccountError) {
    throw existingAccountError;
  }

  /*
   * Already linked
   */

  if (existingAccount) {
    return existingAccount;
  }

  /*
   * Create new customer account
   */

  const {
    data: customerAccount,
    error: createError,
  } = await supabaseAdmin
    .from("customer_accounts")
    .insert({

      auth_user_id:
        input.authUserId,

      customer_type:
        input.customerType,

      registration_id:
        input.registrationId,

      registration_number:
        input.registrationNumber,

      full_name:
        input.fullName,

      mobile_number:
        input.mobileNumber,

      email:
        input.email,

      dashboard_url:
        input.dashboardUrl,

      account_status:
        "Active",

      mobile_verified:
        true,

      email_verified:
        false,

      is_active:
        true,

      is_default:
        false,

    })
    .select("*")
    .single();

  if (createError) {
    throw createError;
  }

  return customerAccount;

}