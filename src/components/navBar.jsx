import React, { useRef, useState } from "react";
import style from "./../styles/components/navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faSearch,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import instance from "../api/instance";
import SearchCard from "./searchCard";

const NavBar = () => {
  const [glass, setGlass] = useState(["50", "60"]);
  const [input, setInput] = useState("");
  const [searchResult, setResult] = useState([]);
  const bergerRef = useRef(null);
  const navBar = useRef(null);

  /** Search Movie */
  const getMovies = () => {
    instance
      .get(`/search/movie?query=${input}&sort_by=POPULARITY.desc`)
      .then((res) => {
        setResult(res.data.results);
      });
  };

  /** clear Input */
  const resetInput = () => {
    setInput("");
    setResult([]);
  };

  /** burgerNav */
  const burgerNav = (e) => {
    bergerRef.current.classList.toggle("activeBurger");
    navBar.current.classList.toggle("activeNavbar");
  };

  /** nav Click */
  const clickHandler = (left, width) => {
    setGlass([left, width]);
    burgerNav();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={style.burgerMenu} ref={bergerRef} onClick={burgerNav}>
        <div></div>
      </div>
      <nav className={style.navMain} ref={navBar}>
        <div
          style={{ left: `${glass[0]}px`, width: `${glass[1]}px` }}
          className={style.navGlass}
        ></div>
        <Link to="/" onClick={() => clickHandler("48", "62")}>
          Home
        </Link>
        <Link to="/genre" onClick={() => clickHandler("160", "65")}>
          Genre
        </Link>
        <Link to="/series" onClick={() => clickHandler("270", "87")}>
          TV-Series
        </Link>
        <Link to="/about-us" onClick={() => clickHandler("404", "66")}>
          About
        </Link>

        <div className={style.searchBox}>
          <input
            type="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            placeholder="Enter Movies name"
          />
          <button className={style.searchBtn} onClick={getMovies}>
            <FontAwesomeIcon className={style.icon} icon={faSearch} />
          </button>
          {input && (
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={resetInput}
              className={style.trash}
            />
          )}

          <div className={style.searchResult}>
            {searchResult.map((item, i) => (
              <SearchCard data={item} key={i} reset={resetInput} />
            ))}
          </div>
        </div>

        <Link
          to="/watch-list"
          onClick={() => setGlass(["500", "0"])}
          title="watch list"
        >
          <FontAwesomeIcon className={style.icon} icon={faBookmark} />
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
