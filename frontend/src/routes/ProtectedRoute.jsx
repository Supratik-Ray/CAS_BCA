import { useAuth } from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { session, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) return <p> Loading</p>;
  if (session?.user) return children;

  return (
    <Navigate to="/cas_bca.sit/auth/login" replace state={{ from: location }} />
  );
}

export default ProtectedRoute;
