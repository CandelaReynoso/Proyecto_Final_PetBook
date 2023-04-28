import Home from "./COMPONENTS/HOME/Home";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Landing from "./COMPONENTS/LANDING/Landing";
import Header from "./COMPONENTS/HEADER/Header";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Detail from "./COMPONENTS/DETAIL/Detail";
import AvaliblePetsAdoption from "./COMPONENTS/AVALIBLE_PETS_ADOPTION/AvaliblePetsAdoption";
import Loginpage from "./COMPONENTS/LOGIN/Loginpage";
import Registration from "./COMPONENTS/REGISTRATION/Registration";
import About from "./COMPONENTS/ABOUT/About";
import Donations from "./COMPONENTS/DONATION/Donations";
import FormContact from "./COMPONENTS/FORMS/FormContact";
import "./index.css";
import FormCreatePet from "./COMPONENTS/FORMS/FormCreatePet";
import FormAdoption from "./COMPONENTS/FORMS/FormAdoption";
import Chatbot from "./COMPONENTS/CHATBOT/Chatbot";
import axios from "axios";
import Successfully from "./COMPONENTS/DONATION/Successfully";
import Shop from "./COMPONENTS/SHOP/Shop";
import FormHistory from "./COMPONENTS/HISTORY-ADOPTADOS/FormHistory";
import Admin from "./COMPONENTS/ADMIN/Admin";
import AplicationsRequest from "./COMPONENTS/APLICATIONSREQUEST/AplicationsRequest";
import ErrorPage from "./COMPONENTS/UTILS/ErrorPage";
import { useNavigate } from "react-router-dom";


//Instancia de axios para Railway.
// axios.defaults.baseURL = "https://proyectofinalpetbook-production.up.railway.app";

//Instancia de axios para Railway.
// axios.defaults.baseURL = "https://petbook-server.onrender.com";

//Instancia de axios para trabajo local:
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [admin, setAdmin] = useState("");
  
  
  async function getRoll(id) {
    let roll = await axios(`/users/verifyAdminRole/${id}`);
    window.localStorage.setItem("Admin", JSON.stringify(roll.data));
    setAdmin(roll.data)
  }

  useEffect(() => {
    let verify = window.localStorage.getItem("Admin");
    let id = window.localStorage.getItem("id");
    
    if (verify === true) {
     return;
    }
    if (verify === false) {
      return;
     }
    if (!verify && !id ) return 
      // window.localStorage.setItem("Admin", JSON.stringify(false));
      // setAdmin(false);
      
      
    // async function getRoll() {
    //   let roll = await axios(`/users/verifyAdminRole/${id}`);
    //   window.localStorage.setItem("Admin", JSON.stringify(roll.data));
    //   setAdmin(roll.data)
    // }
    
    getRoll(id);
    

    // let id = window.localStorage.getItem("id");
    // async function getRoll() {
    //   let roll = await axios(`/users/verifyAdminRole/${id}`);
    //   window.localStorage.setItem("Admin", JSON.stringify(roll.data));
    //   setAdmin(roll.data)
    // }
    // getRoll();
  }, [getRoll,admin]);
  
  let verify = window.localStorage.getItem("Admin");
  console.log(verify);

  return (
    <div className="app">
      {location.pathname !== "/" && <Chatbot />}
     

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Loginpage />} />
        <Route
          path="/AvaliblePetsAdoption"
          element={<AvaliblePetsAdoption />}
        />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/FormAdoption/:id" element={<FormAdoption />} />
        <Route path="/FormContact" element={<FormContact />} />
        <Route path="/FormHistory" element={<FormHistory />} />
        <Route path="/donate" element={<Donations />} />
        <Route path="/thanks" element={<Successfully />} />
        <Route path="/store" element={<Shop />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path='/error' element={<ErrorPage />} />
        
        
        {verify === true &&   <Route path="/FormCreatePet" element={<FormCreatePet />} />}
        {verify === true &&   <Route path="/admin" element={<Admin />} />}
        {verify === true && <Route path="/AplicationRequest" element={<AplicationsRequest/>}></Route>}
        {verify === false && <Route path="*" element={<Navigate to={"/error"} />} />}
        
      </Routes>
    </div>
  );
}

export default App;
