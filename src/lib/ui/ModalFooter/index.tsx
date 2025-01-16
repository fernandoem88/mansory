import type { ReactNode } from "react";
import { Root } from "./styled";

interface Props {
  children?: ReactNode;
}

export const UiModalFooter = ({ children }: Props) => {
  return <Root>{children}</Root>;
};
