import React from "react";
import style from "./../styles/components/navbar.module.scss";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ data, reset }) => {
  const navigate = useNavigate();

  const openMovie = () => {
    navigate(`/movie/${data.id}`);
    reset();
  };

  return (
    <div
      onClick={openMovie}
      className={style.searchResultCard}
      style={{
        "--bgImg": data.poster_path
          ? `url(https://image.tmdb.org/t/p/w500${data.poster_path})`
          : "url('https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/original.png')",
      }}
      title={data.title}
    >
      <h2>
        {data.title.slice(0, 30)} ({data.release_date.slice(0, 4) || "unknown"})
      </h2>
    </div>
  );
};

export default SearchCard;
