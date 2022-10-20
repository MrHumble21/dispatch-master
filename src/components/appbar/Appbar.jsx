/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "./logo.svg";

import { TfiHandPointDown } from "react-icons/tfi";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
function Appbar() {
  const [down, up] = useState(false);
  return (
    <nav className="navbar  navbar-expand-lg navbar-light glass">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img
            className="animate__animated animate__delay-1s w-75 animate__slow animate__flipInX "
            src={logo}
            alt=""
          />
        </Link>
        <button
          className="bg-transparent btn fs-1 text-danger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          onClick={() => up(!down)}
          aria-label="Toggle navigation"
        >
          {down ? <PanToolAltIcon className={'fs-1 d-md-none d-sm-block'} /> : <TfiHandPointDown className={'fs-1 d-md-none d-sm-block'} />}
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                to={"/"}
                className="animate__fadeInTopRight nav-link animate__animated animate__slow active"
              >
                Popular Movies ✨
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/trending"}
                className="animate__fadeInTopRight animate__animated animate__slow nav-link"
              >
                Trending Movies 🔥
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/search"}
                className="animate__fadeInTopRight animate__animated animate__slow nav-link"
              >
                Search a movie 🔍
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Advanced Sorting 🔖
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Appbar;
