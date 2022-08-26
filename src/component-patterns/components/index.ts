import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})