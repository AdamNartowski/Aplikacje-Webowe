import { useState } from "react";

function Haslo() {
  const [haslo1, ustawHaslo1] = useState<string>("");
  const [haslo2, ustawHaslo2] = useState<string>("");

  let wiadomosc = "";
  if (haslo1 === "" && haslo2 === "") {
    wiadomosc = "Proszę wprowadzić hasło";
  } else if (haslo1 !== haslo2) {
    wiadomosc = "Hasła nie są zgodne";
  } else {
    wiadomosc = "";
  }

  return (
    <div>
      <div>
        <label>Hasło: </label>
        <input
          type="text"
          value={haslo1}
          onChange={(e) => ustawHaslo1(e.target.value)}
        />
      </div>
      <div>
        <label>Powtórz hasło: </label>
        <input
          type="text"
          value={haslo2}
          onChange={(e) => ustawHaslo2(e.target.value)}
        />
      </div>
      <div>{wiadomosc}</div>
    </div>
  );
}

export default Haslo;
