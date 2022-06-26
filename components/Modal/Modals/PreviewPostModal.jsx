/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../../styles/modal.module.scss";
import Avatar from "../../Avatar";
import CommentInput from "../../CommentInput";
import CommentsContainer from "../../CommentsContainer";
import PostFooter from "../../PostFooter";

import { useSelector } from "react-redux";

const PreviewPostModal = () => {
  const { currentData } = useSelector(({ ModalSlice }) => ModalSlice);

  return (
    <div className={`${style.previewPostContain} h-100`}>
      <div className={`${style.contain} flex-center align-items-start h-100`}>
        <div className={`${style.leftSide} w-50`}>
          <div
            className={`${style.headerDetails} d-flex justify-content-end align-items-center gap-3 p-3`}
          >
            <p className={`${style.username}`}>
              • {currentData?.user?.username}
            </p>
            <Avatar src={currentData?.user?.avatar} />
          </div>

          <CommentsContainer />
          <PostFooter />
          <CommentInput />
        </div>

        <div className={`${style.postImg} w-50 h-100`}>
          <img className="w-100 h-100" src={currentData?.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PreviewPostModal;
