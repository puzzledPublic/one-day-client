import React from "react";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { useAuthenticated } from "../../lib/hook/useAuthenticated";

function AuthRoute({ ...rest }: RouteProps) {
  const [isLogined] = useAuthenticated();
  return (
    <>
      {isLogined ? (
        <Route {...rest} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: rest.location } }} />
      )}
    </>
  );
}

export default AuthRoute;
