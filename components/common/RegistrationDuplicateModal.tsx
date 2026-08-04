"use client";


interface RegistrationDuplicateModalProps {
  type: string;
  field: string;
  value: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationDuplicateModal({
  type,
  field,
  value,
  isOpen,
  onClose,
}: RegistrationDuplicateModalProps) {

  if (!isOpen) return null;

  return (

  <div className="fixed inset-x-0 top-24 bottom-0 z-50 flex items-start justify-center bg-black/50 px-6 pt-8">

    <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

      <div className="mb-6 text-6xl">
        ⚠️
      </div>

      <h1 className="text-3xl font-bold text-slate-900">
        Registration Already Exists
      </h1>

      <div className="mt-5 space-y-4 text-left">

 <div className="mt-5 text-center">

  <div>
    <p className="text-sm font-medium text-slate-500">
      Registration Type
    </p>

    <p className="text-lg font-semibold text-slate-900">
      {type}
    </p>
  </div>

  <div>
    <p className="text-sm font-medium text-slate-500 py-5">
      Duplicate Information
    </p>

    <p className="mt-1 text-base text-slate-900">
      <span className="font-semibold">
        Field:
      </span>{" "}
      {field}
    </p>

    <p className="mt-1 text-base text-slate-900">
      <span className="font-semibold">
        Value:
      </span>{" "}
      {value}
    </p>
  </div>
</div>
</div>

      <p className="mt-6 text-slate-600 leading-relaxed">
        Please review and update the duplicate
        information before submitting your
        registration again.
      </p>

<div className="mt-6 flex justify-center">

  <button
  type="button"
  onClick={onClose}
  className="rounded-xl bg-[#72B543] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#5FA032]"
>
  Review & Update Information
</button>

  </div>

    </div>

  </div>

);
}