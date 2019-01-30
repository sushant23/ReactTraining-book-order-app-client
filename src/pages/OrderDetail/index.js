import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getOrder as getOrderAction,
  deleteOrder as deleteOrderAction
} from "../../redux/actions";
import { Button } from "reactstrap";

class OrderDetail extends Component {
  componentDidMount() {
    const { match, getOrder } = this.props;
    getOrder(match.params.id);
  }
  render() {
    const { order, match, history, deleteOrder } = this.props;
    if (!order) return null;
    return (
      <div>
        <h2>Buyer Info</h2>
        <h3>Name: {order.buyerName}</h3>
        <h3>Email: {order.buyerEmail}</h3>
        <h3>Address: {order.buyerAddress}</h3>
        <h3>
          Book: {" "}
          <NavLink to={`/book/${order.book._id}`}>{order.book.name}</NavLink>
        </h3>
        <NavLink to={`/order/${match.params.id}/edit`}>
          <Button>Edit</Button>
        </NavLink>
        <Button
          color="danger"
          className="ml-3"
          onClick={() => deleteOrder(history, match.params.id)}
        >
          Delete
        </Button>
      </div>
    );
  }
}

export default connect(
  ({ order: { detail } }) => {
    return {
      order: detail
    };
  },
  { getOrder: getOrderAction, deleteOrder: deleteOrderAction }
)(OrderDetail);
