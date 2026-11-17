import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { field, value } = await request.json();

    if (!field || !value) {
      return NextResponse.json(
        {
          success: false,
          message: "Field and value are required.",
        },
        {
          status: 400,
        }
      );
    }

    const columnMap: Record<string, string> = {
      mobileNumber: "mobile_number",
      panNumber: "pan_number",
      gstNumber: "gst_number",
    };

    const column = columnMap[field];

    if (!column) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid field.",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await supabase
      .from("collection_partner_registrations")
      .select("partner_registration_number")
      .eq(column, value)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      exists: !!data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        exists: false,
      },
      {
        status: 500,
      }
    );
  }
}