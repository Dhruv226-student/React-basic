import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo,updateTodo} from '../features/todo/todoSlice'

function Todos() {
  
const todos=  useSelector(state =>state.todos)
const dispatch=useDispatch()
    return (
    <>
     <div>Todos</div>
     {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button
            onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
            <button 
            onClick={()=>dispatch(updateTodo(todo.id))}>Update</button>
        </li>
     
     ))} 
    </>
  )
}

export default Todos
