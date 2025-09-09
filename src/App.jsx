import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Header from "./components/Header";

import Layout from "./pages/Layout";
import Results from "./pages/Results";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"/"} element={<Home />}></Route>
          <Route path="watch" element={<Watch />}></Route>
          <Route path="results" element={<Results />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
