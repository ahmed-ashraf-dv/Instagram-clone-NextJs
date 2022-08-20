import React from "react";

import Link from "next/link";
import Avatar from "../../../Avatar";

import style from "../../../../styles/navbar.module.scss";

const Result = ({ data }) => {
  console.log(data);
  return (
    <Link href={`/profile/${data.username}`}>
      <article
        onClick={() => console.log("first")}
        className={`cu-pointer p-3 d-flex gap-2 ${style.result}`}
      >
        <Avatar width={35} src={data.avatar} />

        <div className="user-data flex-center">
          <p>{data.username}</p>

          {data.isVerified && (
            <span
              style={{ transform: "scale(.8)" }}
              className="verified ms-1"
            />
          )}
        </div>
      </article>
    </Link>
  );
};

export default Result;
