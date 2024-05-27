import { Row, Col} from "antd";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, ContentWrapper, CarouselContainer, CarouselItem } from "./styles";

import TestimonialCard from "../Testimony Card";

interface MiddleBlockProps {
  title: string;
}

const Testimonial = ({ title}: MiddleBlockProps) => {

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          
              <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
                <h6>{(title)}</h6>
                <CarouselContainer autoplay autoplaySpeed={2000} slidesToShow={1} className="custom-carousel">
                <CarouselItem>
                  <TestimonialCard
                  name="Jane Smith"
                  className="Class 12"
                  message="The teachers are great and the environment is very supportive."
                  imageUrl="/img/testimonials/1.jpg"/>
                  </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                  name="Jane Smith"
                  className="Class 12"
                  message="The teachers are great and the environment is very supportive."
                  imageUrl="/img/testimonials/2.jpg"/>
                  </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                  name="Jane Smith"
                  className="Class 12"
                  message="The teachers are great and the environment is very supportive."
                  imageUrl="https://via.placeholder.com/150"/>
                  </CarouselItem>
                </CarouselContainer>
               
            </Col>
                  </ContentWrapper>
         
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default (Testimonial);










