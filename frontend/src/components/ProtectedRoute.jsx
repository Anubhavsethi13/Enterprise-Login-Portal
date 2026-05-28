import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user"));

  // No token
  if (!token || token === "undefined" || token === "null") {
    return <Navigate to="/super-admin-login" replace />;
  }

  // Role check
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;
