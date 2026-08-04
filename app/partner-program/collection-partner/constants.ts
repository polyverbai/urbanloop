// ======================================================
// STEP 1 - BUSINESS INFORMATION
// ======================================================

export const COLLECTION_PARTNER_CATEGORIES = [
  { label: "Scrap Dealer", value: "Scrap Dealer" },
  { label: "Aggregator", value: "Aggregator" },
  { label: "Recycler", value: "Recycler" },
  { label: "Processor", value: "Processor" },
  { label: "NGO", value: "NGO" },
  { label: "Social Enterprise", value: "Social Enterprise" },
];

export const EMPLOYEE_OPTIONS = [
  { label: "1 - 5", value: "1-5" },
  { label: "6 - 10", value: "6-10" },
  { label: "11 - 25", value: "11-25" },
  { label: "26 - 50", value: "26-50" },
  { label: "51 - 100", value: "51-100" },
  { label: "100+", value: "100+" },
];

// ======================================================
// STEP 2 - BUSINESS VERIFICATION
// ======================================================

export const VERIFICATION_DOCUMENTS = [
  {
    field: "gstCertificate",
    label: "GST Registration Certificate",
    required: true,
  },
  {
    field: "panCard",
    label: "PAN Card",
    required: true,
  },
  {
    field: "tradeLicense",
    label: "Trade / Shop License",
    required: true,
  },
  {
    field: "pollutionCertificate",
    label: "Pollution Certificate (If Applicable)",
    required: false,
  },
  {
    field: "aadhaarFront",
    label: "Aadhaar Card (Front)",
    required: true,
  },
  {
    field: "aadhaarBack",
    label: "Aadhaar Card (Back)",
    required: true,
  },
  {
    field: "ownerPhoto",
    label: "Owner Photograph",
    required: true,
  },
];

// ======================================================
// STEP 4 - MATERIAL COLLECTION
// ======================================================

export const MATERIAL_TYPES = [
  "All Materials",
  "Paper",
  "Cardboard",
  "Plastic",
  "Glass",
  "Metal",
  "Aluminium",
  "Iron",
  "Copper",
  "Brass",
  "Steel",
  "E-Waste",
  "Batteries",
  "Textiles",
  "Rubber",
  "Wood",
  "Organic Waste",
  "Construction Waste",
];

export const COLLECTION_SERVICES = [
  "All Services",
  "Doorstep Collection",
  "Bulk Collection",
  "Scheduled Pickup",
  "On-demand Pickup",
  "Industrial Waste Collection",
  "Commercial Waste Collection",
];

// ======================================================
// STEP 5 - FACILITY & TRANSPORTATION
// ======================================================

export const STORAGE_CAPACITY = [
  { label: "Less than 500 Kg", value: "<500" },
  { label: "500 Kg - 1 Ton", value: "500-1000" },
  { label: "1 Ton - 5 Ton", value: "1000-5000" },
  { label: "Above 5 Ton", value: ">5000" },
];

export const VEHICLE_TYPES = [
  "All Vehicles",
  "Bicycle",
  "Two Wheeler",
  "Three Wheeler",
  "Mini Truck",
  "Pickup Van",
  "Tempo",
  "Truck",
  "Container Vehicle",
];

// ======================================================
// STEP 6 - COVERAGE
// ======================================================

export const PICKUP_DAYS = [
  "All Days",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const PICKUP_TIME = [
  { label: "All Time", value: "All Time" },
  { label: "6 AM - 9 AM", value: "6-9" },
  { label: "9 AM - 12 PM", value: "9-12" },
  { label: "12 PM - 3 PM", value: "12-3" },
  { label: "3 PM - 6 PM", value: "3-6" },
  { label: "6 PM - 9 PM", value: "6-9pm" },
];

// ======================================================
// COMMON
// ======================================================

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];