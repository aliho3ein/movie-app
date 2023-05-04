import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./index";
import Filter from "./filter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </>
  );
};

export default App;
