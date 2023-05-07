import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./index";
import WatchLater from "./watchLater";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Movie from "./movie";
import About from "./about";
import Page404 from "./404";
import GenresList from "./genresList";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/genre" element={<GenresList />} />
        <Route path="/watch-list" element={<WatchLater />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
