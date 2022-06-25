import React from "react";
import Avatar from "../Avatar";

const PostHeader = () => {
  return (
    <header className="cu-pointer d-flex align-items-center w-fit m-2">
      <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
      <p className="username m-0 ms-2">billieeilish</p>
    </header>
  );
};

export default PostHeader;
