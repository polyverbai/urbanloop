import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {

    console.log("Validate GST API HIT");

    try {

        const { gstNumber } = await request.json();

        console.log("GST:", gstNumber);

        const { data, error } = await supabase
  .from("collection_partner_registrations")
  .select("id, gst_number")
  .eq("gst_number", gstNumber)
  .maybeSingle();

console.log("Supabase Data:", data);
console.log("Supabase Error:", error);

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