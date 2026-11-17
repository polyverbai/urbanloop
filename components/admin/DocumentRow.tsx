"use client";


interface DocumentRowProps {
  label: string;
  fileUrl?: string | null;
}

export default function DocumentRow({
  label,
  fileUrl,
}: DocumentRowProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

      <span className="font-medium text-slate-700">
        {label}
      </span>

      {fileUrl ? (
        <button
  type="button"
  onClick={async () => {
    try {
      const response = await fetch(
  "/api/admin/document/view",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fileUrl,
    }),
  }
);

const result = await response.json();

if (result.success) {
  window.open(result.signedUrl, "_blank");
} else {
  alert(result.message);
}
    } catch (error) {
      console.error(error);
      alert("Unable to open document.");
    }
  }}
  className="rounded-lg bg-[#72B543] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5FA032]"
>
  View
</button>
      ) : (
        <span className="text-sm text-red-500">
          Not Uploaded
        </span>
      )}

    </div>
  );
}