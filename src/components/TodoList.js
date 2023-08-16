import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { List, Box } from "@mui/material";
import { useState, useEffect } from "react";

const getTodos = () => {
  // get data from localStorage
  const data = JSON.parse(localStorage.getItem("todos"));

  // if there is no data, return an empty array
  if (!data) {
    return [];
  }

  return data;
};

export default function TodoList() {
  // pass a callback function to the useState hook
  const [todos, setTodos] = useState(getTodos);

  // runs when todos changes
  useEffect(() => {
    // save data to the local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // runs this function when the todos change

  // removes items
  const handleRemoveItem = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // toggles items completed status
  const handleToggleItem = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }; // use the spread operator
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // edits item
  const handleEditItem = (id, newTitle) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // creates a new item
  const createItem = (text) => {
    const newTodos = [
      ...todos,
      {
        id: crypto.randomUUID(),
        title: text,
        completed: false,
      },
    ];

    setTodos(newTodos);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: 2,
      }}
    >
      <List sx={{ width: "100%", maxWidth: 700 }}>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeItem={() => handleRemoveItem(todo.id)}
              toggleItem={() => handleToggleItem(todo.id)}
              editItem={handleEditItem}
            />
          );
        })}
        <TodoForm createItem={createItem} />
      </List>
    </Box>
  );
}
