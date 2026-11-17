"use client";

import { useState } from "react";

import AdminCard from "@/components/admin/AdminCard";
import ConfirmationDialog from "@/components/common/ConfirmationDialog";

interface VerificationDecisionCardProps {
  registrationNumber: string;
  currentStatus: string;
  onStatusChanged: () => Promise<void>;
}

export default function VerificationDecisionCard({
  registrationNumber,
  currentStatus,
  onStatusChanged,
}: VerificationDecisionCardProps) {
  const [remarks, setRemarks] = useState("");
  const [saving, setSaving] = useState(false);
  const [remarksError, setRemarksError] =
  useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState<
    "success" | "error" | "info"
  >("info");

  const isApproved =
  currentStatus === "Approved";

const isRejected =
  currentStatus === "Rejected";

const isOnHold =
  currentStatus === "On Hold";

const disableApprove =
  saving ||
  isApproved ||
  isRejected;

const disableReject =
  saving ||
  isApproved ||
  isRejected;

const disableHold =
  saving ||
  isApproved ||
  isRejected ||
  isOnHold;

  async function approvePartner() {
    try {
      setSaving(true);

      const response = await fetch(
        "/api/admin/partners/approve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            registrationNumber,
            remarks,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        setDialogTitle("Information");
        setDialogMessage(
          result.message || "Unable to approve partner."
        );
        setDialogType("info");
        setDialogOpen(true);
        return;
      }

      setDialogTitle("Success");
      setDialogMessage("Partner approved successfully.");
      setDialogType("success");
      setDialogOpen(true);

    } catch (error) {
      console.error(error);

      setDialogTitle("Error");
      setDialogMessage("Unable to approve partner.");
      setDialogType("error");
      setDialogOpen(true);

    } finally {
      setSaving(false);
    }
  }

  async function rejectPartner() {

  if (!remarks.trim()) {
    setRemarksError(true);
    return;
  }

  setRemarksError(false);

  try {
    setSaving(true);

    const response = await fetch(
      "/api/admin/partners/reject",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationNumber,
          remarks,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      setDialogTitle("Information");
      setDialogMessage(
        result.message || "Unable to reject partner."
      );
      setDialogType("info");
      setDialogOpen(true);
      return;
    }

    setDialogTitle("Success");
    setDialogMessage("Partner rejected successfully.");
    setDialogType("success");
    setDialogOpen(true);

  } catch (error) {
    console.error(error);

    setDialogTitle("Error");
    setDialogMessage("Unable to reject partner.");
    setDialogType("error");
    setDialogOpen(true);

  } finally {
    setSaving(false);
  }
}

async function holdPartner() {

  if (!remarks.trim()) {
    setRemarksError(true);
    return;
  }

  setRemarksError(false);

  try {
    setSaving(true);

    const response = await fetch(
      "/api/admin/partners/hold",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationNumber,
          remarks,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      setDialogTitle("Information");
      setDialogMessage(
        result.message ||
          "Unable to put partner on hold."
      );
      setDialogType("info");
      setDialogOpen(true);
      return;
    }

    setDialogTitle("Success");
    setDialogMessage(
      "Partner placed on hold successfully."
    );
    setDialogType("success");
    setDialogOpen(true);

  } catch (error) {
    console.error(error);

    setDialogTitle("Error");
    setDialogMessage(
      "Unable to put partner on hold."
    );
    setDialogType("error");
    setDialogOpen(true);

  } finally {
    setSaving(false);
  }
}

  return (
    <>
      <AdminCard title="Final Verification Decision">
        <div className="space-y-6">

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Registration Number
            </label>

            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
              {registrationNumber}
            </div>
          </div>

          <div>
            <label
  className={`mb-2 block text-sm font-semibold ${
    remarksError
      ? "text-red-600"
      : "text-slate-700"
  }`}
>
  Remarks
</label>

            <textarea
              rows={5}
              value={remarks}
              onChange={(e) => {
  setRemarks(e.target.value);

  if (remarksError && e.target.value.trim()) {
    setRemarksError(false);
  }
}}
              placeholder="Enter verification remarks..."
              className={`w-full rounded-lg px-4 py-3 outline-none transition

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

          <div className="flex justify-end">
            <div className="flex flex-wrap justify-end gap-3">

              <button
                onClick={approvePartner}
                disabled={disableApprove}
                className="rounded-lg bg-[#72B543] px-6 py-3 font-semibold text-white transition hover:bg-[#5FA032] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving
                  ? "Approving..."
                  : "Approve"}
              </button>

              <button
  onClick={rejectPartner}
  disabled={disableReject}
  className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
>
  {saving ? "Rejecting..." : "Reject"}
</button>

              <button
  onClick={holdPartner}
  disabled={disableHold}
  className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60"
>
  {saving ? "Putting On Hold..." : "Put On Hold"}
</button>

            </div>
          </div>

        </div>
      </AdminCard>

      <ConfirmationDialog
        open={dialogOpen}
        title={dialogTitle}
        message={dialogMessage}
        type={dialogType}
        onClose={async () => {
  setDialogOpen(false);

  if (dialogType === "success") {
    await onStatusChanged();
  }
}}
      />
    </>
  );
}