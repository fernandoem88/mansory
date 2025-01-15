import { BREAK_POINTS, FONT_SIZES, PALETTE } from "@/lib/theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  overflow: auto;
  background-color: white;
`;

export const Gallery = styled.ul`
  list-style: none;
  grid-template-columns: 1fr;
  column-gap: 12px;
  width: 100%;
  padding: 8px;
  display: grid;
  @media screen and (min-width: ${BREAK_POINTS.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${BREAK_POINTS.md}px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 12px;
  }

  @media screen and (min-width: ${BREAK_POINTS.lg}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const MessageText = styled.div`
  background-color: ${PALETTE.primary.light};
  margin: auto;
  margin-top: 16px;
  padding: 8px;
  width: calc(100% - 24px);
  font-size: ${FONT_SIZES.body1};
`;
