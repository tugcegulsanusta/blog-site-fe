import React from "react";
import NavigationBar from "../components/header/NavigationBar.tsx";
import BlogCarousel from "../components/content/BlogCarousel.tsx";

export default function Main() {
  return (
    <>
      <NavigationBar />
      <BlogCarousel />
    </>
  );
}
