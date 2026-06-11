"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
const [partnerOpen, setPartnerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-[999999] relative border-b border-slate-200 bg-slate-50 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/urbanloop-logo.png"
            alt="UrbanLoop"
            width={800}
            height={220}
            priority
            className="h-auto w-auto max-h-24"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-[#72B543]"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 transition hover:text-[#72B543]"
          >
            About
          </Link>

          <Link
            href="services"
            className="text-sm font-medium text-slate-700 transition hover:text-[#72B543]"
          >
            Services
          </Link>

          <Link
  href="/partner-program"
  className="text-sm font-medium text-slate-700 transition hover:text-[#72B543]"
>
  Partner Program
</Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 transition hover:text-[#72B543]"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="/schedule-pickup"
            className="hidden rounded-xl bg-[#72B543] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5fa032] lg:block"
          >
            Schedule Pickup
          </Link>

          {/* Mobile CTA */}
          <Link
            href="/schedule-pickup"
            className="rounded-lg bg-[#72B543] px-3 py-2 text-xs font-semibold text-white shadow-sm lg:hidden"
          >
            Pickup
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-3 mt-2 z-[999999] w-[220px] max-w-[85vw] lg:hidden">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
            <div className="space-y-1">
              <Link
                href="/home"
                onClick={closeMenu}
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Home
              </Link>

              <Link
                href="/services"
                onClick={closeMenu}
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Services
              </Link>

              <Link
                href="/why-urbanloop"
                onClick={closeMenu}
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Why UrbanLoop
              </Link>

              <Link
  href="/partner-program"
  className="text-sm font-medium text-slate-700 transition hover:text-[#72B543]"
>
  Partner Program
</Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}