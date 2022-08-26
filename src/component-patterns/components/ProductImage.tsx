import { useContext } from "react";
import { Product } from "../interfaces/products.interfaces";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({
    img,
    title: alt,
    className
  }: Partial<Pick<Product, "img" | "title">> & {className?: string}) => {
  
    const {product} = useContext(ProductContext);
  
    return (
      <img
        className={`${styles.productImg} ${className}`}
        src={img || product.img || noImage}
        alt={alt || product.title || "image"}
      />
    );
  };