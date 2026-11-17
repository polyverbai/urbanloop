import AdminCard from "@/components/admin/AdminCard";
import InfoRow from "@/components/admin/InfoRow";

import { CollectionPartner } from "../../types";

interface PaymentInformationCardProps {
  partner: CollectionPartner;
}

export default function PaymentInformationCard({
  partner,
}: PaymentInformationCardProps) {
  return (
    <AdminCard title="Payment Information">

      <div className="space-y-5">

        <InfoRow
          label="Bank Name"
          value={partner.bank_name}
        />

        <InfoRow
          label="Account Holder"
          value={partner.account_holder_name}
        />

        <InfoRow
          label="Account Number"
          value={partner.account_number}
        />

        <InfoRow
          label="IFSC Code"
          value={partner.ifsc_code}
        />

        <InfoRow
          label="UPI ID"
          value={partner.upi_id}
        />

      </div>

    </AdminCard>
  );
}