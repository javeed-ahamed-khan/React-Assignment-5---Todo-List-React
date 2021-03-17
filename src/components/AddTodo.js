import React from "react";

const AddTodo = ({ insertTask }) => {
  let val = "";
  const storeVal = (e) => {
    val = e.target.value;
  };
  return (
    <div>
      <textarea id="task" onChange={storeVal}></textarea>
      <button id="btn" onClick={() => insertTask(val)}>
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
