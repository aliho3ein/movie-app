import React, { useEffect, useState } from "react";
import Header from "./../components/header.jsx";
import Filter from "./../components/filter.jsx";
import MovieCard from "./../components/movieCard.jsx";
import instance from "../api/instance.js";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [result, setResult] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") || 1;
  const sort = searchParams.get("sort") || "popularity.desc";

  useEffect(() => {
    instance.get(`/discover/movie?page=${page}&sort_by=${sort}`).then((res) => {
      setResult(res.data.results);
    });
  }, [page, sort]);

  //&primary_release_date.gte=2023

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <main className="mainContent">
        <Filter />
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
          className={page == 1 && "deActive"}
          to={`?page=${page > 1 ? parseInt(page) - 1 : 1}&sort=${sort}`}
        >
          <FontAwesomeIcon icon={faAngleLeft} /> Previous
        </Link>
        <Link onClick={goTop} to={`?page=${parseInt(page) + 1}&sort=${sort}`}>
          Next <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
    </>
  );
};

export default Home;
