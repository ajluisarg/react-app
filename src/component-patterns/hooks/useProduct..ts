import { useEffect, useState } from "react";
import { InitialValues, UseProductHook } from "../interfaces/products.interfaces";

const useProduct = (onChange? : (count: number) => any, count?: number, initialValues?: InitialValues): UseProductHook => {


    const [counter, setCounter] = useState(initialValues?.count || 0);
    
  
    const increaseBy = (value: number) => {
      const newValue =  initialValues?.maxCounter ? Math.min(Math.max(counter + value, 0), initialValues.maxCounter) :Math.max(counter + value, 0);
      setCounter(newValue);
      onChange && onChange(newValue);
    };


    const reset = () => {
      setCounter(initialValues?.count || count || 0);
    }

    useEffect(() => {
      count !== undefined && setCounter(count);
    }, [count])
    

    return {
        counter,
        increaseBy,
        isMaxCountReached: counter === initialValues?.maxCounter,
        reset
    }

}

export default useProduct;