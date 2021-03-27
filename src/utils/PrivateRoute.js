import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem(ACCESS_TOKEN_NAME) ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/'
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;