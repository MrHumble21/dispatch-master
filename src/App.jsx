import React, { useState } from "react";
import Popular from "./Popular";
import { Routes, Route } from "react-router-dom";
import Trending from "./components/trending/Trending";
import Search from "./components/Search/Search";
import Description from "./components/Description/Description";

import Appbar from "./components/appbar/Appbar";
import Main from "./Main";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import BottomNavbar from "./components/bottomNavbar/BottomNavbar";
function App() {
  const [dark, setDark] = useState("true");
  return (
    <>
      {dark ? (
        <BsFillSunFill
          onClick={() => {
            setDark(!dark);
          }}
          className="night bg fs-1 text-warning "
        />
      ) : (
        <BsFillMoonStarsFill
          onClick={() => {
            setDark(!dark);
          }}
          className="night  fs-1 text-warning "
        />
      )}

      <Appbar theme={dark} />
      <Routes>
        <Route path="/" element={<Main theme={dark} />}></Route>
        <Route path="/popular" element={<Popular theme={dark} />}></Route>
        <Route path="/trending" element={<Trending theme={dark} />} />
        <Route path=":id" element={<Description theme={dark} />} />
        <Route path="/search" element={<Search theme={dark} />} />
      </Routes>
      <BottomNavbar  theme={dark}/>
    </>
  );
}

export default App;
