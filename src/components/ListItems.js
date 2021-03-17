import React from "react";

const ListItems = ({ todo, deleteTask, editTask, updateTask }) => {
  let val = todo.todo_val;
  const storeVal = (e) => {
    val = e.target.value;
  };
  return (
    <li className="list">
      {todo.is_editing ? (
        <>
          <textarea
            className="editTask"
            defaultValue={todo.todo_val}
            onChange={storeVal}
          ></textarea>
          <button
            className="saveTask"
            onClick={() => updateTask(todo.todo_id, val)}
          >
            Update
          </button>
        </>
      ) : (
        <>
          {todo.todo_val}
          <br></br>
          <button className="edit" onClick={() => editTask(todo.todo_id)}>
            Edit
          </button>
          <button className="delete" onClick={() => deleteTask(todo.todo_id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default ListItems;
