import { useState } from 'react';

export default function AuthorManager() {
  const [authors, setAuthors] = useState([]);
  const [authorInput, setAuthorInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (!authorInput) return;
    if (editingIndex !== null) {
      const updated = [...authors];
      updated[editingIndex] = authorInput;
      setAuthors(updated);
      setEditingIndex(null);
    } else {
      setAuthors([...authors, authorInput]);
    }
    setAuthorInput('');
  };

  const handleEdit = (index) => {
    setAuthorInput(authors[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = authors.filter((_, i) => i !== index);
    setAuthors(updated);
    if (editingIndex === index) {
      setAuthorInput('');
      setEditingIndex(null);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Manage Authors</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={authorInput}
          onChange={(e) => setAuthorInput(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          placeholder="Author name"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {editingIndex !== null ? 'Update' : 'Add Author'}
        </button>
      </div>
      <ul className="space-y-2">
        {authors.map((author, index) => (
          <li key={index} className="bg-white p-3 rounded shadow flex justify-between items-center">
            <span>{author}</span>
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
