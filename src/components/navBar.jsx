import React, { useState } from "react";
import style from "./../styles/components/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [glass, setGlass] = useState(["50", "60"]);

  return (
    <nav className={style.navMain}>
      <div
        style={{ left: `${glass[0]}px`, width: `${glass[1]}px` }}
        className={style.navGlass}
      ></div>
      <Link to="/" onClick={() => setGlass(["50", "60"])}>
        Home
      </Link>
      <Link to="/filter" onClick={() => setGlass(["160", "65"])}>
        Genre
      </Link>
      <Link to="/" onClick={() => setGlass(["270", "70"])}>
        Movies
      </Link>
      <Link to="/watch-list" onClick={() => setGlass(["385", "70"])}>
        About
      </Link>
      <Link
        to="/watch-list"
        onClick={() => setGlass(["500", "0"])}
        title="watch list"
      >
        <FontAwesomeIcon className={style.icon} icon={faBookmark} />
      </Link>
    </nav>
  );
};

export default NavBar;
