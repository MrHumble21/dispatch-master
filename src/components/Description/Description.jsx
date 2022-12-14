import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { isMobile } from 'react-device-detect'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from "moment/moment";
import { Link } from "react-router-dom";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import { AiFillYoutube } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import MovieCard from "../card/MovieCard";
import { img_500 } from "../configs/config";
import notFound from "./404.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
function Description({ theme }) {
  const location = useLocation();
  const data = location.state;
  const [trailersId, setTrailers] = useState();
  const [movie, setmovie] = useState();
  const [recommended, setRecommended] = useState([]);
  const [done, setDone] = useState(false);
 const apiKey = process.env.REACT_APP_API_KEY
  setTimeout(() => {
    setDone(false);
  }, 1000)
  let url = `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=${apiKey}&language=en-US`;
  const genres = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${data.id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((result) => setmovie(result));
  };
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((id) => {
        setTrailers(id.results[0].key);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${data.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((rec) => setRecommended(rec.results));
    genres();
  }, [data.id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.body.style.overflow = done ? 'hidden' : 'scroll'

  return (
    <div style={{
      backgroundColor: theme ? 'black' : 'white', minHeight: '100vh'
    }}>
      <div className="container  p-3">
    
        <div className="row py-5">
          <div className="col-md-6 col-12  p-4 d-flex justify-content-center">
            <img
              className="image-fluid animate__animated  h-100 card_image rounded w-100"
              style={{
                objectFit: "cover",
              }}
              src={`https://image.tmdb.org/t/p/w500//${data.backdrop_path}`}
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 py-md-5">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className={`fs-1 ${theme ? 'text-white' : 'text-black'}`}>
                    {data.original_title || data.name}
                  </h2>
                  <p className={`m-0 fs-5 ${theme ? 'text-white' : 'text-black'}  `}>
                    <HistoryToggleOffIcon style={{ color: "red", marginRight: "8px", marginBottom: '8px' }} />

                    {moment(data.first_air_date).format("MMMM Do   YYYY") ||
                      moment(data.release_date).format("MMMM Do   YYYY") ||
                      "Release Date is not available"}
                  </p>
                </div>

              </div>
              <p className={`m-0 ${theme ? 'text-white' : 'text-black'}`}>Rating: {data.vote_average / 2}</p>
              <Rating name="read-only" value={data.vote_average / 2} readOnly />
              <p className={`{ ${theme ? 'text-white' : 'text-black'}`}>{data.overview || <Skeleton count={5} />}</p>
              <p className={`{fs-5 ${theme ? 'text-white' : 'text-black'}`}>Genres:</p>
              {movie &&
                movie.genres.map((e, i) => (
                  <span
                    key={i}
                    className="badge rounded-pill fs-5 p-3 mb-4 mx-1 text-bg-light"
                  >
                    {e.name}
                  </span>
                ))}

              <a
                target="blank"
                href={
                  !trailersId
                    ? `https://www.youtube.com/results?search_query=${data.original_title || data.name
                    }`
                    : `https://www.youtube.com/watch?v=${trailersId}`
                }
              >
                <button className="custom-btn w-100">
                  <AiFillYoutube className="fs-1 mx-2" /> Watch trailer on
                  Youtube
                </button>
              </a>
            </div>
          </div>
        </div>
        <h1
          className={`text-center {fs-5 ${theme ? 'text-white' : 'text-black'}`}
        >Recommended Movies & TV Series</h1>
        {recommended &&
          <div className="row mt-4">
            <div className="col-sm-12 ">
              <Splide
                options={{
                  perPage: isMobile ? 2 : 5,
                  rewind: true,
                }}
                aria-label="My Favorite Images"
              >
                {recommended &&
                  recommended.map((e, i) => (
                    <SplideSlide key={i}>
                      <Link state={e} to={`/${e.id}`}>
                        <MovieCard
                          margin={"mx-2 "}
                          title={e.title || e.name}
                          date={e.release_date || "Release Date is not available"}
                          type={e.media_type}
                          alt={"a"}
                          theme={theme}
                          vote={e.vote_average}
                          genre_ids={e.genre_ids}
                          movieImage={
                            e.poster_path
                              ? img_500 + "/" + e.poster_path
                              : notFound
                          }
                          adult={e.adult}
                        />
                      </Link>
                    </SplideSlide>
                  ))}
              </Splide>
            </div>
          </div>
        }
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Description;
