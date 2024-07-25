//has form
import React, { useEffect, useState }from "react";
import { BASE_URL } from "../utils/backend_services";

    

const EditTodoItem = ({id}) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [start_date, setStartDate] = useState('');
 
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  useEffect(() => {
    const getTodos = async() => {
        const response = await fetch(`${BASE_URL}/todos/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
       
        setTitle(data.title);
        setStatus(data.status);
        setStartDate(formatDate(data.start_date));
    }
    getTodos();


}, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoItem = {
      title: title,
      status: status,
      start_date: start_date
    };

    console.log(todoItem);
    const editTodos = async() => {
      const response = await fetch(`${BASE_URL}/todos/${id}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(todoItem),
      });
      if(response.ok){
          const data = await response.json();
          console.log(data);
          alert("Todo updated successfully");
          
      }else{
          throw new Error(`Error fetching todos: ${response.status}`);
      }
      
  }
  editTodos();
    console.log("Form Submitted!!");
   
    //window.location.replace('/')
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Task Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Deep clean my room"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <select
        className="form-select"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
      >
        <option selected>Status</option>
        <option value="Pending">In progress</option>
        <option value="Completed">Completed</option>
        <option value="Not Started">Not started</option>
        
      </select>

      <div className="mb-3">
        <label className="form-label">Start Date</label>
        <input
          type="date"
          className="form-control"
          value={start_date}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

    

      <button type="submit" className="btn btn-primary text-center">Submit</button>
      </form>
    </div>
  );
};

export default EditTodoItem;
