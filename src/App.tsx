import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import Main from "./pages/main.tsx";
import AddCategoryPopUp from "./components/category/AddCategoryPopUp.tsx";
import CategoryStatisticsPage from "./pages/categorystatisticspage.tsx";
import AddPostPopUp from "./components/post/AddPostPopUp.tsx";
import UpdatePostPage from "./pages/UpdatePostPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import FilteredPostsPage from "./pages/FilteredPostPage.tsx";
import UpdateCategoryPopUp from "./components/category/UpdateCategoryPopUp.tsx";
import NavigationBar from "./components/header/NavigationBar.tsx";
import DeletePostPopUp from "./components/post/DeletePostPopUp.tsx";





export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistics" element={<CategoryStatisticsPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/category/*" element={<FilteredPostsPage />} />
      </Routes>
    </div>
  );
}
