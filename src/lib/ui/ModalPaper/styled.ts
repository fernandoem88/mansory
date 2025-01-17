import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const animation = keyframes`
from { transform: translateY(-5px); }
to { transform: translateY(0); }
`;

export const Backdrop = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding-top: 24px;
  z-index: 1000;
  animation: ${(p) => (p.open ? fadeIn : fadeOut)} 0.3s forwards;
  visibility: ${(p) => (p.open ? "visible" : "hidden")};
`;

export const ModalDialog = styled.section<{ open: boolean }>`
  background-color: white;
  border-radius: 4px;
  width: calc(100vw - 48px);
  height: calc(100vh - 48px);

  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

  animation: ${animation} 0.3s forwards;
  display: grid;
  overflow: hidden;
  grid-template-areas: "modal-header" "modal-content" "modal-footer";
  grid-template-rows: auto 1fr auto;
`;
