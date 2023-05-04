import React from "react";
import style from "./../styles/components/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={style.navMain}>
      <ul>
        <li>Home</li>
        <li>
          <Link to="/filter">Genre</Link>
        </li>
        <li>Movies</li>
        <li>About</li>
        <li title="watch list">
          <FontAwesomeIcon className={style.icon} icon={faBookmark} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
