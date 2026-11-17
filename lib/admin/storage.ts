import { supabase } from "@/lib/supabase";

export async function getSignedDocumentUrl(fileUrl: string) {
  console.log("Stored URL:", fileUrl);

  const filePath = fileUrl.split("/collection-partner/")[1];

  console.log("Extracted Path:", filePath);

  const { data, error } = await supabase.storage
    .from("collection-partner")
    .createSignedUrl(filePath, 300);

  console.log("Supabase Response:", data);
  console.log("Supabase Error:", error);

  if (error) {
    throw error;
  }

  return data.signedUrl;
}