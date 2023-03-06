import { createContext } from "react";
import { Route, Navigate, BrowserRouter } from "react-router-dom";

import RouteNames from "./Shared/RouteNames";

export const RoutingContext = createContext({});

// eslint-disable-next-line one-var
export const RoutingProvider = ({ children }) => {
  const routes = [
      <Route key={RouteNames.Home} path={RouteNames.Home} element={<></>} />,
      <Route
        key="fallback"
        path="*"
        element={<Navigate to={RouteNames.Home} />}
      />
    ],
    asideRoutes = [<Route key="fallback" path="*" element={<></>} />];

  return (
    <BrowserRouter>
      <RoutingContext.Provider
        value={{
          routes,
          asideRoutes
        }}>
        {children}
      </RoutingContext.Provider>
    </BrowserRouter>
  );
};
