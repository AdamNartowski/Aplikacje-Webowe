import { useState } from "react";

function Logowanie() {
  const [nazwaUzytkownika, ustawNazwaUzytkownika] = useState<string>("");
  const [haslo1, ustawHaslo1] = useState<string>("");
  const [haslo2, ustawHaslo2] = useState<string>("");

  const czyPolaPuste =
    nazwaUzytkownika === "" || haslo1 === "" || haslo2 === "";

  function obslugaLogowania() {
    if (haslo1 !== haslo2) {
      alert("Hasła nie są zgodne");
    } else {
      alert("Zalogowano poprawnie");
    }
  }

  return (
    <div>
      <div>
        Nazwa:{" "}
        <input
          type="text"
          value={nazwaUzytkownika}
          onChange={(e) => ustawNazwaUzytkownika(e.target.value)}
        />
      </div>
      <div>
        Hasło:{" "}
        <input
          type="text"
          value={haslo1}
          onChange={(e) => ustawHaslo1(e.target.value)}
        />
      </div>
      <div>
        Powtórz hasło:{" "}
        <input
          type="text"
          value={haslo2}
          onChange={(e) => ustawHaslo2(e.target.value)}
        />
      </div>

      <button disabled={czyPolaPuste} onClick={obslugaLogowania}>
        Logowanie
      </button>
    </div>
  );
}

export default Logowanie;
