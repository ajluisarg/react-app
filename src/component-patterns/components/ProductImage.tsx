import { useContext } from "react";
import { Product } from "../interfaces/products.interfaces";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({
    img,
    title: alt,
  }: Partial<Pick<Product, "img" | "title">>) => {
  
    const {product} = useContext(ProductContext);
  
    return (
      <img
        className={styles.productImg}
        src={img || product.img || noImage}
        alt={alt || product.title || "image"}
      />
    );
  };