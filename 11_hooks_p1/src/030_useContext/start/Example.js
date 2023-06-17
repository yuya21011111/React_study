import Child from "./components/Child";
import { createContext } from 'react';
export const MyContext = createContext('hello React!!!');
const Example = () => {
  const value = 'hello'
  return <Child />;
};

export default Example;
