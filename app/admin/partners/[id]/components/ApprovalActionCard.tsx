"use client";

import { useState } from "react";

import AdminCard from "@/components/admin/AdminCard";

import { CollectionPartner } from "../../types";

interface ApprovalActionCardProps {
  partner: CollectionPartner;
  onStatusChanged: () => Promise<void>;
}

export default function ApprovalActionCard({
  partner,
  onStatusChanged,
}: ApprovalActionCardProps) {

const [remarks, setRemarks] = useState("");

async function approvePartner() {
  try {

    const response = await fetch(
      "/api/admin/partners/approve",
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

    if (result.success) {

  await onStatusChanged();

  alert("Partner Approved Successfully.");

} else {

      alert("Unable to approve partner.");

    }

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  }
}

async function holdPartner() {
  try {

    const response = await fetch(
      "/api/admin/partners/hold",
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

    if (result.success) {

      await onStatusChanged();

      alert("Partner Put on Hold Successfully.");

    } else {

      alert("Unable to put partner on Hold.");

    }

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  }
}

async function rejectPartner() {
  try {

    const response = await fetch(
      "/api/admin/partners/reject",
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

    if (result.success) {

      await onStatusChanged();

      alert("Partner Rejected Successfully.");

    } else {

      alert("Unable to reject partner.");

    }

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  }
}

  return (
    <AdminCard title="Approval Action">

      <div className="space-y-6">

        <div>

          <p className="text-sm font-medium text-slate-500">
            Current Status
          </p>

          <p className="mt-1 text-lg font-semibold text-[#72B543]">
            {partner.application_status}
          </p>

        </div>

        <div>

          <label className="block text-sm font-medium text-slate-700 mb-2">
            Verification Remarks
          </label>

          <textarea
            rows={5}
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            placeholder="Enter verification remarks..."
            className="
              w-full
              rounded-xl
              border
              border-slate-300
              p-3
              focus:border-[#72B543]
              focus:outline-none
            "
          />

        </div>

        <div className="flex flex-wrap gap-3">

          <button
  onClick={approvePartner}
  className="
    rounded-xl
    bg-green-600
    px-5
    py-2
    font-semibold
    text-white
    hover:bg-green-700
  "
>
  Approve
</button>

          <button
  onClick={holdPartner}
  className="
    rounded-xl
    bg-yellow-500
    px-5
    py-2
    font-semibold
    text-white
    hover:bg-yellow-600
  "
>
  On Hold
</button>

          <button
  onClick={rejectPartner}
  className="
    rounded-xl
    bg-red-600
    px-5
    py-2
    font-semibold
    text-white
    hover:bg-red-700
  "
>
  Reject
</button>

        </div>

      </div>

    </AdminCard>
  );
}