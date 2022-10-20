import { useEffect, useState } from "react";
import MovieCard from "../card/MovieCard";
import { img_500 } from "../configs/config";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import TopRated from "../TopRated/TopRated";
const apiKey = "68ad6ca2623e9150d8fc6fa4921a6bf0";
function Trending() {
  const [content, setContent] = useState([]);
  const [tv, movie] = useState("all");
  const handleMovie = () => {
    movie("movie");
  };
  const handleTv = () => {
    movie("tv");
  };

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

  return (
    <>
      <br />
      <br />

      {content.length && (
        <div className="container-fluid   mt-5 py-3">
          <center>
            <h3>{tv === "all" ? "Not Sorted" : `Sorted by ${tv}`}</h3>

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
