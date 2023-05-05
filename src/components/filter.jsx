import React, { useRef } from "react";
import style from "./../styles/components/filterSide.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Filter = () => {
  const filterRef = useRef(null);

  const goTop = (e) => {
    filterRef.current
      .querySelector(".activeFilter")
      ?.classList.remove("activeFilter");

    e.target.classList.add("activeFilter");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside className={style.aSide}>
      <div className={style.maniFilter} ref={filterRef}>
        <h2>Sort by</h2>
        <Link
          onClick={goTop}
          to="/?sort=release_date.desc"
          className={style.sortItem}
        >
          <FontAwesomeIcon icon={faClock} className={style.icon} />
          Latest
        </Link>
        <Link
          onClick={goTop}
          to="/?sort=revenue.desc"
          className={style.sortItem}
        >
          <FontAwesomeIcon icon={faEye} className={style.icon} />
          Most viewed
        </Link>
        <Link onClick={goTop} to="/?sort=vote_count" className={style.sortItem}>
          <FontAwesomeIcon icon={faHeart} className={style.icon} />
          Most favorite
        </Link>
        <h2>Type</h2>
        <div className={style.sortItem}>
          <input type="radio" name="type" id="typeAll" defaultChecked />
          <label htmlFor="typeAll">All</label>

          <input type="radio" name="type" id="typeMovie" />
          <label htmlFor="typeMovie">Movie</label>

          <input type="radio" name="type" id="typeTv" />
          <label htmlFor="typeTv">TV-show</label>
        </div>

        <h2>Release</h2>
        <div className={style.sortItem}>
          <input type="checkbox" name="release" id="released" defaultChecked />
          <label htmlFor="released">Released</label>

          <input type="checkbox" name="release" id="upComing" />
          <label htmlFor="upComing">Up coming</label>
        </div>
      </div>
    </aside>
  );
};

export default Filter;
