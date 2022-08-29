import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({className}: {className?: string}) => {

    const { counter, increaseBy, maxCounter } = useContext(ProductContext);

    const isMaxCountReached = useCallback(
      () => counter === maxCounter,
      [counter, maxCounter],
    )
    
    console.log('render');
    
  
    return (
      <div className={`${styles.buttonsContainer} ${className}`}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
  
        <button className={`${styles.buttonAdd} ${ isMaxCountReached() && styles.disabled}`} onClick={() => increaseBy(1)}>
          {" "}
          +{" "}
        </button>
      </div>
    );
  };