import { useState } from 'react';

export default function GenreManager() {
  const [genres, setGenres] = useState([]);
  const [genreInput, setGenreInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (!genreInput) return;
    if (editingIndex !== null) {
      const updated = [...genres];
      updated[editingIndex] = genreInput;
      setGenres(updated);
      setEditingIndex(null);
    } else {
      setGenres([...genres, genreInput]);
    }
    setGenreInput('');
  };

  const handleEdit = (index) => {
    setGenreInput(genres[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = genres.filter((_, i) => i !== index);
    setGenres(updated);
    if (editingIndex === index) {
      setGenreInput('');
      setEditingIndex(null);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-2">Manage Genres</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={genreInput}
          onChange={(e) => setGenreInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          placeholder="Genre name"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {editingIndex !== null ? 'Update' : 'Add Genre'}
        </button>
      </div>
      <ul className="space-y-2">
        {genres.map((genre, index) => (
          <li key={index} className="bg-white p-3 rounded shadow flex justify-between items-center">
            <span>{genre}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-yellow-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
