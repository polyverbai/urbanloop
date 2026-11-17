"use client";

import { useEffect, useState } from "react";

import AdminCard from "@/components/admin/AdminCard";
import { formatDateTime } from "@/lib/admin/dateFormatter";
import { getPartnerTimeline } from "@/lib/admin/timeline";
import ConfirmationDialog from "@/components/common/ConfirmationDialog";
import { CollectionPartner } from "../../types";

interface VerificationTimelineCardProps {
  partner: CollectionPartner;
  onStatusChanged: () => Promise<void>;
}

interface TimelineItem {
  id: number;
  action: string;
  remarks: string | null;
  created_at: string;
}

export default function VerificationTimelineCard({
  partner,
  onStatusChanged,
}: VerificationTimelineCardProps) {
  const [timeline, setTimeline] =
  useState<TimelineItem[]>([]);

const [remarks, setRemarks] = useState("");
const [remarksError, setRemarksError] = useState(false);

const [saving, setSaving] = useState(false);

const [dialogOpen, setDialogOpen] = useState(false);
const [dialogTitle, setDialogTitle] = useState("");
const [dialogMessage, setDialogMessage] = useState("");
const [dialogType, setDialogType] = useState<
  "success" | "error" | "info"
>("info");

async function loadTimeline() {
  try {
    const data = await getPartnerTimeline(
      partner.partner_registration_number
    );

    setTimeline(data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  loadTimeline();
}, [
  partner.partner_registration_number,
  partner.application_status,
]);

async function reopenApplication() {
  if (!remarks.trim()) {
    setRemarksError(true);
    return;
  }

  setRemarksError(false);

  try {
    setSaving(true);

    const response = await fetch(
      "/api/admin/partners/reopen",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationNumber:
            partner.partner_registration_number,
          remarks,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      setDialogTitle("Information");
      setDialogMessage(
        result.message ||
          "Unable to reopen application."
      );
      setDialogType("info");
      setDialogOpen(true);
      return;
    }

    setDialogTitle("Success");
    setDialogMessage(
      "Application reopened successfully."
    );
    setDialogType("success");
    setDialogOpen(true);

    await onStatusChanged();

  } catch (error) {
    console.error(error);

    setDialogTitle("Error");
    setDialogMessage(
      "Unable to reopen application."
    );
    setDialogType("error");
    setDialogOpen(true);

  } finally {
    setSaving(false);
  }
}

  return (
    
    <AdminCard title="Verification Timeline">

      <div className="flex items-start gap-4 overflow-x-auto pb-2">

  {timeline.length === 0 ? (

    <p className="text-sm text-slate-500">
      No verification history available.
    </p>

  ) : (

    timeline.map((item, index) => (

  <div
    key={item.id}
    className="flex items-center"
  >

    {/* Timeline Entry */}

    <div className="min-w-[160px]">

      <h3 className="font-semibold text-slate-900">
        {item.action}
      </h3>

      {item.remarks && (
        <p className="mt-1 text-sm text-slate-600">
          {item.remarks}
        </p>
      )}

      <p className="mt-1 text-xs text-slate-500">
        {formatDateTime(item.created_at)}
      </p>

    </div>

    {/* Connector */}

    {index !== timeline.length - 1 && (

      <div className="mx-5 flex items-center">
  <svg
    width="50"
    height="10"
    viewBox="0 0 70 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 8H64"
      stroke="#72B543"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M58 2L68 8L58 14"
      stroke="#72B543"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

    )}

  </div>

))

  )}

</div>

<div className="mt-8 border-t border-slate-200 pt-6">

  <h3 className="text-lg font-semibold text-slate-900">
    Re-open Application
  </h3>

    <div className="mt-1">

    <label className="mb-2 block text-sm font-semibold text-slate-700">
      Remarks
    </label>

    <textarea
  rows={3}
  value={remarks}
  onChange={(e) => {
    setRemarks(e.target.value);

    if (remarksError && e.target.value.trim()) {
      setRemarksError(false);
    }
  }}
  placeholder="Enter reason for re-opening..."
  className={`w-full rounded-lg border px-4 py-3 outline-none transition
    ${
      remarksError
        ? "border-2 border-red-500 focus:border-red-500"
        : "border border-slate-300 focus:border-[#72B543]"
    }`}
/>

{remarksError && (
  <p className="mt-2 text-sm text-red-600">
    Remarks are mandatory.
  </p>
)}

  </div>

  <div className="mt-.5 flex justify-end">

    <button
  onClick={reopenApplication}
  disabled={saving}
  className="
    rounded-lg
    bg-[#72B543]
    px-6
    py-3
    font-semibold
    text-white
    transition
    hover:bg-[#5FA032]
    disabled:cursor-not-allowed
    disabled:opacity-60
  "
>
  {saving ? "Opening..." : "Open Form"}
</button>

  </div>

</div>

<ConfirmationDialog
  open={dialogOpen}
  title={dialogTitle}
  message={dialogMessage}
  type={dialogType}
  onClose={() => {
    setDialogOpen(false);
  }}
/>

    </AdminCard>
  );
}