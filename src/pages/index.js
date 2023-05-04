import React from "react";
import Header from "./../components/header.jsx";
import Footer from "./../components/footer.jsx";
import NavBar from "./../components/navBar.jsx";
import Filter from "./../components/filter.jsx";
import MovieCard from "./../components/movieCard.jsx";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <main className="mainContent">
        <Filter />
        <div className="content">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </main>
      <div className="pagination">fd</div>
      <Footer />
    </>
  );
};

export default Home;
