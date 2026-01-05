import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DodajArtykul() {
  const [tytul, ustawTytul] = useState<string>("");
  const [tresc, ustawTresc] = useState<string>("");
  const navigate = useNavigate();

  function obslugaDodawania() {
    if (tytul.trim() === "" || tresc.trim() === "") {
      alert("Proszę wypełnić tytuł i treść artykułu!");
      return;
    }

    const nowyArtykul = { id: Date.now(), title: tytul, content: tresc };

    const zapisane = localStorage.getItem("artykuly");
    const tablicaArtykulow = zapisane ? JSON.parse(zapisane) : [];

    tablicaArtykulow.push(nowyArtykul);
    localStorage.setItem("artykuly", JSON.stringify(tablicaArtykulow));

    navigate("/blog");
  }

  return (
    <div>
      <h2>Dodaj Artykuł</h2>
      <input
        placeholder="Tytuł"
        value={tytul}
        onChange={(e) => ustawTytul(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Treść"
        value={tresc}
        onChange={(e) => ustawTresc(e.target.value)}
      />
      <br />
      <button onClick={obslugaDodawania}>DODAJ</button>
    </div>
  );
}

export default DodajArtykul;
