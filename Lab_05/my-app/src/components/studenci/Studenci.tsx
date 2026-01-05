interface Student {
  imie: string;
  nazwisko: string;
  rocznik: number;
}

function Studenci() {
  const Students: Student[] = [
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 2024 },
    { imie: "Tomasz", nazwisko: "Nowak", rocznik: 2025 },
    { imie: "Piotr", nazwisko: "Kowalski", rocznik: 2023 },
  ];

  return (
    <div>
      <h3>Lista studentów</h3>
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {Students.map((student, index) => (
            <tr key={index}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.rocznik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Studenci;
