import { useState } from "react";
const Example = () => {
  console.log('再起動');
const [radioVal,setRadio] = useState('Apple');
const onChanges = (e) => setRadio(e.target.value);
const RADIO_COLLECTION = ['Apple','Banana','Mango'];
  return (
  <>
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>

    {RADIO_COLLECTION.map((value) => {
      return (
        <label key={value}>
          <input key={value} type="radio" 
          value={value} 
          checked={radioVal === value}
          onChange={onChanges} />
          {value}
        </label>
      )
    })}
    {/* <label>
    <input type="radio" value='Apple' checked={radioVal === 'Apple'}
    onChange={onChanges} /> Apple
    </label>
    <label>
    <input type="radio" value='Banana' checked={radioVal === 'Banana'}
    onChange={onChanges} /> Banana
    </label>
    <label>
    <input type="radio" value='Mango' checked={radioVal === 'Mango'}
    onChange={onChanges} /> Mango
    </label> */}
    <h2>私は{radioVal}が食べたい</h2>
  </>
  );
};

export default Example;
