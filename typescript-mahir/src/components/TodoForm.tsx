import React, { useState, type FormEvent, type ChangeEvent } from "react";

// Definisikan tipe untuk props yang diterima TodoForm
interface TodoFormProps {
  // onAddTodo adalah fungsi yang nerima satu argumen string (teks tugas)
  // dan gak nge-return apa-apa (void)
  onAddTodo: (text: string) => void;
}

// Komponen TodoForm adalah Functional Component yang nerima props bertipe TodoFormProps
const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  // State lokal buat nyimpen teks yang lagi diketik di input
  const [inputText, setInputText] = useState<string>("");

  // Fungsi handler buat ngupdate state inputText pas input berubah
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // Fungsi handler buat pas form di-submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Cegah reload halaman default

    const teksTugas = inputText.trim(); // Ambil nilai input & hilangkan spasi ekstra
    if (!teksTugas) {
      // Validasi simpel: jangan tambah kalau kosong
      alert("Tugas tidak boleh kosong!");
      return;
    }

    onAddTodo(teksTugas); // Panggil fungsi onAddTodo dari props (yang aslinya ada di App.tsx)
    setInputText(""); // Kosongin lagi input field setelah tugas ditambah
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Ketik tugas baru di sini..."
        className="todo-input"
        aria-label="Input tugas baru" // Untuk aksesibilitas
      />
      <button type="submit" className="todo-button">
        Tambah Tugas
      </button>
    </form>
  );
};

export default TodoForm;
