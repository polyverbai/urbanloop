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
  "PET Bottles",
  "HDPE Bottles",
  "Mixed Plastics",
  "Glass",
  "Iron Scraps",
  "Steel Scraps",
  "Aluminium",
  "Copper",
  "Brass",
  "E-Waste",
  "Batteries",
  "Textiles",
  "Tyres",
  "Automobile & Parts"
];

export const COLLECTION_SERVICES = [
  "All Services",

  "Door-to-Door Collection",
  "Pickup on Request",
  "Bulk Waste Collection",
  "Industrial Collection",
  
  "Commercial Collection",
  "Residential Collection",
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

export const BANKS = [
  { label: "Select Bank", value: "" },

  { label: "State Bank of India", value: "State Bank of India" },
  { label: "HDFC Bank", value: "HDFC Bank" },
  { label: "ICICI Bank", value: "ICICI Bank" },
  { label: "Axis Bank", value: "Axis Bank" },
  { label: "Canara Bank", value: "Canara Bank" },
  { label: "Bank of Baroda", value: "Bank of Baroda" },
  { label: "Punjab National Bank", value: "Punjab National Bank" },
  { label: "Union Bank of India", value: "Union Bank of India" },
  { label: "Indian Bank", value: "Indian Bank" },
  { label: "Indian Overseas Bank", value: "Indian Overseas Bank" },
  { label: "Federal Bank", value: "Federal Bank" },
  { label: "South Indian Bank", value: "South Indian Bank" },
  { label: "Kotak Mahindra Bank", value: "Kotak Mahindra Bank" },
  { label: "IDBI Bank", value: "IDBI Bank" },
  { label: "Yes Bank", value: "Yes Bank" },
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

export const CAPACITY_UNITS = [
  { label: "Kilograms (Kg)", value: "Kg" },
  { label: "Metric Ton", value: "Ton" },
  { label: "Quintal", value: "Quintal" },
  { label: "Grams", value: "Gram" },
];

// ======================================================
// SELF TRANSPORT
// ======================================================

export const VEHICLE_TYPES = [
  "All Vehicles",
  "Bicycle",
  "Two Wheeler",
  "Three Wheeler",
  "Mini Truck",
  "Pickup Van",
  "Tata Ace",
  "LCV",
  "Truck",
  "Container",
  "Other",
];