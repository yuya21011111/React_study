import "./Example.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { MyContextProvider } from "./context/MyContext";
const Example = () => {
  return (
    <>
    <MyContextProvider>
        <Header />
        <Main />
    </MyContextProvider>
    </>
  );
};

export default Example;
