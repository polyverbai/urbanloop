import { NextRequest, NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { createCustomerAccount } from "@/lib/identity/createCustomerAccount";

interface BusinessRegistrationPayload {
  full_name: string;

  mobile_number: string;

  email?: string | null;

  alternate_mobile?: string | null;

  shop_number: string;

  building_name: string;

  street_area: string;

  landmark?: string | null;

  city: string;

  state_name: string;

  pin_code: string;

  business_profile_type: string;

  outlet_count: string;

  monthly_recyclables: string;

  storage_space_available: string;

  material_categories: string[];

  required_services: string[];

  collection_frequency: string;

  collection_day: string;

  collection_time: string;

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
      "Business Registration API called"
    );

    const payload: BusinessRegistrationPayload =
      await request.json();

    const {

      full_name,

      mobile_number,

      email,

      alternate_mobile,

      shop_number,

      building_name,

      street_area,

      landmark,

      city,

      state_name,

      pin_code,

      business_profile_type,

      outlet_count,

      monthly_recyclables,

      storage_space_available,

      material_categories,

      required_services,

      collection_frequency,

      collection_day,

      collection_time,

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
  isBlank(full_name) ||
  isBlank(mobile_number) ||
  isBlank(shop_number) ||
  isBlank(building_name) ||
  isBlank(street_area) ||
  isBlank(city) ||
  isBlank(state_name) ||
  isBlank(pin_code) ||
  isBlank(business_profile_type) ||
  isBlank(outlet_count) ||
  isBlank(monthly_recyclables) ||
  isBlank(storage_space_available)
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
  .from("business_registrations")
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

    field: "Mobile Number",

    value: mobile_number,
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
    .from("business_registrations")
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

    field: "Email Address",

    value: email,
  },
  {
    status: 409,
  }
);
  }
}

/* ==========================================
   CREATE REGISTRATION
========================================== */

const {
  data: registration,
  error: registrationError,
} = await supabaseAdmin
  .from("business_registrations")
  .insert({
  full_name,

  mobile_number,

  email: email || null,

  alternate_mobile:
    alternate_mobile || null,

  shop_number,

  building_name,

  street_area,

  landmark:
    landmark || null,

  city,

  state_name,

  pin_code,

    business_profile_type,

    outlet_count,

    monthly_recyclables,

    storage_space_available,

    material_categories,

    required_services,

    collection_frequency,

    collection_day,

    collection_time,

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

  })
  .select()
  .single();

if (registrationError || !registration) {

  console.error(
    "Business Registration Insert Error:",
    registrationError
  );

  return NextResponse.json(
    {
      success: false,
      message:
        "Unable to create business registration.",
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
  `ULB-${String(
    registration.created_at
      ? new Date(
          registration.created_at
        ).getFullYear()
      : new Date().getFullYear()
  )}-${String(registration.id)
    .replace(/-/g, "")
    .substring(0, 8)
    .toUpperCase()}`;

const {
  error: registrationUpdateError,
} = await supabaseAdmin
  .from("business_registrations")
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

    customerType: "Business",

    registrationId:
      registration.id,

    fullName:
      full_name,

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
    "Business registration completed successfully.",

  registrationId:
    registration.id,

  registrationNumber,

  customerAccount:
    customerAccount.customerAccount,
});

  } catch (error) {

    console.error(
      "Business Registration API Error:",
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

