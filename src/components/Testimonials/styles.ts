import styled from "styled-components";
import { Carousel } from "antd";

export const MiddleBlockSection = styled.section`

position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const ContentWrapper = styled.div`

max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }

`;



export const Paragraph = styled.p`
  margin: 0; /* Adjust top margin for spacing */
  flex: 1;
  text-align: center; /* Center paragraph text */
`;


export const CarouselContainer = styled(Carousel)`
.slick-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

width: 100%;
`;

export const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;