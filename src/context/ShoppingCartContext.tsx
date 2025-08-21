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
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCartContext must be used within a ShoppingCartProvider");
  }

  return context;
}

export function ShoppingCartProvider({ children }: IShoppingCartContextType) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
