import { useState } from "react";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

interface DodawanieProps {
  onAdd: (student: Student) => void;
}

function Dodawanie(props: DodawanieProps) {
  const [imie, setImie] = useState<string>("");
  const [nazwisko, setNazwisko] = useState<string>("");
  const [rocznik, setRocznik] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!imie || !nazwisko || !rocznik) {
      alert("Wypełnij wszystkie pola");
      return;
    }

    if (isNaN(Number(rocznik))) {
      alert("Rocznik musi być liczbą");
      return;
    }

    props.onAdd({
      imie: imie,
      nazwisko: nazwisko,
      rocznik: Number(rocznik),
    });

    setImie("");
    setNazwisko("");
    setRocznik("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "5px" }}>
          <input
            placeholder="Imię"
            value={imie}
            onChange={(e) => setImie(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <input
            placeholder="Nazwisko"
            value={nazwisko}
            onChange={(e) => setNazwisko(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "5px" }}>
          <input
            placeholder="Rocznik"
            value={rocznik}
            onChange={(e) => setRocznik(e.target.value)}
          />
        </div>
        <button type="submit">Dodaj Studenta</button>
      </form>
    </div>
  );
}

export default Dodawanie;
