"use client";
import styles from "./page.module.css";
import { useState } from "react";
import ToDoItem from "./components/TodoItem";
import InputText from "./components/InputText";

interface Todo {
  id: string;
  label: string;
  checked: boolean;
}

const initialData: Todo[] = [
  { id: "1", label: "Buy groceries", checked: false },
  { id: "2", label: "Reboot computer", checked: false },
  { id: "3", label: "Ace CoderPad interview", checked: true },
];

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(initialData);

  const onAddTodo = (label: string) => {
    setTodos([{ id: String(new Date()), label, checked: false }, ...todos]);
  };

  const onRemoveHandler = (id: string): void => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const onCheckHandler = (id: string) => {
    setTodos(
      todos.map((t) => {
        return t.id === id ? { ...t, checked: !t.checked } : t;
      })
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>TO-Do List</h2>
      </div>
      <div className={styles.todolist}>
        <InputText onAddTodo={onAddTodo} />
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            label={todo.label}
            checked={todo.checked}
            onCheckHandler={onCheckHandler}
            onRemoveHandler={onRemoveHandler}
          />
        ))}
      </div>
    </div>
  );
}
