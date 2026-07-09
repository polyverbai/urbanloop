"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function ResidentialRegistrationPage() {
  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">


        {/* CTA Section */}

        <section className="bg-[#F8FBF4] py-20">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              Ready To Turn Household Waste Into Value?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              UrbanLoop helps households and residential communities improve
              recycling rates, reduce waste and contribute to a cleaner and
              more sustainable environment.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-[#72B543] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
              >
                Talk To Our Team
              </Link>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}