import React from "react";
import style from "./../styles/components/footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.frameBase}>
        <div className={style.secondFrame}></div>
      </div>
      <div className={style.firstFrame}></div>
    </footer>
  );
};

export default Footer;
