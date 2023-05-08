import React, { useContext, useEffect } from "react";
import instance from "../api/instance";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import style from "./../styles/components/genre.module.scss";
import MovieContext from "../context/movieContext";

const GenresList = () => {
  const { dispatch } = useContext(MovieContext);

  const { isLoading, isError, data } = useQuery("genre", async () => {
    dispatch({ type: "LOADING_ON" });
    return instance("/genre/movie/list").then((res) => {
      dispatch({ type: "LOADING" });
      return res.data;
    });
  });

  useEffect(() => {
    document.title = "Genres | Movie-app";
  }, []);

  if (isError) {
    return <h2>Error</h2>;
  }

  if (isLoading) {
    return <h2> loading</h2>;
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
