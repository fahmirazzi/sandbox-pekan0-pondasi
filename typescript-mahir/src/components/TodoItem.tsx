import React from "react";
import type { Todo } from "../interface";

// Definisikan tipe untuk props yang diterima TodoItem
interface TodoItemProps {
  todo: Todo; // Satu objek todo
  // Fungsi-fungsi handler ini akan dikirim dari App.tsx nanti
  onToggleComplete: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDeleteTodo,
}) => {
  const itemStyle: React.CSSProperties = {
    // Contoh tipe untuk objek style inline
    textDecoration: todo.isCompleted ? "line-through" : "none",
    color: todo.isCompleted ? "#a0a0a0" : "#333",
    opacity: todo.isCompleted ? 0.6 : 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 15px",
    borderBottom: "1px solid #eee",
    transition: "all 0.3s ease", // Sedikit transisi
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "8px", // Jarak antar tombol
  };

  const buttonStyleBase: React.CSSProperties = {
    padding: "6px 10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    fontSize: "0.9em",
    transition: "background-color 0.2s ease",
  };

  const completeButtonStyle: React.CSSProperties = {
    ...buttonStyleBase, // Salin style dasar
    backgroundColor: todo.isCompleted ? "#6c757d" : "#28a745", // Abu-abu kalau udah selesai, hijau kalau belum
    color: "white",
  };

  const deleteButtonStyle: React.CSSProperties = {
    ...buttonStyleBase,
    backgroundColor: "#dc3545", // Merah
    color: "white",
  };

  return (
    <li style={itemStyle} className="todo-item">
      <span
        onClick={() => onToggleComplete(todo.id)}
        style={{ cursor: "pointer", flexGrow: 1 }}
        className={todo.isCompleted ? "completed-text" : ""}
      >
        {todo.text}
      </span>
      <div style={buttonContainerStyle}>
        <button
          onClick={() => onToggleComplete(todo.id)}
          style={completeButtonStyle}
          aria-label={
            todo.isCompleted ? "Tandai belum selesai" : "Tandai selesai"
          }
        >
          {todo.isCompleted ? "Batal" : "Selesai"}
        </button>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          style={deleteButtonStyle}
          aria-label="Hapus tugas"
        >
          Hapus
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
