import { useState, useEffect } from "react";

function Tytul() {
  const [tytul, ustawTytul] = useState<string>("");

  useEffect(() => {
    document.title = tytul;
  }, [tytul]);

  return (
    <div>
      <input
        value={tytul}
        onChange={(e) => ustawTytul(e.target.value)}
        placeholder="Wpisz tytuł strony"
      />
    </div>
  );
}

export default Tytul;
