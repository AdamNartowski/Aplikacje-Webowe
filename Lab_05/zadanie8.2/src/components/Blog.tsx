import { useState } from "react";
import { Link } from "react-router-dom";
import { type Artykul } from "./types";
function Blog() {
  const [artykuly] = useState<Artykul[]>(() => {
    const zapisane = localStorage.getItem("artykuly");
    if (zapisane) {
      return JSON.parse(zapisane);
    }
    return [];
  });

  return (
    <div>
      <h2>Lista Artykułów</h2>
      <ul>
        {artykuly.map((art) => (
          <li key={art.id}>
            <Link to={`/article/${art.id}`}>{art.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/dodaj">Dodaj nowy artykuł</Link>
    </div>
  );
}
export default Blog;
