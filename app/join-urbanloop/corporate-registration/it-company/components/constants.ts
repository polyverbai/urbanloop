export const COMPANY_CATEGORIES = [
  "IT & Technology Company",
  "Corporate Office",
  "Banking & Financial Institution",
  "BPO / KPO",
  "Consulting Company",
  "Telecommunications Company",
  "Healthcare & Pharmaceutical",
  "Manufacturing Company",
  "Warehouse & Logistics",
  "Media & Entertainment",
  "Other Corporate Organization",
];

export const MATERIAL_CATEGORIES = [
  "All",
  "Paper & Cardboard",
  "Plastic",
  "Metal",
  "Glass",
  "E-Waste",
  "Printer Cartridges",
  "Batteries",
  "Packaging Materials",
];

export const MONTHLY_RECYCLABLES = [
  "Less than 100 Kg",
  "100 - 500 Kg",
  "500 Kg - 1 Ton",
  "1 - 5 Tons",
  "More than 5 Tons",
];

export const PICKUP_FREQUENCIES = [
  "Daily",
  "Alternate Days",
  "Twice a Week",
  "Weekly",
  "Bi-Weekly",
  "Monthly",
  "On Demand",
];

export const PICKUP_DAYS = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const PICKUP_TIMES = [
  "All Time",
  "08:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
];

export const COMMUNICATION_PREFERENCES = [
  "SMS",
  "WhatsApp",
  "Email",
  "Phone Call",
];

export const REFERRAL_SOURCES = [
  "Google Search",
  "Social Media",
  "Friend / Family",
  "Corporate Campaign",
  "UrbanLoop Executive",
  "Existing Customer",
  "Advertisement",
  "Other",
];

export const toSelectOptions = (
  values: string[]
) =>
  values.map((value) => ({
    label: value,
    value,
  }));