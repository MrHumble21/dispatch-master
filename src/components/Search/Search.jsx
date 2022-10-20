import React, { useState, useEffect } from "react";
import MovieCard from "../card/MovieCard";
import s from "./css.module.css";
import { Link } from "react-router-dom";
import { img_500 } from "../configs/config";
import notFound from "./404.png";
import { useDebounce } from "../../hooks/useDebounce";
function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [res, setRes] = useState([]);
  const [id, setId] = useState("");
  const debouncedSearchText = useDebounce(searchInput, 600);
  id.toLowerCase()
  const fetchdata = async () => {
    if (debouncedSearchText !== "") {
      let url = `https://api.themoviedb.org/3/search/tv?api_key=5a6077716d3404c52264bcf17f97a3d3&language=en-US&query=${debouncedSearchText}&page=${1}`;
      await fetch(url)
        .then((data) => data.json())
        .then((response) => {
          setRes(response);
          setId(response.results);
        });
    } else {
      setRes([]);
    }
  };

  useEffect(() => {
    console.log("Debounced", debouncedSearchText);
    fetchdata();
    console.log("Res", res);
  }, [debouncedSearchText]);




  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <div className="container p-3">
        <center>
          <h2>You can search movies from here</h2>
        </center>
        <div className="d-flex justify-content-center align-items-center">
          <input
            className={` form-control p-2 ${s.inp}`}
            type="search"
            name=""
            placeholder="Search a movie..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            id=""
          />

        </div>

        <div className="container">
          {res?.results?.length === 0 && debouncedSearchText?.length !== 0 && (
            <h1 className="text-center">Not found😔</h1>
          )}
          <div className="row">
            {res.results &&
              res.results.map((e, i) => (
                <div key={i} className="col-6 col-md-3 p-2">
                  <Link state={e} to={`/${e.id}`}>
                    <MovieCard
                      title={e.title || e.name}
                      date={e.release_date || "Release Date is not available"}
                      type={e.media_type}
                      alt={"a"}
                      vote={e.vote_average}
                      country={e.origin_country[0]}
                      genre_ids={e.genre_ids}
                      movieImage={
                        e.poster_path ? img_500 + "/" + e.poster_path : notFound
                      }
                      adult={e.adult}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Search;

// `https://api.themoviedb.org/3/search/tv?api_key=5a6077716d3404c52264bcf17f97a3d3&language=en-US&query=spiderman&page=1`;
