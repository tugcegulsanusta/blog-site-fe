import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import Main from "./pages/main.tsx";
import AddCategoryPopUp from "./components/category/AddCategoryPopUp.tsx";
import CategoryStatisticsPage from "./pages/categorystatisticspage.tsx";
import AddPostPage from "./pages/AddPostPage.tsx";
import UpdatePostPage from "./pages/UpdatePostPage.tsx";
import UserPage from "./pages/UserPage.tsx";
import category from '../src/jsonfiles/category.json'
import FilteredPostsPage from "./pages/FilteredPostPage.tsx";

const categories = [
  {
    "id": 1,
    "name": "Core"
  },
  {
    "id": 2,
    "name": "Blocks"
  },
  {
    "id": 3,
    "name": "UI Kit"
  }
]



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addCategory" element={<AddCategoryPopUp />} />
        <Route path="/statistics" element={<CategoryStatisticsPage />} />
        <Route path="/addPost" element={<AddPostPage />} />
        <Route path="/updatePost" element={<UpdatePostPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/category/*" element={<FilteredPostsPage />} />
      </Routes>
    </div>
  );
}
