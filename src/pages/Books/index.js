import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getBooks, createBook } from "../../redux/actions";

class Books extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    const { books, history } = this.props;
    return (
      <div>
        <NavLink to="/book/create">Create Book</NavLink>
        <ListGroup>
          {books.map(({ _id, name }) => (
            <ListGroupItem
              tag="button"  
              action
              key={_id}
              onClick={() => {
                history.push(`/book/${_id}`);
              }}
            >
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default connect(
  ({ book: { list } }) => {
    return {
      books: list
    };
  },
  { getBooks, createBook }
)(Books);
