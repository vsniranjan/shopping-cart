import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

const CartContext = createContext(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
