// React Import
import { Navigate, Outlet } from "react-router-dom";

// Contexts Import
import { useLoginContext } from "../../context/LoginContext";

function PrivateRoute() {
  const { isLogin } = useLoginContext();

  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default PrivateRoute;
