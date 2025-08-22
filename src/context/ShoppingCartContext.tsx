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
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
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

  const handleRemoveProduct = (id: number) => {
    setCartItems((prevProducts) => {
      return prevProducts.filter((product) => product.id !== id);
    });
  };

  const getProductQty = (id: number) => {
    const existingProduct = cartItems.find((product) => product.id === id);

    return existingProduct ? existingProduct.qty : 0;
  };

  const cartQty = cartItems.reduce((totalQty, item) => item.qty + totalQty, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
