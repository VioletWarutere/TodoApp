import React from "react";

const TodoBar = ({todo}) => {
  let value = `Go shopping`;
  return (
    <form action="">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <input
        className="form-control my-3"
        type="text"
        value={todo}
        aria-label="readonly input example"
        readonly
      />
    </form>
  );
};

export default TodoBar;
