export interface ConfirmDialogOptions {

  title: string;

  message: string;

  confirmText?: string;

  cancelText?: string;

}

export interface ConfirmDialogContextType {

  confirm: (
    options: ConfirmDialogOptions
  ) => Promise<boolean>;

}