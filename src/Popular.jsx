import { useEffect, useState, useRef } from "react";
import "./App.css";
import { isMobile } from "react-device-detect";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
// animate css
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
// carousel
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "./components/card/MovieCard";
import { img_500 } from "./components/configs/config";
import { Link } from "react-router-dom";
import { genres } from "./genres";
import TopRated from "./components/TopRated/TopRated";
const apiKey = "5a6077716d3404c52264bcf17f97a3d3";
function Popular() {
  const [content, setContent] = useState([]);
  const loaded = [...content];
  const [tv, movie] = useState("all");
  const [page, setPage] = useState(1);
  movie.toString();
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  const fetchPopularMovies = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.results);
        setPage(data.page);
      });
  };

  // fetching data from API

  useEffect(() => {
    fetchPopularMovies();
  }, [tv, page]);

  // scroll to top  function :)
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const topbtn = useRef();
  /////////////////  UI will start from here below 👇  //////////////////////
  return (
    <div className="rel">
      <br />

      <TopRated />
      {loaded.length && (
        <div className="container-fluid   py-3">
          <h1 className="text-center pop fs-4">
            Top Popular Movies and Tv Series 🔥
          </h1>
          <div className="row">
            {/* checking and rendering data from state */}
            {loaded.length < 0 ? (
              <h1>no data</h1>
            ) : (
              loaded.map((e, i) => (
                <div key={i} className="col-6 col-md-2 p-2 ">
                  <Link state={e} to={`/${e.id}`}>
                    <AnimationOnScroll
                      animatePreScroll={true}
                      offset={600}
                      animateOnce={true}
                      duration={1}
                      animateIn={
                        i % 2 !== 0 ? "animate__fadeInUp" : "animate__fadeInUp"
                      }
                    >
                      <MovieCard
                        title={e.title || e.name}
                        date={e.release_date || "Release Date is not available"}
                        type={e.media_type}
                        alt={"a"}
                        vote={e.vote_average}
                        movieImage={
                          e.poster_path
                            ? img_500 + "/" + e.poster_path
                            : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                        }
                        adult={e.adult}
                      />
                    </AnimationOnScroll>
                  </Link>
                </div>
              ))
            )}
          </div>
          <center className="">
            <button
              className={`btn btn-transparent mx-2 ${page === 1 ? "disabled" : ""
                } `}
              onClick={() => {
                setPage(page - 1);
                window.scrollTo({
                  top: 400,
                  behavior: "smooth",
                });
              }}
              type="button"
            >
              <BsFillArrowLeftSquareFill className="fs-2" />
            </button>
            Page:{page}
            <button
              className="btn btn-transparent"
              onClick={() => {
                setPage(page + 1);
                window.scrollTo({
                  top: 400,
                  behavior: "smooth",
                });
              }}
              type="button"
            >
              <BsFillArrowRightSquareFill className="fs-2" />
            </button>
          </center>
        </div>
      )}

      <div
        onClick={handleTop}
        role={"button"}
        id="top"
        ref={topbtn}
        className={"toTop  animated_animate"}
      >
        <BsFillArrowUpCircleFill className="arrowtop text-info" />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Popular;

// total_pages
// //

<Splide
  options={{
    perPage: isMobile ? 3 : 10,
    rewind: true,
    arrows: false,
  }}
  aria-label="My Favorite Images"
>
  {genres.map((e, i) => (
    <SplideSlide className="m-0 p-0" key={i}>
      <span
        role={"button"}
        className="badge d-sm-block p-2 mx-auto fs-6 rounded-pill text-bg-danger"
      >
        {e.name}
      </span>
    </SplideSlide>
  ))}
</Splide>;
