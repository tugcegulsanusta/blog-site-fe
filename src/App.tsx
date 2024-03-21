import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import FilteredPostsPage from "./components/content/FilteredPostPage.tsx";
import NavigationBar from "./components/header/NavigationBar.tsx";
import BlogCarousel from "./components/content/BlogCarousel.tsx";
import CategoryStatistics from "./components/statistics/CategoryStatistics.tsx";
import AccountSetting from './components/user/AccountSettings.tsx'
import SinglePost from "./components/content/SinglePost.tsx";
import Footer from "./components/footer/Footer.tsx";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="" element={<BlogCarousel />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/statistics" element={<CategoryStatistics />} />
        <Route path="/user" element={<AccountSetting />} />
        <Route path="/category/*" element={<FilteredPostsPage />} />
        <Route path="/post/*" element={<SinglePost />} />
      </Routes>
      <Footer />
    </div>
  );
}
