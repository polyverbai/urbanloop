export interface DuplicateValidationResult {
  field: string;
  message: string;
}

interface BusinessInformation {
  mobileNumber: string;
  panAvailable: string;
  panNumber: string;
  gstAvailable: string;
  gstNumber: string;
}

export async function validateDuplicateBusinessInformation(
  business: BusinessInformation
): Promise<DuplicateValidationResult | null> {

  console.log("==================================");
  console.log("Duplicate Validation Started");
  console.log("Business:", business);
  console.log("PAN Available =", business.panAvailable);
console.log("PAN Number =", business.panNumber);

console.log("GST Available =", business.gstAvailable);
console.log("GST Number =", business.gstNumber);

console.log("==================================");

  /* ---------- Mobile ---------- */

  console.log("Checking Mobile:", business.mobileNumber);

  const mobileResponse = await fetch(
    "/api/collection-partner-registration/validate-mobile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobileNumber: business.mobileNumber,
      }),
    }
  );

  const mobileResult = await mobileResponse.json();

  console.log("Mobile Result:", mobileResult);

  if (mobileResult.exists) {
    return {
      field: "mobileNumber",
      message: "This mobile number is already registered.",
    };
  }

  /* ---------- PAN ---------- */

  if (business.panNumber.trim()) {

    console.log("Checking PAN:", business.panNumber);

    const panResponse = await fetch(
      "/api/collection-partner-registration/validate-pan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          panNumber: business.panNumber,
        }),
      }
    );

    const panResult = await panResponse.json();

    console.log("PAN Result:", panResult);

    if (panResult.exists) {
      return {
        field: "panNumber",
        message: "This PAN number is already registered.",
      };
    }
  }

  
  return null;
}