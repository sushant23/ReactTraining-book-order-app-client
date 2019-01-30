import React from "react";
import { Form as FinalForm, Field } from "react-final-form";

import { Container, Col, Form, Button, Alert } from "reactstrap";
import Input from "../../final-form-components/Input";
import { isValidEmail } from "../../util";
import Select from "../../final-form-components/Select";

const validate = values => {
  const errors = {};
  if (!values.buyerName) {
    errors.buyerName = "Name cannot be empty";
  }
  if (!values.buyerEmail) {
    errors.buyerEmail = "Email cannot be empty";
  } else if (!isValidEmail(values.buyerEmail)) {
    errors.buyerEmail = "Not a valid email";
  }
  if (!values.buyerAddress) {
    errors.buyerAddress= "Address cannot be empty";
  }
  if (!values.book) {
    errors.book = "Book cannot be empty";
  }
  return errors;
};

const OrderForm = ({ createOrderError, order, onSubmit, header, books }) => (
  <Container>
    <h2>{header}</h2>
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      initialValues={order}
      render={({ handleSubmit }) => (
        <Form className="form" onSubmit={handleSubmit}>
          {createOrderError && (
            <Alert color="danger" className="rounded">
              {createOrderError}
            </Alert>
          )}
          <h3>Buyer Info</h3>
          <Col>
            <Field component={Input} name="buyerName" label="Name" />
          </Col>
          <Col>
            <Field
              component={Input}
              name="buyerEmail"
              label="Email"
              type="email"
            />
          </Col>
          <Col>
            <Field component={Input} name="buyerAddress" label="Address" />
          </Col>
          <Col>
            <Field
              component={Select}
              name="book"
              label="Book"
              options={books.map(({ _id, name }) => ({
                value: _id,
                label: name
              }))}
            />
          </Col>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    />
  </Container>
);

export default OrderForm;
