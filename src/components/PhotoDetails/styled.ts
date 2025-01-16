import { FONT_SIZES, PALETTE } from "@/lib/theme";
import styled from "styled-components";

export const Content = styled.div<{ $aspectRatio: number }>`
  margin: auto;
  max-height: 100%;
  &,
  & * {
    aspect-ratio: ${(p) => p.$aspectRatio};
  }
`;

export const DetailsFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  margin: auto;
  text-align: center;
  gap: 8px;
  & > p:not(:has(a)) {
    font-size: ${FONT_SIZES.body1};
  }
  & > p:has(a) {
    color: ${PALETTE.primary.main};
    font-size: ${FONT_SIZES.h6};
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ImgWrapper = styled.div<{ $aspectRatio: number; $bgSrc: string }>`
  aspect-ratio: ${(p) => p.$aspectRatio};
  height: 100%;
  min-height: 140px;
  width: auto;
  display: flex;
  justify-content: center;
  margin: auto;
  background-image: ${(p) => `url(${p.$bgSrc})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  overflow: hidden;
`;

export const Img = styled.img<{ $aspectRatio: number }>`
  width: 100%;
  height: auto;
  aspect-ratio: ${(p) => p.$aspectRatio};
  object-fit: cover;
  object-position: center;
`;
