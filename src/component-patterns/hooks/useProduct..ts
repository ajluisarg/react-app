import { useEffect, useState } from "react";
import { UseProductHook } from "../interfaces/products.interfaces";

const useProduct = (onChange? : (count: number) => any, count = 0): UseProductHook => {


    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
      const newValue =  Math.max(counter + value, 0);
      setCounter(newValue);
      onChange && onChange(newValue);
    };

    useEffect(() => {
      setCounter(count);
    }, [count])
    

    return {
        counter,
        increaseBy
    }

}

export default useProduct;