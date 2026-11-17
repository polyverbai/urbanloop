export interface CollectionPartner {
  id: string;

  partner_registration_number: string;

  partner_type: string;

  application_status: string;

  collection_partner_category: string;

  shop_name: string;

  owner_name: string;

  mobile_number: string;

  alternate_mobile_number: string;

  email: string;

  gst_number: string;

  pan_number: string;

  gst_certificate: string;

pan_card: string;

trade_license: string;

aadhaar_front: string;

aadhaar_back: string;

driving_licence: string;

owner_photo: string;

  years_in_business: string;

  number_of_employees: string;

  business_description: string;

  shop_number: string;

  building_name: string;

  street_area: string;

  landmark: string;

  city: string;

  state: string;

  pin_code: string;

  materials_handled: string[];

  collection_services: string[];

  pickup_frequency: string;

  monthly_collection_capacity: string;

  collection_capacity_unit: string;

  storage_space_available: string;

  storage_capacity: string;

  storage_capacity_unit: string;

  segregation_facility_available: string;

  segregation_capacity: string;

  segregation_capacity_unit: string;

  has_processing_facility: boolean;

processing_facility_name: string;

processing_facility_address: string;

monthly_processing_capacity: string;

has_transportation: boolean;

  vehicle_types: string[];

  number_of_vehicles: string;

  vehicle_registration_numbers: string;

  operating_areas: string[];

  preferred_pickup_days: string[];

  preferred_pickup_time: string;

  bank_name: string;

  account_holder_name: string;

  account_number: string;

  ifsc_code: string;

  upi_id: string;

  created_at: string;

updated_at: string;

  declaration_accepted: boolean;

terms_accepted: boolean;

communication_consent: boolean;
}