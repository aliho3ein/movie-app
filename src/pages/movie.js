import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../api/instance";
import style from "./../styles/components/movie.module.scss";
import ConvertDate from "../components/changeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import RelatedMovies from "../components/relatedMovies";
import { circleColor, timeCalculator } from "../actions";

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = () => {
    instance(`/movie/${id}`).then((res) => setData(res.data));
    console.log(data);
  };

  const date = data.release_date?.split("-") || [];

  const time = timeCalculator(data?.runtime);

  return (
    <main className="mainContent">
      <div className={style.mainMovie}>
        <div
          className={style.movieHeadMask}
          style={{
            "--bgImg": data?.backdrop_path
              ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path})`
              : "url('https://www.howtogeek.com/wp-content/uploads/2020/02/netflix_logo.png?height=200p&trim=2,2,2,2')",
          }}
        ></div>
        <div className={style.headInfo}>
          <div
            className={style.poster}
            style={{
              "--posterImg": data?.poster_path
                ? `url(https://image.tmdb.org/t/p/w500/${data?.poster_path})`
                : "url('https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/original.png')",
            }}
          ></div>
          <div className={style.detail}>
            <h2>{data?.original_title}</h2>
            <p className={style.firstParagraph}>
              {date[1]}. {<ConvertDate num={date[1]} />} {date[0]} (
              {data.original_language?.toUpperCase()})
              <FontAwesomeIcon icon={faCirclePlay} className={style.icon} />
              {data.genres?.map((item, i) => (
                <span className={style.genre} key={i}>
                  {item.name}
                </span>
              ))}
              <FontAwesomeIcon icon={faClock} className={style.icon} />
              {time[0]}h {time[1]}m
            </p>

            <div className={style.review}>
              <div
                className={style.circle}
                style={{
                  "--color": `${circleColor(data?.vote_average)}`,
                  "--deg": `${data?.vote_average * 36}deg`,
                }}
              >
                <h2>{data.vote_average?.toFixed(1)}</h2>
              </div>
              <span> User Rating</span>
            </div>

            <i>{data?.tagline}</i>

            <h3>Handlung</h3>
            <p className={style.overViewParagraph}>{data?.overview}</p>

            <h3>Production</h3>
            <div className={style.production}>
              {data.production_companies?.map((item, i) => {
                return (
                  <img
                    src={
                      item.logo_path
                        ? `https://image.tmdb.org/t/p/w500/${item.logo_path}`
                        : "./../assets/images/safari-pinned-tab.svg"
                    }
                    alt={item.name}
                    title={item.name}
                    key={i}
                    className={style.producerImg}
                  />
                );
              })}
              <a
                className={style.homepage}
                href={data?.homepage}
                target="_blank"
                rel="noreferrer"
              >
                HomePage
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className={style.icon}
                />
              </a>
            </div>
          </div>
        </div>

        {data.genres && <RelatedMovies genre={data.genres} />}
      </div>
    </main>
  );
};

export default Movie;
