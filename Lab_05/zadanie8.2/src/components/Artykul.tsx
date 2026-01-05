import { useParams, Link } from "react-router-dom";
import { type Artykul as ArtykulTyp } from "./types";

function Artykul() {
  const { id } = useParams();

  const zapisane = localStorage.getItem("artykuly");
  const lista: ArtykulTyp[] = zapisane ? JSON.parse(zapisane) : [];

  const artykul = lista.find((a) => a.id === Number(id));

  if (!artykul) return <div>Nie znaleziono artykułu o ID: {id}</div>;

  return (
    <div>
      <h2>{artykul.title}</h2>
      <p>{artykul.content}</p>
      <Link to="/blog">Powrót do listy</Link>
    </div>
  );
}

export default Artykul;
