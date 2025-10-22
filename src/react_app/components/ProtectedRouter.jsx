import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const user = localStorage.getItem("user");
  return user ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;