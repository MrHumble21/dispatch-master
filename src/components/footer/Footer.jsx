import {  BsGithub, BsPhone, BsTelegram } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../appbar/logo.png";
import moment from "moment/moment";
const Footer = ({ theme }) => {
  return (
    <div className="container-fluid my-5">
      <footer
        style={{ borderTop: "1px solid white" }}
        className={` text-center text-lg-start ${
          theme ? "bg-black text-white" : "text-black bg-white"
        } `}
      >
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Quick navigation</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <Link to={"/"} className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    <i className="fas fa-book fa-fw fa-sm me-2"></i>Home
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"/search"} className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    <i className="fas fa-book fa-fw fa-sm me-2"></i>Search
                  </Link>
                </li>
                <li>
                  <Link to={"/popular"} className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    <i className="fas fa-book fa-fw fa-sm me-2"></i>Popular Movies
                  </Link>
                </li>
                <li>
                  <Link to="/trending" className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    <i className="fas fa-user-edit fa-fw fa-sm me-2"></i>Trending
                    Movies
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Me</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    Full name: <span className="mx-2 "> Abdulboriy Malikov</span>
                  </a>
                </li>
                <li>
                  <a href="#!" className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    Birth Date: <span className="mx-2 ">15.04.2000</span>
                  </a>
                </li>
                <li>
                  <a href="#!" className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    Address: <span className="mx-2 ">Tashkent, Chilonzor 6</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact Me</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="tel:+998900174290" className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    <BsPhone /> Phone: <span className="mx-2 ">+998900174290</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:abdulboriyweb@gmail.com" className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    <MdOutlineAlternateEmail /> Email:{" "}
                    <span className="mx-2 ">abdulboriyweb@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abdulboriy-malikov-30118b205"
                    className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}
                  >
                    <AiFillLinkedin /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://t.me/MERNDEV1" className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    <BsTelegram /> Telegram
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MrHumble21" className={`${theme ? "bg-black text-white" : "text-black bg-white"}`}>
                    <BsGithub /> Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="text-center p-3"
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.2)`,
          }}
        >
          © {new Date().getFullYear()} Copyright:
          <a className={`${theme ? "bg-black text-white" : "text-black bg-white"}`} href="https://www.abdulboriy.me/">
            <p>Abdulboriy.me</p>
          </a>
        </div>
      </footer>
      <br />
    </div>
  );
};

export default Footer;
