import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Provider } from 'react-redux';
import "./App.css";
import Login from "./pages/login";
import { startPath as defaultStartPath } from "./constants/defaultValues";
import MainRoute from "./MainRoute";
import { configureStore } from "./redux/store";

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
      <Provider store={configureStore()}>
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
      </Provider>
    );
  }
}

export default App;
