"use client";

import { useEffect, useState } from "react";
import { getPendingPartners } from "@/lib/admin/partners";
import Link from "next/link";

export default function PendingBasicVerificationPage() {

    const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    async function loadPartners() {
      try {
        const data = await getPendingPartners();
        setPartners(data);
      } catch (error) {
        console.error("Failed to load partners:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPartners();
  }, []);

 return (
 <main className="min-h-screen">

    {/* Hero Section */}

    <section className="py-16">

  <div className="w-full px-8 xl:px-10 2xl:px-12">

    <section
      className="
        rounded-3xl
        bg-gradient-to-r
        from-[#72B543]
        to-[#5FA032]
        p-5
        text-white
        shadow-lg
      "
    >

      <h1 className="text-3xl font-bold">
        Pending Basic Verification
      </h1>

      <p className="mt-2 text-sm">
        Review newly registered partners awaiting
        basic verification.
      </p>

    </section>

    {/* Content */}

    <section className="mt-8">

      <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm">

        <h2 className="text-xl font-bold text-slate-900">
          Partner Verification Queue
        </h2>

        {loading ? (
  <p className="mt-2 text-slate-600">
    Loading partner registrations...
  </p>
) : (
  <p className="mt-2 text-slate-600">
    {partners.length} partner registration(s) found.
  </p>
)}

{!loading && (
  <div className="mt-6 overflow-x-auto">

    <table className="min-w-full border border-slate-200 rounded-xl overflow-hidden">

      <thead className="bg-[#72B543] text-white">

        <tr>

          <th className="px-4 py-3 text-left">Registration No</th>

          <th className="px-4 py-3 text-left">Partner Type</th>

          <th className="px-4 py-3 text-left">Business Name</th>

          <th className="px-4 py-3 text-left">Owner</th>

          <th className="px-4 py-3 text-left">Mobile</th>

          <th className="px-4 py-3 text-left">City</th>

          <th className="px-4 py-3 text-left">Status</th>

          <th className="px-4 py-3 text-center">Action</th>

        </tr>

      </thead>

      <tbody>

  {partners.map((partner) => (

    <tr
      key={partner.id}
      className="border-b hover:bg-slate-50"
    >

      <td className="px-4 py-3">
        {partner.partner_registration_number}
      </td>

      <td className="px-4 py-3">
        {partner.partner_type}
      </td>

      <td className="px-4 py-3">
        {partner.shop_name}
      </td>

      <td className="px-4 py-3">
        {partner.owner_name}
      </td>

      <td className="px-4 py-3">
        {partner.mobile_number}
      </td>

      <td className="px-4 py-3">
        {partner.city}
      </td>

      <td className="px-4 py-3">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          {partner.application_status}
        </span>
      </td>

      <td className="px-4 py-3 text-center">

        <Link
  href={`/admin/partners/${partner.partner_registration_number}`}
  className="inline-block rounded-lg bg-[#72B543] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5FA032]"
>
  View
</Link>

      </td>

    </tr>

  ))}

</tbody>

    </table>

  </div>
)}

      </div>

    </section>

  </div>

</section>

</main>
);
}