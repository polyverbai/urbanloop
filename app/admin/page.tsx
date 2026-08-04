"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    if (!email.trim()) {
      setErrorMessage("Email Address is required.");
      return false;
    }

    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      setErrorMessage(
        "Please enter a valid email address."
      );
      return false;
    }

    if (!password.trim()) {
      setErrorMessage("Password is required.");
      return false;
    }

    if (password.length < 8) {
      setErrorMessage(
        "Password must be at least 8 characters."
      );
      return false;
    }

    return true;
  };

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // Authentication logic will be added later.
      // Temporary redirect for Sprint-1 development.

      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);

      setErrorMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        {/* Heading */}

        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#72B543]">
            UrbanLoop
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Admin Platform
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-[#72B543]"
            />
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(event) =>
                  setPassword(
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none transition-all duration-300 focus:border-[#72B543]"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}

          {errorMessage && (
            <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#72B543] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5FA032] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Logging In..."
              : "Login"}
          </button>
        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-xs text-slate-500">
          UrbanLoop Admin Platform v1.0
        </p>
      </div>
    </main>
  );
}