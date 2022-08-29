import { useState } from "react";
import { Product } from "../interfaces/products.interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: Product & { count: number };
      }>({});
    

      const updateShoppingCart = (product: Product, count: number) => {
        setShoppingCart((prev) => ({
            ...prev,
            [product.id]: { ...product, count },
          }));
      } 
        

      

    return {
        shoppingCart,
        updateShoppingCart
    }
}