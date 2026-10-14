import { supabase } from "./supabase";
import generateRegistrationNumber from "./generateRegistrationNumber";
import type { CollectionPartnerForm } from "@/app/partner-program/collection-partner/types";

export async function saveCollectionPartner(
  formData: CollectionPartnerForm
) {
  try {
    const { count, error: countError } = await supabase
  .from("collection_partner_registrations")
  .select("*", {
    count: "exact",
    head: true,
  });

if (countError) {
  throw countError;
}

const registrationNumber =
  generateRegistrationNumber(
    "CP",
    (count ?? 0) + 1
  );

console.log(registrationNumber);

// Upload all documents
const documents = await uploadDocuments(formData);

console.log(documents);

// Insert into Supabase
const { error } = await supabase
  .from("collection_partner_registrations")
  .insert([
    {
      registration_number: registrationNumber,

      business_information:
        formData.businessInformation,

      business_address:
        formData.businessAddress,

      material_collection:
        formData.materialCollection,

      segregation_facility:
        formData.segregationFacility,

      self_transportation:
        formData.selfTransportation,

      facility_transportation:
        formData.facilityTransportation,

      coverage_payment:
        formData.coveragePayment,

      declaration:
        formData.declaration,

      documents,
    },
  ]);

if (error) {
  throw error;
}

return {
  success: true,
  registrationNumber,
};

  } catch (error) {
    console.error(error);

    return {
      success: false,
      error,
    };
  }
}

  async function uploadFile(
  bucket: string,
  folder: string,
  file: File | null
): Promise<string | null> {
  if (!file) return null;

  const fileName = `${Date.now()}-${file.name}`;

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

async function uploadDocuments(
  formData: CollectionPartnerForm
) {
  return {
    gstCertificate: await uploadFile(
      "collection-partner-documents",
      "gst-certificate",
      formData.businessVerification.gstCertificate
    ),

    panCard: await uploadFile(
      "collection-partner-documents",
      "pan-card",
      formData.businessVerification.panCard
    ),

    tradeLicense: await uploadFile(
      "collection-partner-documents",
      "trade-license",
      formData.businessVerification.tradeLicense
    ),

    pollutionCertificate: await uploadFile(
      "collection-partner-documents",
      "pollution-certificate",
      formData.businessVerification.pollutionCertificate
    ),

    aadhaarFront: await uploadFile(
      "collection-partner-documents",
      "aadhaar-front",
      formData.businessVerification.aadhaarFront
    ),

    aadhaarBack: await uploadFile(
      "collection-partner-documents",
      "aadhaar-back",
      formData.businessVerification.aadhaarBack
    ),

    ownerPhoto: await uploadFile(
      "collection-partner-documents",
      "owner-photo",
      formData.businessVerification.ownerPhoto
    ),

    drivingLicence: await uploadFile(
      "collection-partner-documents",
      "driving-licence",
      formData.selfTransportation.drivingLicence
    ),
  };
}