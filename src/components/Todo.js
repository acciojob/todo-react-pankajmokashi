import React, {useState} from "react"

const Todo = () => {

    let [todo, setTodo] = useState("")
    let [todoList, setTodoList] = useState([])

    return(
        <div className="content">
            <h3>To-Do list</h3>
            <div>
                <input type="text" onChange={(event) => setTodo(event.target.value)} value={todo}></input>
                <button onClick={() => {
                    if(todo){
                        setTodoList([...todoList, todo])
                        setTodo("")
                    }
                }}>Add Todo</button>
            </div>
            <ul className="list-container">
            {
                todoList.length > 0 &&
                todoList.map((ele) => (
                    <li className="todo-item">
                        <span>{ele}</span>
                        <button onClick={() => {
                            setTodoList(todoList.filter((i) => (
                                i !== ele
                            )))
                        }}>Delete</button>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}
export default Todo