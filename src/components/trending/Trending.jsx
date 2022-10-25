import { useEffect, useState } from "react";
import MovieCard from "../card/MovieCard";
import { img_500 } from "../configs/config";
import { Link } from "react-router-dom";
import React from 'react'
import Lottie from "lottie-react";
import { isMobile } from 'react-device-detect'
import loadingAnimation from './Loader.json'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import TopRated from "../TopRated/TopRated";
const apiKey = process.env.REACT_APP_API_KEY;
function Trending({ theme }) {
  const [content, setContent] = useState([]);
  const [done, setDone] = useState(false);
  const [tv, movie] = useState("all");
  const handleMovie = () => {
    movie("movie");
  };
  const handleTv = () => {
    movie("tv");
  };

  setTimeout(() => {
    setDone(false);
  }, 500)
  const url = `https://api.themoviedb.org/3/trending/${tv}/week?api_key=${apiKey}
  `;
  const fetchPopularMovies = async () => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.results);
      });
  };

  useEffect(() => {
    fetchPopularMovies();
  }, [tv]);
  document.body.style.overflow = done ? 'hidden' : 'scroll'
  document.body.style.backgroundColor = theme ? 'black' : 'white  '

  return (
    <>
      <br />
      <br />
      {
        done && <div className={`${theme ? "full-container-dark" :"full-container"}`}>
          <Lottie className={isMobile ? 'w-75' : "w-25"} animationData={loadingAnimation} />
        </div>}

      {content.length && (
        <div
          style={{
            backgroundColor: theme ? "black" : "white"
          }}
          className="container-fluid   mt-5 py-3">
          <center>
            <h3
              style={{
                color: theme ? 'black !important' : 'white !important'
              }}

            >{tv === "all" ? "Not Sorted" : `Sorted by ${tv}`}</h3>

            {/* <Button onClick={handleMovie}>Movies</Button>
              <Button onClick={handleTv}>Tv Series</Button>
              <Button onClick={handleTv}>All</Button> */}
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                onClick={() => movie("all")}
                className="btn btn-dark"
              >
                All
              </button>
              <button
                onClick={handleMovie}
                type="button"
                className="btn btn-dark"
              >
                Movies
              </button>
              <button onClick={handleTv} type="button" className="btn btn-dark">
                Tv Series
              </button>
            </div>
          </center>
          <div className="row">
            {content.length < 0 ? (
              <h1>no data</h1>
            ) : (
              content.map((e, i) => (
                <div key={i} className="col-6 col-md-2 p-2 ">
                  <AnimationOnScroll
                    animatePreScroll={true}
                    initiallyVisible={true}
                    offset={600}
                    animateOnce={true}
                    duration={1}
                    animateIn={
                      i % 2 !== 0 ? "animate__fadeInUp" : "animate__fadeInUp"
                    }
                  >
                    <Link state={e} to={`/${e.id}`}>
                      <MovieCard
                        title={e.title || e.name}
                        date={e.release_date || "Release Date is not available"}
                        type={e.media_type}
                        alt={"a"}
                        theme={theme}
                        vote={e.vote_average}
                        movieImage={img_500 + "/" + e.poster_path}
                        adult={e.adult}
                      />
                    </Link>
                  </AnimationOnScroll>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Trending;

// total_pages
