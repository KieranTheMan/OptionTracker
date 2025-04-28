import React from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";

import RtlLayout from "./layouts/rtl";
import AdminLayout from "./layouts/admin";
import AuthLayout from "./layouts/auth";
const App = () => {
  const routes = useRoutes([
    { path: "auth/*", element: <AuthLayout /> },
    { path: "admin/*", element: <AdminLayout /> },
    { path: "rtl/*", element: <RtlLayout /> },
    { path: "/", element: <Navigate to="/admin" replace /> },
  ]);

  return routes;
};

export default App;
