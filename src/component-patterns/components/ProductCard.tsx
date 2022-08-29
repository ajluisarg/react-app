import { createContext, CSSProperties } from "react";
import useProduct from "../hooks/useProduct.";
import { InitialValues, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/products.interfaces";
import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: ({product, count}: {product: Product, count: number}) => void;
  value?: number;
  initialValues?: InitialValues;
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
  value,
  initialValues
}: Props & { children: (args: ProductCardHandlers) => JSX.Element }) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProduct((count: number) => onChange && onChange({product, count}), value, initialValues);

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCounter: initialValues?.maxCounter
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children(
          {
            count: counter,
            isMaxCountReached,
            product,
            increaseBy,
            reset
          }
        )}
      </div>
    </Provider>
  );
};
