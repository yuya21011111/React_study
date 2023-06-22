import { useState } from "react";

const Item = ({todo, complete, updateTodo}) => {
    const [ editingContent, setEditingContent ] = useState(todo.content)
    const changeContent = (e) => {
        setEditingContent(e.target.value)
    }
    const toggleEditMode = () => {
        const newTodo = {...todo, editing: !todo.editing};
        updateTodo(newTodo);
    }
    const ConfirmContent = (e) => {
        e.preventDefault();
        const newTodo = {...todo, editing: !todo.editing,content: editingContent};
        updateTodo(newTodo);
    }
    return (
            <div key={todo.id}>
                <button onClick={() => complete(todo.id)}>完了</button>
                <form onSubmit={ConfirmContent} style={{display: 'inline'}}>
                {
                    todo.editing ? (
                        <input type="text"
                        value={editingContent}
                        onChange={changeContent} />
                    ) : (
                        <span onDoubleClick={toggleEditMode}>{todo.content}</span>
                    )
                }
                </form>
            </div>
    )

}
export default Item;