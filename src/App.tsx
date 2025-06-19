import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Origin from "./pages/Origin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/origin" element={<Origin />} />
      </Routes>
    </BrowserRouter>
  );
}



