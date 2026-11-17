import AdminCard from "@/components/admin/AdminCard";
import InfoRow from "@/components/admin/InfoRow";

import { CollectionPartner } from "../../types";

interface ContactInformationCardProps {
  partner: CollectionPartner;
}

export default function ContactInformationCard({
  partner,
}: ContactInformationCardProps) {
  return (
    <AdminCard title="Contact Information">

      <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">

        <InfoRow
          label="Mobile Number"
          value={partner.mobile_number}
        />

        <InfoRow
          label="Alternate Mobile Number"
          value={partner.alternate_mobile_number}
        />

        <InfoRow
          label="Email Address"
          value={partner.email}
        />

      </div>

    </AdminCard>
  );
}