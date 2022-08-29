import { createContext, CSSProperties, ReactElement } from "react";
import useProduct from "../hooks/useProduct.";
import { Product, ProductContextProps } from "../interfaces/products.interfaces";
import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: ({product, count}: {product: Product, count: number}) => void;
  value?: number;
}
export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps
);

const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value
}: Props & { children?: ReactElement | ReactElement[] }) => {
  const { counter, increaseBy } = useProduct((count: number) => onChange && onChange({product, count}), value);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};
