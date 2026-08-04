"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function RegistrationSuccessContent() {
  const searchParams = useSearchParams();

  const type =
  searchParams.get("type") ||
  "Registration";

const registrationNumber =
  searchParams.get("registrationNumber") ||
  "Will be shared shortly";

const returnUrl =
  searchParams.get("return") ||
  "/";

const returnText =
  searchParams.get("returnText") ||
  "Back To Home";

  return (

    
    <main className="min-h-screen flex items-center justify-center bg-[#F8FBF4] px-6">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-lg">

        <div className="mb-6 text-6xl">
          ✅
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          {type} Submitted Successfully
        </h1>

<div className="mt-6 rounded-2xl bg-[#F8FBF4] p-6">

  <p className="text-sm font-medium text-slate-500">
    Registration Number
  </p>

  <p className="mt-2 text-2xl font-bold text-[#72B543]">
    {registrationNumber}
  </p>

</div>

        <p className="mt-4 text-slate-600 leading-relaxed">
  Thank you for choosing UrbanLoop.
  Your registration has been received successfully.
  Our team will review the submitted information and
  contact you shortly regarding the next steps.
</p>

        <Link
  href={returnUrl}
  className="mt-8 inline-flex rounded-xl bg-[#72B543] px-6 py-3 font-semibold text-white hover:bg-[#5FA032]"
>
  {returnText}
</Link>

      </div>
    </main>
  );
}

export default function RegistrationSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <RegistrationSuccessContent />
    </Suspense>
  );
}