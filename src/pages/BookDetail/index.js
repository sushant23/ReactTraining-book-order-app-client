import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getBook as getBookAction,
  deleteBook as deleteBookAction
} from "../../redux/actions";
import { Button } from "reactstrap";

class BookDetail extends Component {
  componentDidMount() {
    const { match, getBook } = this.props;
    getBook(match.params.id);
  }
  render() {
    const { book, match, history, deleteBook } = this.props;
    if (!book) return null;
    return (
      <div>
        <h1>{book.name}</h1>
        <h3>Author: {book.author}</h3>
        <NavLink to={`/book/${match.params.id}/edit`}>
          <Button>Edit</Button>
        </NavLink>
        <Button
          color="danger"
          className="ml-3"
          onClick={() => deleteBook(history, match.params.id)}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default connect(
  ({ book: { detail } }) => {
    return {
      book: detail
    };
  },
  { getBook: getBookAction, deleteBook: deleteBookAction }
)(BookDetail);
