import { NextRequest, NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { createCustomerAccount } from "@/lib/identity/createCustomerAccount";

interface ResidentialRegistrationPayload {
  residency_category: string;

  contact_person_name: string;

  mobile_number: string;

  email?: string | null;

  house_flat_number: string;

building_name: string;

street_area: string;

  landmark?: string | null;

  city: string;

  state_name: string;

  pin_code: string;

  latitude?: number | null;

  longitude?: number | null;

  google_maps_link?: string | null;

  material_categories: string[];

  pickup_frequency: string;

  pickup_day: string;

  pickup_time: string;

  communication_preferences: string[];

  referral_source?: string | null;

  referral_code?: string | null;

  additional_comments?: string | null;

  declaration_confirmed: boolean;

  terms_accepted: boolean;

  communication_consent: boolean;

  auth_user_id: string;
}

function isBlank(value: unknown) {
  return (
    value === null ||
    value === undefined ||
    String(value).trim() === ""
  );
}

export async function POST(
  request: NextRequest
) {
  try {
    console.log(
  "Residential Registration API called"
);
    const payload: ResidentialRegistrationPayload =
      await request.json();

    const {
  residency_category,

  contact_person_name,

  mobile_number,

  email,

  house_flat_number,

  building_name,

  street_area,

  landmark,

      city,

      state_name,

      pin_code,

      latitude,

      longitude,

      google_maps_link,

      material_categories,

      pickup_frequency,

      pickup_day,

      pickup_time,

      communication_preferences,

      referral_source,

      referral_code,

      additional_comments,

      declaration_confirmed,

      terms_accepted,

      communication_consent,

      auth_user_id,
    } = payload;

    /* ==========================================
       BASIC VALIDATION
    ========================================== */

    if (
  isBlank(contact_person_name) ||
  isBlank(mobile_number) ||
  isBlank(house_flat_number) ||
  isBlank(building_name) ||
  isBlank(street_area) ||
  isBlank(city) ||
  isBlank(state_name) ||
  isBlank(pin_code)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Required fields are missing.",
        },
        {
          status: 400,
        }
      );
    }

    if (!declaration_confirmed) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Declaration must be accepted.",
        },
        {
          status: 400,
        }
      );
    }

    if (!terms_accepted) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Terms & Conditions must be accepted.",
        },
        {
          status: 400,
        }
      );
    }

    if (!communication_consent) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Communication consent is required.",
        },
        {
          status: 400,
        }
      );
    }

     /* ==========================================
       DUPLICATE MOBILE CHECK
    ========================================== */

    const {
      data: existingMobile,
      error: mobileLookupError,
    } = await supabaseAdmin
      .from("residential_registrations")
      .select("id")
      .eq("mobile_number", mobile_number)
      .maybeSingle();

    if (mobileLookupError) {
      console.error(
        "Duplicate Mobile Check Error:",
        mobileLookupError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to verify mobile number.",
        },
        {
          status: 500,
        }
      );
    }

    if (existingMobile) {
      return NextResponse.json(
        {
          success: false,
          message:
            "A registration already exists with this mobile number.",
        },
        {
          status: 409,
        }
      );
    }

    /* ==========================================
       DUPLICATE EMAIL CHECK
    ========================================== */

    if (email && email.trim() !== "") {

      const {
        data: existingEmail,
        error: emailLookupError,
      } = await supabaseAdmin
        .from("residential_registrations")
        .select("id")
        .eq("email", email.trim())
        .maybeSingle();

      if (emailLookupError) {
        console.error(
          "Duplicate Email Check Error:",
          emailLookupError
        );

        return NextResponse.json(
          {
            success: false,
            message:
              "Unable to verify email address.",
          },
          {
            status: 500,
          }
        );
      }

      if (existingEmail) {
        return NextResponse.json(
          {
            success: false,
            message:
              "A registration already exists with this email address.",
          },
          {
            status: 409,
          }
        );
      }
    }

    const address = [
  house_flat_number,
  building_name,
  street_area,
]
  .filter((item) => item && item.trim() !== "")
  .join(", ");

    /* ==========================================
       CREATE REGISTRATION
    ========================================== */

    const {
      data: registration,
      error: registrationError,
    } = await supabaseAdmin
      .from("residential_registrations")
      .insert({
        residency_category,

        contact_person_name,

        mobile_number,

        email: email || null,

        address,

        landmark: landmark || null,

        city,

        state_name,

        pin_code,

        latitude: latitude ?? null,

        longitude: longitude ?? null,

        google_maps_link:
          google_maps_link || null,

        material_categories,

        pickup_frequency,

        pickup_day,

        pickup_time,

        communication_preferences,

        referral_source:
          referral_source || null,

        referral_code:
          referral_code || null,

        additional_comments:
          additional_comments || null,

        declaration_confirmed,

        terms_accepted,

        communication_consent,

        registration_status: "Active",
      })
      .select()
      .single();

    if (registrationError || !registration) {

      console.error(
        "Registration Insert Error:",
        registrationError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to create residential registration.",
        },
        {
          status: 500,
        }
      );
    }

     /* ==========================================
       GENERATE REGISTRATION NUMBER
    ========================================== */

    const registrationNumber =
      `ULR-${String(
        registration.created_at
          ? new Date(registration.created_at).getFullYear()
          : new Date().getFullYear()
      )}-${String(registration.id)
        .replace(/-/g, "")
        .substring(0, 8)
        .toUpperCase()}`;

    const {
      error: registrationUpdateError,
    } = await supabaseAdmin
      .from("residential_registrations")
      .update({
        registration_number:
          registrationNumber,
      })
      .eq("id", registration.id);

    if (registrationUpdateError) {

      console.error(
        "Registration Number Update Error:",
        registrationUpdateError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Registration created but registration number could not be generated.",
        },
        {
          status: 500,
        }
      );
    }

    /* ==========================================
       CREATE CUSTOMER ACCOUNT
    ========================================== */

    const customerAccount =
      await createCustomerAccount({
        authUserId: auth_user_id,

        customerType: "Residential",

        registrationId:
          registration.id,

        fullName:
          contact_person_name,

        mobileNumber:
          mobile_number,

        email:
          email ?? null,
      });

    if (!customerAccount.success) {

      console.error(
        "Customer Account Error:",
        customerAccount.message
      );

      return NextResponse.json(
        {
          success: false,
          message:
            customerAccount.message,
        },
        {
          status: 500,
        }
      );
    }

    /* ==========================================
       SUCCESS
    ========================================== */

    return NextResponse.json({
      success: true,

      message:
        "Residential registration completed successfully.",

      registrationId:
        registration.id,

      registrationNumber,

      customerAccount:
        customerAccount.customerAccount,
    });

  } catch (error) {

    console.error(
      "Residential Registration API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unexpected server error.",
      },
      {
        status: 500,
      }
    );
  }
}