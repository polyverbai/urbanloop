
import { CollectionPartner } from "../../types";
interface HeroCardProps {
  partner: CollectionPartner;
}

export default function HeroCard({
  partner,
}: HeroCardProps) {

  const statusStyles: Record<string, string> = {
    Pending:
      "bg-yellow-400 text-yellow-900",

    Approved:
      "bg-green-500 text-white",

    Rejected:
      "bg-red-500 text-white",

    "On Hold":
      "bg-orange-500 text-white",
  };

  const badgeClass =
    statusStyles[
      partner.application_status
    ] ??
    "bg-white/20 text-white";
  return (
    <section
  className="
    rounded-3xl
    bg-gradient-to-r
    from-[#72B543]
    to-[#5FA032]
    p-6
    text-white
    shadow-lg
  "
>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-sm opacity-90">
            {partner.partner_registration_number}
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            {partner.shop_name}
          </h1>

          <p className="mt-2">
            {partner.partner_type}
          </p>

          <p className="mt-4 text-sm">
            Owner : {partner.owner_name}
          </p>

        </div>

        <div className="text-left lg:text-right">

          <span
  className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${badgeClass}`}
>
  {partner.application_status}
</span>

          <p className="mt-4 text-sm">
            {partner.city}, {partner.state}
          </p>

        </div>

      </div>

    </section>
  );
}