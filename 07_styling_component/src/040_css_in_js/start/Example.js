import { useState } from "react";
import styled from "styled-components";

console.dir(styled);
const StyledButton = styled.button`
    margin: auto;
    border-radius: 9999px;
    border: none;
    display: block;
    width: 120px;
    height: 60px;
    font-weight: bold;
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? 'Pink' : ''};

    @media (max-width: 600px) {
      border-radius: 0;
    }
`;

const OrangeButton = styled(StyledButton)`
  background-color: orange;

  :hover {
    color: red;
    opacity: 0.7;
  }

  span {
    font-size: 2em;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(true);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>ボタン</StyledButton>
      <OrangeButton isSelected={isSelected} onClick={clickHandler}><span>ボタン</span></OrangeButton>
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <div style={{ textAlign: "center" }}>
        {isSelected && "クリックされました。"}
      </div>
    </>
  );
};

export default Example;
