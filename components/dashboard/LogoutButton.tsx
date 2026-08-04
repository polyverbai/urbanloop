"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { LogOut } from "lucide-react";
import { useConfirm } from "@/components/ui/dialog/useConfirm";

import { supabase } from "@/lib/supabase";

export default function LogoutButton() {

  const router = useRouter();
const { confirm } = useConfirm();

  const [loading, setLoading] =
    useState(false);

  async function handleLogout() {
const confirmed =
  await confirm({

    title: "Logout",

    message:
      "Are you sure you want to log out?",

    confirmText:
      "Logout",

    cancelText:
      "Cancel",

  });

if (!confirmed) {

  return;

}

    try {

      setLoading(true);

      await supabase.auth.signOut();

      router.replace("/login");

    } catch (error) {

      console.error(
        "Logout Error:",
        error
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <button
      onClick={handleLogout}
      disabled={loading}
      className="
        flex
        items-center
        gap-2
        rounded-lg
        bg-white
        px-4
        py-2
        font-medium
        text-[#5FA032]
        shadow
        transition
        hover:bg-gray-100
        disabled:opacity-60
      "
    >

      <LogOut size={18} />

      {loading
        ? "Signing Out..."
        : "Logout"}

    </button>

  );

}