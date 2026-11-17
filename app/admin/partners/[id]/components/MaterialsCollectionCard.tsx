import AdminCard from "@/components/admin/AdminCard";
import InfoRow from "@/components/admin/InfoRow";
import TagList from "@/components/admin/TagList";

import { CollectionPartner } from "../../types";

interface MaterialsCollectionCardProps {
  partner: CollectionPartner;
}

export default function MaterialsCollectionCard({
  partner,
}: MaterialsCollectionCardProps) {
  return (
    <AdminCard title="Materials & Collection">

      <div className="space-y-6">

        <TagList
          label="Materials Handled"
          values={partner.materials_handled}
        />

        <TagList
          label="Collection Services"
          values={partner.collection_services}
        />

        <InfoRow
          label="Pickup Frequency"
          value={partner.pickup_frequency}
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