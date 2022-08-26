import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({className}: {className?: string}) => {
    const {product: {title}} = useContext(ProductContext);
  
    return <span className={`${styles.productDescription} ${className}`}>{title}</span>;
  };