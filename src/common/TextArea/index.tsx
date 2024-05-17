import React, { forwardRef } from "react";
import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

// Forwarding the ref to the textarea element
const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(({ name, placeholder, t }, ref) => (
  <StyledContainer>
    <Label htmlFor={name}>{t(name)}</Label>
    {/* Forwarding the ref to the textarea element */}
    <StyledTextArea
      placeholder={t(placeholder)}
      id={name}
      name={name}
      // onChange={onChange}
      ref={ref} // Ref assigned to the textarea element
    />
  </StyledContainer>
));

export default withTranslation()(TextArea);
