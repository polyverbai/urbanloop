import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
   <footer
  id="contact"
  className="scroll-mt-28 bg-gradient-to-br from-[#3E6F28] via-[#2F5D22] to-[#1A3812] text-white"
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
              UrbanLoop is India's smart circular economy platform,
connecting households, businesses and recycling partners
to transform recyclable waste into measurable environmental
and economic value.
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
        Home
      </Link>
    </li>

    <li>
      <Link href="/about" className="transition hover:text-white">
        About UrbanLoop
      </Link>
    </li>

    <li>
      <Link href="/#services" className="transition hover:text-white">
  Services
</Link>
    </li>

    <li>
      <Link href="/partner-program" className="transition hover:text-white">
        Partner Program
      </Link>
    </li>

    <li>
      <Link href="/contact" className="transition hover:text-white">
        Contact Us
      </Link>
    </li>

  </ul>
</div>

          {/* Partner Program */}
<div>
  <h3 className="mb-5 text-lg font-semibold text-white">
    Partner Program
  </h3>

  <ul className="space-y-3 text-white/70">

      <li>
      <Link href="/join-urbanloop/categories" className="transition hover:text-white">
        Join UrbanLoop
      </Link>
    </li>

    <Link
  href="/partner-program#join-partners"
  className="transition hover:text-white"
>
  Become a Partner
</Link>

      </ul>
</div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h3>

            <ul className="space-y-3 text-white/70">

  <li>Bengaluru, Karnataka, India</li>

  <li>
    <a
      href="mailto:hello@urbanloop.in"
      className="transition hover:text-white"
    >
      hello@urbanloop.in
    </a>
  </li>

  <li>
    <a
      href="tel:+91XXXXXXXXXX"
      className="transition hover:text-white"
    >
      +91 XXXXX XXXXX
    </a>
  </li>

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

              <button className="rounded-xl bg-[#D7EFC2] px-6 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          © 2026 UrbanLoop. All Rights Reserved.

Empowering India's Circular Economy Through Smart Recycling.
        </div>
      </div>
    </footer>
  );
}