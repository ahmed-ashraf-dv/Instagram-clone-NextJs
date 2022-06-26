/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import style from "../../../styles/modal.module.scss";
import Avatar from "../../Avatar";
import CommentInput from "../../CommentInput";
import CommentsContainer from "../../CommentsContainer";
import PostFooter from "../../PostFooter";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/ModalSlice";
import { useRouter } from "next/router";

const PreviewPostModal = () => {
  const { currentData } = useSelector(({ ModalSlice }) => ModalSlice);
  const [isLove, setisLove] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const openProfile = (username) => {
    dispatch(closeModal());
    router.push(`/profile/${username}`);
  };

  // Like with double click
  const [clicks, setClick] = useState(0);
  const [love, setLove] = useState(false);

  useEffect(() => {
    if (clicks > 0) setTimeout(() => setClick(0), 1000);
  }, [clicks]);

  useEffect(() => {
    if (love) setTimeout(() => setLove(false), 1300);
  }, [love]);

  const checkDoubleClick = () => {
    setClick((prev) => prev + 1);

    if (clicks >= 1) {
      setClick(0);
      setisLove(true);
      setLove(true);
    }
  };

  return (
    <div className={`${style.previewPostContain} h-100`}>
      <div className={`${style.contain} flex-center align-items-start h-100`}>
        <div className={`${style.leftSide} w-50`}>
          <div className={`${style.headerDetails} p-3`}>
            <div
              onClick={() => openProfile(currentData?.user?.username)}
              className="details cu-pointer w-fit d-flex align-items-center ms-auto gap-3"
            >
              <p className={`${style.username}`}>
                • {currentData?.user?.username}
              </p>
              <Avatar src={currentData?.user?.avatar} />
            </div>
          </div>

          <CommentsContainer />
          <PostFooter disLike={() => setisLove(false)} isLike={isLove} />
          <CommentInput />
        </div>

        <div
          onClick={checkDoubleClick}
          className={`${style.postImg} w-50 h-100 position-relative`}
        >
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

          <img className="w-100 h-100" src={currentData?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PreviewPostModal;
