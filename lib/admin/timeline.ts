import { supabase } from "@/lib/supabase";

export async function getPartnerTimeline(
  registrationNumber: string
) {
  const { data, error } = await supabase
    .from("collection_partner_timeline")
    .select("*")
    .eq(
      "partner_registration_number",
      registrationNumber
    )
    .order("created_at", {
      ascending: true,
    });

  if (error) {
    throw error;
  }

  return data ?? [];
}