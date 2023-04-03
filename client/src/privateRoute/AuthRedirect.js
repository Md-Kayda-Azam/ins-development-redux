import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRedirect = ({ children }) => {
  const { loginState } = useSelector((state) => state.ins_auth);
  return loginState ? <Navigate to="/" /> : children;
};

export default AuthRedirect;
