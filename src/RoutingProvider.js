import { createContext } from "react";
import { Route, Navigate } from "react-router-dom";

import { Redirect2Inputmask } from "./Components/Redirect2Inputmask/Redirect2Inputmask";
import RouteNames from "./Shared/RouteNames";

export const RoutingContext = createContext({});

// eslint-disable-next-line one-var
export const RoutingProvider = ({ children }) => {
  const routes = [
      <Route
        key={RouteNames.Home}
        path={RouteNames.Home}
        element={<Redirect2Inputmask />}
      />,
      <Route
        key="fallback"
        path="*"
        element={<Navigate to={RouteNames.Home} />}
      />
    ],
    asideRoutes = [<Route key="fallback" path="*" element={<></>} />];

  return (
    <RoutingContext.Provider
      value={{
        routes,
        asideRoutes
      }}>
      {children}
    </RoutingContext.Provider>
  );
};
