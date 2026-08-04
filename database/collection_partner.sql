CREATE TABLE collection_partner_registrations (

    -- =====================================================
    -- SYSTEM INFORMATION
    -- =====================================================

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    registration_number TEXT UNIQUE,

    registration_status TEXT NOT NULL
        DEFAULT 'Pending Review',

    registration_source TEXT NOT NULL
        DEFAULT 'WEB',

    is_active BOOLEAN NOT NULL
        DEFAULT FALSE,

    is_verified BOOLEAN NOT NULL
        DEFAULT FALSE,

    approved_by TEXT,
    approved_at TIMESTAMPTZ,

    remarks TEXT,

    created_at TIMESTAMPTZ NOT NULL
        DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL
        DEFAULT NOW(),


    -- =====================================================
    -- STEP 1 - BUSINESS INFORMATION
    -- =====================================================

    collection_partner_category TEXT NOT NULL,

    shop_name TEXT NOT NULL,

    owner_name TEXT NOT NULL,

    primary_contact_person TEXT NOT NULL,

    mobile_number TEXT NOT NULL UNIQUE,

    alternate_mobile_number TEXT,

    email TEXT NOT NULL UNIQUE,

    whatsapp_number TEXT,

    website TEXT,

    year_established INTEGER,

    gst_number TEXT NOT NULL UNIQUE,

    pan_number TEXT NOT NULL UNIQUE,

    number_of_employees TEXT,


    -- =====================================================
    -- STEP 2 - BUSINESS VERIFICATION DOCUMENTS
    -- =====================================================

    gst_certificate_path TEXT,

    pan_card_path TEXT,

    trade_license_path TEXT,

    pollution_certificate_path TEXT,

    aadhaar_front_path TEXT,

    aadhaar_back_path TEXT,

    owner_photo_path TEXT,


    -- =====================================================
    -- STEP 3 - BUSINESS ADDRESS
    -- =====================================================

    shop_number TEXT NOT NULL,

    building_name TEXT NOT NULL,

    street_area TEXT NOT NULL,

    landmark TEXT,

    city TEXT NOT NULL,

    state TEXT NOT NULL,

    pin_code TEXT NOT NULL,

    latitude TEXT,

    longitude TEXT,


    -- =====================================================
    -- STEP 4 - MATERIAL COLLECTION
    -- =====================================================

    materials_handled TEXT[] NOT NULL,

    collection_services TEXT[] NOT NULL,

    daily_collection_capacity INTEGER NOT NULL,

    monthly_processing_capacity INTEGER NOT NULL,


    -- =====================================================
    -- STEP 5 - FACILITY & TRANSPORTATION
    -- =====================================================

    processing_facility_available TEXT NOT NULL,

    facility_address TEXT,

    storage_capacity TEXT,

    vehicle_types TEXT[] NOT NULL,

    number_of_vehicles INTEGER NOT NULL,


    -- =====================================================
    -- STEP 6 - COVERAGE INFORMATION
    -- =====================================================

    operating_areas TEXT[] NOT NULL,

    preferred_pickup_days TEXT[] NOT NULL,

    preferred_pickup_time TEXT NOT NULL,


    -- =====================================================
    -- PAYMENT INFORMATION
    -- =====================================================

    bank_name TEXT,

    account_holder_name TEXT,

    account_number TEXT,

    ifsc_code TEXT,

    upi_id TEXT,


    -- =====================================================
    -- EMERGENCY CONTACT
    -- =====================================================

    emergency_contact_name TEXT NOT NULL,

    emergency_contact_number TEXT NOT NULL,


    -- =====================================================
    -- STEP 7 - DECLARATION & CONSENT
    -- =====================================================

    declaration_accepted BOOLEAN NOT NULL
        DEFAULT FALSE,

    terms_accepted BOOLEAN NOT NULL
        DEFAULT FALSE,

    communication_consent BOOLEAN NOT NULL
        DEFAULT FALSE

);