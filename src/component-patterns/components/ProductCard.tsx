import { createContext, ReactElement } from "react";
import useProduct from "../hooks/useProduct.";
import { Product, ProductContextProps } from "../interfaces/products.interfaces";
import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  className?: string;
}
export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className
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
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
