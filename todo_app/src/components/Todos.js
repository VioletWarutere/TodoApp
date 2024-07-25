import React, { useState } from "react";
import Todoslist from "./Todoslist";
import NewTodoItem from "./NewTodoItem";
import EditTodoItem from "./EditTodoItem";

const Todos = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState(null);
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        {showEdit ? (
          <EditTodoItem setShowEdit={setShowEdit} id={id} />
        ) : (
          <>
            <NewTodoItem />{" "}
            <Todoslist setShowEdit={setShowEdit} setId={setId} />{" "}
          </>
        )}
      </div>
      <div className="col-2"></div>
    </div>
  );
};

export default Todos;
