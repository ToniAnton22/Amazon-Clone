import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter, Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    // BEM
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
