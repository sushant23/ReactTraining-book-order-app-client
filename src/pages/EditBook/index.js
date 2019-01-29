import React, { Component } from "react";
import { connect } from "react-redux";
import BookForm from "../../components/BookForm";
import {
  updateBook as updateBookAction,
  getBook as getBookAction
} from "../../redux/actions";

class EditBook extends Component {
  componentDidMount() {
    const { match, getBook } = this.props;
    getBook(match.params.id);
  }
  render() {
    const { book, match, history, updateBook } = this.props;
    return (
      <BookForm
        header="Edit Book"
        book={book}
        onSubmit={data => updateBook(history, match.params.id, data)}
      />
    );
  }
}

export default connect(
  ({ book }) => {
    const { detail } = book;
    return {
      book: detail
    };
  },
  { updateBook: updateBookAction, getBook: getBookAction }
)(EditBook);
