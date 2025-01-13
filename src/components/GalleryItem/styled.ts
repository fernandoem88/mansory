import styled, { css } from "styled-components";

export const Card = styled.div<{
  $bgSrc?: string;
  $aspectRatio?: string | number;
}>`
  position: relative;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
  ${(p) => (p.$aspectRatio ? `aspect-ratio: ${p.$aspectRatio};` : "")}
  background-image: ${({ $bgSrc }) => {
    if ($bgSrc) return `url(${$bgSrc})`;
    return css`radial-gradient(circle, #d4d4d4, #ffffff, #d4d4d4
      );`;
  }};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  object-position: center;
`;
