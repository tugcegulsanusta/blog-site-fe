import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Main from "./pages/main";
import { Helmet } from "react-helmet";
import AddCategory from "./pages/AddCategory";

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Blog-site</title>
      </Helmet>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addCategory" element={<AddCategory />} />
      </Routes>
    </div>
  );
}
