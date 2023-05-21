import { useState } from "react";
const Example = () => {
  const inputFact = () => ({
    key: Math.floor(Math.random() * 1e3),
    value: <input />,
  });
  const [inputs, setInput] = useState([inputFact(),inputFact(),inputFact()]);

  const unshiftInput = () => {
    setInput([...inputs,inputFact()])
    // setInput((prev) => [inputFact(), ...prev])
    setInput([inputFact(),...inputs])
  };
  return (
    <>
    <p style={{ textAlign: "center" }}>
      <br />
      <button onClick={unshiftInput}>先頭に追加</button>
    </p>
    <ul>
       {inputs.map((input) => <li key={input.key}>{input.key}:{input.value}</li>)}
    </ul>
    </>
  );
};

export default Example;
