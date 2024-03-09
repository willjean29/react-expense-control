import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { User } from "../../context/AuthContext";

interface ProtectedRouteProps {
  user: User | undefined;
  redirectTo: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, redirectTo, children }) => {
  if (user === undefined) {
    return <Navigate replace to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
