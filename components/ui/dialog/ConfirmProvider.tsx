"use client";

import {
  createContext,
  useMemo,
  useRef,
  useState,
} from "react";

import ConfirmDialog from "./ConfirmDialog";

import type {
  ConfirmDialogContextType,
  ConfirmDialogOptions,
} from "./types";

export const ConfirmDialogContext =
  createContext<
    ConfirmDialogContextType | undefined
  >(undefined);

export default function ConfirmProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [
    open,
    setOpen,
  ] = useState(false);

  const [
    options,
    setOptions,
  ] =
    useState<ConfirmDialogOptions>({
      title: "",
      message: "",
    });

  const resolver =
    useRef<
      ((value: boolean) => void) | null
    >(null);

  function confirm(
    dialog: ConfirmDialogOptions
  ) {

    setOptions(dialog);

    setOpen(true);

    return new Promise<boolean>(
      (resolve) => {

        resolver.current =
          resolve;

      }
    );

  }

  function handleConfirm() {

    setOpen(false);

    resolver.current?.(true);

  }

  function handleCancel() {

    setOpen(false);

    resolver.current?.(false);

  }

  const value =
    useMemo(
      () => ({
        confirm,
      }),
      []
    );

  return (

    <ConfirmDialogContext.Provider
      value={value}
    >

      {children}

      <ConfirmDialog
        open={open}
        options={options}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

    </ConfirmDialogContext.Provider>

  );

}