import { supabase } from "@/lib/supabase";

export default async function uploadDocument(
  bucketName: string,
  folderName: string,
  file: File
): Promise<string> {
  try {
    // Get file extension.
    const fileExtension = file.name.split(".").pop();

    // Generate unique file name.
    const fileName = `${Date.now()}.${fileExtension}`;

    // Create storage path.
    const filePath = `${folderName}/${fileName}`;

    // Upload file.
    const { error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) {
      throw new Error(error.message);
    }

    // Return storage path.
    return filePath;
  } catch (error) {
    console.error("Document upload failed:", error);

    throw error;
  }
}