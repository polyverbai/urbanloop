import {
  NextRequest,
  NextResponse,
} from "next/server";

import { supabase } from "@/lib/supabase";
import generateRegistrationNumber from "@/lib/generateRegistrationNumber";

export async function POST(
  request: NextRequest
) {
  try {
 const requestData = await request.formData();

const body = JSON.parse(
  requestData.get("registrationData") as string
);

console.log("Collection Partner Request Received");
console.log(body);

body.businessVerification.gstCertificate =
  requestData.get("gstCertificate") as File | null;

body.businessVerification.panCard =
  requestData.get("panCard") as File | null;

body.businessVerification.tradeLicense =
  requestData.get("tradeLicense") as File | null;

console.log(
    "Trade License File:",
    body.businessVerification.tradeLicense
);

body.businessVerification.aadhaarFront =
  requestData.get("aadhaarFront") as File | null;

body.businessVerification.aadhaarBack =
  requestData.get("aadhaarBack") as File | null;

body.businessVerification.ownerPhoto =
  requestData.get("ownerPhoto") as File | null;

body.facilityTransportation.drivingLicence =
  requestData.get("drivingLicence") as File | null;

// Check duplicate mobile number
const { data: existingMobile } = await supabase
  .from("collection_partner_registrations")
  .select("id")
  .eq(
    "mobile_number",
    body.businessInformation.mobileNumber
  )
  .maybeSingle();

if (existingMobile) {
  return NextResponse.json(
    {
      success: false,
      message:
        "This mobile number is already registered.",
    },
    {
      status: 409,
    }
  );
}

// Get current registration count
const { count, error: countError } = await supabase
  .from("collection_partner_registrations")
  .select("*", {
    count: "exact",
    head: true,
  });

if (countError) {
  throw countError;
}

// Generate Registration Number
const registrationNumber =
  generateRegistrationNumber(
    "CP",
    (count ?? 0) + 1
  );

console.log(
  "Registration Number:",
  registrationNumber
);

// Upload all documents
const documents = await uploadDocuments(body);

console.log("Uploaded Documents:");
console.log(documents);

console.log("Trade License URL:");
console.log(documents.tradeLicense);

// Save into Supabase
console.log("Value going into trade_license column:");
console.log(documents.tradeLicense);

console.log("Trade License URL being inserted:");
console.log(documents.tradeLicense);

const { error: insertError } = await supabase
  .from("collection_partner_registrations")
  .insert({
    partner_registration_number: registrationNumber,

    collection_partner_category:
  body.businessInformation.collectionPartnerCategory,

shop_name:
  body.businessInformation.shopName,

    owner_name:
      body.businessInformation.ownerName,

    mobile_number:
      body.businessInformation.mobileNumber,

    email:
  body.businessInformation.email,

gst_number:
  body.businessInformation.gstNumber,

pan_number:
  body.businessInformation.panNumber,

trade_license_number:
  body.businessInformation.tradeLicenseNumber,

gst_certificate:
  documents.gstCertificate,

pan_card:
  documents.panCard,

trade_license:
  documents.tradeLicense,

aadhaar_front:
  documents.aadhaarFront,

aadhaar_back:
  documents.aadhaarBack,

owner_photo:
  documents.ownerPhoto,

driving_licence:
  documents.drivingLicence,

      shop_number:
  body.businessAddress.shopNumber,

building_name:
  body.businessAddress.buildingName,

street_area:
  body.businessAddress.streetArea,

landmark:
  body.businessAddress.landmark,

city:
  body.businessAddress.city,

state:
  body.businessAddress.state,

pin_code:
  body.businessAddress.pinCode,

materials_handled:
  body.materialCollection.materialsHandled,

collection_services:
  body.materialCollection.collectionServices,

monthly_collection_capacity:
  body.materialCollection.monthlyCollectionCapacity,

collection_capacity_unit:
  body.materialCollection.collectionCapacityUnit,

daily_collection_capacity:
  body.materialCollection.dailyCollectionCapacity,

storage_space_available:
  body.materialCollection.storageSpaceAvailable,

storage_capacity:
  body.materialCollection.storageCapacity,

storage_capacity_unit:
  body.materialCollection.storageCapacityUnit,

segregation_facility_available: null,

segregation_capacity: null,

segregation_capacity_unit: null,

vehicle_types:
  body.facilityTransportation.vehicleTypes,

number_of_vehicles:
  body.facilityTransportation.numberOfVehicles,

vehicle_registration_numbers:
  body.facilityTransportation.vehicleNumbers,

operating_areas:
  body.coveragePayment.operatingAreas,

preferred_pickup_days:
  body.coveragePayment.preferredPickupDays,

preferred_pickup_time:
  body.coveragePayment.preferredPickupTime,

bank_name:
    body.coveragePayment.bankName,

account_holder_name:
    body.coveragePayment.accountHolderName,

account_number:
    body.coveragePayment.accountNumber,

ifsc_code:
    body.coveragePayment.ifscCode,

upi_id:
    body.coveragePayment.upiId,

declaration_accepted:
  body.declaration.declarationAccepted,

terms_accepted:
  body.declaration.termsAccepted,

communication_consent:
  body.declaration.communicationConsent,

application_status:
  "Pending",

  });

if (insertError) {
  throw insertError;
}

const { error: timelineError } = await supabase
  .from("collection_partner_timeline")
  .insert({
    partner_registration_number: registrationNumber,
    action: "Submitted",
    remarks: "Application Submitted",
    action_by: "Collection Partner",
     });

if (timelineError) {
  throw timelineError;
}



console.log(
  "Collection Partner saved successfully."
);

return NextResponse.json({
  success: true,
  message: "Collection Partner Registration submitted successfully.",
  registrationNumber,
});

  } catch (error) {
    console.error(error);


    
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}



async function uploadFile(
  bucket: string,
  folder: string,
  file: File | null
): Promise<string | null> {
  if (!file) {
    return null;
  }

  const fileName =
  `${crypto.randomUUID()}-${file.name}`;

  const filePath = `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return data.publicUrl;
}


async function uploadDocuments(body: any) {
  return {
    gstCertificate: await uploadFile(
      "collection-partner",
      "gst-certificate",
      body.businessVerification?.gstCertificate ?? null
    ),

    panCard: await uploadFile(
      "collection-partner",
      "pan-card",
      body.businessVerification?.panCard ?? null
    ),

    tradeLicense: await uploadFile(
      "collection-partner",
      "trade-license",
      body.businessVerification?.tradeLicense ?? null
    ),

    aadhaarFront: await uploadFile(
      "collection-partner",
      "aadhaar-front",
      body.businessVerification?.aadhaarFront ?? null
    ),

    aadhaarBack: await uploadFile(
      "collection-partner",
      "aadhaar-back",
      body.businessVerification?.aadhaarBack ?? null
    ),

    ownerPhoto: await uploadFile(
      "collection-partner",
      "owner-photo",
      body.businessVerification?.ownerPhoto ?? null
    ),

    drivingLicence: await uploadFile(
      "collection-partner",
      "driving-licence",
      body.facilityTransportation?.drivingLicence ?? null
    ),
  };
}
