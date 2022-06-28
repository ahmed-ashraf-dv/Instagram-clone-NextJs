/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import style from "../../styles/post.module.scss";

const PostMain = ({ img, setisLove }) => {
  const [love, setLove] = useState(false);

  useEffect(() => {
    if (love) setTimeout(() => setLove(false), 1300);
  }, [love]);

  const checkDoubleClick = () => {
    setisLove(true);
    setLove(true);
  };

  return (
    <main onDoubleClick={checkDoubleClick} className={`${style.imgBox}`}>
      <div
        className={`postion-center flex-center w-100 h-100 ${style.loverHeart}`}
      >
        <img
          width="120"
          className={`${love ? style.heart : ""}`}
          src="/icons/love-heart.webp"
          alt=""
        />
      </div>
      <img src={img} alt="" className={`${style.imsPost}`} />
    </main>
  );
};

export default PostMain;
