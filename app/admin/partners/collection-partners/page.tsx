"use client";

import { useEffect, useState } from "react";

import { getAllCollectionPartners } from "@/lib/admin/partners";

import HeroCard from "./components/HeroCard";
import StatisticsCards from "./components/StatisticsCards";
import SearchFilters from "./components/SearchFilters";
import PartnerTable from "./components/PartnerTable";

export default function CollectionPartnersPage() {
    const [partners, setPartners] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadPartners() {
    try {
      const data = await getAllCollectionPartners();
      setPartners(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  loadPartners();
}, []);
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="px-8 pt-4 xl:px-10 2xl:px-12">

        <HeroCard />

        <div className="mt-8">
          <StatisticsCards partners={partners} />
        </div>

        <div className="mt-8">
          <SearchFilters />
        </div>

        <div className="mt-8 pb-10">
          <PartnerTable
  partners={partners}
  loading={loading}
/>
        </div>

      </div>

    </main>
  );
}