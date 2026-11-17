"use client";

interface ConfirmationDialogProps {
  open: boolean;
  title: string;
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
}

export default function ConfirmationDialog({
  open,
  title,
  message,
  type = "info",
  onClose,
}: ConfirmationDialogProps) {
  if (!open) return null;

  const colors = {
    success: {
      icon: "✓",
      bg: "bg-green-100",
      text: "text-green-700",
      button: "bg-[#72B543] hover:bg-[#5FA032]",
    },
    error: {
      icon: "✕",
      bg: "bg-red-100",
      text: "text-red-700",
      button: "bg-red-600 hover:bg-red-700",
    },
    info: {
      icon: "ℹ",
      bg: "bg-blue-100",
      text: "text-blue-700",
      button: "bg-blue-600 hover:bg-blue-700",
    },
  };

  const style = colors[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <div
          className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${style.bg}`}
        >
          <span className={`text-3xl font-bold ${style.text}`}>
            {style.icon}
          </span>
        </div>

        <h2 className="mb-3 text-center text-2xl font-bold">
          {title}
        </h2>

        <p className="mb-8 text-center text-slate-600">
          {message}
        </p>

        <button
          onClick={onClose}
          className={`w-full rounded-xl py-3 font-semibold text-white transition ${style.button}`}
        >
          OK
        </button>

      </div>

    </div>
  );
}