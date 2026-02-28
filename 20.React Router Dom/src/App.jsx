import React from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import DetailedContact from "./components/DetailedContact";

const App = () => {
  console.log(window.history);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:cid" element={<DetailedContact />} />
        <Route path="/help" element={<Navigate to={"/"} replace />} />
      </Routes>
    </>
  );
};

export default App;
