import React from "react";
import "./style/index.css";
import LeHeader from "./components/header";
import { About } from "./pages/about";
import  Works  from "./pages/Works";
import FrontPage from "./pages/frontpage";
import Twodee from "./pages/2D";
import Threedee from "./pages/3D";
import Code from "./pages/code";
import Sketchbook from "./pages/sketchbook";


import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div id="page">
      <div className="header">
        <LeHeader/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/"      element={<App/>}/>
          <Route index element={<FrontPage/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          
          <Route path="/" element={<Works/>} />
          <Route index element={<Works/>} />
          <Route path="/2D" element={<Twodee/>} />
          <Route path="/3D" element={<Threedee/>} />
          <Route path="/code" element={<Code/>} />
          <Route path="/sketchbook" element={<Sketchbook/>} />
      
        </Routes>

        
      </BrowserRouter>

    
    </div>
  );
}

export default App;
