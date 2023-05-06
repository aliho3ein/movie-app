import React, { useEffect, useState } from "react";
import style from "./../styles/components/movieCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConvertDate from "./changeData";
import GetGenre from "./genre";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as marked } from "@fortawesome/free-solid-svg-icons";
import { setVote } from "../actions/review";
import { getLocalStorage, setLocalStorage } from "../actions/localStorage";
import { alertMassage } from "../actions/alerts";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  const [saved, setSaved] = useState();

  /** create Date */
  const date = data.release_date?.split("-") || ["unknown Date", "", ""];

  let list = getLocalStorage("watchList") || [];

  useEffect(() => {
    setSaved(list.find((film) => film.id === data.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** */
  const genre = data.genre_ids?.slice(0, 3).map((item, index) => {
    return <GetGenre key={index} id={item} />;
  });
  /** Save to watchList */
  const saveToWatchList = (e) => {
    list.push(data);
    setSaved(true);
    setLocalStorage("watchList", list);
    alertMassage("Added to watch list");
  };

  /** remove from watchList */
  const removeFromWatchList = (e) => {
    const newList = list.filter((film) => film.id !== data.id);
    setSaved(false);
    setLocalStorage("watchList", newList);
    alertMassage("Removed from watch list", "info");
  };

  return (
    <Link to={`/movie/${data.id}`} className={style.card}>
      <div className={style.movieCard}>
        <div
          className={style.front}
          style={{
            "--posterImg": data.poster_path
              ? `url(https://image.tmdb.org/t/p/w500${data.poster_path})`
              : "url('https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/original.png')",
          }}
        ></div>
        <div className={style.back}>
          {saved ? (
            <div className={style.save} onClick={removeFromWatchList}>
              <FontAwesomeIcon className={style.icon} icon={marked} />
            </div>
          ) : (
            <div className={style.save} onClick={saveToWatchList}>
              <FontAwesomeIcon className={style.icon} icon={faBookmark} />
            </div>
          )}

          <h2 className={style.name}>{data.title.slice(0, 20)}</h2>
          <span className={style.date}>
            {date[2]} {<ConvertDate num={date[1]} />} {date[0]}
          </span>
          <p className={style.genre}>{genre}</p>
          <p>
            <span className={style.title}>Over View</span>
            {data.overview.slice(0, 50)}...
          </p>
          <div className={style.rating}>{setVote(data.vote_average)}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
