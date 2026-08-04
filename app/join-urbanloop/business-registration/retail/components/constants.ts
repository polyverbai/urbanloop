// Business Profile Types
export const BUSINESS_PROFILE_TYPES = [
  "Retail Store",
  "Restaurant & Café",
  "Hotel & Hospitality",
  "Warehouse & Logistics",
  "Manufacturing Unit",
  "Service Business",
  "Office / Commercial Establishment",
  "Other Commercial Establishment",
];

// Monthly Recyclables
export const MONTHLY_RECYCLABLES = [
  "Less than 50 kg",
  "50 - 250 kg",
  "250 - 500 kg",
  "500 kg - 1 Ton",
  "1 - 5 Tons",
  "5+ Tons",
];

// Storage Space
export const STORAGE_SPACE_OPTIONS = [
  "Yes",
  "No",
  "Limited",
];

// Material Categories
export const MATERIAL_CATEGORIES = [
  "Paper & Cardboard",
  "Plastic Packaging",
  "Metal",
  "Glass",
  "E-Waste",
  "Display Fixtures",
  "Wooden Crates",
];

// Recyclable Materials by Business Type

export const BUSINESS_MATERIALS: Record<
  string,
  string[]
> = {

  "Retail Store": [
    "Paper & Cardboard",
    "Plastic Packaging",
    "Metal",
    "Glass",
    "E-Waste",
    "Display Fixtures",
    "Wooden Crates",
  ],

  "Restaurant & Café": [
    "Paper & Cardboard",
    "Plastic Packaging",
    "Glass Bottles",
    "Metal Cans",
    "Food Waste",
    "Used Cooking Oil",
    "Coffee Grounds",
  ],

  "Hotel & Hospitality": [
    "Paper & Cardboard",
    "Plastic Packaging",
    "Glass",
    "Metal",
    "Food Waste",
    "Used Cooking Oil",
    "Linen",
    "E-Waste",
  ],

  "Warehouse & Logistics": [
    "Paper & Cardboard",
    "Stretch Film",
    "Plastic Packaging",
    "Wooden Pallets",
    "Metal",
    "E-Waste",
  ],

  "Manufacturing Unit": [
    "Paper",
    "Plastic",
    "Metal",
    "Glass",
    "Wood",
    "Packaging Material",
    "Fabric",
    "Rubber",
    "E-Waste",
    "Other",
  ],

  "Service Business": [
    "Paper",
    "Plastic",
    "E-Waste",
    "Printer Cartridges",
    "Packaging Material",
  ],

  "Office / Commercial Establishment": [
    "Paper",
    "Plastic",
    "E-Waste",
    "Furniture",
    "Printer Cartridges",
  ],

  "Other Commercial Establishment": [
    "Paper",
    "Plastic",
    "Metal",
    "Glass",
    "E-Waste",
    "Other",
  ],

};

// Service Requirements
export const SERVICE_REQUIREMENTS = [
  "Recurring Collection",
  "One-Time Clearance",
  "Asset Recovery",
  "Furniture Recovery",
  "IT Asset Recovery",
  "E-Waste Collection",
  "Sustainability Reporting",
  "CSR & ESG Reporting Support",
];

// Collection Frequency
export const COLLECTION_FREQUENCIES = [
  "Daily",
  "Weekly",
  "Bi-Weekly",
  "Monthly",
  "Quarterly",
  "On-Demand",
];

// Collection Days
export const COLLECTION_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Collection Time Slots
export const COLLECTION_TIME_SLOTS = [
  "08:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 03:00 PM",
  "03:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM",
];

// Communication Preferences
export const COMMUNICATION_PREFERENCES = [
  "Email Notifications",
  "SMS Notifications",
  "WhatsApp Notifications",
  "Sustainability & Impact Reports",
];

// Referral Sources
export const REFERRAL_SOURCES = [
  "Google Search",
  "LinkedIn",
  "Industry Event",
  "Existing Customer",
  "Social Media",
  "Other",
];

export const toSelectOptions = (
  values: string[]
) =>
  values.map((value) => ({
    label: value,
    value,
  }));

  export const toCheckboxOptions = (
  values: string[]
) =>
  values.map((value) => ({
    label: value,
    value,
  }));