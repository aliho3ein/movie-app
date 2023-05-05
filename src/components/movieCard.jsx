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

const MovieCard = ({ data }) => {
  const [saved, setSaved] = useState();
  // const id = data.id;

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
  const saveToWatchList = () => {
    list.push(data);
    setSaved(true);
    setLocalStorage("watchList", list);
    alertMassage("Added to watch list");
  };

  /** remove from watchList */
  const removeFromWatchList = () => {
    const newList = list.filter((film) => film.id !== data.id);
    setSaved(false);
    setLocalStorage("watchList", newList);
    alertMassage("Removed from watch list", "info");
  };

  return (
    <div className={style.card}>
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
            <span className={style.title}>overView</span>
            {data.overview.slice(0, 50)}...
          </p>
          <div className={style.rating}>{setVote(data.vote_average)}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

/**
 * adult
: 
false
backdrop_path
: 
"/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg"
genre_ids
: 
(3) [28, 12, 878]
id
: 
640146
original_language
: 
"en"
original_title
: 
"Ant-Man and the Wasp: Quantumania"
overview
: 
"Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible."
popularity
: 
6819.399
poster_path
: 
"/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
release_date
: 
"2023-02-15"
title
: 
"Ant-Man and the Wasp: Quantumania"
video
: 
false
vote_average
: 
6.5
vote_count
: 
2108
 */
