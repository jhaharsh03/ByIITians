import { Row, Col, Spin } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { Button } from "../../common/Button";
import Block from "../Block";
import { ContactContainer, FormGroup, ButtonContainer } from "./styles";
import { useRef, useState } from "react";
import { StyledInput } from '../../common/Input/styles';
import { Label } from '../../common/TextArea/styles';
import { Container } from '../../common/Input/styles';
import { useModal } from "../Modal/ModalContext";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import styled from "styled-components";
import './styles.css'


const Contact = ({ title, content, id, t }: ContactProps) => {

  const inputClass = styled.input`
    border: 0;
    background: red
    transition: all 0.3s ease-in-out;  
    outline: none;
    width: 100%;  
    padding: 1rem 1.25rem;

    &:focus {
        background: none;
        box-shadow: #2e186a 0px 0px 0px 1px;
    }
`;

  const { showModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const handleOpenModal = (modalTitle: string, modalMessage: string) => {
    setLoading(false);
    showModal(modalTitle, <div>{modalMessage}</div>);
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if (emailRef.current && nameRef.current && phoneRef.current) {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const phone = phoneRef.current.value;

      const newErrors = { name: '', email: '', phone: '' };
      if (!name) newErrors.name = "Name is required.";
      if (!validateEmail(email)) newErrors.email = "Invalid email address.";
      if (!validatePhone(phone)) newErrors.phone = "Invalid phone number.";

      if (!email) newErrors.email = "Email is required.";
      if (!phone) newErrors.phone = "Phone is required.";

      

      if (newErrors.name || newErrors.email || newErrors.phone) {
        setErrors(newErrors);
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append('Name', name);
      formData.append('Email', email);
      formData.append('Phone', phone);

      const keyValuePairs: string[] = [];
      for (const pair of formData.entries()) {
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
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";

        handleOpenModal("Success", "Your form has been successfully submitted!");

      } catch (error) {
        handleOpenModal("Error", "There was an error submitting your form. Please try again later.");
        console.error("Error submitting form:", error);
      }
    }

    setLoading(false);
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
                    ref={nameRef}
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
                      ref={emailRef}
                    />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                  </Container>
                </Col>
                <Col span={24}>
                  <Container>
                    <Label>Contact Number</Label>
                    <StyledInput
                      placeholder="Enter 10 Digit Contact Number"
                      name="Phone"
                      ref={phoneRef}
                    />
                    {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                  </Container>
                </Col>
                <Col span={24}>
                  {/* <Container> */}
                    <Label>Contact Number</Label>
                    <PhoneInput
                      country={'us'}
                      placeholder="Enter your contact number"
                      containerClass="containerClass"
                      inputClass="inputClass"
                      dropdownClass="dropdownClass"
                      
                      
                    />
                    {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                  {/* </Container> */}
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
