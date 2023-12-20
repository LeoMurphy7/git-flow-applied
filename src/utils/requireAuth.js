import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router";
import { LoginRoute } from "../routes";

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to={LoginRoute} state={{ path: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
