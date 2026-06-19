"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AddDocumentFormProps {
  projectId: string;
  onSuccess: () => void;
}

export default function AddDocumentForm({
  projectId,
  onSuccess,
}: AddDocumentFormProps) {
  const [file, setFile] = useState<File | null>(
    null
  );
  const [uploading, setUploading] =
    useState(false);

  async function handleUpload(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    setUploading(true);

    const filePath = `${projectId}/${Date.now()}-${
      file.name
    }`;

    const { error: uploadError } =
      await supabase.storage
        .from("project-documents")
        .upload(filePath, file);

    if (uploadError) {
      alert(uploadError.message);
      setUploading(false);
      return;
    }

    const { error: dbError } =
      await supabase
        .from("documents")
        .insert([
          {
            project_id: projectId,
            file_name: file.name,
            file_path: filePath,
            file_size: file.size,
          },
        ]);

    if (dbError) {
      alert(dbError.message);
      setUploading(false);
      return;
    }

    setUploading(false);
    onSuccess();
  }

  return (
    <form
      onSubmit={handleUpload}
      className="bg-white border rounded-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-4">
        Upload Document
      </h3>

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] || null
          )
        }
        className="w-full border rounded-lg p-3"
      />

      <button
        type="submit"
        disabled={uploading}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
      >
        {uploading
          ? "Uploading..."
          : "Upload"}
      </button>
    </form>
  );
}