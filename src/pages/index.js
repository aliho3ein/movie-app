import React, { useEffect, useState } from "react";
import Header from "./../components/header.jsx";
import Footer from "./../components/footer.jsx";
import NavBar from "./../components/navBar.jsx";
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

  useEffect(() => {
    instance.get(`/discover/movie?page=${page}`).then((res) => {
      setResult(res.data.results);
    });
  }, [page]);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar />
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
        <Link onClick={goTop} to={`?page=${page > 1 ? parseInt(page) - 1 : 1}`}>
          <FontAwesomeIcon icon={faAngleLeft} /> Previous
        </Link>
        <Link onClick={goTop} to={`?page=${parseInt(page) + 1}`}>
          Next <FontAwesomeIcon icon={faAngleRight} />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
