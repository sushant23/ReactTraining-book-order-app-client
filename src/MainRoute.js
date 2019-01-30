import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import TopNav from "./containers/TopNav";
import { startPath } from "./constants/defaultValues";
import Books from "./pages/Books";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import BookDetail from "./pages/BookDetail";
import Orders from "./pages/Orders";
import CreateOrder from "./pages/CreateOrder";
import EditOrder from "./pages/EditOrder";
import OrderDetail from "./pages/OrderDetail";

const MainRoute = ({ match }) => {
  return (
    <div>
      <TopNav />
      <Container>
        <Switch>
          <Route
            path={`${match.url}order`}
            exact
            component={Orders}
          />
          <Route
            path={`${match.url}order/create`}
            exact
            component={CreateOrder}
          />
          <Route
            path={`${match.url}order/:id/edit`}
            exact
            component={EditOrder}
          />
          <Route
            path={`${match.url}order/:id`}
            exact
            component={OrderDetail}
          />
          <Route path={`${match.url}book`} exact component={Books} />
          <Route
            path={`${match.url}book/create`}
            exact
            component={CreateBook}
          />
          <Route
            path={`${match.url}book/:id/edit`}
            exact
            component={EditBook}
          />
          <Route
            path={`${match.url}book/:id`}
            exace
            component={BookDetail}
          />
          <Redirect to={startPath} />
        </Switch>
      </Container>
    </div>
  );
};

export default MainRoute;
