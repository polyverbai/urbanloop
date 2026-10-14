import type {
  TransportPartnerForm,
} from "./types";


/* =====================================================
   COMMON VALIDATION PATTERNS
===================================================== */

const MOBILE_REGEX = /^[0-9]{10}$/;

const EMAIL_REGEX =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const PAN_REGEX =
  /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

const GST_REGEX =
  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/;

const PIN_CODE_REGEX =
  /^[0-9]{6}$/;

const IFSC_REGEX =
  /^[A-Z]{4}0[A-Z0-9]{6}$/;


/* =====================================================
   STEP 1 — BUSINESS INFORMATION
===================================================== */

export function validateStep1(
  formData: TransportPartnerForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  const data =
    formData.businessInformation;


  if (!data.transportPartnerCategory.trim()) {
    errors.transportPartnerCategory =
      "Transport Partner Category is required.";
  }


  if (!data.businessName.trim()) {
    errors.businessName =
      "Business / Transport Name is required.";
  }


  if (!data.ownerName.trim()) {
    errors.ownerName =
      "Owner / Proprietor Name is required.";
  }


  if (!data.primaryContactPerson.trim()) {
    errors.primaryContactPerson =
      "Primary Contact Person is required.";
  }


  if (!data.mobileNumber.trim()) {
    errors.mobileNumber =
      "Mobile Number is required.";
  } else if (
    !MOBILE_REGEX.test(data.mobileNumber)
  ) {
    errors.mobileNumber =
      "Enter a valid 10-digit Mobile Number.";
  }


  if (
    data.alternateMobileNumber &&
    !MOBILE_REGEX.test(
      data.alternateMobileNumber
    )
  ) {
    errors.alternateMobileNumber =
      "Enter a valid 10-digit Alternate Mobile Number.";
  }


  if (
    data.whatsappNumber &&
    !MOBILE_REGEX.test(
      data.whatsappNumber
    )
  ) {
    errors.whatsappNumber =
      "Enter a valid 10-digit WhatsApp Number.";
  }


  if (!data.email.trim()) {
    errors.email =
      "Email Address is required.";
  } else if (
    !EMAIL_REGEX.test(data.email)
  ) {
    errors.email =
      "Enter a valid Email Address.";
  }


  if (!data.panNumber.trim()) {
    errors.panNumber =
      "PAN Number is required.";
  } else if (
    !PAN_REGEX.test(
      data.panNumber.toUpperCase()
    )
  ) {
    errors.panNumber =
      "Enter a valid PAN Number.";
  }


  /*
    GST is intentionally optional.

    If GST is provided, however, it must
    contain a valid GST number.
  */

  if (
    data.gstNumber &&
    !GST_REGEX.test(
      data.gstNumber.toUpperCase()
    )
  ) {
    errors.gstNumber =
      "Enter a valid GST Number.";
  }


  return errors;
}


/* =====================================================
   STEP 2 — BUSINESS & COMPLIANCE VERIFICATION
===================================================== */

export function validateStep2(
  formData: TransportPartnerForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  const verification =
    formData.businessVerification;

  const business =
    formData.businessInformation;

  const fleet =
    formData.fleetCapability;


  /* PAN CARD */

  if (!verification.panCard) {
    errors.panCard =
      "PAN Card is required.";
  }


  /* OWNER / AUTHORIZED PERSON ID */

  if (!verification.authorizedPersonId) {
    errors.authorizedPersonId =
      "Authorized Person / Owner ID is required.";
  }


  /*
    GST CERTIFICATE

    GST itself is optional.

    But if a GST number was entered in Step 1,
    the corresponding GST Certificate becomes
    mandatory.
  */

  if (
    business.gstNumber.trim() &&
    !verification.gstCertificate
  ) {
    errors.gstCertificate =
      "GST Certificate is required because a GST Number was provided.";
  }


  /*
    VEHICLE DOCUMENTS

    If the partner declares that they own /
    operate vehicles, core vehicle compliance
    documents become mandatory.

    NOTE:
    Step 4 is normally completed after Step 2.
    Therefore this validation becomes especially
    important during final submission as well.

    We will also provide suitable UI behaviour
    when building the components.
  */

  if (
  fleet.ownsOperatesVehicles === "Yes"
) {

  if (
    !verification.vehicleRegistrationCertificate
  ) {
    errors.vehicleRegistrationCertificate =
      "Vehicle Registration Certificate (RC) is required.";
  }


  if (!verification.vehicleInsurance) {
    errors.vehicleInsurance =
      "Vehicle Insurance is required.";
  }


  if (!verification.pucCertificate) {
    errors.pucCertificate =
      "PUC Certificate is required.";
  }


  if (!verification.vehiclePhoto) {
    errors.vehiclePhoto =
      "Vehicle Photograph is required.";
  }
}


  /*
    DRIVING LICENCE

    For an Individual Vehicle Owner,
    Driving Licence is required.

    Fleet organisations can maintain individual
    driver records later through Fleet Management.
  */

  if (
    business.transportPartnerCategory ===
      "Individual Vehicle Owner" &&
    !verification.drivingLicence
  ) {
    errors.drivingLicence =
      "Driving Licence is required for an Individual Vehicle Owner.";
  }


  return errors;
}


/* =====================================================
   STEP 3 — BUSINESS / OPERATIONAL ADDRESS
===================================================== */

export function validateStep3(
  formData: TransportPartnerForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  const data =
    formData.businessAddress;


  if (!data.addressLine.trim()) {
    errors.addressLine =
      "Address Line / Office Number is required.";
  }


  if (!data.streetArea.trim()) {
    errors.streetArea =
      "Street / Area is required.";
  }


  if (!data.city.trim()) {
    errors.city =
      "City is required.";
  }


  if (!data.state.trim()) {
    errors.state =
      "State is required.";
  }


  if (!data.pinCode.trim()) {
    errors.pinCode =
      "PIN Code is required.";
  } else if (
    !PIN_CODE_REGEX.test(data.pinCode)
  ) {
    errors.pinCode =
      "Enter a valid 6-digit PIN Code.";
  }


  return errors;
}


/* =====================================================
   STEP 4 — FLEET & VEHICLE CAPABILITY
===================================================== */

export function validateStep4(
  formData: TransportPartnerForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  const data =
    formData.fleetCapability;


  if (!data.ownsOperatesVehicles) {
    errors.ownsOperatesVehicles =
      "Please specify whether you own or operate vehicles.";
  }


  /*
    A Transport Partner must ultimately have
    transport capability.

    When Yes is selected, vehicle information
    becomes mandatory.
  */

  if (
    data.ownsOperatesVehicles === "Yes"
  ) {

    if (!data.numberOfVehicles.trim()) {
      errors.numberOfVehicles =
        "Number of Vehicles is required.";
    } else {

      const numberOfVehicles =
        Number(data.numberOfVehicles);

      if (
        !Number.isInteger(numberOfVehicles) ||
        numberOfVehicles <= 0
      ) {
        errors.numberOfVehicles =
          "Enter a valid Number of Vehicles.";
      }
    }


    if (data.vehicleTypes.length === 0) {
      errors.vehicleTypes =
        "Select at least one Vehicle Type.";
    }


    if (
      !data.maximumTransportCapacity.trim()
    ) {
      errors.maximumTransportCapacity =
        "Maximum Transport Capacity is required.";
    } else {

      const maximumCapacity =
        Number(
          data.maximumTransportCapacity
        );

      if (
        !Number.isFinite(maximumCapacity) ||
        maximumCapacity <= 0
      ) {
        errors.maximumTransportCapacity =
          "Enter a valid Maximum Transport Capacity.";
      }
    }


    if (
      !data.maximumTransportCapacityUnit
    ) {
      errors.maximumTransportCapacityUnit =
        "Select the Maximum Transport Capacity Unit.";
    }
  }


  if (
    data.pickupCapabilities.length === 0
  ) {
    errors.pickupCapabilities =
      "Select at least one Pickup Capability.";
  }


  if (
    data.materialCategories.length === 0
  ) {
    errors.materialCategories =
      "Select at least one Material Category.";
  }


  /*
    MINIMUM LOAD IS OPTIONAL.

    If entered, both the value and unit
    must be valid.
  */

  if (data.minimumLoad.trim()) {

    const minimumLoad =
      Number(data.minimumLoad);

    if (
      !Number.isFinite(minimumLoad) ||
      minimumLoad < 0
    ) {
      errors.minimumLoad =
        "Enter a valid Minimum Load.";
    }

    if (!data.minimumLoadUnit) {
      errors.minimumLoadUnit =
        "Select the Minimum Load Unit.";
    }
  }


  if (
    !data.loadingAssistanceAvailable
  ) {
    errors.loadingAssistanceAvailable =
      "Please specify whether Loading Assistance is available.";
  }


  if (
    !data.unloadingAssistanceAvailable
  ) {
    errors.unloadingAssistanceAvailable =
      "Please specify whether Unloading Assistance is available.";
  }


  return errors;
}


/* =====================================================
   STEP 5 — SERVICE AREA & OPERATIONS
===================================================== */

export function validateStep5(
  formData: TransportPartnerForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  const data =
    formData.serviceOperations;


  if (data.operatingStates.length === 0) {
    errors.operatingStates =
      "Select at least one Operating State.";
  }


  if (
    data.operatingCitiesDistricts.length === 0
  ) {
    errors.operatingCitiesDistricts =
      "Enter or select at least one Operating City / District.";
  }


  if (!data.serviceAreas.trim()) {
    errors.serviceAreas =
      "Service Areas / Localities are required.";
  }


  if (!data.serviceRadius) {
    errors.serviceRadius =
      "Service Radius is required.";
  }


  if (
    data.operationalScope.length === 0
  ) {
    errors.operationalScope =
      "Select at least one Operational Scope.";
  }


  if (
    data.operatingDays.length === 0
  ) {
    errors.operatingDays =
      "Select at least one Operating Day.";
  }


  if (
    data.operatingTime.length === 0
  ) {
    errors.operatingTime =
      "Select at least one Operating Time.";
  }


  if (!data.sameDayPickupAvailable) {
    errors.sameDayPickupAvailable =
      "Please specify Same-Day Pickup availability.";
  }


  if (!data.weekendServiceAvailable) {
    errors.weekendServiceAvailable =
      "Please specify Weekend Service availability.";
  }


  return errors;
}


/* =====================================================
   STEP 6 — COMMERCIAL & PAYMENT INFORMATION
===================================================== */

export function validateStep6(
  formData: TransportPartnerForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  const data =
    formData.commercialPayment;


  if (
    data.commercialPreferences.length === 0
  ) {
    errors.commercialPreferences =
      "Select at least one Commercial Preference.";
  }


  if (!data.preferredSettlementMethod) {
    errors.preferredSettlementMethod =
      "Preferred Settlement Method is required.";
  }


  /*
    BANK DETAILS

    Required when Bank Transfer is selected.
  */

  if (
    data.preferredSettlementMethod ===
      "Bank Transfer"
  ) {

    if (!data.accountHolderName.trim()) {
      errors.accountHolderName =
        "Account Holder Name is required.";
    }


    if (!data.bankName.trim()) {
      errors.bankName =
        "Bank Name is required.";
    }


    if (!data.accountNumber.trim()) {
      errors.accountNumber =
        "Account Number is required.";
    }


    if (
      !data.confirmAccountNumber.trim()
    ) {
      errors.confirmAccountNumber =
        "Please confirm the Account Number.";
    }


    if (
      data.accountNumber &&
      data.confirmAccountNumber &&
      data.accountNumber !==
        data.confirmAccountNumber
    ) {
      errors.confirmAccountNumber =
        "Account Numbers do not match.";
    }


    if (!data.ifscCode.trim()) {
      errors.ifscCode =
        "IFSC Code is required.";
    } else if (
      !IFSC_REGEX.test(
        data.ifscCode.toUpperCase()
      )
    ) {
      errors.ifscCode =
        "Enter a valid IFSC Code.";
    }
  }


  /*
    UPI DETAILS

    Required when UPI settlement is selected.
  */

  if (
    data.preferredSettlementMethod ===
      "UPI" &&
    !data.upiId.trim()
  ) {
    errors.upiId =
      "UPI ID is required.";
  }


  return errors;
}


/* =====================================================
   STEP 7 — DECLARATION & CONSENT
===================================================== */

export function validateStep7(
  formData: TransportPartnerForm
): Record<string, string> {

  const errors: Record<string, string> = {};

  const data =
    formData.declaration;


  if (!data.informationConfirmed) {
    errors.informationConfirmed =
      "Please confirm that the information provided is correct.";
  }


  if (!data.termsAccepted) {
    errors.termsAccepted =
      "You must accept the Terms & Conditions.";
  }


  if (!data.communicationConsent) {
    errors.communicationConsent =
      "Communication Consent is required.";
  }


  if (!data.vehicleComplianceConfirmed) {
    errors.vehicleComplianceConfirmed =
      "Please confirm vehicle and driver compliance responsibilities.";
  }


  return errors;
}


/* =====================================================
   VALIDATE COMPLETE FORM

   Used before final submission as an additional
   protection layer.
===================================================== */

export function validateTransportPartnerForm(
  formData: TransportPartnerForm
): Record<string, string> {

  return {
    ...validateStep1(formData),
    ...validateStep2(formData),
    ...validateStep3(formData),
    ...validateStep4(formData),
    ...validateStep5(formData),
    ...validateStep6(formData),
    ...validateStep7(formData),
  };
}