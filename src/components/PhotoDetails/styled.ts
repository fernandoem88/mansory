import { FONT_SIZES, PALETTE } from "@/lib/theme";
import styled from "styled-components";

export const DetailsFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const CloseBtnText = styled.p`
  font-size: ${FONT_SIZES.h6};
  font-weight: 500;
`;

export const ImgWrapper = styled.div<{ $aspectRatio: number; $bgSrc: string }>`
  aspect-ratio: ${(p) => p.$aspectRatio};
  height: 100%;
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
