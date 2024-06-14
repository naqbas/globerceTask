import React from "react";
import FrameOne from "./components/FrameOne.js";
import Disclaimers from "./components/Disclaimers.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<FrameOne />} />
          <Route path="/disclaimers" element={<Disclaimers />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
