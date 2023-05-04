import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as unStar } from "@fortawesome/free-regular-svg-icons";
import style from "./../styles/components/movieCard.module.scss";

/** create Vote */
export const setVote = (vote) => {
  const stars = [
    <FontAwesomeIcon icon={unStar} className={style.icon} />,
    <FontAwesomeIcon icon={unStar} className={style.icon} />,
    <FontAwesomeIcon icon={unStar} className={style.icon} />,
    <FontAwesomeIcon icon={unStar} className={style.icon} />,
    <FontAwesomeIcon icon={unStar} className={style.icon} />,
  ];

  if (vote % 2 !== 0) {
    stars.pop();
    stars.unshift(
      <FontAwesomeIcon icon={faStarHalfStroke} className={style.icon} />
    );
  }
  for (let i = 0; i < Math.floor(vote / 2); i++) {
    stars.pop();
    stars.unshift(<FontAwesomeIcon icon={faStar} className={style.icon} />);
  }
  return stars;
};
