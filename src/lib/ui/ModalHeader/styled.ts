import { FONT_SIZES, PALETTE } from "@/lib/theme";
import styled from "styled-components";

export const Root = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  /* border-bottom: solid 1px #ececec; */
  background-color: white;
  z-index: 1;
  padding: 12px 16px;
  grid-area: modal-header;
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: calc(100% - 40px);
  gap: 4px;
`;

export const Title = styled.h6`
  font-size: ${FONT_SIZES.h6};
  white-space: pre-wrap;
`;

export const SubTitle = styled.span`
  font-size: ${FONT_SIZES.body1};
  display: block;
  white-space: pre-wrap;
  color: ${PALETTE.grey[300]};
`;
