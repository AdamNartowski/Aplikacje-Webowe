import { useState } from "react";
import Dodawanie from "./Dodawanie";

interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

function StudentManager() {
  const [studenci, ustawStudenci] = useState<Student[]>([
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 2024 },
    { imie: "Tomasz", nazwisko: "Nowak", rocznik: 2025 },
    { imie: "Piotr", nazwisko: "Kowalski", rocznik: 2023 },
  ]);

  function dodajStudenta(nowyStudent: Student) {
    ustawStudenci([...studenci, nowyStudent]);
  }

  return (
    <div>
      <h3>StudentManager</h3>
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {studenci.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dodawanie onAdd={dodajStudenta} />
    </div>
  );
}

export default StudentManager;
