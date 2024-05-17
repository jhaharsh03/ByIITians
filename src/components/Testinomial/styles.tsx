import styled from "styled-components";
import { Carousel } from "antd";

export const MiddleBlockSection = styled.section`
  padding-top: 20px;
  position: relative;
  text-align: center;
  padding-bottom: 3rem; /* Add bottom padding */
  background-color: rgba(24, 33, 109, 0.1); /* Light purple background color */

  @media screen and (max-width: 768px) {
    padding-bottom: 2rem; /* Increase bottom padding for smaller screens */
    
  }
`;

export const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%; /* Ensure ContentWrapper fills the available width */
  display: flex;
  flex-direction: column; /* Adjust for vertical layout */
  align-items: center; /* Center items horizontally */
  gap: 2rem; /* Add gap between items */

  @media only screen and (max-width: 950px) {
    padding: 0 1rem; /* Adjust padding for responsiveness */
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  align-items: center; /* Center the image horizontally */

  @media only screen and (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    text-align: center; /* Center items */
  }
`;

export const Paragraph = styled.p`
  margin: 0; /* Adjust top margin for spacing */
  flex: 1;
  text-align: center; /* Center paragraph text */
`;

export const Button = styled.button`
  margin-top: 2rem; /* Add margin between carousel and button */
`;

export const CarouselContainer = styled(Carousel)`
  flex: 1;
`;

export const CarouselItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center; /* Center items vertically */
  justify-content: space-between;
  margin-bottom: 0; /* Add margin between carousel items */
`;
