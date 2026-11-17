import AdminCard from "@/components/admin/AdminCard";
import InfoRow from "@/components/admin/InfoRow";

import { CollectionPartner } from "../../types";

interface BusinessAddressCardProps {
  partner: CollectionPartner;
}

export default function BusinessAddressCard({
  partner,
}: BusinessAddressCardProps) {
  return (
    <AdminCard title="Business Address">

      <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">

        <InfoRow
          label="Shop Number"
          value={partner.shop_number}
        />

        <InfoRow
          label="Building Name"
          value={partner.building_name}
        />

        <InfoRow
          label="Street / Area"
          value={partner.street_area}
        />

        <InfoRow
          label="Landmark"
          value={partner.landmark}
        />

        <InfoRow
          label="City"
          value={partner.city}
        />

        <InfoRow
          label="State"
          value={partner.state}
        />

        <InfoRow
          label="PIN Code"
          value={partner.pin_code}
        />

      </div>

    </AdminCard>
  );
}