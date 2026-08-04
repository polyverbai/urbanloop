"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  /* =====================================================
     NORMALIZE MOBILE NUMBER
  ===================================================== */

  function getInternationalPhone() {
    const digits = phone.replace(/\D/g, "").slice(-10);

    if (digits.length !== 10) {
      return null;
    }

    return `+91${digits}`;
  }

  /* =====================================================
     SEND OTP
  ===================================================== */

  async function handleSendOtp(e: FormEvent) {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");

    const internationalPhone = getInternationalPhone();

    if (!internationalPhone) {
      setErrorMessage(
        "Please enter a valid 10-digit mobile number."
      );
      return;
    }

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithOtp({
        phone: internationalPhone,
      });

    setLoading(false);

    if (error) {
      console.error("Send OTP error:", error);
      setErrorMessage(error.message);
      return;
    }

    setOtpSent(true);

    setMessage(
      `OTP sent to +91 ${phone.replace(/\D/g, "").slice(-10)}`
    );
  }

  /* =====================================================
     VERIFY OTP
  ===================================================== */

  async function handleVerifyOtp(e: FormEvent) {
    e.preventDefault();

    setMessage("");
    setErrorMessage("");

    const internationalPhone = getInternationalPhone();

    if (!internationalPhone) {
      setErrorMessage(
        "Please enter a valid mobile number."
      );
      return;
    }

    if (otp.length !== 6) {
      setErrorMessage(
        "Please enter the 6-digit OTP."
      );
      return;
    }

    setLoading(true);

    const { data, error } =
      await supabase.auth.verifyOtp({
        phone: internationalPhone,
        token: otp,
        type: "sms",
      });

    setLoading(false);

    if (error) {
      console.error("Verify OTP error:", error);
      setErrorMessage(error.message);
      return;
    }

    if (!data.user || !data.session) {
      setErrorMessage(
        "Authentication could not be completed."
      );
      return;
    }

    setMessage(
  "Mobile number verified successfully."
);

/* =====================================================
   RESOLVE URBANLOOP CUSTOMER ACCOUNT
===================================================== */

const accessToken =
  data.session.access_token;

try {
  const response = await fetch(
    "/api/auth/resolve-customer",
    {
      method: "POST",

      headers: {
        Authorization:
          `Bearer ${accessToken}`,
      },
    }
  );

  const result = await response.json();

  if (!response.ok || !result.success) {
    console.error(
      "Customer resolution failed:",
      result
    );

    setErrorMessage(
      result.message ||
        "Unable to retrieve your UrbanLoop account."
    );

    return;
  }

  if (result.accountFound) {

  const customerType =
    result.customerAccount?.customer_type;

  switch (customerType) {

    case "Residential":
      router.push("/dashboard/residential");
      return;

    case "Business":
      router.push("/dashboard/business");
      return;

    case "Corporate":
      router.push("/dashboard/corporate");
      return;

    case "Educational":
      router.push("/dashboard/educational");
      return;

    case "Hospital":
      router.push("/dashboard/hospital");
      return;

    default:
      router.push("/dashboard");
      return;

  }

}

/* =====================================================
   NO EXISTING REGISTRATION
===================================================== */

if (
  result.resolution ===
  "registration_required"
) {
  router.push("/join-urbanloop/categories");
  return;
}

/* =====================================================
   MULTIPLE REGISTRATIONS
===================================================== */

if (
  result.resolution ===
  "multiple_registrations"
) {
  setMessage(
    "Mobile number verified successfully. Multiple UrbanLoop registrations were found for this number."
  );

  return;
}

/* =====================================================
   FALLBACK
===================================================== */

setMessage(
  result.message ||
    "Mobile number verified successfully."
);

} catch (error) {
  console.error(
    "Customer resolution error:",
    error
  );

  setErrorMessage(
    "Unable to retrieve your UrbanLoop account."
  );
}
  }

  /* =====================================================
     CHANGE MOBILE NUMBER
  ===================================================== */

  function handleChangeNumber() {
    setOtp("");
    setOtpSent(false);
    setMessage("");
    setErrorMessage("");
  }

  /* =====================================================
     PAGE
  ===================================================== */

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            UrbanLoop
          </h1>

          <p className="mt-2 text-gray-600">
            Login or create your UrbanLoop account
          </p>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSendOtp}>

            <label
              htmlFor="mobileNumber"
              className="mb-2 block text-sm font-medium text-gray-800"
            >
              Mobile Number
            </label>

            <div className="mb-5 flex">

              <div className="flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-4 text-gray-700">
                +91
              </div>

              <input
                id="mobileNumber"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10)
                  )
                }
                placeholder="Enter 10-digit mobile number"
                maxLength={10}
                className="w-full rounded-r-lg border border-gray-300 p-3 text-gray-900 outline-none focus:border-green-600"
              />

            </div>

            <button
              type="submit"
              disabled={
                loading ||
                phone.replace(/\D/g, "").length !== 10
              }
              className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Sending OTP..."
                : "Send OTP"}
            </button>

          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>

            <div className="mb-5 rounded-lg bg-gray-50 p-4 text-center">

              <p className="text-sm text-gray-600">
                OTP sent to
              </p>

              <p className="mt-1 font-semibold text-gray-900">
                +91 {phone}
              </p>

            </div>

            <label
              htmlFor="otp"
              className="mb-2 block text-sm font-medium text-gray-800"
            >
              Enter 6-digit OTP
            </label>

            <input
              id="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 6)
                )
              }
              placeholder="Enter OTP"
              maxLength={6}
              className="mb-5 w-full rounded-lg border border-gray-300 p-3 text-center text-xl tracking-[0.4em] text-gray-900 outline-none focus:border-green-600"
            />

            <button
              type="submit"
              disabled={
                loading ||
                otp.length !== 6
              }
              className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </button>

            <button
              type="button"
              onClick={handleChangeNumber}
              disabled={loading}
              className="mt-3 w-full rounded-lg border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
            >
              Change Mobile Number
            </button>

          </form>
        )}

        {message && (
          <div className="mt-5 rounded-lg bg-green-50 p-3 text-sm text-green-800">
            {message}
          </div>
        )}

        {errorMessage && (
          <div className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}

        <div className="mt-8 border-t border-gray-200 pt-6 text-center">

          <p className="text-sm text-gray-500">
            Email login will also be available as an alternative.
          </p>

        </div>

      </div>
    </main>
  );
}