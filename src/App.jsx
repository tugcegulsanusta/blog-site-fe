import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Main from "./pages/main";

let App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
