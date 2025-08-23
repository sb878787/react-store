// React Import
import { Navigate, Route, Routes } from "react-router-dom";

// Pages Import
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";

// Components Import
import Layout from "./components/layout/Layout";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

// Contexts Import
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { useLoginContext } from "./context/LoginContext";

function App() {
  const { isLogin } = useLoginContext();

  return (
    <ShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />

          <Route
            path="/login"
            element={isLogin ? <Navigate to="/" /> : <Login />}
          />

          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Layout>
    </ShoppingCartProvider>
  );
}

export default App;
