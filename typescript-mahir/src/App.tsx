// src/App.tsx
import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { Todo } from "./interface";

function App() {
  // 1. Mengambil data dari localStorage saat komponen pertama kali dimuat
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos"); // Ambil string dari localStorage
    if (savedTodos) {
      try {
        // Ubah string JSON kembali jadi array objek Todo
        return JSON.parse(savedTodos) as Todo[]; // Type assertion
      } catch (e) {
        console.error("Gagal mem-parse todos dari localStorage:", e);
        return []; // Kembalikan array kosong jika parsing gagal
      }
    }
    return []; // Default array kosong jika tidak ada data tersimpan
  });

  // 2. Menggunakan useEffect untuk MENYIMPAN 'todos' ke localStorage
  //    SETIAP KALI state 'todos' berubah.
  useEffect(() => {
    // localStorage hanya bisa menyimpan string,
    // jadi kita ubah array 'todos' jadi string JSON.
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Todos disimpan ke localStorage:", todos);
  }, [todos]); // Array dependensi [todos] bikin efek ini jalan tiap kali 'todos' berubah.

  // ... (fungsi addTodo, toggleComplete, deleteTodo tetap sama) ...
  const addTodo = (textDariForm: string) => {
    if (!textDariForm.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: textDariForm,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleComplete = (idToToggle: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === idToToggle
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  };

  const deleteTodo = (idToDelete: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== idToDelete));
  };

  return (
    <div className="app-container">
      <header>
        <h1>Aplikasi To-Do List Saya (React + TS)</h1>
      </header>
      <main>
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onToggleComplete={toggleComplete}
          onDeleteTodo={deleteTodo}
        />
      </main>
      <footer className="app-footer">
        <p>
          Total Tugas: {todos.length} | Selesai:{" "}
          {todos.filter((t) => t.isCompleted).length}
        </p>
      </footer>
    </div>
  );
}

export default App;
