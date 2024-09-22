import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CardProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";

const App =()=>(
  <CardProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/productos" element={<Productos/>}/>        
        <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
      <Footer/>
    </Router>
  </CardProvider>
);

export default App;