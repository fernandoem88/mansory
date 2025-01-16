import { BREAK_POINTS } from "@/lib/theme";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Card = styled.li<{
  $bgSrc?: string;
  $aspectRatio: number;
  $rowSpan: number;
}>`
  break-inside: avoid;
  position: relative;
  display: flex;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  ${(p) => `aspect-ratio: ${p.$aspectRatio};`}
  ${(p) => `grid-row: span ${p.$rowSpan};`}

  background-image: ${({ $bgSrc }) => {
    if ($bgSrc) return `url(${$bgSrc})`;
    return css`linear-gradient(to bottom, #d4d4d4, #ffffff, #d4d4d4);`;
  }};
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: ${BREAK_POINTS.md}px) {
    margin-bottom: 8px;
  }

  /* @media screen and (min-width: ${BREAK_POINTS.lg}px) {
    margin-bottom: 12px;
  } */
`;

export const CardButton = styled(Link)`
  width: 100%;
  height: 100%;
  flex: 1;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: stretch;
  border: none;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  object-position: center;
`;
