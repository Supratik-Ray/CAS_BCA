import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function GuestRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  if (isAuthenticated && !from) return <Navigate to="/cas_bca.sit/" replace />;

  return children;
}

export default GuestRoute;
