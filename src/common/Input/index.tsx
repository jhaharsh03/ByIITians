import React, { forwardRef } from "react";
import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

// Forwarding the ref to the input element
const Input = forwardRef<HTMLInputElement, InputProps>(({ name, placeholder, t }, ref) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={name}
      ref={ref} 
    />
  </Container>
));

export default withTranslation()(Input);
