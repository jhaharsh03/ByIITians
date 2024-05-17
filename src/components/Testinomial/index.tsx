import { Row, Col, Carousel } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, ContentWrapper, ImageWrapper, Paragraph, CarouselContainer, CarouselItem } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const Testimonial = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
                <h6>{t(title)}</h6>
                {/* Top Half: Carousel */}
                <CarouselContainer autoplay autoplaySpeed={2000} slidesToShow={1} className="custom-carousel">
                  <CarouselItem>
                    <ImageWrapper>
                      <img src="/img/Image/one.jpeg" className="img" alt="Carousel Image 1" />
                      <Paragraph>""The tutors here are very good. Teachers are so good.""</Paragraph>
                    </ImageWrapper>
                  </CarouselItem>
                  <CarouselItem>
                    <ImageWrapper>
                      <img src="/img/Image/three.jpeg" className="img" alt="Carousel Image 3" />
                      <Paragraph>""The tutors here are very good. Teachers are so good.""</Paragraph>
                    </ImageWrapper>
                    
                  </CarouselItem>
                  {/* <CarouselItem>
                    <ImageWrapper>
                      <img src="/img/Image/two.jpeg" className="img" alt="Carousel Image 2" />
                      <Paragraph>Mast hai bhai yaha lena chahiye. Selection kafi sahi coaching center hai. Samajh rahe ho.</Paragraph>
                    </ImageWrapper>
                   
                  </CarouselItem> */}
                </CarouselContainer>
                {/* Bottom Half: Content */}
                {button && (
                  <Button name="submit" onClick={() => scrollTo("mission")}>
                    {t(button)}
                  </Button>
                )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(Testimonial);
