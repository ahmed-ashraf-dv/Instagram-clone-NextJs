import React from "react";
import Avatar from "../Avatar";

const PostHeader = ({ avatar, username }) => {
  return (
    <header className="cu-pointer d-flex align-items-center w-fit m-2">
      <Avatar src={avatar} />
      <p className="username m-0 ms-2">{username}</p>
    </header>
  );
};

export default PostHeader;
