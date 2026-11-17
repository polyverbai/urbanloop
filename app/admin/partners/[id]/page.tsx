"use client";

import { CollectionPartner } from "../types";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { getPartnerByRegistrationNumber } from "@/lib/admin/partners";
import HeroCard from "./components/HeroCard";
import AdminCard from "@/components/admin/AdminCard";
import BusinessInformationCard from "./components/BusinessInformationCard";
import ContactInformationCard from "./components/ContactInformationCard";
import BusinessAddressCard from "./components/BusinessAddressCard";
import RegistrationDocumentsCard from "./components/RegistrationDocumentsCard";
import MaterialsCollectionCard from "./components/MaterialsCollectionCard";
import ProcessingFacilityCard from "./components/ProcessingFacilityCard";
import TransportationCard from "./components/TransportationCard";
import AdminDetailLayout from "@/components/admin/AdminDetailLayout";
import CoverageAreaCard from "./components/CoverageAreaCard";
import PaymentInformationCard from "./components/PaymentInformationCard";
import DeclarationCard from "./components/DeclarationCard";
import VerificationTimelineCard from "./components/VerificationTimelineCard";
import VerificationDecisionCard from "./components/VerificationDecisionCard";

export default function PartnerDetailsPage() {

  const params = useParams();

  const registrationNumber = params.id as string;

  const [partner, setPartner] = useState<any>(null);

const [loading, setLoading] = useState(true);

async function loadPartner() {

  try {

    const data =
      await getPartnerByRegistrationNumber(
        registrationNumber
      );

    setPartner(data);

  } catch (error) {

    console.error(error);

  } finally {

    setLoading(false);

  }

}

useEffect(() => {

  loadPartner();

}, [registrationNumber]);

  return (

<AdminDetailLayout

hero={

!loading && partner ? (

<HeroCard partner={partner} />

) : null

}

>

<section>

{loading ? (

<AdminCard title="Loading">

<h2 className="text-xl font-bold">

Loading Partner Information...

</h2>

</AdminCard>

) : (

<div className="space-y-8">

{/* First Row */}

<div className="grid gap-8 lg:grid-cols-2">

<BusinessInformationCard partner={partner} />

<ContactInformationCard partner={partner} />

</div>

{/* Second Row */}

<div className="grid gap-8 lg:grid-cols-2">

<BusinessAddressCard partner={partner} />

<RegistrationDocumentsCard partner={partner} />

</div>

{/* Third Row */}

<div className="grid gap-8 lg:grid-cols-2">

<MaterialsCollectionCard partner={partner} />

<ProcessingFacilityCard partner={partner} />

</div>

{/* Fourth Row */}

<div className="grid gap-8 lg:grid-cols-2">

<TransportationCard
  partner={partner}
/>

<CoverageAreaCard
  partner={partner}
/>

</div>

{/* Fifth Row */}

<div className="grid gap-8 lg:grid-cols-2">

<PaymentInformationCard partner={partner} />

<DeclarationCard partner={partner} />

</div>

{/* Sixth Row */}

<div className="grid gap-8 lg:grid-cols-2 items-start">

<VerificationDecisionCard
  registrationNumber={
    partner.partner_registration_number
  }
  currentStatus={
    partner.application_status
  }
  onStatusChanged={loadPartner}
/>

<VerificationTimelineCard
  partner={partner}
  onStatusChanged={loadPartner}
/>

</div>

</div>

)}

</section>

</AdminDetailLayout>

);
}