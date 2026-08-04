export type NotificationType =
  | "success"
  | "error"
  | "warning"
  | "info";

export interface NotificationItem {

  id: string;

  type: NotificationType;

  title: string;

  message?: string;

  duration?: number;

  isClosing?: boolean;

}

export interface NotificationContextType {

  success: (
    title: string,
    message?: string
  ) => void;

  error: (
    title: string,
    message?: string
  ) => void;

  warning: (
    title: string,
    message?: string
  ) => void;

  info: (
    title: string,
    message?: string
  ) => void;

}