import React, { Component } from "react";
import { connect } from "react-redux";
import OrderForm from "../../components/OrderForm";
import {
  createOrder as createOrderAction,
  getBooks as getBooksAction
} from "../../redux/actions";

class CreateOrder extends Component {
  componentDidMount() {
    const { getBooks } = this.props;
    getBooks();
  }
  render() {
    const { createOrder, history, books } = this.props;
    return (
      <OrderForm
        header="Create Order"
        onSubmit={data => createOrder(history, data)}
        books={books}
      />
    );
  }
}
export default connect(
  ({ book }) => {
    return {
      books: book.list
    };
  },
  { createOrder: createOrderAction, getBooks: getBooksAction }
)(CreateOrder);
