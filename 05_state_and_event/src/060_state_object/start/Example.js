import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person,setperson] = useState(personObj);
  const changeName = (e) => {
    setperson({name: e.target.value,age:person.age})
  }
  const changeAge = (e) => {
    setperson({name: person.name,age: e.target.value})
  }

  const reset = () => {
    setperson({name: "Tom", age: 18})
  }

  return (
    <>
    <h3>Name:{person.name}</h3>
    <h3>Name:{person.age}</h3>
    <input type="text" onChange={changeName} value={person.name}/>
    <input type="number" onChange={changeAge} value={person.age}/><br />
    <button onClick={reset}>リセット</button>
    </>
  )
};

export default Example;
