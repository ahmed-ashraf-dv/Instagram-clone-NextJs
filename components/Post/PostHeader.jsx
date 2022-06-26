import React from "react";
import Avatar from "../Avatar";

import Link from "next/link";

const PostHeader = ({ avatar, username }) => {
  return (
    <Link href={`/profile/${username}`}>
      <header className="cu-pointer d-flex align-items-center w-fit m-2">
        <Avatar src={avatar} />
        <p className="username m-0 ms-2">{username}</p>
      </header>
    </Link>
  );
};

export default PostHeader;
