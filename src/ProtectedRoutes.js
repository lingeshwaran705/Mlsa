import React from "react";
import LoginForm from "./components/admin/LoginForm";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const admin = useSelector((state) => state.admin.value);

  return admin.email === "srecmlsa@gmail.com" ? <Outlet /> : <LoginForm />;
}

export default ProtectedRoutes;
