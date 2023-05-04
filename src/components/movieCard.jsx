import React from "react";
import style from "./../styles/components/movieCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import {
  faBookmark,
  faStar as unStar,
} from "@fortawesome/free-regular-svg-icons";

const MovieCard = () => {
  return (
    <div className={style.card}>
      <div className={style.movieCard}>
        <div className={style.front}></div>
        <div className={style.back}>
          <div className={style.save}>
            <FontAwesomeIcon className={style.icon} icon={faBookmark} />
          </div>
          <h2 className={style.name}>Interstellar</h2>
          <span className={style.date}>20 Mai 2019</span>
          <p>Science, Thriller, Mystery</p>
          <p>
            <span>Christopher nolan</span>
            Director
          </p>
          <div className={style.rating}>
            <FontAwesomeIcon
              icon={faStar}
              className={style.icon}
              style={{ "--num": "1" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={style.icon}
              style={{ "--num": "2" }}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={style.icon}
              style={{ "--num": "3" }}
            />
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className={style.icon}
              style={{ "--num": "4" }}
            />
            <FontAwesomeIcon
              icon={unStar}
              className={style.icon}
              style={{ "--num": "5" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
