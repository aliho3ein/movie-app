import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as unStar } from "@fortawesome/free-regular-svg-icons";
import style from "./../styles/components/movieCard.module.scss";

/** create Vote */
export const setVote = (vote) => {
  const stars = [
    <FontAwesomeIcon key="5" icon={unStar} className={style.icon} />,
    <FontAwesomeIcon key="4" icon={unStar} className={style.icon} />,
    <FontAwesomeIcon key="3" icon={unStar} className={style.icon} />,
    <FontAwesomeIcon key="2" icon={unStar} className={style.icon} />,
    <FontAwesomeIcon key="1" icon={unStar} className={style.icon} />,
  ];

  if (vote % 2 !== 0) {
    stars.pop();
    stars.unshift(
      <FontAwesomeIcon key="6" icon={faStarHalfStroke} className={style.icon} />
    );
  }
  for (let i = 0; i < Math.floor(vote / 2); i++) {
    stars.pop();
    stars.unshift(
      <FontAwesomeIcon key={i} icon={faStar} className={style.icon} />
    );
  }
  return stars;
};
