import { Row, Col, Spin } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { Button } from "../../common/Button";
import Block from "../Block";
import { ContactContainer, FormGroup, ButtonContainer } from "./styles";
import { useState } from "react";
import { StyledInput } from '../../common/Input/styles';
import { Label } from '../../common/TextArea/styles';
import { Container } from '../../common/Input/styles';
import { useModal } from "../Modal/ModalContext";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './styles.css';

const Contact = ({ title, content, id, t }: ContactProps) => {


  const { showModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleOpenModal = (modalTitle: string, modalMessage: string) => {
    setLoading(false);
    showModal(modalTitle, <div>{modalMessage}</div>);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const { name, email, phone } = formData;

    const newErrors = { name: '', email: '', phone: '' };
    if (!name) newErrors.name = "Name is required.";
    if (!validateEmail(email)) newErrors.email = "Invalid email address.";


    if (!email) newErrors.email = "Email is required.";
    if (!phone) newErrors.phone = "Phone is required.";

    if (newErrors.name || newErrors.email || newErrors.phone) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('Name', name);
    formDataToSend.append('Email', email);
    formDataToSend.append('Phone', phone);

    const keyValuePairs: string[] = [];
    for (const pair of formDataToSend.entries()) {
      keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    const formDataString = keyValuePairs.join("&");

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyh-oryktyEjA0FS9azMLUbkNAncHCrkgDgfiCqT-I_PUIWy3oTO2NQljluXB3IBwgAXw/exec", {
        redirect: "follow",
        method: "POST",
        body: formDataString,
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      // Clear form fields
      setFormData({ name: '', email: '', phone: '' });
      handleOpenModal("Thank You!", "Your response has been received. We will reach out to you within the next 24 hours.");


    } catch (error) {
      handleOpenModal("Error", "There was an error submitting your form. Please try again later.");
      console.error("Error submitting form:", error);
    }

    setLoading(false);
    setErrors(newErrors);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <Spin spinning={loading}>
              <FormGroup autoComplete="off" onSubmit={handleFormSubmit}>
                <Col span={24}>
                  <Label>Name</Label>
                  <StyledInput
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                </Col>
                <Col span={24}>
                  <Container>
                    <Label>Email</Label>
                    <StyledInput
                      type="text"
                      name="Email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                  </Container>
                </Col>
                <Col span={24}>
                  <Label>Contact Number</Label>
                  <PhoneInput
                    country={'ae'}
                    placeholder="Enter your contact number"
                    containerClass="containerClass"
                    inputClass="inputClass"
                    dropdownClass="dropdownClass"
                    value={formData.phone}
                    onChange={(value) => handleInputChange('phone', value)}
                  />
                  {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                </Col>
                <ButtonContainer>
                  <Button name="submit">{t("Submit")}</Button>
                </ButtonContainer>
              </FormGroup>
            </Spin>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
