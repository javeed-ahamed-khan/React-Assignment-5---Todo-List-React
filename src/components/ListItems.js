import React from "react";

const ListItems = ({ todo, deleteTask, editTask, updateTask }) => {
  let val = todo.todo_val;
  const storeVal = (e) => {
    val = e.target.value;
  };
  return (
    <li>
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
          <span className="list">{todo.todo_val}</span>
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
