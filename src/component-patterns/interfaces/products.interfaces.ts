export interface Props {
    product: Product;
  }
  
export interface Product {
    id: string;
    title: string;
    img?: string;
  }

export interface UseProductHook {
    counter: number, increaseBy: 
    (value: any) => void
}
  
export type ProductContextProps = UseProductHook & {product: Product};