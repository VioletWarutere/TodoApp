import React, { useState } from "react";
import { postTodos } from "../API_calls/createTodos";

const AddTodoBar = () => {
  const [title, setTitle] = useState(``);
  const [start_date, setStartDate] = useState(``);
  const [status, setStatus] = useState(``);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const newTodo = {
        title: title,
        start_date: start_date,
        status: status,
    };
    try {
      const response = await postTodos(newTodo);
      console.log(response);
      alert("Todo added successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to add todo");
    }
  };

  return (
    <form action="POST" onSubmit={handleAddTodo}>
      <div class="row g-3 align-items-center">
        <div class="col-4 d-flex flex-row justify-content-between g-3 align-items-center">
          <label htmlFor="" className="form-label px-2">
            Start:
          </label>
          <input
            type="date"
            className="form-control my-2"
            id="start_date"
            name="start_date"
            required
            
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div class="col-4 d-flex flex-row justify-content-between g-3 align-items-center">
          <label className="col-form-label px-2">Progress: </label>
          <select
            className="form-select my-2"
            aria-label="Default select example"
            id="status"
            name="status"
            required
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option selected></option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Not started">Not Started</option>
          </select>
        </div>
      </div>
      <div className="d-flex flex-row">
        <input
          className="form-control form-control-lg col-8"
          type="text"
          placeholder="Add Todo"
          aria-label=".form-control-lg example"
          id="title"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
      </div>
    <button className=" col-4 mx-1" style={{maxWidth: 55, backgroundColor: 'transparent', border: 'none'}} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-plus-circle-fill"
            style={{color: "blue"}}
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
          </svg>
        </button>
    </form>
  );
};

export default AddTodoBar;
