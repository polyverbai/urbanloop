"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function RecyclerPartnerRegistrationPage() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
const [mobileNumber, setMobileNumber] = useState("");
const [email, setEmail] = useState("");
const [alternateMobile, setAlternateMobile] = useState("");

const [shopNumber, setShopNumber] = useState("");
const [buildingName, setBuildingName] = useState("");
const [streetArea, setStreetArea] = useState("");
const [landmark, setLandmark] = useState("");
const [city, setCity] = useState("");
const [stateName, setStateName] = useState("");
const [pinCode, setPinCode] = useState("");

const [partnerType, setPartnerType] = useState("");
const [yearsInOperation, setYearsInOperation] = useState("");
const [coverageArea, setCoverageArea] = useState("");
const [monthlyCapacity, setMonthlyCapacity] = useState("");
const [storageAvailable, setStorageAvailable] = useState("");

const [collectionVehicle, setCollectionVehicle] = useState("");
const [weighingScale, setWeighingScale] = useState("");
const [sortingFacility, setSortingFacility] = useState("");
const [staffCount, setStaffCount] = useState("");

const [materialCategories, setMaterialCategories] = useState<string[]>([]);
const [partnershipInterests, setPartnershipInterests] = useState<string[]>([]);

const [additionalComments, setAdditionalComments] = useState("");

const [declarationConfirmed, setDeclarationConfirmed] = useState(false);
const [termsAccepted, setTermsAccepted] = useState(false);
const [communicationConsent, setCommunicationConsent] = useState(false);

const [vehicleType, setVehicleType] = useState("");
const [vehicleNumber, setVehicleNumber] = useState("");
const [vehicleOwnership, setVehicleOwnership] = useState("");
const [vehicleMake, setVehicleMake] = useState("");
const [driverName, setDriverName] = useState("");
const [driverLicenseNumber, setDriverLicenseNumber] = useState("");

const [vehicleCapacity, setVehicleCapacity] = useState("");
const [serviceRadius, setServiceRadius] = useState("");
const [operatingHours, setOperatingHours] = useState("");

const [vehicleCount, setVehicleCount] = useState("");

const [gstNumber, setGstNumber] = useState("");
const [panNumber, setPanNumber] = useState("");
const [tradeLicenseNumber, setTradeLicenseNumber] = useState("");
const [udyamNumber, setUdyamNumber] = useState("");

const [accountHolderName, setAccountHolderName] = useState("");
const [bankName, setBankName] = useState("");
const [accountNumber, setAccountNumber] = useState("");
const [ifscCode, setIfscCode] = useState("");
const [upiId, setUpiId] = useState("");

const [vehicleRcFile, setVehicleRcFile] = useState<File | null>(null);
const [vehicleInsuranceFile, setVehicleInsuranceFile] = useState<File | null>(null);
const [pollutionCertificateFile, setPollutionCertificateFile] = useState<File | null>(null);

const [driverLicenseFile, setDriverLicenseFile] = useState<File | null>(null);

const [cancelledChequeFile, setCancelledChequeFile] =
  useState<File | null>(null);

  return (
    <>
      <Header />

      <main className="bg-white min-h-screen">

        <section className="bg-gradient-to-b from-[#EAF7D7] via-white to-white py-20">

          <div className="mx-auto max-w-5xl px-6">

            {/* Heading */}

            <div className="mb-12 text-center">

              <h1 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                Recovery Partner Registration
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
                Join UrbanLoop as a Recovery Partner and become part of
                India's growing circular economy ecosystem.
              </p>

            </div>

            {/* Back Button */}

            <div className="mb-10 flex justify-center">

              <Link
                href="/partner-program"
                className="inline-flex items-center gap-2 rounded-xl border border-[#72B543] px-5 py-3 text-sm font-medium text-[#72B543] transition-all duration-300 hover:bg-[#72B543] hover:text-white"
              >
                ← Back
              </Link>

            </div>

            {/* Form */}

            <form
              className="rounded-[32px] border-2 border-[#DDE8D0] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(15,76,129,0.08)]"
            >

              {/* Sections will come here */}

<h2 className="mb-8 text-2xl font-bold text-slate-900">
  Contact Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Full Name *
    </label>

    <input
      type="text"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
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
          e.target.value.replace(/\D/g, "").slice(0, 10)
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
      onChange={(e) => setEmail(e.target.value)}
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
          e.target.value.replace(/\D/g, "").slice(0, 10)
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

</div>

{/* ADDRESS SECTION */}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Recovery Partner Address
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Shop / Unit Number *
    </label>

    <input
      type="text"
      value={shopNumber}
      onChange={(e) => setShopNumber(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Shop / Business Name *
    </label>

    <input
      type="text"
      value={buildingName}
      onChange={(e) => setBuildingName(e.target.value)}
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
      onChange={(e) => setStreetArea(e.target.value)}
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
      onChange={(e) => setLandmark(e.target.value)}
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
          e.target.value.replace(/\D/g, "").slice(0, 6)
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
      onChange={(e) => setCity(e.target.value)}
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
      onChange={(e) => setStateName(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

</div>

{/* RECOVERY PARTNER PROFILE */}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Recovery Partner Profile
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Partner Type *
    </label>

    <select
      value={partnerType}
      onChange={(e) => setPartnerType(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">Select Partner Type</option>
      <option>Kabadi Shop</option>
      <option>Scrap Dealer</option>
      <option>Collection Center</option>
      <option>Aggregator</option>
      <option>Recycler</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Years In Operation *
    </label>

    <input
      type="number"
      value={yearsInOperation}
      onChange={(e) => setYearsInOperation(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Service Coverage Area *
    </label>

    <input
      type="text"
      value={coverageArea}
      onChange={(e) => setCoverageArea(e.target.value)}
      placeholder="Example: RT Nagar, Hebbal, Yelahanka"
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Monthly Material Handling Capacity *
    </label>

    <select
      value={monthlyCapacity}
      onChange={(e) => setMonthlyCapacity(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">Select Capacity</option>
      <option>Less than 1 Ton</option>
      <option>1 - 5 Tons</option>
      <option>5 - 10 Tons</option>
      <option>10 - 25 Tons</option>
      <option>25+ Tons</option>
    </select>
  </div>

</div>

{/* OPERATIONAL INFRASTRUCTURE */}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Operational Infrastructure
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Collection Vehicle Available *
    </label>

    <select
      value={collectionVehicle}
      onChange={(e) => setCollectionVehicle(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">Select</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Weighing Scale Available *
    </label>

    <select
      value={weighingScale}
      onChange={(e) => setWeighingScale(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">Select</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Sorting Facility Available *
    </label>

    <select
      value={sortingFacility}
      onChange={(e) => setSortingFacility(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">Select</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Storage Space Available *
    </label>

    <select
      value={storageAvailable}
      onChange={(e) => setStorageAvailable(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    >
      <option value="">Select</option>
      <option>Yes</option>
      <option>No</option>
      <option>Limited</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Collection Staff Count *
    </label>

    <input
      type="number"
      value={staffCount}
      onChange={(e) => setStaffCount(e.target.value)}
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

</div>

{collectionVehicle === "Yes" && (

  <>
  <div className="grid gap-6 md:grid-cols-2 mb-5"></div>
    <h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
      Vehicle Information
    </h2>

    <div className="grid gap-6 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Vehicle Type *
        </label>

        <select
          value={vehicleType}
          onChange={(e) =>
            setVehicleType(e.target.value)
          }
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
        >
          <option value="">
            Select Vehicle Type
          </option>

          <option>Two Wheeler</option>
          <option>Three Wheeler</option>
          <option>Mini Goods Vehicle</option>
          <option>Pickup Truck</option>
          <option>Tempo</option>
          <option>Mini Truck</option>
          <option>Container Vehicle</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Vehicle Number *
        </label>

        <input
          type="text"
          value={vehicleNumber}
          onChange={(e) =>
            setVehicleNumber(e.target.value.toUpperCase())
          }
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Vehicle Ownership *
        </label>

        <select
          value={vehicleOwnership}
          onChange={(e) =>
            setVehicleOwnership(e.target.value)
          }
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
        >
          <option value="">
            Select Ownership
          </option>

          <option>Owned</option>
          <option>Rented</option>
          <option>Leased</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Vehicle Make / Model
        </label>

        <input
          type="text"
          value={vehicleMake}
          onChange={(e) =>
            setVehicleMake(e.target.value)
          }
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Driver Name
        </label>

        <input
          type="text"
          value={driverName}
          onChange={(e) =>
            setDriverName(e.target.value)
          }
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Driver License Number
        </label>

        <input
          type="text"
          value={driverLicenseNumber}
          onChange={(e) =>
            setDriverLicenseNumber(e.target.value)
          }
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
        />

      </div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Number Of Collection Vehicles *
  </label>

  <input
    type="number"
    min="1"
    value={vehicleCount}
    onChange={(e) =>
      setVehicleCount(e.target.value)
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Vehicle Load Capacity *
  </label>

  <select
    value={vehicleCapacity}
    onChange={(e) =>
      setVehicleCapacity(e.target.value)
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Capacity
    </option>

    <option>Up to 100 Kg</option>
    <option>100 - 500 Kg</option>
    <option>500 Kg - 1 Ton</option>
    <option>1 - 3 Tons</option>
    <option>3 - 5 Tons</option>
    <option>5+ Tons</option>
  </select>
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Maximum Service Radius *
  </label>

  <select
    value={serviceRadius}
    onChange={(e) =>
      setServiceRadius(e.target.value)
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Radius
    </option>

    <option>5 KM</option>
    <option>10 KM</option>
    <option>20 KM</option>
    <option>30 KM</option>
    <option>50 KM+</option>
  </select>
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Collection Availability *
  </label>

  <select
    value={operatingHours}
    onChange={(e) =>
      setOperatingHours(e.target.value)
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  >
    <option value="">
      Select Availability
    </option>

    <option>06:00 AM - 12:00 PM</option>
    <option>12:00 PM - 06:00 PM</option>
    <option>06:00 PM - 10:00 PM</option>
    <option>24 Hours</option>
  </select>
</div>

    </div>
  </>

)}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Documents & Compliance
</h2>

<div>
  <label className="mb-2 block text-sm font-medium text-slate-700">
    Upload Vehicle RC Book *
  </label>

  <input
    type="file"
    accept=".pdf,.jpg,.jpeg,.png"
    onChange={(e) =>
      setVehicleRcFile(
        e.target.files?.[0] || null
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />
</div>

<div className="mt-6 grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Upload Driver License
    </label>

    <input
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={(e) =>
        setDriverLicenseFile(
          e.target.files?.[0] || null
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Upload Vehicle Insurance
    </label>

    <input
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={(e) =>
        setVehicleInsuranceFile(
          e.target.files?.[0] || null
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Upload Pollution Certificate (PUC)
    </label>

    <input
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      onChange={(e) =>
        setPollutionCertificateFile(
          e.target.files?.[0] || null
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

</div>



{/* BUSINESS & COMPLIANCE */}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>
<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Business & Compliance Information
</h2>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      GST Number
    </label>

    <input
      type="text"
      value={gstNumber}
      onChange={(e) =>
        setGstNumber(e.target.value.toUpperCase())
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      PAN Number
    </label>

    <input
      type="text"
      value={panNumber}
      onChange={(e) =>
        setPanNumber(e.target.value.toUpperCase())
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Trade License Number
    </label>

    <input
      type="text"
      value={tradeLicenseNumber}
      onChange={(e) =>
        setTradeLicenseNumber(e.target.value)
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Udyam Registration Number
    </label>

    <input
      type="text"
      value={udyamNumber}
      onChange={(e) =>
        setUdyamNumber(e.target.value)
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

</div>

{/* BANKING INFORMATION */}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Banking Information
</h2>

<p className="mb-6 text-slate-600">
  Payment details for collections, incentives and future settlements.
</p>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Account Holder Name *
    </label>

    <input
      type="text"
      value={accountHolderName}
      onChange={(e) =>
        setAccountHolderName(e.target.value)
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Bank Name *
    </label>

    <input
      type="text"
      value={bankName}
      onChange={(e) =>
        setBankName(e.target.value)
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Account Number *
    </label>

    <input
      type="text"
      value={accountNumber}
      onChange={(e) =>
        setAccountNumber(
          e.target.value.replace(/\D/g, "")
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
      IFSC Code *
    </label>

    <input
      type="text"
      value={ifscCode}
      onChange={(e) =>
        setIfscCode(
          e.target.value.toUpperCase()
        )
      }
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
    />
  </div>

  <div className="md:col-span-2">
    <label className="mb-2 block text-sm font-medium text-slate-700">
      UPI ID (Optional)
    </label>

    <input
      type="text"
      value={upiId}
      onChange={(e) =>
        setUpiId(e.target.value)
      }
      placeholder="example@upi"
      className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"

    />

    <div className="mt-6">

  <label className="mb-2 block text-sm font-medium text-slate-700">
    Upload Cancelled Cheque / Bank Proof
  </label>

  <input
    type="file"
    accept=".pdf,.jpg,.jpeg,.png"
    onChange={(e) =>
      setCancelledChequeFile(
        e.target.files?.[0] || null
      )
    }
    className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
  />

</div>
  </div>

</div>

{/* MATERIAL CATEGORIES */}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Material Categories Handled
</h2>

<p className="mb-6 text-slate-600">
  Select the material categories currently collected or processed.
</p>

<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

  {[
    "Paper & Cardboard",
    "Plastic",
    "Metal",
    "Glass",
    "E-Waste",
    "Textiles",
    "Rubber",
    "Organic Waste",
    "Mixed Recyclables",
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

{/* PARTNERSHIP INTERESTS */}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Partnership Interests
</h2>

<p className="mb-6 text-slate-600">
  Select the collection opportunities you are interested in servicing.
</p>

<div className="grid gap-4 md:grid-cols-2">

  {[
    "Households",
    "Apartment Communities",
    "Retail Businesses",
    "Restaurants & Hotels",
    "Corporate Offices",
    "Educational Institutions",
    "Hospitals & Clinics",
    "Bulk Waste Collection",
    "Organic Waste Programs",
    "E-Waste Collection",
  ].map((item) => (
    <label
      key={item}
      className="flex items-center gap-3 rounded-2xl border border-[#DDE8D0] p-4"
    >
      <input
        type="checkbox"
        checked={partnershipInterests.includes(item)}
        onChange={() =>
          toggleArrayValue(
            item,
            partnershipInterests,
            setPartnershipInterests
          )
        }
        className="h-4 w-4 accent-[#72B543]"
      />

      <span>{item}</span>
    </label>
  ))}

</div>

{/* ADDITIONAL COMMENTS */}

<div className="grid gap-6 md:grid-cols-2 mb-5"></div>

<h2 className="mt-12 mb-8 text-2xl font-bold text-slate-900">
  Additional Information
</h2>

<textarea
  rows={5}
  value={additionalComments}
  onChange={(e) =>
    setAdditionalComments(e.target.value)
  }
  placeholder="Tell us more about your operations, service areas, material handling capabilities, certifications, or anything else that may help us evaluate your partnership application."
  className="w-full rounded-xl border-2 border-slate-300 px-4 py-3"
/>

{/* DECLARATION */}

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
        setDeclarationConfirmed(e.target.checked)
      }
      className="mt-1 h-4 w-4 accent-[#72B543]"
    />

    <span className="text-slate-700">
      I confirm that all information provided in this registration form is accurate and complete.
    </span>

  </label>

  <label className="flex items-start gap-3">

    <input
      type="checkbox"
      checked={termsAccepted}
      onChange={(e) =>
        setTermsAccepted(e.target.checked)
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
        setCommunicationConsent(e.target.checked)
      }
      className="mt-1 h-4 w-4 accent-[#72B543]"
    />

    <span className="text-slate-700">
      I consent to receive updates regarding partnership opportunities, onboarding, collections and sustainability initiatives.
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
        : "Register Recovery Partner"}
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

function toggleArrayValue(
  value: string,
  current: string[],
  setter: React.Dispatch<React.SetStateAction<string[]>>
) {
  if (current.includes(value)) {
    setter(current.filter((item) => item !== value));
  } else {
    setter([...current, value]);
  }
}

