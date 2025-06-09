import React, { useState } from "react";

export default function AdminPanel() {
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-6 text-center">
          Admin Panel
        </h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Manage Genres
          </h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter genre name"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="flex-grow border border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
              onClick={() => {
                alert(`Added genre: ${genre}`);
                setGenre("");
              }}
            >
              Add Genre
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">
            Manage Authors
          </h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="flex-grow border border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              className="bg-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
              onClick={() => {
                alert(`Added author: ${author}`);
                setAuthor("");
              }}
            >
              Add Author
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
