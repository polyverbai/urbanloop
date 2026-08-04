import {
  NextRequest,
  NextResponse,
} from "next/server";

import { supabaseAdmin } from "@/lib/supabaseAdmin";

/* ============================================================
   CONFIGURATION
============================================================ */

const BUCKET_NAME = "recycler-partner-documents";

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
  "pollutionControlCertificate",
  "recyclingAuthorization",
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
    formField: "pollutionControlCertificate",
    databaseField:
      "pollution_control_certificate_path",
    fileName: "pollution-control-certificate",
  },
  {
    formField: "recyclingAuthorization",
    databaseField:
      "recycling_authorization_path",
    fileName: "recycling-authorization",
  },
  {
    formField: "authorizedPersonId",
    databaseField:
      "authorized_person_id_path",
    fileName: "authorized-person-id",
  },
  {
    formField: "facilityPhoto",
    databaseField: "facility_photo_path",
    fileName: "facility-photo",
  },
] as const;


/* ============================================================
   GET — SERVER CONNECTION TEST
============================================================ */

export async function GET() {
  try {
    const { error } = await supabaseAdmin
      .from("recycler_partner_registrations")
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
      "Recycler API GET Error:",
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
        "Recycler Storage Cleanup Error:",
        storageCleanupError
      );
    }
  }

  const { error: registrationCleanupError } =
    await supabaseAdmin
      .from("recycler_partner_registrations")
      .delete()
      .eq("id", registrationId);

  if (registrationCleanupError) {
    console.error(
      "Recycler Registration Cleanup Error:",
      registrationCleanupError
    );
  }
}


/* ============================================================
   POST — RECYCLER PARTNER REGISTRATION
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
      facilityAddress,
      materialsProcessing,
      procurementRequirements,
      logisticsCommercial,
      declaration,
    } = body;


    /* ========================================================
       BASIC REQUEST VALIDATION
    ======================================================== */

    if (
      !businessInformation ||
      !facilityAddress ||
      !materialsProcessing ||
      !procurementRequirements ||
      !logisticsCommercial ||
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
        .toUpperCase();

    const panNumber =
      businessInformation.panNumber
        ?.trim()
        .toUpperCase();

    if (
      !mobileNumber ||
      !email ||
      !gstNumber ||
      !panNumber
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Mobile number, email, GST number and PAN number are required.",
        },
        { status: 400 }
      );
    }


    /* ========================================================
       DUPLICATE CHECK
    ======================================================== */

    const {
      data: duplicateRecords,
      error: duplicateError,
    } = await supabaseAdmin
      .from(
        "recycler_partner_registrations"
      )
      .select(
        "mobile_number,email,gst_number,pan_number"
      )
      .or(
        `mobile_number.eq.${mobileNumber},email.eq.${email},gst_number.eq.${gstNumber},pan_number.eq.${panNumber}`
      )
      .limit(10);

    if (duplicateError) {
      console.error(
        "Recycler Duplicate Check Error:",
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
            `A Recycler Partner registration already exists with this ${duplicateFields.join(
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


      /* STEP 1 */

      recycler_partner_category:
        businessInformation
          .recyclerPartnerCategory,

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
          ?.trim() ||
        null,

      whatsapp_number:
        businessInformation
          .whatsappNumber
          ?.trim() ||
        null,

      email,

      website:
        businessInformation
          .website
          ?.trim() ||
        null,

      year_established:
        businessInformation
          .yearEstablished
          ? Number(
              businessInformation
                .yearEstablished
            )
          : null,

      gst_number:
        gstNumber,

      pan_number:
        panNumber,

      number_of_employees:
        businessInformation
          .numberOfEmployees ||
        null,


      /* STEP 3 */

      facility_number:
        facilityAddress
          .facilityNumber
          ?.trim(),

      facility_name:
        facilityAddress
          .facilityName
          ?.trim(),

      street_area:
        facilityAddress
          .streetArea
          ?.trim(),

      landmark:
        facilityAddress
          .landmark
          ?.trim() ||
        null,

      city:
        facilityAddress
          .city
          ?.trim(),

      state_name:
        facilityAddress.stateName,

      pin_code:
        facilityAddress
          .pinCode
          ?.trim(),

      
      /* STEP 4 */

      materials_accepted:
        materialsProcessing
          .materialsAccepted,

      daily_processing_capacity:
        Number(
          materialsProcessing
            .dailyProcessingCapacity
        ),

      monthly_processing_capacity:
        Number(
          materialsProcessing
            .monthlyProcessingCapacity
        ),

      storage_capacity:
        Number(
          materialsProcessing
            .storageCapacity
        ),

      processing_technology:
        materialsProcessing
          .processingTechnology,

      recycled_outputs:
        materialsProcessing
          .recycledOutputs
          ?.trim(),


      /* STEP 5 */

      materials_required:
        procurementRequirements
          .materialsRequired,

      monthly_procurement_requirement:
        Number(
          procurementRequirements
            .monthlyProcurementRequirement
        ),

      minimum_order_quantity:
        Number(
          procurementRequirements
            .minimumOrderQuantity
        ),

      procurement_frequency:
        procurementRequirements
          .procurementFrequency,

      accepted_material_conditions:
        procurementRequirements
          .acceptedMaterialConditions,

      preferred_material_grade:
        procurementRequirements
          .preferredMaterialGrade,


      /* STEP 6 */

      procurement_areas:
        logisticsCommercial
          .procurementAreas,

      fulfilment_preference:
        logisticsCommercial
          .fulfilmentPreference,

      receiving_days:
        logisticsCommercial
          .receivingDays,

      preferred_receiving_time:
        logisticsCommercial
          .preferredReceivingTime,

      vehicle_types:
        logisticsCommercial
          .vehicleTypes,

      number_of_vehicles:
        logisticsCommercial
          .numberOfVehicles
          ? Number(
              logisticsCommercial
                .numberOfVehicles
            )
          : null,

      bank_name:
        logisticsCommercial
          .bankName
          ?.trim() ||
        null,

      account_holder_name:
        logisticsCommercial
          .accountHolderName
          ?.trim() ||
        null,

      account_number:
        logisticsCommercial
          .accountNumber
          ?.trim() ||
        null,

      ifsc_code:
        logisticsCommercial
          .ifscCode
          ?.trim()
          .toUpperCase() ||
        null,

      upi_id:
        logisticsCommercial
          .upiId
          ?.trim() ||
        null,

      emergency_contact_name:
        logisticsCommercial
          .emergencyContactName
          ?.trim(),

      emergency_contact_number:
        logisticsCommercial
          .emergencyContactNumber
          ?.trim(),


      /* STEP 7 */

      information_confirmed:
        declaration
          .informationConfirmed,

      compliance_confirmed:
        declaration
          .complianceConfirmed,

      terms_accepted:
        declaration
          .termsAccepted,

      recycling_compliance_accepted:
        declaration
          .recyclingComplianceAccepted,

      communication_consent:
        declaration
          .communicationConsent,
    };


    /* ========================================================
       CREATE REGISTRATION
    ======================================================== */

    const {
      data: registration,
      error: insertError,
    } = await supabaseAdmin
      .from(
        "recycler_partner_registrations"
      )
      .insert(payload)
      .select(
        "id,registration_number,registration_status"
      )
      .single();

    if (insertError) {
      console.error(
        "Recycler Registration Insert Error:",
        insertError
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to create Recycler Partner registration.",
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
    `Recycler Document Upload Error (${document.formField})`,
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
        "recycler_partner_registrations"
      )
      .update(documentPaths)
      .eq(
        "id",
        registration.id
      );

    if (documentUpdateError) {
      console.error(
        "Recycler Document Path Update Error:",
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
          "Recycler Partner registration submitted successfully.",

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
      "Recycler Registration POST Error:",
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