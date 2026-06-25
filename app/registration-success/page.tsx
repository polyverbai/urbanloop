"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function RegistrationSuccessPage() {
  const searchParams = useSearchParams();

  const type =
    searchParams.get("type") ||
    "Registration";

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8FBF4] px-6">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-lg">

        <div className="mb-6 text-6xl">
          ✅
        </div>

        <h1 className="text-3xl font-bold text-slate-900">
          {type} Submitted Successfully
        </h1>

        <p className="mt-4 text-slate-600">
          Thank you for registering with
          UrbanLoop. Our team will review
          your registration and contact you
          shortly.
        </p>

        <Link
  href="/join-urbanloop/categories"
  className="mt-8 inline-flex rounded-xl bg-[#72B543] px-6 py-3 font-semibold text-white hover:bg-[#5FA032]"
>
  Back To Categories
</Link>

      </div>
    </main>
  );
}