import { useState } from "react";
const Example = () => {
  const [selected,setSelected] = useState('Banana');
  const OPTIONS = ['Apple','Banana','Mango'];
  return (
    <>
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>
    <select value={selected}
    onChange={(e) => setSelected(e.target.value)}>
      {/* <option value='Apple'>Apple</option>
      <option value='Banana'>Banana</option>
      <option value='Mango'>Mango</option> */}
      {OPTIONS.map(option => <option key={option} value={option}>{option}</option> )}
    </select>
    <div>選択された果物は：{selected}</div>
    </>

  );
};

export default Example;
