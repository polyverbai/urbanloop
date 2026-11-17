interface BusinessPartnerDuplicateProps {
  duplicateType: string;
  registrationNumber: string;
  applicationStatus: string;
  onReturn: () => void;
}

export default function BusinessPartnerDuplicate({
  duplicateType,
  registrationNumber,
  applicationStatus,
  onReturn,
}: BusinessPartnerDuplicateProps) {

  const getHeading = () => {

    switch (duplicateType) {

      case "mobile":
        return "Mobile Number Already Registered";

      case "pan":
        return "PAN Number Already Registered";

      case "gst":
        return "GST Number Already Registered";

      default:
        return "Registration Already Exists";

    }

  };

  return (

    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border p-10 text-center">

      <div className="text-6xl mb-6">
        ⚠️
      </div>

      <h1 className="text-3xl font-bold text-red-700">
        {getHeading()}
      </h1>

      <p className="mt-6 text-gray-600">
        We found an existing UrbanLoop Business Partner registration using the information you entered.
      </p>

      {registrationNumber && (

        <div className="mt-8">

          <p className="text-sm text-gray-500">
            Registration Number
          </p>

          <p className="text-3xl font-bold text-blue-700 mt-2">
            {registrationNumber}
          </p>

        </div>

      )}

      {applicationStatus && (

        <div className="mt-8">

          <span className="inline-flex items-center rounded-full bg-yellow-100 px-5 py-2 font-semibold text-yellow-800">

            {applicationStatus}

          </span>

        </div>

      )}

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-left">

        <h3 className="font-semibold text-blue-800 mb-3">
          What should you do?
        </h3>

        <ul className="space-y-2 text-gray-700">

          <li>✔ Please review the information entered.</li>

          <li>✔ Correct the duplicate information if necessary.</li>

          <li>✔ If you believe this is an error, contact UrbanLoop Support.</li>

        </ul>

      </div>

      <div className="mt-10">

        <button
          type="button"
          onClick={onReturn}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Return to Collection Partner Form
        </button>

      </div>

    </div>

  );

}