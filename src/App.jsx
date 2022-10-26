import React, { useState } from "react";
import Popular from "./Popular";
import { Routes, Route } from "react-router-dom";
import Trending from "./components/trending/Trending";
import Search from "./components/Search/Search";
import Description from "./components/Description/Description";
import logo from './components/appbar/logo.png'
import {
  BrowserView,
  MobileView,
  isMobile,
} from "react-device-detect";
import Appbar from "./components/appbar/Appbar";
import Main from "./Main";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import BottomNavbar from "./components/bottomNavbar/BottomNavbar";
import Footer from "./components/footer/Footer";
function App() {
  const [dark, setDark] = useState("true");
  document.body.style.backgroundColor = dark ? 'black' : 'white';
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

      <BrowserView>
        <Appbar theme={dark} />
      </BrowserView>
      <MobileView>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="" />
            </a>
          </div>
        </nav>
      </MobileView>
      <Routes>
        <Route path="/" element={<Main theme={dark} />}></Route>
        <Route path="/popular" element={<Popular theme={dark} />}></Route>
        <Route path="/trending" element={<Trending theme={dark} />} />
        <Route path=":id" element={<Description theme={dark} />} />
        <Route path="/search" element={<Search theme={dark} />} />
      </Routes>
      <Footer />
      {isMobile && <BottomNavbar theme={dark} />}
    </>
  );
}

export default App;
