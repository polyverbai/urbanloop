import { NextRequest, NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

type CustomerType =
  | "Residential"
  | "Business"
  | "Corporate"
  | "Educational"
  | "Hospital";

type RegistrationMatch = {
  customerType: CustomerType;
  registrationId: string;
  fullName: string;
  mobileNumber: string;
  email: string | null;
};

/* =====================================================
   NORMALIZE MOBILE NUMBER
===================================================== */

function normalizeMobileNumber(
  value: string | null | undefined
) {
  if (!value) {
    return null;
  }

  const digits = value.replace(/\D/g, "");

  if (digits.length < 10) {
    return null;
  }

  return digits.slice(-10);
}

/* =====================================================
   POST
===================================================== */

export async function POST(
  request: NextRequest
) {
  try {
    /* =====================================================
       READ AUTHORIZATION HEADER
    ===================================================== */

    const authorization =
      request.headers.get("authorization");

    if (
      !authorization ||
      !authorization.startsWith("Bearer ")
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Authentication token is missing.",
        },
        { status: 401 }
      );
    }

    const accessToken =
      authorization.replace("Bearer ", "").trim();

    if (!accessToken) {
      return NextResponse.json(
        {
          success: false,
          message: "Authentication token is missing.",
        },
        { status: 401 }
      );
    }

    /* =====================================================
       VERIFY AUTHENTICATED SUPABASE USER
    ===================================================== */

    const {
      data: { user },
      error: userError,
    } = await supabaseAdmin.auth.getUser(
      accessToken
    );

    if (userError || !user) {
      console.error(
        "Resolve Customer Auth Error:",
        userError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Your login session could not be verified.",
        },
        { status: 401 }
      );
    }

    /* =====================================================
       FIND EXISTING CUSTOMER ACCOUNT
    ===================================================== */

    const {
  data: existingCustomerAccounts,
  error: existingCustomerError,
} = await supabaseAdmin
  .from("customer_accounts")
  .select("*")
  .eq("auth_user_id", user.id);

    if (existingCustomerError) {
      console.error(
        "Existing Customer Lookup Error:",
        existingCustomerError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to retrieve the customer account.",
        },
        { status: 500 }
      );
    }

    if (
  existingCustomerAccounts &&
  existingCustomerAccounts.length > 0
) {

  /*
   * One Existing Account
   */

  if (existingCustomerAccounts.length === 1) {

    return NextResponse.json(
      {
        success: true,
        accountFound: true,
        accountCreated: false,
        resolution: "existing_account",
        user: {
          id: user.id,
          phone: user.phone ?? null,
          email: user.email ?? null,
        },
        customerAccount:
          existingCustomerAccounts[0],
      },
      { status: 200 }
    );

  }

  /*
   * Multiple Existing Accounts
   */

  return NextResponse.json(
    {
      success: true,
      accountFound: true,
      accountCreated: false,
      resolution:
        "multiple_existing_accounts",
      user: {
        id: user.id,
        phone: user.phone ?? null,
        email: user.email ?? null,
      },
      customerAccounts:
        existingCustomerAccounts,
    },
    { status: 200 }
  );

}

    /* =====================================================
       GET VERIFIED MOBILE NUMBER
    ===================================================== */

    const mobileNumber =
      normalizeMobileNumber(user.phone);

    if (!mobileNumber) {
      return NextResponse.json(
        {
          success: true,
          accountFound: false,
          accountCreated: false,
          resolution: "no_mobile_number",
          message:
            "No verified mobile number is available for this login.",
          customerAccount: null,
        },
        { status: 200 }
      );
    }

    /* =====================================================
       SEARCH REGISTRATION TABLES
    ===================================================== */

    const matches: RegistrationMatch[] = [];

    /*
      We search using the last 10 digits because existing
      registration records may contain:
        9880123537
        +919880123537
        91 9880123537

      Therefore we retrieve candidate rows and normalize
      before comparing.
    */

    const registrationSources = [
      {
        customerType:
          "Residential" as CustomerType,
        table:
          "residential_registrations",
        nameColumn:
          "contact_person_name",
      },
      {
        customerType:
          "Business" as CustomerType,
        table:
          "business_registrations",
        nameColumn:
          "full_name",
      },
      {
        customerType:
          "Corporate" as CustomerType,
        table:
          "corporate_registrations",
        nameColumn:
          "contact_person_name",
      },
      {
        customerType:
          "Educational" as CustomerType,
        table:
          "educational_registrations",
        nameColumn:
          "contact_person_name",
      },
      {
        customerType:
          "Hospital" as CustomerType,
        table:
          "hospital_registrations",
        nameColumn:
          "contact_person_name",
      },
    ];

    for (const source of registrationSources) {
      const {
  data: registrations,
  error: registrationError,
} = await supabaseAdmin
  .from(source.table)
  .select("*");

      if (registrationError) {
        console.error(
          `Registration Lookup Error (${source.table}):`,
          registrationError
        );

        return NextResponse.json(
          {
            success: false,
            message:
              "Unable to check UrbanLoop registrations.",
          },
          { status: 500 }
        );
      }

      for (const registration of
        registrations ?? []) {
        const registrationMobile =
          normalizeMobileNumber(
            registration.mobile_number
          );

        if (
          registrationMobile !== mobileNumber
        ) {
          continue;
        }

        const nameValue =
          registration[
            source.nameColumn as keyof typeof registration
          ];

        matches.push({
          customerType:
            source.customerType,

          registrationId:
            registration.id,

          fullName:
            typeof nameValue === "string"
              ? nameValue
              : "",

          mobileNumber:
            registration.mobile_number,

          email:
            registration.email ?? null,
        });
      }
    }

    /* =====================================================
       NO REGISTRATION MATCH
    ===================================================== */

    if (matches.length === 0) {
      return NextResponse.json(
        {
          success: true,
          accountFound: false,
          accountCreated: false,
          resolution:
            "registration_required",
          message:
            "No UrbanLoop registration was found for this mobile number.",
          customerAccount: null,
        },
        { status: 200 }
      );
    }

    /* =====================================================
       MULTIPLE REGISTRATION MATCHES
    ===================================================== */

    if (matches.length > 1) {
      return NextResponse.json(
        {
          success: true,
          accountFound: false,
          accountCreated: false,
          resolution:
            "multiple_registrations",
          message:
            "Multiple UrbanLoop registrations are associated with this mobile number.",
          registrations: matches.map(
            (match) => ({
              customerType:
                match.customerType,
              registrationId:
                match.registrationId,
            })
          ),
          customerAccount: null,
        },
        { status: 200 }
      );
    }

    /* =====================================================
       EXACTLY ONE REGISTRATION MATCH
    ===================================================== */

    const registration = matches[0];

    /* =====================================================
       CREATE CUSTOMER ACCOUNT
    ===================================================== */

    const {
      data: customerAccount,
      error: createAccountError,
    } = await supabaseAdmin
      .from("customer_accounts")
      .insert({
        auth_user_id: user.id,

        customer_type:
          registration.customerType,

        registration_id:
          registration.registrationId,

        full_name:
          registration.fullName,

        mobile_number:
          registration.mobileNumber,

        email:
          registration.email,

        account_status: "Active",

        mobile_verified: true,

        email_verified: false,

        is_active: true,
      })
      .select("*")
      .single();

    if (createAccountError) {
      console.error(
        "Customer Account Creation Error:",
        createAccountError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Your registration was found, but the customer account could not be created.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       ACCOUNT CREATED SUCCESSFULLY
    ===================================================== */

    return NextResponse.json(
      {
        success: true,
        accountFound: true,
        accountCreated: true,
        resolution:
          "account_created",
        user: {
          id: user.id,
          phone: user.phone ?? null,
          email: user.email ?? null,
        },
        customerAccount,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Resolve Customer Unexpected Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while resolving the customer account.",
      },
      { status: 500 }
    );
  }
}