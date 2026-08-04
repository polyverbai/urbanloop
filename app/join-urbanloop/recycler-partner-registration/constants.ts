export const RECYCLER_PARTNER_CATEGORIES = [
  "Paper Recycler",
  "Plastic Recycler",
  "Metal Recycler",
  "Glass Recycler",
  "E-Waste Recycler",
  "Textile Recycler",
  "Wood Recycler",
  "Multi-Material Recycler",
  "Other",
];

export const EMPLOYEE_COUNT_OPTIONS = [
  "1 - 5",
  "6 - 10",
  "11 - 25",
  "26 - 50",
  "51 - 100",
  "101 - 250",
  "251 - 500",
  "500+",
];

export const RECYCLABLE_MATERIALS = [
  "All Materials",
  "Paper",
  "Cardboard",
  "Plastic",
  "Metal",
  "Glass",
  "E-Waste",
  "Textile",
  "Wood",
  "Other",
];

export const MATERIAL_CONDITIONS = [
  "Sorted",
  "Segregated",
  "Baled",
  "Shredded",
  "Loose",
  "Clean / Dry",
  "Other",
];

export const PROCUREMENT_FREQUENCIES = [
  "Daily",
  "Weekly",
  "Fortnightly",
  "Monthly",
  "On Demand",
];

export const FULFILMENT_PREFERENCES = [
  "UrbanLoop Delivery",
  "Recycler Pickup",
  "Both",
];

export const RECEIVING_DAYS = [
  "All Days",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const RECEIVING_TIME_OPTIONS = [
  "All Time",
  "08:00 AM - 11:00 AM",
  "11:00 AM - 02:00 PM",
  "02:00 PM - 05:00 PM",
  "05:00 PM - 08:00 PM",
];

export const VEHICLE_TYPES = [
  "Two Wheeler",
  "Three Wheeler",
  "Mini Truck",
  "Pickup Truck",
  "Light Commercial Vehicle",
  "Medium Commercial Vehicle",
  "Heavy Commercial Vehicle",
  "Container Truck",
  "Other",
];

export const PROCESSING_CAPACITY_UNITS = [
  "Kg / Day",
  "Tonnes / Day",
  "Kg / Month",
  "Tonnes / Month",
];

export const STORAGE_CAPACITY_UNITS = [
  "Kg",
  "Tonnes",
];

export const PROCUREMENT_QUANTITY_UNITS = [
  "Kg",
  "Tonnes",
];

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export const VERIFICATION_DOCUMENTS = [
  {
    field: "gstCertificate",
    label: "GST Certificate",
    required: true,
  },
  {
    field: "panCard",
    label: "PAN Card",
    required: true,
  },
  {
    field: "tradeLicense",
    label: "Trade Licence / Business Registration",
    required: false,
  },
  {
    field: "pollutionControlCertificate",
    label: "Pollution Control Certificate / Consent",
    required: true,
  },
  {
    field: "recyclingAuthorization",
    label: "Recycling Authorization / Licence",
    required: true,
  },
  {
    field: "authorizedPersonId",
    label: "Authorized Person ID",
    required: false,
  },
  {
    field: "facilityPhoto",
    label: "Facility / Plant Photograph",
    required: false,
  },
];