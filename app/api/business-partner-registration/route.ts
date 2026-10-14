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

    console.log(body);

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
        message: "Invalid Partner Type.",
      },
      {
        status: 400,
      }
    );
}

/* =====================================================
   CHECK DUPLICATE MOBILE NUMBER
===================================================== */

const { data: existingMobile } = await supabase
  .from(tableName)
  .select("id")
  .eq(
    "mobile_number",
    body.businessInformation.mobileNumber
  )
  .maybeSingle();

if (existingMobile) {

  return NextResponse.json(
    {
      success: false,
      message:
        "This mobile number is already registered.",
    },
    {
      status: 409,
    }
  );

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