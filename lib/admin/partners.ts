import { supabase } from "@/lib/supabase";

export async function getPendingPartners() {
  const { data, error } = await supabase
    .from("collection_partner_registrations")
    .select(`
      id,
      partner_registration_number,
      partner_type,
      collection_partner_category,
      shop_name,
      owner_name,
      mobile_number,
      city,
      state,
      application_status,
      created_at
    `)
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getPartnerByRegistrationNumber(
  registrationNumber: string
) {
  const { data, error } = await supabase
    .from("collection_partner_registrations")
    .select("*")
    .eq(
      "partner_registration_number",
      registrationNumber
    )
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getAllCollectionPartners() {
  const { data, error } = await supabase
    .from("collection_partner_registrations")
    .select(`
      id,
      partner_registration_number,
      collection_partner_category,
      shop_name,
      owner_name,
      mobile_number,
      city,
      state,
      application_status,
      created_at
    `)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data ?? [];
}