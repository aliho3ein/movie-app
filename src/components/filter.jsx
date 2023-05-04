import React from "react";
import style from "./../styles/components/filterSide.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  return (
    <aside className={style.aSide}>
      <div className={style.maniFilter}>
        <h2>Sort by</h2>
        <div className={style.sortItem}>
          <FontAwesomeIcon icon={faClock} className={style.icon} />
          Latest
        </div>
        <div className={style.sortItem}>
          <FontAwesomeIcon icon={faEye} className={style.icon} />
          Most viewed
        </div>
        <div className={style.sortItem}>
          <FontAwesomeIcon icon={faHeart} className={style.icon} />
          Most favorite
        </div>
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
