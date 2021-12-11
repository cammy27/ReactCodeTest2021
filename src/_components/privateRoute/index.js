/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../_services/authenticationServices";

export const PrivateRoute = ({ component, ...rest }) => {
  const routeComponent = (props) =>
    isAuthenticated() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};
