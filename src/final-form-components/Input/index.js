import React from "react";
import { Label, Input as RSInput, FormGroup, FormFeedback } from "reactstrap";

const Input = ({
  input: { value, onChange },
  meta: { touched, error },
  label,
  ...rest
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <RSInput
      value={value}
      onChange={e => onChange(e.target.value)}
      invalid={!!(touched && error)}
      {...rest}
    />
    {touched && error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);

export default Input;
