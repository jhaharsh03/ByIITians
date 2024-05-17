import React, { forwardRef } from "react";
import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

// Forwarding the ref to the input element
const Input = forwardRef<HTMLInputElement, InputProps>(({ name, placeholder, t }, ref) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    {/* Forwarding the ref to the input element */}
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={name}
      // onChange={onChange}
      ref={ref} // Ref assigned to the input element
    />
  </Container>
));

export default withTranslation()(Input);
// export default Input;
