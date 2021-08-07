import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";
import { useSelector } from "react-redux";

// routes config
import routes from "../routes";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const renderRoute = (route) => {
    return (
      route.component && (
        <Route
          key={route.id}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => (
            <CFade>
              <route.component {...props} />
            </CFade>
          )}
        />
      )
    );
  };

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.commonRoutes.map(renderRoute)}
            {isLoggedIn && routes.authenticatedRoutes.map(renderRoute)}
            {!isLoggedIn && routes.unauthenticatedRoutes.map(renderRoute)}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
