import { useState } from "react";

const Example = () => {
    const [count,setCount] = useState(0)
    const countPlus = () => {
        setCount(count + 1)
        setCount(prevstate => prevstate + 1)
    }

    const countMinus = () => {
        setCount(count - 1)
    }
    return (
        <>
          <p>現在のカウント数:{count}</p>
          <button onClick={countPlus}>+</button>
          <button onClick={countMinus}>-</button>
        </>
    )
  
};

export default Example;
