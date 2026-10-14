import {
  NextRequest,
  NextResponse,
} from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

/* ============================================================
   CONFIGURATION
============================================================ */

const BUCKET_NAME = "collection-partner";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
];

const REQUIRED_FILES = [
  "gstCertificate",
  "panCard",
  "tradeLicense",
  "aadhaarFront",
  "aadhaarBack",
  "ownerPhoto",
] as const;

const DOCUMENT_CONFIG = [
  {
    formField: "gstCertificate",
    databaseField: "gst_certificate_path",
    fileName: "gst-certificate",
  },
  {
    formField: "panCard",
    databaseField: "pan_card_path",
    fileName: "pan-card",
  },
  {
    formField: "tradeLicense",
    databaseField: "trade_license_path",
    fileName: "trade-license",
  },
  {
    formField: "pollutionCertificate",
    databaseField: "pollution_certificate_path",
    fileName: "pollution-certificate",
  },
  {
    formField: "aadhaarFront",
    databaseField: "aadhaar_front_path",
    fileName: "aadhaar-front",
  },
  {
    formField: "aadhaarBack",
    databaseField: "aadhaar_back_path",
    fileName: "aadhaar-back",
  },
  {
    formField: "ownerPhoto",
    databaseField: "owner_photo_path",
    fileName: "owner-photo",
  },
] as const;


/* ============================================================
   GET — SERVER CONNECTION TEST
============================================================ */

export async function GET() {
  try {
    const { error } = await supabaseAdmin
      .from("collection_partner_registrations")
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
  "Collection Partner API GET Error:",
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
  "Collection Partner Storage Cleanup Error:",
  storageCleanupError
);
    }
  }

  const { error: registrationCleanupError } =
    await supabaseAdmin
      .from("collection_partner_registrations")
      .delete()
      .eq("id", registrationId);

  if (registrationCleanupError) {
    console.error(
  "Collection Partner Registration Cleanup Error:",
  registrationCleanupError
);
  }
}


/* ============================================================
            POST — COLLECTION PARTNER REGISTRATION
============================================================ */

export async function POST(
  request: NextRequest
) {
  console.log("🚀 COLLECTION PARTNER API HIT");
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

  console.log("===== registrationDataEntry =====");
console.log(typeof registrationDataEntry);
console.log(registrationDataEntry);
console.log("=================================");

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

console.log("========== COLLECTION PARTNER DATA ==========");

console.log({
  businessInformation: !!body.businessInformation,
  businessVerification: !!body.businessVerification,
  businessAddress: !!body.businessAddress,
  materialCollection: !!body.materialCollection,
  facilityTransportation: !!body.facilityTransportation,
  coveragePayment: !!body.coveragePayment,
  declaration: !!body.declaration,
});

console.log(body);

console.log("============================================");

  const {
  businessInformation,
  businessVerification,
  businessAddress,
  materialCollection,
  facilityTransportation,
  coveragePayment,
  declaration,
} = body;


    /* ========================================================
       BASIC REQUEST VALIDATION
    ======================================================== */

    if (
  !businessInformation ||
  !businessVerification ||
  !businessAddress ||
  !materialCollection ||
  !facilityTransportation ||
  !coveragePayment ||
  !declaration
) {
  return NextResponse.json(
    {
      success: false,
      message: "Incomplete registration data.",
    },
    { status: 400 }
  );
}

console.log("========== COLLECTION PARTNER ==========");

console.log({
  businessInformation: !!businessInformation,
  businessVerification: !!businessVerification,
  businessAddress: !!businessAddress,
  materialCollection: !!materialCollection,
  facilityTransportation: !!facilityTransportation,
  coveragePayment: !!coveragePayment,
  declaration: !!declaration,
});

console.log("========================================");


    /* ========================================================
       VALIDATE REQUIRED DOCUMENTS
    ======================================================== */

    for (const requiredFile of REQUIRED_FILES) {
  const file = multipartData.get(requiredFile);

      if (
        !(file instanceof File) ||
        file.size === 0
      ) {
        return NextResponse.json(
{
  success: false,
  errorType: "document_validation",
  field: requiredFile,
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
    .collectionPartnerCategory ===
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
  .from("collection_partner_registrations"
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
  "Collection Partner Duplicate Check Error:",
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


const duplicateField =
  duplicateFields[0] ?? "Information";

const duplicateValue =
  duplicateField === "mobile number"
    ? mobileNumber
    : duplicateField === "email"
    ? email
    : duplicateField === "GST number"
    ? gstNumber
    : duplicateField === "PAN number"
    ? panNumber
    : "";

return NextResponse.json(
  {
    success: false,
    duplicate: true,
    duplicateFields,
    field: duplicateField,
    value: duplicateValue,
    message:
      `A Collection Partner registration already exists with this ${duplicateFields.join(", ")}.`,
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

  collection_partner_category:
  businessInformation.collectionPartnerCategory,

shop_name:
  businessInformation.shopName?.trim(),

owner_name:
  businessInformation.ownerName?.trim(),

primary_contact_person:
  businessInformation.primaryContactPerson?.trim(),

mobile_number:
  mobileNumber,

alternate_mobile_number:
  businessInformation.alternateMobileNumber?.trim() || null,

whatsapp_number:
  businessInformation.whatsappNumber?.trim() || null,

email,

website:
  businessInformation.website?.trim() || null,

year_established:
  businessInformation.yearEstablished?.trim() || null,

gst_number:
  gstNumber || null,

pan_number:
  panNumber,

number_of_employees:
  businessInformation.numberOfEmployees || null,


  /* STEP 3 — BUSINESS / OPERATIONAL ADDRESS */

  shop_number:
  businessAddress.shopNumber?.trim(),

building_name:
  businessAddress.buildingName?.trim(),

street_area:
  businessAddress.streetArea?.trim(),

landmark:
  businessAddress.landmark?.trim() || null,

city:
  businessAddress.city?.trim(),

state:
  businessAddress.state?.trim(),

pin_code:
  businessAddress.pinCode?.trim(),

latitude:
  businessAddress.latitude?.trim() || null,

longitude:
  businessAddress.longitude?.trim() || null,

/* STEP 4 — MATERIAL COLLECTION */

materials_handled:
  materialCollection.materialsHandled,

collection_services:
  materialCollection.collectionServices,

daily_collection_capacity:
  materialCollection.dailyCollectionCapacity?.trim() || null,

monthly_processing_capacity:
  materialCollection.monthlyCollectionCapacity?.trim() || null,

sorting_facility_available:
  materialCollection.sortingFacilityAvailable,

 /* STEP 5 — FACILITY & TRANSPORTATION */

processing_facility_available:
  facilityTransportation.processingFacilityAvailable,

facility_address:
  facilityTransportation.facilityAddress?.trim() || null,

storage_capacity:
  facilityTransportation.storageCapacity?.trim() || null,

vehicle_types:
  facilityTransportation.vehicleTypes,

number_of_vehicles:
  facilityTransportation.numberOfVehicles?.trim() || null,


/* STEP 6 — COVERAGE & PAYMENT */

operating_areas:
  coveragePayment.operatingAreas,

preferred_pickup_days:
  coveragePayment.preferredPickupDays,

preferred_pickup_time:
  coveragePayment.preferredPickupTime,

bank_name:
  coveragePayment.bankName || null,

account_holder_name:
  coveragePayment.accountHolderName?.trim() || null,

account_number:
  coveragePayment.accountNumber?.trim() || null,

ifsc_code:
  coveragePayment.ifscCode?.trim().toUpperCase() || null,

upi_id:
  coveragePayment.upiId?.trim() || null,

emergency_contact_name:
  coveragePayment.emergencyContactName?.trim() || null,

emergency_contact_number:
  coveragePayment.emergencyContactNumber?.trim() || null,


  /* STEP 7 — DECLARATION & CONSENT */

  declaration_accepted:
  declaration.declarationAccepted,

terms_accepted:
  declaration.termsAccepted,

communication_consent:
  declaration.communicationConsent,
};


    /* ========================================================
       CREATE REGISTRATION
    ======================================================== */

    const {
      data: registration,
      error: insertError,
    } = await supabaseAdmin
      .from(
        "collection_partner_registrations"
      )
      .insert(payload)
      .select(
        "id,registration_number,registration_status"
      )
      .single();

    if (insertError) {
      console.error(
  "Collection Partner Registration Insert Error:",
  insertError
);

      return NextResponse.json(
        {
          success: false,
          message:
  "Unable to create Collection Partner registration.",
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
  `Collection Partner Document Upload Error (${document.formField})`,
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
        "collection_partner_registrations"
      )
      .update(documentPaths)
      .eq(
        "id",
        registration.id
      );

    if (documentUpdateError) {
      console.error(
  "Collection Partner Document Path Update Error:",
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
    "Collection Partner registration submitted successfully.",


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
  "Collection Partner Registration POST Error:",
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