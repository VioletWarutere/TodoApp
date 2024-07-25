import React from 'react'
import { deleteTodos } from '../API_calls/deleteTodos'


const DeleteTodoItem = ({id}) => {
   
    const handleDelete = async () => {
      await deleteTodos(id)
      
      
      // refresh the list of todos
    }

    handleDelete();
  return (
   <>
   
   </>
  )
}

export default DeleteTodoItem