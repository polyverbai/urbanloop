"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBackground from "@/components/layout/PageBackground";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {

    const [loading, setLoading] = useState(false);

    const [openFAQ, setOpenFAQ] = useState<number | null>(0);

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "",
  subject: "",
  message: "",
});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  const { error } = await supabase
    .from("contact_messages")
    .insert([
      {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        enquiry_type: formData.enquiryType,
        subject: formData.subject,
        message: formData.message,
      },
    ]);

  setLoading(false);

  if (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
    return;
  }

  alert("Thank you! Your enquiry has been submitted.");

  setFormData({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
    subject: "",
    message: "",
  });
};

const faqs = [
  {
    question: "What is UrbanLoop?",
    answer:
      "UrbanLoop is a technology-driven circular economy platform that helps households, apartment communities, businesses and institutions responsibly recycle waste while earning value, rewards and measurable environmental impact.",
  },
  {
    question: "How do I schedule a recyclable waste pickup?",
    answer:
      "Click Join UrbanLoop, choose the appropriate registration category, complete the registration form and submit it. Once verified, our team will coordinate your pickup.",
  },
  {
    question: "What materials does UrbanLoop collect?",
    answer:
      "UrbanLoop supports paper, cardboard, plastics, metals, glass, e-waste, packaging materials, office recyclables and several other recyclable materials depending on your location.",
  },
  {
    question: "Can I earn money by recycling through UrbanLoop?",
    answer:
      "Yes. Depending on the materials collected, you may receive payment through direct bank transfer, UrbanLoop Wallet, reward points or future marketplace redemption options.",
  },
  {
    question: "Who can register with UrbanLoop?",
    answer:
      "Individuals, apartment communities, businesses, retail stores, corporate offices, educational institutions, hospitals, hotels, warehouses, manufacturing units and many other organizations can register.",
  },
  {
    question: "How do I become an UrbanLoop Collection Partner?",
    answer:
      "Visit the Partnership Programme section, complete the Collection Partner Registration Form and our onboarding team will contact you after verification.",
  },
  {
    question: "How does UrbanLoop contribute to sustainability?",
    answer:
      "UrbanLoop helps divert recyclable materials away from landfills, increases responsible recycling, promotes resource recovery and enables measurable environmental impact.",
  },
  {
    question: "Does UrbanLoop support businesses and institutions?",
    answer:
      "Yes. UrbanLoop offers customized recycling programmes for corporate offices, educational institutions, hospitals, hotels, retail chains, warehouses and manufacturing facilities.",
  },
  {
    question: "How can I track my collections and rewards?",
    answer:
      "UrbanLoop will provide a digital platform where users can monitor collection history, earnings, rewards, scheduled pickups and sustainability impact.",
  },
  {
    question: "How can I contact UrbanLoop?",
    answer:
      "You can submit the Contact Form on this page and our team will respond as quickly as possible regarding your enquiry.",
  },
];

  return (
  <>



    <Header />

<main className="min-h-screen">

  <section className="scroll-mt-28 py-28">

    <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

        <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            WHY CONTACT US
        </span>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
            We're Here For Every Stage Of Your Sustainability Journey
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Whether you're looking to recycle, partner with UrbanLoop,
            or explore sustainability initiatives, our team is ready to help.
        </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
            Residential Support
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
            Assistance with household registrations,
            pickup scheduling, rewards and recycling enquiries.
            </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
            Business Solutions
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
            Waste management programmes,
            ESG reporting, sustainability initiatives
            and enterprise recycling solutions.
            </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
            Partnership Enquiries
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
            Collection Partners,
            Transportation Partners and
            Recycling Partners can connect with our onboarding team.
            </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
            General Support
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
            Have another question?
            Our support team is happy to assist you with any UrbanLoop enquiry.
            </p>
        </div>

        </div>

    </div>

    </section>

    {/* CONTACT FORM */}


  <div className="mx-auto max-w-5xl px-6">

    <div className="mb-14 text-center">
      <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
        SEND US A MESSAGE
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        We'd Love To Hear From You
      </h2>

      <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
        Complete the form below and our team will get back to you as soon as
        possible.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

      <form className="grid gap-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full Name *
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#72B543]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email Address *
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#72B543]"
            />
          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Mobile Number
            </label>

            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#72B543]"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Enquiry Type *
            </label>

            <select
  value={formData.enquiryType}
  onChange={(e) =>
    setFormData({ ...formData, enquiryType: e.target.value })
  }
  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#72B543]"
>
  <option value="">Select Enquiry Type</option>
  <option value="Residential">Residential</option>
  <option value="Business">Business</option>
  <option value="Corporate">Corporate Office</option>
  <option value="Educational">Educational Institution</option>
  <option value="Healthcare">Healthcare Institution</option>
  <option value="Collection Partner">Collection Partner</option>
  <option value="Transportation Partner">Transportation Partner</option>
  <option value="Recycling Partner">Recycling Partner</option>
  <option value="General">General Enquiry</option>
</select>

</div>

</div>

<div>
  <label className="mb-2 block font-medium text-slate-700">
    Subject *
  </label>

  <input
    type="text"
    value={formData.subject}
    onChange={(e) =>
      setFormData({ ...formData, subject: e.target.value })
    }
    placeholder="Subject"
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#72B543]"
  />
</div>

<div>
  <label className="mb-2 block font-medium text-slate-700">
    Message *
  </label>

  <textarea
    rows={6}
    value={formData.message}
    onChange={(e) =>
      setFormData({ ...formData, message: e.target.value })
    }
    placeholder="Write your message..."
    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#72B543]"
  />
</div>

<button
  type="submit"
  onClick={handleSubmit}
  disabled={loading}
  className="rounded-xl bg-[#D7EFC2] px-8 py-3 text-sm font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#72B543] hover:text-black hover:shadow-lg"
>
  {loading ? "Submitting..." : "Send Message"}
</button>

</form>

</div>

</div>

    

    {/* ================= FAQ ================= */}
<section className="py-28">
    <div className="mx-auto max-w-5xl px-6">

        <div className="mb-14 text-center">

        <span className="inline-flex rounded-full bg-[#72B543]/10 px-4 py-2 text-sm font-medium text-[#72B543]">
            FREQUENTLY ASKED QUESTIONS
        </span>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Common Questions
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            Find answers to some of the most common questions about
            UrbanLoop's services, registrations and partnership programmes.
        </p>

        </div>

        <div className="space-y-6">

        <div className="space-y-4">

  {faqs.map((faq, index) => (

    <div
      key={index}
      className="overflow-hidden rounded-3xl border border-[#DDE8D0] bg-white shadow-sm transition-all duration-300"
    >

      <button
        type="button"
        onClick={() =>
          setOpenFAQ(openFAQ === index ? null : index)
        }
        className="flex w-full items-center justify-between px-8 py-6 text-left"
      >

        <h3 className="text-lg font-semibold text-slate-900">
          {faq.question}
        </h3>

        {openFAQ === index ? (
          <ChevronUp
            size={22}
            className="text-[#72B543]"
          />
        ) : (
          <ChevronDown
            size={22}
            className="text-[#72B543]"
          />
        )}

      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          openFAQ === index
            ? "max-h-96 pb-6"
            : "max-h-0"
        }`}
      >

        <p className="px-8 leading-7 text-slate-600">
          {faq.answer}
        </p>

      </div>

    </div>

  ))}

</div>

        </div>

    </div>
</section>
    </main>
    
<Footer />

</>
);
}