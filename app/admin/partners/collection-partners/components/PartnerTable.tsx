import StatusBadge from "./StatusBadge";
import Link from "next/link";


interface PartnerTableProps {
  partners: any[];
  loading: boolean;
}

export default function PartnerTable({
  partners,
  loading,
}: PartnerTableProps) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        Loading Collection Partners...
      </div>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-200 px-6 py-5">

        <h2 className="text-xl font-semibold text-slate-800">
          Collection Partners
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          View and manage all registered Collection Partners.
        </p>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                Registration No
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                Shop Name
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
  Owner
</th>

<th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
  Category
</th>

<th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
  Mobile
</th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                City
              </th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
  Registered On
</th>

<th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
  Status
</th>

              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {partners.map((partner) => (

              <tr
                key={partner.id}
                className="border-t border-slate-200 hover:bg-slate-50"
              >

                <td className="px-6 py-3 text-sm text-slate-700">
                  {partner.partner_registration_number}
                </td>

                <td className="px-6 py-3 text-sm text-slate-700">
                  {partner.shop_name}
                </td>

                <td className="px-6 py-3 text-sm text-slate-700">
  {partner.owner_name}
</td>

<td className="px-6 py-3 text-sm text-slate-700">
  {partner.collection_partner_category}
</td>

<td className="px-6 py-3 text-sm text-slate-700">
  {partner.mobile_number}
</td>

                <td className="px-6 py-3 text-sm text-slate-700">
                  {partner.city}
                </td>

                <td className="px-6 py-3 text-sm text-slate-700">
  {new Date(partner.created_at).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  )}
</td>

<td className="px-6 py-3 text-sm text-slate-700">
  <StatusBadge
    status={partner.application_status}
  />
</td>

                <td className="px-6 py-3 text-sm text-slate-700">

                  <Link
                    href={`/admin/partners/${partner.partner_registration_number}`}
                    className="
  rounded-lg
  bg-[#72B543]
  px-3
  py-1.5
  text-sm
  font-medium
  text-white
  hover:bg-[#5FA032]
"
                  >
                    View
                  </Link>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}