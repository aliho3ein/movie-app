import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./index";
import WatchLater from "./watchLater";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Movie from "./movie";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/watch-list" element={<WatchLater />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
