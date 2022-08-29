  export interface Product {
    id: string;
    title: string;
    img?: string;
  }

export interface UseProductHook {
    counter: number,
    isMaxCountReached: boolean,
    reset: () => void;
    increaseBy: (value: any) => void
}
  
export type ProductContextProps = Pick<UseProductHook, 'counter' | 'increaseBy'> & {product: Product} & {maxCounter?: number};


export interface InitialValues {
  count?: number;
  maxCounter?: number
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}