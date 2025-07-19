import React from "react";

import TodoItem from "./TodoItem"; // Impor komponen TodoItem
import type { Todo } from "../interface";

interface TodoListProps {
  todos: Todo[]; // Array dari objek Todo
  onToggleComplete: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleComplete,
  onDeleteTodo,
}) => {
  if (todos.length === 0) {
    return (
      <p className="empty-message">Hore, tidak ada tugas! Saatnya santai. 🎉</p>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        // Untuk tiap objek 'todo' di array 'todos', render satu komponen TodoItem
        <TodoItem
          key={todo.id} // WAJIB! Pake ID unik sebagai key
          todo={todo} // Kirim objek todo ini sebagai prop ke TodoItem
          onToggleComplete={onToggleComplete} // Teruskan fungsi handler dari App
          onDeleteTodo={onDeleteTodo} // Teruskan fungsi handler dari App
        />
      ))}
    </ul>
  );
};

export default TodoList;
