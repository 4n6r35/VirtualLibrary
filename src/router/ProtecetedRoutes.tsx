import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const auth = localStorage.getItem("auth");
  console.log(auth);

  return auth === "authenticated" ? <Outlet /> : <Navigate to="/" />;
}
