import { useState } from "react"; // Add useState hook
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer, PopupContainer, CloseButton } from "./styles";
import { useRef } from "react";
import {StyledInput} from '../../common/Input/styles'
import {Label} from '../../common/TextArea/styles'
import {Container} from '../../common/Input/styles'
import ModalFromMantine from '../../common/Modal/index';
import { MantineProvider } from '@mantine/core';

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  const [showPopup, setShowPopup] = useState(false);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return (
      <Zoom direction="left">
        <Span>{ErrorMessage}</Span>
      </Zoom>
    );
  };



  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  // const phoneRef = useRef<HTMLTextAreaElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);


  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if(
      emailRef.current &&
      nameRef.current &&
      phoneRef.current
    ){

      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const phone = phoneRef.current.value;

      const formData = new FormData();
      formData.append('Name', name);
      formData.append('Email', email)
      formData.append('Phone', phone);

      var keyValuePairs: string[] = [];
      for (var pair of formData.entries()) {
        keyValuePairs.push(pair[0] + "=" + pair[1]);
      }

      var formDataString = keyValuePairs.join("&");


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

        
    
        // Handle success, if needed
      } catch (error) {
        // Handle error
        console.error("Error submitting form:", error);
      } 
    }

    else{
      console.log("You are in the else statement")
    }
};



  return (
    // <MantineProvider> {/* Wrap your component tree with MantineProvider */}
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleFormSubmit}>
              <Col span={24}>
                <Label>Name</Label>
                <StyledInput
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  // value={values.name || ""}
                  ref = {nameRef}
                  
                />
                {/* <ValidationType type="name" /> */}
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
                </Container>
                {/* <ValidationType type="email" /> */}
              </Col>
              <Col span={24}>
              <Container>
              <Label>Contact Number</Label>
                <StyledInput
                  placeholder="Your Contact Number"
                  name="Phone"
                  ref = {phoneRef}
                />
                </Container>
                {/* <ValidationType type="message" /> */}
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>

              {/* <ModalFromMantine/> */}
            </FormGroup>
          </Slide>
        </Col>
      </Row>

       {/* Popup Modal */}
       {showPopup && (
        <PopupContainer>
          <div>
            <h2>Congratulations!</h2>
            <p>Your form has been submitted successfully. We will contact you soon.</p>
            <CloseButton onClick={() => setShowPopup(false)}>Close</CloseButton>
          </div>
        </PopupContainer>
      )}


    </ContactContainer>
    // </MantineProvider>
  );
};

export default withTranslation()(Contact);

