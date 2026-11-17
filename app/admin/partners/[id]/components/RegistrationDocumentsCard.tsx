import AdminCard from "@/components/admin/AdminCard";
import DocumentRow from "@/components/admin/DocumentRow";

import { CollectionPartner } from "../../types";

interface RegistrationDocumentsCardProps {
  partner: CollectionPartner;
}

export default function RegistrationDocumentsCard({
  partner,
}: RegistrationDocumentsCardProps) {
  return (
    <AdminCard title="Registration Documents">

      <div className="space-y-3">

        <DocumentRow
          label="GST Certificate"
          fileUrl={partner.gst_certificate}
        />

        <DocumentRow
          label="PAN Card"
          fileUrl={partner.pan_card}
        />

        <DocumentRow
          label="Trade Licence"
          fileUrl={partner.trade_license}
        />

        <DocumentRow
          label="Aadhaar Front"
          fileUrl={partner.aadhaar_front}
        />

        <DocumentRow
          label="Aadhaar Back"
          fileUrl={partner.aadhaar_back}
        />

        <DocumentRow
          label="Driving Licence"
          fileUrl={partner.driving_licence}
        />

        <DocumentRow
          label="Owner Photo"
          fileUrl={partner.owner_photo}
        />

      </div>

    </AdminCard>
  );
}