import { NextRequest, NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

/* =====================================================
   GET RESIDENTIAL DASHBOARD
===================================================== */

export async function GET(
  request: NextRequest
) {
  try {

    /* =====================================================
       AUTHORIZATION HEADER
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
      authorization.replace(
        "Bearer ",
        ""
      ).trim();

    /* =====================================================
       VERIFY AUTH USER
    ===================================================== */

    const {
      data: { user },
      error: userError,
    } =
      await supabaseAdmin.auth.getUser(
        accessToken
      );

    if (userError || !user) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to verify your login session.",
        },
        { status: 401 }
      );
    }

    /* =====================================================
       CUSTOMER ACCOUNT
    ===================================================== */

    const {
      data: customerAccount,
      error: customerError,
    } =
      await supabaseAdmin
        .from("customer_accounts")
        .select("*")
        .eq(
          "auth_user_id",
          user.id
        )
        .eq(
          "customer_type",
          "Residential"
        )
        .maybeSingle();

    if (customerError) {
      console.error(customerError);

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to retrieve customer account.",
        },
        { status: 500 }
      );
    }

    if (!customerAccount) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Residential customer account not found.",
        },
        { status: 404 }
      );
    }

    /* =====================================================
       RESIDENTIAL REGISTRATION
    ===================================================== */

    const {
      data: registration,
      error: registrationError,
    } =
      await supabaseAdmin
        .from(
          "residential_registrations"
        )
        .select("*")
        .eq(
          "id",
          customerAccount.registration_id
        )
        .maybeSingle();

    if (registrationError) {
      console.error(
        registrationError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to retrieve residential registration.",
        },
        { status: 500 }
      );
    }

    if (!registration) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Residential registration not found.",
        },
        { status: 404 }
      );
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,

      customer: {

        customerId:
          customerAccount.customer_id,

        customerType:
          customerAccount.customer_type,

        fullName:
          customerAccount.full_name,

        mobileNumber:
          customerAccount.mobile_number,

        email:
          customerAccount.email,

        accountStatus:
          customerAccount.account_status,

      },

      registration: {

        registrationId:
          registration.id,

        registrationNumber:
          registration.registration_number,

        registrationStatus:
          registration.registration_status,

        residencyCategory:
          registration.residency_category,

        address:
          registration.address,

        city:
          registration.city,

        state:
          registration.state_name,

        pinCode:
          registration.pin_code,

      },

    });

  } catch (error) {

    console.error(
      "Residential Dashboard API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while loading the Residential Dashboard.",
      },
      { status: 500 }
    );

  }

}