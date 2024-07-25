//has table
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/backend_services";
import { deleteTodos } from "../API_calls/deleteTodos";

const Todoslist = ({ setShowEdit, setId }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(`${BASE_URL}/todos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setTodos(data.todos);
    };
    getTodos();
  }, []);

  return (
    <div>
      <table className="table table-striped table-responsive">
        <thead>
          <th>ID</th>
          <th>Todo</th>
          <th>Status</th>
          <th>Start Date</th>
          <th>Description</th>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={todo._id}>
                <td>{index + 1}</td>
                <td>{todo.title}</td>
                <td>{todo.status}</td>
                <td>{todo.start_date}</td>

                <td>
                  <a
                    href="#"
                    className="btn btn-info btn-sm"
                    onClick={() => deleteTodos(todo._id)}
                  >
                    {" "}
                    <i class="bi bi-check-circle-fill"></i>
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      setShowEdit(true);
                      setId(todo._id);
                    }}
                  >
                    <i class="bi bi-pen-fill"></i>
                  </a>
                </td>
              </tr>
            );
          })}
          {/*
                  <tr>
            <td>1</td>
            <td>Go shopping</td>
            <td>Pending</td>
            <td>12/10/2024</td>
            <td>Remember the milk</td>
            icons 
            <td>
              <i class="bi bi-check-circle-fill"></i>
            </td>
            <td>
              <i class="bi bi-pen-fill"></i>
            </td>
            <td>
              <i class="bi bi-trash3-fill"></i>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Todoslist;
