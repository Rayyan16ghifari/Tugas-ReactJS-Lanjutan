import { useState } from "react";

function AdminPanel() {
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [newGenre, setNewGenre] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const addGenre = () => {
    if (newGenre.trim()) {
      setGenres([...genres, newGenre.trim()]);
      setNewGenre("");
    }
  };

  const addAuthor = () => {
    if (newAuthor.trim()) {
      setAuthors([...authors, newAuthor.trim()]);
      setNewAuthor("");
    }
  };

  return (
    <div className="space-y-12">
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
            onClick={addGenre}
            className="bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md"
          >
            Add Genre
          </button>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-blue-900 text-lg">
          {genres.map((genre, index) => (
            <li key={index} className="bg-white px-4 py-2 rounded-xl shadow-sm">
              {genre}
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
            onClick={addAuthor}
            className="bg-green-600 hover:bg-green-700 transition text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-md"
          >
            Add Author
          </button>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-green-900 text-lg">
          {authors.map((author, index) => (
            <li key={index} className="bg-white px-4 py-2 rounded-xl shadow-sm">
              {author}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminPanel;
