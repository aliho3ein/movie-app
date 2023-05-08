import React from "react";
import style from "./../styles/components/loading.module.scss";

const Loading = () => {
  return (
    <div className={style.mainLoading}>
      <div className={style.flip_square}></div>
    </div>
  );
};

export default Loading;
