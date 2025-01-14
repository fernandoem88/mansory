"use client";

import { ReactNode } from "react";
import { UiPortal } from "../Portal";
import { Backdrop, ModalDialog } from "./styled";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const UiModalPaper = ({ open, onClose, children }: Props) => {
  return (
    <UiPortal>
      <Backdrop
        open={open}
        onMouseDown={(e) => e.currentTarget.setAttribute("data-mouse", "down")}
        onClick={(e) => {
          const target = e.currentTarget;
          const isTarget = target.getAttribute("data-mouse") === "down";

          if (!isTarget) return;

          target.removeAttribute("data-mouse");
          onClose();
        }}
      >
        <ModalDialog open={open} onMouseDown={(e) => e.stopPropagation()}>
          {open && children}
        </ModalDialog>
      </Backdrop>
    </UiPortal>
  );
};
