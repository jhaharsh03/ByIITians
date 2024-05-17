import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  body {
    overflow: ${({ showPopup }: { showPopup: boolean }) => (showPopup ? "hidden" : "auto")};
    filter: ${({ showPopup }: { showPopup: boolean }) => (showPopup ? "blur(8px)" : "none")};
  }
`;

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const PopupContainer = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 10000; /* Increase the z-index value */
  
  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const CloseButton = styled("button")`
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  color: #888;

  &:hover {
    color: #555;
  }
`;
