import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  user: [] | null;
  redirectTo: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ user, redirectTo, children }) => {
  console.log({ user });
  if (!user) {
    return <Navigate replace to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
