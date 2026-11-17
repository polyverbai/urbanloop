import AdminCard from "@/components/admin/AdminCard";
import InfoRow from "@/components/admin/InfoRow";

import { CollectionPartner } from "../../types";

interface DeclarationCardProps {
  partner: CollectionPartner;
}

export default function DeclarationCard({
  partner,
}: DeclarationCardProps) {
  return (
    <AdminCard title="Declaration">

      <div className="space-y-5">

  <InfoRow
    label="Information Declaration"
    value={
      partner.declaration_accepted
        ? "✅ Accepted"
        : "❌ Not Accepted"
    }
  />

  <InfoRow
    label="Terms & Conditions"
    value={
      partner.terms_accepted
        ? "✅ Accepted"
        : "❌ Not Accepted"
    }
  />

  <InfoRow
    label="Communication Consent"
    value={
      partner.communication_consent
        ? "✅ Granted"
        : "❌ Not Granted"
    }
  />

</div>

    </AdminCard>
  );
}