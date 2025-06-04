// src/components/AuthorList.jsx
export default function AuthorList({ authors }) {
  return (
    <ul className="list-disc pl-6 text-gray-700">
      {authors.map((author, index) => (
        <li key={index}>{author}</li>
      ))}
    </ul>
  );
}
