import React, { useState } from "react";
import "./index.css";
import LeHeader from "./header";



import { About } from "./pages/about";
import { Works } from "./pages/works";
import FrontPage from "./pages/frontpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
