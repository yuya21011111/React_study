import { useState } from "react";

const Example = () => {
  const [count, countState] = useState(0);

  return (
    <>
        <CountResult title="カウント" count={count}  />
        <CountUpdate count={count} countState={countState} /> 
    </>
  );
};
const CountResult = ({ title, count }) => <h3>{ title }: { count }</h3>

const CountUpdate = ({ countState,count }) => {
  const countUp = () => {
    countState( prev => prev + 1)
    // countState(count + 1);
  };
  const countDown = () => {
    countState( prev => prev - 1)
    // countState(count - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

