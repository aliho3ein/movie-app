import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import { getLocalStorage } from "../actions/localStorage";

const WatchLater = () => {
  const [result, setResult] = useState(getLocalStorage("watchList"));

  useEffect(() => {
    console.log("list");
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
