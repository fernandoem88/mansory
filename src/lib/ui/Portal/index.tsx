"use client";

import { useEffect, useState, type ReactElement } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactElement;
  key?: string;
}

export const UiPortal = ({ children, key }: Props) => {
  const [root, setRoot] = useState<Element | null>(null);
  useEffect(() => {
    const element = document.querySelector("#modal-root");
    setRoot(element || document.body);
  }, []);

  if (!root) return null;

  return createPortal(children, root, key);
};
