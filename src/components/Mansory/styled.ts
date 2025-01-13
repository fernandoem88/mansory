import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 940px;
  height: 100vh;
  margin: auto;
  overflow: auto;
  background-color: white;
`;

export const Gallery = styled.div`
  columns: 1;
  gap: 8px;
  width: 100%;
  /* background-color: white; */
  padding: 8px;
  @media screen and (min-width: 567px) {
    columns: 2;
  }
  @media screen and (min-width: 787px) {
    columns: 3;
    gap: 12px;
    padding: 12px;
  }

  @media screen and (min-width: 994px) {
    columns: 4;
    gap: 16px;
    gap: 16px;
  }
`;
