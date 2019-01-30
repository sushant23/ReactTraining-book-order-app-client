import React, { Component } from "react";
import { connect } from "react-redux";
import OrderForm from "../../components/OrderForm";
import {
  updateOrder as updateOrderAction,
  getOrder as getOrderAction,
  getBooks as getBooksAction
} from "../../redux/actions";

class EditOrder extends Component {
  componentDidMount() {
    const { match, getOrder, getBooks } = this.props;
    getOrder(match.params.id);
    getBooks();
  }
  render() {
    const { order, match, history, updateOrder, books } = this.props;
    if (!order) return null;
    return (
      <OrderForm
        books={books}
        header="Edit Order"
        order={{ ...order, book: order.book._id }}
        onSubmit={data => updateOrder(history, match.params.id, data)}
      />
    );
  }
}

export default connect(
  ({ order, book }) => {
    const { detail } = order;
    return {
      order: detail,
      books: book.list
    };
  },
  {
    updateOrder: updateOrderAction,
    getOrder: getOrderAction,
    getBooks: getBooksAction
  }
)(EditOrder);
