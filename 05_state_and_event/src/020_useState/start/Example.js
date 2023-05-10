import { useState } from "react"
const Example = () => {
  // let ValArray = useState('')
  let [val, setVal] = useState(0)
  console.log(val)
  return (
    <>
      <input type="text"
      onChange={(e) => {
        // const setFn = ValArray[1];
        setVal(e.target.value)
      }} /> = {val}
    </>
  );
};

export default Example;
