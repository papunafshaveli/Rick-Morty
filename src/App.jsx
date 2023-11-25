import { Route, Routes } from "react-router-dom";
import "./App.css";
import CharactersList from "./pages/CharactersList";
import Character from "./pages/Character";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
