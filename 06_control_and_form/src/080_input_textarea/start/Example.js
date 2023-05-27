import { useState } from "react";
const Example = () => {
const [val,setVal] = useState('');
const clearVal = () => setVal('');
  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
      <label htmlFor="123">ラベル</label>
      <div>
        <input 
        id="123"
        placeholder="こんにちは"
        value={val}
        onChange={(e) => setVal(e.target.value)} />
      </div>
      <div>
        <textarea id="456"
         placeholder="こんにちは"
          value={val}
           onChange={(e) => setVal(e.target.value)} />
      </div>
      <button onClick={clearVal}>クリア</button>
    </p>
  );
};

export default Example;
