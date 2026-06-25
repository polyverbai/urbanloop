"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";


export default function ManufacturingRegistrationPage() {
  const [loading, setLoading] = useState(false);
const router = useRouter();

  // Contact Information
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [alternateMobile, setAlternateMobile] = useState("");

  // Address
  const [shopNumber, setShopNumber] = useState("");
  const [buildingName, setBuildingName] = useState("");
  const [streetArea, setStreetArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pinCode, setPinCode] = useState("");

 // Manufacturing Profile
const [businessProfileType,
  setBusinessProfileType] =
  useState("");

const [facilitySize,
  setFacilitySize] =
  useState("");

const [monthlyRecyclables,
  setMonthlyRecyclables] =
  useState("");

   // Materials
  const [materialCategories,
    setMaterialCategories] =
    useState<string[]>([]);

  // Services
  const [requiredServices,
    setRequiredServices] =
    useState<string[]>([]);

  // Collection
  const [collectionFrequency,
    setCollectionFrequency] =
    useState("");

  const [collectionDay,
    setCollectionDay] =
    useState("");

  const [collectionTime,
    setCollectionTime] =
    useState("");

  // Communication
  const [communicationPreferences,
    setCommunicationPreferences] =
    useState<string[]>([]);

  // Referral
  const [referralSource,
    setReferralSource] =
    useState("");

  const [referralCode,
    setReferralCode] =
    useState("");

  const [additionalComments,
    setAdditionalComments] =
    useState("");

  // Consent
  const [declarationConfirmed,
    setDeclarationConfirmed] =
    useState(false);

  const [termsAccepted,
    setTermsAccepted] =
    useState(false);

  const [communicationConsent,
    setCommunicationConsent] =
    useState(false);

  function toggleArrayValue(
    value: string,
    current: string[],
    setter: React.Dispatch<
      React.SetStateAction<string[]>
    >
  ) {
    if (current.includes(value)) {
      setter(
        current.filter(
          (item) => item !== value
        )
      );
    } else {
      setter([...current, value]);
    }
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    // Full Name
    if (!fullName.trim()) {
      alert("Full Name is required");
      return;
    }

    // Mobile Number
    if (!/^[0-9]{10}$/.test(mobileNumber)) {
      alert(
        "Mobile Number must contain exactly 10 digits"
      );
      return;
    }

    // Email
    if (
      email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        email
      )
    ) {
      alert("Please enter a valid Email Address");
      return;
    }

    // Address
    if (
      !shopNumber.trim() ||
      !buildingName.trim() ||
      !streetArea.trim() ||
      !city.trim() ||
      !stateName.trim() ||
      !pinCode.trim()
    ) {
      alert(
        "All Business Address fields are mandatory"
      );
      return;
    }

    // Manufacturing Profile
if (
  !businessProfileType ||
  !facilitySize ||
  !monthlyRecyclables
) {
  alert(
    "Please complete all Manufacturing Profile fields"
  );
  return;
}

    // Materials
    if (materialCategories.length === 0) {
      alert(
        "Please select at least one Material Category"
      );
      return;
    }

    // Services
    if (requiredServices.length === 0) {
      alert(
        "Please select at least one Required Service"
      );
      return;
    }

    // Communication
    if (
      communicationPreferences.length === 0
    ) {
      alert(
        "Please select at least one Communication Preference"
      );
      return;
    }

    // Declaration
    if (!declarationConfirmed) {
      alert(
        "Please confirm the declaration"
      );
      return;
    }

    if (!termsAccepted) {
      alert(
        "Please accept Terms & Conditions"
      );
      return;
    }

    if (!communicationConsent) {
      alert(
        "Please provide communication consent"
      );
      return;
    }

    setLoading(true);

    const { error } =
      await supabase
        .from(
          "business_registrations"
        )
        .insert([
          {
            business_type: "Manufacturing Unit",

            full_name: fullName,
            mobile_number: mobileNumber,
            email,

            alternate_mobile:
              alternateMobile,

            shop_number: shopNumber,
            building_name:
              buildingName,

            street_area:
              streetArea,

            landmark,

            city,
state_name: stateName,
pin_code: pinCode,

business_profile_type:
  businessProfileType,
            
           facility_size: facilitySize,

monthly_recyclables: monthlyRecyclables,

            material_categories:
              materialCategories,

            required_services:
              requiredServices,

            collection_frequency:
              collectionFrequency,

            collection_day:
              collectionDay,

            collection_time:
              collectionTime,

            communication_preferences:
              communicationPreferences,

            referral_source:
              referralSource,

            referral_code:
              referralCode,

            additional_comments:
              additionalComments,

            declaration_confirmed:
              declarationConfirmed,

            terms_accepted:
              termsAccepted,

            communication_consent:
              communicationConsent,
          },
        ]);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push(
  "/registration-success?type=Manufacturing%20Registration&return=/join-urbanloop/business-registration"
);
  }

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            <div className="mb-12 text-center">

              <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
  Manufacturing Unit Registration
</h1>

<p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
Register your factory,
production facility or
manufacturing unit with UrbanLoop.
</p>

            </div>

<div className="mb-10 flex justify-center">

  <Link
    href="/join-urbanloop/business-registration"
    className="inline-flex items-center gap-2 rounded-xl border border-[#72B543] px-5 py-3 text-sm font-medium text-[#72B543] transition-all duration-300 hover:bg-[#72B543] hover:text-white"
  >
    ← Back
  </Link>

</div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]"
            >

              {/* CONTACT INFORMATION */}

              <h2 className="mb-8 text-2xl font-bold text-slate-900">
                Business Contact Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) =>
                      setFullName(
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) =>
                      setMobileNumber(
                        e.target.value
                          .replace(
                            /\D/g,
                            ""
                          )
                          .slice(
                            0,
                            10
                          )
                      )
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Alternate Mobile
                  </label>

                  <input
                    type="tel"
                    value={alternateMobile}
                    onChange={(e) =>
                      setAlternateMobile(
                        e.target.value
                          .replace(
                            /\D/g,
                            ""
                          )
                          .slice(
                            0,
                            10
                          )
                      )
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

              </div>

              {/* ADDRESS SECTION */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
              <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
                Business Address
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

             <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Unit / Shop Number *
                  </label>

                  <input
                    type="text"
                    value={shopNumber}
                    onChange={(e) =>
                      setShopNumber(e.target.value)
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Business / Building Name *
                  </label>

                  <input
                    type="text"
                    value={buildingName}
                    onChange={(e) =>
                      setBuildingName(e.target.value)
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Street / Area *
                  </label>

                  <input
                    type="text"
                    value={streetArea}
                    onChange={(e) =>
                      setStreetArea(e.target.value)
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Landmark
                  </label>

                  <input
                    type="text"
                    value={landmark}
                    onChange={(e) =>
                      setLandmark(e.target.value)
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    PIN Code *
                  </label>

                  <input
                    type="text"
                    value={pinCode}
                    onChange={(e) =>
                      setPinCode(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6)
                      )
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    City *
                  </label>

                  <input
                    type="text"
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    State *
                  </label>

                  <input
                    type="text"
                    value={stateName}
                    onChange={(e) =>
                      setStateName(e.target.value)
                    }
                    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
                  />
                </div>

              </div>

     {/* MANUFACTURING PROFILE */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Manufacturing Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Industry Type *
  </label>

  <select
    value={businessProfileType}
    onChange={(e) =>
      setBusinessProfileType(e.target.value)
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Industry
    </option>

    <option>Automotive</option>
    <option>Textiles</option>
    <option>Food Processing</option>
    <option>Electronics</option>
    <option>Pharmaceuticals</option>
    <option>Consumer Goods</option>
    <option>Other</option>
  </select>
</div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Facility Size (sq.ft.) *
    </label>

    <input
      type="number"
      value={facilitySize}
      onChange={(e) =>
        setFacilitySize(e.target.value)
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

    <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Monthly Recyclable Waste Generated
    </label>

    <select
      value={monthlyRecyclables}
      onChange={(e) =>
        setMonthlyRecyclables(
          e.target.value
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">
        Select Quantity
      </option>

      <option>
        Less than 100 kg
      </option>

      <option>
        100 - 500 kg
      </option>

      <option>
        500 kg - 1 Ton
      </option>

      <option>
        1+ Ton
      </option>

    </select>
  </div>

</div>

              {/* MATERIAL CATEGORIES */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Material Categories
</h2>

<p className="mb-6 text-slate-600">
  Select recyclable materials generated by your manufacturing operations.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

  {[
    "Scrap Metal",
  "Industrial Plastic",
  "Wood",
  "Packaging Materials",
  "E-Waste",
  "Cardboard",
  "Production Scrap",
  ].map((item) => (
    <label
      key={item}
      className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
    >
      <input
        type="checkbox"
        checked={materialCategories.includes(item)}
        onChange={() =>
          toggleArrayValue(
            item,
            materialCategories,
            setMaterialCategories
          )
        }
        className="h-4 w-4 accent-[#72B543]"
      />

      <span>{item}</span>
    </label>
  ))}

</div>

{/* SERVICE REQUIREMENTS */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Service Requirements
</h2>

<div className="grid gap-4 md:grid-cols-2">

  {[
    
  "Recurring Collection",
  "One-Time Clearance",
  "Asset Recovery",
  "Industrial Scrap Recovery",
  "Packaging Waste Collection",
  "E-Waste Collection",
  "Sustainability Reporting",
  "CSR & ESG Reporting Support",
  ].map((option) => (
    <label
      key={option}
      className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
    >
      <input
        type="checkbox"
        checked={requiredServices.includes(option)}
        onChange={() =>
          toggleArrayValue(
            option,
            requiredServices,
            setRequiredServices
          )
        }
        className="h-4 w-4 accent-[#72B543]"
      />

      <span>{option}</span>
    </label>
  ))}

</div>

<div className="mt-8 grid gap-6 md:grid-cols-3">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Collection Frequency
    </label>

    <select
      value={collectionFrequency}
      onChange={(e) =>
        setCollectionFrequency(
          e.target.value
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">
        Select Frequency
      </option>

      <option>Daily</option>
      <option>Weekly</option>
      <option>Bi-Weekly</option>
      <option>Monthly</option>
      <option>Quarterly</option>
      <option>On-Demand</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Preferred Collection Day
    </label>

    <select
      value={collectionDay}
      onChange={(e) =>
        setCollectionDay(
          e.target.value
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">
        Select Day
      </option>

      <option>Monday</option>
      <option>Tuesday</option>
      <option>Wednesday</option>
      <option>Thursday</option>
      <option>Friday</option>
      <option>Saturday</option>
      <option>Sunday</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Preferred Time Slot
    </label>

    <select
      value={collectionTime}
      onChange={(e) =>
        setCollectionTime(
          e.target.value
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">
        Select Time Slot
      </option>

      <option>
        08:00 AM - 10:00 AM
      </option>

      <option>
        10:00 AM - 12:00 PM
      </option>

      <option>
        12:00 PM - 03:00 PM
      </option>

      <option>
        03:00 PM - 06:00 PM
      </option>

      <option>
        06:00 PM - 08:00 PM
      </option>

    </select>
  </div>

</div>

{/* COMMUNICATION */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Communication Preferences
</h2>

<div className="grid gap-4 md:grid-cols-2">

  {[
    "Email Notifications",
    "SMS Notifications",
    "WhatsApp Notifications",
    "Sustainability & Impact Reports",
  ].map((option) => (
    <label
      key={option}
      className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
    >
      <input
        type="checkbox"
        checked={communicationPreferences.includes(
          option
        )}
        onChange={() =>
          toggleArrayValue(
            option,
            communicationPreferences,
            setCommunicationPreferences
          )
        }
        className="h-4 w-4 accent-[#72B543]"
      />

      <span>{option}</span>
    </label>
  ))}

</div>

{/* REFERRAL */}
<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Referral Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <select
    value={referralSource}
    onChange={(e) =>
      setReferralSource(
        e.target.value
      )
    }
    className="rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Source
    </option>

    <option>
      Google Search
    </option>

    <option>
      LinkedIn
    </option>

    <option>
      Industry Event
    </option>

    <option>
      Existing Customer
    </option>

    <option>
      Social Media
    </option>

    <option>
      Other
    </option>
  </select>

  <input
    type="text"
    value={referralCode}
    onChange={(e) =>
      setReferralCode(
        e.target.value
      )
    }
    placeholder="Referral Code"
    className="rounded-xl border-2 border-slate-300 px-4 py-3"
  />

</div>

<div className="mt-6">

  <textarea
    rows={4}
    value={additionalComments}
    onChange={(e) =>
      setAdditionalComments(
        e.target.value
      )
    }
    placeholder="Additional Comments"
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />

</div>

{/* Declaration & Consent */}
<div className="pt-10"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Declaration & Consent
</h2>

<div className="space-y-5">

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={declarationConfirmed}
  onChange={(e) =>
    setDeclarationConfirmed(
      e.target.checked
    )
  }
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I confirm that all information provided in this registration
      form is accurate and complete to the best of my knowledge.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={termsAccepted}
  onChange={(e) =>
    setTermsAccepted(
      e.target.checked
    )
  }
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I agree to UrbanLoop's Terms & Conditions and Privacy Policy.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={communicationConsent}
  onChange={(e) =>
    setCommunicationConsent(
      e.target.checked
    )
  }
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I consent to receiving service updates, pickup reminders,
      payment notifications and sustainability reports.
    </span>
  </label>

</div>

{/* SUBMIT */}

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="flex flex-col items-center">

    <button
      type="submit"
      className="rounded-xl bg-[#72B543] px-10 py-4 text-lg font-semibold text-white"
    >
      {loading
        ? "Submitting..."
        : "Register Manufacturing Unit"}
    </button>

  </div>

</div>

</form>
          </div>

        </section>

      </main>

      <Footer />
    </>
 );
}