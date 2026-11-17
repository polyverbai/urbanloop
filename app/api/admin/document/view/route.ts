import { NextRequest, NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(
  request: NextRequest
) {
  try {
    const { fileUrl } = await request.json();

    if (!fileUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing file URL.",
        },
        { status: 400 }
      );
    }

    const marker = "/collection-partner/";

    const index = fileUrl.indexOf(marker);

    if (index === -1) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid file URL.",
        },
        { status: 400 }
      );
    }

    const filePath = fileUrl.substring(
      index + marker.length
    );

    const { data, error } =
      await supabaseAdmin.storage
        .from("collection-partner")
        .createSignedUrl(filePath, 300);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      signedUrl: data.signedUrl,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to generate document URL.",
      },
      {
        status: 500,
      }
    );
  }
}