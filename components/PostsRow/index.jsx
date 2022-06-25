import React from "react";
import PostThumbnail from "../PostThumbnail";
import style from "../../styles/explore.module.scss";

const PostsRow = ({ posts }) => {
  console.log(posts);
  return (
    <div className={`row ${style.imgRow}`}>
      {posts.map(({ id, img, loves, comments }) => (
        <PostThumbnail
          key={id}
          src={img}
          commentsAmout={comments}
          heartsAmout={loves}
        />
      ))}
    </div>
  );
};

export default PostsRow;
