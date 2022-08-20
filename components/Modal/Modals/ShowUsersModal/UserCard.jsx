import React from "react";

import Link from "next/link";
import Avatar from "../../../Avatar";

import { closeModal } from "../../../../store/ModalSlice";
import { useDispatch } from "react-redux";

const server = process.env.NEXT_PUBLIC_API_LINK;

const UserCard = ({ data }) => {
  const dispatch = useDispatch();

  const sliceBio = (bio) => {
    const BIO_SIZE = 10;

    if (bio.length <= BIO_SIZE) return bio;

    return `${bio.slice(0, BIO_SIZE)}...`;
  };

  const closeModal_ = () => {
    dispatch(closeModal());
  };

  return (
    <Link href={`/profile/${data.username}`}>
      <article
        onClick={closeModal_}
        className="w-fit me-auto cu-pointer px-3 py-2 flex-start gap-3"
      >
        <Avatar width={40} src={data.avatar} />
        <div className="data">
          <p className="username small fw-bold">{data.username}</p>
          <p className="bio small fw-200">{sliceBio(data.bio || "No Bio")}</p>
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
