import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Login from "./pages/login";
import { startPath as defaultStartPath } from "./constants/defaultValues";
import MainRoute from "./MainRoute";

const AuthenticatedRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const NonAuthOnlyRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: defaultStartPath, state: { from: props.location } }}
        />
      )
    }
  />
);

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <Router>
        <Switch>
          <NonAuthOnlyRoute path="/login" exact component={Login} user={user} />
          <AuthenticatedRoute
            user={user}
            component={MainRoute}
            path='/'
          />
        </Switch>
      </Router>
    );
  }
}

export default connect(({ auth }) => {
  const { user } = auth;
  return { user };
})(App);
