import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<h1 className="text-center">Bienvenido a TuBilletera Logistics </h1>} />
          <Route path="/login" element={<h2>Aqui el LOGIN"</h2>} />
          <Route path="/register" element={<h2>Aqui REGISTRO</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
