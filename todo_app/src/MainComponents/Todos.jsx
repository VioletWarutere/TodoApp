import React,{ useState,useEffect }  from 'react'
import { getTodos } from '../API_calls/getTodos'
import TodoBar from './TodoBar'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos()
        .then(data => setTodos(data.todos))
        .catch((err) => console.error(err));
    }, [ ])
    
  return todos.map((todo) => {
    return(
        <TodoBar key={todo.id} todo={todo}/>
    )
  })
}

export default Todos