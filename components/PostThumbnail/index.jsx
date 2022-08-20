/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/explore.module.scss";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { openModal } from "../../store/ModalSlice";
const server = process.env.NEXT_PUBLIC_API_LINK;

const PostThumbnail = ({ data, cuurentUsername, cuurentUser }) => {
  const dispatch = useDispatch();

  const openModalPost = () => {
    const currentData = {
      img: data.img,
      caption: data.caption,
      user: cuurentUser || data.user,
      createdAt: data.createdAt,
      postId: data.postId,
      cuurentUsername,
    };

    dispatch(
      openModal({
        currentData,
        type: "Preview Post",
      })
    );
  };

  return (
    <div className={`col-4 p-1 px-md-2 text-center ${style.postCard}`}>
      <div
        onClick={openModalPost}
        className={`${style.imgBox} post-box cu-pointer w-100 flex-center`}
      >
        <Image width={300} height={300} src={server + data.img} alt="Post" />

        <div className={`${style.opacityDrop} flex-center text-light`}>
          <div className={`${style.data} flex-center gap-4`}>
            <div className="comments flex-center gap-2">
              <p className="m-0">{data?.comments?.length || 0}</p>
              <img src="/icons/comment.svg" width={50} alt="" />
            </div>
            <div className="likes flex-center gap-2">
              <p className="m-0">{data?.loves || 0}</p>
              <img src="/icons/heart.svg" width={50} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostThumbnail;
