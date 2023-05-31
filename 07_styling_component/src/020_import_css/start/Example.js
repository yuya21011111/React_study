import { useState } from "react";
import SuButton3 from "./components/SubButton3";
import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);
  const clickHandler2 = () => setIsSelected2((prev) => !prev);


  return (
    <>
      <button className={isSelected ? "btn selected" : "btn"} onClick={clickHandler}>
        ボタン
      </button>
      <button className={isSelected2 ? "btn selected" : "btn"} onClick={clickHandler2}>
        サブボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
      <div style={{ textAlign: "center" }}>
        {isSelected2 && "クリックされました。"}
      </div>
      <SuButton3 />
    </>
  );
};

export default Example;
