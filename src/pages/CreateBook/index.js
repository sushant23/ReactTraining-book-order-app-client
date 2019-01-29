import React from "react";
import { connect } from "react-redux";
import BookForm from "../../components/BookForm";
import { createBook as createBookAction } from "../../redux/actions";

const CreateBook = ({ createBook, history }) => (
  <BookForm
    header="Create Book "
    onSubmit={data => createBook(history, data)}
  />
);

export default connect(
  () => {},
  { createBook: createBookAction }
)(CreateBook);
