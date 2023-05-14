import { useState } from "react";
const Example = () => {
  let [val1,setval1] =useState(0)
  let [val2,setval2] =useState(10)
  let [val3,setval3] =useState(100)
  const start_A = () => {
    setval1(val1 + 1)
  }

  const start_B = () => {
    setval2(val2 + 1)
  }

  const start_C = () => {
    setval3(val3 + 1)
  }
  return (
    <>
      <div>ボタンAを{val1}回押しました!</div>
      <br />
      <button onClick={start_A}>ボタンA</button>
      <br />

      <div>ボタンBを{val2}回押しました!</div>
      <br />
      <button onClick={start_B}>ボタンB</button>
      <br />

      <div>ボタンCを{val3}回押しました!</div>
      <br />
      <button onClick={start_C}>ボタンC</button>
      <br />
    </>
  )
};

export default Example;
