import AdminCard from "@/components/admin/AdminCard";
import InfoRow from "@/components/admin/InfoRow";

import { CollectionPartner } from "../../types";

interface ProcessingFacilityCardProps {
  partner: CollectionPartner;
}

export default function ProcessingFacilityCard({
  partner,
}: ProcessingFacilityCardProps) {
  return (
    <AdminCard title="Processing Facility">

      <div className="space-y-5">

        <InfoRow
          label="Own Processing Facility"
          value={
            partner.has_processing_facility ? "Yes" : "No"
          }
        />

        <InfoRow
          label="Facility Name"
          value={partner.processing_facility_name}
        />

        <InfoRow
          label="Facility Address"
          value={partner.processing_facility_address}
        />

        <InfoRow
          label="Storage Capacity"
          value={partner.storage_capacity}
        />

        <InfoRow
          label="Monthly Processing Capacity"
          value={partner.monthly_processing_capacity}
        />

      </div>

    </AdminCard>
  );
}