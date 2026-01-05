import { useState } from "react";

export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

function Komentarz(props: KomentarzProps) {
  const [liczbaPolubien, ustawLiczbaPolubien] = useState<number>(props.likes);

  function like() {
    ustawLiczbaPolubien(liczbaPolubien + 1);
  }

  function dislike() {
    ustawLiczbaPolubien(liczbaPolubien - 1);
  }

  return (
    <div className="komentarz">
      <h4>{props.user.username}</h4>
      <p>{props.body}</p>
      <div className="komentarzDol">
        <span>Polubienia: {liczbaPolubien} </span>
        <button className="komentarzLike" onClick={like}>
          👍
        </button>
        <button className="komentarzLike" onClick={dislike}>
          👎
        </button>
      </div>
    </div>
  );
}

export default Komentarz;
