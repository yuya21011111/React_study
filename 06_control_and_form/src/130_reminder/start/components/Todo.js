import { useState } from "react";
import List from "./List";
import Form from "./Form";
const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    console.log(newTodos);

    setTodos(newTodos);
  }
  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form />
    </>
  )
};


export default Todo;