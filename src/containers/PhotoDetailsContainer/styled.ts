import { FONT_SIZES } from "@/lib/theme";
import styled from "styled-components";

export const CloseBtnText = styled.p`
  font-size: ${FONT_SIZES.h6};
  font-weight: 500;
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & button {
    align-self: flex-end;
    margin-right: 12px;
    margin-top: 12px;
  }
  & p {
    align-self: center;
  }
`;
