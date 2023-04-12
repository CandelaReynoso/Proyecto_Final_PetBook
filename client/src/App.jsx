import Home from "./COMPONENTS/HOME/Home";
import { Routes, Route } from "react-router-dom";
import Landing from "./COMPONENTS/LANDING/Landing";
import Card from "./COMPONENTS/CARD/Card";
import Header from "./COMPONENTS/HEADER/Header";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
