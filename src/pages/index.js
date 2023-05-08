import React, { useContext, useEffect, useState } from "react";
import Header from "./../components/header.jsx";
import Filter from "./../components/filter.jsx";
import MovieCard from "./../components/movieCard.jsx";
import instance from "../api/instance.js";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { genreName } from "../components/genre.jsx";
import MovieContext from "../context/movieContext.js";

const Home = () => {
  const { dispatch } = useContext(MovieContext);
  const [result, setResult] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const genre = searchParams.get("genre") || "";
  const page = searchParams.get("page") || 1;
  const sort = searchParams.get("sort") || "popularity.desc";

  useEffect(() => {
    document.title = genre ? genreName(genre) : "Movie-App";
    dispatch({ type: "LOADING_ON" });
    instance
      .get(`/discover/movie?page=${page}&sort_by=${sort}&with_genres=${genre}`)
      .then((res) => {
        setResult(res.data.results);
        dispatch({ type: "LOADING" });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, sort]);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header data={result.slice(0, 3)} />
      <main className="mainContent">
        <Filter genre={genre} />
        <div className="content">
          {result.map((item, index) => {
            return <MovieCard key={index} data={item} />;
          })}
        </div>
      </main>
      <div className="pagination">
        <Link
          onClick={goTop}
          // eslint-disable-next-line eqeqeq
          className={page == 1 ? "deActive" : ""}
          to={`?page=${page > 1 ? parseInt(page) - 1 : 1}&sort=${sort}${
            genre && `&genre=${genre}`
          }`}
        >
          <FontAwesomeIcon icon={faAngleLeft} /> Previous
        </Link>
        <Link
          onClick={goTop}
          to={`?page=${parseInt(page) + 1}&sort=${sort}${
            genre && `&genre=${genre}`
          }`}
        >
          Next <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </>
  );
};

export default Home;
