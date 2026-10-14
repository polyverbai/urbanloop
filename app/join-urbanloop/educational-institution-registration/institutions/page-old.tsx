"use client";

import InstitutionInformationSection from "./components/InstitutionInformationSection";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RegistrationDuplicateModal from "@/components/common/RegistrationDuplicateModal";

import InstitutionAddressSection from "./components/InstitutionAddressSection";
import MaterialCollectionSection from "./components/MaterialCollectionSection";
import CommunicationSection from "./components/CommunicationSection";
import ReferralSection from "./components/ReferralSection";

import DeclarationSection from "./components/DeclarationSection";

import type {
  EducationalInstitutionForm,
} from "./components/types";

export default function EducationalInstitutionRegistrationPage() {
  const router = useRouter();
const [loading, setLoading] = useState(false);

const [
  institutionCategory,
  setInstitutionCategory,
] = useState("");

const [errors, setErrors] = useState<Record<string, string>>({});

const [formData, setFormData] =
  useState<EducationalInstitutionForm>({
    institutionInformation: {
      institutionCategory: "",
      institutionName: "",
      website: "",
      yearEstablished: "",
    },

    contactInformation: {
      contactPersonName: "",
      designation: "",
      mobileNumber: "",
      email: "",
    },

    institutionAddress: {
      buildingNumber: "",
      buildingName: "",
      streetArea: "",
      landmark: "",
      city: "",
      stateName: "",
      pinCode: "",
    },

    materialCollection: {
      materialCategories: [],
      monthlyRecyclables: "",
      pickupFrequency: "",
      pickupDay: "",
      pickupTime: "",
    },

    communicationInformation: {
      communicationPreferences: [],
    },

    referralInformation: {
      referralSource: "",
      referralCode: "",
      additionalComments: "",
    },

    declarationInformation: {
      declarationConfirmed: false,
      termsAccepted: false,
      communicationConsent: false,
    },
  });

  const updateInstitutionInformation = (
  field: keyof EducationalInstitutionForm["institutionInformation"],
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    institutionInformation: {
      ...prev.institutionInformation,
      [field]: value,
    },
  }));
};

const updateContactInformation = (
  field: keyof EducationalInstitutionForm["contactInformation"],
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    contactInformation: {
      ...prev.contactInformation,
      [field]: value,
    },
  }));
};

const updateInstitutionAddress = (
  field: keyof EducationalInstitutionForm["institutionAddress"],
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    institutionAddress: {
      ...prev.institutionAddress,
      [field]: value,
    },
  }));
};

const updateMaterialCollection = (
  field: keyof EducationalInstitutionForm["materialCollection"],
  value: string | string[]
) => {
  setFormData((prev) => ({
    ...prev,
    materialCollection: {
      ...prev.materialCollection,
      [field]: value,
    },
  }));
};

const updateCommunicationInformation = (
  field: keyof EducationalInstitutionForm["communicationInformation"],
  value: string[]
) => {
  setFormData((prev) => ({
    ...prev,
    communicationInformation: {
      ...prev.communicationInformation,
      [field]: value,
    },
  }));
};

const updateReferralInformation = (
  field: keyof EducationalInstitutionForm["referralInformation"],
  value: string
) => {
  setFormData((prev) => ({
    ...prev,
    referralInformation: {
      ...prev.referralInformation,
      [field]: value,
    },
  }));
};

const updateDeclarationInformation = (
  field: keyof EducationalInstitutionForm["declarationInformation"],
  value: boolean
) => {
  setFormData((prev) => ({
    ...prev,
    declarationInformation: {
      ...prev.declarationInformation,
      [field]: value,
    },
  }));
};

const [showDuplicateModal,
  setShowDuplicateModal] =
  useState(false);

const [duplicateField,
  setDuplicateField] =
  useState("");

const [duplicateValue,
  setDuplicateValue] =
  useState("");

  // Arrays
const [
  materialCategories,
  setMaterialCategories,
] = useState<string[]>([]);

const [
  monthlyRecyclables,
  setMonthlyRecyclables,
] = useState("");


// Pickup
const [
  pickupFrequency,
  setPickupFrequency,
] = useState("");

const [
  pickupDay,
  setPickupDay,
] = useState("");

const [
  pickupTime,
  setPickupTime,
] = useState("");

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

function validateForm() {
  const newErrors: Record<string, string> = {};

if (!formData.institutionInformation.institutionCategory)
  newErrors.institutionCategory =
    "Please select Institution Category";

  if (
  !formData.institutionInformation.institutionName.trim()
)
  newErrors.institutionName =
    "Institution Name is required";

  if (
  !formData.contactInformation.contactPersonName.trim()
)
  newErrors.contactPersonName =
    "Contact Person Name is required";

  if (
  !formData.contactInformation.designation.trim()
)
  newErrors.designation =
    "Designation is required";

  if (
  !/^\d{10}$/.test(
    formData.contactInformation.mobileNumber
  )
)
  newErrors.mobileNumber =
    "Mobile number should be 10 digits";

  if (
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    
    formData.contactInformation.email
  )
) {
  newErrors.email =
    "Please enter a valid email address";
}

  if (
  !formData.institutionAddress.buildingNumber.trim() &&
  !formData.institutionAddress.buildingName.trim() &&
  !formData.institutionAddress.streetArea.trim()
)
  newErrors.address =
    "Institution Address is required";

  if (
  !formData.institutionAddress.landmark.trim()
)
  newErrors.landmark =
    "Landmark is required";

  if (
  !formData.institutionAddress.city.trim()
)
  newErrors.city =
    "City is required";

  if (
  !formData.institutionAddress.stateName.trim()
)
  newErrors.stateName =
    "State is required";

  if (
  !formData.institutionAddress.pinCode.trim()
)
  newErrors.pinCode =
    "PIN Code is required";

  if (
  formData.materialCollection.materialCategories.length === 0
)
    newErrors.materialCategories =
      "Select at least one category";

      if (
  !formData.materialCollection.monthlyRecyclables
)
newErrors.monthlyRecyclables =
      "Select monthly recyclables";

    if (
  !formData.materialCollection.pickupFrequency
)
    newErrors.pickupFrequency =
      "Select pickup frequency";

    if (
  !formData.materialCollection.pickupDay
)
    newErrors.pickupDay =
      "Select pickup day";

if (
  !formData.materialCollection.pickupTime
)
newErrors.pickupTime =
      "Select pickup time";

  if (
  formData.communicationInformation
    .communicationPreferences.length === 0
)
    newErrors.communicationPreferences =
      "Select at least one preference";

  if (
  !formData.referralInformation.referralSource
)
    newErrors.referralSource =
      "Select referral source";

  if (
  !formData.declarationInformation.declarationConfirmed
)
    newErrors.declarationConfirmed =
      "Required";

  if (
  !formData.declarationInformation.termsAccepted
)
    newErrors.termsAccepted =
      "Required";

  if (
  !formData.declarationInformation.communicationConsent
)
    newErrors.communicationConsent =
      "Required";

  return newErrors;
}

async function handleSubmit(
  e: React.FormEvent
) {
  e.preventDefault();

  const validationErrors =
    validateForm();

  if (
    Object.keys(validationErrors).length > 0
  ) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});

  setLoading(true);

  // Check duplicate Mobile Number.

const { data: existingMobile } =
await supabase
  .from("educational_registrations")
  .select("id")
  .eq(
  "mobile_number",
  formData.contactInformation.mobileNumber
);

if (
  existingMobile &&
  existingMobile.length > 0
) {

  setDuplicateField(
    "Mobile Number"
  );

  setDuplicateValue(
  formData.contactInformation.mobileNumber
);

  setShowDuplicateModal(
    true
  );

  setLoading(false);

  return;

}

// Check duplicate Email Address.

const { data: existingEmail } =
await supabase
  .from("educational_registrations")
  .select("id")
  .eq(
  "email",
  formData.contactInformation.email
)
  .maybeSingle();

if (existingEmail) {

  setDuplicateField(
    "Email Address"
  );

  setDuplicateValue(
  formData.contactInformation.email
);

  setShowDuplicateModal(
    true
  );

  setLoading(false);

  return;

}

  const { data, error } =
    await supabase
    .from(
      "educational_registrations"
    )
    .insert([
      {
        institution_category:
  formData.institutionInformation.institutionCategory,

        institution_name:
  formData.institutionInformation.institutionName,

        website:
  formData.institutionInformation.website,

year_established:
  formData.institutionInformation.yearEstablished,

        contact_person_name:
  formData.contactInformation.contactPersonName,

designation:
  formData.contactInformation.designation,

        mobile_number:
  formData.contactInformation.mobileNumber,

        email:
  formData.contactInformation.email,

        address:
  formData.institutionAddress.buildingNumber,

        landmark:
  formData.institutionAddress.landmark,

        city:
  formData.institutionAddress.city,

        state_name:
  formData.institutionAddress.stateName,

        pin_code:
  formData.institutionAddress.pinCode,
      
  material_categories:
  formData.materialCollection.materialCategories,

monthly_recyclables:
  formData.materialCollection.monthlyRecyclables,

pickup_frequency:
  formData.materialCollection.pickupFrequency,

pickup_day:
  formData.materialCollection.pickupDay,

pickup_time:
  formData.materialCollection.pickupTime,

communication_preferences:
  formData.communicationInformation.communicationPreferences,

referral_source:
  formData.referralInformation.referralSource,

referral_code:
  formData.referralInformation.referralCode,

additional_comments:
  formData.referralInformation.additionalComments,

declaration_confirmed:
  formData.declarationInformation.declarationConfirmed,

terms_accepted:
  formData.declarationInformation.termsAccepted,

communication_consent:
  formData.declarationInformation.communicationConsent,

      },
    ])
    .select("id")
    .single();

    setLoading(false);

if (error) {
  alert(error.message);
  return;
}

const { count } =
await supabase
  .from(
    "educational_registrations"
  )
  .select("*", {
    count: "exact",
    head: true,
  });

const registrationNumber =
  `UL-EDU-${String(
    count
  ).padStart(6, "0")}`;

await supabase
  .from(
    "educational_registrations"
  )
  .update({
    registration_number:
      registrationNumber,
  })
  .eq(
    "id",
    data.id
  );

router.push(
  `/registration-success?type=Educational Institution Registration&registrationNumber=${registrationNumber}&return=/join-urbanloop/categories&returnText=Back To Categories`
);

}

  return (

    
    <>
      <Header />

      <main className="min-h-screen bg-white">

        <section className="bg-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            {/* Hero Section */}

            <div className="mb-12 text-center">

<h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Educational Institution Registration
              </h1>

<p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Register your educational institution with UrbanLoop to enable responsible recycling, recover reusable assets, manage e-waste efficiently and build a greener, more sustainable campus.
              </p>

              <div className="mt-8 flex justify-center">

                <Link
                      href="/join-urbanloop/categories"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#72B543] px-5 py-3 text-sm font-medium text-[#72B543] transition-all duration-300 hover:bg-[#72B543] hover:text-white"
                >
                  ← Back
                </Link>

              </div>

            </div>

            {/* Form Container */}

            <form
  onSubmit={handleSubmit}
  className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]"
>

             <h2 className="mb-8 text-2xl font-bold text-slate-900">
  Institution Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  {/* Institution Category */}

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Category *
    </label>

    <select
  value={formData.institutionInformation.institutionCategory}
  onChange={(e) => {
  updateInstitutionInformation(
    "institutionCategory",
    e.target.value
  );
}}
>
      <option value="">
        Select Institution
      </option>

      <option>School</option>
      <option>College</option>
      <option>University</option>
      <option>Training Institute</option>
      <option>Coaching Center</option>
      <option>Research Institution</option>

    </select>

{errors.institutionCategory && (
  <p className="mt-1 text-sm text-red-500">
    {errors.institutionCategory}
  </p>
)}

  </div>

  {/* Institution Name */}

  <div>

    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Name *
    </label>

  <input
  type="text"
  value={formData.institutionInformation.institutionName}

  onChange={(e) => {
  updateInstitutionInformation(
    "institutionName",
    e.target.value
  );
}}
  className={`w-full rounded-xl border-2 px-4 py-3 ${
    errors.institutionName
      ? "border-red-500"
      : "border-slate-300"
  }`}
/>

  </div>

  {/* Website */}

  <div>

    <label className="mb-2 block text-sm font-medium text-slate-700">
      Website
    </label>

    <input
  type="text"
  value={formData.institutionInformation.website}
  onChange={(e) => {
  updateInstitutionInformation(
    "website",
    e.target.value
  );
}}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>

  </div>

   {/* Year Established */}

  <div>

    <label className="mb-2 block text-sm font-medium text-slate-700">
      Year Established
    </label>

    <input
  type="number"
  value={formData.institutionInformation.yearEstablished}

  onChange={(e) => {
  updateInstitutionInformation(
    "yearEstablished",
    e.target.value
  );
}}
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>

  </div>

  <div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Contact Person Name *
  </label>

  <input
    type="text"
    value={formData.contactInformation.contactPersonName}

    onChange={(e) => {
  updateContactInformation(
    "contactPersonName",
    e.target.value
  );
}}
    className={`w-full rounded-xl border-2 px-4 py-3 ${
      errors.contactPersonName
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

  {errors.contactPersonName && (
    <p className="mt-1 text-sm text-red-500">
      {errors.contactPersonName}
    </p>
  )}
</div>

  <div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Designation *
  </label>

  <input
    type="text"
    value={formData.contactInformation.designation}

    onChange={(e) => {
  updateContactInformation(
    "designation",
    e.target.value
  );
}}
    className={`w-full rounded-xl border-2 px-4 py-3 ${
      errors.designation
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

  {errors.designation && (
    <p className="mt-1 text-sm text-red-500">
      {errors.designation}
    </p>
  )}
</div>

  <div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Mobile Number *
  </label>

  <input
    type="tel"
    value={formData.contactInformation.mobileNumber}

    onChange={(e) => {
  const value = e.target.value
    .replace(/\D/g, "")
    .slice(0, 10);

  updateContactInformation(
    "mobileNumber",
    value
  );
}}
    className={`w-full rounded-xl border-2 px-4 py-3 ${
      errors.mobileNumber
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

   {errors.mobileNumber && (
    <p className="mt-1 text-sm text-red-500">
      {errors.mobileNumber}
    </p>
  )}
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Email Address *
  </label>

  <input
    type="email"
    value={formData.contactInformation.email}

    onChange={(e) => {
  updateContactInformation(
    "email",
    e.target.value
  );
}}
    className={`w-full rounded-xl border-2 px-4 py-3 ${
      errors.email
        ? "border-red-500"
        : "border-slate-300"
    }`}
  />

  {errors.email && (
    <p className="mt-1 text-sm text-red-500">
      {errors.email}
    </p>
  )}
</div>
</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Institution Address
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div className="md:col-span-2">
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Institution Address *
    </label>

    <input
      type="text"
      value={
  formData.institutionAddress.buildingNumber
}
      onChange={(e) =>
  updateInstitutionAddress(
    "buildingNumber",
    e.target.value
  )
}
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.address
    ? "border-red-500"
    : "border-slate-300"
}`}
    />

{errors.address && (
  <p className="mt-1 text-sm text-red-500">
    {errors.address}
  </p>
)}

  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Landmark *
    </label>

    <input
      type="text"
      value={formData.institutionAddress.landmark}
      onChange={(e) => {
  updateInstitutionAddress(
    "landmark",
    e.target.value
  );
}}
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.landmark
    ? "border-red-500"
    : "border-slate-300"
}`}

    />
{errors.landmark && (
  <p className="mt-1 text-sm text-red-500">
    {errors.landmark}
  </p>
)}

  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      PIN Code *
    </label>

    <input
      type="text"
      value={
  formData.institutionAddress.pinCode
}
      onChange={(e) => {
  updateInstitutionAddress(
    "pinCode",
    e.target.value
  );
}}
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.pinCode
    ? "border-red-500"
    : "border-slate-300"
}`}
    />
  
  {errors.pinCode && (
  <p className="mt-1 text-sm text-red-500">
    {errors.pinCode}
  </p>
)}
  
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      City *
    </label>

    <input
      type="text"
      value={
  formData.institutionAddress.city
}
      onChange={(e) => {
  updateInstitutionAddress(
    "city",
    e.target.value
  );
}}
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.city
    ? "border-red-500"
    : "border-slate-300"
}`}

    />
{errors.city && (
  <p className="mt-1 text-sm text-red-500">
    {errors.city}
  </p>
)}

  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      State *
    </label>

    <input
      type="text"
      value={
  formData.institutionAddress.stateName
}
      onChange={(e) => {
  updateInstitutionAddress(
    "stateName",
    e.target.value
  );
}}
      className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.stateName
    ? "border-red-500"
    : "border-slate-300"
}`}
    />
{errors.stateName && (
  <p className="mt-1 text-sm text-red-500">
    {errors.stateName}
  </p>
)}

  </div>

</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Material Categories
</h2>

<p className="mb-6 text-slate-600">
Select recyclable materials generated within your institution.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

{[
"Paper & Books",
"Plastic",
"Metal",
"Glass",
"E-Waste",
"Laboratory Equipment",
"Furniture",
"Electronic Devices",
"Packaging Materials",
].map((item) => (

<label
key={item}
className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
>

<input
type="checkbox"
checked={
  formData.materialCollection.materialCategories.includes(item)
}

onChange={() => {
  const updated =
    formData.materialCollection.materialCategories.includes(item)
      ? formData.materialCollection.materialCategories.filter(
          (value) => value !== item
        )
      : [
          ...formData.materialCollection.materialCategories,
          item,
        ];

  updateMaterialCollection(
    "materialCategories",
    updated
  );
}}
className="h-4 w-4 accent-[#72B543]"
/>

<span className="font-medium text-slate-700">
{item}
</span>

</label>

))}

</div>

{errors.materialCategories && (
  <p className="mt-2 text-sm text-red-500">
    {errors.materialCategories}
  </p>
)}

<div className="mt-10">

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Monthly Recyclables *
  </label>

  <select
    value={formData.materialCollection.monthlyRecyclables}

    onChange={(e) => {
  updateMaterialCollection(
    "monthlyRecyclables",
    e.target.value
  );
}}
  >
    <option value="">
      Select Monthly Recyclables
    </option>

    <option>Below 50 Kg</option>
    <option>50 - 100 Kg</option>
    <option>100 - 250 Kg</option>
    <option>250 - 500 Kg</option>
    <option>500 Kg - 1 Ton</option>
    <option>Above 1 Ton</option>

  </select>

  {errors.monthlyRecyclables && (
    <p className="mt-1 text-sm text-red-500">
      {errors.monthlyRecyclables}
    </p>
  )}

</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Pickup Preferences
</h2>

<div className="space-y-8">

  <div>

    <label className="mb-4 block text-sm font-medium text-slate-700">
      Preferred Pickup Frequency *
    </label>

    <div
  className={`grid gap-4 md:grid-cols-2 rounded-xl p-3 ${
    errors.pickupFrequency
      ? "border-2 border-red-500"
      : ""
  }`}
>

      {[
        "One-Time Pickup",
        "On-Demand Pickup",
        "Monthly Pickup",
        "Quarterly Pickup",
      ].map((option) => (
        <label
          key={option}
          className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
        >
          <input
  type="radio"
  name="pickupFrequency"
  value={option}
  checked={
  formData.materialCollection.pickupFrequency === option
}

onChange={(e) => {
  updateMaterialCollection(
    "pickupFrequency",
    e.target.value
  );
}}
  className="accent-[#72B543]"
/>

          <span className="font-medium text-slate-700">
            {option}
          </span>
        </label>
      ))}

    </div>

  </div>

{errors.pickupFrequency && (
  <p className="mt-2 text-sm text-red-500">
    {errors.pickupFrequency}
  </p>
)}

  <div className="grid gap-6 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
  Preferred Pickup Day *
</label>

      <select
  value={formData.materialCollection.pickupDay}

  onChange={(e) => {
  updateMaterialCollection(
    "pickupDay",
    e.target.value
  );
}}
  className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.pickupDay
    ? "border-red-500"
    : "border-slate-300"
}`}
>
        <option>Select Day</option>
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
   
   {errors.pickupDay && (
  <p className="mt-1 text-sm text-red-500">
    {errors.pickupDay}
  </p>
)}

    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
  Preferred Time Slot *
</label>

      <select
  value={formData.materialCollection.pickupTime}

  onChange={(e) => {
  updateMaterialCollection(
    "pickupTime",
    e.target.value
  );
}}
  className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.pickupTime
    ? "border-red-500"
    : "border-slate-300"
}`}
>
        <option>Select Time Slot</option>
        <option>08:00 AM - 10:00 AM</option>
        <option>10:00 AM - 12:00 PM</option>
        <option>12:00 PM - 03:00 PM</option>
        <option>03:00 PM - 06:00 PM</option>
        <option>06:00 PM - 08:00 PM</option>
      </select>
   
   {errors.pickupTime && (
  <p className="mt-1 text-sm text-red-500">
    {errors.pickupTime}
  </p>
)}
   
    </div>

  </div>

</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Communication Preferences
</h2>

<p className="mb-6 text-slate-600">
  Choose how you would like UrbanLoop to communicate with you.
</p>

<div
  className={`grid gap-4 md:grid-cols-2 rounded-xl p-3 ${
    errors.communicationPreferences
      ? "border-2 border-red-500"
      : ""
  }`}
>

  {[
    "Email Notifications",
    "SMS Notifications",
    "WhatsApp Notifications",
    "ESG & Sustainability Reports",
  ].map((option) => (
    <label
      key={option}
      className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4 transition-all duration-300 hover:border-[#72B543] hover:bg-[#F8FBF4]"
    >
      <input
  type="checkbox"
  checked={
  formData.communicationInformation.communicationPreferences.includes(option)
}
  onChange={() => {
  const updated =
  formData.communicationInformation.communicationPreferences.includes(option)
    ? formData.communicationInformation.communicationPreferences.filter(
        (item) => item !== option
      )
    : [
        ...formData.communicationInformation.communicationPreferences,
        option,
      ];

updateCommunicationInformation(
  "communicationPreferences",
  updated
);
}}
  className="h-4 w-4 accent-[#72B543]"
/>

      <span className="font-medium text-slate-700">
        {option}
      </span>
    </label>
  ))}

</div>

{errors.communicationPreferences && (
  <p className="mt-2 text-sm text-red-500">
    {errors.communicationPreferences}
  </p>
)}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Referral Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      How Did You Hear About UrbanLoop?
    </label>

    <select
  value={formData.referralInformation.referralSource}
  onChange={(e) => {
  updateReferralInformation(
    "referralSource",
    e.target.value
  );
}}
  className={`w-full rounded-xl border-2 px-4 py-3 ${
  errors.referralSource
    ? "border-red-500"
    : "border-slate-300"
}`}
>
      <option>Select Source</option>
      <option>Google Search</option>
      <option>Social Media</option>
      <option>Friend / Family</option>
      <option>Corporate Partner</option>
      <option>Educational Institution</option>
      <option>Newspaper / Media</option>
      <option>Event / Campaign</option>
      <option>Other</option>
    </select>

    {errors.referralSource && (
  <p className="mt-1 text-sm text-red-500">
    {errors.referralSource}
  </p>
)}

  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Referral Code (Optional)
    </label>

    <input
  type="text"
  value={formData.referralInformation.referralCode}
  onChange={(e) => {
  updateReferralInformation(
    "referralCode",
    e.target.value
  );
}}
  placeholder="Enter Referral Code"
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>
  </div>

</div>

<div className="mt-6">

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Additional Comments (Optional)
  </label>

  <textarea
  rows={4}
  value={formData.referralInformation.additionalComments}

  onChange={(e) => {
  updateReferralInformation(
    "additionalComments",
    e.target.value
  );
}}
  placeholder="Any specific requirements, pickup notes, or comments..."
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>

</div>

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-16 mb-8 text-2xl font-bold text-slate-900">
  Declaration & Consent
</h2>

<div
  className={`space-y-5 rounded-xl p-4 ${
    errors.declarationConfirmed ||
    errors.termsAccepted ||
    errors.communicationConsent
      ? "border-2 border-red-500"
      : ""
  }`}
>

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={
  formData.declarationInformation.declarationConfirmed
}
  onChange={(e) => {
  updateDeclarationInformation(
    "declarationConfirmed",
    e.target.checked
  );
}}
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I confirm that all information provided in this registration form is accurate and complete to the best of my knowledge.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={
  formData.declarationInformation.termsAccepted
}
  onChange={(e) => {
  updateDeclarationInformation(
    "termsAccepted",
    e.target.checked
  );
}}
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I agree to UrbanLoop's Terms & Conditions and Privacy Policy.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
  type="checkbox"
  checked={
  formData.declarationInformation.communicationConsent
}
  onChange={(e) => {
  updateDeclarationInformation(
    "communicationConsent",
    e.target.checked
  );
}}
  className="mt-1 h-4 w-4 accent-[#72B543]"
/>

    <span className="text-slate-700">
      I consent to receiving service updates, pickup reminders, notifications and sustainability reports.
    </span>
  </label>

</div>

{(errors.declarationConfirmed ||
  errors.termsAccepted ||
  errors.communicationConsent) && (
  <p className="mt-3 text-sm text-red-500">
    Please accept all declarations and consents.
  </p>
)}

<div className="mt-12 border-t border-[#E6EFE0] pt-10">

  <div className="text-center">

    <button
  type="submit"
  className="rounded-xl bg-[#72B543] px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_25px_rgba(114,181,67,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5FA032]"
>
  {loading
    ? "Submitting..."
    : "Register Educational Institution"}
</button>
    <p className="mt-4 text-sm text-slate-500">
      Our team will review your registration and contact you shortly.
    </p>
    
</div>
</div>
</form>
</div>
        </section>

      </main>

<RegistrationDuplicateModal
  type="Educational Institution Registration"
  field={duplicateField}
  value={duplicateValue}
  isOpen={showDuplicateModal}
  onClose={() =>
    setShowDuplicateModal(false)
  }
/>

      <Footer />
    </>
  );
}
