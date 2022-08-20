/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import SaveWordSize from "../SaveWordSize";

import style from "../../styles/post.module.scss";

import PostHeader from "./PostHeader";
import PostFooter from "../PostFooter";
import CommentInput from "../CommentInput";
import PostMain from "./PostMain";

import { useDispatch } from "react-redux";
import { openModal } from "../../store/ModalSlice";

const CAPTION_SIZE = 100;

const Post = ({ data, clientUsername, isVerified }) => {
  const [isLove, setisLove] = useState(false);

  const dispatch = useDispatch();

  // Open Post Modal
  const openPost = () => {
    const currentData = {
      img: data.img,
      caption: data.caption,
      user: data.user,
      createdAt: data.createdAt,
      postId: data.id,
      cuurentUsername: clientUsername,
    };

    dispatch(
      openModal({
        currentData,
        type: "Preview Post",
      })
    );
  };

  return (
    <article className={`${style.post} border ms-md-4 mb-4`}>
      <PostHeader
        isVerified={isVerified}
        clientUsername={clientUsername}
        avatar={data.user?.avatar}
        username={data.user?.username}
        postId={data.id}
        noDel={true}
      />
      <PostMain setisLove={setisLove} img={data.img} />
      <PostFooter
        disLike={() => setisLove(false)}
        isLike={isLove}
        createdAt={data.createdAt}
        openPost={openPost}
        reverse
      >
        <p className="username cu-pointer m-0 mb-1 fw-bold select-none">
          {data.username}
        </p>
        <SaveWordSize
          caption={data.caption}
          size={CAPTION_SIZE}
          className="bio caption mb-2 ms-1"
        />
      </PostFooter>
      <CommentInput />
    </article>
  );
};

export default Post;
