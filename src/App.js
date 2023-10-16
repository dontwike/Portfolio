import React from "react";
import "./App.scss";
import SideBar from "./Components/SideBar/SideBar";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import Home from "./Components/Home/Home";
import WorkExp from "./Components/WorkExperience/WorkExp";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/experience" element={<WorkExp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
