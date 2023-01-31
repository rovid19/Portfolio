import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Projects from "./components/Projects";

const App = () => {
  const [url, setUrl] = useState(window.location.href);
  console.log(url);
  return (
    <div className="flex-col">
      <Navbar />

      <Routes>
        <Route exact path="/aboutme" element={<Aboutme url={url} />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
};

export default App;
