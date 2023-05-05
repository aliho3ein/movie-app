import React from "react";
import style from "./../styles/components/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHouse, faRss } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.frameBase}>
        <div className={style.secondFrame}></div>
      </div>
      <div className={style.firstFrame}></div>
      <div className={style.siteMap}>
        <div className={style.footerColumn}>
          <div>
            <h2>
              <FontAwesomeIcon icon={faHouse} className={style.icon} />
              Site Map
            </h2>
            <ul>
              <li>Movies</li>
              <li>About us</li>
              <li>Top IMDb</li>
              <li>Jobs</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h2>
              <FontAwesomeIcon icon={faFilm} className={style.icon} />
              Top Genre
            </h2>
            <ul>
              <li>Action</li>
              <li>Sci-Fi</li>
              <li>Triller</li>
              <li>History</li>
            </ul>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faRss} className={style.icon} />
              New Project
            </h2>
            <ul>
              <li>articleCraft</li>
              <li>Online Shop</li>
              <li>Dashboard</li>
              <li>Online Marketing</li>
              <li>Pizzaria</li>
            </ul>
          </div>
        </div>

        <div className={style.footerColumn}>
          <p className={style.subscribe}>
            <h2>Subscribe</h2>
            Subscribe to Movie-App RSS Feed to receive updates on movies,
            tv-series and news
          </p>
          <input type="email" placeholder="Enter your Email" />
          <button>Submit</button>
        </div>
      </div>

      <p className={style.copyRight}>
        © 2023 Movies-app · Terms of Service · Privacy Policy Powered By
        aliho3ein
      </p>
    </footer>
  );
};

export default Footer;
