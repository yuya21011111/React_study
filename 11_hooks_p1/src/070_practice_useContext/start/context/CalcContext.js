import { createContext, useContext, useReducer } from "react";

const CalcContext = createContext();
const CalcDispatchContext = createContext();

export const useCalc = () => {
    return useContext(CalcContext)
}

export const useCalcDispatch = () => {
    return useContext(CalcDispatchContext)
}
const reducer = (state, { type, payload }) => {
    switch (type) {
      case "change": {
        const { name, value } = payload;
        return { ...state, [name]: value };
      }
      case "add": {
        return { ...state, result: state.a + state.b };
      }
      case "minus": {
        return { ...state, result: state.a - state.b };
      }
      case "divide": {
        return { ...state, result: state.a / state.b };
      }
      case "multiply": {
        return { ...state, result: state.a * state.b };
      }
      default:
        throw new Error("operator is invalid");
    }
  };

export const CalcProvider = ({children}) => {
    const initState = {
        a: 1,
        b: 2,
        result: 3,
      };
    const [state,dispatch] = useReducer(reducer,initState);
    return (
        <CalcContext.Provider value={state}>
            <CalcDispatchContext.Provider value={dispatch}>
            {children}
            </CalcDispatchContext.Provider>
        </CalcContext.Provider>
    )
}