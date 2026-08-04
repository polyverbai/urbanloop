"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CollectionPartnerSuccessPage() {
  const searchParams = useSearchParams();

  const registrationNumber =
    searchParams.get("registrationNumber");

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50">

        {/* Hero Section */}

        <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 py-14">
          <div className="max-w-7xl mx-auto px-6">

            <h1 className="text-4xl font-bold text-white">
              Welcome to the UrbanLoop Collection Partner Network!
            </h1>

            <p className="mt-4 text-green-100 text-lg max-w-4xl">
              Your registration has been successfully submitted and is now
              under review by our onboarding team.
            </p>

          </div>
        </section>

        {/* Success Card */}

        <section className="max-w-5xl mx-auto px-6 py-12">

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">

            {/* Registration Number */}

            <div className="rounded-xl border border-green-200 bg-green-50 p-8">

              <h2 className="text-lg font-semibold text-gray-700">
                Registration Number
              </h2>

              <p className="mt-3 text-4xl font-bold text-green-700">
                {registrationNumber ?? "Not Available"}
              </p>

              <p className="mt-4 text-sm text-gray-600">
                Please save this Registration Number for all future
                communications with UrbanLoop.
              </p>

            </div>


            {/* What Happens Next */}

            <div className="mt-10">

              <h3 className="text-2xl font-semibold text-gray-900">
                What Happens Next?
              </h3>

              <div className="mt-6 space-y-4 text-gray-700">

                <p>
                  1. Our onboarding team will review your registration details.
                </p>

                <p>
                  2. Your submitted documents will be verified for compliance.
                </p>

                <p>
                  3. Your business profile will undergo partner evaluation.
                </p>

                <p>
                  4. Upon approval, you will be contacted by the UrbanLoop team.
                </p>

                <p>
                  5. Your Collection Partner account will be activated.
                </p>

              </div>

            </div>


            {/* Need Assistance */}

            <div className="mt-10 rounded-xl border bg-gray-50 p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Need Assistance?
              </h3>

              <p className="mt-4 text-gray-700">
                If you have any questions regarding your registration,
                please contact the UrbanLoop onboarding team and mention
                your Registration Number for faster assistance.
              </p>

            </div>


            {/* Navigation Buttons */}

            <div className="mt-10 flex flex-col md:flex-row gap-4">

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700 transition"
              >
                Return to Home
              </Link>

              <Link
                href="/partner-program"
                className="inline-flex items-center justify-center rounded-lg border border-green-600 px-6 py-3 text-green-700 font-semibold hover:bg-green-50 transition"
              >
                Explore Partnership Programs
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}