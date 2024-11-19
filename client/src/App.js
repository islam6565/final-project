import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { getuser, userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import Navbarr from "./components/Navbarr";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { getproduct } from "./JS/productSlice";
import Shop from "./components/Shop";
import CardDetails from "./components/CardDetails"
import Panier from "./components/Panier";
import { getcommande } from "./JS/commandeSlice";
import Footerr from "./components/Footerr";
import Dashbord from "./components/Dashbord";
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState(false)
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getcommande());
    dispatch(getuser())
  }, [ping]);
  return (
    <div className="App">
        <Navbarr/>
      <Routes>
 
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop ping={ping} setping={setping} />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
          <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
          <Route path="/details/:id" element={<CardDetails ping={ping} setping={setping} />} />
          <Route path="/panier" element={<Panier ping={ping} setping={setping} />} />
          <Route path="/dashbord" element={<Dashbord ping={ping} setping={setping} />} />
          
      

      </Routes>

   
    </div>
  );
}

export default App;



