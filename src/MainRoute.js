import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import TopNav from "./containers/TopNav";
import { startPath } from "./constants/defaultValues";
import Books from "./pages/Books";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import BookDetail from "./pages/BookDetail";

const MainRoute = ({ match }) => {
  return (
    <div>
      <TopNav />
      <Container>
        <Switch>
          <Route
            path={`${match.url}order`}
            exact
            component={() => <div>Order</div>}
          />
          <Route
            path={`${match.url}order/create`}
            exact
            component={() => <div>Create Order</div>}
          />
          <Route
            path={`${match.url}order/:id/edit`}
            exact
            component={() => <div>Edit Order</div>}
          />
          <Route
            path={`${match.url}order/:id`}
            exact
            component={() => <div>Order Detail</div>}
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
