import { useState } from "react";
import { UseProductHook } from "../interfaces/products.interfaces";

const useProduct = (): UseProductHook => {


    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
      setCounter((prev) => Math.max(prev + value, 0));
    };

    return {
        counter,
        increaseBy
    }

}

export default useProduct;