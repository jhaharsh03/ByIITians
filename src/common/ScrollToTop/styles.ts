import styled from "styled-components";

export const ScrollUpContainer = styled("div")<{
  show: boolean;
}>`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;



// ScrollUpContainer: A styled div that appears as a fixed-position button typically used for scrolling up to the top of a page.
// Conditional Visibility: Uses the show prop to control visibility and opacity, making it fade in and out smoothly.
// Positioning: Fixed at the bottom-right corner of the viewport with padding and a rounded background.
// Hover Effect: Changes background color on hover, active, and focus states to indicate interactivity.
// Responsiveness: Hidden on screens smaller than 1240 pixels wide to maintain a clean UI on smaller devices.
// This component is useful for creating a "scroll to top" button that appears only when needed and remains fixed at a convenient location on the page.