import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Blog from "./components/Blog";
import Artykul from "./components/Artykul";
import DodajArtykul from "./components/DodajArtykul";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<Artykul />} />
        <Route path="/dodaj" element={<DodajArtykul />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
