import { createContext, useContext, useState } from "react";

interface ILoginContextType {
  children: React.ReactNode;
}

interface ILoginContext {
  isLogin: boolean;
  handleLogin: () => void;
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

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <LoginContext.Provider value={{ isLogin, handleLogin, handleLogout }}>
      {children}
    </LoginContext.Provider>
  );
}
