"use client";

import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";

import SectionCard from "@/components/forms/SectionCard";
import CheckboxGroup from "@/components/forms/CheckboxGroup";
import SelectField from "@/components/forms/SelectField";
import InputField from "@/components/forms/InputField";



import {
  PICKUP_DAYS,
  PICKUP_TIME,
  BANKS,
} from "../constants";

import type {
  CoveragePayment,
  CollectionPartnerForm,
} from "../types";

interface Step6CoveragePaymentProps {
  data: CoveragePayment;
  errors: Record<string, string>;

  updateField: <
    T extends keyof CollectionPartnerForm,
    K extends keyof CollectionPartnerForm[T]
  >(
    section: T,
    field: K,
    value: CollectionPartnerForm[T][K]
  ) => void;
}

export default function Step6CoveragePayment({

    data,

    errors,

    updateField,

}: Step6CoveragePaymentProps) {

  const [operatingAreasText, setOperatingAreasText] =
    useState("");

const [bankSearch, setBankSearch] = useState("");

const [showBankList, setShowBankList] = useState(false);
const [bankResults, setBankResults] = useState<
{
    bank: string;
}[]
>([]);

const [states, setStates] = useState<string[]>([]);
const [districts, setDistricts] = useState<string[]>([]);
const [branches, setBranches] = useState<string[]>([]);
const [addresses, setAddresses] = useState<string[]>([]);

const bankRef = useRef<HTMLDivElement>(null);

/* ==========================================
   LOAD STATES WHEN BANK CHANGES
========================================== */

useEffect(() => {

    if (data.bankName) {

        console.log("Reloading states for:", data.bankName);

        loadStates(data.bankName);

    }

}, [data.bankName]);

const searchBanks = async (search: string) => {

    if (search.trim().length < 2) {

        setBankResults([]);

        return;
    }

    const { data, error } = await supabase
    .from("bank_branches")
    .select("bank")
    .ilike("bank", `${search}%`)
    .limit(15);

    if (error) {

        console.log(error);

        return;
    }

    const unique = [
    ...new Map(
        data.map((item) => [
            item.bank.trim(),
            item
        ])
    ).values(),
];

setBankResults(unique);
};

const loadStates = async (bankName: string) => {

    console.log("================================");
    console.log("Loading States For :", bankName);

    const PAGE_SIZE = 1000;

    let from = 0;

    let allRows: { state: string }[] = [];

    while (true) {

        const { data, error, count } = await supabase
            .from("bank_branches")
            .select("state", { count: "exact" })
            .eq("bank", bankName)
            .order("state")
            .range(from, from + PAGE_SIZE - 1);

        console.log("COUNT :", count);
        console.log("Fetching :", from, "to", from + PAGE_SIZE - 1);
        console.log("Rows Returned :", data?.length);

        if (error) {
            console.log(error);
            return;
        }

        if (!data || data.length === 0) {
            break;
        }

        allRows.push(...data);

        if (data.length < PAGE_SIZE) {
            break;
        }

        from += PAGE_SIZE;
    }

    console.log("TOTAL ROWS :", allRows.length);

    const uniqueStates = [
        ...new Set(
            allRows
                .map((x) => x.state)
                .filter(Boolean)
        ),
    ].sort();

    console.log("TOTAL STATES :", uniqueStates.length);
    console.log(uniqueStates);

    setStates(uniqueStates);
};

const loadDistricts = async (
    bankName: string,
    state: string
) => {

    let from = 0;
    const pageSize = 1000;
    let allRows: { district: string }[] = [];

    while (true) {

        console.log("Loading Districts:", from);

        const { data, error } = await supabase
            .from("bank_branches")
            .select("district")
            .eq("bank", bankName)
            .eq("state", state)
            .order("district")
            .range(from, from + pageSize - 1);

        if (error) {
            console.log(error);
            return;
        }

        if (!data || data.length === 0) {
            break;
        }

        allRows.push(...data);

        if (data.length < pageSize) {
            break;
        }

        from += pageSize;
    }

    console.log("District Records :", allRows.length);

    const uniqueDistricts = [
        ...new Set(
            allRows
                .map(x => x.district)
                .filter(Boolean)
        ),
    ].sort();

    console.log("District Count :", uniqueDistricts.length);

    setDistricts(uniqueDistricts);
};

const loadBranches = async (
    bankName: string,
    state: string,
    district: string
) => {

    let from = 0;
    const pageSize = 1000;
    let allRows: { branch: string }[] = [];

    while (true) {

        console.log("Loading Branches:", from);

        const { data, error } = await supabase
            .from("bank_branches")
            .select("branch")
            .eq("bank", bankName)
            .eq("state", state)
            .eq("district", district)
            .order("branch")
            .range(from, from + pageSize - 1);

        if (error) {
            console.log(error);
            return;
        }

        if (!data || data.length === 0) {
            break;
        }

        allRows.push(...data);

        if (data.length < pageSize) {
            break;
        }

        from += pageSize;
    }

    console.log("Branch Records :", allRows.length);

    const uniqueBranches = [
        ...new Set(
            allRows
                .map(x => x.branch)
                .filter(Boolean)
        ),
    ].sort();

    console.log("Branch Count :", uniqueBranches.length);

    setBranches(uniqueBranches);
};

const loadAddresses = async (
    bankName: string,
    state: string,
    district: string,
    branch: string
) => {

    let from = 0;
    const pageSize = 1000;
    let allRows: { address: string }[] = [];

    while (true) {

        console.log("Loading Addresses:", from);

        const { data, error } = await supabase
            .from("bank_branches")
            .select("address")
            .eq("bank", bankName)
            .eq("state", state)
            .eq("district", district)
            .eq("branch", branch)
            .order("address")
            .range(from, from + pageSize - 1);

        if (error) {
            console.log(error);
            return;
        }

        if (!data || data.length === 0) {
            break;
        }

        allRows.push(...data);

        if (data.length < pageSize) {
            break;
        }

        from += pageSize;
    }

    console.log("Address Records :", allRows.length);

    const uniqueAddresses = [
        ...new Set(
            allRows
                .map(x => x.address)
                .filter(Boolean)
        ),
    ].sort();

    console.log("Address Count :", uniqueAddresses.length);

    setAddresses(uniqueAddresses);
};

  useEffect(() => {
    setOperatingAreasText(
      data.operatingAreas.join(", ")
    );
  }, [data.operatingAreas]);

  const handlePickupDaysChange = (
      values: string[],
      clickedValue?: string
) => {

  const allDays = PICKUP_DAYS.filter(
    (day) => day !== "All Days"
  );

  // User clicked All Days.
  if (clickedValue === "All Days") {

    // Everything already selected.
    if (
      data.preferredPickupDays.length ===
      allDays.length
    ) {
      updateField(
        "coveragePayment",
        "preferredPickupDays",
        []
      );
    } else {
      updateField(
        "coveragePayment",
        "preferredPickupDays",
        allDays
      );
    }

    return;
  }

  // Remove All Days before saving.
  const selectedDays = values.filter(
    (value) => value !== "All Days"
  );

  updateField(
    "coveragePayment",
    "preferredPickupDays",
    selectedDays
  );
};

  return (
    <div className="space-y-8">

      <SectionCard
        title="Coverage Area"
        description="Specify the locations and pickup schedule."
      >

        <InputField
          label="Operating Areas"
          name="operatingAreas"
          value={operatingAreasText}
          placeholder="Example: Bengaluru North, Whitefield, Indiranagar"
          required
          error={errors.operatingAreas}
          onChange={(value) => {
    setOperatingAreasText(value);
}}

onBlur={() =>
    updateField(
        "coveragePayment",
        "operatingAreas",
        operatingAreasText
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
    )
}
        />

        <div className="mt-8">

          <CheckboxGroup
            label="Preferred Pickup Days"
            values={
  data.preferredPickupDays.length ===
  PICKUP_DAYS.length - 1
    ? PICKUP_DAYS
    : data.preferredPickupDays
}
            required
            error={errors.preferredPickupDays}
            options={PICKUP_DAYS.map((day) => ({
              label: day,
              value: day,
            }))}
            onChange={handlePickupDaysChange}
          />

        </div>

        <div className="mt-8">

          <SelectField
            label="Preferred Pickup Time"
            name="preferredPickupTime"
            value={data.preferredPickupTime}
            placeholder="Select Pickup Time"
            required
            error={errors.preferredPickupTime}
            options={PICKUP_TIME}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "preferredPickupTime",
                value
              )
            }
          />

        </div>

      </SectionCard>

      <SectionCard
        title="Payment Information"
        description="Provide your bank account details."
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


<div className="relative" ref={bankRef}>

    <label className="block text-sm font-semibold text-gray-700 mb-2">
        Bank Name
        <span className="text-red-500 ml-1">*</span>
    </label>

    <input
        type="text"
        value={bankSearch || data.bankName}
        placeholder="Search Bank..."
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-200"
        onFocus={() => setShowBankList(true)}
        onChange={(e) => {

    const value = e.target.value;

    setBankSearch(value);

    setShowBankList(true);

    searchBanks(value);

}}
    />
{showBankList && bankResults.length > 0 && (

<div className="absolute z-50 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-64 overflow-y-auto">

{bankResults.map((bank) => (

<div
    key={bank.bank}
    className="px-4 py-2 cursor-pointer hover:bg-green-100"
    onClick={() => {

        setBankSearch(bank.bank);

        setShowBankList(false);

        updateField(
            "coveragePayment",
            "bankName",
bank.bank
        );

        updateField(
            "coveragePayment",
            "bankState",
            ""
        );

        updateField(
            "coveragePayment",
            "bankDistrict",
            ""
        );

        updateField(
            "coveragePayment",
            "bankBranch",
            ""
        );

        updateField(
            "coveragePayment",
            "bankAddress",
            ""
        );

        updateField(
            "coveragePayment",
            "ifscCode",
            ""
        );

    }}
>

{bank.bank}

</div>

))}

</div>

)}

</div>

<SelectField
    label="State"
    name="bankState"
    value={data.bankState}
    placeholder="Select State"
    required
    options={states.map((state) => ({
        label: state,
        value: state,
    }))}
    onChange={(value) => {

        updateField(
    "coveragePayment",
    "bankState",
    value
);

loadDistricts(
    data.bankName,
    value
);

updateField(
    "coveragePayment",
    "bankDistrict",
    ""
);

        updateField(
            "coveragePayment",
            "bankBranch",
            ""
        );

        updateField(
            "coveragePayment",
            "ifscCode",
            ""
        );

    }}
/>

<SelectField
    label="District"
    name="bankDistrict"
    value={data.bankDistrict}
    placeholder="Select District"
    required
    error={errors.bankDistrict}
    options={districts.map((district) => ({
        label: district,
        value: district,
    }))}
    onChange={(value) => {

    updateField(
        "coveragePayment",
        "bankDistrict",
        value
    );

    loadBranches(
        data.bankName,
        data.bankState,
        value
    );

    updateField(
        "coveragePayment",
        "bankBranch",
        ""
    );

    updateField(
        "coveragePayment",
        "bankAddress",
        ""
    );

    updateField(
        "coveragePayment",
        "ifscCode",
        ""
    );

}}
/>

<SelectField
    label="Area / Branch"
    name="bankBranch"
    value={data.bankBranch}
    placeholder="Select Branch"
    required
    error={errors.bankBranch}
    options={branches.map((branch) => ({
        label: branch,
        value: branch,
    }))}
    onChange={async (value) => {

    updateField(
        "coveragePayment",
        "bankBranch",
        value
    );

    updateField(
        "coveragePayment",
        "bankAddress",
        ""
    );

loadAddresses(
    data.bankName,
    data.bankState,
    data.bankDistrict,
    value
);

    const { data: branchData } = await supabase
    .from("bank_branches")
    .select("address, ifsc")
    .eq("bank", data.bankName)
    .eq("state", data.bankState)
    .eq("district", data.bankDistrict)
    .eq("branch", value)
    .limit(1);

if (branchData?.length) {
    updateField(
        "coveragePayment",
        "bankAddress",
        branchData[0].address
    );

    updateField(
        "coveragePayment",
        "ifscCode",
        branchData[0].ifsc
    );
}

    }}
/>

<SelectField
    label="Branch Address"
    name="bankAddress"
    value={data.bankAddress}
    placeholder="Select Address"
    required
    error={errors.bankAddress}
    options={addresses.map((address) => ({
        label: address,
        value: address,
    }))}
    onChange={async (value) => {

    updateField(
        "coveragePayment",
        "bankAddress",
        value
    );

    const { data: bankData, error } = await supabase
        .from("bank_branches")
        .select("ifsc")
        .eq("bank", data.bankName)
        .eq("state", data.bankState)
        .eq("district", data.bankDistrict)
        .eq("branch", data.bankBranch)
        .eq("address", value)
        .limit(1);

    if (error) {
        console.log(error);
        return;
    }

    updateField(
        "coveragePayment",
        "ifscCode",
        bankData?.[0]?.ifsc ?? ""
    );

}}
/>

          <InputField
            label="Account Holder Name"
            name="accountHolderName"
            value={data.accountHolderName}
            required
            error={errors.accountHolderName}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "accountHolderName",
                value
              )
            }
          />

          <InputField
            label="Account Number"
            name="accountNumber"
            value={data.accountNumber}
            required
            error={errors.accountNumber}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "accountNumber",
                value.replace(/\D/g, "")
              )
            }
          />

<InputField
    label="Confirm Account Number"
    name="confirmAccountNumber"
    value={data.confirmAccountNumber}
    required
    error={errors.confirmAccountNumber}
    onChange={(value) =>
        updateField(
            "coveragePayment",
            "confirmAccountNumber",
            value.replace(/\D/g, "")
        )
    }
/>

          <InputField
    label="IFSC Code"
    name="ifscCode"
    value={data.ifscCode}
    required
    error={errors.ifscCode}
    disabled
    onChange={() => {}}
/>

          <InputField
            label="UPI ID"
            name="upiId"
            value={data.upiId}
            error={errors.upiId}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "upiId",
                value
              )
            }
          />

        </div>

      </SectionCard>

      <SectionCard
        title="Emergency Contact"
        description="Provide an alternate emergency contact."
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputField
            label="Emergency Contact Name"
            name="emergencyContactName"
            value={data.emergencyContactName}
            required
            error={errors.emergencyContactName}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "emergencyContactName",
                value
              )
            }
          />

          <InputField
            label="Emergency Contact Number"
            name="emergencyContactNumber"
            value={data.emergencyContactNumber}
            required
            maxLength={10}
            error={errors.emergencyContactNumber}
            onChange={(value) =>
              updateField(
                "coveragePayment",
                "emergencyContactNumber",
                value.replace(/\D/g, "").slice(0, 10)
              )
            }
          />

        </div>

      </SectionCard>

    </div>
  );
}