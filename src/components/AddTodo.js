import React from "react";

const AddTodo = ({ insertTask }) => {
  let val = "";
  const storeVal = (e) => {
    val = e.target.value;
  };
  return (
    <div>
      <input id="task" onChange={storeVal}></input>
      <button id="btn" onClick={() => insertTask(val)}>
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
