import { useEffect, useState } from "react";
import Komentarz, { type KomentarzProps } from "./Komentarz";

function Komentarze() {
  const [listaKomentarzy, ustawListaKomentarzy] = useState<KomentarzProps[]>(
    []
  );

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => {
        ustawListaKomentarzy(data.comments);
      });
  }, []);

  return (
    <div>
      <h2>Komentarze</h2>
      <div className="komentarzeSiatka">
        {listaKomentarzy.map((item) => (
          <Komentarz
            key={item.id}
            id={item.id}
            body={item.body}
            postId={item.postId}
            likes={item.likes}
            user={item.user}
          />
        ))}
      </div>
    </div>
  );
}

export default Komentarze;
