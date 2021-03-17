import React, { useState, useRef } from "react";
import "./../styles/App.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const get_id = () => {
    let new_id = 0;
    todos.forEach((e) => {
      if (e.todo_id > new_id) {
        new_id = e.todo_id;
      }
    });
    new_id++;
    return new_id;
  };

  const insertTask = (val) => {
    if (val) {
      const temp = {
        todo_id: get_id(),
        todo_val: val,
        is_editing: false,
      };
      const newTodo = [...todos, temp];
      setTodos(newTodo);
      document.getElementById("task").value = "";
    }
  };
  const editTask = (id) => {
    const newTodo = todos.filter((e) => {
      if (e.todo_id == id) return (e.is_editing = true);
      return e;
    });
    setTodos(newTodo);
  };
  const updateTask = (id, val) => {
    if (val) {
      const newTodo = todos.map((e) => {
        if (e.todo_id == id) {
          const newObj = {
            todo_id: id,
            todo_val: val,
            is_editing: false,
          };
          return newObj;
        }
        return e;
      });
      setTodos(newTodo);
    }
  };
  const deleteTask = (id) => {
    const newTodo = todos.filter((e) => {
      return e.todo_id != id;
    });
    setTodos(newTodo);
  };

  return (
    <div id="main">
      <AddTodo insertTask={insertTask} />
      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        editTask={editTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
