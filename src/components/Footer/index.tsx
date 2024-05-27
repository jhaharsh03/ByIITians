import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

// import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language, 
  // Label,
  // LanguageSwitch,
  // LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  // const handleChange = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Reach Out to Us")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="tel:+91 7879893307">
                <Chat>{t(`+91 7879893307`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policy")}</Title>
              <Large to="/">{t("Rules and Regulations")}</Large>
              <Large to="/">{t("Refund Policy")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
            <Title>{t("Help")}</Title>
              <Large to="/">{t("Drop your Query")}</Large>
              <Large to="/">{t("Contact Directly")}</Large>
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>IIT Indore Campus</Para>
              <Para>Khandwa Road, Simrol</Para>
              <Para>India</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large to="/">{t("About")}</Large>
              <Large to="/">{t("Blog (Coming Soon)")}</Large>
              <Large to="/">{t("Careers")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              {/* <Label htmlFor="select-lang">{t("Language")}</Label>
              <Label htmlFor="select-lang">Articles will be added soon</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer> */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://api.whatsapp.com/send/?phone=%2B917879893307&text&type=phone_number&app_absent=0"
                src="whatsapp.svg"
              />
              <SocialLink
                href="https://x.com/by__iitians"
                src="twitter.svg"
              />
              <SocialLink
                href="https://youtube.com/@by_iitians?si=AcpLovTU5zVTbQ5R"
                src="youtube.svg"
              />
              <SocialLink
                href="https://www.instagram.com/by_iitians/"
                src="instagram.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
