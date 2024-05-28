import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, ContentWrapper, CarouselContainer, CarouselItem } from "./styles";
import TestimonialCard from "../Testimony Card";

interface MiddleBlockProps {
  title: string;
}

const Testimonial = ({ title }: MiddleBlockProps) => {

  const carouselSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768, // screen width below 768px
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <CarouselContainer {...carouselSettings} className="custom-carousel">
                <CarouselItem>
                  <TestimonialCard
                    name="Kavya"
                    className="A2 Physics"
                    message="I used to struggle in Physics a lot but when I joined BI, they made it the easiest and most interesting subject for me. Special thanks to Mr Harshit who was my personal mentor during my journey"
                    imageUrl="/img/testimonials/1.jpg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                    name="Sehyaan"
                    className="Class 8 CBSE"
                    message="The teachers are great and they make sure that your concept is crystal clear. I have been taking classes at BI from the past 5 months and the teachers I got here are far better than any teacher I ever got."
                    imageUrl="/img/testimonials/2.jpg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                    name="Imogen"
                    className="British Curriculum"
                    message="At first, I only took Maths at BI, but I was blown away by how great the teachers were. They inspired me to dive into other science subjects. Their guidance surpassed any online resources, truly helping me excel academically."
                    imageUrl="/img/testimonials/3.png"
                  />
                </CarouselItem>
              </CarouselContainer>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default Testimonial;
