import {
  NextRequest,
  NextResponse,
} from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

/* ============================================================
   CONFIGURATION
============================================================ */

const BUCKET_NAME = "transport-partner-documents";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
];

const REQUIRED_FILES = [
  "panCard",
  "authorizedPersonId",
] as const;

const DOCUMENT_CONFIG = [
  {
    formField: "panCard",
    databaseField: "pan_card_path",
    fileName: "pan-card",
  },
  {
    formField: "gstCertificate",
    databaseField: "gst_certificate_path",
    fileName: "gst-certificate",
  },
  {
    formField: "authorizedPersonId",
    databaseField: "authorized_person_id_path",
    fileName: "authorized-person-id",
  },
  {
    formField: "drivingLicence",
    databaseField: "driving_licence_path",
    fileName: "driving-licence",
  },
  {
    formField: "vehicleRegistrationCertificate",
    databaseField: "vehicle_registration_certificate_path",
    fileName: "vehicle-registration-certificate",
  },
  {
    formField: "vehicleInsurance",
    databaseField: "vehicle_insurance_path",
    fileName: "vehicle-insurance",
  },
  {
    formField: "pucCertificate",
    databaseField: "puc_certificate_path",
    fileName: "puc-certificate",
  },
  {
    formField: "commercialPermit",
    databaseField: "commercial_permit_path",
    fileName: "commercial-permit",
  },
  {
    formField: "fitnessCertificate",
    databaseField: "fitness_certificate_path",
    fileName: "fitness-certificate",
  },
  {
    formField: "businessRegistration",
    databaseField: "business_registration_path",
    fileName: "business-registration",
  },
  {
    formField: "vehiclePhoto",
    databaseField: "vehicle_photo_path",
    fileName: "vehicle-photo",
  },
] as const;


/* ============================================================
   GET — SERVER CONNECTION TEST
============================================================ */

export async function GET() {
  try {
    const { error } = await supabaseAdmin
      .from("transport_partner_registrations")
      .select("id")
      .limit(1);

    if (error) {
      console.error(
        "Supabase Admin Connection Error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Supabase admin connection failed.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Supabase admin connection successful.",
    });
  } catch (error) {
    console.error(
  "Transport API GET Error:",
  error
);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}


/* ============================================================
   FILE EXTENSION
============================================================ */

function getFileExtension(file: File) {
  switch (file.type) {
    case "application/pdf":
      return "pdf";

    case "image/jpeg":
    case "image/jpg":
      return "jpg";

    case "image/png":
      return "png";

    default:
      return "";
  }
}


/* ============================================================
   DELETE INCOMPLETE REGISTRATION

   Used if document upload or document-path update fails.
============================================================ */

async function cleanupRegistration(
  registrationId: string,
  uploadedPaths: string[]
) {
  if (uploadedPaths.length > 0) {
    const { error: storageCleanupError } =
      await supabaseAdmin.storage
        .from(BUCKET_NAME)
        .remove(uploadedPaths);

    if (storageCleanupError) {
      console.error(
  "Transport Storage Cleanup Error:",
  storageCleanupError
);
    }
  }

  const { error: registrationCleanupError } =
    await supabaseAdmin
      .from("transport_partner_registrations")
      .delete()
      .eq("id", registrationId);

  if (registrationCleanupError) {
    console.error(
  "Transport Registration Cleanup Error:",
  registrationCleanupError
);
  }
}


/* ============================================================
      POST — TRANSPORT PARTNER REGISTRATION
============================================================ */

export async function POST(
  request: NextRequest
) {
  let registrationId: string | null = null;

  const uploadedPaths: string[] = [];

  try {

    /* ========================================================
       READ MULTIPART FORM DATA
    ======================================================== */

    const multipartData =
  await request.formData();

    const registrationDataEntry =
  multipartData.get("registrationData");

    if (
      typeof registrationDataEntry !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Registration data is missing.",
        },
        { status: 400 }
      );
    }


    /* ========================================================
       PARSE REGISTRATION JSON
    ======================================================== */

    let body;

    try {
      body = JSON.parse(
        registrationDataEntry
      );
    } catch {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid registration data.",
        },
        { status: 400 }
      );
    }

    const {
  businessInformation,
  businessAddress,
  fleetCapability,
  serviceOperations,
  commercialPayment,
  declaration,
} = body


    /* ========================================================
       BASIC REQUEST VALIDATION
    ======================================================== */

    if (
  !businessInformation ||
  !businessAddress ||
  !fleetCapability ||
  !serviceOperations ||
  !commercialPayment ||
  !declaration
) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Incomplete registration data.",
    },
    { status: 400 }
  );
}


    /* ========================================================
       VALIDATE REQUIRED DOCUMENTS
    ======================================================== */

    for (const field of REQUIRED_FILES) {
      const file =
  multipartData.get(field);

      if (
        !(file instanceof File) ||
        file.size === 0
      ) {
        return NextResponse.json(
  {
    success: false,
    errorType: "document_validation",
    field,
    message:
      "This required document is missing. Please upload the document.",
  },
  { status: 400 }
);
      }
    }


    /* ========================================================
   CONDITIONAL GST CERTIFICATE VALIDATION
======================================================== */

const submittedGstNumber =
  businessInformation.gstNumber
    ?.trim();

if (submittedGstNumber) {
  const gstCertificate =
    multipartData.get(
      "gstCertificate"
    );

  if (
    !(gstCertificate instanceof File) ||
    gstCertificate.size === 0
  ) {
    return NextResponse.json(
      {
        success: false,
        errorType:
          "document_validation",
        field:
          "gstCertificate",
        message:
          "GST Certificate is required because a GST Number has been provided.",
      },
      { status: 400 }
    );
  }
}

/* ========================================================
   CONDITIONAL DRIVING LICENCE VALIDATION
======================================================== */

if (
  businessInformation
    .transportPartnerCategory ===
  "Individual Vehicle Owner"
) {
  const drivingLicence =
    multipartData.get(
      "drivingLicence"
    );

  if (
    !(drivingLicence instanceof File) ||
    drivingLicence.size === 0
  ) {
    return NextResponse.json(
      {
        success: false,
        errorType:
          "document_validation",
        field:
          "drivingLicence",
        message:
          "Driving Licence is required for an Individual Vehicle Owner.",
      },
      { status: 400 }
    );
  }
}

/* ========================================================
   CONDITIONAL VEHICLE DOCUMENT VALIDATION
======================================================== */

if (
  fleetCapability
    .ownsOperatesVehicles === "Yes"
) {
  const requiredVehicleDocuments = [
    {
      field:
        "vehicleRegistrationCertificate",
      label:
        "Vehicle Registration Certificate (RC)",
    },
    {
      field:
        "vehicleInsurance",
      label:
        "Vehicle Insurance",
    },
    {
      field:
        "pucCertificate",
      label:
        "PUC Certificate",
    },
    {
      field:
        "vehiclePhoto",
      label:
        "Vehicle Photograph",
    },
  ];

  for (
    const document of
    requiredVehicleDocuments
  ) {
    const file =
      multipartData.get(
        document.field
      );

    if (
      !(file instanceof File) ||
      file.size === 0
    ) {
      return NextResponse.json(
        {
          success: false,
          errorType:
            "document_validation",
          field:
            document.field,
          message:
            `${document.label} is required when you own or operate vehicles.`,
        },
        { status: 400 }
      );
    }
  }
}

    /* ========================================================
       VALIDATE ALL SUPPLIED DOCUMENTS
    ======================================================== */

    for (const document of DOCUMENT_CONFIG) {
      const entry =
  multipartData.get(
    document.formField
  );

      if (
        !(entry instanceof File) ||
        entry.size === 0
      ) {
        continue;
      }

      if (
  entry.size > MAX_FILE_SIZE
) {
  return NextResponse.json(
    {
      success: false,
      errorType: "document_validation",
      field: document.formField,
      message:
        "File size exceeds the 5 MB limit. Please upload a smaller file.",
    },
    { status: 400 }
  );
}

      if (
  !ALLOWED_FILE_TYPES.includes(
    entry.type
  )
) {
  return NextResponse.json(
    {
      success: false,
      errorType: "document_validation",
      field: document.formField,
      message:
        "Invalid file format. Please upload a PDF, JPG, JPEG, or PNG file.",
    },
    { status: 400 }
  );
}
    }


    /* ========================================================
       NORMALIZE UNIQUE VALUES
    ======================================================== */

    const mobileNumber =
      businessInformation.mobileNumber?.trim();

    const email =
      businessInformation.email
        ?.trim()
        .toLowerCase();

    const gstNumber =
  businessInformation.gstNumber
    ?.trim()
    .toUpperCase() || "";

const panNumber =
  businessInformation.panNumber
    ?.trim()
    .toUpperCase();

if (
  !mobileNumber ||
  !email ||
  !panNumber
) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Mobile number, email and PAN number are required.",
    },
    { status: 400 }
  );
}


    /* ========================================================
       DUPLICATE CHECK
    ======================================================== */

    const duplicateFilters = [
  `mobile_number.eq.${mobileNumber}`,
  `email.eq.${email}`,
  `pan_number.eq.${panNumber}`,
];

if (gstNumber) {
  duplicateFilters.push(
    `gst_number.eq.${gstNumber}`
  );
}

const {
  data: duplicateRecords,
  error: duplicateError,
} = await supabaseAdmin
  .from(
    "transport_partner_registrations"
  )
  .select(
    "mobile_number,email,gst_number,pan_number"
  )
  .or(
    duplicateFilters.join(",")
  )
  .limit(10);

    if (duplicateError) {
      console.error(
  "Transport Duplicate Check Error:",
  duplicateError
);

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to validate registration details.",
        },
        { status: 500 }
      );
    }

    if (
      duplicateRecords &&
      duplicateRecords.length > 0
    ) {
      const duplicateFields: string[] =
        [];

      if (
        duplicateRecords.some(
          (record) =>
            record.mobile_number ===
            mobileNumber
        )
      ) {
        duplicateFields.push(
          "mobile number"
        );
      }

      if (
        duplicateRecords.some(
          (record) =>
            record.email?.toLowerCase() ===
            email
        )
      ) {
        duplicateFields.push("email");
      }

      if (
  gstNumber &&
  duplicateRecords.some(
    (record) =>
      record.gst_number ===
      gstNumber
  )
) {
  duplicateFields.push(
    "GST number"
  );
}

      if (
        duplicateRecords.some(
          (record) =>
            record.pan_number ===
            panNumber
        )
      ) {
        duplicateFields.push(
          "PAN number"
        );
      }

      return NextResponse.json(
        {
          success: false,
          duplicate: true,
          duplicateFields,
          message:
  `A Transport Partner registration already exists with this ${duplicateFields.join(
    ", "
  )}.`,
        },
        { status: 409 }
      );
    }


    /* ========================================================
       DATABASE PAYLOAD
    ======================================================== */

    const payload = {

  registration_status:
    "Pending Review",

  registration_source:
    "WEB",

  is_active: false,

  is_verified: false,


  /* STEP 1 — BUSINESS INFORMATION */

  transport_partner_category:
    businessInformation
      .transportPartnerCategory,

  business_name:
    businessInformation
      .businessName
      ?.trim(),

  owner_name:
    businessInformation
      .ownerName
      ?.trim(),

  primary_contact_person:
    businessInformation
      .primaryContactPerson
      ?.trim(),

  mobile_number:
    mobileNumber,

  alternate_mobile_number:
    businessInformation
      .alternateMobileNumber
      ?.trim() || null,

  whatsapp_number:
    businessInformation
      .whatsappNumber
      ?.trim() || null,

  email,

  pan_number:
    panNumber,

  gst_number:
    gstNumber || null,

  years_in_business:
    businessInformation
      .yearsInBusiness
      ?.trim() || null,

  employee_driver_count:
    businessInformation
      .employeeDriverCount
      ?.trim() || null,


  /* STEP 3 — BUSINESS / OPERATIONAL ADDRESS */

  address_line:
    businessAddress
      .addressLine
      ?.trim(),

  building_name:
    businessAddress
      .buildingName
      ?.trim() || null,

  street_area:
    businessAddress
      .streetArea
      ?.trim(),

  landmark:
    businessAddress
      .landmark
      ?.trim() || null,

  city:
    businessAddress
      .city
      ?.trim(),

  state_name:
    businessAddress
      .state
      ?.trim(),

  pin_code:
    businessAddress
      .pinCode
      ?.trim(),


  /* STEP 4 — FLEET & VEHICLE CAPABILITY */

  owns_operates_vehicles:
    fleetCapability
      .ownsOperatesVehicles,

  number_of_vehicles:
    fleetCapability
      .numberOfVehicles
      ?.trim() || null,

  vehicle_types:
    fleetCapability
      .vehicleTypes,

  pickup_capabilities:
    fleetCapability
      .pickupCapabilities,

  material_categories:
    fleetCapability
      .materialCategories,

  minimum_load:
    fleetCapability
      .minimumLoad
      ?.trim() || null,

  minimum_load_unit:
    fleetCapability
      .minimumLoadUnit || null,

  maximum_transport_capacity:
    fleetCapability
      .maximumTransportCapacity
      ?.trim() || null,

  maximum_transport_capacity_unit:
    fleetCapability
      .maximumTransportCapacityUnit || null,

  loading_assistance_available:
    fleetCapability
      .loadingAssistanceAvailable,

  unloading_assistance_available:
    fleetCapability
      .unloadingAssistanceAvailable,


  /* STEP 5 — SERVICE AREA & OPERATIONS */

  operating_states:
    serviceOperations
      .operatingStates,

  operating_cities_districts:
    serviceOperations
      .operatingCitiesDistricts,

  service_areas:
    serviceOperations
      .serviceAreas
      ?.trim(),

  service_radius:
    serviceOperations
      .serviceRadius
      ?.trim(),

  operational_scope:
    serviceOperations
      .operationalScope,

  operating_days:
    serviceOperations
      .operatingDays,

  operating_time:
    serviceOperations
      .operatingTime,

  same_day_pickup_available:
    serviceOperations
      .sameDayPickupAvailable,

  weekend_service_available:
    serviceOperations
      .weekendServiceAvailable,


  /* STEP 6 — COMMERCIAL & PAYMENT INFORMATION */

  commercial_preferences:
    commercialPayment
      .commercialPreferences,

  preferred_settlement_method:
    commercialPayment
      .preferredSettlementMethod,

  account_holder_name:
    commercialPayment
      .accountHolderName
      ?.trim() || null,

  bank_name:
    commercialPayment
      .bankName
      ?.trim() || null,

  account_number:
    commercialPayment
      .accountNumber
      ?.trim() || null,

  ifsc_code:
    commercialPayment
      .ifscCode
      ?.trim()
      .toUpperCase() || null,

  upi_id:
    commercialPayment
      .upiId
      ?.trim() || null,


  /* STEP 7 — DECLARATION & CONSENT */

  information_confirmed:
    declaration
      .informationConfirmed,

  terms_accepted:
    declaration
      .termsAccepted,

  communication_consent:
    declaration
      .communicationConsent,

  vehicle_compliance_confirmed:
    declaration
      .vehicleComplianceConfirmed,
};


    /* ========================================================
       CREATE REGISTRATION
    ======================================================== */

    const {
      data: registration,
      error: insertError,
    } = await supabaseAdmin
      .from(
        "transport_partner_registrations"
      )
      .insert(payload)
      .select(
        "id,registration_number,registration_status"
      )
      .single();

    if (insertError) {
      console.error(
  "Transport Registration Insert Error:",
  insertError
);

      return NextResponse.json(
        {
          success: false,
          message:
  "Unable to create Transport Partner registration.",
        },
        { status: 500 }
      );
    }

    registrationId =
      registration.id;


    /* ========================================================
       UPLOAD DOCUMENTS
    ======================================================== */

    const documentPaths:
      Record<string, string | null> = {};

    for (const document of DOCUMENT_CONFIG) {
      const entry =
  multipartData.get(
    document.formField
  );

      if (
        !(entry instanceof File) ||
        entry.size === 0
      ) {
        documentPaths[
          document.databaseField
        ] = null;

        continue;
      }

      const extension =
        getFileExtension(entry);

      if (!extension) {
  await cleanupRegistration(
    registration.id,
    uploadedPaths
  );

  registrationId = null;

  return NextResponse.json(
    {
      success: false,
      errorType: "document_validation",
      field: document.formField,
      message:
        "The selected file could not be processed. Please upload a valid PDF, JPG, JPEG, or PNG file.",
    },
    { status: 400 }
  );
}

      const storagePath =
        `${registration.id}/${document.fileName}.${extension}`;

      const fileBuffer =
        await entry.arrayBuffer();

      const {
        error: uploadError,
      } = await supabaseAdmin.storage
        .from(BUCKET_NAME)
        .upload(
          storagePath,
          fileBuffer,
          {
            contentType:
              entry.type,
            upsert: false,
          }
        );

      if (uploadError) {
  console.error(
  `Transport Document Upload Error (${document.formField})`,
    {
      fileName: entry.name,
      fileType: entry.type,
      fileSize: entry.size,
      storagePath,
      uploadError,
    }
  );

  await cleanupRegistration(
    registration.id,
    uploadedPaths
  );

  registrationId = null;

  return NextResponse.json(
    {
      success: false,
      errorType: "document_upload",
      field: document.formField,
      fileName: entry.name,
      message:
        `Unable to upload ${entry.name}. Please remove this file and upload another file.`,
    },
    { status: 500 }
  );
}

      uploadedPaths.push(
        storagePath
      );

      documentPaths[
        document.databaseField
      ] = storagePath;
    }


    /* ========================================================
       SAVE DOCUMENT PATHS
    ======================================================== */

    const {
      error: documentUpdateError,
    } = await supabaseAdmin
      .from(
        "transport_partner_registrations"
      )
      .update(documentPaths)
      .eq(
        "id",
        registration.id
      );

    if (documentUpdateError) {
      console.error(
  "Transport Document Path Update Error:",
  documentUpdateError
);

      await cleanupRegistration(
        registration.id,
        uploadedPaths
      );

      registrationId = null;

      return NextResponse.json(
        {
          success: false,
          message:
            "Documents were uploaded but registration could not be completed.",
        },
        { status: 500 }
      );
    }


    /* ========================================================
       SUCCESS
    ======================================================== */

    registrationId = null;

    return NextResponse.json(
      {
        success: true,

        message:
  "Transport Partner registration submitted successfully.",

        registrationId:
          registration.id,

        registrationNumber:
          registration.registration_number,

        registrationStatus:
          registration.registration_status,
      },
      { status: 201 }
    );

  } catch (error) {

    console.error(
  "Transport Registration POST Error:",
  error
);

    /*
     * If the registration row was created and an
     * unexpected error occurred afterwards, remove
     * the incomplete registration and any files
     * uploaded during this request.
     */

    if (registrationId) {
      await cleanupRegistration(
        registrationId,
        uploadedPaths
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Unexpected server error while submitting registration.",
      },
      { status: 500 }
    );
  }
}