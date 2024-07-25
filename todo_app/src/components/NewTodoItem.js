//has form
import React, { useEffect, useState }from "react";
import { BASE_URL } from "../utils/backend_services";
    

const NewTodoItem = () => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [start_date, setStartDate] = useState('');
  const [descrip, setDescrip] = useState('');
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos") || "[]"));
  
  // replace with your actual base URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todoItem = {
      title: title,
      status: status,
      start_date: start_date,
      description: descrip
    };

    console.log(todoItem);

    // Update local storage
    const updatedTodos = [...todos, todoItem];
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);

    // Post to backend
    try {
      const response = await fetch(`${BASE_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todoItem),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log('Todo successfully added:', data);
        window.location.replace('/')
      } else {
        throw new Error(`Error posting todo: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }

    console.log("Form Submitted!!");
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
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <select
        className="form-select"
        onChange={(e) => setStatus(e.target.value)}
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
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Describe your task</label>
        <textarea
          className="form-control"
          rows="3"
          onChange={(e) => setDescrip(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary text-center">Submit</button>
      </form>
    </div>
  );
};

export default NewTodoItem;
