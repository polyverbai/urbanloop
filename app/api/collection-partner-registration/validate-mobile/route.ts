import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
    console.log("Validate Mobile API HIT");
  try {
    const { mobileNumber } = await request.json();

    const { data } = await supabase
      .from("collection_partner_registrations")
      .select("id")
      .eq("mobile_number", mobileNumber)
      .maybeSingle();

console.log("Mobile:", mobileNumber);
console.log("Supabase Result:", data);

    return NextResponse.json({
      exists: !!data,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { exists: false },
      { status: 500 }
    );
  }
}