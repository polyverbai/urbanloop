import { supabaseAdmin } from "@/lib/supabaseAdmin";

/* =====================================================
   TYPES
===================================================== */

export type CustomerType =
  | "Residential"
  | "Business"
  | "Corporate"
  | "Educational"
  | "Hospital";

export interface CreateCustomerAccountInput {
  authUserId: string;

  customerType: CustomerType;

  registrationId: string;

  fullName: string;

  mobileNumber: string;

  email?: string | null;
}

export interface CustomerAccountSummary {
  id: string;

  customerId: string;

  customerType: CustomerType;

  registrationId: string;
}

export interface CreateCustomerAccountResult {
  success: boolean;

  created: boolean;

  existing: boolean;

  customerAccount?: CustomerAccountSummary;

  message: string;
}

/* =====================================================
   HELPER
===================================================== */

function isBlank(
  value: string | null | undefined
) {
  return !value || value.trim() === "";
}

/* =====================================================
   CREATE CUSTOMER ACCOUNT
===================================================== */

export async function createCustomerAccount(
  input: CreateCustomerAccountInput
): Promise<CreateCustomerAccountResult> {

  const {
    authUserId,
    customerType,
    registrationId,
    fullName,
    mobileNumber,
    email,
  } = input;

  /* =====================================================
     VALIDATION
  ===================================================== */

  if (isBlank(authUserId)) {
    return {
      success: false,
      created: false,
      existing: false,
      message: "Authentication User ID is required.",
    };
  }

  if (isBlank(registrationId)) {
    return {
      success: false,
      created: false,
      existing: false,
      message: "Registration ID is required.",
    };
  }

  if (isBlank(fullName)) {
    return {
      success: false,
      created: false,
      existing: false,
      message: "Full Name is required.",
    };
  }

  if (isBlank(mobileNumber)) {
    return {
      success: false,
      created: false,
      existing: false,
      message: "Mobile Number is required.",
    };
  }

  /* =====================================================
     CHECK EXISTING CUSTOMER ACCOUNT
  ===================================================== */

  const {
    data: existingCustomer,
    error: existingCustomerError,
  } = await supabaseAdmin
    .from("customer_accounts")
    .select(`
      id,
      customer_id,
      customer_type,
      registration_id
    `)
    .eq("auth_user_id", authUserId)
    .maybeSingle();

  if (existingCustomerError) {
    console.error(
      "Existing Customer Lookup Error:",
      existingCustomerError
    );

    return {
      success: false,
      created: false,
      existing: false,
      message:
        "Unable to verify the customer account.",
    };
  }

  if (existingCustomer) {
    return {
      success: true,
      created: false,
      existing: true,

      customerAccount: {
        id: existingCustomer.id,

        customerId:
          existingCustomer.customer_id,

        customerType:
          existingCustomer.customer_type as CustomerType,

        registrationId:
          existingCustomer.registration_id,
      },

      message:
        "Customer account already exists.",
    };
  }

  /* =====================================================
     CREATE CUSTOMER ACCOUNT
  ===================================================== */

  const {
    data: customerAccount,
    error: createCustomerError,
  } = await supabaseAdmin
    .from("customer_accounts")
    .insert({
      auth_user_id: authUserId,

      customer_type: customerType,

      registration_id: registrationId,

      full_name: fullName.trim(),

      mobile_number: mobileNumber.trim(),

      email:
        email?.trim() || null,

      account_status: "Active",

      mobile_verified: true,

      email_verified: false,

      is_active: true,
    })
    .select(`
      id,
      customer_id,
      customer_type,
      registration_id
    `)
    .single();

      /* =====================================================
     INSERT ERROR
  ===================================================== */

  if (createCustomerError || !customerAccount) {
    console.error(
      "Create Customer Account Error:",
      createCustomerError
    );

    return {
      success: false,
      created: false,
      existing: false,
      message:
        "Unable to create the UrbanLoop customer account.",
    };
  }

  /* =====================================================
     SUCCESS
  ===================================================== */

  return {
    success: true,

    created: true,

    existing: false,

    customerAccount: {
      id: customerAccount.id,

      customerId:
        customerAccount.customer_id,

      customerType:
        customerAccount.customer_type as CustomerType,

      registrationId:
        customerAccount.registration_id,
    },

    message:
      "Customer account created successfully.",
  };

}