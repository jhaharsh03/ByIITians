import { Row, Col, Spin } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { Button } from "../../common/Button";
import Block from "../Block";
import { ContactContainer, FormGroup, ButtonContainer } from "./styles";
import { useRef, useState } from "react";
import {StyledInput} from '../../common/Input/styles'
import {Label} from '../../common/TextArea/styles'
import {Container} from '../../common/Input/styles'

import { useModal } from "../Modal/ModalContext";

const Contact = ({ title, content, id, t }: ContactProps) => {

  const { showModal } = useModal();
  const [loading, setLoading] = useState(false);

  const handleOpenModal = (modalTitle: string, modalMessage: string) => {
    setLoading(false);
    showModal(modalTitle, <div>{modalMessage}</div>);
    
  };



  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);


  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    if(
      emailRef.current &&
      nameRef.current &&
      phoneRef.current
    ){

      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const phone = phoneRef.current.value;

      if (!name || !email || !phone) {
        handleOpenModal("Error", "Please fill out all required fields.");
        return;
      }

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

        handleOpenModal("Success", "Your form has been successfully submitted!");
    
        // Handle success, if needed
      } catch (error) {
        // Handle error
        handleOpenModal("Error", "There was an error submitting your form. Please try again later.");
        console.error("Error submitting form:", error);
      } 
    }

    else{
      // handleOpenModal("Error", "Please fill out all required fields.");
      // console.log("You are in the else statement")
      setLoading(false);
    }
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

                  ref = {nameRef}
                  
                />
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

