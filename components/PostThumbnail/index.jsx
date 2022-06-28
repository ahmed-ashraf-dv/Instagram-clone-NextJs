/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../../styles/explore.module.scss";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { openModal } from "../../store/ModalSlice";

const PostThumbnail = ({ data, cuurentUsername }) => {
  const dispatch = useDispatch();

  const openModalPost = () => {
    const currentData = {
      img: data.img,
      caption: data.caption,
      user: data.user,
      createdAt: data.createdAt,
      postId: data.id,
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
      <div onClick={openModalPost} className={`${style.imgBox} img cu-pointer`}>
        <Image width="300" height="300" src={data.img} alt="Post" />

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
