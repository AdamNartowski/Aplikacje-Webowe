import { useState } from 'react';

function Formularz() {
  const [tekst, ustawTekst] = useState<string>("");

  return (
    <div>
      <input 
        type="text" 
        value={tekst} 
        onChange={(e) => ustawTekst(e.target.value)} 
      />
      <div>{tekst}</div>
    </div>
  );
}

export default Formularz;