import { useReducer,useState } from "react";
const Example = () => {
  const [state, setState] = useState(0);
  const [rstate,dispatch] = useReducer((preve,{ type,step }) => {
    // if(action === '+') {
    //   console.log(1,preve)
    //   return ++preve;
    // } else {
    //   console.log(2,preve)
    //   return --preve;
    // }

    switch(type){
      case '+':
       return preve + step;
      case '-':
        return preve - step;
      default:
        throw new Error('不明なactionです！');
    }
  },0)
  // const  countUp = () => {
  //   setState(state + 1)
  // }

  const  countUp = () => {
    setState(preve => ++preve)
  }

  const  rcountUp = () => {
    dispatch({type: '+',step: 2});
   }

  const  rcountDown = () => {
   dispatch({type: '-', step: 3});
  }
  return (
    <>
    <div>
    <h3>{state}</h3>
    <button onClick={countUp}>+</button>
    </div>

    <div>
    <h3>{rstate}</h3>
    <button onClick={rcountUp}>+</button>
    <button onClick={rcountDown}>-</button>
    </div>
    </>
  );
};

export default Example;
