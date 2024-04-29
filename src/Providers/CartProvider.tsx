import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CartItem, Product } from "../types";

type ChartType = {
  items: CartItem[];
  addItem: (product: Product, size: CartItem["size"]) => void;
};

const CartContext = createContext<ChartType>({
  items: [],
  addItem: () => {},
});

const ChartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem["size"]) => {
    // If already in char increase quantity

    const newCartItem: CartItem = {
      id: "1", //Auto generate
      product,
      product_id: product.id,
      quantity: 1,
      size,
    };

    setItems([newCartItem, ...items]);
  };

  // Update quantity
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default ChartProvider;
export const useCart = () => useContext(CartContext);
