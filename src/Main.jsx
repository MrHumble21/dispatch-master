/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from "react";
import "./App.css";
// import { isMobile } from "react-device-detect";
import Lottie from "lottie-react";
import { isMobile, BrowserView, MobileView } from "react-device-detect";
import loadingAnimation from "./components/trending/Loader.json";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";
// animate css
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
// carousel
import MovieCard from "./components/card/MovieCard";
import { img_500 } from "./components/configs/config";
import { Link } from "react-router-dom";
// genres carousel
import { Splide, SplideSlide } from "@splidejs/react-splide";
// genres carousel css
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { IoIosArrowDown } from "react-icons/io";
import TopRated from './components/TopRated/TopRated'
function Main({ theme }) {
  const [content, setContent] = useState([]);
  const loaded = [...content];
  const [tv, movie] = useState("all");
  const [page, setPage] = useState(1);
  const [done, setDone] = useState(true);
  //   urls
  const apiKey = process.env.REACT_APP_API_KEY;

  const adventureUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=12`;
  const actionUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`;

  const dramaUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=18`;

  const comedyUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=35`;

  const horrorUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`;
  const documentaryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=99`;
  const animation = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=16`;
  const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
  // genres
  const [actions, setActions] = useState([]);
  const [drama, setDrama] = useState([]);
  const [horror, setHorror] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [adventures, setAdventures] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [animations, setAnimation] = useState([]);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  movie.toString();
  setTimeout(() => {
    setDone(false);
  }, 500);

  // fetching data from API

  const fetchAction = async () => {
    await fetch(actionUrl)
      .then((res) => res.json())
      .then((data) => {
        setActions(data.results);
      });
  };

  const fetchAdventure = async () => {
    await fetch(adventureUrl)
      .then((res) => res.json())
      .then((data) => {
        setAdventures(data.results);
      });
  };

  const fetchDrama = async () => {
    await fetch(dramaUrl)
      .then((res) => res.json())
      .then((data) => {
        setDrama(data.results);
      });
  };

  const fetchhorror = async () => {
    await fetch(horrorUrl)
      .then((res) => res.json())
      .then((data) => {
        setHorror(data.results);
      });
  };

  const fetchDocumentary = async () => {
    await fetch(documentaryUrl)
      .then((res) => res.json())
      .then((data) => {
        setDocumentary(data.results);
      });
  };

  const fetchComedy = async () => {
    await fetch(comedyUrl)
      .then((res) => res.json())
      .then((data) => {
        setComedy(data.results);
      });
  };

  const fetchAnimation = async () => {
    await fetch(animation)
      .then((res) => res.json())
      .then((data) => {
        setAnimation(data.results);
      });
  };

  const fetchNowPlaying = async () => {
    await fetch(nowPlaying)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.results);
      });
  };
  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetchAction();
    fetchAdventure();
    fetchDrama();
    fetchhorror();
    fetchDocumentary();
    fetchComedy();
    fetchAnimation();
    fetchNowPlaying();
  }, []);

  //   actions && console.log(actions);

  // scroll to top  function :)
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const topbtn = useRef();
  document.body.style.overflow = done ? "hidden" : "scroll";
  /////////////////  UI will start from here below 👇  //////////////////////
  return (
    <div
      style={{
        overflowY: done ? "hidden" : "scroll",
        backgroundColor: theme ? "black" : "white",
        minHeight: "100vh",
      }}
      className="rel"
    >
      <br />
      {done && (
        <div className={`${theme ? "full-container-dark" : "full-container"}`}>
          <Lottie
            className={isMobile ? "w-50" : "w-25"}
            animationData={loadingAnimation}
          />
        </div>
      )}
      <TopRated />
      {/* Action movies start */}
      <div className="container-fluid my-4">
        <h1
          style={{
            color: !theme ? "black" : "white",
            marginLeft: "55px",
          }}
        >
          Action movies 
        </h1>
        <Splide
          options={{
            perPage: dimensions.width > 420 ? 7 : 2,
            rewind: true,
          }}
          aria-label="My Favorite Images"
        >
          {actions.map((action, index) => (
            <SplideSlide>
              <div
                style={{
                  alignItems: "stretch",
                }}
                className="container d-flex"
              >
                <Link state={action} to={`/${action.id}`}>
                  <AnimationOnScroll
                    animatePreScroll={true}
                    offset={1000}
                    initiallyVisible={true}
                    animateOnce={true}
                    duration={1}
                    animateIn={"animate__fadeInUp"}
                  >
                    <MovieCard
                      title={action.title || action.name}
                      date={
                        action.release_date || "Release Date is not available"
                      }
                      type={action.media_type}
                      alt={"a"}
                      theme={theme}
                      vote={action.vote_average}
                      movieImage={
                        action.poster_path
                          ? img_500 + "/" + action.poster_path
                          : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      adult={action.adult}
                    />
                  </AnimationOnScroll>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* Action movies end */}
      {/* Adventure start */}
      <div className="container-fluid  p-0 my-4">
        <h1
          style={{
            color: !theme ? "black" : "white",
            marginLeft: "55px",
          }}
        >
          Adventure movies 
        </h1>
        <Splide
          options={{
            perPage: dimensions.width > 420 ? 7 : 2,
            rewind: true,
            padding: "0",
          }}
          aria-label="My Favorite Images"
        >
          {adventures.map((action, index) => (
            <SplideSlide>
              <div
                style={{
                  alignItems: "stretch",
                }}
                className="container d-flex"
              >
                <Link state={action} to={`/${action.id}`}>
                  <AnimationOnScroll
                    animatePreScroll={true}
                    offset={1000}
                    initiallyVisible={true}
                    animateOnce={true}
                    duration={1}
                    animateIn={"animate__fadeInUp"}
                  >
                    <MovieCard
                      title={action.title || action.name}
                      date={
                        action.release_date || "Release Date is not available"
                      }
                      type={action.media_type}
                      alt={"a"}
                      theme={theme}
                      vote={action.vote_average}
                      movieImage={
                        action.poster_path
                          ? img_500 + "/" + action.poster_path
                          : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      adult={action.adult}
                    />
                  </AnimationOnScroll>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* Adventure end */}
      {/* horror start */}
      <div className="container-fluid my-4">
        <h1
          style={{
            color: !theme ? "black" : "white",
            marginLeft: "55px",
          }}
        >
          Horror movies 
        </h1>
        <Splide
          options={{
            perPage: dimensions.width > 420 ? 7 : 2,
            rewind: true,
          }}
          aria-label="My Favorite Images"
        >
          {horror.map((action, index) => (
            <SplideSlide>
              <div
                style={{
                  alignItems: "stretch",
                }}
                className="container d-flex"
              >
                <Link state={action} to={`/${action.id}`}>
                  <AnimationOnScroll
                    animatePreScroll={true}
                    offset={1000}
                    initiallyVisible={true}
                    animateOnce={true}
                    duration={1}
                    animateIn={"animate__fadeInUp"}
                  >
                    <MovieCard
                      title={action.title || action.name}
                      date={
                        action.release_date || "Release Date is not available"
                      }
                      type={action.media_type}
                      alt={"a"}
                      theme={theme}
                      vote={action.vote_average}
                      movieImage={
                        action.poster_path
                          ? img_500 + "/" + action.poster_path
                          : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      adult={action.adult}
                    />
                  </AnimationOnScroll>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* horror end */}
      {/* comedy start */}
      <div className="container-fluid my-4">
        <h1
          style={{
            color: !theme ? "black" : "white",
            marginLeft: "55px",
          }}
        >
          Comedy movies 
        </h1>
        <Splide
          options={{
            perPage: dimensions.width > 420 ? 7 : 2,
            rewind: true,
          }}
          aria-label="My Favorite Images"
        >
          {comedy.map((action, index) => (
            <SplideSlide>
              <div
                style={{
                  alignItems: "stretch",
                }}
                className="container d-flex"
              >
                <Link state={action} to={`/${action.id}`}>
                  <AnimationOnScroll
                    animatePreScroll={true}
                    offset={1000}
                    initiallyVisible={true}
                    animateOnce={true}
                    duration={1}
                    animateIn={"animate__fadeInUp"}
                  >
                    <MovieCard
                      title={action.title || action.name}
                      date={
                        action.release_date || "Release Date is not available"
                      }
                      type={action.media_type}
                      alt={"a"}
                      theme={theme}
                      vote={action.vote_average}
                      movieImage={
                        action.poster_path
                          ? img_500 + "/" + action.poster_path
                          : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      adult={action.adult}
                    />
                  </AnimationOnScroll>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* comedy end */}
      {/* drama start */}
      <div className="container-fluid my-4">
        <h1
          style={{
            color: !theme ? "black" : "white",
            marginLeft: "55px",
          }}
        >
          Drama movies 
        </h1>
        <Splide
          options={{
            perPage: dimensions.width > 420 ? 7 : 2,
            rewind: true,
          }}
          aria-label="My Favorite Images"
        >
          {drama.map((action, index) => (
            <SplideSlide>
              <div
                style={{
                  alignItems: "stretch",
                }}
                className="container d-flex"
              >
                <Link state={action} to={`/${action.id}`}>
                  <AnimationOnScroll
                    animatePreScroll={true}
                    offset={1000}
                    initiallyVisible={true}
                    animateOnce={true}
                    duration={1}
                    animateIn={"animate__fadeInUp"}
                  >
                    <MovieCard
                      title={action.title || action.name}
                      date={
                        action.release_date || "Release Date is not available"
                      }
                      type={action.media_type}
                      alt={"a"}
                      theme={theme}
                      vote={action.vote_average}
                      movieImage={
                        action.poster_path
                          ? img_500 + "/" + action.poster_path
                          : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      adult={action.adult}
                    />
                  </AnimationOnScroll>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* drama end */}
      {/* documentary start */}
      <div className="container-fluid my-4">
        <h1
          style={{
            color: !theme ? "black" : "white",
            marginLeft: "55px",
          }}
        >
          Documentary movies 
        </h1>
        <Splide
          options={{
            perPage: dimensions.width > 420 ? 7 : 2,
            rewind: true,
          }}
          aria-label="My Favorite Images"
        >
          {documentary.map((action, index) => (
            <SplideSlide>
              <div
                style={{
                  alignItems: "stretch",
                }}
                className="container d-flex"
              >
                <Link state={action} to={`/${action.id}`}>
                  <AnimationOnScroll
                    animatePreScroll={true}
                    offset={1000}
                    initiallyVisible={true}
                    animateOnce={true}
                    duration={1}
                    animateIn={"animate__fadeInUp"}
                  >
                    <MovieCard
                      title={action.title || action.name}
                      date={
                        action.release_date || "Release Date is not available"
                      }
                      type={action.media_type}
                      alt={"a"}
                      theme={theme}
                      vote={action.vote_average}
                      movieImage={
                        action.poster_path
                          ? img_500 + "/" + action.poster_path
                          : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      adult={action.adult}
                    />
                  </AnimationOnScroll>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {/* documentary end */}
      <div className="container-fluid my-4">
        <h1
          style={{
            color: !theme ? "black" : "white",
            marginLeft: "55px",
          }}
        >
          Animtions 
        </h1>
        <Splide
          options={{
            perPage: dimensions.width > 420 ? 7 : 2,
            rewind: true,
          }}
          aria-label="My Favorite Images"
        >
          {animations.map((action, index) => (
            <SplideSlide>
              <div
                style={{
                  alignItems: "stretch",
                }}
                className="container d-flex"
              >
                <Link state={action} to={`/${action.id}`}>
                  <AnimationOnScroll
                    animatePreScroll={true}
                    offset={1000}
                    initiallyVisible={true}
                    animateOnce={true}
                    duration={1}
                    animateIn={"animate__fadeInUp"}
                  >
                    <MovieCard
                      title={action.title || action.name}
                      date={
                        action.release_date || "Release Date is not available"
                      }
                      type={action.media_type}
                      alt={"a"}
                      theme={theme}
                      vote={action.vote_average}
                      movieImage={
                        action.poster_path
                          ? img_500 + "/" + action.poster_path
                          : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      adult={action.adult}
                    />
                  </AnimationOnScroll>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {loaded.length && (
        <div className="container-fluid   py-3">
          <h1 className={` text-center pop fs-1 ${theme && "text-white"}`}>
            🔥 New movies in the Theaters | New Releases 🔥
          </h1>
          <br />
          <div className="row ">
            {/* checking and rendering data from state */}
            {loaded.length < 0 ? (
              <h1>no data</h1>
            ) : (
              loaded.map((e, i) => (
                <div key={i} className="col-6 d-flex  col-md-2 p-2 ">
                  <Link
                    style={{
                      height: "100%",
                    }}
                    state={e}
                    to={`/${e.id}`}
                  >
                    <AnimationOnScroll
                      animatePreScroll={true}
                      offset={1000}
                      initiallyVisible={true}
                      animateOnce={true}
                      duration={1}
                      animateIn={"animate__fadeInUp"}
                    >
                      <MovieCard
                        title={e.title || e.name}
                        date={e.release_date || "Release Date is not available"}
                        type={e.media_type}
                        alt={"a"}
                        theme={theme}
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
        </div>
      )}

      <div
        onClick={handleTop}
        role={"button"}
        id="top"
        ref={topbtn}
        className={"toTop  animated_animate"}
      >
        <BsFillArrowUpCircleFill
          style={{ color: "#FF1E00" }}
          className="arrowtop "
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Main;

// total_pages
// //
