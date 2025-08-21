import { createContext, useContext, useState } from "react";

interface IShoppingCartContextType {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
}

interface IShoppingCartContext {
  cartItems: ICartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCartContext must be used within a ShoppingCartProvider"
    );
  }

  return context;
};

export function ShoppingCartProvider({ children }: IShoppingCartContextType) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((prevProducts) => {
      const existingProduct = prevProducts.find((product) => product.id === id);
      if (existingProduct) {
        return prevProducts.map((product) =>
          product.id === id ? { ...product, qty: product.qty + 1 } : product
        );
      } else {
        return [...prevProducts, { id, qty: 1 }];
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((prevProducts) => {
      const existingProduct = prevProducts.find((product) => product.id === id);
      if (existingProduct && existingProduct.qty > 1) {
        return prevProducts.map((product) =>
          product.id === id ? { ...product, qty: product.qty - 1 } : product
        );
      } else {
        return prevProducts.filter((product) => product.id !== id);
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty, handleDecreaseProductQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
