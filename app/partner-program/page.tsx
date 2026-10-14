"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import PartnerProgramHero from "./components/PartnerProgramHero";
import PartnerCards from "./components/PartnerCards";
import PartnerCTA from "./components/PartnerCTA";

export default function PartnerProgramPage() {
  return (
    <>
      <Header />

      <main
        className="min-h-screen"
        style={{
          background:
            "linear-gradient(to bottom, #d7f6cf 0%, #ebf7df 45%, #ffffff 100%)",
        }}
      >
        <PartnerProgramHero />

        <PartnerCards />

        <section className="py-20">
          <PartnerCTA />
        </section>
      </main>

      <Footer />
    </>
  );
}