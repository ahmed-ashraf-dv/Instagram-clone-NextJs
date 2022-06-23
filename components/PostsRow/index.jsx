import React from "react";
import PostThumbnail from "../PostThumbnail";
import style from "../../styles/explore.module.scss";

const PostsRow = ({ posts }) => {
  return (
    <div className={`row ${style.imgRow}`}>
      {posts.map((_, idx) => (
        <PostThumbnail
          key={idx}
          src="/289026658_539852937875491_5226162573037377417_n.jfif"
          commentsAmout={5000}
          heartsAmout={5000}
        />
      ))}
    </div>
  );
};

export default PostsRow;
