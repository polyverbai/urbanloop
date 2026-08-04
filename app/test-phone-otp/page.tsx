"use client";

import { FormEvent, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function TestPhoneOtpPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function sendOtp(e: FormEvent) {
    e.preventDefault();

    const normalizedPhone = phone.trim();

    if (!normalizedPhone) {
      setMessage("Enter a mobile number.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      phone: normalizedPhone,
    });

    setLoading(false);

    if (error) {
      console.error("Send OTP error:", error);
      setMessage(`Error: ${error.message}`);
      return;
    }

    setOtpSent(true);
    setMessage("OTP request sent successfully.");
  }

  async function verifyOtp(e: FormEvent) {
    e.preventDefault();

    const normalizedPhone = phone.trim();
    const normalizedOtp = otp.trim();

    if (!normalizedOtp) {
      setMessage("Enter the OTP.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.verifyOtp({
      phone: normalizedPhone,
      token: normalizedOtp,
      type: "sms",
    });

    setLoading(false);

    if (error) {
      console.error("Verify OTP error:", error);
      setMessage(`Verification error: ${error.message}`);
      return;
    }

    console.log("OTP verification result:", data);
    setMessage("OTP verified successfully. Phone authentication is working.");
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">
          UrbanLoop Phone OTP Test
        </h1>

        <p className="mb-6 text-sm text-gray-600">
          Test Supabase phone authentication through Twilio.
        </p>

        {!otpSent ? (
          <form onSubmit={sendOtp}>
            <label className="mb-2 block font-medium text-gray-800">
              Mobile Number
            </label>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+919876543210"
              autoComplete="tel"
              className="mb-4 w-full rounded border border-gray-300 p-3 text-gray-900"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-green-600 py-3 font-medium text-white disabled:opacity-50"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp}>
            <label className="mb-2 block font-medium text-gray-800">
              Enter 6-digit OTP
            </label>

            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="123456"
              autoComplete="one-time-code"
              className="mb-4 w-full rounded border border-gray-300 p-3 text-gray-900"
            />

            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full rounded bg-green-600 py-3 font-medium text-white disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setMessage("");
              }}
              className="mt-3 w-full rounded border border-gray-300 py-3 text-gray-700"
            >
              Change Number
            </button>
          </form>
        )}

        {message && (
          <div className="mt-5 rounded bg-gray-50 p-3 text-sm text-gray-800">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}