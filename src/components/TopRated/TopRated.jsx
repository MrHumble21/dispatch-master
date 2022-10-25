import React, { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
// themes
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import { isMobile } from "react-device-detect";
import { Rating } from "@mui/material";
import moment from "moment/moment";

const apiKey = process.env.REACT_APP_API_KEY
let api = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

const TopRated = () => {
  const [top_rated, set_top_rated] = useState([]);
  const fetchData = async () => {
    await fetch(api)
      .then((response) => response.json())
      .then((data) => set_top_rated(data.results));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mx-2">
      <Splide
        options={{
          type: 'loop',
          padding: '-5rem',
        }}
        aria-label="My Favorite Images"
      >
        {top_rated.length > 0 &&
          top_rated.map((e, i) => (
            <SplideSlide key={i}>
              <Link state={e} to={`/${e.id}`}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${e.backdrop_path})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                    minHeight: !isMobile ? "300px" : "250px",
                    boxShadow:
                      "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  }}
                  className=" p-0 rounded-4"
                >
                  <div
                    style={{
                      minHeight: !isMobile ? "450px" : "250px",
                    }}
                    className="w-100  m-0 p-5 gradient"
                  >
                    <br />
                    <br />
                    <br />

                    <h1
                      style={{
                        fontSize: isMobile ? "20px" : "75px",
                      }}
                      className="text-white text-center"
                    >
                      {e.title}
                    </h1>
                    <h4 className="text-white text-center">{ moment(e.release_date).format("Do MMM  YYYY")}</h4>
                    <br />
                    <center>
                      <span className="badge p-2 text-bg-light">
                        <Rating
                          name="read-only"
                          value={e.vote_average / 2}
                          readOnly
                        />
                      </span>
                    </center>
                  </div>
                </div>
              </Link>
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default TopRated;
