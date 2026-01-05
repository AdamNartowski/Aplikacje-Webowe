import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Witaj na blogu!</h1>
      <Link to="/blog">Przejdź do bloga</Link>
    </div>
  );
}

export default Home;
