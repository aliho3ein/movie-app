import React, { useEffect } from "react";
import MovieCard from "../components/movieCard";
import { getLocalStorage } from "../actions/localStorage";

const WatchLater = () => {
  const result = getLocalStorage("watchList");

  useEffect(() => {
    document.title = "Watch-List | Movie-app";
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
