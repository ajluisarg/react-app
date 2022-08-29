import { useState } from "react";
import { ProductCard } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { Product } from "../interfaces/products.interfaces";

import "../styles/custom-styles.css";

const product1 = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug2",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

export const ShoppingPage = () => {
  const { shoppingCart, updateShoppingCart } = useShoppingCart();

  const handleOnChange = ({
    product,
    count,
  }: {
    product: Product;
    count: number;
  }) => {
    updateShoppingCart(product, count);
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={handleOnChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart)
          .filter(([_key, product]) => product.count)
          .map(([key, product]) => (
            <ProductCard
              style={{ width: "100px" }}
              key={key}
              product={product}
              className="bg-dark"
              value={product.count}
              onChange={handleOnChange}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
