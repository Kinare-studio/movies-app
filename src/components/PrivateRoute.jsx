import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
