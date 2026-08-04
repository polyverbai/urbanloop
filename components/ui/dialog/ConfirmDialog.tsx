"use client";

import type {
  ConfirmDialogOptions,
} from "./types";

interface ConfirmDialogProps {

  open: boolean;

  options: ConfirmDialogOptions;

  onConfirm: () => void;

  onCancel: () => void;

}

export default function ConfirmDialog({

  open,

  options,

  onConfirm,

  onCancel,

}: ConfirmDialogProps) {

  if (!open) {

    return null;

  }

  return (

    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
      "
    >

      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          bg-white
          p-6
          shadow-2xl
        "
      >

        <h2
          className="
            text-xl
            font-semibold
            text-gray-900
          "
        >

          {options.title}

        </h2>

        <p
          className="
            mt-4
            text-gray-600
          "
        >

          {options.message}

        </p>

        <div
          className="
            mt-8
            flex
            justify-end
            gap-3
          "
        >

          <button
            onClick={onCancel}
            className="
              rounded-lg
              border
              border-gray-300
              px-5
              py-2
              font-medium
              transition
              hover:bg-gray-100
            "
          >

            {options.cancelText ??
              "Cancel"}

          </button>

          <button
            onClick={onConfirm}
            className="
              rounded-lg
              bg-[#72B543]
              px-5
              py-2
              font-medium
              text-white
              transition
              hover:bg-[#5d9636]
            "
          >

            {options.confirmText ??
              "Confirm"}

          </button>

        </div>

      </div>

    </div>

  );

}