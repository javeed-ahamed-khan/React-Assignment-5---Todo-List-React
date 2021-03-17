import React from "react";
import ListItems from "./ListItems";

const TodoList = ({ todos, deleteTask, editTask, updateTask }) => {
  const items = todos.map((e) => {
    return (
      <ListItems
        key={e.todo_id}
        todo={e}
        deleteTask={deleteTask}
        editTask={editTask}
        updateTask={updateTask}
      />
    );
  });
  return <ul>{items}</ul>;
};

export default TodoList;
