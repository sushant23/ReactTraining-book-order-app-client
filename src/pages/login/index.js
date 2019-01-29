import React from "react";
import { Form as FinalForm, Field } from "react-final-form";

import { Container, Col, Form, Button } from "reactstrap";
import { connect } from "react-redux";
import "./Login.css";
import Input from "../../final-form-components/Input";
import { isValidEmail } from "../../util";
import {login as loginAction} from '../../redux/actions';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email cannot be empty";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Invalid email";
  }
  if (!values.password) {
    errors.password = "Password cannot be empty";
  }
  return errors;
};

const Login = ({ login }) => (
  <Container className="login">
    <h2>Sign In</h2>
    <FinalForm
      onSubmit={login}
      validate={validate}
      render={({ handleSubmit }) => (
        <Form className="form" onSubmit={handleSubmit}>
          <Col>
            <Field component={Input} name="email" type="email" />
          </Col>
          <Col>
            <Field component={Input} name="password" type="password" />
          </Col>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    />
  </Container>
);

export default connect(
  null,
  { login: loginAction }
)(Login);
