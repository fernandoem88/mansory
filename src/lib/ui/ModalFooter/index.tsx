import type { ReactNode } from "react";
import { Root } from "./styled";

interface Props {
  // isConfirmDisabled?: boolean;
  // onConfirm?: () => void;
  // onCancel?: () => void;
  children?: ReactNode;
}

export const UiModalFooter = ({
  // isConfirmDisabled,
  // onCancel,
  // onConfirm,
  children,
}: Props) => {
  return (
    <Root>
      {/* {!!onCancel && <UiButton onClick={onCancel}>cancel</UiButton>}
      {!!onConfirm && (
        <UiButton
          variant="contained"
          color={isConfirmDisabled ? undefined : "primary"}
          disabled={isConfirmDisabled}
          onClick={onConfirm}
        >
          confirm
        </UiButton>
      )} */}
      {children}
    </Root>
  );
};
