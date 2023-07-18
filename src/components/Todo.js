import {useState} from "react"

const Todo = () => {

    let [todo, setTodo] = useState("")
    let [todoList, setTodoList] = useState([])

    return(
        <div className="content">
            <h3>To-Do list</h3>
            <div>
                <input type="text" onChange={(event) => setTodo(event.target.value)}></input>
                <button onClick={() => setTodoList([...todoList, todo])}>Add Todo</button>
            </div>
            <div className="list-container">
            {
                todoList.length > 0 &&
                todoList.map((ele) => (
                    <div className="todo-item">
                        <span>{ele}</span>
                        <button onClick={() => {
                            setTodoList(todoList.filter((i) => (
                                i !== ele
                            )))
                        }}>Delete</button>
                    </div>
                ))
            }
            </div>
        </div>
    )
}
export default Todo