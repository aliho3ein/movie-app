import React, { useContext, useEffect } from "react";
import MovieCard from "../components/movieCard";
import { getLocalStorage } from "../actions/localStorage";
import MovieContext from "./../context/movieContext";

const WatchLater = () => {
  const result = getLocalStorage("watchList");
  const { dispatch } = useContext(MovieContext);

  useEffect(() => {
    document.title = "Watch-List | Movie-app";
    dispatch({ type: "LOADING" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main className="mainContent">
        <div className="content">
          {result.map((item, index) => {
            return <MovieCard key={index} data={item} />;
          })}
        </div>
      </main>
    </>
  );
};

export default WatchLater;
