import { useState } from "react";

const Example = () => {
  const [ toggle, setToggle ] = useState(true);
  const toggle_chack = () => {
    // setToggle(!toggle)
    setToggle(prev => !prev)
  }
  return (
    <>
    <button onClick={toggle_chack}>Toggle</button>
    {toggle ? <Count key="A" title="A" /> : <div><Count key="B" title="B" /></div> }
    {/* <Count title="A" />
    {toggle && <Count title="B" /> } */}
    </>
  )
}

const Count = ({title}) => {
  const [count, setCount] = useState(0);
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
