"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { useSearchParams } from "next/navigation";

export default function BusinessPartnerSuccessPage() {

  const searchParams = useSearchParams();

  const registrationNumber =
    searchParams.get("registration") ?? "";

  return (

    <>

      <Header />

      <div className="container mx-auto py-20">

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border p-10 text-center">

          <div className="text-6xl mb-6">
            ✅
          </div>

          <h1 className="text-3xl font-bold text-green-700">
            Registration Submitted Successfully
          </h1>

          <p className="mt-4 text-gray-600">
            Thank you for registering with UrbanLoop.
          </p>

          <div className="mt-8">

            <p className="text-sm text-gray-500">
              Registration Number
            </p>

            <p className="text-3xl font-bold text-blue-700 mt-2">
              {registrationNumber}
            </p>

          </div>

          <div className="mt-8">

            <span className="inline-flex items-center rounded-full bg-yellow-100 px-5 py-2 font-semibold text-yellow-800">

              🟡 Pending Basic Verification

            </span>

          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-left">

            <h3 className="font-semibold text-blue-800 mb-3">

              What happens next?

            </h3>

            <ul className="space-y-2 text-gray-700">

              <li>✔ Our verification team will review your application.</li>

              <li>✔ Once approved, you will receive an SMS notification.</li>

              <li>✔ You will also receive a WhatsApp message with your secure onboarding link.</li>

              <li>✔ Complete the remaining onboarding process.</li>

            </ul>

          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-5">

            <p className="font-semibold text-green-800">

              Please keep your Registration Number for future reference.

            </p>

          </div>

          <div className="mt-10">

            <button
              type="button"
              onClick={() => {
                window.location.href = "/partner-program";
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Return to Partnership Program
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </>

  );

}