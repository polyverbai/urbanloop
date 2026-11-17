import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {

  console.log("Validate PAN API HIT");

  try {

    const { panNumber } = await request.json();

    console.log("PAN:", panNumber);

    const { data } = await supabase
      .from("collection_partner_registrations")
      .select("id")
      .eq("pan_number", panNumber)
      .maybeSingle();

    console.log("Supabase Result:", data);

    const response = {
    exists: !!data,
};

console.log("Sending Response:", response);

return NextResponse.json(response);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { exists: false },
      { status: 500 }
    );
  }
}