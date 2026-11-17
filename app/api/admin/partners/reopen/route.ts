import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {

    const body = await request.json();

    const {
      registrationNumber,
      remarks,
    } = body;

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
  "Pending"
) {
  return NextResponse.json({
    success: false,
    message:
      "This application is already pending verification.",
  });
}

    const { error } = await supabase
  .from("collection_partner_registrations")
  .update({
    application_status: "Pending",
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
    action: "Re-opened",
    remarks: remarks,
    action_by: "Admin",
  });

if (timelineError) {
  throw timelineError;
}

    return NextResponse.json({
  success: true,
  message: "Application re-opened successfully.",
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