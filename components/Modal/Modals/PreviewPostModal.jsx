/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../../styles/modal.module.scss";
import Avatar from "../../Avatar";
import CommentInput from "../../CommentInput";
import CommentsContainer from "../../CommentsContainer";
import PostFooter from "../../PostFooter";

const PreviewPostModal = () => {
  return (
    <div className={`${style.previewPostContain} h-100`}>
      <div className={`${style.contain} flex-center align-items-start h-100`}>
        <div className={`${style.leftSide} w-50`}>
          <div
            className={`${style.headerDetails} d-flex justify-content-end align-items-center gap-3 p-3`}
          >
            <p className={`${style.username}`}>• username</p>
            <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
          </div>

          <CommentsContainer />
          <PostFooter />
          <CommentInput />
        </div>

        <div className={`${style.postImg} w-50 h-100`}>
          <img
            className="w-100 h-100"
            src="/289026658_539852937875491_5226162573037377417_n.jfif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewPostModal;
