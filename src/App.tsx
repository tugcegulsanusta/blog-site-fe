import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import Main from "./pages/main.tsx";
import AddCategoryPopUp from "./components/category/AddCategoryPopUp.tsx";
import Categorystatisticspage from "./pages/categorystatisticspage.tsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addCategory" element={<AddCategoryPopUp />} />
        <Route path="/statistics" element={<Categorystatisticspage/>}/>
      </Routes>
    </div>
  );
}
