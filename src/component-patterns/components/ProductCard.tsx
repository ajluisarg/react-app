import { createContext, ReactElement } from "react";
import useProduct from "../hooks/useProduct.";
import { ProductContextProps, Props } from "../interfaces/products.interfaces";
import styles from "../styles/styles.module.css";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
}: Props & { children?: ReactElement | ReactElement[] }) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
