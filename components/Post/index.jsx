/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import SaveWordSize from "../SaveWordSize";

import style from "../../styles/post.module.scss";

import PostHeader from "./PostHeader";
import PostFooter from "../PostFooter";
import CommentInput from "../CommentInput";
import PostMain from "./PostMain";

const CAPTION_SIZE = 100;

const Post = ({ data }) => {
  const [isLove, setisLove] = useState(false);

  return (
    <article className={`${style.post} border ms-md-4 mb-4`}>
      <PostHeader avatar={data.user?.avatar} username={data.user?.username} />
      <PostMain setisLove={setisLove} img={data.img} />
      <PostFooter
        disLike={() => setisLove(false)}
        isLike={isLove}
        createdAt={data.createdAt}
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
