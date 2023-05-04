import React from "react";
import style from "./../styles/components/navbar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.navMain}>
      <ul>
        <li>Home</li>
        <li>Genre</li>
        <li>Movies</li>
        <li>About</li>
        <li>watchLater</li>
      </ul>
    </nav>
  );
};

export default NavBar;
