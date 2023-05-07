import React, { useEffect, useRef, useState } from "react";
import style from "./../styles/components/header.module.scss";
import Slider from "./slider";

const Header = ({ data }) => {
  const slidRef = useRef(null);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function nextSlide() {
    setIndex((lastIndex) => {
      return lastIndex === 2 ? 0 : lastIndex + 1;
    });
    slidRef.current.style.transform = `translateX(-${
      (slidRef.current?.offsetWidth / 3) * index
    }px)`;
  }

  return (
    <header className={style.header}>
      <div className={style.slideShow} ref={slidRef}>
        {data.map((slid, i) => {
          return <Slider key={i} data={slid} />;
        })}
      </div>
    </header>
  );
};

export default Header;

//slidRef.current?.offsetWidth / 3
