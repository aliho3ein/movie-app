import React, { useEffect, useState } from "react";
import instance from "../api/instance";
import style from "./../styles/components/related.module.scss";
import MovieCard from "./movieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const RelatedMovies = ({ genre }) => {
  const [result, setResult] = useState([]);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre]);

  const getData = () => {
    let list = [];
    for (const item of genre) {
      list.push(item.id);
    }
    instance(`/discover/movie?with_genres=${list.join(",")}`).then((res) =>
      setResult(res.data?.results)
    );
  };

  return (
    <div className={style.relatedMain}>
      <h2>
        <FontAwesomeIcon icon={faCircleChevronRight} className={style.icon} />
        More Like This
      </h2>
      <div className={style.showMore} onClick={() => setLeft(left - 300)}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div
        className={style.suggestItems}
        style={{ transform: `translateX(${left}px)` }}
      >
        {result?.map((item, i) => (
          <MovieCard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
