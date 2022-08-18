import React from "react";
import Avatar from "../Avatar";

import Link from "next/link";
import EditPostBtn from "../EditPostBtn";

const PostHeader = ({ avatar, username, postId, clientUsername }) => {
  return (
    <header className="flex-between m-2">
      <Link href={`/profile/${username}`}>
        <div className="user-data cu-pointer d-flex align-items-center w-fit">
          <Avatar src={avatar} />
          <p className="username m-0 ms-2">{username}</p>
        </div>
      </Link>

      <EditPostBtn
        postId={postId}
        clientUsername={clientUsername}
        puplisherUsername={username}
      />
    </header>
  );
};

export default PostHeader;
