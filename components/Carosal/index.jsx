import React, { useEffect, useState } from "react";
import style from "../../styles/carosal.module.scss";

const Carosal = ({ children, delay = 2, transition = 2 }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    // For First Time Delay issui
    const DELAY = (firstTime ? delay : transition + delay) * 1000;

    if (firstTime) {
      setTimeout(() => {
        setCurrentImg(1);
        setFirstTime(false);
      }, DELAY);

      return;
    }

    setInterval(() => {
      setCurrentImg((prev) => (prev >= children.length - 1 ? 0 : prev + 1));
    }, DELAY);
  }, [delay, children, transition, firstTime]);

  return (
    <article className={`${style.carosalContainer}`}>
      {children.map((img, idx) => (
        <div
          key={idx}
          style={{ transition: `${transition}s` }}
          className={`${style.carosalEl} ${
            currentImg === idx ? style.active : ""
          }`}
        >
          {img}
        </div>
      ))}
    </article>
  );
};

export default Carosal;
