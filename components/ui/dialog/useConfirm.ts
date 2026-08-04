"use client";

import {
  useContext,
} from "react";

import {
  ConfirmDialogContext,
} from "./ConfirmProvider";

export function useConfirm() {

  const context =
    useContext(
      ConfirmDialogContext
    );

  if (!context) {

    throw new Error(
      "useConfirm must be used inside ConfirmProvider."
    );

  }

  return context;

}