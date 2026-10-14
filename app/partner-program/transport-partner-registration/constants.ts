/* =====================================================
   TRANSPORT PARTNER CATEGORIES
===================================================== */

export const TRANSPORT_PARTNER_CATEGORIES = [
  {
    label: "Individual Vehicle Owner",
    value: "Individual Vehicle Owner",
  },
  {
    label: "Independent Transporter",
    value: "Independent Transporter",
  },
  {
    label: "Fleet Owner",
    value: "Fleet Owner",
  },
  {
    label: "Transport Agency",
    value: "Transport Agency",
  },
  {
    label: "Logistics Company",
    value: "Logistics Company",
  },
  {
    label: "Commercial Vehicle Operator",
    value: "Commercial Vehicle Operator",
  },
  {
    label: "Other",
    value: "Other",
  },
];


/* =====================================================
   EMPLOYEE / DRIVER COUNT
===================================================== */

export const EMPLOYEE_DRIVER_COUNT_OPTIONS = [
  {
    label: "1 - 5",
    value: "1 - 5",
  },
  {
    label: "6 - 10",
    value: "6 - 10",
  },
  {
    label: "11 - 25",
    value: "11 - 25",
  },
  {
    label: "26 - 50",
    value: "26 - 50",
  },
  {
    label: "51 - 100",
    value: "51 - 100",
  },
  {
    label: "101 - 250",
    value: "101 - 250",
  },
  {
    label: "251 - 500",
    value: "251 - 500",
  },
  {
    label: "500+",
    value: "500+",
  },
];


/* =====================================================
   VEHICLE TYPES
===================================================== */

export const TRANSPORT_VEHICLE_TYPES = [
  "All Vehicle Types",
  "Two Wheeler",
  "Three Wheeler",
  "Cargo Auto",
  "Mini Truck",
  "Pickup Truck",
  "Light Commercial Vehicle",
  "Medium Commercial Vehicle",
  "Heavy Commercial Vehicle",
  "Container Truck",
  "Other",
];


/* =====================================================
   PICKUP CAPABILITIES
===================================================== */

export const PICKUP_CAPABILITIES = [
  "All Pickup Types",
  "Household Pickup",
  "Apartment / Community Pickup",
  "Business Pickup",
  "Corporate Office Pickup",
  "Educational Institution Pickup",
  "Hospital / Institution Pickup",
  "Bulk Pickup",
  "Collection Partner to Recycler Transport",
  "Hub / Warehouse Transfer",
];


/* =====================================================
   MATERIAL CATEGORIES
===================================================== */

export const TRANSPORT_MATERIAL_CATEGORIES = [
  "All Materials",
  "Paper",
  "Cardboard",
  "Plastic",
  "Metal",
  "Glass",
  "E-Waste",
  "Textile",
  "Wood",
  "Furniture",
  "IT Assets",
  "Other",
];


/* =====================================================
   LOAD / CAPACITY UNITS
===================================================== */

export const TRANSPORT_CAPACITY_UNITS = [
  "Kg",
  "Tonnes",
];


/* =====================================================
   SERVICE RADIUS
===================================================== */

export const SERVICE_RADIUS_OPTIONS = [
  "Up to 5 km",
  "Up to 10 km",
  "Up to 20 km",
  "Up to 30 km",
  "Up to 50 km",
  "Above 50 km",
];


/* =====================================================
   OPERATIONAL SCOPE
===================================================== */

export const OPERATIONAL_SCOPE_OPTIONS = [
  "Local / Intra-city",
  "Inter-city",
  "Inter-district",
  "Inter-state",
];


/* =====================================================
   OPERATING DAYS
===================================================== */

export const OPERATING_DAYS = [
  "All Days",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];


/* =====================================================
   OPERATING TIME
===================================================== */

export const OPERATING_TIME_OPTIONS = [
  "All Time",
  "06:00 AM - 09:00 AM",
  "09:00 AM - 12:00 PM",
  "12:00 PM - 03:00 PM",
  "03:00 PM - 06:00 PM",
  "06:00 PM - 09:00 PM",
];


/* =====================================================
   YES / NO
===================================================== */

export const YES_NO_OPTIONS = [
  "Yes",
  "No",
];


/* =====================================================
   COMMERCIAL PREFERENCES
===================================================== */

export const COMMERCIAL_PREFERENCES = [
  "Per Pickup",
  "Per Trip",
  "Per KM",
  "Per Kg",
  "Per Tonne",
  "Contract / Negotiated Rate",
];


/* =====================================================
   SETTLEMENT METHODS
===================================================== */

export const SETTLEMENT_METHODS = [
  "Bank Transfer",
  "UPI",
];


/* =====================================================
   INDIAN STATES & UNION TERRITORIES
===================================================== */

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


/* =====================================================
   VERIFICATION DOCUMENTS
===================================================== */

export const TRANSPORT_VERIFICATION_DOCUMENTS = [
  {
    field: "panCard",
    label: "PAN Card",
    required: true,
  },
  {
    field: "gstCertificate",
    label: "GST Certificate",
    required: false,
  },
  {
    field: "authorizedPersonId",
    label: "Authorized Person / Owner ID",
    required: true,
  },
  {
    field: "drivingLicence",
    label: "Driving Licence",
    required: false,
  },
  {
    field: "vehicleRegistrationCertificate",
    label: "Vehicle Registration Certificate (RC)",
    required: false,
  },
  {
    field: "vehicleInsurance",
    label: "Vehicle Insurance",
    required: false,
  },
  {
    field: "pucCertificate",
    label: "PUC Certificate",
    required: false,
  },
  {
    field: "commercialPermit",
    label: "Commercial / Goods Carriage Permit",
    required: false,
  },
  {
    field: "fitnessCertificate",
    label: "Vehicle Fitness Certificate",
    required: false,
  },
  {
    field: "businessRegistration",
    label: "Business Registration / Trade Licence",
    required: false,
  },
  {
    field: "vehiclePhoto",
    label: "Vehicle Photograph",
    required: false,
  },
];