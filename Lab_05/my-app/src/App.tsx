import "./App.css";
import Koszyk from "./components/koszyk/Koszyk";
import NowyKoszyk from "./components/koszyk/NowyKoszyk";
import Licznik from "./components/liczniki/Licznik";
import NowyLicznik from "./components/liczniki/NowyLicznik";
import Formularz from "./components/formularze/Formularz";
import Haslo from "./components/formularze/Haslo";
import Logowanie from "./components/formularze/Logowanie";
import Ternary from "./components/inne/Ternary";
import Aktualizacja from "./components/inne/Aktualizacja";
import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";
import LicznikEfekt from "./components/efekty/Licznik";
import Tytul from "./components/efekty/Tytul";
import Odliczanie from "./components/efekty/Odliczanie";
import Komentarze from "./components/produkty/Komentarze";

function App() {
  return (
    <div>
      <h1>Zadanie 1</h1>
      <Koszyk />
      <hr />
      <NowyKoszyk />

      <h1>Zadanie 2</h1>
      <Licznik />
      <hr />
      <NowyLicznik />

      <h1>Zadanie 3</h1>
      <Formularz />
      <hr />
      <Haslo />
      <hr />
      <Logowanie />

      <h1>Zadanie 4</h1>
      <Ternary />
      <hr />
      <Aktualizacja />

      <h1>Zadanie 5</h1>
      <Studenci />
      <hr />
      <StudentManager />

      <h1>Zadanie 6</h1>
      <LicznikEfekt />
      <hr />
      <Tytul />
      <hr />
      <Odliczanie />

      <h1>Zadanie 7</h1>
      <Komentarze />
    </div>
  );
}

export default App;
