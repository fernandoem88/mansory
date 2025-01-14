import styled, { css } from "styled-components";

export const Card = styled.li<{
  $bgSrc?: string;
  $aspectRatio?: string | number;
}>`
  position: relative;
  display: flex;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
  ${(p) => (p.$aspectRatio ? `aspect-ratio: ${p.$aspectRatio};` : "")}
  background-image: ${({ $bgSrc }) => {
    if ($bgSrc) return `url(${$bgSrc})`;
    return css`linear-gradient(to bottom, #d4d4d4, #ffffff, #d4d4d4);`;
  }};
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 787px) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 994px) {
    margin-bottom: 16px;
  }
`;

export const CardButton = styled.button`
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
