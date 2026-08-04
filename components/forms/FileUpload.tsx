"use client";

import React, {
  useRef,
  useState,
} from "react";

interface FileUploadFieldProps {
  label: string;
  name: string;
  file: File | null;
  onChange: (file: File | null) => void;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  accept?: string;
  maxSizeMB?: number;
}

export default function FileUploadField({
  label,
  name,
  file,
  onChange,
  required = false,
  error,
  disabled = false,
  accept = ".pdf,.jpg,.jpeg,.png",
  maxSizeMB = 5,
}: FileUploadFieldProps) {

  const inputRef = useRef<HTMLInputElement>(null);

const [
  fileValidationError,
  setFileValidationError,
] = useState("");

  const handleFile = (selectedFile: File | null) => {
  setFileValidationError("");

  if (!selectedFile) {
    onChange(null);
    return;
  }

  /* =====================================================
     FILE FORMAT VALIDATION
  ===================================================== */

  const allowedMimeTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
  ];

  const allowedExtensions = [
    ".pdf",
    ".jpg",
    ".jpeg",
    ".png",
  ];

  const fileName =
    selectedFile.name.toLowerCase();

  const hasValidExtension =
    allowedExtensions.some((extension) =>
      fileName.endsWith(extension)
    );

  const hasValidMimeType =
    allowedMimeTypes.includes(
      selectedFile.type
    );

  if (
    !hasValidExtension ||
    !hasValidMimeType
  ) {
    setFileValidationError(
      "Invalid file format. Please upload a PDF, JPG, JPEG, or PNG file."
    );

    onChange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    return;
  }


  /* =====================================================
     FILE SIZE VALIDATION
  ===================================================== */

  if (
    selectedFile.size >
    maxSizeMB * 1024 * 1024
  ) {
    setFileValidationError(
      `File size exceeds the ${maxSizeMB} MB limit. Please upload a smaller file.`
    );

    onChange(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    return;
  }


  /* =====================================================
     VALID FILE
  ===================================================== */

  setFileValidationError("");

  onChange(selectedFile);
};

  return (
    <div className="space-y-2">

      <label className="block text-sm font-semibold text-gray-700">
        {label}
        {required && (
          <span className="text-red-500 ml-1">*</span>
        )}
      </label>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept={accept}
        disabled={disabled}
        onChange={(e) =>
          handleFile(e.target.files?.[0] ?? null)
        }
      />

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFile(e.dataTransfer.files?.[0] ?? null);
        }}
        className={`
          border-2 border-dashed rounded-xl
          p-8
          text-center
          cursor-pointer
          transition-all
          duration-200

          ${
  error || fileValidationError
    ? "border-red-400 bg-red-50"
    : "border-gray-300 hover:border-green-500 hover:bg-green-50"
}

          ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : ""
          }
        `}
      >

        {!file ? (
          <>
            <div className="text-5xl mb-4">
              📄
            </div>

            <p className="font-semibold text-gray-700">
              Click to Upload
            </p>

            <p className="text-sm text-gray-500 mt-1">
              or Drag & Drop
            </p>

            <p className="text-xs text-gray-400 mt-3">
              PDF, JPG, JPEG, PNG
            </p>

            <p className="text-xs text-gray-400">
              Maximum {maxSizeMB} MB
            </p>
          </>
        ) : (
          <>
            <div className="text-5xl mb-4">
              ✅
            </div>

            <p className="font-semibold text-green-700">
              File Uploaded Successfully
            </p>

            <p className="mt-3 break-all text-gray-700">
              {file.name}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>

            <button
              type="button"
              className="mt-5 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-600 hover:bg-red-200"
              onClick={(e) => {
  e.stopPropagation();

  setFileValidationError("");
  onChange(null);

  if (inputRef.current) {
    inputRef.current.value = "";
  }
}}
            >
              Remove File
            </button>
          </>
        )}

      </div>

      {fileValidationError && (
  <p className="text-sm font-medium text-red-600">
    {fileValidationError}
  </p>
)}

{!fileValidationError && error && (
  <p className="text-sm text-red-600">
    {error}
  </p>
)}

    </div>
  );
}