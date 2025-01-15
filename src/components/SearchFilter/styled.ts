import { FONT_SIZES, PALETTE } from "@/lib/theme";
import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  gap: 12px;
  padding: 12px;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 24px;
  width: 180px;
  margin-left: auto;
  padding: 4px;
`;

export const SearchChip = styled.p`
  font-size: ${FONT_SIZES.body1};
  background-color: ${PALETTE.grey["100"]};
  border-radius: 16px;
  padding: 6px 8px;
  text-transform: capitalize;
`;
