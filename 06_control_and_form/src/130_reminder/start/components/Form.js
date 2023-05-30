import {useState} from "react"
const Form = ({addTodoList}) => {
    const [enteredTodo,setEnteredTodo] = useState('')
    const addTodo = (e) => {
        e.preventDefault(e);
        const inputVal = enteredTodo
        const randomNum = Math.floor(Math.random() * 100);
        const newTodo = {
            id:randomNum,
            content: inputVal
        }
        addTodoList(newTodo)
        setEnteredTodo("")
    }
    return(
    <div>
            <form onSubmit={addTodo}>
            <input type="text" value={enteredTodo} onChange={(e) =>setEnteredTodo(e.target.value) } />
            <button>追加</button>
            </form>
     </div>
    );
}

export default Form;