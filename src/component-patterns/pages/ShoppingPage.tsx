import { ProductCard } from "../components";
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
        <ProductCard
          product={product1}
          className="bg-dark"
          initialValues={{
            count: 4,
            maxCounter: 8,
          }}
        >
          {({reset}) => (
            <>
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-white" />
              <ProductCard.Buttons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
