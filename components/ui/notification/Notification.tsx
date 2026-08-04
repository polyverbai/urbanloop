"use client";

import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

import {
  NotificationItem,
} from "./types";

interface NotificationProps {

  notification: NotificationItem;

  onClose: (
    id: string
  ) => void;

}

export default function Notification({

  notification,

  onClose,

}: NotificationProps) {

  function getStyles() {

    switch (
      notification.type
    ) {

      case "success":

        return {
          icon: (
            <CheckCircle2
              size={24}
            />
          ),

          container:
            "border-green-300 bg-green-50 text-green-900",

          button:
            "text-green-700",

        };

      case "error":

        return {
          icon: (
            <XCircle
              size={24}
            />
          ),

          container:
            "border-red-300 bg-red-50 text-red-900",

          button:
            "text-red-700",

        };

      case "warning":

        return {
          icon: (
            <AlertTriangle
              size={24}
            />
          ),

          container:
            "border-amber-300 bg-amber-50 text-amber-900",

          button:
            "text-amber-700",

        };

      default:

        return {
          icon: (
            <Info
              size={24}
            />
          ),

          container:
            "border-blue-300 bg-blue-50 text-blue-900",

          button:
            "text-blue-700",

        };

    }

  }

  const style =
    getStyles();

  return (

    <div
      className={`
  pointer-events-auto
  ${
    notification.isClosing
      ? "animate-[fadeOut_.30s_ease-out_forwards]"
      : "animate-[slideInRight_.30s_ease-out]"
  }
  relative
  flex
        w-full
        max-w-lg
        items-start
        gap-3
        rounded-2xl
        border
        p-4
        shadow-2xl
        ${style.container}
      `}
    >

      <div>

        {style.icon}

      </div>

      <div className="flex-1">

        <h3 className="font-semibold">

          {notification.title}

        </h3>

        {notification.message && (

          <p className="mt-1 text-sm">

            {notification.message}

          </p>

        )}

      </div>

      <button
        onClick={() =>
          onClose(
            notification.id
          )
        }
        className={`
          ml-2
          font-bold
          ${style.button}
        `}
      >
        ✕
      </button>

      <div
  className="
    absolute
    bottom-0
    left-0
    h-1.5
    w-full
    overflow-hidden
    rounded-b-2xl
  "
>

  <div
  className={`
    h-full
    origin-left
    ${
      notification.type === "success"
        ? "bg-green-600"
        : notification.type === "error"
        ? "bg-red-600"
        : notification.type === "warning"
        ? "bg-amber-500"
        : "bg-blue-600"
    }
  `}
  style={{
    animation: `progressBar ${notification.duration}ms linear forwards`,
  }}
/>

</div>

    </div>

  );

}