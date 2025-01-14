import {
  ForwardedRef,
  forwardRef,
  type MouseEvent,
  type ReactNode,
} from "react";
import { type ButtonRootProps, Root } from "./styled";

interface Props extends ButtonRootProps {
  noElevation?: boolean;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  title?: string;
  type?: "button" | "reset" | "submit";
}

export const UiButton = forwardRef(function UiButtonWithRef(
  { children, onClick, disabled, ...props }: Props,
  ref: ForwardedRef<HTMLButtonElement | null>
) {
  return (
    <Root
      {...props}
      disabled={disabled}
      ref={ref}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
      }}
    >
      {children}
    </Root>
  );
});
