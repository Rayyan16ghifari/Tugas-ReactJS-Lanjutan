// src/components/AuthorForm.jsx
import { useState } from "react";

export default function AuthorForm({ onAdd }) {
  const [newAuthor, setNewAuthor] = useState("");

  const handleAdd = () => {
    if (newAuthor.trim()) {
      onAdd(newAuthor.trim());
      setNewAuthor("");
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        className="border rounded px-3 py-2 w-1/2"
        placeholder="Author name"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleAdd}
      >
        Add Author
      </button>
    </div>
  );
}
