import React from "react";
import Avatar from "../Avatar";

import Link from "next/link";
import EditPostBtn from "../EditPostBtn";

const PostHeader = ({
  avatar,
  username,
  postId,
  clientUsername,
  isVerified,
  noDel
}) => {
  return (
    <header className="flex-between m-2">
      <Link href={`/profile/${username}`}>
        <div className="user-data cu-pointer d-flex align-items-center w-fit">
          <Avatar src={avatar} />

          <div className="user-data flex-center">
            <p className="username m-0 ms-2">{username}</p>

            {isVerified && (
              <span
                style={{ transform: "scale(.8)" }}
                className="verified ms-1 mt-1"
              />
            )}
          </div>
        </div>
      </Link>

      <EditPostBtn
        noDel={noDel}
        postId={postId}
        clientUsername={clientUsername}
        puplisherUsername={username}
      />
    </header>
  );
};

export default PostHeader;
