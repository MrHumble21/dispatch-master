import { useEffect, useState, useRef } from "react";
import "./App.css";
// import { isMobile } from "react-device-detect";
import Lottie from "lottie-react";
import { isMobile } from 'react-device-detect'
import loadingAnimation from './components/trending/Loader.json'
import {
    BsFillArrowUpCircleFill, BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill,
} from "react-icons/bs";
// animate css
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
// carousel
import MovieCard from "./components/card/MovieCard";
import { img_500 } from "./components/configs/config";
import { Link } from "react-router-dom";
import { genres } from "./genres";
import AccordionCustom from "./components/accordion/AccordionCustom";

const apiKey = "5a6077716d3404c52264bcf17f97a3d3";
function Main({ theme }) {
    const [content, setContent] = useState([]);
    const loaded = [...content];
    const [tv, movie] = useState("all");
    const [page, setPage] = useState(1);
    const [done, setDone] = useState(true);
    const [categoriesId, setCategoriesId] = useState(12)
    const [categoryName, setCategoryName] = useState("All")



    movie.toString();
    setTimeout(() => {
        setDone(false);
    }, 1500)
    const categories = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${categoriesId}`
    // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
    const fetchPopularMovies = async () => {
        await fetch(categories)
            .then((response) => response.json())
            .then((data) => {
                setContent(data.results);
                setPage(data.page);
            });
    };

    // fetching data from API

    useEffect(() => {
        fetchPopularMovies();
    }, [tv, page, categoriesId]);

    // scroll to top  function :)
    const handleTop = () => {
        window.scrollTo({
            top: 0, behavior: "smooth",
        });
    };

    const topbtn = useRef();
    document.body.style.overflow = done ? 'hidden' : 'scroll'
    /////////////////  UI will start from here below 👇  //////////////////////
    return (<div
        style={{
            overflowY: done ? 'hidden' : 'scroll',
            backgroundColor: theme ? "black" : "white"
        }}
        className="rel">
        <br />
        {done && <div className={`${theme ? "full-container-dark" :"full-container"}`}>
            <Lottie className={isMobile ? 'w-50' : "w-25"} animationData={loadingAnimation} />
        </div>}
        {/*<h1 className={'text-center'}>Category: {categoryName}</h1>*/}
        <AccordionCustom>

            <div className="accordion-item">
                <h2 className={`accordion-header my-1 ${theme ? 'bg-black':"bg-white"}`} id="flush-headingOne">
                    <center>
                        <button
                            style={{
                                backgroundColor: "#FF1E00"
                            }}
                            className={` btn px-5 py-3 collapsed ${isMobile ? 'fs-4' : 'fs-1'} text-white text-center`} type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            See All Categories
                        </button>
                    </center>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse ${isMobile ? 'fs-4' : 'fs-1'} collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <div className={`accordion-body  ${isMobile ? 'fs-4' : 'fs-1'} ${theme ?  'bg-dark':'bg-light'}`}>
                        {
                            genres.map((e, i) => (
                                <span
                                    key={i}
                                    style={{
                                        backgroundColor: "#F5EFE6",
                                        fontWeight: "normal"
                                    }}
                                    id={e.id}
                                    onClick={(event) => {
                                        setCategoryName(e.name)
                                        setCategoriesId(e.id)
                                        window.scrollTo({
                                            top: 0, behavior: "smooth",
                                        });

                                        document.querySelector("#flush-collapseOne").classList.toggle("show")
                                    }}
                                    role={'button'}
                                    className={`badge chover text-black d-inline-block ${isMobile ? " m-1" : "fs-4 m-2"}`}>{e.name}</span>

                            ))
                        }
                    </div>
                </div>
            </div>


        </AccordionCustom>
        {/*<TopRated/>*/}
        {loaded.length && (<div className="container-fluid   py-3">
            <h1
                className={` text-center pop fs-4 ${theme && "text-white"}`}
            >
                Top Popular Movies and Tv Series 🔥
            </h1>
            <div className="row">
                {/* checking and rendering data from state */}
                {loaded.length < 0 ? (<h1>no data</h1>) : (loaded.map((e, i) => (
                    <div key={i} className="col-6 col-md-2 p-2 ">
                        <Link state={e} to={`/${e.id}`}>
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
                                    movieImage={e.poster_path ? img_500 + "/" + e.poster_path : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
                                    adult={e.adult}
                                />
                            </AnimationOnScroll>
                        </Link>
                    </div>)))}
            </div>
            <center className="">
                <button
                    className={`btn btn-transparent mx-2 ${page === 1 ? "disabled" : ""} `}
                    onClick={() => {
                        setPage(page - 1);
                        window.scrollTo({
                            top: 400, behavior: "smooth",
                        });
                    }}
                    type="button"
                >
                    <BsFillArrowLeftSquareFill
                        style={{ color: "#FF1E00" }}
                        className="fs-2" />
                </button>
                Page:{page}
                <button
                    className="btn btn-transparent"
                    onClick={() => {
                        setPage(page + 1);
                        window.scrollTo({
                            top: 400, behavior: "smooth",
                        });
                    }}
                    type="button"
                >
                    <BsFillArrowRightSquareFill
                        style={{ color: "#FF1E00" }}
                        className="fs-2" />
                </button>
            </center>
        </div>)}

        <div
            onClick={handleTop}
            role={"button"}
            id="top"
            ref={topbtn}
            className={"toTop  animated_animate"}
        >
            <BsFillArrowUpCircleFill
                style={{ color: "#FF1E00" }}
                className="arrowtop " />
        </div>
        <br />
        <br />
        <br />
    </div>);
}

export default Main;

// total_pages
// //
//
// <Splide
//     options={{
//         perPage: isMobile ? 3 : 10,
//         rewind: true,
//         arrows: false,
//     }}
//     aria-label="My Favorite Images"
// >
//     {genres.map((e, i) => (
//         <SplideSlide className="m-0 p-0" key={i}>
//       <span
//           role={"button"}
//           className="badge d-sm-block p-2 mx-auto fs-6 rounded-pill text-bg-danger"
//       >
//         {e.name}
//       </span>
//         </SplideSlide>
//     ))}
// </Splide>;
