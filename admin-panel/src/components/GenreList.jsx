// src/components/GenreList.jsx
export default function GenreList({ genres }) {
  return (
    <ul className="list-disc pl-6 text-gray-700">
      {genres.map((genre, index) => (
        <li key={index}>{genre}</li>
      ))}
    </ul>
  );
}
