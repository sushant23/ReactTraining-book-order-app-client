import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getOrders, createOrder } from "../../redux/actions";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    const { orders, history } = this.props;
    return (
      <div>
        <NavLink to="/order/create">Create Order</NavLink>
        <ListGroup>
          {orders.map(({ _id, buyerName, buyerAddress}) => (
            <ListGroupItem
              tag="button"
              action
              key={_id}
              onClick={() => {
                history.push(`/order/${_id}`);
              }}
            >
              {`${buyerName} - ${buyerAddress}`}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

export default connect(
  ({ order: { list } }) => {
    return {
      orders: list
    };
  },
  { getOrders, createOrder }
)(Orders);
