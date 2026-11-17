import AdminCard from "@/components/admin/AdminCard";
import InfoRow from "@/components/admin/InfoRow";
import TagList from "@/components/admin/TagList";

import { CollectionPartner } from "../../types";

interface TransportationCardProps {
  partner: CollectionPartner;
}

export default function TransportationCard({
  partner,
}: TransportationCardProps) {
  return (
    <AdminCard title="Transportation">

      <div className="space-y-5">

        <InfoRow
          label="Own Transportation"
          value={
            partner.has_transportation ? "Yes" : "No"
          }
        />

        <TagList
          label="Vehicle Types"
          values={partner.vehicle_types}
        />

        <InfoRow
          label="Number of Vehicles"
          value={partner.number_of_vehicles}
        />

        <InfoRow
          label="Vehicle Registration Numbers"
          value={partner.vehicle_registration_numbers}
        />

      </div>

    </AdminCard>
  );
}