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
  columns: 1;
  gap: 8px;
  width: 100%;
  /* background-color: white; */
  padding: 8px;
  @media screen and (min-width: ${BREAK_POINTS.sm}px) {
    columns: 2;
  }
  @media screen and (min-width: ${BREAK_POINTS.md}px) {
    columns: 3;
    gap: 12px;
    padding: 12px;
  }

  @media screen and (min-width: ${BREAK_POINTS.lg}px) {
    columns: 4;
    gap: 16px;
    gap: 16px;
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
