import { useEffect, useState } from "react";
import { AuthContext } from "../hooks/useAuth";

export function AuthProvider({ children }) {
  const [{ user, token, isAuthenticated }, setAuthState] = useState({
    user: null,
    token: null,
    isAuthenticated: false,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      setAuthState({ user, token, isAuthenticated: true });
    }
    setIsLoading(false);
  }, []);

  const login = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    setAuthState({ user, token, isAuthenticated: true });
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuthState({ user: null, token: null, isAuthenticated: false });
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, token, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
