import {
  NextRequest,
  NextResponse,
} from "next/server";

import { supabase } from "@/lib/supabase";
import generateRegistrationNumber from "@/lib/generateRegistrationNumber";

export async function POST(
  request: NextRequest
) {
  try {

    const body = await request.json();

    console.log(
      "Business Partner Pre-Registration Request"
    );

    console.log(
  JSON.stringify(body, null, 2)
);

/* =====================================================
   DETERMINE PARTNER TYPE
===================================================== */

let tableName = "";

let registrationPrefix = "";

switch (body.businessInformation.partnerType) {

  case "Collection Partner":

    tableName =
      "collection_partner_registrations";

    registrationPrefix = "CP";

    break;

  case "Transportation Partner":

    tableName =
      "transport_partner_registrations";

    registrationPrefix = "TP";

    break;

  case "Recycler Partner":

    tableName =
      "recycler_partner_registrations";

    registrationPrefix = "RP";

    break;

  default:

    return NextResponse.json(
  {
    success: false,
    duplicateType: "mobile",
    message: "This mobile number is already registered.",
  },
  {
    status: 409,
  }
);
}

/* =====================================================
   CHECK DUPLICATE MOBILE NUMBER
===================================================== */

const tables = [
  "collection_partner_registrations",
  "transport_partner_registrations",
  "recycler_partner_registrations",
];

for (const table of tables) {

  const { data } = await supabase
    .from(table)
    .select("id")
    .eq(
      "mobile_number",
      body.businessInformation.mobileNumber
    )
    .maybeSingle();

  if (data) {

    return NextResponse.json(
  {
    success: false,
    duplicateType: "mobile",
    message: "This mobile number is already registered.",
  },
  {
    status: 409,
  }
);

  }

}

/* =====================================================
   GENERATE REGISTRATION NUMBER
===================================================== */

const {
  count,
  error: countError,
} = await supabase
  .from(tableName)
  .select("*", {
    count: "exact",
    head: true,
  });

if (countError) {
  throw countError;
}

const registrationNumber =
  generateRegistrationNumber(
    registrationPrefix,
    (count ?? 0) + 1
  );

console.log(
  "Registration Number:",
  registrationNumber
);

console.log("Saving into table:", tableName);

const { error: insertError } = await supabase
  .from(tableName)
  .insert({
    partner_registration_number: registrationNumber,

    partner_type:
  body.businessInformation.partnerType,

    shop_name:
      body.businessInformation.businessName,

    owner_name:
      body.businessInformation.ownerName,

    mobile_number:
      body.businessInformation.mobileNumber,

    email:
      body.businessInformation.email,

    shop_number:
      body.businessAddress.shopNumber,

    building_name:
      body.businessAddress.buildingName,

    street_area:
      body.businessAddress.streetArea,

    landmark:
      body.businessAddress.landmark,

    city:
      body.businessAddress.city,

    state:
      body.businessAddress.state,

    pin_code:
      body.businessAddress.pinCode,

    pan_available:
      body.businessRegistration.panAvailable === "Yes",

    pan_number:
      body.businessRegistration.panNumber,

    gst_available:
      body.businessRegistration.gstAvailable === "Yes",

    gst_number:
      body.businessRegistration.gstNumber,

    trade_license_available:
      body.businessRegistration.tradeLicenseAvailable === "Yes",

    trade_license_number:
      body.businessRegistration.tradeLicenseNumber,

    declaration_accepted:
      body.declaration.declarationAccepted,

    terms_accepted:
      body.declaration.termsAccepted,

    communication_consent:
      body.declaration.communicationConsent,

    application_status:
      "Pending Basic Verification",

    pre_registration_completed: true,

    onboarding_completed: false,
  });


  console.log("Insert completed.");
console.log(insertError);

if (insertError) {
  console.error("Insert Error:", insertError);

  return NextResponse.json(
    {
      success: false,
      message: "Failed to save registration.",
      error: insertError.message,
    },
    {
      status: 500,
    }
  );
}

return NextResponse.json(
  {
    success: true,
    message: "Business Partner Registration successful.",
    registrationNumber,
  },
  {
    status: 200,
  }
);


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );

  }
}