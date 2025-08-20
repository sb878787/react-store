import { createContext, useState } from "react";

interface IShoppingCartContextType {
  children?: React.ReactNode;
}

interface IShoppingCartContext {
  cartItems: [];
}

export const ShoppingCartContext = createContext<IShoppingCartContext>({
  cartItems: [],
});

export function ShoppingCartProvider({ children }: IShoppingCartContextType) {
  const [cartItems, setCartItems] = useState<[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
