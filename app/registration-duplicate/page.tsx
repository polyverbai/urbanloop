"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
function RegistrationDuplicateContent() {

  const searchParams = useSearchParams();

  const type =
    searchParams.get("type") ||
    "Registration";

    const field =
  searchParams.get("field") ||
  "Duplicate Information";

const value =
  searchParams.get("value") ||
  "Not Available";

const returnUrl =
  searchParams.get("returnUrl") ||
  "/";

  const returnText =
  searchParams.get("returnText") ||
  "Back To Home";

  return (

  <main className="min-h-screen flex items-center justify-center bg-[#FFF8E7] px-6">

    <div className="max-w-xl rounded-3xl bg-white p-8 text-center shadow-lg">

      <div className="mb-4 text-5xl">
        ⚠️
      </div>

      <h1 className="text-3xl font-bold text-slate-900">
        Registration Already Exists
      </h1>

      <div className="mt-5 rounded-2xl bg-[#FFF8E7] p-5">

        <p className="text-sm font-medium text-slate-500">
          Registration Type
        </p>

        <p className="mt-2 text-xl font-bold text-slate-900">
          {type}
        </p>

      </div>

      <div className="mt-4 rounded-2xl bg-[#FFF8E7] p-5">

        <p className="text-sm font-medium text-slate-500">
          Field Name
        </p>

        <p className="mt-2 text-lg font-semibold text-slate-900">
          {field}
        </p>

        <p className="mt-4 text-sm font-medium text-slate-500">
          Field Value
        </p>

        <p className="mt-2 text-lg font-semibold text-slate-900">
          {value}
        </p>

      </div>

      <p className="mt-6 text-slate-600 leading-relaxed">
        Please review and update the duplicate
        information before submitting your
        registration again.
      </p>

      <div className="mt-8 flex flex-col gap-4">

  <Link
    href={returnUrl}
    className="rounded-xl bg-[#72B543] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5FA032]"
  >
    {returnText}
  </Link>

  <Link
    href="/contact"
    className="rounded-xl border border-[#72B543] px-6 py-3 font-semibold text-[#72B543] transition-all duration-300 hover:bg-[#F8FBF4]"
  >
    Contact UrbanLoop Support
  </Link>

</div>

    </div>

  </main>

);

}

export default function RegistrationDuplicatePage() {
  return (
    <Suspense
      fallback={
        <div>
          Loading...
        </div>
      }
    >
      <RegistrationDuplicateContent />
    </Suspense>
  );
}