import AdminCard from "@/components/admin/AdminCard";
import InfoRow from "@/components/admin/InfoRow";
import TagList from "@/components/admin/TagList";

import { CollectionPartner } from "../../types";

interface CoverageAreaCardProps {
  partner: CollectionPartner;
}

export default function CoverageAreaCard({
  partner,
}: CoverageAreaCardProps) {
  return (
    <AdminCard title="Coverage Area">
      <div className="space-y-5">

        <TagList
          label="Operating Areas"
          values={partner.operating_areas}
        />

        <TagList
          label="Preferred Pickup Days"
          values={partner.preferred_pickup_days}
        />

        <InfoRow
          label="Preferred Pickup Time"
          value={partner.preferred_pickup_time}
        />

      </div>
    </AdminCard>
  );
}