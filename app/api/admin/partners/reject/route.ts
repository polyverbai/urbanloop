import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {

    const body = await request.json();

    const {
      registrationNumber,
      remarks,
    } = body;

    if (!remarks?.trim()) {
  return NextResponse.json(
    {
      success: false,
      message: "Remarks are mandatory while rejecting an application.",
    },
    {
      status: 400,
    }
  );
}

const { data: existingPartner, error: fetchError } =
  await supabase
    .from("collection_partner_registrations")
    .select("application_status")
    .eq(
      "partner_registration_number",
      registrationNumber
    )
    .single();

if (fetchError) {
  throw fetchError;
}

if (
  existingPartner?.application_status ===
  "Rejected"
) {
  return NextResponse.json({
    success: false,
    message:
      "This application has already been rejected.",
  });
}

    const { error } = await supabase
      .from("collection_partner_registrations")
      .update({
  application_status: "Rejected",
  updated_at: new Date().toISOString(),
})
      .eq(
        "partner_registration_number",
        registrationNumber
      );

    if (error) {
      throw error;
    }

    const { error: timelineError } = await supabase
  .from("collection_partner_timeline")
  .insert({
    partner_registration_number: registrationNumber,
    action: "Rejected",
    remarks: remarks,
    action_by: "Admin",
  });

if (timelineError) {
  throw timelineError;
}

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }
}