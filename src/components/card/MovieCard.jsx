import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import "react-loading-skeleton/dist/skeleton.css";
import FlagIcon from "@mui/icons-material/Flag";
import { genres } from "../../genres";
import circle from './circle.svg'

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
    console.log({ card: theme })
    const removedDuplicates = [...new Set(arr)];

    return (
        <div
            style={{
                backgroundColor: theme ? "black" : "white"

            }}
            className={`custom_card ${theme && "bg-dark text-white"} m-0 m-height-card ${margin}`}>
            <div className="container   py-2 m-0 ">
                {<img
                    className="w-100 rounded card_image"
                    component="img"
                    src={movieImage}
                    alt={alt}
                />}
            </div>
            <CardContent className="px-2 py-1">
                <Typography
                    className={`m-0 ${theme && "text-white-50"}`}
                    variant="h5"
                    fontWeight={"bold"}
                    color={"#2C061F"}
                    fontSize={"1.01rem"}
                    component="div"
                >
                    {title}
                </Typography>

                <p style={{ fontSize: "11px", color: "#17223B" }}

                    className={`m-0 p-0 ${theme && "text-white-50"}`}
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
                <div className={'my-auto'}>
                    <div
                        className={`${vote / 2 > 2.5 ? "bg-success" : "bg-danger"} text-white  rounded d-inline-block p-2`}
                    >{(vote / 2).toFixed(1)}</div>


                </div>

                {removedDuplicates.map((e, i) => (
                    <span key={i} className="badge mx-1 text-bg-light">
                        {e.length ? e : "not found"}
                    </span>
                ))}

                <img src={circle} alt='' />

            </CardContent>
        </div>
    );
};

export default MovieCard;
