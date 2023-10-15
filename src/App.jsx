
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokemones from "./views/Pokemones";
import Home from "./views/Home";
import Detalles from "./views/Detalles";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Detalles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
