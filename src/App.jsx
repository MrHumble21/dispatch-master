import React, { useState } from "react";
import Popular from "./Popular";
import { Routes, Route } from "react-router-dom";
import Trending from "./components/trending/Trending";
import Search from "./components/Search/Search";
import Description from "./components/Description/Description";

import Appbar from "./components/appbar/Appbar";
import Main from "./Main";
import { BsFillMoonStarsFill } from "react-icons/bs";
function App() {
  const [dark, setDark] = useState('true');
  return (
    <>


      <BsFillMoonStarsFill
        onClick={() => {
          setDark(!dark)
          console.log(dark)
        }}
        className="night fs-2 text-warning" />
      <Appbar theme={dark} />
      <Routes>
        <Route path="/" element={<Main theme={dark} />}></Route>
        <Route path="/popular" element={<Popular theme={dark} />}></Route>
        <Route path="/trending" element={<Trending  theme={dark}/>} />
        <Route path=":id" element={<Description  theme={dark} />} />
        <Route path="/search" element={<Search theme={dark} />} />
      </Routes>

    </>
  );
}

export default App;
