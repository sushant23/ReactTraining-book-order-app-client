import React from "react";
import { Label, Input as RSInput, FormGroup, FormFeedback } from "reactstrap";

const Select = ({
  input: { value, onChange },
  meta: { touched, error },
  label,
  options,
  ...rest
}) => (
  <FormGroup>
    <Label>{label}</Label>
    <RSInput
      value={value}
      onChange={e => onChange(e.target.value)}
      invalid={!!(touched && error)}
      {...rest}
      type="select"
    >
      <option value="" />
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </RSInput>
    {touched && error && <FormFeedback>{error}</FormFeedback>}
  </FormGroup>
);

export default Select;
