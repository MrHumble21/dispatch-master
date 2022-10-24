/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import logodark from "./logoDark.svg";
import { TbEqual } from 'react-icons/tb'
import { FaTimes } from 'react-icons/fa'

function Appbar({ theme }) {
  const [down, up] = useState(false);
  console.log(theme)
  return (
    <nav
      style={{
        background: theme ? "black" : "white",

      }}
      className={`navbar  navbar-expand-lg ${theme ? 'navbar-dark' : "navbar-light"}`}>
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img
            className=""
            src={!theme ? logo : logodark}
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
          {down ? <FaTimes className={'fs-1 d-md-none d-sm-block'} /> : <TbEqual className={'fs-1 d-md-none d-sm-block'} />}
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                to={"/"}
                className="animate__fadeInUp choverr nav-link animate__animated animate__slow"
              >
                Main page
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/popular"}
                className="animate__fadeInUp choverr nav-link animate__animated animate__slow"
              >
                Popular Movies
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/trending"}
                className="animate__fadeInUp choverr animate__animated animate__slow nav-link"
              >
                Trending Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/search"}
                className="animate__fadeInUp choverr animate__animated animate__slow nav-link"
              >
                Search a movie
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Appbar;
