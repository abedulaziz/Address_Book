import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './sign_in';
import SignUp from './pages/sign_up'
import './App.css';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
