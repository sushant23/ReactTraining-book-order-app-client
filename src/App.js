import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
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
          <AuthenticatedRoute
            user={user}
            component={MainRoute}
            path={defaultStartPath}
          />
          <NonAuthOnlyRoute path="/login" component={Login} user={user} />
          <Redirect to={defaultStartPath} />
        </Switch>
      </Router>
    );
  }
}

export default App;
