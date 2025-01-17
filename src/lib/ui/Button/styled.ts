import { FONT_SIZES, PALETTE } from "@/lib/theme";
import styled, { css } from "styled-components";

type Color = "primary" | "secondary" | "warning";
type Variant = "contained" | "outlined";

export interface ButtonRootProps {
  color?: Color;
  variant?: Variant;
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  noElevation?: boolean;
}

const BUTTON_SIZES = {
  sm: FONT_SIZES.body2,
  md: FONT_SIZES.body1,
  lg: FONT_SIZES.body1,
};

const getStyle = ({ color, variant, rounded }: ButtonRootProps) => {
  if (variant === "contained") {
    return css`
      border-color: none !important;
      color: ${color ? "white" : "#777"};
      background: ${color ? PALETTE[color].main : PALETTE.grey["300"]};
    `;
  }

  return css`
    border: solid 1px ${color ? PALETTE[color].main : PALETTE.grey[200]};
    ${rounded ? "" : "background-color: white;"}
  `;
};

export const Root = styled.button.withConfig({
  shouldForwardProp: (prop) => !["rounded", "noElevation"].includes(prop),
})<ButtonRootProps>`
  all: unset;
  outline: none !important;
  color: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: ${(p) => (p.rounded ? "4px" : "4px 8px")};
  font-size: ${({ size = "md" }) => BUTTON_SIZES[size]};
  min-height: ${(p) => (p.size === "lg" ? "36px" : "15px")};
  ${(p) =>
    p.rounded &&
    css`
      aspect-ratio: 1 / 1;
    `}
  border-radius: ${(p) => (p.rounded ? "50%" : "4px")};
  box-shadow: ${(p) => (p.noElevation ? "none" : "2px 2px 8px #4444")};
  transition: 0.2s;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  &:active,
  &:disabled {
    box-shadow: none;
  }
  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  ${(p) => getStyle(p)}
`;
