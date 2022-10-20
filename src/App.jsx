import React from "react";
import Popular from "./Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./components/trending/Trending";
import Search from "./components/Search/Search";
import Description from "./components/Description/Description";

import Appbar from "./components/appbar/Appbar";
function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Popular />}></Route>
        <Route path="/trending" element={<Trending />} />
        <Route path=":id" element={<Description />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
