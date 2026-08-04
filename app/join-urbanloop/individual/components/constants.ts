// Residential Categories
export const RESIDENTIAL_CATEGORIES = [
  "Individual House",
  "Independent House",
  "Apartment",
  "Villa",
  "Row House",
  "Farm House",
  "Service Apartment",
  "Gated Community Residence",
];

// Recyclable Materials
export const MATERIAL_CATEGORIES = [
  "Paper & Cardboard",
  "Plastic",
  "Glass",
  "Metal",
  "E-Waste",
  "Electronic Devices",
  "Furniture",
  "Textiles",
  "Packaging Materials",
  "Garden Waste",
  "Other",
];

// Collection Frequencies
export const COLLECTION_FREQUENCIES = [
  "One-Time Pickup",
  "On-Demand Pickup",
  "Monthly Pickup",
  "Quarterly Pickup",
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
  "Social Media",
  "Friend / Family",
  "Corporate Partner",
  "Apartment Association",
  "Newspaper / Media",
  "Event / Campaign",
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