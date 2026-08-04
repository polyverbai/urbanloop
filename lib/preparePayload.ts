import type { CollectionPartnerForm } from "@/app/partner-program/collection-partner/types";

export default function preparePayload(
  formData: CollectionPartnerForm
) {
  return {
    // =====================================================
    // SYSTEM INFORMATION
    // =====================================================

    registration_source: "WEB",

    // =====================================================
    // STEP 1 - BUSINESS INFORMATION
    // =====================================================

    collection_partner_category:
      formData.businessInformation.collectionPartnerCategory,

    shop_name:
      formData.businessInformation.shopName,

    owner_name:
      formData.businessInformation.ownerName,

    primary_contact_person:
      formData.businessInformation.primaryContactPerson,

    mobile_number:
      formData.businessInformation.mobileNumber,

    alternate_mobile_number:
      formData.businessInformation.alternateMobileNumber,

    email:
      formData.businessInformation.email,

    whatsapp_number:
      formData.businessInformation.whatsappNumber,

    website:
      formData.businessInformation.website,

    year_established:
      formData.businessInformation.yearEstablished
        ? Number(
            formData.businessInformation.yearEstablished
          )
        : null,

    gst_number:
      formData.businessInformation.gstNumber,

    pan_number:
      formData.businessInformation.panNumber,

    number_of_employees:
      formData.businessInformation.numberOfEmployees,

    // =====================================================
    // STEP 2 - DOCUMENT PATHS
    // =====================================================

    gst_certificate_path:
  null as string | null,

    pan_card_path:
  null as string | null,

    trade_license_path:
  null as string | null,

    pollution_certificate_path:
  null as string | null,

    aadhaar_front_path:
  null as string | null,

    aadhaar_back_path:
  null as string | null,

    owner_photo_path:
  null as string | null,

    // =====================================================
    // STEP 3 - BUSINESS ADDRESS
    // =====================================================

    shop_number:
      formData.businessAddress.shopNumber,

    building_name:
      formData.businessAddress.buildingName,

    street_area:
      formData.businessAddress.streetArea,

    landmark:
      formData.businessAddress.landmark,

    city:
      formData.businessAddress.city,

    state:
      formData.businessAddress.state,

    pin_code:
      formData.businessAddress.pinCode,

    latitude:
      formData.businessAddress.latitude,

    longitude:
      formData.businessAddress.longitude,

    // =====================================================
    // STEP 4 - MATERIAL COLLECTION
    // =====================================================

    materials_handled:
      formData.materialCollection.materialsHandled,

    collection_services:
      formData.materialCollection.collectionServices,

    daily_collection_capacity:
      Number(
        formData.materialCollection.dailyCollectionCapacity
      ),

    monthly_processing_capacity:
      Number(
        formData.materialCollection.monthlyProcessingCapacity
      ),

    // =====================================================
    // STEP 5 - FACILITY & TRANSPORTATION
    // =====================================================

    processing_facility_available:
      formData.facilityTransportation
        .processingFacilityAvailable,

    facility_address:
      formData.facilityTransportation.facilityAddress,

    storage_capacity:
      formData.facilityTransportation.storageCapacity,

    vehicle_types:
      formData.facilityTransportation.vehicleTypes,

    number_of_vehicles:
      Number(
        formData.facilityTransportation.numberOfVehicles
      ),

    // =====================================================
    // STEP 6 - COVERAGE INFORMATION
    // =====================================================

    operating_areas:
      formData.coveragePayment.operatingAreas,

    preferred_pickup_days:
      formData.coveragePayment.preferredPickupDays,

    preferred_pickup_time:
      formData.coveragePayment.preferredPickupTime,

    // =====================================================
    // PAYMENT INFORMATION
    // =====================================================

    bank_name:
      formData.coveragePayment.bankName,

    account_holder_name:
      formData.coveragePayment.accountHolderName,

    account_number:
      formData.coveragePayment.accountNumber,

    ifsc_code:
      formData.coveragePayment.ifscCode,

    upi_id:
      formData.coveragePayment.upiId,

    // =====================================================
    // EMERGENCY CONTACT
    // =====================================================

    emergency_contact_name:
      formData.coveragePayment
        .emergencyContactName,

    emergency_contact_number:
      formData.coveragePayment
        .emergencyContactNumber,

    // =====================================================
    // STEP 7 - DECLARATION
    // =====================================================

    declaration_accepted:
      formData.declaration.declarationAccepted,

    terms_accepted:
      formData.declaration.termsAccepted,

    communication_consent:
      formData.declaration.communicationConsent,
  };
}