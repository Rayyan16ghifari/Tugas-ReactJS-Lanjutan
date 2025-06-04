// src/components/GenreForm.jsx
import { useState } from "react";

export default function GenreForm({ onAdd }) {
  const [newGenre, setNewGenre] = useState("");

  const handleAdd = () => {
    if (newGenre.trim()) {
      onAdd(newGenre.trim());
      setNewGenre("");
    }
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <input
        type="text"
        className="border rounded px-3 py-2 w-1/2"
        placeholder="Genre name"
        value={newGenre}
        onChange={(e) => setNewGenre(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleAdd}
      >
        Add Genre
      </button>
    </div>
  );
}
