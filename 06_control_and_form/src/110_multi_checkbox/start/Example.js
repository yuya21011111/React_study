import { useState } from "react";

const Example = () => {
  const [sum, setSum] = useState(0);
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const toggleChecked = (e) => {
   const newFruit = fruits.map(fruit => {
    const newFruit = {... fruit};
    if(fruit.label === e.target.value){
      newFruit.checked = !fruit.checked
    }
    return newFruit;
   })
  setFruits(newFruit)

  let sumVal = 0;
  // newFruit.forEach(fruit => {
  //   if(fruit.checked){
  //     sumVal += fruit.value;
  //   }
  // });
  newFruit.filter((fruit) => fruit.checked)
  .forEach((fruit) => (sumVal = sumVal + fruit.value));
  setSum(sumVal);
}
  return (
    <div>
      {fruits.map(fruit => {
        return (
          <>
          <div key={fruit.label}>
          <input id={fruit.label} type="checkbox" 
          value={fruit.label} 
          checked={fruit.checked} 
          onChange={(e) =>toggleChecked(e) } />
          <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}</label>
          </div>
          </>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
