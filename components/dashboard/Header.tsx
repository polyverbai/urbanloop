"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Header() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user?.email) {
        setEmail(user.email);
      }
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();

    router.push("/login");
  }

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <h2 className="text-xl font-semibold">
        UrbanLoop Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">
          {email || "Welcome"}
        </span>

        <button
          onClick={handleLogout}
          className="px-3 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
}