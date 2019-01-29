import React from "react";
import { Form as FinalForm, Field } from "react-final-form";

import { Container, Col, Form, Button, Alert } from "reactstrap";
import Input from "../../final-form-components/Input";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name cannot be empty";
  }
  if (!values.author) {
    errors.author = "Author cannot be empty";
  }
  return errors;
};

const BookForm = ({ createBookError, book, onSubmit, header }) => (
  <Container>
    <h2>{header}</h2>
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      initialValues={book}
      render={({ handleSubmit }) => (
        <Form className="form" onSubmit={handleSubmit}>
          {createBookError && (
            <Alert color="danger" className="rounded">
              {createBookError}
            </Alert>
          )}
          <Col>
            <Field component={Input} name="name" label="Name" />
          </Col>
          <Col>
            <Field component={Input} name="author" label="Author"/>
          </Col>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    />
  </Container>
);

export default BookForm;
