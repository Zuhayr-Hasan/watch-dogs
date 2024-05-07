// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import Varification from "./components/Auth/Varification";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="varification" element={<Varification />} />
          <Route path="Dashboard" element={<Dashboard />} />
          {/* <Route path="home" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
