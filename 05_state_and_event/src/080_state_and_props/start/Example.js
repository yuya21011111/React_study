import { useState } from "react";

const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
    <button onClick={toggleComponent}>toggle</button>
    {toggle ? <Count key="A" title="A" count={count} setCount={setCount}/>:<Count key="B" title="B" count={count2} setCount={setCount2}/>}

    {/* <Count key="A" title="A" count={count} setCount={setCount}/>
    <Count key="B" title="B" count={count2} setCount={setCount2}/> */}
    </>
  )
}
const Count = ({ title,count,setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
