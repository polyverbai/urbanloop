import { NextRequest, NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: NextRequest) {
  try {
    const {
      registrationNumber,
      status,
      remarks,
    } = await request.json();

    if (!registrationNumber || !status) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Update registration
    const { error: updateError } =
      await supabaseAdmin
        .from("collection_partner_registrations")
        .update({
          application_status: status,
          updated_at: new Date().toISOString(),
        })
        .eq(
          "partner_registration_number",
          registrationNumber
        );

    if (updateError) {
      throw updateError;
    }

    // Insert timeline
    const { error: timelineError } =
      await supabaseAdmin
        .from("collection_partner_timeline")
        .insert({
          partner_registration_number:
            registrationNumber,
          action: status,
          remarks,
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
        message: "Unable to save verification.",
      },
      {
        status: 500,
      }
    );
  }
}