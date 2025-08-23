// React Import
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Services Import
import { login } from "../services/api";

interface ILoginContextType {
  children: React.ReactNode;
}

interface ILoginContext {
  isLogin: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
}

export const LoginContext = createContext({} as ILoginContext);

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginProvider");
  }

  return context;
};

export function LoginProvider({ children }: ILoginContextType) {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    login(username, password).then((res) => {
      let token = res.token;
      localStorage.setItem("token", token);
      setIsLogin(true);
    });

    setIsLogin(true);

    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
  };

  return (
    <LoginContext.Provider value={{ isLogin, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
}
