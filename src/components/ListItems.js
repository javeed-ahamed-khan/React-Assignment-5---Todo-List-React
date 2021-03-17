import React from "react";

const ListItems = ({ todo, deleteTask, editTask, updateTask }) => {
  let val = todo.todo_val;
  const storeVal = (e) => {
    val = e.target.value;
  };
  return (
    <div>
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
            save
          </button>
        </>
      ) : (
        <>
          <p className="list">{todo.todo_val}</p>
          <span>
            <button className="edit" onClick={() => editTask(todo.todo_id)}>
              edit
            </button>
          </span>
          <span>
            <button className="delete" onClick={() => deleteTask(todo.todo_id)}>
              delete
            </button>
          </span>
        </>
      )}
    </div>
  );
};

export default ListItems;
