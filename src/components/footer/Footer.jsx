import { BsFacebook, BsGithub, BsPhone, BsTelegram } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../appbar/logo.png";
import moment from "moment/moment";
const Footer = ({ theme }) => {
  return (
    <div class="container-fluid my-5">
      <footer
        style={{ borderTop: "1px solid white" }}
        class={` text-center text-lg-start ${
          theme ? "bg-black text-white" : "text-black bg-white"
        } `}
      >
        <div class="container p-4">
          <div class="row mt-4">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Quick navigation</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <Link to={"/"} class="text-white">
                    <i class="fas fa-book fa-fw fa-sm me-2"></i>Home
                  </Link>
                </li>{" "}
                <li>
                  <Link to={"/search"} class="text-white">
                    <i class="fas fa-book fa-fw fa-sm me-2"></i>Search
                  </Link>
                </li>
                <li>
                  <Link to={"/popular"} class="text-white">
                    <i class="fas fa-book fa-fw fa-sm me-2"></i>Popular Movies
                  </Link>
                </li>
                <li>
                  <Link to="/trending" class="text-white">
                    <i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Trending
                    Movies
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">About Me</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-white">
                    Full name: <span class="mx-2 "> Abdulboriy Malikov</span>
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Birth Date: <span class="mx-2 ">15.04.2000</span>
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Address: <span class="mx-2 ">Tashkent, Chilonzor 6</span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Contact Me</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="tel:+998900174290" class="text-white">
                    <BsPhone /> Phone: <span class="mx-2 ">+998900174290</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:abdulboriyweb@gmail.com" class="text-white">
                    <MdOutlineAlternateEmail /> Email:{" "}
                    <span class="mx-2 ">abdulboriyweb@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abdulboriy-malikov-30118b205"
                    class="text-white"
                  >
                    <AiFillLinkedin /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/MERNDEV1"
                    class="text-white"
                  >
                    <BsTelegram /> Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/MrHumble21"
                    class="text-white"
                  >
                    <BsGithub /> Github
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        <div
          class="text-center p-3"
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.2)`,
          }}
        >
          © {moment().format('ll')} Copyright:
          <a class="text-white" href="https://www.abdulboriy.me/">
            <p>Abdulboriy.me</p>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
