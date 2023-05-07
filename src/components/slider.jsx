import React from "react";
import style from "./../styles/components/header.module.scss";
import GetGenre from "./genre";

const Slider = ({ data }) => {
  return (
    <div
      className={style.slider}
      style={{
        "--bgImg": data?.backdrop_path
          ? `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path})`
          : "url('https://www.howtogeek.com/wp-content/uploads/2020/02/netflix_logo.png?height=200p&trim=2,2,2,2')",
      }}
    >
      <div className={style.slidInfo}>
        <h2>
          {data.title} ({data.release_date?.slice(0, 4)})
        </h2>
        <p className={style.genres}>
          {data.genre_ids?.map((data, i) => (
            <GetGenre key={i} id={data} />
          ))}
        </p>
        <span>Over view</span>
        <p>{data.overview?.slice(0, 300)}...</p>
      </div>
    </div>
  );
};

export default Slider;
