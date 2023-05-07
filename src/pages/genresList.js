import React, { useEffect } from "react";
import instance from "../api/instance";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import style from "./../styles/components/genre.module.scss";

const GenresList = () => {
  const { isLoading, isError, data } = useQuery("genre", async () => {
    return instance("/genre/movie/list").then((res) => res.data);
  });

  useEffect(() => {
    document.title = "Genres | Movie-app";
  }, []);

  if (isError) {
    return <h2>Error</h2>;
  }

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <main className={style.genreMain}>
      {data.genres.map((genre, i) => {
        return (
          <Link key={i} className={style.genreCard} to={`/?genre=${genre.id}`}>
            {genre.name}
          </Link>
        );
      })}
    </main>
  );
};

export default GenresList;
