import Home from "./COMPONENTS/HOME/Home";
import { Routes, Route } from "react-router-dom";
import Landing from "./COMPONENTS/LANDING/Landing";
import Card from "./COMPONENTS/CARD/Card";
import Header from "./COMPONENTS/HEADER/Header";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Detail from "./COMPONENTS/DETAIL/Detail";
// import Login from './COMPONENTS/LOGIN/Login'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/header" element={<Header />} />
        <Route path="/card" element={<Card />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path='/detail/:id' element={<Detail/>} />
        {/* <Route path ='/login' element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
