/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import style from "../../../styles/modal.module.scss";

import Avatar from "../../Avatar";
import CommentInput from "../../CommentInput";
import CommentsContainer from "../../CommentsContainer";
import PostFooter from "../../PostFooter";
import EditPostBtn from "../../EditPostBtn";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/ModalSlice";
import { useRouter } from "next/router";

const server = process.env.NEXT_PUBLIC_API_LINK;

const PreviewPostModal = () => {
  const { currentData } = useSelector(({ ModalSlice }) => ModalSlice);
  const [isLove, setisLove] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  // To Foucs Comment Input
  const [focus, setFocus] = useState(false);

  const openProfile = (username) => {
    dispatch(closeModal());
    router.push(`/profile/${username}`);
  };

  // Like with double click
  const [love, setLove] = useState(false);

  useEffect(() => {
    if (love) setTimeout(() => setLove(false), 1300);
  }, [love]);

  const checkDoubleClick = () => {
    setisLove(true);
    setLove(true);
  };

  return (
    <div className={`${style.previewPostContain} h-100`}>
      <div className={`${style.contain} flex-center align-items-start h-100`}>
        <div className={`${style.leftSide} w-50`}>
          <div className={`p-3 ${style.headerDetails} flex-between`}>
            <EditPostBtn
              postId={currentData.postId}
              clientUsername={currentData.cuurentUsername}
              style={{ height: "20px" }}
              puplisherUsername={currentData.user.username}
            />

            <div className="userData">
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
          </div>

          <CommentsContainer />
          <PostFooter
            focusInput={() => setFocus(true)}
            disLike={() => setisLove(false)}
            isLike={isLove}
          />
          <CommentInput focus={focus} setFocus={setFocus} />
        </div>

        <div
          onDoubleClick={checkDoubleClick}
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

          <img className="w-100 h-100" src={server + currentData?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PreviewPostModal;
