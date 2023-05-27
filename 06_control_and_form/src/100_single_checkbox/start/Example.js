import { useState} from 'react'
const Example = () => {
  const [isChecked,setchecked] = useState(true)
  const toggleChecked = (e) => {
    setchecked(prev => !prev);
  };
  return (
    <>
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>
    <label htmlFor="my-check">
      チェック：
    </label>
    <input type="checkbox"
    id="my-check"
    checked={isChecked}
    onChange={(e) => toggleChecked(e)}>
    </input>
    <div>{isChecked ? 'OK!' : 'OFF!'}</div>
    </>
  );
};

export default Example;
