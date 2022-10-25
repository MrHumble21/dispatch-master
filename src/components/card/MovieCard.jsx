import React from "react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import "react-loading-skeleton/dist/skeleton.css";
import FlagIcon from "@mui/icons-material/Flag";
import { genres } from "../../genres";
import circle from "./circle.svg";

import moment from "moment/moment";

const MovieCard = ({
  movieImage,
  alt,
  title,
  date,
  vote,
  theme,
  country,
  margin,
  genre_ids = [],
}) => {
  const arr = [];

  if (genre_ids.length) {
    for (let index = 0; index < genre_ids.length; index++) {
      for (let j = 0; j < genres.length; j++) {
        if (genre_ids[index] === genres[j].id) {
          // setg(genres[j].name);
          arr.push(genres[j].name);
        }
      }
    }
  }
  const removedDuplicates = [...new Set(arr)];

  return (
    <div
      style={{
        backgroundColor: theme ? "black" : "white",
        minHeight: "100% !important",
      }}
      className={`custom_card ${
        theme && "bg-dark text-white"
      } m-0 p-0 m-height-card ${margin}`}
    >
      <div className="container   py-2 m-0 ">
        {
          <img
            className="w-100 m-0 p-0 rounded card_image"
            component="img"
            src={movieImage}
            alt={alt}
          />
        }
      </div>
      <div
      style={{
        minHeight:"100px"
      }}
      className="px-2  py-1">
        <Typography
          className={`m-0 ${theme && "text-white"}`}
          variant="h5"
          fontWeight={"bold"}
          color={"#2C061F"}
          fontSize={"0.8rem"}
          component="div"
        >
          {title.substring(0, 12) + (title.length > 14 ? "..." : "")}
        </Typography>

        <p
          style={{ fontSize: "15px", fontWeight: "bold", color: "#17223B" }}
          className={`m-0 p-0 ${theme && "text-white"}`}
        >
          {country ? (
            <>
              <FlagIcon /> Country: {country}
            </>
          ) : (
            moment(date).format("Do MMM  YYYY")
          )}
        </p>

        <Rating
          size="small"
          className="m-0"
          value={vote / 2}
          readOnly
          precision={0.5}
        />
      
<br />
        {removedDuplicates.map((e, i) => (
          <span key={i} className="badge mx-1 text-bg-light">
            {e.length ? e : "not found"}
          </span>
        ))}

        <img src={circle} alt="" />
      </div>
    </div>
  );
};

export default MovieCard;
