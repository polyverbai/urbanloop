import AdminCard from "@/components/admin/AdminCard";
import { CollectionPartner } from "../../types";

interface BusinessInformationCardProps {
  partner: CollectionPartner;
}

export default function BusinessInformationCard({
  partner,
}: BusinessInformationCardProps) {
  return (
    <AdminCard title="Business Information">

      <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">

        <InfoRow
          label="Registration Number"
          value={partner.partner_registration_number}
        />

        <InfoRow
          label="Partner Type"
          value={partner.partner_type}
        />

        <InfoRow
          label="Business Category"
          value={partner.collection_partner_category}
        />

        <InfoRow
          label="Business Name"
          value={partner.shop_name}
        />

        <InfoRow
          label="Owner Name"
          value={partner.owner_name}
        />

        <InfoRow
          label="Years in Business"
          value={partner.years_in_business}
        />

        <InfoRow
          label="Employees"
          value={partner.number_of_employees}
        />

        <InfoRow
          label="Application Status"
          value={partner.application_status}
        />

      </div>

    </AdminCard>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string | number | boolean | null | undefined;
}) {
  return (
    <div>

      <p className="text-sm font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-base font-semibold text-slate-900">
        {value || "-"}
      </p>

    </div>
  );
}