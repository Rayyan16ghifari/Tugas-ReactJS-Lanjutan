import { useState } from "react";

function AdminPanel() {
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [newGenre, setNewGenre] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [editGenreIndex, setEditGenreIndex] = useState(null);
  const [editAuthorIndex, setEditAuthorIndex] = useState(null);

  const handleAddOrUpdateGenre = () => {
    if (!newGenre.trim()) return;
    if (editGenreIndex !== null) {
      const updated = [...genres];
      updated[editGenreIndex] = newGenre.trim();
      setGenres(updated);
      setEditGenreIndex(null);
    } else {
      setGenres([...genres, newGenre.trim()]);
    }
    setNewGenre("");
  };

  const handleAddOrUpdateAuthor = () => {
    if (!newAuthor.trim()) return;
    if (editAuthorIndex !== null) {
      const updated = [...authors];
      updated[editAuthorIndex] = newAuthor.trim();
      setAuthors(updated);
      setEditAuthorIndex(null);
    } else {
      setAuthors([...authors, newAuthor.trim()]);
    }
    setNewAuthor("");
  };

  const handleEditGenre = (index) => {
    setEditGenreIndex(index);
    setNewGenre(genres[index]);
  };

  const handleDeleteGenre = (index) => {
    const updated = genres.filter((_, i) => i !== index);
    setGenres(updated);
    if (editGenreIndex === index) {
      setNewGenre("");
      setEditGenreIndex(null);
    }
  };

  const handleEditAuthor = (index) => {
    setEditAuthorIndex(index);
    setNewAuthor(authors[index]);
  };

  const handleDeleteAuthor = (index) => {
    const updated = authors.filter((_, i) => i !== index);
    setAuthors(updated);
    if (editAuthorIndex === index) {
      setNewAuthor("");
      setEditAuthorIndex(null);
    }
  };

  return (
    <div className="space-y-12 p-6">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 tracking-wide border-b-4 border-blue-400 pb-6">
        Admin Panel
      </h2>

      {/* Manage Genres */}
      <section className="bg-blue-50 p-8 rounded-xl shadow-md space-y-6">
        <h3 className="text-3xl font-bold text-blue-800">Manage Genres</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter genre name"
            className="flex-1 px-4 py-3 rounded-xl border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
          />
          <button
            onClick={handleAddOrUpdateGenre}
            className="bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md"
          >
            {editGenreIndex !== null ? "Update Genre" : "Add Genre"}
          </button>
        </div>
        <ul className="space-y-2 text-blue-900 text-lg">
          {genres.map((genre, index) => (
            <li
              key={index}
              className="bg-white px-4 py-2 rounded-xl shadow-sm flex justify-between items-center"
            >
              <span>{genre}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditGenre(index)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteGenre(index)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Manage Authors */}
      <section className="bg-green-50 p-8 rounded-xl shadow-md space-y-6">
        <h3 className="text-3xl font-bold text-green-800">Manage Authors</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter author name"
            className="flex-1 px-4 py-3 rounded-xl border-2 border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <button
            onClick={handleAddOrUpdateAuthor}
            className="bg-green-600 hover:bg-green-700 transition text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md"
          >
            {editAuthorIndex !== null ? "Update Author" : "Add Author"}
          </button>
        </div>
        <ul className="space-y-2 text-green-900 text-lg">
          {authors.map((author, index) => (
            <li
              key={index}
              className="bg-white px-4 py-2 rounded-xl shadow-sm flex justify-between items-center"
            >
              <span>{author}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEditAuthor(index)}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteAuthor(index)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminPanel;
