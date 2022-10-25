import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaFireAlt, FaSearch } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
const BottomNavbar = ({ theme }) => {
  return (
    <nav
      className={`navbar fixed-bottom p-0  ${
        theme ? " bottom_nav_dark " : "bg-light"
      }`}
    >
      <div className="d-flex justify-content-between w-100 py-2">
        <Link
          className="d-inline-flex text-white w-25 flex-column align-items-center  p-0 fs-5 m-0 "
          to={"/"}
        >
          <AiFillHome />
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "13px",
            }}
          >
            home
          </p>
        </Link>
        <Link
          className="d-inline-flex text-white w-25 flex-column align-items-center p-0 fs-5 m-0 "
          to={'/popular'}
        >
          <FaFireAlt className="m-0 p-0" />
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "13px",
            }}
          >
            Popular
          </p>
        </Link>
        <Link
          className="d-inline-flex text-white w-25 flex-column align-items-center p-0 fs-5 m-0 "
          to="/search"

        >
          <FaSearch className="m-0 p-0" />
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "13px",
            }}
          >
            Search
          </p>
        </Link>
        <Link
          className="d-inline-flex text-white w-25 flex-column align-items-center p-0 fs-5 m-0 "
          to="/trending"

        >
          <BiTrendingUp className="m-0 p-0" />
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "13px",
            }}
          >
            Trending
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavbar;
