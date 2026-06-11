import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
   <footer
  id="contact"
  className="scroll-mt-28 bg-gradient-to-br from-[#234F32] via-[#1E4D2B] to-[#0B1F12] text-white"
>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <Image
  src="/logo/urbanloop-logo.png"
  alt="UrbanLoop"
  width={300}
  height={100}
  className="mx-auto lg:mx-0 h-auto w-auto max-h-30"
/>

            <p className="mx-auto lg:mx-0 mt-5 max-w-md leading-relaxed text-white/70">
              Transforming waste into value through smart recycling,
              rewards, circular economy initiatives and measurable
              environmental impact.
            </p>

            <div className="mt-8 flex justify-center gap-4 lg:justify-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543]">
                <Globe size={20} />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543]">
                <Mail size={20} />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543]">
                <Phone size={20} />
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>
                <Link href="/" className="transition hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/" className="transition hover:text-white">
                  Our Mission
                </Link>
              </li>

              <li>
                <Link href="/" className="transition hover:text-white">
                  Impact
                </Link>
              </li>

              <li>
                <Link href="/" className="transition hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>Dry Waste Collection</li>
              <li>Wet Waste Composting</li>
              <li>E-Waste Management</li>
              <li>Business Recycling</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>Bengaluru, India</li>
              <li>hello@urbanloop.in</li>
              <li>+91 XXXXX XXXXX</li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Stay Updated
              </h3>

              <p className="mt-3 text-white/70">
                Get updates on sustainability initiatives, rewards,
                community programs and UrbanLoop news.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-white/50 outline-none"
              />

              <button className="rounded-xl bg-[#72B543] px-8 py-4 font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(114,181,67,0.40)]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © 2026 UrbanLoop. All rights reserved. Building a circular economy,
          one pickup at a time.
        </div>
      </div>
    </footer>
  );
}