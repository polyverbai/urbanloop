"use client";

import {
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

import Notification from "./Notification";

import type {
  NotificationContextType,
  NotificationItem,
  NotificationType,
} from "./types";

export const NotificationContext =
  createContext<
    NotificationContextType | undefined
  >(undefined);

export default function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [
    notifications,
    setNotifications,
  ] = useState<
    NotificationItem[]
  >([]);

  /* =====================================================
     REMOVE NOTIFICATION
  ===================================================== */

  const removeNotification =
    useCallback(
      (id: string) => {

        setNotifications(
          (previous) =>
            previous.filter(
              (item) =>
                item.id !== id
            )
        );

      },
      []
    );

  /* =====================================================
     ADD NOTIFICATION
  ===================================================== */

  const showNotification =
    useCallback(
      (
        type: NotificationType,
        title: string,
        message?: string
      ) => {

        const id =
          crypto.randomUUID();

        const notification: NotificationItem =
          {
            id,
            type,
            title,
            message,
            duration: 4000,
          };

        setNotifications(
          (previous) => [
            ...previous,
            notification,
          ]
        );

        setTimeout(() => {

  setNotifications(previous =>
    previous.map(item =>
      item.id === id
        ? {
            ...item,
            isClosing: true,
          }
        : item
    )
  );

  setTimeout(() => {

    removeNotification(id);

  }, 300);

}, notification.duration! - 300);

      },
      [removeNotification]
    );

  /* =====================================================
     CONTEXT
  ===================================================== */

  const value =
    useMemo(
      () => ({
        success: (
          title: string,
          message?: string
        ) =>
          showNotification(
            "success",
            title,
            message
          ),

        error: (
          title: string,
          message?: string
        ) =>
          showNotification(
            "error",
            title,
            message
          ),

        warning: (
          title: string,
          message?: string
        ) =>
          showNotification(
            "warning",
            title,
            message
          ),

        info: (
          title: string,
          message?: string
        ) =>
          showNotification(
            "info",
            title,
            message
          ),

      }),
      [showNotification]
    );

  return (

    <NotificationContext.Provider
      value={value}
    >

      {children}

      <div
  className="
  fixed
  right-6
  top-28
  z-[9999]
  flex
  flex-col
  gap-4
  pointer-events-none
"
>

        {notifications.map(
          (
            notification
          ) => (

            <Notification
              key={
                notification.id
              }
              notification={
                notification
              }
              onClose={
                removeNotification
              }
            />

          )
        )}

      </div>

    </NotificationContext.Provider>

  );

}